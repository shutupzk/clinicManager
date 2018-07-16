import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { triagePatientsList, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { DatePicker } from '../../../../components'
import { getAgeByBirthday } from '../../../../utils'

class RefundedScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 4,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
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
	// 显示待收费
  showTobeCharged() {
    const array = this.getUnTriagePatientListData(false)
    // if (pageType === 1) return null
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {array.map((patient, index) => {
              // let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
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
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.treat_status === true ? '已收费' : '待收费'}</span>
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
                      <a>退款人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>退款时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span>￥337.0</span>
                    <span onClick={() => {}}>打印发票</span>
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

  // 收费详情
  gotoChargeDetail() {
    Router.push('/treatment/charge/toll')
  }
  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/charge')}>待收费</span>
          <span onClick={() => Router.push('/treatment/charge/charged')}>
						已收费
					</span>
          <span onClick={() => Router.push('/treatment/charge/alreadyCharged')}>
						已挂账
					</span>
          <span className={'sel'}>
						已退款
					</span>
          <span onClick={() => Router.push('/treatment/charge/orderManagement')}>
						订单管理
					</span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <div className={'dateDiv'}>
              <DatePicker
                // placeholder={'开始日期'}
                // value={moment(moment(this.state.start_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    // this.setState({ start_date: date })
                  }
                }}
              />
            </div>
            {/* <input type='date' placeholder='选择日期' /> */}
            <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
            <button>查询</button>
          </div>
        </div>
        {this.showTobeCharged()}
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

export default connect(mapStateToProps, { triagePatientsList, patientSelect })(RefundedScreen)
