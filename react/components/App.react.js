/* React */
import React, { Component, PropTypes } from 'react'
import ViewComponent from '../lib/view-component'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import * as Actions from '../actions/Actions'

/* Components */
import Header from './Header.react'
import Card from './Card.react'

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
        <div className="body">
          <Card />
          <div className="body__details">
            <div><span>{this.storeState.route.path}</span></div>
            <a href="/">App</a><br/>
            <a href="/about">About</a>
            <a href="/logout">Logout</a>
            { this.view }
          </div>
        </div>
      </div>
    );
  }
}

export default App
