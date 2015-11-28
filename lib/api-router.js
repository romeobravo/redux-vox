import express from 'express'
const router = express.Router()

class ApiRouter {
  get(path, fn) {
    router.get(path, fn)
  }

  post(path, fn) {
    router.post(path, fn)
  }

  put(path, fn) {
    router.put(path, fn)
  }

  delete(path, fn) {
    router.delete(path, fn)
  }

  get router() {
    return router
  }
}

const Api = new ApiRouter

export default Api.router