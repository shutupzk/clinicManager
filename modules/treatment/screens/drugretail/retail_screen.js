import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

class RetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showContentData() {
    return null
  }

  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/drugretail')}>已售列表</span>
          <span className={'sel'}>药品零售</span>
        </div>
        {this.showContentData()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(
  mapStateToProps,
  {}
)(RetailScreen)
