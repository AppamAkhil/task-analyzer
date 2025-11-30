import React from 'react';
import TaskCard from './TaskCard';

export default function TaskList({tasks}){
  return (
    <div>
      <h3>Results</h3>
      {tasks.length === 0 && <div>No tasks yet</div>}
      {tasks.map((t, idx)=> <TaskCard key={idx} task={t} />)}
    </div>
  );
}
