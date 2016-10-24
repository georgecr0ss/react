import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
const counter = (state = 0, action) =>  {
   switch (action.type) {
     case 'INCREMENT':
      return state + 1
      break;
     case 'DECREMENT':
      return state - 1
      break;
     default:
      return state
      break;

   }
}
const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)
 const render = () => {
   ReactDOM.render(<Counter
                    value={store.getState()}
                    onIncrement={() => {
                      store.dispatch({type: 'INCREMENT'})
                      }
                    }
                    onDecrement={()=> {store.dispatch({type: 'DECREMENT'})}}
                    />, document.getElementById('app'))
 }
 store.subscribe(render)
 render()

// document.addEventListener('click', () => {
//   store.dispatch(  {type: 'INCREMENT'} )
// })
