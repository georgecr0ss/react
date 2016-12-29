import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import Counter from './components/counter';
import Home from './components/home';
import Header from './components/header';
import AvoidMutation from './components/avoid-mutations';

class Container extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Header} >
                    <IndexRoute component={Home}/>
                    <Route path="counter" component={Counter} />
                    <Route path="avoid_mutation" component={AvoidMutation}>
                        <Route path="arrays"/>
                        <Route path="objects"/>
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
