import React from 'react'
import ReactDOM from 'react-dom'
import ToDoApp from './todo'
class App extends React.Component {
  render() {
    return <div>Hello</div>
  }
}

class HelloMessage extends React.Component {
  render() {
    return <div> Hello {this.props.name}</div>
  }
}

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { secondsElapsed: 0 }
  }

  tick() {
    this.setState((prevState) =>
      ({secondsElapsed: prevState.secondsElapsed + 1
      })
    )
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed} </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<HelloMessage name="Late" />, document.getElementById('helloMsg'))
ReactDOM.render(<Timer />, document.getElementById('timer'))
ReactDOM.render(<ToDoApp/>, document.getElementById('todo'))
