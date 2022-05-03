const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-form input")
let array = [];
function saveTodos(){
    localStorage.setItem("todolist",JSON.stringify(array));
}
function submit(event){
event.preventDefault();
const todoValue = todoInput.value;
todoInput.value=""
const todoValueObj = {text:todoValue,id:Date.now()}
paintTodo(todoValueObj);
array.push(todoValueObj);
localStorage.setItem("todolist",JSON.stringify(array))

}
const savedarray = localStorage.getItem("todolist")
if(savedarray!==null){
    const supersavedarray = JSON.parse(savedarray);
    supersavedarray.forEach(paintTodo);
    array=supersavedarray;

}

function paintTodo(todoValueObj){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.id = todoValueObj.id
    const span = document.createElement("span")
    const button = document.createElement("button");
    li.innerText = todoValueObj.text
    button.innerText = "X"
    ul.appendChild(span)
    span.appendChild(li)
    li.appendChild(button);
    button.addEventListener("click",estimate);
}
function estimate(event){
    const target = event.target.parentElement;
    target.remove();
  console.log(parseInt(target.id))
  function rearray(array){return array.id!==parseInt(target.id)}
  array= array.filter(rearray);
  saveTodos()
}
todoForm.addEventListener("submit", submit)