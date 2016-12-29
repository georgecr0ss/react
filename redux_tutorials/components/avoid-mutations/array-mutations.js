import deepFreez  from 'deep-freeze';
import expect from 'expect';
import React from 'react';


export default () => {
    const addCounter = (list) => {
        // return list.push([0]);
        // return list.concat([0]);
        return [...list, 0];
    }

    const removeCounter = (list, index) => {
        // return list
        // .slice(0, index)
        // .concat(list.slice(index + 1));
        let arr = [6,9,6,8,63,2,8,9,6];
        console.warn([...arr, 66, 669, 36594]);
        console.warn(...arr.slice(0, 5), ...arr.slice(5 + 1));
        return [
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ];
    }

    const incrementCounter = (list, index) => {
        console.warn([
            ...list.slice(0, index),
            list[index] + 1, ...list.slice(index + 1)
        ]);
        return [
            ...list.slice(0, index),
            list[index] + 1, ...list.slice(index + 1)
        ];

    }
    const testAddCounter = () => {
        const listBefore = [];
        const listAfter = [0];

        deepFreez(listBefore);

        expect(
            addCounter(listBefore)
        ).toEqual(listAfter);

        return {
            listBefore: [...listBefore].join(', '),
            listAfter: [...listAfter].join(', '),
            testPassed: 'Add Element'

        }

    }

    const testRemoveCounter = () => {
        const listBefore = [0, 10, 66];
        const listAfter = [0, 66];

        deepFreez(listBefore);

        expect(
            removeCounter(listBefore, 1)
        ).toEqual(listAfter)

        return {
            listBefore: [...listBefore].join(', '),
            listAfter: [...listAfter].join(', '),
            testPassed: 'Remove element'

        }

    }
    // testRemoveCounter();

    const testIncrementCounter = () => {
        const listBefore = [0, 10, 66];
        const listAfter = [0, 11, 66];

        deepFreez(listBefore);
        expect(
            incrementCounter(listBefore, 1)
        ).toEqual(listAfter, function(err){
            throw err;
        })

        return {
            listBefore: [...listBefore].join(', '),
            listAfter: [...listAfter].join(', '),
            testPassed: 'Increment element by one on index: 1'

        }
    }
    console.warn('All test passed');

    const representData = (cb) => {

        let data = cb();

        return(<ul >
            <li><h3>{data.testPassed}</h3></li>
            <li>array before: {data.listBefore}</li>
            <li>array after: {data.listAfter}</li>
            </ul>)
    }
    let incrementCounterTest =  representData(testIncrementCounter);
    return(
        <div className="mutations-container">
            <h2>Array Mutations Examples</h2>
            {representData(testAddCounter)}
            {representData(testRemoveCounter)}
            {representData(testIncrementCounter)}
        </div>
    )
}
