export default function pin(state = {}, action) {
  switch (action.type) {
  case 'SEND_PIN':
    var url = `http://localhost:3000/?pin=${action.pin}`
    console.log(url)
    fetch(url, {method: "POST"})
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        return state
      })
      .done()
  default:
    return state
  }
}
