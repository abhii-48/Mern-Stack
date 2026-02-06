// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// let currentFilter = "all";

// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function addTodo() {
//     const input = document.getElementById("todoInput");
//     const text = input.value.trim();

//     if (text === "") {
//         alert("Enter a task");
//         return;
//     }

//     todos.push({ text, completed: false });
//     input.value = "";
//     saveTodos();
//     displayTodos();
// }

// function displayTodos() {
//     const list = document.getElementById("todoList");
//     list.innerHTML = "";

//     let filteredTodos = todos.filter(todo => {
//         if (currentFilter === "completed") return todo.completed;
//         if (currentFilter === "pending") return !todo.completed;
//         return true;
//     });

//     filteredTodos.forEach((todo, index) => {
//         const li = document.createElement("li");

//         li.innerHTML = `
//             <span class="${todo.completed ? 'completed' : ''}"
//                   onclick="toggleComplete(${index})">
//                   ${todo.text}
//             </span>
//             <div class="actions">
//                 <button class="edit" onclick="editTodo(${index})">Edit</button>
//                 <button class="delete" onclick="deleteTodo(${index})">Del</button>
//             </div>
//         `;

//         list.appendChild(li);
//     });

//     updateCount();
// }

// function toggleComplete(index) {
//     todos[index].completed = !todos[index].completed;
//     saveTodos();
//     displayTodos();
// }

// function deleteTodo(index) {
//     todos.splice(index, 1);
//     saveTodos();
//     displayTodos();
// }

// function editTodo(index) {
//     const newText = prompt("Edit your task:", todos[index].text);
//     if (newText !== null && newText.trim() !== "") {
//         todos[index].text = newText.trim();
//         saveTodos();
//         displayTodos();
//     }
// }

// function filterTodos(type) {
//     currentFilter = type;
//     displayTodos();
// }

// function clearAll() {
//     if (confirm("Delete all todos?")) {
//         todos = [];
//         saveTodos();
//         displayTodos();
//     }
// }

// function updateCount() {
//     const completed = todos.filter(t => t.completed).length;
//     document.getElementById("count").innerText =
//         `Total: ${todos.length} | Completed: ${completed}`;
// }

// displayTodos();







// var todos = [];

// var input = document.getElementById("todoInput");
// var list = document.getElementById("todoList");
// var countText = document.getElementById("count");

// function addTodo() {
//     var task = input.value;

//     if (task === "") {
//         alert("Please enter a task");
//         return;
//     }

//     todos.push(task);
//     input.value = "";
//     showTodos();
// }


// function showTodos() {
//     list.innerHTML = "";

//     for (var i = 0; i < todos.length; i++) {
//         var li = document.createElement("li");

//         var span = document.createElement("span");
//         span.innerText = todos[i];

//         var delBtn = document.createElement("button");
//         delBtn.innerText = "Delete";
//         delBtn.className = "delete";

//         delBtn.onclick = function () {
//             deleteTodo(this);
//         };

//         li.appendChild(span);
//         li.appendChild(delBtn);
//         list.appendChild(li);
//     }

//     countText.innerText = "Total Todos: " + todos.length;
// }

// function deleteTodo(button) {
//     var li = button.parentElement;
//     var text = li.firstChild.innerText;

//     var index = todos.indexOf(text);
//     todos.splice(index, 1);

//     showTodos();
// }

// function filterTodos(type) {
//     showTodos();
// }


// function clearAll() {
//     todos = [];
//     showTodos();
// }




const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#todos');

let todos = [];

function saveTodos () {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos () {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index )=> {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const deleteBtn = document.createElement('button');

        p.innerText = todo;
        deleteBtn.innerText = 'Delete'
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
            // li.remove();
        })
        li.append(p, deleteBtn);
        list.append(li);
        })
}

addBtn.addEventListener('click', () => {
    const inputText = input.value.trim();
    input.value = '';
    if(!inputText) {
        alert('Input field is required!');
        return;
    }
    todos.push(inputText);
    saveTodos();
    renderTodos();   
})


getTodos();
renderTodos();