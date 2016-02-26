export function send(pin) {
  return {
    type: 'SEND_PIN',
    pin: pin
  }
}
