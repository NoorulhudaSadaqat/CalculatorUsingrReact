import InputTextField from './helperComponets/InputTextField/InputTextField'
import React, { Component } from 'react'

export class Screen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <InputTextField result={this.props.result} />
      </div>
    )
  }
}

export default Screen
