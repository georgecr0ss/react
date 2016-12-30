import React from 'React';
import CounterActions from '../../actions/counter-actions';

export default (props) => {
    console.warn(props.action)
    return(
        <button onClick={() => {
            CounterActions.dispatch(props.action)
        }}>{props.name}</button>
    );
}
