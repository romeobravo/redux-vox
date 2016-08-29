/* React */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import * as action from '../actions/Actions'

/* Components */
import Header from './Header'
import Card from './Card'
import LoadingBar from './LoadingBar'
import { Link } from 'react-router'

class App extends Component {

  componentDidMount() {
    // Actions.fetchHomePosts();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <LoadingBar />
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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
