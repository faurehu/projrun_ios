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

export function pinAttempt(pin) {
  if(pin === 1234) {
    dispatch(sendPin(pin))
  } else {
    dispatch(pinError({error: 'sup'}))
  }
}
