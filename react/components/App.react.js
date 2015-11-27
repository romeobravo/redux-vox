/* React */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

/* Actions */
import * as Actions from '../actions/Actions';

/* Components */
import Header from './Header.react';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted');
    console.log(this.props)
    // Actions.fetchHomePosts();
  }

  render() {
    return (
      <div>
        <Header />
        <span>{this.props.route}</span>
        <a href="/">App</a><br/>
        <a href="/about">About</a>
        <a href="/logout">Logout</a>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.route
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
