import React, {useState} from 'react';
import './App.css'; 

function App() {
  const [counter, setCounter] = useState(10);

function increaseCounter (){
  setCounter (counter+1);
  return counter;
}
function decreaseCounter (){
  setCounter (counter-1);
  return counter;
}
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <button onClick={()=>{increaseCounter()}}>
        Increase Counter
        </button>
        <button onClick={()=>{decreaseCounter()}}>
        Decrease Counter
        </button>
      </div>
      <p>{counter}</p>
    </div>
  );
}

export default App;
