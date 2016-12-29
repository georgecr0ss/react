import React from 'react';
import Button from './reuseable/button';
import CounterStore from '../store/counter-store';

export default  class Counter extends React.Component {
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
