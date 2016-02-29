import React, { Component, Text } from 'react-native'
import {bindActionCreators} from 'redux'
import PinScreen from './PinScreen'
import WaitingScreen from './WaitingScreen'
import * as pinActions from '../actions/pinScreenActions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { state, actions } = this.props
    const { error, tour, isFetching, pin, isGuide, studentPin } = state
    const screens = [
      <PinScreen
        error={error}
        isFetching={isFetching}
        pin={pin}
        {... actions}/>,
      <WaitingScreen
        isGuide={isGuide}
        studentPin={studentPin}/>
      // Asset screen
      // Browser screen
    ]
    if(tour === undefined) {
      return screens[0]
    } else {
      return screens[1]
    }
  }
}

export default connect(state => ({
  state: state.pin
}),
  dispatch => ({
    actions: bindActionCreators(pinActions, dispatch)
  })
)(App)
