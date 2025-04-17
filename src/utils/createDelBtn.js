import {
    saveTodoToLocalStorage,
    getTodosFromLocalStorage,
  } from "./saveTodos.js";
  
  // Function to create a delete button
  export function createDeleteButton(listItem, id) {
    const todoDeleteEl = document.createElement("span");
    todoDeleteEl.classList.add("deleteBtn");
    todoDeleteEl.textContent = "🆇";
    todoDeleteEl.setAttribute("title", `Delete ${listItem.textContent.trim()}`);
  
    // Delete functionality
    todoDeleteEl.onclick = () => {
      listItem.remove();
      const todos = getTodosFromLocalStorage().filter((todo) => todo !== id);
      saveTodoToLocalStorage(todos);
    };
  
    return todoDeleteEl;
  }
  