import Models from '../../lib/ModelRegister'
var Base = require('./Base');

class User extends Base {
  constructor(params) {
    super(params);
  }

  static tableName() {
    return 'users';
  }
}

Models.register('User', User)
module.exports = User;