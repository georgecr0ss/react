import CounterReducer from '../reducers/counter-reducer';

export default {
    dispatch(actionType) {
        CounterReducer.dispatch({ type: actionType })
    }
}
