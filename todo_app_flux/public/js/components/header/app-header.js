import React from 'react'
import TodoInfo from './info'
import {Link} from 'react-router'

export default ({title}) => {
  return (
    <div className="row" style={{ borderBottom: '1px solid #ccc', height: 40 }}>
      <div className="col-md-6" >
          <h4>{title} <span>
            <Link to="/">Home </Link>
            <Link to="/addTodo">Add Todo</Link>
          </span></h4>

      </div>
      <TodoInfo class="col-md-6" />
    </div>
  )
}
