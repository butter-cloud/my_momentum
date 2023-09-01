const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function showGreetings(username){
    greeting.innerText = (`Hello, ${username}!`);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// checking if we already have saved name in the local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit",onLoginSubmit);
    }
    else {
        showGreetings(savedUsername);
    }

// when we don't have saved name in local storage, this will work
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const TYPED_USERNAME = loginInput.value;
    localStorage.setItem(USERNAME_KEY, TYPED_USERNAME);
    showGreetings(TYPED_USERNAME);
}




// if we have repeated "string", it's better to const it so that JS can point out!
