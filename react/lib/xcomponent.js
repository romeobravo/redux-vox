import React, { Component, PropTypes } from 'react'

class XComponent extends Component {

  constructor(props) {
    super(props)
  }

  get store() {
    return this.props.store
  }

  get actions() {
    return this.props.actions
  }

  get storeState() {
    return this.props.store.getState()
  }
}

export default XComponent