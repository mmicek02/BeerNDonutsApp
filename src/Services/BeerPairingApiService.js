import config from '../config'

const BeerPairingApiService = {
  getBeerPairings() {
    return fetch(`${config.API_ENDPOINT}/beerpairings`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBeerPairing(beerId) {
    return fetch(`${config.API_ENDPOINT}/beerpairings/${beerId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBeerPairingsComments(beerId) {
    return fetch(`${config.API_ENDPOINT}/beerpairings/${beerId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(beerId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        beer_id: beerId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default BeerPairingApiService 