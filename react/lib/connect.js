import io from 'socket.io-client'
import request from 'superagent'

class Connect {

  constructor() {
    this.socket = io()
  }

  get(path, data, cb) {
    return new Promise((resolve, reject) => {
      this.socket.emit('get', { path }, (res) => {
        res.error ? reject(res) : resolve(res)
      })
    })
  }

  xhrGet(url, data) {
    return (
      request
        .get(url)
        .query(data)
        .set('Accept', 'application/json')
    )
  }

  xhrPost(url, data) {
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
    // console.log('local')
  }

  get() {

  }
}

const Connection = typeof window !== 'undefined' ? new Connect : new Local
export const get = Connection.get
export default Connection
