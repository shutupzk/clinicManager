import React, { Component } from 'react'
import Select from 'react-select'

export default class MySelect extends Component {
  render() {
    const customStyles = {
      control: (base, state) => {
        return {
          ...base,
          borderColor: state.isFocused ? 'rgb(16,142,233)' : '#d9d9d9',
          boxShadow: state.isFocused ? `0 0 0 2px rgba(16,142,233,0.2)` : null
        }
      }
    }
    return <Select styles={customStyles} {...this.props} />
  }
}