import AppConstants from '../constants/app-constants'
import TodoDispatcher from '../dispatchers/app-dispatcher'

export default {
  addTodo ( item ) {
    console.warn(item);
    TodoDispatcher.dispatch({
      actionType: AppConstants.ADD_TODO, item
    })
  },
  toggleTodo ( item ) {
    console.warn(item);
    TodoDispatcher.dispatch({
      actionType: AppConstants.TOGGLE_TODO, item
    })
  },
  visibilityFilter ( filter ) {
    console.log(filter);
    TodoDispatcher.dispatch({
      actionType: AppConstants.SET_VISIBILITY_FILTER, filter
    })
  }
}
