// import $ from '../../lib/Models'
import { User } from '../../lib/Models'
import BaseController from '../../lib/BaseController'

// var User = require('../models/User');

class UserController extends BaseController {
  constructor() {
    super('/user')
    this.route({
      '/authenticate/:id': this.authenticate,
      '/login': this.login
    });
  }

  get(req, res) {
    console.log(User)
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

export default new UserController