import React from 'react';
import TodoStore from '../../stores/store';
import TodoActions from '../../actions/actions';
import Todo from './todo';
let visibleT = []
class AllTodos extends React.Component {

  getVisivleTodos() {
    let todos = TodoStore.getAll();
    console.log(todos);
    visibleT = todos.todos.map(t => {
      return <Todo
                key={t.id}
                created={t.created}
                id={t.id}
                onClick={TodoActions.toggleTodo(t.id)}
                completed={t.completed}
                todo={t.todo}
              />
    })
    return todos;
  }
  constructor() {
    super();
    this.state = this.getVisivleTodos();
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState(this.getVisivleTodos());
  }
  componentWillMount() {
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
      TodoStore.removeChangeListener(this._onChange);
  }
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Created on</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleT}
        </tbody>
      </table>
    )
  }
}

export default AllTodos;
