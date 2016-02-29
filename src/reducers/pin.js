const pinState = {
  isFetching: false
}

export default function pin(state = pinState, action) {
  switch (action.type) {
  case 'RECEIVE_PIN':
    return Object.assign({}, pinState, {
      isFetching: false
    }, action.json)
  case 'SEND_PIN':
    return Object.assign({}, state, {
      isFetching: true,
      pin: action.pin
    })
  case 'PIN_ERROR':
    return Object.assign({}, pinState, {
      error: action.error
    })
  default:
    return state
  }
}
