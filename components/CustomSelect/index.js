import React, { Component } from 'react'

function getLable(value, valueKey, labelKey, options = []) {
  if (!value || !valueKey || !labelKey) return ''
  for (let option of options) {
    if (option[valueKey] === value) {
      return option[labelKey]
    }
  }
  return ''
}

export default class CustomSelect extends Component {
  constructor(props) {
    super(props)
    const { value, valueKey, labelKey, options } = props
    this.state = {
      value: value || '',
      label: getLable(value, valueKey, labelKey, options),
      showOptions: false,
      onMouseOver: false
    }
  }

  renderOption() {
    const { showOptions, value, label } = this.state
    let { renderItem, options, onChange, renderTitle, withoutFitler } = this.props
    options = options || []
    if (!showOptions) return null
    let array = []
    for (let option of options) {
      if (!withoutFitler) {
        let { value, label, py_code } = option
        let pattern = new RegExp(this.state.label, 'gi')
        if (!pattern.test(value) && !pattern.test(label) && !pattern.test(py_code)) continue
      }
      array.push(option)
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50px',
          left: '0px',
          zIndex: 100,
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          background: '#FFFFFF',
          paddingTop: '2px',
          paddingBottom: '2px',
          maxHeight: '255px',
          overflow: 'auto'
        }}
      >
        <div>{renderTitle ? renderTitle() : null}</div>
        {array.map((item, index) => {
          return (
            <div
              onMouseOver={e => {
                this.setState({ onMouseOver: true })
              }}
              onMouseLeave={e => {
                this.setState({ onMouseOver: false })
              }}
              className='itemDiv'
              key={index}
              onClick={() => {
                const { valueKey, labelKey } = this.props
                if (onChange) {
                  onChange(item, index)
                }
                this.setState({
                  showOptions: false,
                  value: valueKey ? (item[valueKey] ? item[valueKey] : value) : value,
                  label: labelKey ? (item[labelKey] ? item[labelKey] : label) : label
                })
              }}
            >
              {renderItem ? renderItem(item, index) : null}
            </div>
          )
        })}
        <style jsx='true'>{`
          .itemDiv {
            background: #ffffff;
          }
          .itemDiv:hover {
            background-color: #deebff;
          }
        `}</style>
      </div>
    )
  }

  checkHasValue() {
    const { valueKey, options, labelKey } = this.props
    const { value, label } = this.state
    let has = false
    for (let option of options) {
      if (option[valueKey] === value && option[labelKey] === label) {
        has = true
      }
    }
    return has
  }

  render() {
    const { onInputChange, controlStyle, placeholder, mustOptionValue } = this.props
    const { onMouseOver, showOptions, label } = this.state
    console.log('label ===========', label)
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          ...controlStyle
        }}
      >
        <input
          style={{
            height: '40px',
            background: 'rgba(245, 248, 249, 1)',
            borderRadius: '4px',
            border: '1px solid #d9d9d9'
          }}
          placeholder={placeholder || ''}
          value={label || ''}
          type='text'
          onChange={e => {
            let value = e.target.value
            this.setState({ showOptions: true, label: value })
            if (onInputChange) {
              onInputChange(value)
            }
          }}
          onFocus={e => {
            this.setState({ showOptions: true })
          }}
          onBlur={e => {
            const { value, label } = this.props
            if (showOptions && !onMouseOver) {
              this.setState({ showOptions: false })
              if (mustOptionValue) {
                if (!this.checkHasValue()) {
                  this.setState({ value, label })
                }
              }
            }
          }}
        />
        {this.renderOption()}
      </div>
    )
  }
}
