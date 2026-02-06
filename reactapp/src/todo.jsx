import { useState } from "react";
function Todo() {
    const[inputTodo,setInputTodo]=useState(''); 
    const [todos, setTodos] = useState([]);

    function addTodo(){
        if(!todoInput){
            alert("Please enter a todo");
        }
        setTodos([...todos,inputTodo]); //(...todos,inputTodo)->spread operator:- it'll add new value to existing array from previous state
        setTodoInput(''); // Clear the input field after adding a todo
    }

    return(
        <div>
            <input type="text" value={todoInput} onChange={(e) =>setTodoInput(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>

            <h2>Your Todos</h2>
            {todos.map((todo,index)=>(
                <p key={index}>{todo}</p>
            ))}
            </div>
    )
}

export default Todo;