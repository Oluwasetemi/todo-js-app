// named export
// handleSubmit.js

export function todoSubmitHandler(event, todoForm, todosDisplay) {
  event.preventDefault();

  const formData = new FormData(todoForm);
  const todoValue = formData.get("todo").trim();
  if (!todoValue) return;

  const todoText = document.createTextNode(todoValue);
  const todoLi = document.createElement("li");

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("actions");

  // DELETE BUTTON
  const todoDeleteSpan = document.createElement("span");
  todoDeleteSpan.classList.add("delete");
  todoDeleteSpan.textContent = "❌";
  todoDeleteSpan.setAttribute("title", `Delete "${todoValue}"`);
  todoDeleteSpan.onclick = function () {
    todoLi.remove();
  };

  // EDIT BUTTON
  const todoEditSpan = document.createElement("span");
  todoEditSpan.classList.add("edit");
  todoEditSpan.textContent = "✏️";
  todoEditSpan.setAttribute("title", `Edit "${todoValue}"`);
  todoEditSpan.onclick = function () {
    const newTodo = prompt("Edit your todo:", todoText.textContent);
    if (newTodo !== null && newTodo.trim() !== "") {
      todoText.textContent = newTodo.trim();
    }
  };

  actionsDiv.append(todoEditSpan, todoDeleteSpan);
  todoLi.append(todoText, actionsDiv);
  todosDisplay.append(todoLi);

  todoForm.reset();
}


// export const PI = 22 / 7;
