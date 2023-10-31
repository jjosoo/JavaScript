const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    // li & span 생성
    const li = document.createElement("li");
        li.id = newTodo.id;
    const span = document.createElement("span");
        // <span> newTodo </span> : span안에 newTodo 넣기
        span.innerText = newTodo.text;

        // <button> ❌ </button> : button 안에 x 넣기
    const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", deleteToDo);

    // li 안에 span 생성 + button 생성
    li.appendChild(span);
    li.appendChild(button);

    // ul안에 li생성 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault(); 

    const newTodo = toDoInput.value;    
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    
    savedToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}
