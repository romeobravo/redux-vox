import Server from 'socket.io'
import Api from './api'

function disconnect() {
  console.log('goodbye')
}

async function get(socket, req, cb) {
  let ctx = {
    method: 'GET',
    path: req.path
  }
  await Api.route(ctx)
  cb({
    type: ctx.type,
    status: ctx.status,
    body: ctx.body
  })
}

function connection(socket) {
  console.log('hello')
  socket.on('get', (req, cb) => get(socket, req, cb))
  socket.on('disconnect', disconnect)
}

class WebsocketServer {
  constructor(server) {
    this.io = new Server()
    this.io.attach(server)
    this.io.on('connection', connection)
  }
}

export default WebsocketServer