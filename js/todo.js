const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;

    li.style.opacity = "0";
    li.style.transform = "translateY(10px)";
    li.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

    setTimeout(() => {
        li.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDos();
    }, 500);
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    li.classList.add("todo-item");
    li.style.opacity = "0";
    li.style.transform = "translateY(10px)";
    li.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

    setTimeout(() => {
        li.style.opacity = "1";
        li.style.transform = "translateY(0)";
    }, 10);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.addEventListener("change", () => {
        span.classList.toggle("checked", checkbox.checked);
    });

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    span.classList.add("todo-text");

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.classList.add("todo-delete");
    button.addEventListener("click", (event) => deleteToDo(event, li));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
}