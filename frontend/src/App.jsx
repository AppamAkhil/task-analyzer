import React, {useState} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import {analyzeTasks, suggestTasks} from './api';
import {Container, Panel} from './styles';

export default function App(){
  const [results, setResults] = useState([]);
  const [suggest, setSuggest] = useState(null);

  async function handleAnalyze(tasks){
    try{
      const res = await analyzeTasks(tasks);
      setResults(res);
    }catch(e){ alert('Failed to analyze: '+e.message); }
  }

  async function handleSuggest(tasks){
    try{
      const res = await suggestTasks(tasks);
      setSuggest(res);
      alert('Top suggestions in console');
      console.log(res);
    }catch(e){ alert('Suggest failed: '+e.message); }
  }

  return (
    <Container>
      <Panel>
        <TaskInput onAnalyze={handleAnalyze} onSuggest={handleSuggest} />
      </Panel>

      <Panel>
        <TaskList tasks={results} />
        {suggest && (
          <div style={{marginTop:16}}>
            <h4>Suggested Top 3</h4>
            <pre>{JSON.stringify(suggest, null, 2)}</pre>
          </div>
        )}
      </Panel>
    </Container>
  );
}
