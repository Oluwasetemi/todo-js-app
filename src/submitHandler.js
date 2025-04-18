import { createListItem } from "../src/utils/createLi.js";
import {
  saveTodoToLocalStorage,
  getTodosFromLocalStorage,
} from "../src/utils/saveTodos.js";

const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");

// named export
export function todoSubmitHandler(event) {
  event.preventDefault(); // Prevent the form from submitting
  // let form = event.target;
  // let todoValue = todoInput.value;


  let formData = new FormData(todoForm);
  let todoValue = formData.get("todo").trim();
  if (!todoValue) return;

  console.log(todoValue);

  // Save to local storage
  const newTodo = {
    id: Date.now(),
    text: todoValue,
  };

  const todos = getTodosFromLocalStorage();
  // todos.push(todoValue);
  todos.push(newTodo);
  saveTodoToLocalStorage(todos);

  // Create a new list item and append it to the todo list
  const listItem = createListItem(newTodo);
  todoList.prepend(listItem);

  // Reset the form
  todoForm.reset();

  console.log("Form submitted!");
  // You can perform validation or other actions here
}

// Function to load todos from local storage on page load
export function loadTodos(todoList) {
  console.log("Loading todos from localStorage..."); // ✅ Add this
  const todos = getTodosFromLocalStorage();
  console.log("Loaded todos:", todos); // ✅ Add this too
  todos.forEach((todo) => {
    console.log("Creating list item for:", todo); // Debug
    const listItem = createListItem(todo); // now todo is an object
    todoList.appendChild(listItem);
  });
}

export const PI = 22 / 7;
