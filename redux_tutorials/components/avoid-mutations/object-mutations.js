import React from 'react';
import deepFreeze  from 'deep-freeze';
import expect from 'expect';

export default () => {

    const todos = (state = [], action) => {
        switch(action.type) {
            case 'ADD_TODO':
                return [
                    ...state, {                    
                        completed: false,
                        id: 0,
                        text: 'Learn Readux'
                    }
                ]; 
            default: 
            return state; 
        }
    }

    const testAddTodo = () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Readux'
        }
        const stateAfter = [
            {
                completed: false,
                id: 0,
                text: 'Learn Readux'
            }
        ]

    }

    const representData = (cb) => {
        let data = cb();

        return(<ul >
            <li><h3>{data.testPassed}</h3></li>
            <li>array before: {data.listBefore}</li>
            <li>array after: {data.listAfter}</li>
            </ul>)
    }

    return(
        <div className="mutations-container">
            <h2>Objects Mutations Examples</h2>
        </div>
    )
}
