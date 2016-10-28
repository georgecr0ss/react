import React from 'react';

class Notes extends React.Component {
  render() {
    return (
      <div>
        Notes
        {this.props.notes}
      </div>
    )
  }
}

export default Notes
