import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        UserProfile
        <p>Username: {this.props.user}</p>
        <p>Age: {this.props.bio.age}</p>
        <p>Job: {this.props.bio.job}</p>
      </div>
    )
  }
}

export default UserProfile
