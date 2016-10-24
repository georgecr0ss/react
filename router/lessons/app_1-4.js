import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'


const Home = () => <div><Links/><h1>Home</h1></div>
const About = () => <div><Links/><h1>About</h1></div>
const Contanct = () => <div><Links/><h1>Contanct</h1></div>

const Links = () =>
  <nav>
    <Link activeStyle={{color: 'green'}} to="/">Home</Link>
    <Link activeStyle={{color: 'green'}} to="/about">About</Link>
    <Link activeStyle={{color: 'green'}} to="/contact">Contanct</Link>
  </nav>

class App extends React.Component {
  render() {
    return (
      <Router history={ browserHistory } >

        <Route path="/" component={Home}>  </Route>
        <Route path="/about" component={About}>  </Route>
        <Route path="/contact" component={Contanct}>  </Route>
      </Router>
    )
  }
}

// const Root = () => {
//     return (
//       <div>
//         <Links/>
//         <App/>
//       </div>
//     )
// }

ReactDOM.render(<App/>,document.getElementById('root'))
