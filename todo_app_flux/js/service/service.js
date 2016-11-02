import _todos from './db'
console.log(_todos);
let counter = 0
export default {
  addTodo(item) {
    let date = new Date();
    console.log(date.getMonth());
    let todo = {
      todo: item,
      id: counter++,
      created: date.getDate() + "/" + (date.getMonth() + 1),
      completed: false
    };
    _todos.unshift(todo)
  },
  toggleTodo(id) {
    _todos[id].completed = !_todos[id].completed
  }
}
