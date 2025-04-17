// 📁 sayHi.js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`${user}, Bye!`);
}

export { sayHi, sayBye };

let name = "johne";
let age = 99;

// property value shorthand
export let person = {
  name,
  age,
};
