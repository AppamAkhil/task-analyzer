import React from 'react';

function colorForScore(score){
  if(score >= 100) return '#ff4d4f';
  if(score >= 50) return '#ff7a45';
  if(score >= 20) return '#ffd666';
  return '#73d13d';
}

export default function TaskCard({task}){
  return (
    <div style={{borderLeft:`8px solid ${colorForScore(task._score)}`, padding:12, marginBottom:12}}>
      <h4>{task.title}</h4>
      <div>Score: <strong>{task._score}</strong></div>
      <div>Due: {task._normalized && task._normalized.due_date}</div>
      <div>Importance: {task._normalized && task._normalized.importance}</div>
      <div>Estimated Hours: {task._normalized && task._normalized.estimated_hours}</div>
      <details style={{marginTop:6}}>
        <summary>Why?</summary>
        <ul>
          { (task._reasons||[]).map((r,i)=>(<li key={i}>{r}</li>)) }
        </ul>
      </details>
    </div>
  );
}
