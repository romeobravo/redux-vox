/**
 * ReactServer
 *
 * @description :: Server-side logic for managing react
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

require("babel/register")({experimental: true});

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('../react/components/App.react');
var reactRouter = require('../react/lib/router');
var routes = require('../react/routes');
var express = require('express');
var fs = require('fs');
var reducer = require('../react/reducers');
var router = express.Router();

var templateSource = './react/main.html';
var template = null;

var configureStore = require('../react/store/configureStore');
var Provider = require('react-redux').Provider;

function constructTemplate(src) {
  var file = fs.readFileSync(src, 'utf8');
  var regex = /\{\{.*\}\}/i;
  var reactNode = file.match(regex);
  if(!reactNode) {
    return function(reactString) {
      return 'invalid template';
    }
  }
  reactNode = reactNode[0].replace(/[ \{\}]/g, '');
  var template = file.split(regex);
  return function(reactString) {
    return template[0] + '<div id=' + reactNode + '>' + reactString + '</div>' + template[1];
  }
}

router.get('/*', function(req, res) {
  
  template = template || constructTemplate(templateSource);

  var store = configureStore();

  reactRouter.init({
    routes: routes
  });

  var route = {
    path: req.path,
    query: req.query
  };

  var view = reactRouter.run(route.path);
  var reactString = ReactDOMServer.renderToString(
    React.createElement(
      Provider,
      { store: store },
      view.render
    )
  );

  res.status(view.status);

  return res.send(
    template(reactString)
  );

});

module.exports = router;

