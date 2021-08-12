import React, { Component } from 'react'
import './Button.css'

export class Button extends Component {
  constructor(props) {
    super(props)
    console.log('Class name :' + this.props.Class)
  }

  render() {
    return (
      <button
        className={`${this.props.Class}`}
        onClick={() => this.props.setValue(this.props.name)}
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button
