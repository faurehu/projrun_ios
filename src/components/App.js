import React, { Component } from 'react-native'
import {bindActionCreators} from 'redux'
import PinScreen from './PinScreen'
import * as pinActions from '../actions/pinScreenActions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { state, actions } = this.props
    return (
      <PinScreen {... actions}/>
    )
  }
}

export default connect(state => ({
  // state: state.counter
}),
  dispatch => ({
    actions: bindActionCreators(pinActions, dispatch)
  })
)(App)
