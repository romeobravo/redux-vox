import BaseController from '../../lib/BaseController'
import HomePost from '../models/HomePost'

class HomePostController extends BaseController {
  constructor() {
    super('/home_post')
  }

  get(req, res) {
    // var post = new HomePost({
    //   title: 'New Post',
    //   content: 'lorum'
    // }).validate();
    HomePost
      .all()
      .then(function(result) {
        res.json({
          data: result
        })
      });
  }
}

export default new HomePostController