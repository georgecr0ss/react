import React from 'react'

export default  ({item, id, action}) => {
  console.log(item.completed);
  return (
    <tr>
      <td>{item.id}  <input type="checkbox" onClick={action}/></td>
      <td>{item.todo}</td>
      <td>{item.created}</td>
      <td
      style={{
        textDecoration: item.completed ? 'line-through' : 'none'
      }} >{item.completed ? "Comleted": "Active"}</td>
    </tr>
  )
}
