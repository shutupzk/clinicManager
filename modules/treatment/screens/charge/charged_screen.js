import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryChargePaidList, chargePaidSelect, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { PageCard, DatePicker } from '../../../../components'
import { getAgeByBirthday, formatMoney } from '../../../../utils'

class ChargedScreen extends Component {
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

  getChargeData({ offset, limit }) {
    const { clinic_id, queryChargePaidList } = this.props
    let { start_date, end_date, keyword } = this.state
    queryChargePaidList({ start_date, end_date, clinic_id, keyword, offset, limit })
  }

  componentDidMount() {
    this.getChargeData({})
  }

  // 显示已收费就诊记录
  showCharged() {
    const { data, data_page } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {data.map((patient, index) => {
              let statusColor = '#31B0B3'

              let fee = `￥${formatMoney(patient.charge_total_fee)}`
              if (patient.refund_money < 0) fee += `（已退￥${formatMoney(patient.refund_money)}）`

              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        let patient_id = patient.patient_id
                        this.props.patientSelect({ patient_id })
                        Router.push('/treatment/registration/list_detail')
                      }}
                    >
                      {patient.patient_name}
                    </span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>已收费</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>病人ID：</a>
                      <a>{patient.patient_id}</a>
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
                      <a>收费人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>缴费时间：</a>
                      <a>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>登记时间：</a>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span style={{ cursor: 'unset' }} title={fee}>
                      {fee}
                    </span>
                    <span style={{ cursor: 'unset' }}>打印发票</span>
                    <span
                      onClick={() => {
                        this.gotoChargeDetail(patient.mz_paid_record_id)
                      }}
                    >
                      查看
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <PageCard
          offset={data_page.offset}
          limit={data_page.limit}
          total={data_page.total}
          onItemClick={({ offset, limit }) => {
            this.getChargeData({ offset, limit })
          }}
        />
      </div>
    )
  }

  // 收费详情
  gotoChargeDetail(clinic_triage_patient_id) {
    this.props.chargePaidSelect({ selectId: clinic_triage_patient_id })
    Router.push('/treatment/charge/chargedDetail')
  }
  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/charge')}>待收费</span>
          <span className={'sel'}>已收费</span>
          {/* <span onClick={() => Router.push('/treatment/charge/alreadyCharged')}>已挂账</span> */}
          <span onClick={() => Router.push('/treatment/charge/refunded')}>已退款</span>
          <span onClick={() => Router.push('/treatment/charge/orderManagement')}>订单管理</span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <div className={'dateDiv'}>
              <DatePicker
                placeholder={'开始日期'}
                value={moment(moment(this.state.start_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ start_date: moment(date).format('YYYY-MM-DD') })
                  }
                }}
              />
            </div>
            <div className={'dateDiv'}>
              <DatePicker
                placeholder={'结束日期'}
                value={moment(moment(this.state.end_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ end_date: moment(date).format('YYYY-MM-DD') })
                  }
                }}
              />
            </div>
            <input
              type='text'
              placeholder='搜索就诊人姓名/病人ID/身份证号码/手机号码'
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button onClick={() => this.getChargeData({})}>查询</button>
          </div>
        </div>
        {this.showCharged()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    data: state.charge.charge_paid_triage,
    data_page: state.charge.charge_paid_triage_page
  }
}

export default connect(
  mapStateToProps,
  { queryChargePaidList, chargePaidSelect, patientSelect }
)(ChargedScreen)
