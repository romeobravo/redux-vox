import Base from './Base'

class User extends Base {
  constructor(params) {
    super(params)
  }

  static tableName() {
    return 'users'
  }
}

export default User