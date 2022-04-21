const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const firstmention = document.querySelector("h1");
function submit(tomato){
    tomato.preventDefault();
    console.log(loginInput.value);
    loginForm.classList.add("hidden");
    firstmention.innerText = "Hello " + loginInput.value;
  firstmention.classList.remove("hidden");
  localStorage.setItem("username", loginInput.value);
  console.log(localStorage.getItem("username"));

}





const savedusername = localStorage.getItem("username")

if(savedusername === null )
{ loginForm.classList.remove("hidden") 
loginForm.addEventListener("submit", submit);
}
else{
  firstmention.classList.remove("hidden");
  firstmention.innerText = "Hello " + savedusername;
}