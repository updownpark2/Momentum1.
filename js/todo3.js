const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-form input")
let todoArray = [];

function submit(event){
    event.preventDefault();
    const Value = todoInput.value;
    todoInput.value=""
    const ValueObj = {text:Value,
    id: Date.now()}
    todoArray.push(ValueObj);
    paint(ValueObj);
    localStorage.setItem("todotodo",JSON.stringify(todoArray));

}
const savedArray = localStorage.getItem("todotodo")
if(savedArray!==null){
    const parseArray = JSON.parse(savedArray);
    parseArray.forEach(paint);
    todoArray=parseArray;
}
function REMOVE(event){
    const target = event.target.parentElement;
    target.remove();
    console.log(target.id)
    
 console.dir(event.target)
}

function paint(Value){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.id = Value.id;
    const span = document. createElement("span")
    const button = document.createElement("button")
    li.innerText = Value.text
    button.innerText = "❌"
    ul.appendChild(span);
    span.appendChild(li);
    li.appendChild(button);
    button.addEventListener("click",REMOVE);
    }


todoForm.addEventListener("submit",submit)
