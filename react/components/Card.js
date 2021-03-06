/* React */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__image-holder">
          <img className="card__image" src="http://fillmurray.com/150/150"/>
        </div>
        <section className="card__details">
          <span>Hello</span>
        </section>
      </div>
    )
  }
}

export default Card
