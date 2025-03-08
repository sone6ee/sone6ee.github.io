const loginContainer = document.querySelector("#login-container");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userNick = document.querySelector("#userNick");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);

    loginContainer.style.opacity = "0";
    setTimeout(() => {
        loginContainer.classList.add(HIDDEN_CLASSNAME);
    }, 1000);
}

function paintGreetings(userName) {
    userNick.innerText = `with. ${userName}`;
    userNick.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
    loginContainer.style.opacity = "1";
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
    loginContainer.classList.add(HIDDEN_CLASSNAME);
}
