import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { queryDoctorsWithSchedule, queryDepartmentList, queryDoctorList, copyScheduleByDate } from '../../../../ducks'
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
    this.queryDepartmentList({ limit: 100 })
  }

  queryListData({ offset = 0, limit = 10, weekNum, department_id, personnel_id }) {
    weekNum = weekNum || this.state.weekNum
    if (department_id === '-1') {
      department_id = null
    } else {
      department_id = department_id || this.state.department_id
    }

    if (personnel_id === '-1') {
      personnel_id = null
    } else {
      personnel_id = personnel_id || this.state.personnel_id
    }

    let start_date = moment()
      .day(weekNum)
      .format('YYYY-MM-DD')
    let end_date = moment()
      .day(weekNum + 6)
      .format('YYYY-MM-DD')
    const { queryDoctorsWithSchedule, clinic_id } = this.props
    queryDoctorsWithSchedule({ clinic_id, start_date, end_date, offset, limit, department_id, personnel_id })
  }

  queryDepartmentList({ keyword, limit = 10 }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit })
  }

  queryDoctorList({ keyword, limit = 10, department_id }) {
    const { queryDoctorList, clinic_id } = this.props
    console.log('department_id ========', department_id)
    queryDoctorList({ clinic_id, keyword, limit: 10, personnel_type: 2, department_id })
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

  getWeekTds() {
    const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    const { weekNum } = this.state
    let array = []
    for (let i = 0; i < 7; i++) {
      array.push(
        `${weeks[i]} ( ${moment()
          .day(weekNum + i)
          .format('MM-DD')} )`
      )
    }
    return array
  }

  async copyScheduleByDate() {
    const { copyScheduleByDate, clinic_id } = this.props
    const { weekNum } = this.state
    const copy_start_date = moment()
      .day(weekNum - 7)
      .format('YYYY-MM-DD')
    const insert_start_date = moment()
      .day(weekNum)
      .format('YYYY-MM-DD')
    let err = await copyScheduleByDate({ clinic_id, copy_start_date, insert_start_date })
    if (err) {
      return alert('复制失败' + err)
    }
    alert('复制成功')
    this.queryListData({})
  }

  // 显示日历列表
  showCalendarList() {
    let { weekNum } = this.state
    const { scheduleDoctors, page_info, canOverride, needOpen } = this.props
    const weekTds = this.getWeekTds()
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
              {canOverride ? (
                <button style={{ width: '150px' }} onClick={() => this.copyScheduleByDate()}>
                  复制上周排班
                </button>
              ) : null}
              {needOpen ? (
                <button style={{ width: '100px' }} onClick={() => {}}>
                  开放号源
                </button>
              ) : null}
            </div>
            <div className={'calenderBox'}>
              <div className={''}>
                <table>
                  <thead>
                    <tr>
                      <td>人员名称</td>
                      <td>科室名称</td>
                      {weekTds.map((item, i) => {
                        return <td key={i}> {item}</td>
                      })}
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
    const { departments, doctors } = this.props
    return (
      <div className={'orderRecordsPage'}>
        <div className={''}>
          <div className={'filterBox'} style={{ marginTop: '30px' }}>
            <div className={'boxLeft'}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <select
                  onChange={e => {
                    let id = e.target.value
                    console.log('id ========', id)
                    this.setState({ department_id: id })
                    this.queryDoctorList({ department_id: id, limit: 100 })
                    this.queryListData({ department_id: id })
                  }}
                >
                  <option value={-1}>选择科室</option>
                  {departments.map(({ id, name }, index) => {
                    return (
                      <option key={index} value={id}>
                        {name}
                      </option>
                    )
                  })}
                </select>
                <select
                  onChange={e => {
                    let id = e.target.value
                    this.setState({ personnel_id: id })
                    this.queryListData({ personnel_id: id })
                  }}
                >
                  <option value={-1}>选择医生</option>
                  {doctors.map(({ id, name }, index) => {
                    return (
                      <option key={index} value={id}>
                        {name}
                      </option>
                    )
                  })}
                </select>
                {/* <div style={{ position: 'relative' }}>
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
                </div> */}
              </div>
              {/* <button>查询</button> */}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .boxLeft select {
              width: 200px;
              height: 40px;
              background: rgba(255, 255, 255, 1);
              box-sizing: border-box;
              border-radius: 4px;
              margin: 10px 15px 0 20px;
              border: 1px solid rgba(42, 205, 200, 1);
              font-size: 12px;
              font-family: PingFangSC-Regular;
              color: rgba(102, 102, 102, 1);
            }
            .boxLeft option {
              width: 67px;
              height: 18px;
              font-size: 12px;
              font-family: PingFangSC-Regular;
              color: rgba(102, 102, 102, 1);
              line-height: 18px;
            }
          `}
        </style>
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
    canOverride: state.schedules.canOverride,
    needOpen: state.schedules.needOpen,
    departments: state.departments.data,
    doctors: state.doctors.data
  }
}

export default connect(mapStateToProps, { queryDoctorsWithSchedule, queryDepartmentList, queryDoctorList, copyScheduleByDate })(ScheduleListScreen)
