import dotenv from 'dotenv'
dotenv.load()

/* Controllers */
import '../api/controllers/HomePostController'
import '../api/controllers/UserController'

/* Koa */
import http from 'http'
import koa from 'koa'
import router from './server-router'
const app = new koa()
const server = http.createServer(app.callback()).listen(process.env.PORT)

/* Websocket Server */
import WebsocketServer from './socket'
const ws = new WebsocketServer(server)

app.use(async (ctx, next) => {
  let start = new Date
  await next()
  let ms = new Date - start
  console.log('%s %s - %sms', ctx.method, ctx.url, ms)
})

app.use(router)
