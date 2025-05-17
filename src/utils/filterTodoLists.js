// Function to filter all todo lists by name from local storage
function filterTodoLists(searchTerm = "") {
  const lists = JSON.parse(localStorage.getItem("todoLists")) || [];
  if (!searchTerm) return lists;
  return lists.filter(list =>
    list.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default filterTodoLists;