import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }
  render() {
    let txt = this.props.txt
    return (
      <div>
      <hr/>
        <Slider ref="red" txt={this.state.txt} value={this.state.red} update={this.update} />
        {this.state.red}<br/>
        <Slider ref="green" txt={this.state.txt}  value={this.state.red} update={this.update} />
        {this.state.green}<br/>
        <Slider ref="blue" txt={this.state.txt}  value={this.state.red} update={this.update} />
        {this.state.blue}
      </div>
    )
  }
}
class Slider extends React.Component {
  render() {
    return (
      <div >
        <input ref="input" type="range"
          min="0"
          max="255"
          defaultValue={this.props.value}
          onChange={this.props.update}/>
        </div>
    )
  }
}
// const Widget = (props) => {
//   return(
//     <div>
//       <input type="text" onChange={props.update}/>
//       <h1>{props.txt}</h1>
//     </div>
//   )
// }
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
ReactDOM.render(<App cat={6} txt="i am the props text Txt"/>, document.getElementById('app'))
