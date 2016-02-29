import React, {
  Component,
  View,
  Text
} from 'react-native'

export default class WaitingScreen extends Component {
  constructor(props) {
    super(props)
  }

  renderText = () => {
    const { isGuide, studentPin } = this.props
    if(isGuide) {
      return `Please tell your students to use the PIN: ${studentPin} 👻`
    } else {
      return "Waiting for your peers to connect 😎"
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {this.renderText()}
        </Text>
      </View>
    )
  }
}
