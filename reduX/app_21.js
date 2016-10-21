import { createStore, combineReducers } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

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
const todoApp = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(todoApp)

const FliterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if ( filter === currentFilter ) {
    console.log("text");
    return <span> {children} </span>
  }
  return (
    <a href="#" onClick = {e => {
      e.preventDefault()
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      })
    }}> {children} </a>
  )
}
// () => {
//   store.dispatch({
//     type: 'TOGGLE_TODO',
//     id: todo.id
//   })
// }
const Todo = ( {onClick,
    completed,
    text} ) =>{
      console.log(onClick, completed, text);
    return  (<li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    )
    }


const TodoList = ({todos, onTodoClick}) => {
    console.log(todos, onTodoClick)
  return (<ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>)
}
const getVisivleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed )
    case 'SHOW_COMPLITED':
     return todos.filter(t => t.completed)
  }
}
let nextTodoId = 0
class TodoApp extends React.Component {
  render() {
    const {
      todos,
      visibilityFilter
    } = this.props
    const visibleTodos = getVisivleTodos(
      todos,
      visibilityFilter
    )
    return (
      <div>
      <input ref={node => {
          this.input = node
        }}  />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
          this.input.value = ''
        }}>
        Add Todo
        </button>
        <TodoList
          todos={visibleTodos}
          onTodoClick = {id => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }}
          />
        <p>
          Show: {" "}
          <FliterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          > All </FliterLink>
          {", "}
          <FliterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
          > Active </FliterLink>
          {", "}
          <FliterLink
            filter='SHOW_COMPLITED'
            currentFilter={visibilityFilter}
          > Complited </FliterLink>
        </p>
      </div>
    )
  }
}
const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root'))
}

store.subscribe(render)
render()
