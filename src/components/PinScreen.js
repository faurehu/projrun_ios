import React, {
  Component,
  View,
  TextInput,
  Text
} from 'react-native'

export default class PinScreen extends Component {
  constructor(props) {
    super(props)
  }

  onChangeTextHandler = (text) => {
    let { tryPin } = this.props
    if(text.length === 4) {
      this._textInput.setNativeProps({text: ''})
      tryPin(text)
    }
  }

  textLogic = () => {
    let { error, isFetching, pin } = this.props
    let text = !isFetching ? 'Please enter your PIN' : `Attempting with PIN ${pin}`
    if(error) {
      if(error == 'PIN_INVALID') {
        text = 'Your PIN was not valid, please try again'
      } else {
        text = 'There was an internal problem'
      }
    }
    return text
  }

  render() {
    let { onChangeTextHandler, textLogic } = this
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {textLogic()}
        </Text>
        <TextInput
          autoFocus={true}
          keyboardType='numeric'
          onChangeText={onChangeTextHandler}
          maxLength={4}
          ref={component => this._textInput = component}
          style={{height: 40, fontSize: 40, textAlign: 'center'}}/>
      </View>
    )
  }
}
