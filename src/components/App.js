import React, { Component, Text } from 'react-native'
import {bindActionCreators} from 'redux'
import PinScreen from './PinScreen'
import WaitingScreen from './WaitingScreen'
import * as pinAttempt from '../actions/utils/pinAttempt'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { state, actions, store } = this.props

    const { error,
            tour,
            isFetching,
            pin,
            isGuide,
            studentPin,
            isConnected,
            studentsConnected,
            sessionUrl } = state

    const screens = [
      <PinScreen
        error={error}
        isFetching={isFetching}
        pin={pin}
        {... actions}/>,
      <WaitingScreen
        isGuide={isGuide}
        studentPin={studentPin}
        studentsConnected={studentsConnected}/>
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
    actions: bindActionCreators(pinAttempt, dispatch)
  })
)(App)
