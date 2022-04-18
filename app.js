const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const Link = document.querySelector("a");

function onLoginSubmit(event){
    const value = loginInput.value;
    event.preventDefault;
   console.log(value);
}

function handleLinkClick(event){
    alert("click!!")
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
Link.addEventListener("click",handleLinkClick );
