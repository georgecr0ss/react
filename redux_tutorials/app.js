import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import CounterStore from './store/counter-store';
import Button from './components/button';

class Counter extends React.Component {
    getState() {
        return {
            store: CounterStore.getState()
        }
    }
    constructor() {
        super();

        this.state = this.getState();
        this.storeHasUpdated= this.storeHasUpdated.bind(this);
    }

    storeHasUpdated() {
        this.setState({
            store: CounterStore.getState()
        })
    }

    componentDidMount() {
        CounterStore.subscribe(this.storeHasUpdated);
    }

    render() {
        return(
            <div>
                <h1>I am react Component</h1>
                <h2 id="counter">{this.state.store}</h2>
                <Button actionType={'INCREMENT'} name={'+'}/> <Button actionType={'DECREMENT'} name={"-"}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <div className="container">
                <ul id="header">
                    <li className="tabs"><Link to="/">Home</Link></li>
                    <li className="tabs"><Link to="counter">Counter</Link></li>
                    <li className="tabs"><Link to="">Store from Scratch</Link></li>
                    <li className="tabs"><Link to="">Add Todos</Link></li>
                    <li className="tabs"><Link to="">Isomorphic React Redux</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

const Home = () => {
    return(
        <div><h1>Home</h1></div>
    )
}

class Container extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Header} >
                    <IndexRoute component={Home}/>
                    <Route path="counter" component={Counter} />
                </Route>
            </Router>
        );
    }
}


const render = () => {
    ReactDOM.render(<Container/>, document.getElementById('root'));
}

render();
