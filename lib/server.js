import dotenv from 'dotenv'
dotenv.load()

/* Controllers */
import '../api/controllers/HomePostController'
import '../api/controllers/UserController'

/* Koa */
import http from 'http'
import koa from 'koa'
import router from './server-router'
const app = new koa()
const server = http.createServer(app.callback()).listen(process.env.PORT)

/* Websocket Server */
import WebsocketServer from './socket'
const ws = new WebsocketServer(server)


app.use(async (ctx, next) => {
  let start = new Date
  await next()
  let ms = new Date - start
  console.log('%s %s - %sms', ctx.method, ctx.url, ms)
})

app.use(router)

// app.listen(process.env.PORT)


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
