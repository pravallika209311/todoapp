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
<<<<<<< HEAD
            <form onSubmit={onFormSbmit} >
                <input type ="text"  className="taskinput" value={input} required
                 onChange={onInputChange}  />
=======
            <form>
                <input type ="text"  className="taskinput"/>
>>>>>>> 849a7d0aa36dd24bb5e79f2e58708c219a6e96b8
                <button className="addtask" type="submit"> Add</button>
            </form>
        </div>
    )
}

export default Form;
