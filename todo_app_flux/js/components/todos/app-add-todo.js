import React from 'react'
import TodoActions from '../../actions/actions'
import AllTodos from './app-all-todos'

export default () => {
  let input = ""
  return(
    <div>
      <input onChange={() => {
        console.log(input.value);
      }}
      ref = { node => {
        input = node
      }} />
      <button onClick = {()=> {
        TodoActions.addTodo(input.value)
        input.value = ""
      }}>Add todo</button>
        <AllTodos/> 
    </div>
  )
}
