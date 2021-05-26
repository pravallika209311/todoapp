import React,{useState} from 'react';
import Header from './Header.js';
import Form from './Form.js';
import Todolist from './Todolist.js'
import  './App.css';
const App = () => {
  const [input,setInput]=useState("");
const[todos,setTodos] = useState([]);
  return (
    <div className="container">
      <div className="wrapper">
      <div><Header /></div>
      <div><Form 
      input={input}
      setInput={setInput}
      todos={todos} 
      setTodos={setTodos}
      /></div>
      <div> <Todolist todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
  )
}

export default App;
