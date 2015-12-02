import dotenv from 'dotenv'
dotenv.load()

// import express from 'express'
// const app = express()

// import api from './api-router'
// import reactServer from './react-server'

import koa from 'koa'
import router from './server-router'
const app = koa()


app.use(function *(next){
  var start = new Date
  yield next
  var ms = new Date - start
  console.log('%s %s - %sms', this.method, this.url, ms)
})

app.use(router)

app.listen(process.env.PORT)








// requireDir('../api/controllers')

// if(process.env.environment == 'DEVELOPMENT') {
//   app.use(morgan('combined'))
// }
// app.use(bodyParser.json())

// /* Static Assets */
// app.use('/public', express.static('public'))
// app.use('/public', function(req, res) {
//   res.status(404)
//   res.json({ error: 404 })
// });

// /* Api */
// app.use('/api', api);
// app.use('/api', function(req, res) {
//   res.status(404)
//   res.json({ error: 404 })
// });

// /* HTML w/ React */
// app.use('/', reactServer)

// const server = app.listen(process.env.PORT || 1337, function () {
//   let host = server.address().address
//   let port = server.address().port
//   console.log('Worker %s listening at http://%s:%s', process.pid, host, port)
// });

/*

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
  app.use('/', reactServer);

  var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Worker %s listening at http://%s:%s', process.pid, host, port);
  });
}

*/