var React = require('react-native')
var io = require('socket.io-client/socket.io')
window.navigator.userAgent = 'react-native'

let socket = null;

import { assetUpdate,
          sessionStarted,
          updateStudentsConnected } from '../socketActions'

export function socket(url, dispatch) {
  socket = io('ws://localhost:3000', {jsonp: false})
  // dispatch(sessionStarted())
  socket.on('assetUpdate', index => dispatch(assetUpdate(index)))
  socket.on('updateStudentsConnected',
              connected => dispatch(updateStudentsConnected(connected)))
}

export function broadcast(index) {
  socket.emit('assetBroadcast', index)
}
