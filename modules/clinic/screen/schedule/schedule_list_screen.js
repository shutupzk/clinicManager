import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { queryDoctorsWithSchedule, queryDepartmentList, queryDoctorList } from '../../../../ducks'
import moment from 'moment'
import { PageCard } from '../../../../components'

class ScheduleListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weekNum: 1,
      department_id: '',
      department_name: '',
      personnel_id: '',
      personnel_name: '',
      showSearchDept: false,
      showSearchDortor: false
    }
  }

  componentWillMount() {
    this.queryListData({})
  }

  queryListData({ offset = 0, limit = 10, weekNum, department_id, personnel_id }) {
    weekNum = weekNum || this.state.weekNum
    department_id = department_id || this.state.department_id
    personnel_id = personnel_id || this.state.personnel_id
    let start_date = moment()
      .day(weekNum)
      .format('YYYY-MM-DD')
    let end_date = moment()
      .day(weekNum + 6)
      .format('YYYY-MM-DD')
    const { queryDoctorsWithSchedule, clinic_id } = this.props
    queryDoctorsWithSchedule({ clinic_id, start_date, end_date, offset, limit, department_id, personnel_id })
  }

  queryDepartmentList({ keyword }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit: 10 })
  }

  queryDoctorList({ keyword }) {
    const { queryDoctorList, clinic_id } = this.props
    queryDoctorList({ clinic_id, keyword, limit: 10, personnel_type: 2 })
  }

  formatDoctorWeekScheduleData(days = []) {
    const { weekNum } = this.state
    let array = []
    for (let i = 0; i < 7; i++) {
      let visit_date = moment()
        .day(weekNum + i)
        .format('YYYY-MM-DD')
      array[i] = { visit_date, daySchedule: { am: {}, pm: {} } }
      for (let obj of days) {
        if (obj.visit_date === visit_date) {
          let schedules = obj.schedules || []
          let daySchedule = {
            am: {},
            pm: {}
          }
          for (let { doctor_visit_schedule_id, am_pm } of schedules) {
            if (am_pm === 'a') {
              daySchedule.am = { doctor_visit_schedule_id }
            } else if (am_pm === 'p') {
              daySchedule.pm = { doctor_visit_schedule_id }
            }
          }
          array[i].daySchedule = daySchedule
          break
        }
      }
    }
    return array
  }

  searchDeptView() {
    const { departments } = this.props
    const { showSearchDept } = this.state
    if (!showSearchDept) return null
    let text = '选择科室'
    return (
      <div className={'researchView'}>
        <span>{text}</span>
        <ul>
          {departments.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.setState({ department_id: item.id, showSearchDept: false, department_name: item.name })
                  this.queryListData({ department_id: item.id })
                }}
              >
                <div className={'leftInfo'}>
                  {/* <div>{item.code}</div> */}
                  <div>{item.name}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  searchDoctorView() {
    const { doctors } = this.props
    const { showSearchDortor } = this.state
    if (!showSearchDortor) return null
    let text = '选择医生'
    return (
      <div className={'researchView'}>
        <span>{text}</span>
        <ul>
          {doctors.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.setState({ personnel_id: item.id, showSearchDortor: false, personnel_name: item.name })
                  this.queryListData({ personnel_id: item.id })
                }}
              >
                <div className={'leftInfo'}>
                  {/* <div>{item.code}</div> */}
                  <div>{item.name}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // 显示日历列表
  showCalendarList() {
    let { weekNum } = this.state
    const { scheduleDoctors, page_info } = this.props
    return (
      <div className={''}>
        <div className={'listContent'}>
          <div className={'calendarCotent'}>
            <div className={'calenderFilter'}>
              <div className={'filterCnter'}>
                <span
                  style={{ flex: 3 }}
                  onClick={() => {
                    this.setState({ weekNum: weekNum - 7 })
                    this.queryListData({ weekNum: weekNum - 7 })
                  }}
                >
                  {'上一周'}
                </span>
                <span style={{ flex: 1 }}>{'《'}</span>
                <span style={{ flex: 1 }}>{'<'}</span>
                <span
                  style={{ flex: 11 }}
                  onClick={() => {
                    this.setState({ weekNum: 1 })
                    this.queryListData({ weekNum: 1 })
                  }}
                >
                  本周（{moment()
                    .day(weekNum)
                    .format('YYYY年MM月DD日')}至{moment()
                    .day(weekNum + 6)
                    .format('MM月DD日')}）
                </span>
                <span style={{ flex: 1 }}>{'>'}</span>
                <span style={{ flex: 1 }}>{'》'}</span>
                <span
                  style={{ flex: 3 }}
                  onClick={() => {
                    this.setState({ weekNum: weekNum + 7 })
                    this.queryListData({ weekNum: weekNum + 7 })
                  }}
                >
                  下一周
                </span>
              </div>
              <button className={'calenderFilterBtn'}>复制上周排班</button>
            </div>
            <div className={'calenderBox'}>
              <div className={''}>
                <table>
                  <thead>
                    <tr>
                      <td>人员名称</td>
                      <td>科室名称</td>
                      <td>
                        周一（{moment()
                          .day(weekNum)
                          .format('MM-DD')}）
                      </td>
                      <td>
                        周二（{moment()
                          .day(weekNum + 1)
                          .format('MM-DD')}）
                      </td>
                      <td>
                        周三（{moment()
                          .day(weekNum + 2)
                          .format('MM-DD')}）
                      </td>
                      <td>
                        周四（{moment()
                          .day(weekNum + 3)
                          .format('MM-DD')}）
                      </td>
                      <td>
                        周五（{moment()
                          .day(weekNum + 4)
                          .format('MM-DD')}）
                      </td>
                      <td>
                        周六（{moment()
                          .day(weekNum + 5)
                          .format('MM-DD')}）
                      </td>
                      <td>
                        周日（{moment()
                          .day(weekNum + 6)
                          .format('MM-DD')}）
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleDoctors.map((item, index) => {
                      let array = this.formatDoctorWeekScheduleData(item.date || []) || []
                      return (
                        <tr style={{ height: '58px' }} key={index}>
                          <td>{item.personnel_name}</td>
                          <td>{item.department_name}</td>
                          {array.map(({ daySchedule }, index) => (
                            <td key={index}>
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ flex: 1, color: daySchedule.am.doctor_visit_schedule_id ? '#2ACDC8' : '#999999' }}>{daySchedule.am.doctor_visit_schedule_id ? '上午' : '休息'}</span>
                                <span style={{ flex: 1, color: daySchedule.pm.doctor_visit_schedule_id ? '#2ACDC8' : '#999999' }}>{daySchedule.pm.doctor_visit_schedule_id ? '下午' : '休息'}</span>
                              </div>
                            </td>
                          ))}
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
          onItemClick={({ offset, limit }) => {
            this.queryListData({ offset, limit })
          }}
        />
      </div>
    )
  }
  render() {
    // const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={''}>
          <div className={'filterBox'} style={{ marginTop: '30px' }}>
            <div className={'boxLeft'}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ position: 'relative' }}>
                  <input
                    type='text'
                    placeholder='搜索科室'
                    value={this.state.department_name}
                    onChange={e => {
                      // this.setPatientInfo(e, 'name')
                      let keyword = e.target.value
                      this.setState({ showSearchDept: keyword !== '', department_name: keyword, department_id: '' })
                      this.queryDepartmentList({ keyword })
                    }}
                    onFocus={e => {
                      this.setState({ showSearchDept: true, showSearchDortor: false })
                      this.queryDepartmentList({})
                    }}
                  />
                  {this.searchDeptView()}
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    className={'searchbox'}
                    style={{ marginLeft: '15px' }}
                    type='text'
                    placeholder='搜索医生'
                    value={this.state.personnel_name}
                    onChange={e => {
                      // this.setPatientInfo(e, 'name')
                      let keyword = e.target.value
                      this.setState({ showSearchDortor: keyword !== '', personnel_name: keyword, personnel_id: '' })
                      this.queryDoctorList({ keyword })
                    }}
                    onFocus={e => {
                      this.setState({ showSearchDept: false, showSearchDortor: true })
                      this.queryDoctorList({})
                    }}
                  />
                  {this.searchDoctorView()}
                </div>
              </div>
              <button>查询</button>
            </div>
          </div>
        </div>
        {this.showCalendarList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.schedules)
  return {
    clinic_id: state.user.data.clinic_id,
    scheduleDoctors: state.schedules.scheduleDoctors || [],
    page_info: state.schedules.page_info,
    departments: state.departments.data,
    doctors: state.doctors.data
  }
}

export default connect(mapStateToProps, { queryDoctorsWithSchedule, queryDepartmentList, queryDoctorList })(ScheduleListScreen)
