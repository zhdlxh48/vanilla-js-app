const todoForm = document.querySelector(".js-todo-form"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todo-list");

const TODO_ITEM_LS_KEY = "todos";
let todos = [];

const loadTodos = () => {
  const loadedTodos = localStorage.getItem(TODO_ITEM_LS_KEY);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach((todoElement) => {
      paintTodos(todoElement.text);
    });
  }
};

const saveTodos = () => {
  localStorage.setItem(TODO_ITEM_LS_KEY, JSON.stringify(todos));
};

const deleteTodoElement = (event) => {
  const btn = event.target;
  const delList = btn.parentNode;
  todoList.removeChild(delList);
  const cleanTodo = todos.filter((element) => {
    return element.id !== parseInt(delList.id);
  });
  todos = cleanTodo;
  saveTodos();
};

const paintTodos = (text) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodoElement);
  span.innerText = text;
  const todoElementID = todos.length + 1;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = todoElementID;
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    id: todoElementID,
  };
  todos.push(todoObj);
  saveTodos();
};

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodos(currentValue);
  todoInput.value = null;
}

function initState() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

initState();
