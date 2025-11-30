from django.test import TestCase
from .scoring import calculate_task_score
from datetime import date, timedelta

class ScoringTests(TestCase):
    def test_overdue(self):
        t = {'title':'a','due_date': (date.today()-timedelta(days=2)).isoformat(), 'importance':5, 'estimated_hours':1}
        r = calculate_task_score(t)
        self.assertGreaterEqual(r['score'], 100)

