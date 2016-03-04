const pinState = {
  isFetching: false,
  isConnected: false
}

export default function pin(state = pinState, action) {
  switch (action.type) {
  case 'RECEIVE_PIN':
    return Object.assign({}, pinState, action.json)
  case 'SEND_PIN':
    return Object.assign({}, state, {
      isFetching: true,
      pin: action.pin
    })
  case 'PIN_ERROR':
    return Object.assign({}, pinState, {
      error: action.error
    })
  case 'RECEIVE_IMG':
    let tour = Object.assign({}, state.tour, {assets: action.assets, isFetching: false})
    return Object.assign({}, state, {
      tour: tour
    })
  default:
    return state
  }
}
