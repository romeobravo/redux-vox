import vox from '../../lib/vox'

class HomePost extends vox.model {
  constructor(params) {
    super(params)
    this.validate.content = {
      type: 'string',
      minLength: 2,
      maxLength: 50
    }
  }

  static tableName() {
    return 'home_posts'
  }
}

export default HomePost
