import React from 'React';
import CounterActions from '../../actions/counter-actions';

export default (props) => {
    console.warn(props.action)
    return(
        <button onClick={() => {
            CounterActions.dispatch({state: props.state, action: props.action})
        }}>{props.name}</button>
    );
}
