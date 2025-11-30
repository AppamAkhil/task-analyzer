const API_BASE = 'http://127.0.0.1:8000/api/tasks';

export async function analyzeTasks(tasks) {
  const resp = await fetch(`${API_BASE}/analyze/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tasks)
  });
  if (!resp.ok) throw new Error('API error');
  return await resp.json();
}

export async function suggestTasks(tasks) {
  const resp = await fetch(`${API_BASE}/suggest/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tasks)
  });
  if (!resp.ok) throw new Error('API error');
  return await resp.json();
}
