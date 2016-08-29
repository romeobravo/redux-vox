import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const LoadingBar = (props) => {
  console.log(props)
  if (props.api) {
    return (
      <div className="loading-bar loading-bar--started"></div>
    )
  } else {
    return (
      <div className="loading-bar"></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    api: state.api.isFetching
  }
}

export default connect(mapStateToProps)(LoadingBar)
