import { Dispatcher } from 'flux';
import TodoConstants from '../constants/app-constants';
import TodoStore   from '../stores/app-store';
import service from '../service/service'

let TodoDispatcher = new Dispatcher();
console.log(service);
TodoDispatcher.register(action => {
  switch ( action.actionType ) {
    case TodoConstants.ADD_TODO:
      service.addTodo(action.item)
      break
    case TodoConstants.TOGGLE_TODO:
      service.toggleTodo(action.item)
      break
    case TodoConstants.SET_VISIBILITY_FILTER:
      service.updateVisibleTodos(action.filter)
      break
  }

  TodoStore.emitChange();
})

export default TodoDispatcher
