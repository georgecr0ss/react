import TodoConstants from '../constants/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = "change";
let _todos = [];
let visibleTodos = _todos;

const _addTodos = (newTodo) => {
    _todos.unshift(newTodo);
    console.log(visibleTodos);
}
const _updateActivitiState = (id) => {
  // visibleTodos.map(t => {
  //   console.log(t);
  // })
  visibleTodos[id].completed = !visibleTodos[id].completed;
  //   console.log(!_todos[id].completed);
}
let todosLenght = () =>  {
    let todosActiveLenght = visibleTodos.filter(t => !t.completed);

    return {
        active: todosActiveLenght.length,
        completed: visibleTodos.length - todosActiveLenght.length
    }
};

let TodoStore = Object.assign(EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getAll() {
        return { todos: visibleTodos };
    },

    info() {
        return todosLenght();
    },

    updateVisibleTodos({filter}) {
        switch (filter) {
            case 'SHOW_ALL':
              visibleTodos = _todos;
              break;
            case 'SHOW_ACTIVE':
              visibleTodos = _todos.filter(t => !t.completed);
              break;
            case 'SHOW_COMPLITED':
              visibleTodos = _todos.filter(t => t.completed);
              break;
        }
    },

    addTodo(item) {
      _addTodos(item);
    },

    updateActivitiState(id) {
      console.log(id);
        _updateActivitiState(id);
    }
});

export default TodoStore;
