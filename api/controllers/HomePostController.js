import BaseController from '../../lib/BaseController'
import HomePost from '../models/HomePost'

class HomePostController extends BaseController {
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