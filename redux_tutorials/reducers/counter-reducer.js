import { createStore } from 'redux';

var id = 1;
let getId = () => {
    console.log(id)
    return id++;
}
// var state = ;

let counters = (obj) => {
    console.warn(obj);
    switch(action.type) {
        case 'ADD_COUNTER':
            return [
                ...state, {
                    id:  id++,
                    count: 0
                }
            ];

        case 'REMOVE_COUNTER':
            id--;
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];

        case 'INCREMENT':
            return state[action.id].count + 1;

        case 'DECREMENT':
            return state[action.id].count - 1

        default:
            return  state;
    }
};

const store = createStore(counters);

export default store;
