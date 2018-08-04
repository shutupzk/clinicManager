import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
import { provinces } from '../../../../config/provinces'
import {

} from '../../../../ducks'
import { Confirm, PageCard, Select } from '../../../../components'

class DrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/operation/totalAmount')}>交易总额</span>
          <span onClick={() => Router.push('/platform/operation/profit')}>利润</span>
          <span onClick={() => Router.push('/platform/operation/patient')}>患者分析</span>
          <span onClick={() => Router.push('/platform/operation/diagnosis')}>诊断分析</span>
          <span className={'sel'}>药品分析</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinics_page_info: state.clinics.page_info
  }
}
export default connect(mapStateToProps, {
})(DrugScreen)
