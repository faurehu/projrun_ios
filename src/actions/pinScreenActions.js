import fetchB64 from './fetcher'

function sendPin(pin) {
  return {
    type: 'SEND_PIN',
    pin: pin
  }
}

function receivePin(json) {
  return {
    type: 'RECEIVE_PIN',
    json: json
  }
}

function pinError(err) {
  return {
    type: 'PIN_ERROR',
    error: err
  }
}

function receiveImages(assets) {
  return {
    type: 'RECEIVE_IMG',
    assets: assets
  }
}

export function tryPin(pin) {
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
        // TODO: create file for fetcher
        // dispatch(receiveImages(images))
        // joinSession(json.url, dispatch)
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
