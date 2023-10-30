const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 링크
const link = document.querySelector("a");

if(localStorage.value === ""){
    
}

function onLoginSubmit (event){
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem("username",username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 링크
// function handleLinkClick(event){
//     event.preventDefault();
//     alert("click");
// }


loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinkClick);



