import fetchB64 from './fetcher'
import { socket } from './socket'

import { sendPin,
          receivePin,
          pinError } from '../pinScreenActions'

function receiveAssets(assets) {
  return {
    type: 'RECEIVE_ASSET',
    assets: assets
  }
}

export function pinAttempt(pin) {
  return function (dispatch) {
    dispatch(sendPin(pin))
    function htmlSuccess(json) {
      if(json.error) {
        dispatch(pinError(json.error))
      } else {
        dispatch(receivePin(json))

        fetchB64(json.tour.assets)
        .then(assets => dispatch(receiveAssets(assets)))
        .catch(e => console.log('ANY ERROR?', e))

        socket(json.socketURL, dispatch)
        // TODO Error Handler
      }
    }

    dispatch(sendPin(pin))

      return fetch(`http://1cddaa96.ngrok.com/auth/${pin}`)
      .then(response => response.json())
      .then(json => htmlSuccess(json))
      .catch(err =>
        dispatch(pinError(err))
      )
  }
}
