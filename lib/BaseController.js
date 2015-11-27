var express = require('express')
var router = express.Router();
var apirouter = require('./api-router');

class BaseController {
  constructor(base) {
    this.base = base || '/';
    if(this.get)
      apirouter.get(this.base, this.get);
    if(this.post)
      apirouter.post(this.base, this.post);
    if(this.put)
      apirouter.put(this.base, this.put);
    if(this.delete)
      apirouter.delete(this.base, this.delete)
  }

  route(customRoutes) {
    for(var i in customRoutes) {
      if (customRoutes.hasOwnProperty(i)) {
        apirouter.get(this.base + i, customRoutes[i]);
      }
    }
  }
}

module.exports = BaseController;