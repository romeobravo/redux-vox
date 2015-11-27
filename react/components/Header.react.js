/* React */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <span>Vox</span>
        </div>
        <div className="header-nav">
          <div className="header-nav-item">
            <span>Home</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
