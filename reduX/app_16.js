import { createStore, combineReducers } from 'redux'

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
//combineReducers function form scratch
const combineReducersM = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        console.warn(  nextState[key]);
        return nextState
      },
      {}
    );
  }
}
const todoApp = combineReducersM({
  todos,
  visibilityFilter
})
const store = createStore(todoApp)

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

console.log("Dispatching TOGGLE_TODO");
store.dispatch({
  type:"TOGGLE_TODO",
  id: 0
})
console.log("Current state:");
console.log(store.getState());
console.log("---------------");

console.log("Dispatching SET_VISIBILITY_FILTER");
store.dispatch({
  type:"SET_VISIBILITY_FILTER",
  filter: 'SHOW_COMPLETED'
})
console.log("Current state:");
console.log(store.getState());
console.log("---------------");
