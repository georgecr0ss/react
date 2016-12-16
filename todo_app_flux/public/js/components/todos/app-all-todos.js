import React, { Component } from 'react';
import Todo from './todo';
import TodoStore from '../../stores/store';
import TodoActions from '../../actions/actions';
import StoreWatcher from '../../mixins/store-watcher';

function getVisivleTodos() {
    return TodoStore.getAll();
}

const AllTodos = (props) => {
    let todos = props.todos.map(todo => {
        let id = (props.todos.length-1 - (todo.id-0));
        return <Todo key={todo.id} item={todo} action={()=>{TodoActions.toggleTodo(id)}} />;
    });

    return (
        <tbody>
          {todos}
        </tbody>
    )
}

export default StoreWatcher(AllTodos, getVisivleTodos)
