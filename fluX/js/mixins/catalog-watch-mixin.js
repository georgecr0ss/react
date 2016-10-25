import React from 'react'
import AppStore from '../stores/app-store'

export default (InnerComponent, stateCallback) =>
  class extends React.Component {
      constructor(props) {
        super(props);
        this.state = stateCallback()
      }
  }
