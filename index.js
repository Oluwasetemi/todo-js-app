// named import
import { todoSubmitHandler, PI } from "./submitHandler.js";
// import { sayBye, person, sayHi } from "./say.js";
// 📁 renamed import
// import { sayHi as hi, sayBye as bye, person as angel } from "./say.js";
// import everything
// import * as say from "./say.js";
// default import
// import sum from "./sum.js";

// say.sayBye("bolu");
// say.sayHi("jane");

// hi("John"); // Hello, John!
// bye("John"); // Bye, John!

// console.log("Hello, JS-App 101-external");

// sayHi("ade");

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM contentloaded - external");
// });

// window.addEventListener("load", () => {
//   console.log("Loading content - external");
// });

// console.log(document.title);

document.title = "JS APP 102 as defined AltSchool Student";

let h1 = document.querySelector(`[data-name="hOne"]`);

console.log(todoForm);

const todoInput = todoForm.querySelector("#todo");
// const todosDisplay = document.querySelector("section.display-todos ol");
// console.log(todosDisplay);

// do a querySelectorAll on all the spans inside the li and loop thru and attach an event to remove the parent(li)

todoForm.addEventListener("submit", todoSubmitHandler);

//Update and delete
const listItem = document.querySelectorAll('.listItem')
listItem.forEach(item => {
  item.addEventListener('dblclick', () => {
    item.contentEditable = true
  })
})

// const itemToDelete = document.querySelectorAll(".delete");
// itemToDelete.forEach(item => {
//   item.addEventListener('click', () => {
//     const itemsParent = item.parentElement
//     itemsParent.remove()
//   })
// })


// const removeItem = document.querySelectorAll('.delete')
// removeItem.forEach(item => {

// })

// // other features to add to the todo app
// // 1. create
// // 2. update todo
// // 3. delete todo(add a delete existing 3 todos)
// // 4. complete checkbox
// // 5. clear all
// // 6. filter
// //

// // TODO:
// // complete module class
// // move to youtube video on bundlers and vite
// // component -todo app
// // react

// // import * as say from "./say.js";

// say.sayHi("John");
// say.sayBye("John");

// // Question: the default and the import asterisk , do they do the same thing (importing all) and then the named and renamed, just import a particular function?
// //
// // Is it this import that is used when devs are working with an external source like Cloudinary?(npm packages)
// //
// // how do we import and export media files
// //
// (async function main() {
//   let sum = await import("./sum.js");
//   console.log(sum.default(2, 5));
//   todoForm.addEventListener("submit", todoSubmitHandler);
// })();
