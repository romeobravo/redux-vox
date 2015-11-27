var Base = require('./Base');

class User extends Base {
  constructor() {
    super();
  }

  static tableName() {
    return 'users';
  }
}

module.exports = new User;