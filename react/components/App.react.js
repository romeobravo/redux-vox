/* React */
import React, { Component, PropTypes } from 'react'
import ViewComponent from '../lib/ViewComponent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import * as Actions from '../actions/Actions'

/* Components */
import Header from './Header.react'


class App extends ViewComponent {

  constructor(props) {
    super(props)
    this.downstream = [
      'store',
      'actions'
    ]
  }

  componentDidMount() {
    // Actions.fetchHomePosts();
  }

  render() {
    return (
      <div>
        <Header />
        <div><span>{this.props.store.route.path}</span></div>
        <a href="/">App</a><br/>
        <a href="/about">About</a>
        <a href="/logout">Logout</a>
        { this.view() }
      </div>
    );
  }
}

export default App
