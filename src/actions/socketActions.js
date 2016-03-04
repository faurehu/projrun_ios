export function assetUpdate(index) {
  return {
    type: 'ASSET_UPDATE',
    index: index
  }
}

export function sessionStarted() {
  return {
    type: 'SESSION_STARTED'
  }
}

export function updateStudentsConnected(number) {
  return {
    type: 'UPDATE_STUDENTS_CONNECTED',
    number: number
  }
}
