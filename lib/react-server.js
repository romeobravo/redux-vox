/**
 * ReactServer
 *
 * @description :: Server-side logic for managing react
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactRouter from '../react/lib/router'
import { Provider } from 'react-redux'
import express from 'express'
import routes from '../react/config/routes'
import fs from 'fs'
import reducer from '../react/reducers'
import configureStore from '../react/store/configureStore'

const router = express.Router()
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

router.get('/*', function(req, res) {
  let store = configureStore();
  let route = {
    path: req.path,
    query: req.query
  }
  let view = ReactRouter.run(route.path)
  let reactString = ReactDOMServer.renderToString(
    React.createElement(
      Provider,
      { store: store },
      view.render
    )
  )

  res.status(view.status)
  return res.send(
    generator.next().value(reactString)
  )
})

export default router

