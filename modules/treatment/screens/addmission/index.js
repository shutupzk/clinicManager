import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { triagePatientsList } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'

class AddmisionScreen extends Component {
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

  // 显示分诊列表
  showTriageList() {
    const array = this.getTriagePatientListData(false)
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
        <div className={'regisList'}>
          <ul>
            {array.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              return (
                <li key={index} onClick={() => {}}>
                  <div className={'liTop'}>
                    <span className={'updateTime'}>更新时间：{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                    <span className={'status'}>{!patient.treat_status ? '待分诊' : !patient.reception_time ? '待接诊' : !patient.complete_time ? '已接诊' : '已完成'}</span>
                  </div>
                  <div>
                    就诊人姓名：{patient.patient_name} {patient.sex === 0 ? '女' : '男'} 年龄：{getAgeByBirthday(patient.birthday)}岁
                  </div>
                  <div>身份证号：{patient.cert_no}</div>
                  <div>接诊科室：{patient.department_name}</div>
                  <div>接诊医生：{patient.doctor_name}</div>
                  <div>登记人员：{patient.register_personnel_name}</div>
                  <div>登记时间：{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div className={'seeDetail'}>
                    <a onClick={() => this.showCompleteHealthFile()}>完善健康档案</a>
                    <a onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>选择医生</a>
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

  // 显示分诊记录
  showTriageRecord() {
    const array = this.getTriagePatientListData(true)
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
        <div className={'regisList'}>
          <ul>
            {array.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              return (
                <li key={index} onClick={() => {}}>
                  <div className={'liTop'}>
                    <span className={'updateTime'}>更新时间：{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                    <span className={'status'}>{!patient.treat_status ? '待分诊' : !patient.reception_time ? '待接诊' : !patient.complete_time ? '已接诊' : '已完成'}</span>
                  </div>
                  <div>
                    就诊人姓名：{patient.patient_name} {patient.sex === 0 ? '女' : '男'} 年龄：{getAgeByBirthday(patient.birthday)}岁
                  </div>
                  <div>身份证号：{patient.cert_no}</div>
                  <div>接诊科室：{patient.department_name}</div>
                  <div>接诊医生：{patient.doctor_name}</div>
                  <div>登记人员：{patient.register_personnel_name}</div>
                  <div>登记时间：{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div className={'seeDetail'}>
                    <a onClick={() => this.showCompleteHealthFile()}>完善健康档案</a>
                    <a onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>选择医生</a>
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

  // 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            今日待接诊
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            已接诊记录
          </span>
        </div>
        {this.state.pageType === 1 ? this.showTriageList() : ''}
        {this.state.pageType === 2 ? this.showTriageRecord() : ''}
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

export default connect(mapStateToProps, { triagePatientsList })(AddmisionScreen)
