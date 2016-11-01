import TodoConstants from '../constants/constants';
import TodoDispatcher from '../dispatchers/dispatcher';


export default {
  addTodo(item){
    TodoDispatcher.dispatch({
      actionType: TodoConstants.ADD_TODO, item
    })
  },
  toggleTodo() {
    return "kuche"
  }
}
