const POST = 'POST'
const GET = 'GET'
const PUT = 'PUT'
const DELETE = 'DELETE'

function trimPath(path) {
  if(path && path[0] == '/') {
    return path.substring(1)
  } else {
    return path
  }
}

function splitPath(path) {
  path = trimPath(path)
  edges = path.split('/')
  edges = edges.map((e) => {
    return { type: edgeType(e), name: e }
  })
  return edges
}

class ApiRouter {
  constructor() {
    this.registry = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE: {}
    }
  }

  _add(method, path, fn) {
    path = '/api' + path
    this.registry[method][path] = fn
  }

  _e404(ctx) {
    ctx.body = '404'
    ctx.status = 404
  }

  get(path, fn) {
    this._add(GET, path, fn)
  }

  post(path, fn) {
    this._add(POST, path, fn)
  }

  put(path, fn) {
    this._add(PUT, path, fn)
  }

  delete(path, fn) {
    this._add(DELETE, path, fn)
  }

  async route(ctx) {
    let fn = this.registry[ctx.method][ctx.path]
    if(fn) {
      ctx.params = {}
      ctx.type = 'json'
      await fn(ctx)
    } else {
      this._e404(ctx)
    }
  }
}

const Api = new ApiRouter

export default Api
