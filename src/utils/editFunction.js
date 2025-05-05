import { h } from "./createElement.js";
import {
  saveTodoToLocalStorage,
  getTodosFromLocalStorage,
} from "./saveTodos.js";

// Function to add edit functionality to a list item
export function addEditFunctionality(listItem, todoDeleteEl, todo) {
  listItem.addEventListener("dblclick", () => {
    debugger;
    console.log("Editing todo with id:", todo.id); // Debug: Check the id

    // Get the current text of the todo
    const currentText = todo.text;
    console.log("Current text:", currentText); // Debug: Check the current text

    // Create an input field for editing
    // const editInput = document.createElement("input");
    // editInput.type = "text";
    // editInput.value = currentText;

    const editInput = h("input", {
      type: "text",
      value: currentText,
      style: "color: red;text-align:left;padding: 8px 2px ;",
    });

    // Clear the list item and add the input field
    listItem.textContent = ""; // Clear li
    listItem.appendChild(editInput);
    editInput.focus();
    editInput.select();

    // Save the edited text on blur
    editInput.addEventListener("blur", () => {
      const newText = editInput.value.trim() || currentText;
      console.log("New text:", newText); // Debug: Check the new text

      // Update the list item text
      const todos = getTodosFromLocalStorage();
      const index = todos.findIndex((eachTodo) => eachTodo.id === todo.id);
      if (index !== -1) {
        const currentTodo = todos[index];
        console.log({ currentTodo });
        currentTodo.text = newText; // Update the text of the todo
        currentTodo.updatedAt = Date.now();
        console.log({ currentTodo });
        // add current todo back to the todos
        todos[index] = currentTodo;
        saveTodoToLocalStorage(todos); // Save the updated todos back to local storage
        console.log("Todos after update:", todos); // Debug: Check todos after update

        // Reconstruct the list item
        listItem.textContent = ""; // Clear li

        // Re-add the checkbox
        // TODO: add name and id to the checkbox
        const checkbox = h("input", {
          type: "checkbox",
          value: currentTodo?.completed ? "true" : "false",
          checked: currentTodo?.completed, // Set the checkbox state
        });

        checkbox.addEventListener("change", () => {
          currentTodo.completed = checkbox.checked;
          saveTodoToLocalStorage(todos);
          listItem.classList.toggle("completed", checkbox.checked); // Toggle the completed class
        });

        listItem.appendChild(checkbox);
        console.log(listItem);

        // Re-add the updated text
        const textSpan = h("span", {}, currentTodo.text);
        listItem.appendChild(textSpan);

        // Re-add the delete button
        listItem.append(todoDeleteEl);
      } else {
        console.error("Todo with id not found:", id); // Debug: Log if id is not found
      }
    });

    // Save the edited text on Enter key
    editInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        editInput.blur(); // Trigger blur to save the text
      }
      // TODO: what will happen on Escape
      if (e.key === "Escape") {
        console.log("Escape used");
      }
    });
  });
}
