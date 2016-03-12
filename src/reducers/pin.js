const pinState = {
  isFetching: false,
  isConnected: false,
  studentsConnected: 0
}

export default function pin(state = pinState, action) {
  switch (action.type) {
  case 'RECEIVE_PIN':
    action.json.tour = JSON.parse(action.json.tour)
    return Object.assign({}, state, action.json, { isFetching: true })
  case 'SEND_PIN':
    return Object.assign({}, state, {
      isFetching: true,
      pin: action.pin
    })
  case 'PIN_ERROR':
    return Object.assign({}, state, {
      error: action.error,
      isFetching: false
    })
  case 'RECEIVE_ASSET':
    let tour = Object.assign({}, state.tour, { assets: action.assets })
    return Object.assign({}, state, {
      tour: tour,
      isFetching: false
    })
  case 'UPDATE_STUDENTS_CONNECTED':
    return state
  default:
    return state
  }
}
