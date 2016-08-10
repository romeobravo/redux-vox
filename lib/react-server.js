/**
 * ReactServer
 *
 * @description :: Server-side logic for managing react
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../react/config/routes'
import { Provider } from 'react-redux'
import fs from 'fs'
import reducer from '../react/reducers'
import configureStore from '../react/store/configureStore'

const prod = './react/config/main.html'
const dev = './react/config/main.dev.html'
const templateSrc = (process.env.ENVIRONMENT == 'DEVELOPMENT') ? dev : prod
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

function server(ctx, next) {
  match({ routes, location: ctx.url }, (err, redirect, props) => {
    if (err) {
      ctx.status = 500
    } else if (props) {
      const store = configureStore()
      const html = renderToString(
        React.createElement(
          RouterContext,
          {
            store,
            ...props
          }
        )
      )

      ctx.status = 200
      ctx.body = generator.next().value(html)
    } else {
      ctx.status = 404
    }
  })
}

export default server
