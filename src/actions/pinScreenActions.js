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

export function tryPin(pin) {
  return function (dispatch) {
    dispatch(sendPin(pin))
    return fetch(`http://localhost:3000/?pin=${pin}`, {method: 'POST'})
      .then(response => response.json())
      .then(json => json.error ? dispatch(pinError(json.error)) : dispatch(receivePin(json))
      ).catch(err =>
        dispatch(pinError(err))
      )
  }
}
