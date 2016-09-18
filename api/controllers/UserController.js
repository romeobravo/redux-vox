import vox from '../../lib/vox'

class UserController extends vox.controller {
  constructor() {
    super('/user')
    this.route({
      '/authenticate/:id': this.authenticate,
      '/login': this.login
    });
  }

  get(ctx) {
    let user = vox.User.find(ctx.params.id)
    ctx.body = {
      hello: 'world1'
    }
  }

  post(ctx) {
    let user = vox.User.new({
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
