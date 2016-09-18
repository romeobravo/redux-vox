import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'bem-classes'

const LoadingBar = (props) => {
  const classes = cx(
    'loading-bar',
    { $started: props.fetching },
    { $finished: props.response },
  )
  console.log(classes)
  return (
    <div className={classes}></div>
  )
}

function mapStateToProps(state) {
  return {
    fetching: state.api.isFetching,
    response: state.api.response,
  }
}

export default connect(mapStateToProps)(LoadingBar)
