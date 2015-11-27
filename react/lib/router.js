var React = require('react');

function find(node, path) {
  var chain;
  for(var edge in path) {
    if (!node.children) {
      return false;
    } else if (node.children[path[edge]]) {
      node = node.children[path[edge]];
    } else {
      return false;
    }
  }
  return node;
}

function buildChain(root, node) {
  var chain = React.createElement(node.component);
  while(root != node) {
    node = node.parent;
    chain = React.createElement(node.component, {}, chain);
  }
  return chain;
}

function build(root, node) {
  return {
    render: buildChain(root, node),
    status: 200
  }
}

function formatRoute(route) {
  if(route[route.length-1] == '/') {
    route = route.substring(0, route.length - 1);
  }
  route = route ? route.substring(1).split('/') : [];
  return route;
}

function enhanceRoutes(routes) {
  if(routes.children) {
    for(var i in routes.children) {
      routes.children[i].parent = routes;
      routes.children[i] = enhanceRoutes(routes.children[i]);
    }
  }
  return routes
}

function http404(routes) {
  return {
    render: React.createElement(routes['404']),
    status: 404
  }
}

var router = {
  init(settings) {
    this.routes = enhanceRoutes(settings.routes);
  },
  run(route) {
    route = formatRoute(route);
    var leaf = find(this.routes, route);
    var res = leaf ? build(this.routes, leaf) : http404(this.routes);
    return res
  }
};

module.exports = router;
