import React from 'react';
import ArrayMutation from './avoid-mutations/array-mutations';
import ObjectMutation from './avoid-mutations/object-mutations'

export default () => {
    return(<div>
            <h1>Avoid Mutations</h1>
            <ArrayMutation/>
            <ObjectMutation/>
        </div>);
}
