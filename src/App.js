import './App.css';
import { useState } from 'react';

const styleHeader = {
  color: 'red',
  lineHeight: 2,
  textAlignLast: 'center'
}

const styleCount = {
  color: 'blue',
  textAlignLast: 'center'
}

const styleButtons = {
  textAlignLast: 'center'
}

const marginButtons = {
  margin: '20px'
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>    
      <h1 style={styleHeader}>How many times has Kevin accidentally called the groupchat?</h1>
        <div>
          <h2 style={styleCount}>{count}</h2>
        </div>
      <div style={styleButtons}>
        <button  style={marginButtons} className="btn btn-primary" onClick={() => setCount(count + 1)}>
          He did it again
        </button>
        <button style={marginButtons} className="btn btn-secondary" onClick={() => setCount(count - 1)}>
          Whoops
        </button>
      </div>
    </>
  );
}

export default App;
