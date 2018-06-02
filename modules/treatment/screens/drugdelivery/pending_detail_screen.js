import React, { Component } from 'react'
import { connect } from 'react-redux'
// import moment from 'moment'
// import { PageCard } from '../../../../components'

class PendingDetailDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 加载
  render() {
    return (
      <div>
        {/* {this.renderFeeDetails()}
        {this.renderBill()} */}
        connect
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { queryDrugPendingTraigeList })(PendingDetailDrugScreen)
