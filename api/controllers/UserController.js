import { User } from '../../lib/Models'
import BaseController from '../../lib/BaseController'

class UserController extends BaseController {
  constructor() {
    super('/user')
    this.route({
      '/authenticate/:id': this.authenticate,
      '/login': this.login
    });
  }

  get(ctx) {
    let user = User.find(ctx.params.id)
    ctx.body = {
      hello: 'world1'
    }
  }

  post(ctx) {
    let user = User.new({
      name: req.body.email
    });

    ctx.body = {
      hello: 'post'
    }
  }

  authenticate(ctx) {
    ctx.body = {
      hello: req.params.id
    }
  }

  login(ctx) {
    ctx.body = {
      hello: 'world'
    }
  }
}

export default new UserController