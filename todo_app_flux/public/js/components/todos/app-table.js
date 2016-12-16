import React from 'react';
import AllTodos from './app-all-todos';

class Table extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = props;
    }
    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{this.state.fields[0]}</th>
                        <th>{this.state.fields[1]}</th>
                        <th>{this.state.fields[2]}</th>
                    </tr>
                </thead>
                    <AllTodos /> 
            </table>
        );
    }
}

export default Table;
 // StoreWatcher(Table, getVisivleTodos);
