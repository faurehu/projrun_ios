import React, {
  Component,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import socket from '../actions/utils/socket'

let studentView = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View style={{alignSelf: 'stretch', alignItems: 'center', backgroundColor: 'rgb(0, 121, 197)'}}
      borderTopColor='82A9D0' borderTopWidth={5} borderBottomColor='5A7684' borderBottomWidth={5}>
      <Text style={{color: 'white', fontSize: 20, marginTop: 10, marginBottom: 10}}>
        Waiting for session to start
      </Text>
    </View>
  </View>
)

let guideView = (pin, number, emit) => (
  <View style={{flex: 1, alignItems: 'center'}}>
    <View style={{alignSelf: 'stretch', alignItems: 'center', backgroundColor: 'rgb(0, 121, 197)'}}
      borderBottomColor='5A7684' borderBottomWidth={5}>
      <Text style={{color: 'white', fontSize: 18, marginTop: 25, marginBottom: 10, textAlign: 'center'}}>
        Ask your students to use PIN: {pin}
      </Text>
    </View>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableHighlight style={{borderRadius: 10}} onPress={emit}>
        <View style={{alignItems: 'center', backgroundColor: 'F4FAFF', borderRadius: 10}}>
          <Text style={{color: '5A7684',fontSize: 30, margin: 5, marginLeft: 10, marginRight: 10}}>
            Start Tour
          </Text>
        </View>
      </TouchableHighlight>
    </View>
    <View style={{alignSelf: 'stretch', alignItems: 'center', backgroundColor: 'rgb(0, 121, 197)'}}
      borderTopColor='82A9D0' borderTopWidth={5}>
      <Text style={{color: 'white', fontSize: 20, marginTop: 10, marginBottom: 10}}>
        There are {number} students connected
      </Text>
    </View>
  </View>
)

export default class WaitingScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { isGuide, studentsConnected, studentPin} = this.props
    console.log(global.socket)

    return isGuide ? guideView(studentPin, studentsConnected, global.socket ? () => {global.socket.emit("setAsset", 1)} : () => {console.log('yo')}) : studentView()
  }
}
