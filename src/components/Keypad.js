import React, { Component } from 'react'
import Button from './helperComponets/Button/Button'
import { twoValueCalculation, singleValueCalculation } from '../calculation'

export class Keypad extends Component {
  constructor(props) {
    super(props)

    this.setValueByTwoValueCalculation = this.setValueByTwoValueCalculation.bind(
      this,
    )
    this.setValueByOneValueCalculation = this.setValueByOneValueCalculation.bind(
      this,
    )
    this.setValue = this.setValue.bind(this)
  }
  setValue(value) {
    if (this.props.result === '0' || this.props.result === 'wrong expression') {
      this.props.setValue(value)
    } else {
      const result = this.props.result + value
      this.props.setValue(result)
    }
  }
  setValueByOneValueCalculation(value) {
    console.log(this.props.result)
    const result = singleValueCalculation(this.props.result, value)
    this.props.setValue(result)
  }

  setValueByTwoValueCalculation(value) {
    const result = twoValueCalculation(this.props.result)
    this.props.setValue(result)
  }

  render() {
    return (
      <div>
        <Button
          Class="button"
          name="sin"
          text="Sin"
          setValue={this.setValueByOneValueCalculation}
        />
        <Button
          Class="button"
          name="cos"
          text="Cos"
          setValue={this.setValueByOneValueCalculation}
        />
        <Button
          Class="button"
          name="tan"
          text="Tan"
          setValue={this.setValueByOneValueCalculation}
        />
        <Button
          Class="button"
          name="clear"
          text="C"
          setValue={this.setValueByOneValueCalculation}
        />
        <br />

        <Button
          Class="button"
          name="xSquare"
          text="xˆ2"
          setValue={this.setValueByOneValueCalculation}
        />
        <Button
          Class="button"
          name="xCube"
          text="xˆ3"
          setValue={this.setValueByOneValueCalculation}
        />
        <Button
          Class="button"
          name="squareRoot"
          text="//"
          setValue={this.setValueByOneValueCalculation}
        />
        <Button
          Class="button"
          name="log"
          text="Log"
          setValue={this.setValueByOneValueCalculation}
        />
        <br />
        <Button Class="button" name="1" text="1" setValue={this.setValue} />
        <Button Class="button" name="2" text="2" setValue={this.setValue} />
        <Button Class="button" name="3" text="3" setValue={this.setValue} />
        <Button
          Class="button"
          name="backS"
          text="<"
          setValue={this.setValueByOneValueCalculation}
        />
        <br />
        <Button Class="button" name="4" text="4" setValue={this.setValue} />
        <Button Class="button" name="5" text="5" setValue={this.setValue} />
        <Button Class="button" name="6" text="6" setValue={this.setValue} />
        <Button Class="button" name="-" text="-" setValue={this.setValue} />
        <br />
        <Button Class="button" name="7" text="7" setValue={this.setValue} />
        <Button Class="button" name="8" text="8" setValue={this.setValue} />
        <Button Class="button" name="9" text="9" setValue={this.setValue} />
        <Button Class="button" name="/" text="/" setValue={this.setValue} />
        <br />
        <Button Class="button" name="." text="." setValue={this.setValue} />
        <Button Class="button" name="0" text="0" setValue={this.setValue} />
        <Button Class="button" name="*" text="*" setValue={this.setValue} />
        <Button Class="button" name="%" text="%" setValue={this.setValue} />
        <br />
        <Button
          Class="button"
          name="equal"
          text="="
          setValue={this.setValueByTwoValueCalculation}
        />
        <Button Class="button" name="+" text="+" setValue={this.setValue} />
        <Button Class="button" name="ˆ" text="ˆ" setValue={this.setValue} />
        <br />
      </div>
    )
  }
}

export default Keypad
