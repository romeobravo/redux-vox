import send from 'koa-send'
import path from 'path'
import reactServer from './react-server'
import apiRouter from './api-router'
import fresh from './fresh'

const cache = new fresh({
  root: path.resolve(__dirname, '../'),
  lifetime: 10
})

function removeQuery(url) {
  let index = url.indexOf('?')
  if(~index) {
    return url.substring(0, index)
  } else {
    return url
  }
}

function staticServer(ctx) {
  cache.send(ctx)
}

async function router(ctx, next) {
  ctx.edges = ctx.path.substring(1).split('/')
  if(ctx.edges[0] == 'public') {
    staticServer(ctx, next)
  } else if(ctx.edges[0] == 'api') {
    apiRouter.route(ctx, next)
  } else {
    reactServer(ctx, next)
  }
}

export default router