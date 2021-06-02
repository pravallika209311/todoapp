import React,{useEffect} from 'react';
import {v4 as uuidv4} from "uuid";


const Form = ({input,setInput,todos,setTodos,editing,setEditing}) => {
    
    const updatedata=(title,id,completed)=>{
   const newTodo = todos.map((todo)=>
       todo.id===id?{title,id,completed}:todo

   );
   setTodos(newTodo);
setEditing("")
    }
    useEffect(()=>{
    if(editing){
setInput(editing.title);

    }
    else{
setInput("");
    }
    },[setInput,editing]);
   const onInputChange=(e)=>{
       setInput(e.target.value);
   };
   const onFormSbmit=(e)=>{
  e.preventDefault();
if(!editing){
  setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
 setInput("");
}
 else{
updatedata(input,editing.id,editing.completed)
 }
   
};
    return (
        <div>   
            <form onSubmit={onFormSbmit} >
                <input type ="text"  className="taskinput" value={input}
                 onChange={onInputChange}  />
               
                 <button className="addtask" type="submit"> {editing ? "OK":"Add"}</button>
                 
            </form>
        </div>

    )
}

export default Form;
