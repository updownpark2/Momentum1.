const doFrom = document.querySelector(".todo-form")
const doInput = document.querySelector(".todo-form input")
let doArray = [];
function submit(event){
event.preventDefault();
const doValue = doInput.value;
doInput.value=""
Paint(doValue);
doArray.push(doValue);
localStorage.setItem("dolist", JSON.stringify(doArray));

}
const savedArray = localStorage.getItem("dolist")
if(savedArray !==null){
    const goArray = JSON.parse(savedArray);
    doArray=goArray;
    goArray.forEach(Paint);
}

function sak(event){
const red = event.target.parentElement;
red.remove();
}

function Paint(doValue){
const ul = document.querySelector("ul")
const li = document.createElement("li")
const span = document.createElement("span")
const button = document.createElement("button")
li.innerText = doValue;
button.innerText= "🙅‍♂️";
button.addEventListener("click", sak);
ul.appendChild(li);
li.appendChild(span);
span.appendChild(button);
}


doFrom.addEventListener("submit",submit);
console.dir(localStorage.getItem("dolist"))