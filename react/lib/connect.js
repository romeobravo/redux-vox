var io = require('socket.io-client');
var request = require('superagent');

class connect {

  constructor() {
    
  }

  get(url, data, cb) {
    request
      .get(url)
      .query(data)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        cb(err, response.body);
      });

    // this.socket.emit('get', {
    //   path: url
    // }, function(res) {

    // });
  }

  post(url, data, cb) {
    request
      .post(url)
      .send(data)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        cb(err, response.body);
      });
  }

}

module.exports = new connect
