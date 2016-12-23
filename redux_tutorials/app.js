import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import CounterStore from './store/counter-store';
import Button from './components/button';

class Container extends React.Component {
    render() {
        return(
            <div>
                <h1>I am react Component</h1>
                <h2 id="counter">{this.props.store}</h2>
                <Button actionType={'INCREMENT'} name={'+'}/> <Button actionType={'DECREMENT'} name={"-"}/>
            </div>
        );
    }
}


const render = () => {
    ReactDOM.render(<Container store={CounterStore.getState()}/>, document.getElementById('root'));
}

CounterStore.subscribe(render);
render();
