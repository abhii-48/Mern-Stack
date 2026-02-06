import { useState } from 'react'
import Message from './message'
import User from './user'
import './App.css'

function App() {

   let name='Abhishek';
  //  let count=0;

  const [count, setCount] = useState(0);
  const [inputValue,setInputValue]=useState(''); 
  
  // function inscCount(){
  //   count +=1;
  //   console.log(count);
  // }


  return (
        <>
        <h1>hELLO WORLD</h1>
        <p>hello {name} </p>
        <Message />
        <p>Count: {count}</p>
        <User/>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        <input type="text" onChange={(e)=> setInputValue(e.target.value)}/>
        <p>Input value :{inputValue}</p>
        
        </>

      
  )
}





export default App
