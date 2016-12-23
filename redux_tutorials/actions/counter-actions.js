import CounterStore from '../store/counter-store';

export default {
    dispatch(actionType) {
        CounterStore.dispatch({ type: actionType })
    }
}
