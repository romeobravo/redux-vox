/* React */
import React, { Component, PropTypes } from 'react'

class About extends Component {

  constructor(props) {
    super(props)
    console.log('hello')
  }

  handleClick(e) {
    this.props.actions.fetchAPI('frontend')
  }

  render() {
    console.log(this)
    return (
      <div>
        <div><span>About2</span></div>
        <div><a href="http://google.com">Google</a></div>
        <div><a href="/">Home</a></div>
        <div><a href="/profile">profile</a></div>
        <div><a href="/about/user">About/User</a></div>
        <button onClick={this.handleClick.bind(this)}>Click Here</button>
        <span>{this.props.level}</span>
        { this.props.children }
      </div>
    );
  }
};

export default About;
