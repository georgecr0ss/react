import { Dispatcher } from 'flux';
import TodoConstants from '../constants/app-constants';
import  TodoStore   from '../stores/app-store';

let TodoDispatcher = new Dispatcher();

TodoDispatcher.register(action => {
  console.log(action.actionType );
  console.log(TodoConstants);
  switch ( action.actionType ) {
    case TodoConstants.ADD_TODO:
      TodoStore.addTodo(action.item)
    // case TodoConstants.TOGGLE_TODO:
    //   TodoStore.TOGGLE_TODO({
    //
    //   })
  }

  TodoStore.emitChange();
})

export default TodoDispatcher
