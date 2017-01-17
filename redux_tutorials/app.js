import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import Home from './components/home';
import Header from './components/header';
import AvoidMutation from './components/avoid-mutations';
import TodoApp from './components/todo-app';

class Container extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Header} >
                    <IndexRoute component={Home}/>
                    <Route path="avoid_mutation" component={AvoidMutation}>
                        <Route path="arrays"/>
                        <Route path="objects"/>
                    </Route>
                    <Route path="todo-app" component={TodoApp}>
                    </Route>
                </Route>
            </Router>
        );
    }
}


const render = () => {
    ReactDOM.render(<Container/>, document.getElementById('root'));
}

render();
