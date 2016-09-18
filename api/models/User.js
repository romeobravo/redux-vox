import vox from '../../lib/vox'

class User extends vox.model {
  constructor(params) {
    super(params)
  }

  static tableName() {
    return 'users'
  }
}

export default User
