import React from 'react';
import TodoStore from '../../stores/store';
import TodoActions from '../../actions/actions';
import Todo from './todo';
import StoreWatcher from '../../mixins/store-watcher'
let visibleT = []

function getVisivleTodos() {
  let todos = TodoStore.getAll();
  visibleT = todos.todos.map(t => {
    let id = (todos.todos.length-1 - (t.id-0))
    return <Todo
              key={t.id}
              created={t.created}
              id={t.id}
              onClick={()=> {
                TodoActions.toggleTodo(id)
              }}
              completed={t.completed}
              todo={t.todo}
            />
  })
  return  TodoStore.getAll();
}
const AllTodos =(props) => {
    console.log(props);
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>{props.fields[0]}</th>
            <th>{props.fields[1]}</th>
            <th>{props.fields[2]}</th>
          </tr>
        </thead>
        <tbody>
          {visibleT}
        </tbody>
      </table>
    ) ;
}

export default StoreWatcher(AllTodos, getVisivleTodos);
