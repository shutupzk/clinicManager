import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryCreditTriageList, creditTriageSelect, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { PageCard } from '../../../../components'
import { getAgeByBirthday, formatMoney } from '../../../../utils'

class AlreadyChargedScreen extends Component {
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
    const { clinic_id, queryCreditTriageList } = this.props
    let { start_date, end_date, keyword } = this.state
    queryCreditTriageList({ start_date, end_date, clinic_id, keyword, offset, limit })
  }

  componentDidMount() {
    this.getData({})
  }

  gotoDetail(selectId) {
    this.props.creditTriageSelect({ selectId })
    Router.push('/treatment/charge/alreadyChargedDetail')
  }

  // 暂时挂账的分诊记录
  showTriage() {
    const { data, data_page } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {data.map((patient, index) => {
              let statusColor = '#F24A01'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      let patient_id = patient.patient_id
                      this.props.patientSelect({ patient_id })
                      Router.push('/treatment/registration/list_detail')
                    }}>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>已挂账</span>
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
                        this.gotoDetail(patient.clinic_triage_patient_id)
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

  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/charge')}>待收费</span>
          <span onClick={() => Router.push('/treatment/charge/charged')}>已收费</span>
          <span className={'sel'}>已挂账</span>
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
            <button onClick={() => this.getData({})}>查询</button>
          </div>
        </div>
        {this.showTriage()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    data: state.onCredit.triage_list,
    data_page: state.onCredit.triage_list_page
  }
}

export default connect(mapStateToProps, { queryCreditTriageList, creditTriageSelect, patientSelect })(AlreadyChargedScreen)
