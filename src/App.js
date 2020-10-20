import React, { useState } from 'react';
import Text from "./components/TextInput"
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? "dayLight" : ""}`}>
      <h2>Hello {isMorning ? "Morning" : "Night"}</h2>
      <button onClick={()=> setMorning(!isMorning)}>day Change</button>
      <h3>This is a counter {count}</h3>
      <button onClick={() => setCount(++count)}>Update</button>
      <h3>Hello world its a react props practice</h3>
      <Text day="Tuesday" />
      <Text day="Monday" />
    </div>
  );
}

export default App;
