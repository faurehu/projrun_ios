import { downloadFile,
          readFile,
          CachesDirectoryPath } from 'react-native-fs'

export default function fetchB64(assets) {
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
