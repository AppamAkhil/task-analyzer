from datetime import date, datetime

def parse_date(d):
    if d is None:
        return None
    if isinstance(d, date):
        return d
    for fmt in ('%Y-%m-%d', '%d-%m-%Y', '%Y/%m/%d'):
        try:
            return datetime.strptime(d, fmt).date()
        except Exception:
            continue
    try:
        return date.fromisoformat(d)
    except Exception:
        return None

def calculate_task_score(task_data, today=None, weights=None):
    if today is None:
        today = date.today()
    if weights is None:
        weights = {
            'overdue': 100,
            'very_soon': 50,
            'importance': 5,
            'quick_win': 10,
            'effort_penalty': 0.5,
            'dependency_penalty': 20,
        }

    score = 0.0
    reasons = []

    importance = min(max(int(task_data.get('importance', 5) or 5), 1), 10)
    estimated_hours = max(int(task_data.get('estimated_hours', 1) or 1), 0)
    deps = task_data.get('dependencies') or []

    due_date_raw = task_data.get('due_date')
    due_date = parse_date(due_date_raw)

    if due_date is None:
        score += importance * weights['importance'] * 0.6
        reasons.append('no due date: weighted importance applied')
    else:
        days_until_due = (due_date - today).days
        if days_until_due < 0:
            score += weights['overdue']
            reasons.append(f'OVERDUE by {-days_until_due} day(s)')
        elif days_until_due <= 3:
            score += weights['very_soon']
            reasons.append(f'due in {days_until_due} day(s)')
        else:
            urgency_score = max(0, (30 - days_until_due))
            score += urgency_score
            reasons.append(f'urgency scaled: {urgency_score}')

    imp_score = importance * weights['importance']
    score += imp_score
    reasons.append(f'importance contrib: {imp_score}')

    if estimated_hours <= 2:
        score += weights['quick_win']
        reasons.append('quick win bonus')
    else:
        effort_pen = estimated_hours * weights['effort_penalty']
        score -= effort_pen
        reasons.append(f'effort penalty: -{effort_pen}')

    if deps:
        dep_pen = len(deps) * weights['dependency_penalty']
        score -= dep_pen
        reasons.append(f'dependency penalty: -{dep_pen}')

    if score < 0:
        score = 0.0

    return {
        'score': round(score, 3),
        'reasons': reasons,
        'normalized': {
            'importance': importance,
            'estimated_hours': estimated_hours,
            'dependencies': deps,
            'due_date': due_date.isoformat() if due_date else None,
        }
    }
