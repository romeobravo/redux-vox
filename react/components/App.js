/* React */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import * as Actions from '../actions/Actions'

/* Components */
import Header from './Header'
import Card from './Card'
import { Link } from 'react-router'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Actions.fetchHomePosts();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__main">
          <Card />
          <div className="app__details">
            <div><span>{}</span></div>
            <Link to="/">App</Link><br/>
            <Link to="/about">About</Link>
            <Link to="/logout">Logout</Link>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default App
