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

class FliterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = store.getState()

    return(
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick = {() => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }}
      >{props.children}</Link>
    )

  }
}

const Footer = ( ) => {
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

  // store.dispatch({
  //   type: 'ADD_TODO',
  //   text: input.value,
  //   id: nextTodoId++
  // })
let nextTodoId = 0
const AddTodo = ({
  onAddClick
}) => {
  let input
  return(
    <div>
      <input ref={node => {
          input = node
        }}  />
        <button onClick={() => {
          onAddClick(input.value)
          input.value = ''
        }}>
        Add Todo
        </button>
    </div>)
}

// store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

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
const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo
      onAddClick = { text=>
        store.dispatch({
          type: 'ADD_TODO',
          text,
          id: nextTodoId++
        })
      }
    />
    <TodoList
      todos={getVisivleTodos(
            todos,
            visibilityFilter
          )}
      onTodoClick = {id => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      }}
      />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={filter => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
    />
  </div>
)
const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root'))
}

store.subscribe(render)
render()
