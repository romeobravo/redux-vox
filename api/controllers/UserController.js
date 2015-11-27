var BaseController = require('../../lib/BaseController');

var User = require('../models/User');

class UserController extends BaseController {
  constructor() {
    super('/user')
    this.route({
      '/authenticate/:id': this.authenticate,
      '/login': this.login
    });
  }

  get(req, res) {
    var user = User.find(req.params.id)
    res.json({
      hello: 'world1'
    })
  }

  post(req, res) {
    var user = User.new({
      name: req.body.email
    });

    res.json({
      hello: 'post'
    })
  }

  authenticate(req, res) {
    res.json({
      hello: req.params.id
    })
  }

  login(req, res) {
    res.json({
      hello: 'world'
    })
  }
}

module.exports = new UserController;