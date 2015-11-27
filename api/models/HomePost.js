var Base = require('./Base');

class HomePost extends Base {
  constructor(params) {
    super(params);
    this.validate.content = {
      type: 'string',
      minLength: 2,
      maxLength: 50
    }
  }

  static tableName() {
    return 'home_posts';
  }
}

module.exports = HomePost;