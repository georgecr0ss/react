import React from 'react'
import AppActions from '../actions/app-actions'
import TodoStore   from '../stores/app-store';

let filterProp = ""
const Link = ({filter, name}) => {
  return <a href="#"
      onClick={(e)=>{
        e.preventDefault()
        console.log(filterProp);
         AppActions.visibilityFilter({filter})
        // TodoStore.emitChange()
      }}>{name}</a>

}
let getVisivleTodos = () => {
  return TodoStore.getAll()
}
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state =  getVisivleTodos()
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState(getVisivleTodos())
  }
  componentWillMount() {
    filterProp = "SHOW_ALL"
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }
  render() {
    let todos = this.state.todos.map(el => {
        return <li key={el.currId} onClick={() => {AppActions.toggleTodo(el.currId)}}

          style={{
            textDecoration: el.completed ? 'line-through' : 'none'
          }}>{el.todo}</li>
      })
    let input
    return(
      <div>
        <input ref={node => {input = node}}/>
          <button onClick={() =>{
            AppActions.addTodo(input.value)
            input.value = ''
           }}>
              Add Todo
          </button>
        <div>
          <ul>{todos}</ul>
        </div>
        <div>
          <p>
            <Link name="All"
              filter="SHOW_ALL"/>{", "}
            <Link name="Active"
              filter="SHOW_ACTIVE"/>{", "}
            <Link name="Completed"
              filter="SHOW_COMPLITED"/>
          </p>
        </div>
      </div>)
  }
}

export default App
