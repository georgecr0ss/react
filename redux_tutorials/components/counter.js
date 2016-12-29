import React from 'react';
import Button from './reuseable/button';
import CounterReducer from '../reducers/counter-reducer';

export default  class Counter extends React.Component {
    getState() {
        return {
            store: CounterReducer.getState()
        }
    }
    constructor() {
        super();

        this.state = this.getState();
        this.stateHasUpdated= this.stateHasUpdated.bind(this);
    }

    stateHasUpdated() {
        this.setState({
            store: CounterReducer.getState()
        })
    }

    componentDidMount() {
        CounterReducer.subscribe(this.stateHasUpdated);
    }



    render() {
        let counters = this.state.store.map(counter => {
            return (
                <div>
                    <h1>I am react Component</h1>
                    <h2 id="counter">{this.state.store}</h2>
                    <Button action={{id:this.state.store.id, type:'INCREMENT'}} name={'+'}/> <Button action={ {id: this.state.store.id, type:'DECREMENT'}} name={"-"}/>
                </div>);
        })
        return(
            <div>
                <br/>
                <Button actionType={'ADD_COUNTER'} name={'Add counter'}/> <Button actionType={'REMOVE_COUNTER'} name={"remove counter"}/>
            </div>
        )
    }
}
