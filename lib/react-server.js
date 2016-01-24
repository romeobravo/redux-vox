/**
 * ReactServer
 *
 * @description :: Server-side logic for managing react
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactRouter from '../react/lib/router'
import App from '../react/components/App.react'
import VoxView from '../react/lib/VoxView'
import { Provider } from 'react-redux'
import routes from '../react/config/routes'
import VoxRoutes from '../react/config/vox-routes'
import fs from 'fs'
import reducer from '../react/reducers'
import configureStore from '../react/store/configureStore'

const templateSrc = './react/config/main.html'
const generator = template()

function constructTemplate(src) {
  let file = fs.readFileSync(src, 'utf8')
  let regex = /\{\{.*\}\}/i
  let reactNode = file.match(regex)
  if(!reactNode) {
    return function(reactString) {
      return 'invalid template'
    }
  }
  reactNode = reactNode[0].replace(/[ \{\}]/g, '');
  let template = file.split(regex);
  return function(reactString) {
    return template[0] + '<div id=' + reactNode + '>' + reactString + '</div>' + template[1]
  }
}

function* template(reactString) {
  const templater = constructTemplate(templateSrc)
  while(true)
    yield templater
}

ReactRouter.init({
  routes: routes
})


function* server(ctx) {
  const viewer = new VoxView({ routes: routes })
  let store = configureStore({ route: { path: ctx.path, view: viewer.go(ctx.path) } })
  let view = ReactRouter.run(ctx.path)
  let reactString = ReactDOMServer.renderToString(
    React.createElement(
      App,
      { store: store.getState(), level: 0 }
    )
  )
  ctx.status = view.status
  ctx.body = generator.next().value(reactString)
}

export default server

