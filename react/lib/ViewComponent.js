import React, { Component, PropTypes } from 'react'

class ViewComponent extends Component {

  constructor(props) {
    super(props)
  }

  _downstream() {
    let obj = {}
    for(key in this.props.keys) {
      if(~this.downstream.indexOf(key)) {
        obj[key] = this.props[key]
      }
    }
    obj.level = this.props.level + 1
    return obj
  }

  view() {
    let viewComponents = this.props.store.route.view
    let level = this.props.level
    if(level + 1 < viewComponents.length) {
      return React.createElement(viewComponents[level+1], Object.assign({}, this._downstream()))
    }
    return null
  }
}

export default ViewComponent