import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { triagePatientsList } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'

class ChargeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1
    }
  }

  componentDidMount() {
    const { clinic_id, triagePatientsList } = this.props
    triagePatientsList({ clinic_id, is_today: true, register_type: 2 })
  }
	// 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }

  getTriagePatientListData(treat_status) {
    const { triagePatients } = this.props
    let array = []
    let today = moment().format('YYYY-MM-DD')
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      if (moment(patient.visit_date).format('YYYY-MM-DD') !== today) continue
      if (!patient.treat_status) continue
      if (treat_status) {
        if (!patient.reception_time) continue
      } else {
        if (patient.reception_time) continue
      }
      array.push(patient)
    }
    return array.sort((a, b) => {
      if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return 1
      return -1
    })
  }
  getUnTriagePatientListData() {
    const { triagePatients } = this.props
    let array = []
    let today = moment().format('YYYY-MM-DD')
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      if (moment(patient.visit_date).format('YYYY-MM-DD') !== today) continue
      if (patient.treat_status) continue
      array.push(patient)
    }
    return array.sort((a, b) => {
      if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return -1
      return 1
    })
  }

	// 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
  }
	// 显示分诊列表
  showTobeCharged() {
    const array = this.getUnTriagePatientListData(false)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {array.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.treat_status === true ? '已分诊' : '待分诊'}</span>
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
                    <span style={{ color: 'rgba(153,153,153,1)' }}>
                    <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                    <a style={{ color: 'rgba(153,153,153,1)' }}>{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</a>
                  </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span>￥337.0</span>
                    <span onClick={() => this.gotoChargeDetail()}>收费</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <style jsx>{`
					// .itemBottom span:nth-child(2) {
					// 	border-right: 2px solid #31b0b3;
					// }
				`}</style>
      </div>
    )
  }
  gotoChargeDetail() {
    Router.push('/treatment/reservation_add')
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
						待收费
					</span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
						已收费
					</span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
						已挂账
					</span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
						已退款
					</span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
						订单管理
					</span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='date' placeholder='选择日期' />
            <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
            <button>查询</button>
          </div>
        </div>
        {this.state.pageType === 1 ? this.showTobeCharged() : ''}
        {/* {this.state.pageType === 2 ? this.showTriageRecord() : ''} */}
        {/* {this.state.pageType === 3 ? this.showReservation() : ''} */}
        {/* {this.state.alertType === 1 ? this.completeHealthFile() : ''}
        {this.state.alertType === 2 ? this.chooseDoctor() : ''} */}
        <style jsx>{``}</style>
        {/* <PageCard limit={10} offset={20} total={100} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  }
}

export default connect(mapStateToProps, { triagePatientsList })(ChargeScreen)
