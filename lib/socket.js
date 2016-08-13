import Server from 'socket.io'
import Api from './api'
import Logger from './logger'
const logger = new Logger('WS')

function disconnect() {
  logger.log('Goodbye')
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
  logger.log('Hello')
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
