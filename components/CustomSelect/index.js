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
      onMouseOver: false,
      isTop: true
    }
  }

  init({value, valueKey, labelKey, options}) {
    options = options || this.props.options || []
    valueKey = valueKey || this.props.valueKey || ''
    labelKey = labelKey || this.props.labelKey || ''
    this.setState({
      value: value || '',
      label: getLable(value, valueKey, labelKey, options)
    })
  }

  renderOption() {
    const { showOptions, value, label, isTop } = this.state
    let { renderItem, options, onChange, renderTitle, withoutFitler } = this.props
    options = options || []
    if (!showOptions) return null
    let array = []
    for (let option of options) {
      if (!withoutFitler) {
        let { value, label, py_code } = option
        try {
          let stateLabel = this.state.label
          stateLabel = stateLabel.replace(/\(/g, `\\(`)
          stateLabel = stateLabel.replace(/\)/g, `\\)`)
          stateLabel = stateLabel.replace(/\{/g, `\\{`)
          stateLabel = stateLabel.replace(/\}/g, `\\}`)
          let pattern = new RegExp(stateLabel, 'gi')
          if (!pattern.test(value) && !pattern.test(label) && !pattern.test(py_code)) continue
        } catch (e) {
          console.log(e)
          continue
        }
      }
      array.push(option)
    }
    let disp = 'none'
    if (array.length > 0) {
      disp = 'flex'
    }
    let divStyle = {
      display: disp,
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
    }
    if (!isTop) {
      divStyle = {
        display: disp,
        flexDirection: 'column',
        position: 'absolute',
        bottom: '50px',
        left: '0px',
        zIndex: 100,
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        background: '#FFFFFF',
        paddingTop: '2px',
        paddingBottom: '2px',
        maxHeight: '255px',
        overflow: 'auto'
      }
    }
    return (
      <div
        style={divStyle}
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
              {renderItem ? renderItem(item, index) : ''}
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
    let marginTop = controlStyle.marginTop || '0px'
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          marginTop: marginTop,
          flex: 1
        }}
      >
        <input
          style={{
            height: '40px',
            background: 'rgba(245, 248, 249, 1)',
            borderRadius: '4px',
            border: '1px solid #d9d9d9',
            ...controlStyle,
            marginTop: '0px'
          }}
          placeholder={placeholder || ''}
          value={label || ''}
          type='text'
          onChange={e => {
            let value = e.target.value
            this.setState({ showOptions: true, label: value, value: mustOptionValue ? '' : this.state.value })
            if (onInputChange) {
              onInputChange(value)
            }
          }}
          onFocus={e => {
            // console.log('e.target.position===', e, e.target, e.target.offsetParent.offsetTop, window.innerHeight)
            let offsetTop = e.target.offsetParent.offsetTop
            let windowHeight = window.innerHeight
            let isTop = true
            if (windowHeight - offsetTop < 200) {
              isTop = false
            }
            this.setState({ showOptions: true, onMouseOver: false, isTop })
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
