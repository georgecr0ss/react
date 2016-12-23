import React from 'react';
import Props from './props';

export default class DefultPropsWrapper extends React.Component {
    render() {
        return(
            <div>
                <h1>DefaultProps demo</h1>
                <Props name={66}  />
            </div>
        )
    }
}
