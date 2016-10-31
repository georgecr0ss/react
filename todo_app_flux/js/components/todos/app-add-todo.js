import React from 'react'
import TodoActions from '../../actions/actions'
export default () => {
  let input = ""
  return(
    <div>
      <input ref = { node => {
        input = node
      }} />
      <button onClick = {()=> {
        console.log(input.value);
        // TodoActions.addTodo(input.value)
        input.value = ""
      }}>Add todo</button>
    </div>
  )
}
