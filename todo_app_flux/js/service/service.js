import _todos from './db'
let counter = 0
export default {
  addTodo(item) {
    let todo = {
      text: item,
      id: counter++,
      created: Date.getDate() + "/" + Date.getMonth(),
      completed: false
    }
    _todos.unshift(todo)
  },
  toggleTodo(id) {
    _todos[id].completed = !_todos[id].completed
  }
}
