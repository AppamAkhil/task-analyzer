import React, {useState} from 'react';
import {TextArea} from '../styles';

export default function TaskInput({onAnalyze, onSuggest}){
  const [text, setText] = useState(JSON.stringify([{
    title: 'Sample task',
    due_date: null,
    importance: 7,
    estimated_hours: 2,
    dependencies: []
  }], null, 2));

  return (
    <div>
      <h3>Paste tasks JSON</h3>
      <TextArea value={text} onChange={e=>setText(e.target.value)} />
      <div style={{marginTop:12}}>
        <button onClick={()=>{
          try{
            const parsed = JSON.parse(text);
            onAnalyze(parsed);
          }catch(e){ alert('Invalid JSON'); }
        }}>Analyze</button>
        <button style={{marginLeft:8}} onClick={()=>{
          try{ onSuggest(JSON.parse(text)); } catch(e){ alert('Invalid JSON'); }
        }}>Suggest Top 3</button>
      </div>
    </div>
  );
}
