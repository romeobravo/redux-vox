var express = require('express');
var router = express.Router();

var POST = 'POST';
var GET = 'GET';
var PUT = 'PUT';
var DELETE = 'DELETE';

var UserController = require('../api/controllers/UserController');

// function route(method, path, controllerMethod) {
//   switch(method) {
//     case GET:
//       return function(nsp) {
//         router.get(nsp + path, controllerMethod);
//       };
//       break;
//   }
// }

// function resource(path, controller) {
//   if(controller.get != undefined) {
//     router.get(path, controller.get);
//   }
//   if(controller.post != undefined) {
//     router.post(path, controller.post);
//   }
//   if(controller.put != undefined) {
//     router.put(path, controller.put);
//   }
//   if(controller.delete != undefined) {
//     router.delete(path, controller.delete);
//   }
// }

// function namespace(nsp, routes) {
//   return function(nspParent) {
//     for(var i in routes) {
//       routes[i](nspParent + nsp);
//     }
//   }
// }


// var routes = [];



// namespace('/admin', [
//   route(GET, '/user/:id', UserController.get)
// ]);


// // define the home page route
// router.get('/', function(req, res) {
//   res.send('Birds home page');
// });

// // define the about route
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });

module.exports = router;