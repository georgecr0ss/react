import {Dispatcher} from 'flux';
import TodoConstants from '../constants/constants';
import service from '../service/service';
import TodoStore from '../stores/store';

let TodoDispatcher = new Dispatcher();

TodoDispatcher.register(action => {
  switch (action.actionType) {
    case TodoConstants.ADD_TODO:
      service.addTodo(action.item);
      TodoStore.emitChange();
      break;
    case TodoConstants.TOGGLE_TODO:
      service.toggleTodo(action.id);
      TodoStore.emitChange();
      break;
  }
});

export default TodoDispatcher;
