import React from 'react';

const Todolist=({todos,setTodos,setEditing})=>{
const handleDelete=({id})=>{
setTodos(todos.filter((todo)=>todo.id!==id))
}
const handleCompleted=(todo)=>{
setTodos(
  todos.map((item)=>{
    if(item.id===todo.id){
     return {...item, completed:!item.completed};
    }
    return item;
    })
  );
};
const handleEdit=({id})=>{
  const findTodo = todos.find((todo)=>todo.id===id);
  setEditing(findTodo);
}


return(
  <div>
{todos.map((todo)=>(
<li className="todolist" key={todo.id}>
<input type="text" value={todo.title} 
className={`list ${todo.completed ? "complete":""}`} onChange={(e)=>e.preventDefaut()}/>
<div>
<button className="button-complete task-button" onClick={()=>handleCompleted(todo)}>
  <i className="fa fa-check-circle"></i>
  </button>
  <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
  <i className="fa fa-edit"></i>
  </button>
  <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
  <i className="fa fa-trash"></i>
  </button>
</div>

</li>
))}
  </div>
);
};
export default Todolist;