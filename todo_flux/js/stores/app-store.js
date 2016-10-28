import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'

var _todos =[]
let id = 0

const _toggleTodo = (item) => {
  item.toggled = !item.toggled
}

const TodoStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT )
  },
  addChangeListener( callback ) {
    console.log(callback);
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ) {
    console.log(callback);
    this.removeListener( CHANGE_EVENT, callback )
  },
  getAll() {
    return _todos
  },
  addTodo: (item) => {
    let todo = {
      todo: item,
      completed: false,
      id: id++
    }
    _todos.push(todo)
  }

})
console.log(TodoStore);
export default TodoStore
