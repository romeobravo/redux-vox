import vox from '../../lib/vox'

class HomePostController extends vox.controller {
  constructor() {
    super('/home_post')
  }

  async get(ctx) {
    // var post = new HomePost({
    //   title: 'New Post',
    //   content: 'lorum'
    // }).validate();
    var result = await HomePost.all()
    ctx.body = {
      data: result
    }
  }
}

export default new HomePostController
