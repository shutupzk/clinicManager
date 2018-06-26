import React, { Component } from 'react'
import { connect } from 'react-redux'

// 其他收费
class ReportMonthScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>s</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(ReportMonthScreen)
