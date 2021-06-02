import React, { useState ,useEffect} from "react";
import Header from "./Header.js";
import Form from "./Form.js";
import Todo from "./Todolist.js";
import "./App.css";
const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos"))||[];
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState(initialState);
	const [editing, setEditing] = useState(false);
	 
	useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos));
	},[todos]);
	return (
		<div className="container">
			<div className="wrapper">
				<div>
					<Header />
				</div>
				<div>
					<Form
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						 editing={editing}
						 setEditing={setEditing}
/>
				</div>
				<div>
					
					<Todo todos={todos} setTodos={setTodos} setEditing={setEditing} />
				</div>
				<div>
					</div>
			</div>
		</div>
	);
};

export default App;
