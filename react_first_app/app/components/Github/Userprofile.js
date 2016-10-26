import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        UserProfile {this.props.user}
      </div>
    )
  }
}

export default UserProfile
