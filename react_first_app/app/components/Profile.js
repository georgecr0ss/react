import React  from 'react'
import { Router } from 'react-router'
import UserProfile from './Github/Userprofile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'

class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      notes: [],
      bio: [],
      reops: []
  }
}
  render() {
    console.log(this.props);
    return (
      <div className="row" >
        <div className="col-md-4">
          <UserProfile user={this.props.params.username}/>  
        </div>
        <div className="col-md-4">
          <Repos/>
        </div>
        <div className="col-md-4">
          <Notes/>
        </div>
      </div>
    )
  }
}


export default Profile
