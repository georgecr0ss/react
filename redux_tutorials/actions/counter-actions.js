import CounterReducer from '../reducers/counter-reducer';

export default {
    dispatch(action) {
        console.warn(action)
        CounterReducer.dispatch(action)
    }
}
