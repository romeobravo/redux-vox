import io from 'socket.io-client'
import request from 'superagent'

class Connect {

  constructor() {
    this.socket = io()
  }

  get(url, data) {
    if (url && url[0] == '/') {
      return this.socketGet(url, data)
    } else {
      return this.xhrGet(url, data)
    }
  }

  post(url, data) {
    if (url && url[0] == '/') {
      return this.socketPost(url, data)
    } else {
      return this.xhrPost(url, data)
    }
  }

  socketGet(url, data) {
    return new Promise((resolve, reject) => {
      this.socket.emit('get', { url }, (res) => {
        res.error ? reject(res) : resolve(res)
      })
    })
  }

  socketPost(url, data) {
    return new Promise((resolve, reject) => {
      this.socket.emit('post', { url }, (res) => {
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
