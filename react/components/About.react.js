/* React */
import React, { PropTypes } from 'react'
import XComponent from '../lib/xcomponent'

class About extends XComponent {

  constructor(props) {
    super(props)
    console.log('hello')
  }

  handleClick(e) {
    this.actions.fetchAPI(this.store, 'frontend')
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
        <span>{this.props._level}</span>
      </div>
    );
  }
};

export default About;
