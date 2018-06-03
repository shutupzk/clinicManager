import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import {
  queryDoctorsWithSchedule,
  queryDepartmentList,
  queryDoctorList,
  copyScheduleByDate,
  openScheduleByDate,
  createOneSchedule,
  RemoveScheduleByID,
  stopScheduleByID
} from '../../../../ducks'
import moment from 'moment'
import { PageCard, Select, Confirm } from '../../../../components'

// import Select from 'react-select'

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
      showSearchDortor: false,
      showConfirm: false
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
    // console.log('department_id ========', department_id)
    queryDoctorList({ clinic_id, keyword, limit: 1000, personnel_type: 2, department_id })
  }

  formatDoctorWeekScheduleData(schedules = []) {
    const { weekNum } = this.state
    let array = []
    for (let i = 0; i < 7; i++) {
      let visit_date = moment()
        .day(weekNum + i)
        .format('YYYY-MM-DD')
      array[i] = { visit_date, daySchedule: { am: {}, pm: {} } }
      for (let obj of schedules) {
        let objVd = moment(obj.visit_date).format('YYYY-MM-DD')
        if (objVd === visit_date) {
          if (obj.am_pm === 'a') {
            array[i].daySchedule.am = { ...obj, visit_date: objVd }
          }
          if (obj.am_pm === 'p') {
            array[i].daySchedule.pm = { ...obj, visit_date: objVd }
          }
          break
        }
      }
    }
    return array
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
    this.refs.myConfirm.confirm('确定复制上周排版？', '', 'Success', async () => {
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
        return this.refs.myAlert.alert('复制失败', err)
      }
      this.refs.myAlert.alert('复制成功')
      this.queryListData({})
    })
  }

  async openScheduleByDate() {
    const { openScheduleByDate, clinic_id } = this.props
    const { weekNum } = this.state
    const start_date = moment()
      .day(weekNum)
      .format('YYYY-MM-DD')
    this.refs.myConfirm.confirm('确定开放号源？', '开放号源后将不能删除，更改，确定开放？', 'Warning', async () => {
      let err = await openScheduleByDate({ clinic_id, start_date })
      if (err) {
        return this.refs.myAlert.alert('开放号源失败', err)
      }
      this.refs.myAlert.alert('开放号源成功')
      this.queryListData({})
    })
  }
  // 创建一个排班
  async createOneSchedule({department_id, personnel_id, visit_date, am_pm}) {
    const {createOneSchedule} = this.props
    console.log('{department_id, personnel_id, visit_date, am_pm}', {department_id, personnel_id, visit_date, am_pm})
    let error = await createOneSchedule({department_id, personnel_id, visit_date, am_pm})
    if (error) alert(error)
    this.queryListData({})
  }
  // 删除一个排班
  async RemoveScheduleByID({doctor_visit_schedule_id}) {
    const {RemoveScheduleByID} = this.props
    console.log('{doctor_visit_schedule_id}', {doctor_visit_schedule_id})
    let error = await RemoveScheduleByID({doctor_visit_schedule_id})
    if (error) alert(error)
    this.queryListData({})
  }
  // 停止一个排班
  async stopScheduleByID({doctor_visit_schedule_id}) {
    const {stopScheduleByID} = this.props
    console.log('{doctor_visit_schedule_id}', {doctor_visit_schedule_id})
    this.refs.myConfirm.confirm('提示', '是否停诊该号源？', 'Warning', async () => {
      let err = await stopScheduleByID({doctor_visit_schedule_id})
      if (err) {
        return this.refs.myAlert.alert('停诊号源失败', err)
      }
      this.refs.myAlert.alert('停诊号源成功')
      this.queryListData({})
    })
  }

  // 显示日历列表
  showCalendarList() {
    let { weekNum } = this.state
    const { scheduleDoctors, page_info, canOverride, needOpen } = this.props
    // console.log('scheduleDoctors====', scheduleDoctors)
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
                <button className={'calenderFilterBtn'} style={{ right: '120px' }} onClick={() => this.copyScheduleByDate()}>
                  复制上周排班
                </button>
              ) : null}
              {needOpen ? (
                <button className={'calenderFilterBtn'} onClick={() => this.openScheduleByDate()}>
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
                      let array = this.formatDoctorWeekScheduleData(item.schedules || []) || []
                      return (
                        <tr style={{ height: '58px' }} key={index}>
                          <td>{item.personnel_name}</td>
                          <td>{item.department_name}</td>
                          {array.map(({ daySchedule, visit_date }, index) => (
                            <td key={index}>
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span
                                  style={{
                                    flex: 1,
                                    color: daySchedule.am.doctor_visit_schedule_id && !daySchedule.am.stop_flag ? '#2ACDC8' : '#999999'
                                  }}>
                                  <label>
                                    <input
                                      readOnly={!!daySchedule.am.stop_flag}
                                      type='checkbox'
                                      checked={!!daySchedule.am.doctor_visit_schedule_id && !daySchedule.am.stop_flag}
                                      onChange={e => {
                                        if (e.target.checked) {
                                          if (!daySchedule.pm.open_flag) {
                                            this.createOneSchedule({
                                              department_id: item.department_id,
                                              personnel_id: item.personnel_id,
                                              visit_date: visit_date,
                                              am_pm: 'a'
                                            })
                                          } else {
                                            this.refs.myAlert.alert('已开放号源不能再增加排班')
                                          }
                                        } else {
                                          if (!daySchedule.am.open_flag) {
                                            this.RemoveScheduleByID({
                                              doctor_visit_schedule_id: daySchedule.am.doctor_visit_schedule_id
                                            })
                                          } else {
                                            this.stopScheduleByID({
                                              doctor_visit_schedule_id: daySchedule.am.doctor_visit_schedule_id
                                            })
                                          }
                                        }
                                      }}
                                    />
                                    {daySchedule.am.doctor_visit_schedule_id ? '上午' : '上午'}
                                    {daySchedule.am.stop_flag ? <a style={{color: 'red', fontSize: '12px'}}> (已停诊)</a> : ''}
                                  </label>
                                </span>
                                <span
                                  style={{ flex: 1, color: daySchedule.pm.doctor_visit_schedule_id && !daySchedule.pm.stop_flag ? '#2ACDC8' : '#999999' }}>
                                  <label>
                                    <input
                                      readOnly={!!daySchedule.pm.stop_flag}
                                      type='checkbox'
                                      checked={!!daySchedule.pm.doctor_visit_schedule_id && !daySchedule.pm.stop_flag}
                                      onChange={e => {
                                        if (e.target.checked) {
                                          if (!daySchedule.pm.open_flag) {
                                            this.createOneSchedule({
                                              department_id: item.department_id,
                                              personnel_id: item.personnel_id,
                                              visit_date: visit_date,
                                              am_pm: 'p'
                                            })
                                          } else {
                                            this.refs.myAlert.alert('已开放号源不能再增加排班')
                                          }
                                        } else {
                                          if (!daySchedule.pm.open_flag) {
                                            this.RemoveScheduleByID({
                                              doctor_visit_schedule_id: daySchedule.pm.doctor_visit_schedule_id
                                            })
                                          } else {
                                            this.stopScheduleByID({
                                              doctor_visit_schedule_id: daySchedule.pm.doctor_visit_schedule_id
                                            })
                                          }
                                        }
                                      }}
                                    />
                                    {daySchedule.pm.doctor_visit_schedule_id ? '下午' : '下午'}
                                    {daySchedule.pm.stop_flag ? <a style={{color: 'red', fontSize: '12px'}}> (已停诊)</a> : ''}
                                  </label>
                                </span>
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
    const { doctors } = this.props
    let options = [{ value: '-1', label: '全部医生' }]
    for (let { id, name } of doctors) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  render() {
    return (
      <div className={'orderRecordsPage'}>
        <div className={''}>
          <div className={'filterBox'} style={{ marginTop: '30px' }}>
            <div className={'boxLeft'}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '200px', margin: '12px 20px' }}>
                  <Select
                    placeholder='选择科室'
                    options={this.getDepartmentOptions()}
                    onChange={e => {
                      let id = e.value
                      console.log('id ========', id)
                      this.setState({ department_id: id })
                      this.queryDoctorList({ department_id: id, limit: 100 })
                      this.queryListData({ department_id: id })
                    }}
                  />
                </div>
                <div style={{ width: '200px', margin: '12px 20px' }}>
                  <Select
                    placeholder='选择医生'
                    options={this.getDoctorOptions()}
                    onChange={e => {
                      let id = e.value
                      this.setState({ personnel_id: id })
                      this.queryListData({ personnel_id: id })
                    }}
                  />
                </div>
                {/* <select
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
                </select> */}
              </div>
              {/* <button>查询</button> */}
            </div>
          </div>
        </div>
        {this.showCalendarList()}
        <Confirm ref='myConfirm' />
        <Confirm ref='myAlert' isAlert />
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
    doctors: state.doctors.array_data
  }
}

export default connect(mapStateToProps, {
  queryDoctorsWithSchedule,
  queryDepartmentList,
  queryDoctorList,
  copyScheduleByDate,
  openScheduleByDate,
  createOneSchedule,
  RemoveScheduleByID,
  stopScheduleByID
})(ScheduleListScreen)
