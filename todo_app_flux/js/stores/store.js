import TodoConstants from '../constants/constants';
import { EventEmitter } from 'events';
import _todos from '../service/db';

const CHANGE_EVENT = "change";
let visibleTodos = _todos;
let currFilter = 'SHOW_ALL';
let todosLenght = () =>  {
  let todosActiveLenght = visibleTodos.filter(t => !t.completed)
  return {
    active: todosActiveLenght.length,
    completed: visibleTodos.length - todosActiveLenght.length
  }
};
let TodoStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener( callback ) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener( callback ) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  getAll() {
    return { todos: visibleTodos }
  },
  info() {
    return todosLenght();
  },
  updateVisibleTodos({filter}) {
    currFilter = filter;
    switch (filter) {
      case 'SHOW_ALL':
        visibleTodos = _todos;
        break
      case 'SHOW_ACTIVE':
        visibleTodos = _todos.filter(t => !t.completed)
        break
      case 'SHOW_COMPLITED':
        visibleTodos = _todos.filter(t => t.completed) 
        break
    }
  }
});

export default TodoStore;
