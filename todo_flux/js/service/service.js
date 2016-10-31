import _todos from './db'
import TodoStore from '../stores/app-store'
console.log(_todos);
let currId = 0
const _toggleTodo = id =>  {console.log(_todos[id]); _todos[id].completed = !_todos[id].completed}

export default {
  addTodo: function(item) {
    let todo = {
      todo: item,
      completed: false,
      currId: currId++
    }
    _todos.push(todo)
  },
  toggleTodo: (id) => {
    console.log(id);
    _toggleTodo(id)
  },
  updateVisibleTodos: (filter) => {
    console.log(filter);
    TodoStore.updateVisibleTodos(filter)
  }
}
