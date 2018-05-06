import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import moment from 'moment'
import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, queryAppointmentsByDate } from '../../../../ducks'
// import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Select } from '../../../../components'
import { PatientCard } from '../../components'

class AppointmentListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 3,
      showType: 1,
      nowWeekNum: 1,
      department_id: '',
      personnel_id: ''
    }
  }

  componentDidMount() {
    this.queryDepartmentList({ limit: 100 })
    this.queryDoctorsList({ limit: 100, personnel_type: 2 })
  }
  queryDoctorsList({ keyword, limit = 100, department_id }) {
    const { queryDoctorList, clinic_id } = this.props
    queryDoctorList({ clinic_id, keyword, limit: 10, personnel_type: 2, department_id })
  }
  queryDepartmentList({ keyword, limit }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit })
  }

  getDepartmentOptions() {
    const { departments } = this.props
    let options = [{ value: -1, label: '全部科室' }]
    for (let { id, name } of departments) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }
  getDoctorOptions() {
    const { selectDoctors } = this.props
    let options = [{ value: -1, label: '全部医生' }]
    for (let { id, name } of selectDoctors) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  getDoctorSelectValue() {
    const { selectDoctors } = this.props
    const { personnel_id } = this.state
    for (let { id, name } of selectDoctors) {
      if (id === personnel_id) {
        return {
          value: id,
          label: name
        }
      }
    }
    return { value: -1, label: '全部医生' }
  }

  getDepartmentSelectValue() {
    const { departments } = this.props
    const { department_id } = this.state
    for (let { id, name } of departments) {
      if (id === department_id) {
        return {
          value: id,
          label: name
        }
      }
    }
    return { value: -1, label: '全部科室' }
  }

  queryAppointmentsByDate({ department_id, personnel_id, nowWeekNum, offset, limit }) {
    nowWeekNum = nowWeekNum || this.state.nowWeekNum
    let start_date = moment()
      .day(nowWeekNum)
      .format('YYYY-MM-DD')
    department_id = department_id || this.state.department_id
    if (department_id === -1) {
      department_id = null
    }
    personnel_id = personnel_id || this.state.personnel_id
    if (personnel_id === -1) {
      personnel_id = null
    }
    const { queryAppointmentsByDate, clinic_id } = this.props
    queryAppointmentsByDate({ clinic_id, department_id, personnel_id, start_date, offset, limit, day_long: 7 })
  }

  formatAppointmentData() {
    const { date_appointments } = this.props
    const { nowWeekNum } = this.state
    const { clinic_array, doctor_array, page_info } = date_appointments
    let totalArray = []
    for (let i = 0; i < 7; i++) {
      let visit_date = moment()
        .day(nowWeekNum + i)
        .format('YYYY-MM-DD')
      let clinic = {
        visit_date,
        am: 0,
        pm: 0
      }
      for (let item of clinic_array) {
        if (moment(item.visit_date).format('YYYY-MM-DD') === visit_date) {
          if (item.am_pm === 'a') clinic.am = item.count || 0
          if (item.am_pm === 'p') clinic.pm = item.count || 0
        }
      }
      totalArray.push(clinic)
    }
    let doctorArray = []
    for (let item of doctor_array) {
      let doctor = {
        personnel_id: item.personnel_id,
        department_id: item.department_id,
        personnel_name: item.personnel_name,
        department_name: item.department_name,
        days: [
          {
            am: 0,
            pm: 0
          },
          {
            am: 0,
            pm: 0
          },
          {
            am: 0,
            pm: 0
          },
          {
            am: 0,
            pm: 0
          },
          {
            am: 0,
            pm: 0
          },
          {
            am: 0,
            pm: 0
          },
          {
            am: 0,
            pm: 0
          }
        ]
      }
      let has = false
      let count = 0
      for (let obj of doctorArray) {
        if (obj.personnel_id === item.personnel_id && obj.department_id === item.department_id) {
          doctor = obj
          has = true
          break
        }
        count++
      }

      let day = moment(item.visit_date).weekday() - 1
      if (day === -1) day = 6
      if (item.am_pm === 'a') {
        doctor.days[day].am = item.count || 0
      }
      if (item.am_pm === 'p') {
        doctor.days[day].pm = item.count || 0
      }
      if (has) {
        doctorArray[count] = doctor
      } else {
        doctorArray.push(doctor)
      }
    }
    return { totalArray, doctorArray, page_info }
  }

  getWeekTds() {
    const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    const { nowWeekNum } = this.state
    let dArray = []
    for (let i = 0; i < 7; i++) {
      dArray.push(
        `${weeks[i]} ( ${moment()
          .day(nowWeekNum + i)
          .format('MM-DD')} )`
      )
    }
    return { dArray }
  }

  // 显示日历列表
  showCalendarList() {
    // const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let nowWeekNum = this.state.nowWeekNum
    const { totalArray, doctorArray, page_info } = this.formatAppointmentData()
    const { dArray } = this.getWeekTds()
    return (
      <div>
        <div className={'listContent'}>
          <div className={'calendarCotent'}>
            <div className={'calenderFilter'}>
              <div className={'filterCnter'}>
                <span
                  style={{ flex: 3 }}
                  onClick={() => {
                    this.setState({ nowWeekNum: nowWeekNum - 7 })
                    this.queryAppointmentsByDate({ nowWeekNum: nowWeekNum + 7 })
                  }}
                >
                  {'上一周'}
                </span>
                <span style={{ flex: 1 }}>{'《'}</span>
                <span style={{ flex: 1 }}>{'<'}</span>
                <span style={{ flex: 11 }} onClick={() => this.setState({ nowWeekNum: 1 })}>
                  本周（{moment()
                    .day(nowWeekNum)
                    .format('YYYY年MM月DD日')}至{moment()
                    .day(nowWeekNum + 6)
                    .format('MM月DD日')}）
                </span>
                <span style={{ flex: 1 }}>{'>'}</span>
                <span style={{ flex: 1 }}>{'》'}</span>
                <span
                  style={{ flex: 3 }}
                  onClick={() => {
                    this.setState({ nowWeekNum: nowWeekNum + 7 })
                    this.queryAppointmentsByDate({ nowWeekNum: nowWeekNum + 7 })
                  }}
                >
                  下一周
                </span>
              </div>
            </div>
            <div className={'calenderBox'}>
              <div className={'calendarContent'}>
                <table>
                  <thead>
                    <tr>
                      <td />
                      {dArray.map((item, i) => {
                        return <td key={i}> {item}</td>
                      })}
                    </tr>
                    <tr>
                      <td />
                      {dArray.map((item, i) => {
                        return (
                          <td key={i}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                              <div style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' }}>
                                <span>上午</span>
                              </div>
                              <div style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <span>下午</span>
                              </div>
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      {totalArray.map((item, index) => {
                        return (
                          <td key={index}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                              <div style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' }}>
                                <span style={{ color: '#000000', fontWeight: 'bold' }}>{item.am}</span>
                              </div>
                              <div style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <span style={{ color: '#000000', fontWeight: 'bold' }}>{item.pm}</span>
                              </div>
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                    {doctorArray.map((doctor, index) => {
                      return (
                        <tr key={index}>
                          <td> {doctor.personnel_name}</td>
                          {doctor.days.map((item, index) => {
                            return (
                              <td key={index}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                  <div style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' }}>
                                    <span>{item.am}</span>
                                  </div>
                                  <div style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                    <span>{item.pm}</span>
                                  </div>
                                </div>
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <PageCard
          offset={page_info.offset}
          limit={page_info.limit}
          total={page_info.total}
          style={{ marginTop: '20px' }}
          onItemClick={({ offset, limit }) => {
            this.queryAppointmentsByDate({ offset, limit })
          }}
        />
      </div>
    )
  }

  commonQueryList({ offset = 0, limit = 6, department_id, personnel_id }) {
    const { keyword, startDate, endDate } = this.state
    let status_start = 10
    let status_end = 100
    this.quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit, department_id, personnel_id, startDate, endDate })
  }

  quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit, department_id, personnel_id, startDate, endDate }) {
    const { clinic_id, triagePatientsList } = this.props
    department_id = department_id || this.state.department_id
    if (department_id === -1) {
      department_id = null
    }
    personnel_id = personnel_id || this.state.personnel_id
    if (personnel_id === -1) {
      personnel_id = null
    }
    let params = { clinic_id, offset, limit, keyword, register_type: 1, department_id, personnel_id }
    if (status_start && status_end) {
      params.status_start = status_start
      params.status_end = status_end
    }
    triagePatientsList(params)
  }
  // 显示就诊人列表
  showPatientList() {
    const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              return (
                <li key={index}>
                  <PatientCard
                    patient={patient}
                    buttons={[
                      {
                        title: '查看预约详情',
                        onClick: () => {
                          let { clinic_triage_patient_id } = patient
                          this.showChooseDoctor(clinic_triage_patient_id)
                        }
                      }
                    ]}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            this.commonQueryList({ offset, limit })
          }}
        />
      </div>
    )
  }

  // 新增预约
  addNewReservation() {
    Router.push('/treatment/reservation_add')
  }

  showExtraFilter() {
    return (
      <div className={'filterBox'}>
        <div className={'boxLeft'}>
          <input type='date' placeholder='预约日期' style={{ margin: '14px 0 0 15px' }} />
          <input
            type='text'
            style={{ margin: '14px 15px 0 15px' }}
            placeholder='搜索就诊人姓名/身份证号码/手机号码'
            onChange={e => {
              this.setState({ keyword: e.target.value })
            }}
          />
          <button onClick={() => this.commonQueryList({})}>查询</button>
        </div>
      </div>
    )
  }
  // 预约管理
  showReservation() {
    const { showType } = this.state
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <label style={{ marginLeft: '15px' }}>
              <input
                type='radio'
                name={'listType'}
                checked={showType === 1}
                onChange={() => {
                  this.setState({ showType: 1 })
                  this.queryAppointmentsByDate({})
                }}
              />{' '}
              日历列表
            </label>
            <label style={{ marginLeft: '15px' }}>
              <input
                type='radio'
                name={'listType'}
                checked={showType === 2}
                onChange={() => {
                  this.setState({ showType: 2 })
                  this.commonQueryList({})
                }}
              />{' '}
              就诊人列表
            </label>
            <div style={{ width: '150px', float: 'left', margin: '14px 0 0 15px' }}>
              <Select
                placeholder='搜索科室'
                options={this.getDepartmentOptions()}
                height={32}
                value={this.getDepartmentSelectValue()}
                onChange={e => {
                  let id = e.value
                  this.setState({ department_id: id, personnel_id: -1 })
                  this.queryDoctorsList({ department_id: id, personnel_id: -1, limit: 100 })
                  if (showType === 1) {
                    this.queryAppointmentsByDate({ department_id: id, personnel_id: -1 })
                  } else {
                    this.commonQueryList({ department_id: id, personnel_id: -1 })
                  }
                }}
              />
            </div>
            <div style={{ width: '150px', float: 'left', margin: '14px 0 0 15px' }}>
              <Select
                placeholder='搜索医生'
                options={this.getDoctorOptions()}
                height={32}
                value={this.getDoctorSelectValue()}
                onChange={e => {
                  let id = e.value
                  this.setState({ personnel_id: id })
                  if (showType === 1) {
                    this.queryAppointmentsByDate({ personnel_id: id })
                  } else {
                    this.commonQueryList({ personnel_id: id })
                  }
                }}
              />
            </div>
          </div>
          <div className={'boxRight'}>
            <button onClick={() => this.addNewReservation()}>新增预约</button>
          </div>
        </div>
        {showType === 2 ? this.showExtraFilter() : ''}

        {this.state.showType === 1 ? this.showCalendarList() : ''}
        {this.state.showType === 2 ? this.showPatientList() : ''}
        <div className={'pagination'} />
        <style jsx>
          {`
            .boxLeft label {
              float: left;
              height: 60px;
              line-height: 60px;
              margin-left: 30px;
            }
            input[type='radio'] {
              width: 14px;
              height: 14px;
              margin: 23px 5px;
              clear: both;
              vertical-align: middle;
            }
            // input[type='text'] {
            //   width: 152px;
            //   margin: 16px 0 16px 17px;
            // }
            .boxLeft button {
              margin: 16px 0 16px 17px;
            }
          `}
        </style>
      </div>
    )
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 1 })
              Router.push('/treatment/triage/triage')
            }}
          >
            分诊
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2 })
              Router.push('/treatment/triage/record')
            }}
          >
            分诊记录
          </span>
          <span
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 3 })
              this.queryDoctorsList({ department_id: '', limit: 100 })
              this.queryAppointmentsByDate({})
            }}
          >
            预约管理
          </span>
        </div>
        {this.showReservation()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triageDoctors: state.triageDoctors.data,
    departments: state.departments.data,
    selectDoctors: state.doctors.data,
    date_appointments: state.triagePatients.date_appointments,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info
  }
}

export default connect(mapStateToProps, { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, queryAppointmentsByDate })(AppointmentListScreen)
