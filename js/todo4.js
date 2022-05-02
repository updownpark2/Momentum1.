const todoform = document.querySelector(".todo-form")
const todoinput = document.querySelector(".todo-form input")
let powerarray =[];
function inject(event){
    event.preventDefault();
   const todovalue = todoinput.value;
   todoinput.value="" 
const idid = {text:todovalue,id:Date.now()}
art(idid);
powerarray.push(idid)
localStorage.setItem("TextId", JSON.stringify(powerarray));
}
const saveIf = localStorage.getItem("TextId")
if(saveIf !== null){
    const jsonparse = JSON.parse(saveIf);
    jsonparse.forEach(art);
    powerarray = jsonparse


}

function art(todovalue){
    const ul = document.querySelector("ul")
const li = document.createElement("li")
li.id = powerarray.id
const span = document.createElement("span")
const button = document.createElement("button")
li.innerText = todovalue.text;
button.innerText = "X"
ul.appendChild(span)
span.appendChild(li)
li.appendChild(button)
button.addEventListener("click",remove);
}
function remove(event){
    const target = event.target.parentElement;
    target.remove();
}


todoform.addEventListener("submit", inject)