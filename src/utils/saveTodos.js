//function to save todos to localStorage
function saveTodoToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to get todos from local storage
function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export { saveTodoToLocalStorage, getTodosFromLocalStorage };
