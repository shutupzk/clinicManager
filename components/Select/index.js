import React, { Component } from 'react'
import Select from 'react-select'

export default class MySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let { height, options, onInputChange } = this.props
    const { keyword } = this.state
    let array = []
    for (let option of options) {
      let { value, label, py_code } = option
      let pattern = new RegExp(keyword, 'gi')
      if (!pattern.test(value) && !pattern.test(label) && !pattern.test(py_code)) continue
      array.push(option)
    }
    const customStyles = {
      control: (base, state) => {
        return {
          ...base,
          height: height || 44,
          minHeight: 20,
          borderColor: state.isFocused ? 'rgb(16,142,233)' : '#d9d9d9',
          overflow: 'hidden',
          boxShadow: state.isFocused ? `0 0 0 2px rgba(16,142,233,0.2)` : null
        }
      }
    }
    return (
      <Select
        styles={customStyles}
        {...this.props}
        filterOption={false}
        options={array}
        onInputChange={keyword => {
          this.setState({ keyword })
          onInputChange(keyword)
        }}
      />
    )
  }
}
