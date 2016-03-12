var React = require('react-native')
var io = require('socket.io-client/socket.io')
window.navigator.userAgent = 'react-native'

import { assetUpdate,
          sessionStarted,
          updateStudentsConnected } from '../socketActions'

global.socket = null;

export function socket(url, dispatch) {
  global.socket = io(url, {jsonp: false});

  global.socket.on('assetUpdate', index => dispatch(assetUpdate(index)))
  global.socket.on('updateStudentsConnected',
              connected => dispatch(updateStudentsConnected(connected)))

}
