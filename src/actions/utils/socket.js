var React = require('react-native')
var io = require('socket.io-client/socket.io')
window.navigator.userAgent = 'react-native'

let socket = null;
// 
// export function getSocket() {
//   return socket;
// }

import { assetUpdate,
          sessionStarted,
          updateStudentsConnected } from '../socketActions'

export function socket(url, dispatch) {
  socket = io(url, {jsonp: false})
  // dispatch(sessionStarted()) TODO: when connected
  socket.on('assetUpdate', index => dispatch(assetUpdate(index)))
  socket.on('updateStudentsConnected',
              connected => dispatch(updateStudentsConnected(connected)))

}

export function broadcast(index) {
  socket.emit('assetBroadcast', index)
}
