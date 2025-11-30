import json
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .scoring import calculate_task_score

@csrf_exempt
def analyze_tasks(request):
    if request.method != 'POST':
        return HttpResponseBadRequest('Use POST')
    try:
        payload = json.loads(request.body.decode('utf-8'))
    except Exception:
        return HttpResponseBadRequest('Invalid JSON')

    if isinstance(payload, dict) and payload.get('tasks'):
        tasks = payload['tasks']
    elif isinstance(payload, list):
        tasks = payload
    else:
        return HttpResponseBadRequest('JSON should be an array of tasks or {"tasks": [...]}')

    results = []
    for t in tasks:
        scored = calculate_task_score(t)
        item = dict(t)
        item['_score'] = scored['score']
        item['_reasons'] = scored['reasons']
        item['_normalized'] = scored['normalized']
        results.append(item)

    results_sorted = sorted(results, key=lambda x: x['_score'], reverse=True)
    return JsonResponse(results_sorted, safe=False)

@csrf_exempt
def suggest_tasks(request):
    resp = analyze_tasks(request)
    if resp.status_code != 200:
        return resp
    try:
        body = resp.content
        data = json.loads(body)
    except Exception:
        return HttpResponseBadRequest('Failed to parse internal response')

    top3 = data[:3]
    explanation = []
    for t in top3:
        explanation.append({
            'title': t.get('title'),
            'score': t.get('_score'),
            'why': ' | '.join(t.get('_reasons', [])[:2])
        })
    return JsonResponse({'top': explanation}, safe=False)
