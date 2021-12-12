const isNotCheckAll = (todo = []) => todo.find(todo => !todo.isCompleted);
const filterByStatus = (todos = [], status = "", id = "") => {
  switch (status) {
    case "ACTIVE":
      return todos.filter(todo => !todo.isCompleted);
    case "COMPLETED":
      return todos.filter(todo => todo.isCompleted);
    case "REMOVE":
      return todos.filter(todo => !todo.id.toString().includes(id));
    default:
      return todos
  }
}
export {isNotCheckAll, filterByStatus}