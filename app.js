const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit (event){
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);

onLoginSubmit();

// 링크
const link=document.querySelector("a");

function handleLinkClick(){
    alert("click");
}

link.addEventListener("click",handleLinkClick);