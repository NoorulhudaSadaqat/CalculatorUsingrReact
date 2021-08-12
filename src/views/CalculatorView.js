import React, { Component } from 'react'
import Screen from '../components/Screen'
import Keypad from '../components/Keypad'

export class CalculatorView extends Component {
  constructor() {
    super()
    this.state = {
      result: '0',
    }
    this.setValue = this.setValue.bind(this)
  }

  setValue(value) {
    this.setState({
      result: value,
    })
  }

  render() {
    return (
      <div>
        <Screen result={this.state.result} />
        <Keypad setValue={this.setValue} result={this.state.result} />
      </div>
    )
  }
}

export default CalculatorView
