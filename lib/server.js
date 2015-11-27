'use strict'

require('dotenv').load();
var express = require('express');
var app = express();
var morgan = require('morgan')
var bodyParser = require('body-parser');
var requireDir = require('require-dir');

var path = require('path');
var api = require('./api-router').router;
var react = require('./react-server');

var cluster = require('cluster');
var workers = require('os').cpus().length;

requireDir('../api/controllers')

if(cluster.isMaster && process.env.environment != 'DEVELOPMENT') {
  for (var i = 0; i < workers; i++) {
    cluster.fork();
  }  
  cluster.on('online', function(worker) {
    console.log('Worker ' + worker.process.pid + ' is online');
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    console.log('Starting a new worker');
    cluster.fork();
  });  
} else {
  if(process.env.environment == 'DEVELOPMENT') {
    app.use(morgan('combined'));
  }
  app.use(bodyParser.json())
  app.use('/public', express.static('public'));
  app.use('/public', function(req, res) {
    res.status(404);
    res.json({ error: 404 });
  });
  app.use('/api', api);
  app.use('/api', function(req, res) {
    res.status(404);
    res.json({ error: 404 });
  });
  app.use('/', react);

  var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Worker %s listening at http://%s:%s', process.pid, host, port);
  });
}

