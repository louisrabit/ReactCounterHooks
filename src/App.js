import React, {useState, useEffect} from 'react';
//useEffect to save number on the page 
import './App.css';

function App() {
  const [counter, setCounter] = useState(100);

  //controlled input
  //connect the value with state variable
  const [inputVal, setInputVal] = useState("");

  
// fire once , on begining
  useEffect(() => {
    localStorage.getItem("counter"); 
    }, []);


//save Number 
useEffect(() => {
localStorage.setItem("counter", counter.toString()); 
}, [counter]);


//make the code more dry
const setCounterValue = (value) => () =>{
  setCounter(value)
};

//extrat onchange input

const hadleInputChange = (e) => {
  setInputVal(e.target.value);
};

const handleUpdateValue = () => {
const value = Number(inputVal);
if (isNaN(value)){
  setInputVal("");
}else{
  setCounter(value);
  setInputVal("");
}
}

  return (
    <div className="App">
     <h1> React Counter</h1>

     <h2>{counter}</h2>
    <div>
      <button onClick={(setCounterValue)(counter - 1)} >-1</button>
     <button onClick={(setCounterValue)(0)}>reset</button>
     <button onClick={(setCounterValue)(counter + 1)} >+1</button>
     </div> 

<div>
  <input  onChange={hadleInputChange} value={inputVal} />
  <button onClick={handleUpdateValue}>Update</button>
</div>



    </div>



   /*   <h2>{counter}</h2>
    <div>
      <button onClick={()=> setCounter(counter - 1)} >-1</button>
     <button onClick={()=> setCounter(0)}>reset</button>
     <button onClick={()=> setCounter(counter + 1)} >+1</button>
     </div> 
    </div> */
  );
}

export default App;
