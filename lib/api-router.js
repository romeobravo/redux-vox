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
      get: {},
      post: {},
      put: {},
      delete: {}
    }
  }

  get(path, fn) {
    // router.get(path, fn)
  }

  post(path, fn) {
    // router.post(path, fn)
  }

  put(path, fn) {
    // router.put(path, fn)
  }

  delete(path, fn) {
    // router.delete(path, fn)
  }

  *route (ctx) {
    ctx.body = 'api'
  }
}

const Api = new ApiRouter

export default Api.route