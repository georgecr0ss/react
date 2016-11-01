import React from 'react'
import TodoActions from '../../actions/actions'
import AllTodos from './app-all-todos'

export default () => {
  let input = ""
  return(
    <div>
      <input
      ref = { node => {
        input = node
      }} />
      <button onClick = {()=> {
        TodoActions.addTodo(input.value)
        input.value = ""
      }}>Add todo</button>
    <AllTodos fields={["Todo", "Created On", "Status"]}/>
    </div>
  )
}
