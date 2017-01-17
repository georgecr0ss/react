import CounterReducer from '../reducers/counter-reducer';

export default {
    dispatch(obj) {
        console.warn(obj)
        CounterReducer.dispatch(obj)
    }
}
