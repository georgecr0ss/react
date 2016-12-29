import { createStore } from 'redux';

let counter = (state = 0, action) => {
    switch(action.type) {
        case 'ADD_COUNTER': 
            return [
                ...state, {
                    counter
                }
            ]
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1
        default:
            return  state;
    }
};

const store = createStore(counter);

export default store;
