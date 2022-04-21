const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input")

const todoArray = [];

function removeList(event){
    const li = event.target.parentElement;
    li.remove();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value=""
    todoArray.push(newtodo);
    localStorage.setItem("Array",JSON.stringify(todoArray));
    const li =document.createElement("li")
const span = document.createElement("span");
span.innerText = newtodo
const button = document.createElement("button");
button.innerText = "X"
button.addEventListener("click", removeList);
li.appendChild(span);
li.appendChild(button);
todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleToDoSubmit);
