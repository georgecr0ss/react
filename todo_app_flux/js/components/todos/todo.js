import React from 'react'

export default  ({id,completed, onClick, todo, created}) => {
  console.log(completed, onClick, todo);
  return (
    <tr>
      <td>{id}</td>
      <td>{todo}</td>
      <td>{created}</td>
      <td
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }} >{completed ? "Comleted": "Active"}</td>
    </tr> 
  )
}
