/* React */
import React, { Component, PropTypes } from 'react'
import * as action from '../actions/Actions'
import { connect } from 'react-redux'

import Button from './Button'

class About extends Component {

  handleClick(e) {
    this.props.dispatch(action.get('http://api.reddit.com/r/frontend'))
  }

  render() {
    return (
      <div>
        <Button>Click here</Button>
        <Button className="button--success">Click here</Button>
        <div><span>About2</span></div>
        <div><a href="http://google.com">Google</a></div>
        <div><a href="/">Home</a></div>
        <div><a href="/profile">profile</a></div>
        <div><a href="/about/user">About/User</a></div>
        <span>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum </span>
        <button onClick={this.handleClick.bind(this)}>Click Here</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(About)
