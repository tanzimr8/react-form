import './App.css';
import { useRef } from 'react';

function App() {
  const nameRef = useRef(null);
  const handleSubmit = ()=>{
    alert(nameRef.current.value);
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label for="name">Name</label>
        <input type="text" ref={nameRef}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
