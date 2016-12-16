import React from 'react';
import TodoStore from '../stores/store';

export default (InnerComponent, stateCallback) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = stateCallback(this.props);
            this._onChange = this._onChange.bind(this);
        }

        componentWillMount() {
            TodoStore.addChangeListener(this._onChange);
        }

        componentWillUnmount() {
            TodoStore.removeChangeListener(this._onChange);
        }

        _onChange() {
            // console.log("update");
            this.setState(stateCallback(this.props));
        }

        render() {
          return <InnerComponent {...this.state} {...this.props}/>;
        }
  }
