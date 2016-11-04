import _todos from './db'

export default {
  addTodo(item) {
    _todos.unshift(item)
  },
  toggleTodo(id) {
    _todos[id].completed = !_todos[id].completed;
  }
}
