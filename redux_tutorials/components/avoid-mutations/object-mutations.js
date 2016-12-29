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
                
            case 'TOGGLE_TODO': 
                return state.map(todo => {
                    if (todo.id !== action.id) {
                        return todo;
                    }

                    return Object.assign({}, ...todo, {completed: !todo.completed} )
                })
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
        ];
        
        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter)

    }

    const testToggleTodo = () => {
        const stateBefore = [
            {
                completed: false,
                id: 0,
                text: 'Learnt Readux'
            },
            {
                completed: false,
                id: 1,
                text: 'Learn Readux'
            },
            {
                completed: true,
                id: 2,
                text: 'Learn Readux'
            }
        ];

        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        
        const stateAfter = [
            {
                completed: false,
                id: 0,
                text: 'Learnt Readux'
            },
            {
                completed: true,
                id: 1,
                text: 'Learn Readux'
            },
            {
                completed: true,
                id: 2,
                text: 'Learn Readux'
            }
        ];

        
        deepFreeze(stateBefore);
        deepFreeze(action);
        
        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter)

    };

    console.log('test has passed');
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
