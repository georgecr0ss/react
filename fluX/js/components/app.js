import React from 'react'
import AppActions from '../actions/app-actions'
class App extends React.Component {
  render() {
    return (<h1
      onClick={AppActions.addItem.bind(null, 'this is the item')}>Flux </h1>)
  }
}

export default App
