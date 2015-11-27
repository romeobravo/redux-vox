/* React */
import React, { Component, PropTypes } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <div><span>About</span></div>
        <div><a href="http://google.com">Google</a></div>
        <div><a href="/">Home</a></div>
        <div><a href="/profile">profile</a></div>
        <div><a href="/about/user">About/User</a></div>
        { this.props.children }
      </div>
    );
  }
};

export default About;
