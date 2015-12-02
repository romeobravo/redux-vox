import send from 'koa-send'
import path from 'path'
import reactServer from './react-server'


function removeQuery(url) {
  let index = url.indexOf('?')
  if(~index) {
    return url.substring(0, index)
  } else {
    return url
  }
}

function* staticServer(ctx) {
  yield send(ctx, ctx.path, { root: path.resolve(__dirname, '../') })
}

function* apiServer(ctx) {
  ctx.body = 'api'
}

function* router(next) {
  this.edges = this.path.substring(1).split('/')
  if(this.edges[0] == 'public') {
    yield staticServer(this)
  } else if(this.edges[0] == 'api') {
    yield apiServer(this)
  } else {
    yield reactServer(this)
  }
}

export default router