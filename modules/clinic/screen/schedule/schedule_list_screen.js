import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { doctorList } from '../../../../ducks'
import moment from 'moment'

class ScheduleListScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      personnelType: 1,
      pageType: 1,
      nowWeekNum: 1
    }
  }

  componentWillMount () {
    const { doctorList, clinic_code } = this.props
    doctorList({ clinic_code })
  }

  getListData () {
    const { doctors } = this.props
    let array = []
    for (let key in doctors) {
      array.push(doctors[key])
    }
    return array
  }

  goToDetail ({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/detail')
  }

  goToEdit ({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/edit')
  }

  async toRemove ({ apiName }) {
    const confirmed = confirm('确定要删除  ' + apiName + '?')
    if (confirmed) {
      const { removeBaseApi } = this.props
      const error = await removeBaseApi({ apiName })
      if (error) {
        alert(error)
      }
    }
  }

  renderTitle () {
    // const { titleText, orderTitle, liPadding } = styles
    return (
      <ul className='flex tb-flex'>
        <li style={{ flex: 1, height: '40px', lineHeight: '40px' }}>序号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>科室编码 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>科室名称</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属诊所</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>是否开放预约挂号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderRow ({ apiName, description }, index) {
    const { liPadding, fenyeItem, buttonMiddle } = styles
    return (
      <ul style={{ ...liPadding }} className='flex tb-flex listItem' key={index}>
        <li style={{ flex: 1 }}>{`${index}`}</li>
        <li style={{ flex: 2 }}>{apiName}</li>
        <li style={{ flex: 5 }}>{description}</li>
        <li style={{ flex: 2, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, background: '#0BC019', border: '1px solid #0BC019' }} onClick={() => this.goToDetail({ apiName })}>
						查看
					</button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({ apiName })}>
						编辑
					</button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({ apiName })}>
						删除
					</button>
        </li>
      </ul>
    )
  }
  changeContent ({ type }) {
    this.setState({ pageType: type })
  }
  showDoctor () {
    let exercises = this.getListData()
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索科室名称/科室编号' />
          <button className={'searchBtn'}>查询</button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'}>新增科室</button>
          {this.renderTitle()}
          {exercises.map((item, index) => {
            return this.renderRow(item, index)
          })}
        </div>
      </div>
    )
  }

// 显示日历列表
  showCalendarList () {
    let nowWeekNum = this.state.nowWeekNum
    return (
      <div className={'regisList'}>
        <div className={'calenderFilter'}>
          <button className={'calenderFilterBtn'} onClick={() => this.setState({ nowWeekNum: nowWeekNum - 7 })}>
						上周
					</button>
          <button className={'calenderFilterBtn'} onClick={() => this.setState({ nowWeekNum: nowWeekNum + 7 })}>
						下周
					</button>
          <button className={'calenderFilterBtn'} onClick={() => this.setState({ nowWeekNum: 1 })}>
						本周
					</button>
          <button className={'calenderFilterBtn'}>复制上周排班</button>
        </div>
        <div className={'calenderBox'}>
          <h4>
            {moment()
							.day(nowWeekNum)
							.format('YYYY年MM月DD日')}至{moment()
							.day(nowWeekNum + 6)
							.format('MM月DD日')}
          </h4>
          <div className={'calendarContent'}>
            <table>
              <thead>
                <tr>
                  <td>人员名称</td>
                  <td>科室名称</td>
                  <td>
										周一（{moment()
											.day(nowWeekNum)
											.format('MM-DD')}）
									</td>
                  <td>
										周二（{moment()
											.day(nowWeekNum + 1)
											.format('MM-DD')}）
									</td>
                  <td>
										周三（{moment()
											.day(nowWeekNum + 2)
											.format('MM-DD')}）
									</td>
                  <td>
										周四（{moment()
											.day(nowWeekNum + 3)
											.format('MM-DD')}）
									</td>
                  <td>
										周五（{moment()
											.day(nowWeekNum + 4)
											.format('MM-DD')}）
									</td>
                  <td>
										周六（{moment()
											.day(nowWeekNum + 5)
											.format('MM-DD')}）
									</td>
                  <td>
										周日（{moment()
											.day(nowWeekNum + 6)
											.format('MM-DD')}）
									</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: '58px' }}>
                  <td>人员名称</td>
                  <td>科室名称</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                </tr>
                <tr style={{ height: '58px' }}>
                  <td>人员名称</td>
                  <td>科室名称</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                  <td>
										08:00-12:00；<br />14:00-18:00；
									</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  render () {
    // const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={'formList'}>
          <div className={'childTopBar'}>
            <div className={'regisListTop'}>
              <input className={'searchbox'} style={{ marginLeft: '25px' }} type='text' placeholder='搜索科室' />
              <input className={'searchbox'} style={{ marginLeft: '15px' }} type='text' placeholder='搜索医生' />
              <button className={'searchBtn'}>查询</button>
            </div>
            {this.state.showType === 1 ? this.showCalendarList() : ''}
            {this.state.showType === 2 ? this.showPatientList() : ''}
            <div className={'pagination'} />
          </div>
        </div>
        {this.state.pageType === 1 ? this.showCalendarList() : ''}
        {/* {this.state.pageType==2?this.showEmployee():''} */}
      </div>
    )
  }
}

const styles = {
  titleText: {
    fontSize: '16px'
  },
  liPadding: {
    padding: '10px 15px'
  },
  orderTitle: {
    color: '#797979',
    background: '#f2f2f2',
    borderRadius: '3px'
  },
  buttonMiddle: {
    height: '30px',
    width: '50px'
  },
  buttonLarge: {
    height: '40px',
    width: '80px',
    fontSize: '20px'
  },
  fenyeItem: {
    background: '#3ca0ff',
    borderRadius: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    border: '1px solid #3ca0ff',
    color: '#fff'
  }
}

const mapStateToProps = state => {
  return {
    doctors: state.doctors.data,
    clinic_code: '00000001'
  }
}

export default connect(mapStateToProps, { doctorList })(ScheduleListScreen)
