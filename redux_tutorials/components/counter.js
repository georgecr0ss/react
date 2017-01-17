import React from 'react';
import Button from './reuseable/button';
import CounterReducer from '../reducers/counter-reducer';

export default  class Counter extends React.Component {
    getState() {
        return {
            store: [{
                        id: 0,
                        count: 0
                    },{
                        id: 1,
                        count: 6
                    }]
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
        console.log(...this.state.store)

        let counters = this.state.store.map(counter => {
            return (
                <div key={counter.id}>
                    <h1>I am react Component</h1>
                    <h2 id="counter">{counter.count}</h2>
                    <Button store={this.state.store} action={{id: counter.id, type:'INCREMENT'}} name={'+'}/> <Button store={this.state.store} action={ {id: counter.id, type:'DECREMENT'}} name={"-"}/>
                     <Button store={this.state.store} action={{ id: counter.id, type:'REMOVE_COUNTER'}} name={"X"}/>
                </div>);
        })
        return(
            <div>
                {counters}
                <br/>
                <Button state={this.state.store} action={{type: 'ADD_COUNTER'}} name={'Add counter'}/>
            </div>
        )
    }
}
