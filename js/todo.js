const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input")

let todoArray = [];

function removeList(event){
    const li = event.target.parentElement;
    li.remove();
}


    



function handleToDoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value=""
    const li =document.createElement("li")
const span = document.createElement("span");
span.innerText = newtodo
const button = document.createElement("button");
button.innerText = "X"
button.addEventListener("click", removeList);
li.appendChild(span);
li.appendChild(button);
todoList.appendChild(li);
    todoArray.push(newtodo);
    localStorage.setItem("Array",JSON.stringify(todoArray));
}
todoForm.addEventListener("submit", handleToDoSubmit);

function sayhello(item){
    console.log("hello",item);

}

function paintlist(newtodo){
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

const savedTodo = localStorage.getItem("Array");


if(savedTodo !== null){
   const parsedTodo = JSON.parse(savedTodo)
   todoArray = parsedTodo
   parsedTodo.forEach(paintlist);
}

