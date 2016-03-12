import React, {
  Component,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import broadcast from '../actions/utils/socket'

export default class PinScreen extends Component {
  constructor(props) {
    super(props)
  }

  onChangeTextHandler = (text) => {
    let { pinAttempt } = this.props
    if(text.length === 4) {
      this._textInput.setNativeProps({text: ''})
      pinAttempt(text)
    }
  }

  textLogic = () => {
    let { error, isFetching, pin } = this.props
    let text = !isFetching ? 'Please enter your PIN' : `Attempting with PIN ${pin}`
    if(error) {
      if(error == 'PIN_INVALID') {
        text = 'Your PIN was not valid'
      } else {
        text = 'There was an internal problem'
      }
    }
    return text
  }

  render() {
    let { onChangeTextHandler, textLogic } = this

    return (
      <View style={{flex: 1, backgroundColor: 'rgb(0, 121, 197)'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../images/NHS.png')}/>
        </View>
        <View backgroundColor='white' borderTopColor='82A9D0'
          borderTopWidth={5} style={{alignItems: 'center', justifyContent: 'flex-start'}}>
          <Text style={{color: this.props.error ? 'red' : '5A7684', height: 40,
            fontSize: 20, textAlign: 'center', marginTop: 20}}>
            {textLogic()}
          </Text>
          <TextInput
            autoFocus={true}
            keyboardType='numeric'
            onChangeText={onChangeTextHandler}
            maxLength={4}
            ref={component => this._textInput = component}
            style={{height: 40, fontSize: 40, textAlign: 'center', color: '5A7684'}}/>
        </View>
        <View backgroundColor='white' style={{height: 250}} />
      </View>
    )
  }
}
