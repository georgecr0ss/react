import { createStore } from 'redux'

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return  {
          id: action.id,
          text: action.text,
          completed: false
        }
      break;
    case "TOGGLE_TODO":
      if(state.id !== action.id) {
        return state
      }
      return Object.assign(
          {},
          state,
          {completed: !state.completed}
        )
    default:
      return state
      break;

  }
}
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action)
      ]
      break;
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action))
      break;
    default:
      return state
      break;
  }
}

const store = createStore(todos)

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

console.log("Current state:");
console.log(store.getState());
console.log("---------------");

console.log("Dispatching ADD_TODO");
store.dispatch({
  type:"ADD_TODO",
  id: 0,
  text: "Learn Redux"
})
console.log("Current state:");
console.log(store.getState());
console.log("---------------");

console.log("Dispatching ADD_TODO");
store.dispatch({
  type:"ADD_TODO",
  id: 1,
  text: "Go shoping"
})
console.log("Current state:");
console.log(store.getState());
console.log("---------------");
