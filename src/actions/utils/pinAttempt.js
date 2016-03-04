import fetchB64 from './fetcher'
import { socket } from './socket'

import { sendPin,
          receivePin,
          pinError } from '../pinScreenActions'

function receiveImages(assets) {
  return {
    type: 'RECEIVE_IMG',
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
        .then(assets => dispatch(receiveImages(assets)))
        .catch(e => console.log(e))

        socket(json.sessionUrl, dispatch)
        // TODO Error Handler
      }
    }

    return fetch(`http://localhost:3000/?pin=${pin}`, {method: 'POST'})
      .then(response => response.json())
      .then(json => htmlSuccess(json))
      .catch(err =>
        dispatch(pinError(err))
      )
  }
}
