import  React from 'react'
import Header from './header/app-header'

export default (props) => {
  console.log(props);
  return(
    <div className="container">
      <Header/>
      {props.children}
    </div>
  )
}
