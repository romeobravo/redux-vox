import React, { Component, PropTypes } from 'react'

const Button = (props) => {
  let className = 'button '
  if (props.className) className += props.className
  return(
    <button className={className}>{props.children}</button>
  )
}

export default Button
