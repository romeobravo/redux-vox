/* React */
import React, { Component, PropTypes } from 'react'

class About extends Component {

  constructor(props) {
    super(props)
  }

  handleClick(e) {
    // this.actions.fetchAPI(this.store, 'frontend')
    this.actions.get(this.store, 'frontend')
  }

  render() {
    return (
      <div>
        <div><span>About2</span></div>
        <div><a href="http://google.com">Google</a></div>
        <div><a href="/">Home</a></div>
        <div><a href="/profile">profile</a></div>
        <div><a href="/about/user">About/User</a></div>
        <button onClick={this.handleClick.bind(this)}>Click Here</button>
      </div>
    )
  }
}

export default About
