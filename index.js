// named import
import { todoSubmitHandler } from "./src/submitHandler.js";
import { sayBye, person, sayHi } from "./src/say.js";
import { loadTodos } from "./src/submitHandler.js";
console.log("✅ index.js loaded");
// 📁 renamed import
import { sayHi as hi, sayBye as bye, person as angel } from "./src/say.js";
// import everything
import * as say from "./src/say.js";
// import filter function
import filterTodoLists from "./src/utils/filterTodoLists.js";
// default import
// import sum from "./sum.js";

//
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector("#todoList");

say.sayBye("bolu");
say.sayHi("jane");

hi("John"); // Hello, John!
bye("John"); // Bye, John!

console.log("Hello, JS-App 101-external");

sayHi("ade");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM contentloaded - external");
  loadTodos(todoList);
});

window.addEventListener("load", () => {
  console.log("Loading content - external");
});

console.log(document.title);

document.title = "JS APP 102 as defined AltSchool Student";

let h1 = document.querySelector(`[data-name="hOne"]`);

console.log(todoForm);

const todoInput = todoForm.querySelector("#todo");
const todosDisplay = document.querySelector("section.display-todos ol");
console.log(todosDisplay);

// do a querySelectorAll on all the spans inside the li and loop thru and attach an event to remove the parent(li)

// todoForm.addEventListener("submit", todoSubmitHandler);
// Add event listener for form submission
if (todoForm) {
  todoForm.addEventListener("submit", (e) =>
    todoSubmitHandler(e, todoForm, todoList)
  );
} else {
  console.warn("#todoForm element not found");
}

// other features to add to the todo app
// 1. create
// 2. update todo
// 3. delete todo(add a delete existing 3 todos)
// 4. complete checkbox
// 5. clear all
// 6. filter
//

// TODO:
// complete module class
// move to youtube video on bundlers and vite
// component -todo app
// react

// import * as say from "./say.js";

say.sayHi("John");
say.sayBye("John");

// Question: the default and the import asterisk , do they do the same thing (importing all) and then the named and renamed, just import a particular function?
//
// Is it this import that is used when devs are working with an external source like Cloudinary?(npm packages)
//
// how do we import and export media files
//
(async function main() {
  let sum = await import("./src/sum.js");
  console.log(sum.default(2, 5));
  todoForm.addEventListener("submit", todoSubmitHandler);
})();

// Function to render todo lists
function renderTodoLists(lists) {
  const ul = document.querySelector('#allTodoLists');
  ul.innerHTML = "";
  lists.forEach((list) => {
    const li = document.createElement('li');
    li.textContent = list.name;
    ul.appendChild(li);
  });
}

// initial rendering
renderTodoLists(filterTodoLists());

// Listening for search input
document.querySelector('#searchTodoLists').addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  const filtered = filterTodoLists(searchTerm);
  renderTodoLists(filtered);

  //Displaying the filtered lists in the console
  console.log(filtered);
});
