import AppConstants from '../constants/app-constants'
import TodoDispatcher from '../dispatchers/app-dispatcher'

console.log(TodoDispatcher);
export default {
  addTodo ( item ) {
    // console.log(item);
    TodoDispatcher.dispatch({
      actionType: AppConstants.ADD_TODO, item
    })
  },
  toggleTodo ( item ) {
    TodoDispatcher.dispatch({
      actionType: AppConstants.TOGGLE_TODO, item
    })
  },
  setVisibilityFilter ( filter ) {
    TodoDispatcher.dispatch({
      actionType: AppConstants.SET_VISIBILITY_FILTER, filter
    })
  }
}
