const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = todoForm.querySelector("ul");

function paintTodo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❎";
    deleteBtn.addEventListener("click",deleteTodo);
    
    list.appendChild(span);
    list.appendChild(deleteBtn);
    todoList.appendChild(list);
}

const TODOS_KEY = "todos"
let toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function addTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodo();
}


todoForm.addEventListener("submit",addTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parseTodos = JSON.parse(savedTodos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}

