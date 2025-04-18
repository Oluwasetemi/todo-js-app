import { createDeleteButton } from "./createDelBtn.js";
import { addEditFunctionality } from "./editFunction.js";

// Function to create a new list item
export function createListItem(todo) {
  const listItem = document.createElement("li");
  listItem.classList.add("list");
  listItem.setAttribute("data-id", todo.id);

  const textNode = document.createTextNode(todo.text);
  listItem.appendChild(textNode);

  // Add delete button
  const todoDeleteEl = createDeleteButton(listItem, todo.id);
  listItem.append(todoDeleteEl);

  // Add edit functionality
  addEditFunctionality(listItem, todoDeleteEl, todo);

  return listItem;
}
