import React, { Component } from 'react'
import { connect } from 'react-redux'

class Prompt extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={`promptDiv ${this.props.show === true ? 'show' : ''}`}>
        {this.props.text}
        {this.props.children}
        <style jsx='true'>
          {`
            .promptDiv {
              background-color: #888;
              color: #fff;
              padding: 10px;
              z-index: 999;
              position: fixed;
              width: 260px;
              position: absolute;
              border-radius: 5px;
              left: 50%;
              top: 50%;
              margin-left: -140px;
              margin-top: -50px;
              display: none;
              text-align: center;
              align-items: center;
            }
            .show {
              display: block !important;
            }
          `}
        </style>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    show: state.prompt.show
  }
}

export default connect(mapStateToProps)(Prompt)
