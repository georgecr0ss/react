import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, hashHistory} from 'react-router'
import routes from './config/routes'
import Main from './components/Main'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>{routes}</Router>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'))
