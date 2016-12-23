import React from 'react';

export default class Props extends React.Component {
    render() {
        console.log(this.props.name);
        return(<h2>{this.props.name}</h2>);
    }
}

Props.defaultProps = {
    name: 'Stranger'
}

Props.propTypes = {
    name: (props, propName, componentName) => {
        console.warn(props, propName, props[propName]);
        if (!isNaN(props[propName])) {
            return '';
        }
    }
}
