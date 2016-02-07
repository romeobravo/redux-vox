import React, { Component, PropTypes } from 'react'

class ViewComponent extends Component {

  constructor(props) {
    super(props)
  }

  get _level() {
    return this.props._level ? this.props._level : 0
  }

  _downstream() {
    let obj = {}
    for(let key of Object.keys(this.props)) {
      if(this.downstream.includes(key)) {
        obj[key] = this.props[key]
      }
    }
    obj._level = this._level + 1
    return obj
  }

  get view() {
    let viewComponents = this.storeState.route.view
    let level = this._level
    if(level + 1 < viewComponents.length) {
      return React.createElement(viewComponents[level+1], Object.assign({}, this._downstream()))
    }
    return null
  }

  get actions() {
    return this.props.actions
  }

  get store() {
    return this.props.store
  }

  get storeState() {
    return this.props.store.getState()
  }
}

export default ViewComponent