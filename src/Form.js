import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input,setInput,todos,setTodos}) => {
   const onInputChange=(e)=>{
       setInput(e.target.value);
   };
   const onFormSbmit=(e)=>{
  e.preventDefault();
  setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
 setInput("");   
};
    return (
        <div>
            <form onSubmit={onFormSbmit} >
                <input type ="text"  className="taskinput" value={input} required
                 onChange={onInputChange}  />
                <button className="addtask" type="submit"> Add</button>
            </form>
        </div>
    )
}

export default Form;
