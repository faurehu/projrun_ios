export function assetUpdate(index) {
  return {
    type: 'ASSET_UPDATE',
    index: index
  }
}

export function sessionStarted(emit) {
  return {
    type: 'SESSION_STARTED',
    emit: emit
  }
}

export function updateStudentsConnected(number) {
  return {
    type: 'UPDATE_STUDENTS_CONNECTED',
    number: number
  }
}
