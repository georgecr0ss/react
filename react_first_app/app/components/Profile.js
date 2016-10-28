import React  from 'react'
import { Router } from 'react-router'
import UserProfile from './Github/Userprofile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'

class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      notes: [1,12,3],
      bio: {age:"24", job: "JS developer"},
      reops: ["a", "b", "c"]
  }
}
  render() {
    console.log(this.props);
    return (
      <div className="row" >
        <div className="col-md-4">
          <UserProfile user={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.reops}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
}


export default Profile
