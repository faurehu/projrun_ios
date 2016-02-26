import React, { Component } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import appStore from '../reducers'

let store = createStore(appStore)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
