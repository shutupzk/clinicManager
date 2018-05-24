import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryChargeUnpayList, chargeUnpaySelect } from '../../../../ducks'
import moment from 'moment'
import { PageCard } from '../../../../components'
import { getAgeByBirthday, formatMoney } from '../../../../utils'

class TobeChargedScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      keyword: ''
    }
  }

  getTobeChargeData({ offset, limit }) {
    const { clinic_id, queryChargeUnpayList } = this.props
    let { start_date, end_date, keyword } = this.state
    queryChargeUnpayList({ start_date, end_date, clinic_id, keyword, offset, limit })
  }

  componentDidMount() {
    this.getTobeChargeData({})
  }

  // 显示待收费
  showTobeCharged() {
    const { charge_unpay, charge_unpay_page } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {charge_unpay.map((patient, index) => {
              let statusColor = patient.charge_total_fee >= 0 ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.charge_total_fee <= 0 ? '已收费' : '待收费'}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.doctor_name}</a>
                    </span>
                    <span>
                      <a>登记人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>登记时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>更新时间：</a>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span style={{ cursor: 'unset' }}>￥{formatMoney(patient.charge_total_fee)}</span>
                    <span
                      onClick={() => {
                        this.gotoChargeDetail(patient.clinic_triage_patient_id)
                      }}
                    >
                      收费
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <PageCard
          offset={charge_unpay_page.offset}
          limit={charge_unpay_page.limit}
          total={charge_unpay_page.total}
          onItemClick={({ offset, limit }) => {
            this.getTobeChargeData({ offset, limit })
          }}
        />
      </div>
    )
  }

  // 收费详情
  gotoChargeDetail(selectId) {
    this.props.chargeUnpaySelect({ selectId })
    Router.push('/treatment/charge/toll')
  }
  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>待收费</span>
          <span onClick={() => Router.push('/treatment/charge/charged')}>已收费</span>
          <span onClick={() => Router.push('/treatment/charge/alreadyCharged')}>已挂账</span>
          <span onClick={() => Router.push('/treatment/charge/refunded')}>已退款</span>
          <span onClick={() => Router.push('/treatment/charge/orderManagement')}>订单管理</span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({ end_date: e.target.value })
              }}
            />
            <input
              type='text'
              placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码'
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button onClick={() => this.getTobeChargeData({})}>查询</button>
          </div>
        </div>
        {this.showTobeCharged()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    charge_unpay: state.charge.charge_unpay,
    charge_unpay_page: state.charge.charge_unpay_page
  }
}

export default connect(mapStateToProps, { queryChargeUnpayList, chargeUnpaySelect })(TobeChargedScreen)
