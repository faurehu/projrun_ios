export function sendPin(pin) {
  return {
    type: 'SEND_PIN',
    pin: pin
  }
}

export function receivePin(json) {
  return {
    type: 'RECEIVE_PIN',
    json: json
  }
}

export function pinError(err) {
  return {
    type: 'PIN_ERROR',
    error: err
  }
}
