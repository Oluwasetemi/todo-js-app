import { createDeleteButton } from "./createDelBtn.js";
import { addEditFunctionality } from "./editFunction.js";
import { h } from "./createElement.js";
import {
  saveTodoToLocalStorage,
  getTodosFromLocalStorage,
} from "./saveTodos.js";

// Function to create a new list item
export function createListItem(todo) {
  // const listItem = document.createElement("li");
  // listItem.classList.add("todo-item");
  // listItem.setAttribute("data-id", todo.id);

  // replacing the 3 above with the makeElem (h) function
  const listItem = h("li", { class: "todo-item", "data-id": todo.id });

  // Create a checkbox
  // const checkbox = document.createElement("input");
  // checkbox.type = "checkbox";
  // checkbox.checked = todo.completed;

  // replace with h
  const checkbox = h("input", { type: "checkbox", checked: todo.completed });

  if (todo.completed) {
    listItem.classList.add("completed"); // Add the completed class if the todo is already completed
  }

  checkbox.addEventListener("change", (e) => {
    console.log("checked");
    const todos = getTodosFromLocalStorage();
    const index = todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      const currentTodo = todos[index];
      currentTodo.completed = checkbox.checked;
      // currentTodo.completed = e.target.checked;
      saveTodoToLocalStorage(todos);
      listItem.classList.toggle("completed"); // Toggle the completed class
    }
  });

  const textNode = document.createTextNode(todo.text);

  listItem.appendChild(checkbox); // Add the checkbox to the list item
  listItem.appendChild(textNode);

  // Add delete button
  const todoDeleteEl = createDeleteButton(listItem, todo.id);
  listItem.append(todoDeleteEl);

  // Add edit functionality
  addEditFunctionality(listItem, todoDeleteEl, todo);

  return listItem;
}
