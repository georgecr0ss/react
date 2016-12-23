import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

//Action creators
let nextTodoId = 0
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
  }
}

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
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
// const store =  createStore(todoApp) passing the store at the top level component

const Link = ({
  active,
  children,
  onClick
 }) => {
  if ( active ) {
    console.log("text");
    return <span> {children} </span>
  }
  return (
    <a href="#" onClick = {e => {
      e.preventDefault()
      onClick()
    }}> {children} </a>
  )
}

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToLinkProps = (dispatch,ownProps) => {
  console.log(ownProps);
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FliterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)

const Footer = () => {
  return(
    <p>
      Show: {" "}
      <FliterLink
        filter='SHOW_ALL'
      > All </FliterLink>
      {", "}
      <FliterLink
        filter='SHOW_ACTIVE'
      > Active </FliterLink>
      {", "}
      <FliterLink
        filter='SHOW_COMPLITED'
      > Complited </FliterLink>
    </p>
  )
}
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
let AddTodo = ({dispatch}) => {
  let input
  return(
    <div>
      <input ref={node => {
          input = node
        }}  />
        <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        Add Todo
        </button>
    </div>)
}

AddTodo = connect(null, dispatch => {
  return { dispatch }
})(AddTodo)

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
const mapStateToTodoProps = (state) => {
  return {
    todos: getVisivleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

const mapDispatchToTodoProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToTodoProps,
  mapDispatchToTodoProps
)(TodoList)

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer/>
  </div>
)
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp  />
  </Provider>,
  document.getElementById('root')
)
