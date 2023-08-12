import './App.css';
import { useState,useRef } from 'react';

function App() {
  // const nameRef = useRef(null);
  const [age,setAge] = useState(0);
  const [name,setName] = useState("");
  // const handleSubmit = ()=>{
  //   alert(nameRef.current.value);
  // }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <>
      {/* <div>
        <form onSubmit = {handleSubmit}>
          <label for="name">Name</label>
          <input type="text" ref={nameRef}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="age">What's your age?</label><br/>
          <input type="number" id='age' value={age} onChange={(e)=>{setAge(e.target.value)}} /><br/>
          <label htmlFor="name">What's your name?</label><br/>
          <input type="text" id='name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
          <button disabled={!name || !age} type='submit'>Submit</button>
        </form>
        <h3>Your age: {age}</h3>
    </>
  );
}

export default App;
