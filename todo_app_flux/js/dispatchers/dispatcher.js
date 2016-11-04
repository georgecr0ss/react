import { Dispatcher } from 'flux';
import TodoConstants from '../constants/constants';
import TodoStore from '../stores/store';

let TodoDispatcher = new Dispatcher();

TodoDispatcher.register(action => {
    switch(action.actionType) {
        case TodoConstants.ADD_TODO:
        console.log(action.item);
            TodoStore.addTodo(action.item);
            break;
        case TodoConstants.TOGGLE_TODO:
            TodoStore.updateActivitiState(action.id);
            break;
    }

    TodoStore.emitChange();
});

export default TodoDispatcher;
