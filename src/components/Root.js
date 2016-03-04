import React, { Component } from 'react-native'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import appStore from '../reducers'

const loggerMiddleware = createLogger()

let store = createStore(appStore,
  applyMiddleware(thunkMiddleware,loggerMiddleware))

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    )
  }
}
