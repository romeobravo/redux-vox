var express = require('express');
var router = express.Router();

class ApiRouter {
  get(path, fn) {
    router.get(path, fn);
  }

  post(path, fn) {
    router.post(path, fn);
  }

  put(path, fn) {
    router.put(path, fn);
  }

  delete(path, fn) {
    router.delete(path, fn);
  }

  get router() {
    return router;
  }
}

module.exports = new ApiRouter;