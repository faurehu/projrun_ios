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
    console.log(state)
    return (
      <PinScreen
        error={state.error}
        isFetching={state.isFetching}
        pin={state.pin}
        {... actions}/>
    )
  }
}

export default connect(state => ({
  state: state.pin
}),
  dispatch => ({
    actions: bindActionCreators(pinActions, dispatch)
  })
)(App)
