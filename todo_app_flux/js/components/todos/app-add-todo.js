import React from 'react'
import TodoActions from '../../actions/actions'
import AllTodos from './app-all-todos'

export default () => {
  let input = ""
  return(
    <div className="row">
      <input className="form-control"
        style={{width: 250, display:"inline-block"}}
      ref = { node => {
        input = node
      }} />
    <button className="btn" onClick = {()=> {
        TodoActions.addTodo(input.value)
        input.value = ""
      }}>Add todo</button>
    <AllTodos fields={["Todo", "Created On", "Status"]}/>
    </div>
  )
}
