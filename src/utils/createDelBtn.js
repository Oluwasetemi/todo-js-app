import {
  saveTodoToLocalStorage,
  getTodosFromLocalStorage,
} from "./saveTodos.js";

// Function to create a delete button
export function createDeleteButton(listItem, id) {
  const todoDeleteEl = document.createElement("span");
  todoDeleteEl.classList.add("deleteBtn");
  todoDeleteEl.innerHTML = '<i class="fas fa-trash">'; // changed delete button to icon
  todoDeleteEl.setAttribute("title", `Delete ${listItem.textContent.trim()}`);

  // Delete functionality
  todoDeleteEl.onclick = () => {
    listItem.remove();
    //filter todos to remove the deleted todo
    const todos = getTodosFromLocalStorage().filter((todo) => todo.id !== id);
    // Save the updated todos to local storage
    saveTodoToLocalStorage(todos);
  };

  return todoDeleteEl;
}
