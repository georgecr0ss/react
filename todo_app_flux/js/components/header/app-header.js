import React from 'react'
import TodoInfo from './info'
export default ({title}) => {
  return (
    <div className="row" style={{ borderBottom: '1px solid #ccc', height: 40 }}>
      <div className="col-md-6" ><h4>{title}</h4></div>
      <TodoInfo class="col-md-6" />
    </div>
  )
}
