import io from 'socket.io-client'
import request from 'superagent'

class Connect {

  constructor() {
    this.socket = io()
  }

  get(url, data, cb) {
    this.socket.emit('get', {
      path: url
    }, function(res) {
      console.log('res', res)
    });

    return (
      request
        .get(url)
        .query(data)
        .set('Accept', 'application/json')
    )

  }

  post(url, data, cb) {
    return (
      request
        .post(url)
        .send(data)
        .set('Accept', 'application/json')
    )
  }

}

class Local {
  constructor() {
    console.log('local')
  }
}

const exp = typeof window !== 'undefined' ? new Connect : Local
export default exp
