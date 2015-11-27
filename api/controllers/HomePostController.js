var BaseController = require('../../lib/BaseController');

var HomePost = require('../models/HomePost')

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

module.exports = new HomePostController;