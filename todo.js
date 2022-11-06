const todoForm = document.querySelector("#todo-form");
const inputForm = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let List = [];

function handleDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  List = List.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "X";
  li.appendChild(btn);
  li.appendChild(span);
  btn.addEventListener("click", handleDelete);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function handleForm(event) {
  event.preventDefault();
  const newTodo = inputForm.value;
  inputForm.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  if (List.length < 8) {
    List.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
  } else {
    alert("TodoList delete please");
  }
}
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(List));
}

todoForm.addEventListener("submit", handleForm);

const savedTodo = localStorage.getItem("todos");
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  List = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
