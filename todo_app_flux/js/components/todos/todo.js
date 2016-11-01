import React from 'react'

export default  ({id,completed, onClick, todo, created}) => {
  return (
    <tr>
      <td>{id}  <input type="checkbox" onClick={onClick}/></td>
      <td>{todo}</td>
      <td>{created}</td>
      <td
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }} >{completed ? "Comleted": "Active"}</td>
    </tr>
  )
}
