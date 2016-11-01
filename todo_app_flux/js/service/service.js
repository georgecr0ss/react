import _todos from './db'
console.log(_todos);
let counter = 0
export default {
  addTodo(item) {
    let date = new Date();
    let todo = {
      todo: item,
      id: counter++,
      created: date.getDate() + "/" + date.getMonth(),
      completed: false
    };
    console.log(_todos);
    _todos.unshift(todo)
  },
  toggleTodo(id) {
    _todos[id].completed = !_todos[id].completed
  }
}
