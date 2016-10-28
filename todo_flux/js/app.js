import React from 'react'
import AppActions from './actions/app-actions'
import  TodoStore   from './stores/app-store';

class App extends React.Component {

  _onChange() {

    console.log(TodoStore.getAll());
  }
  componentWillMount() {
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }
  render() {
    let input
    return(
      <div>
        <p><input ref={node => {input = node}}/>
          <button onClick={() =>{
            AppActions.addTodo(input.value)
            input.value = ''
           }}>
              Add Todo
          </button>
        </p>
       <div > Hello </div>
      </div>)
  }
}

export default App
