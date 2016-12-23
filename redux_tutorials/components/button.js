import React from 'React';
import CounterActions from '../actions/counter-actions';

export default (props) => {
    return(
        <button onClick={() => {
            CounterActions.dispatch(props.actionType)
        }}>{props.name}</button>
    )
}
