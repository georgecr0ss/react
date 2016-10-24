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

class FliterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const { store } = this.context
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

const Footer = ({store}) => {
  return(
    <p>
      Show: {" "}
      <FliterLink
        filter='SHOW_ALL'
        store={store}
      > All </FliterLink>
      {", "}
      <FliterLink
        filter='SHOW_ACTIVE'
        store={store}
      > Active </FliterLink>
      {", "}
      <FliterLink
        filter='SHOW_COMPLITED'
        store={store}
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

let nextTodoId = 0
const AddTodo = (props, {store}) => {
  let input
  return(
    <div>
      <input ref={node => {
          input = node
        }}  />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: nextTodoId++
          })
          input.value = ''
        }}>
        Add Todo
        </button>
    </div>)
}
Add.Todo.contextTypes = {
  store: React.PropTypes.object
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

class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render( ) {
    const props = this.props
      const { store } = this.context
    const state = store.getState()

    return (

      <TodoList
        todos={getVisivleTodos(
              state.todos,
              state.visibilityFilter
            )}
        onTodoClick = {id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
        />
    )
  }
}
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}
class Provider extends React.Component {
  getChildContext() {
    return{
      store: this.props.store
    }
  }

  render() {
    return this.props.chidren
  }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
}
const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store}  />
    <VisibleTodoList  store={store}/>
    <Footer store={store} />
  </div>
)
ReactDOM.render(
  <Provider store= { createStore(todoApp) }>
    <TodoApp  />
  </Provider>,
  document.getElementById('root')
)
