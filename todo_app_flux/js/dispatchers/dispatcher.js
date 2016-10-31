import {Dispatcher} from 'flux'
import TodoConstants from '../constants/constants'
let TodoDispatcher = new Dispatcher();

TodoDispatcher.register(action => {
  switch (action.actionType) {
    case TodoConstants.ADD_TODO:
      service.addTodo(action.item)
      break; 
  }
})
