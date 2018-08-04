import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
import { provinces } from '../../../../config/provinces'
import {

} from '../../../../ducks'
import { Confirm, PageCard, Select } from '../../../../components'

class MonthlyReportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      keyword: '',
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),

      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      district: '请选择',

      clinic_id: '',
      area: '', // 详细地址
      name: '', // 诊所名称
      code: '', // 诊所编码
      responsible_person: '', // 负责人
      status: true, // 开启状态
      username: '', // 诊所账号
      password: '', // 诊所密码
      passwordConfirm: '', // 诊所密码
      phone: '' // 手机号
    }
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/finance/dailyReport')}>收费日报表</span>
          <span className={'sel'}>收费月报表</span>
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
})(MonthlyReportScreen)
