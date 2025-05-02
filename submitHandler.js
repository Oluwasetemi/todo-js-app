// named export
export function todoSubmitHandler(event) {
  event.preventDefault(); // Prevent the form from submitting
  // let form = event.target;
  // let todoValue = todoInput.value;

  let formData = new FormData(todoForm);
  let todoValue = formData.get("todo");
  console.log(`Hellllooooo ${todoValue}`);

  const todoText = document.createTextNode(todoValue.trim());
  const todoLi = document.createElement("li");
  const todoDeleteSpan = document.createElement("span");
  todoDeleteSpan.classList.add("delete");
  todoDeleteSpan.textContent = "❌";
  todoDeleteSpan.setAttribute("title", `delete ${todoValue.trim()}`);

  todoDeleteSpan.onclick = function () {
    todoLi.remove();
  };

  // put the text inside the li
  todoLi.append(todoText, todoDeleteSpan);

  // append the li to the ol
  todosDisplay.append(todoLi);

  // clear the form after submission - set input to empty string or form reset api
  todoForm.reset();
  // todoInput.value = ""

  console.log("Form submitted!");
  // You can perform validation or other actions here
}

export const PI = 22 / 7;
