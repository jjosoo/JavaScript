const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem("username");


if(savedUsername === null){
    function onLoginSubmit (event){
        event.preventDefault();
        const username = loginInput.value;
    
        localStorage.setItem(USERNAME_KEY,username);
    
        loginForm.classList.add(HIDDEN_CLASSNAME);
        
        // greeting.innerText = "Hello " + username;
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
}else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello "+localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinkClick);



