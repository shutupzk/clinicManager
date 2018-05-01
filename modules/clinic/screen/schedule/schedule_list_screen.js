import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { queryDoctorsWithSchedule } from '../../../../ducks'
import moment from 'moment'
import { PageCard } from '../../../../components'

class ScheduleListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weekNum: 1
    }
  }

  componentWillMount() {
    this.queryListData({})
  }

  queryListData({ offset = 0, limit = 10, weekNum }) {
    weekNum = weekNum || this.state.weekNum
    let start_date = moment()
      .day(weekNum)
      .format('YYYY-MM-DD')
    let end_date = moment()
      .day(weekNum + 6)
      .format('YYYY-MM-DD')
    const { queryDoctorsWithSchedule, clinic_id } = this.props
    queryDoctorsWithSchedule({ clinic_id, start_date, end_date, offset, limit })
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

  // 显示日历列表
  showCalendarList() {
    let { weekNum } = this.state
    const { scheduleDoctors, page_info } = this.props
    return (
      <div className={'listContent'}>
        <div className={'calendarCotent'}>
          <div className={'calenderFilter'}>
            <div className={'filterCnter'}>
              <span style={{ flex: 3 }} onClick={() => this.setState({ weekNum: weekNum - 7 })}>
                {'上一周'}
              </span>
              <span style={{ flex: 1 }}>{'《'}</span>
              <span style={{ flex: 1 }}>{'<'}</span>
              <span style={{ flex: 11 }} onClick={() => this.setState({ weekNum: 1 })}>
                本周（{moment()
                  .day(weekNum)
                  .format('YYYY年MM月DD日')}至{moment()
                  .day(weekNum + 6)
                  .format('MM月DD日')}）
              </span>
              <span style={{ flex: 1 }}>{'>'}</span>
              <span style={{ flex: 1 }}>{'》'}</span>
              <span style={{ flex: 3 }} onClick={() => this.setState({ weekNum: weekNum + 7 })}>
                下一周
              </span>
            </div>
            <button className={'calenderFilterBtn'}>复制上周排班</button>
          </div>
          <div className={'calenderBox'}>
            <div className={'calendarContent'}>
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
                              <span style={{ flex: 1, color: daySchedule.am.doctor_visit_schedule_id ? '#2ACDC8' : '##999999' }}>{daySchedule.am.doctor_visit_schedule_id ? '上午' : '休息'}</span>
                              <span style={{ flex: 1, color: daySchedule.pm.doctor_visit_schedule_id ? '#2ACDC8' : '##999999' }}>{daySchedule.pm.doctor_visit_schedule_id ? '下午' : '休息'}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <PageCard
                offset={page_info.offset}
                limit={page_info.limit}
                total={page_info.total}
                onItemClick={({ offset, limit }) => {
                  this.queryListData({ offset, limit })
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    // const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={'formList'}>
          <div className={'filterBox'} style={{ marginTop: '30px' }}>
            <div className={'boxLeft'}>
              <input type='text' placeholder='搜索科室' />
              <input className={'searchbox'} style={{ marginLeft: '15px' }} type='text' placeholder='搜索医生' />
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
    page_info: state.schedules.page_info
  }
}

export default connect(mapStateToProps, { queryDoctorsWithSchedule })(ScheduleListScreen)
