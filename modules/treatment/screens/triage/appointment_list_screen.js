import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import moment from 'moment'
import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, queryAppointmentsByDate } from '../../../../ducks'
// import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Select } from '../../../../components'

class AppointmentListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 3,
      showType: 1,
      nowWeekNum: 1,
      department_id: '',
      clinic_triage_patient_id: '',
      appointment_sate: {}
    }
  }

  componentDidMount() {
    this.queryDepartmentList({ limit: 100 })
    this.queryDoctorsList({ limit: 100, personnel_type: 2 })
  }
  queryDoctorsList({ keyword, limit = 100, department_id }) {
    const { queryDoctorList, clinic_id } = this.props
    console.log('department_id ========', department_id)
    queryDoctorList({ clinic_id, keyword, limit: 10, personnel_type: 2, department_id })
  }
  queryDepartmentList({ keyword, limit }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit })
  }

  getDepartmentOptions() {
    const { departments } = this.props
    let options = [{ value: '-1', label: '全部科室' }]
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
    let options = [{ value: '-1', label: '全部医生' }]
    for (let { id, name } of selectDoctors) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  queryAppointmentsByDate({ department_id, personnel_id, nowWeekNum, offset, limit }) {
    nowWeekNum = nowWeekNum || this.state.nowWeekNum
    let start_date = moment()
      .day(nowWeekNum)
      .format('YYYY-MM-DD')
    department_id = department_id || this.state.appointment_sate.department_id
    personnel_id = personnel_id || this.state.appointment_sate.personnel_id
    const { queryAppointmentsByDate, clinic_id } = this.props
    queryAppointmentsByDate({ clinic_id, department_id, personnel_id, start_date, offset, limit, day_long: 7 })
  }

  formatAppointmentData() {
    const { date_appointments } = this.props
    const { nowWeekNum } = this.state
    const { clinic_array, doctor_array, page_info } = date_appointments
    console.log('date_appointments =========', date_appointments)
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
          style={{marginTop: '20px'}}
          onItemClick={({ offset, limit }) => {
            this.queryAppointmentsByDate({ offset, limit })
          }}
        />
      </div>
    )
  }
  // 显示就诊人列表
  showPatientList() {
    // const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            <li key={1}>
              <div className={'itemTop'}>
                <span>龙超</span>
                <span>男</span>
                <span>18岁</span>
                <span style={{ color: '#F24A01', border: '1px solid #F24A01' }}>已分诊</span>
              </div>
              <div className={'itemCenter'}>
                <span>
                  <a>门诊ID：</a>
                  <a>1515151515</a>
                </span>
                <span>
                  <a>接诊科室：</a>
                  <a>骨科</a>
                </span>
                <span>
                  <a>接诊医生：</a>
                  <a>关云长</a>
                </span>
                <span>
                  <a>登记人员：</a>
                  <a>扁鹊</a>
                </span>
                <span>
                  <a>登记时间：</a>
                  <a>{moment('20180505').format('YYYY-MM-DD HH:mm:ss')}</a>
                </span>
                <span style={{ color: 'rgba(153,153,153,1)' }}>
                  <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                  <a style={{ color: 'rgba(153,153,153,1)' }}>{moment('20180505').format('YYYY-MM-DD HH:mm:ss')}</a>
                </span>
              </div>
              <div className={'itemBottom'}>
                <span onClick={() => {}}>修改</span>
                <span onClick={() => {}}>取消</span>
              </div>
            </li>
          </ul>
        </div>
        {/* <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            this.commonQueryList({ offset, limit })
          }}
        /> */}
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
          <input type='text' style={{ margin: '14px 15px 0 15px' }} placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          {/* <input type='text' placeholder='搜索科室' /> */}
          {/* <input type='text' placeholder='搜索科室' /> */}
          {/* <input type='text' placeholder='搜索医生' /> */}
          {/* <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' /> */}
          <button>查询</button>
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
                  this.changeShowType({ type: 1 })
                  this.queryAppointmentsByDate({})
                }}
              />{' '}
              日历列表
            </label>
            <label style={{ marginLeft: '15px' }}>
              <input type='radio' name={'listType'} checked={showType === 2} onChange={() => this.changeShowType({ type: 2 })} /> 就诊人列表
            </label>
            <div style={{ width: '150px', float: 'left', margin: '14px 0 0 15px' }}>
              <Select
                placeholder='搜索科室'
                options={this.getDepartmentOptions()}
                height={32}
                onChange={e => {
                  let id = e.value
                  console.log('id ========', id)
                  this.setState({ department_id: id })
                  this.queryDoctorsList({ department_id: id, limit: 100 })
                  // this.queryListData({ department_id: id })
                }}
              />
            </div>
            <div style={{ width: '150px', float: 'left', margin: '14px 0 0 15px' }}>
              <Select placeholder='搜索医生' options={this.getDoctorOptions()} height={32} />
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
              this.setState({ pageType: 1, keyword2: '' })
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
              this.setState({ pageType: 3, department_id: '' })
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
    date_appointments: state.triagePatients.date_appointments
  }
}

export default connect(mapStateToProps, { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, queryAppointmentsByDate })(AppointmentListScreen)
