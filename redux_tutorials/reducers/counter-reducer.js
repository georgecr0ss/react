import { createStore } from 'redux';

var id = 0;
let getId = () => {
    console.log(id)
    return id++;
}
var state = [{
    id: getId(),
    count: 0
},{
    id: getId(),
    count: 6
}];

let counters = (arr, action) => {
    console.log(action, state)
    switch(action.type) {
        case 'ADD_COUNTER': 
            return [
                ...state, {
                    id: getId(),
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
