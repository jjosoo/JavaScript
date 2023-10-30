const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// 링크
const link = document.querySelector("a");

function onLoginSubmit (event){
    event.preventDefault();
    const username = loginInput.value;
    
}

// 링크
// function handleLinkClick(event){
//     event.preventDefault();
//     alert("click");
// }


loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinkClick);



