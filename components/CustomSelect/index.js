import React, { Component } from 'react'

export default class CustomSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
      onMouseOver: false
    }
  }

  renderOption() {
    const { showOptions } = this.state
    let { renderItem, options, onChange } = this.props
    options = options || []
    if (!showOptions) return null
    return (
      <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '50px', left: '0px', zIndex: 100, border: '1px solid #d9d9d9', borderRadius: '4px', background: '#FFFFFF', paddingTop: '2px', paddingBottom: '2px', maxHeight: '255px', overflow: 'auto' }}>
        {options.map((item, index) => {
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
                if (onChange) {
                  onChange(item, index)
                }
                this.setState({ showOptions: false })
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

  render() {
    const { onInputChange, value, controlStyle, placeholder } = this.props
    const { onMouseOver, showOptions } = this.state
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
          value={value || ''}
          type='text'
          onChange={e => {
            let inputValue = e.target.value
            this.setState({ showOptions: true })
            if (onInputChange) {
              onInputChange(inputValue)
            }
          }}
          onFocus={e => {
            this.setState({ showOptions: true })
          }}
          onBlur={e => {
            if (showOptions && !onMouseOver) {
              this.setState({ showOptions: false })
            }
          }}
        />
        {this.renderOption()}
      </div>
    )
  }
}
