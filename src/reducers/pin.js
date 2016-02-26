export default function pin(state = {}, action) {
  switch (action.type) {
  case 'SEND_PIN':
    console.log('Action dispatched with pin : ' + action.pin)
    return state
  default:
    return state
  }
}
