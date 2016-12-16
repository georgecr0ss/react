import React from 'react';
import Template from './app-template';
import {IndexRoute, Router, Route, browserHistory } from 'react-router';
import Todos from './todos/app-all-todos';
import AddTodo from './todos/app-add-todo';
import Caclulator from './calculator/calculator';
import DefultPropsWrapper from './demo/defaultProps';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={DefultPropsWrapper} />
                <Route path="addTodo" component={AddTodo}/>
            </Route>
        </Router>
    )
}
