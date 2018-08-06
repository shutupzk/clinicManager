import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryChargeRefundList } from '../../../../ducks'
import moment from 'moment'
import { DatePicker } from '../../../../components'
import { getAgeByBirthday, formatMoney } from '../../../../utils'

class RefundedScreen extends Component {
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

  getData({ offset, limit }) {
    const { clinic_id, queryChargeRefundList } = this.props
    let { start_date, end_date, keyword } = this.state
    queryChargeRefundList({ start_date, end_date, clinic_id, keyword, offset, limit })
  }

  componentDidMount() {
    this.getData({})
  }

  showTobeCharged() {
    const { data } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {data.map((patient, index) => {
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
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
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>已退费</span>
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
                      <a>退款人员：</a>
                      <a>{patient.refund_people}</a>
                    </span>
                    <span>
                      <a>退款时间：</a>
                      <a>{moment(patient.created_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span>￥{formatMoney(patient.refund_money)}</span>
                    <span onClick={() => {}}>补打发票</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
      </div>
    )
  }

  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/charge')}>待收费</span>
          <span onClick={() => Router.push('/treatment/charge/charged')}>已收费</span>
          {/* <span onClick={() => Router.push('/treatment/charge/alreadyCharged')}>
						已挂账
					</span> */}
          <span className={'sel'}>已退款</span>
          <span onClick={() => Router.push('/treatment/charge/orderManagement')}>订单管理</span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <div className={'dateDiv'}>
              <DatePicker
                value={moment(moment(this.state.start_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ start_date: date })
                  }
                }}
              />
            </div>
            <div className={'dateDiv'}>
              <DatePicker
                value={moment(moment(this.state.end_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ start_date: date })
                  }
                }}
              />
            </div>
            <input onChange={e => this.setState({ keyword: e.target.value })} type='text' placeholder='搜索就诊人姓名/病人ID/身份证号码/手机号码' value={this.state.keyword} />
            <button onClick={() => this.getData({})}>查询</button>
          </div>
        </div>
        {this.showTobeCharged()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    data: state.charge.charge_refund_triage,
    data_page: state.charge.charge_refund_triage_page
  }
}

export default connect(
  mapStateToProps,
  { queryChargeRefundList }
)(RefundedScreen)
