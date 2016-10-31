import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import { EventEmitter } from 'events'
import _todos from '../service/db'

const CHANGE_EVENT = 'change'
let visibleTodos = _todos;
let TodoStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT )
  },
  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ) {
    console.log(callback);
    this.removeListener( CHANGE_EVENT, callback )
  },
  getAll() {
    return {todos: visibleTodos}
  },
  updateVisibleTodos: ({filter}) => {
    console.log({filter});
    switch (filter) {
      case 'SHOW_ALL':
        visibleTodos = _todos;
        break
      case 'SHOW_ACTIVE':
        visibleTodos = _todos.filter(t => !t.completed )
        break
      case 'SHOW_COMPLITED':
       visibleTodos = _todos.filter(t => t.completed)
       break
    }
  }

})

export default TodoStore
