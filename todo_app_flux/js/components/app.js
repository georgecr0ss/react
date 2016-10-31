import React from 'react'
import Template from './app-template'
import {IndexRoute, Router, Route, hashHistory } from 'react-router'
import Todos from './todos/app-all-todos'
import AddTodo from './todos/app-add-todo'
export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={AddTodo}/>
      </Route>
    </Router>
  )
}
