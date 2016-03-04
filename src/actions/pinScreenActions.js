import { downloadFile,
          readFile,
          CachesDirectoryPath } from 'react-native-fs'

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

function receiveImages(tour) {
  return {
    type: 'RECEIVE_IMG',
    tour: tour
  }
}

function fetchB64(assets) {
  return new Promise((resolve, reject) => {
    let b64 = []
    assets.forEach(asset => b64.push(B64Fetcher(asset, assets.indexOf(asset))))
    Promise.all(b64).then(resolve).catch(reject)
  })
}

function B64Fetcher(asset, index) {
  return new Promise((resolve, reject) => {
    let path = `${CachesDirectoryPath}/${index}`
    downloadFile(asset.url, path)
    .then(res => readFile(path, 'base64'))
    .then(b64 => asset.b64 = b64)
    .then(resolve(asset))
    .catch(reject)
  })
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
        .then(x => json.tour.assets = x)
        .then(dispatch(receiveImages(json.tour)))
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
