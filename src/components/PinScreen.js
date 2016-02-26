import React, {
  Component,
  View,
  TextInput
} from 'react-native'

export default class PinScreen extends Component {
  constructor(props) {
    super(props)
  }

  onChangeTextHandler = (text) => {
    let { send } = this.props
    if(text.length === 4) {
      this._textInput.setNativeProps({text: ''})
      send(text)
    }
  }

  render() {
    let { onChangeTextHandler } = this
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          ref={component => this._textInput = component}
          keyboardType='numeric'
          style={{height: 40, fontSize: 40, textAlign: 'center'}}
          maxLength={4}
          autoFocus={true}
          onChangeText={onChangeTextHandler} />
      </View>
    )
  }
}
