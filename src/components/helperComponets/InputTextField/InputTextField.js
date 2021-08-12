import './InputTextField.css'
import React, { Component } from 'react'

export class InputTextField extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //jsx
    return (
      <div>
        <input
          className="inputClass"
          type="text"
          name="result"
          value={this.props.result}
        ></input>
      </div>
    )
  }
}

export default InputTextField
