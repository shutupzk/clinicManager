import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import moment from 'moment'
import { triagePatientsList, triageDoctorsList, triagePatient } from '../../../ducks'
import { getAgeByBirthday } from '../../../utils'
import { PageCard } from '../../../components'

class TriageScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      alertType: 0,
      status: 10,
      alertPageType: 1,
      keyword1: '',
      keyword2: '',
      nowWeekNum: 1,
      dateTime: [
        { time: '08:00-09:00' },
        { time: '09:00-10:00' },
        { time: '10:00-11:00' },
        { time: '11:00-12:00' },
        { time: '13:00-14:00' },
        { time: '14:00-15:00' },
        { time: '15:00-16:00' },
        { time: '16:00-17:00' },
        { time: '17:00-18:00' }
      ]
    }
  }

  componentDidMount() {
    this.commonQueryList({})
  }

  commonQueryList({ offset = 0, limit = 6, pageType }) {
    const { keyword1, keyword2 } = this.state
    pageType = pageType || this.state.pageType
    let keyword = keyword1
    let status_start = 10
    let status_end = 10
    if (pageType === 2) {
      keyword = keyword2
      status_start = 20
      status_end = 90
    }
    console.log('keyword, status_start, status_end, offset, limit ', keyword, status_start, status_end, offset, limit)
    this.quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit })
  }

  quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit }) {
    const { clinic_id, triagePatientsList } = this.props
    let params = { clinic_id, is_today: true, offset, limit, keyword }
    if (status_start && status_end) {
      params.status_start = status_start
      params.status_end = status_end
    }
    triagePatientsList(params)
  }

  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  // 完善健康档案
  showCompleteHealthFile() {
    this.setState({ alertType: 1 })
  }
  // 显示体征表单
  showBodySigns() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'recordContent'}>
          <ul>
            <li>
              <label>体重（Kg）</label>
              <input type='text' />
            </li>
            <li>
              <label>身高（cm）</label>
              <input type='text' />
            </li>
            <li>
              <label>BMI</label>
              <input type='text' />
            </li>
            <li style={{ width: '25%' }}>
              <label>血型</label>
              <select style={{ width: '115px' }}>
                <option>未查</option>
                <option>A型</option>
                <option>B型</option>
                <option>O型</option>
                <option>AB型</option>
              </select>
            </li>
            <li style={{ width: '25%' }}>
              <label>RH血型</label>
              <select style={{ width: '115px' }}>
                <option>未查</option>
                <option>RH阴型</option>
                <option>RH阳型</option>
              </select>
            </li>
            <li>
              <label>体温（°C）</label>
              <select style={{ width: '115px' }}>
                <option>口温</option>
                <option>耳温</option>
                <option>额温</option>
                <option>腋温</option>
                <option>肛温</option>
              </select>
              <input type='text' style={{ width: '170px', marginLeft: '10px' }} />
            </li>
            <li>
              <label>呼吸(次/分钟)</label>
              <input type='text' />
            </li>
            <li>
              <label>脉搏(次/分钟)</label>
              <input type='text' />
            </li>
            <li>
              <label>血压(mmHg)</label>
              <input type='text' style={{ width: '140px' }} />
              <input type='text' style={{ width: '140px', marginLeft: '10px' }} />
            </li>
            <li>
              <label>血糖浓度(mmol/I)</label>
              <input type='text' style={{ width: '95px' }} />
              <select style={{ width: '70px', marginLeft: '10px' }}>
                <option>请选择</option>
                <option>睡前</option>
                <option>晚餐后</option>
                <option>晚餐前</option>
                <option>午餐后</option>
                <option>午餐前</option>
                <option>早餐后</option>
                <option>早餐前</option>
                <option>凌晨</option>
                <option>空腹</option>
              </select>
              <input type='text' style={{ width: '110px', marginLeft: '10px' }} />
            </li>
            <li style={{ width: '25%' }}>
              <label>左眼视力</label>
              <input type='text' style={{ width: '130px' }} />
            </li>
            <li style={{ width: '25%' }}>
              <label>右眼视力</label>
              <input type='text' style={{ width: '130px' }} />
            </li>
            <li>
              <label>氧饱和度(%)</label>
              <input type='text' />
            </li>
            <li>
              <label>疼痛评分（1-10分）</label>
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'}>
          <button className='saveBtn' onClick={() => this.submit(this.props)}>
            保存
          </button>
          <button className='commonBtn' onClick={() => this.submit(this.props)}>
            取消
          </button>
        </div>
      </div>
    )
  }
  // 显示诊前病历
  showPreMedicalRecords() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>过敏史</label>
              <label style={{ width: '150px', lineHeight: '30px' }}>
                <input type='radio' name='allergy' style={{ width: 'auto', height: 'auto' }} />是
              </label>
              <label style={{ width: '150px', lineHeight: '30px' }}>
                <input type='radio' name='allergy' style={{ width: 'auto', height: 'auto' }} />否
              </label>
              <input type='text' placeholder={'对什么过敏'} />
            </li>
            <li>
              <label>个人史</label>
              <textarea style={{ height: '63px' }}>asda</textarea>
            </li>
            <li>
              <label>家族史</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>接种疫苗</label>
              <textarea style={{ height: '35px' }}>asda</textarea>
            </li>
            <li>
              <label>月经史</label>
              <input type='text' style={{ width: '170px' }} />
              <input type='text' style={{ width: '170px', marginLeft: '70px' }} />
              <input type='text' style={{ width: '170px', marginLeft: '70px' }} />
              <input type='text' style={{ width: '170px', marginTop: '10px' }} />
              <input type='text' style={{ width: '170px', marginLeft: '70px', marginTop: '10px' }} />
            </li>
            <li>
              <label>生育史</label>
              <input type='text' style={{ width: '661px' }} />
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'}>
          <button className='saveBtn' onClick={() => this.submit(this.props)}>
            保存
          </button>
          <button className='commonBtn' onClick={() => this.submit(this.props)}>
            取消
          </button>
        </div>
      </div>
    )
  }
  // 诊前预诊
  showPreDiagnosisRecords() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>
                主诉<b style={{ color: 'red' }}>*</b>
              </label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>现病史</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>既往史</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>体格检查</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>备注</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'}>
          <button className='saveBtn' onClick={() => this.submit(this.props)}>
            保存
          </button>
          <button className='commonBtn' onClick={() => this.submit(this.props)}>
            取消
          </button>
        </div>
      </div>
    )
  }

  completeHealthFile() {
    return (
      <div className={'healthFile'}>
        <div className={'healthFile_top'}>
          <span>个人健康档案</span>
          <span onClick={() => this.setState({ alertType: 0 })}>×</span>
        </div>
        <div className={'healthFile_menu'}>
          <span className={this.state.alertPageType === 1 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 1 })}>
            体征
          </span>
          <span className={this.state.alertPageType === 2 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 2 })}>
            诊前病历
          </span>
          <span className={this.state.alertPageType === 3 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 3 })}>
            诊前预诊
          </span>
        </div>
        {this.state.alertPageType === 1 ? this.showBodySigns() : ''}
        {this.state.alertPageType === 2 ? this.showPreMedicalRecords() : ''}
        {this.state.alertPageType === 3 ? this.showPreDiagnosisRecords() : ''}
      </div>
    )
  }
  // 选择医生
  showChooseDoctor(clinic_triage_patient_id) {
    const { triageDoctorsList, clinic_id } = this.props
    triageDoctorsList({ clinic_id })
    this.setState({ alertType: 2, clinic_triage_patient_id })
  }

  getDoctorDatas() {
    let array = []
    const { triageDoctors } = this.props
    for (let key in triageDoctors) {
      array.push(triageDoctors[key])
    }
    return array
  }

  chooseDoctor() {
    let doctors = this.getDoctorDatas()
    const { triagePatient, triage_personnel_id } = this.props
    const { clinic_triage_patient_id } = this.state
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>选择医生</span>
            <div>
              <select placeholder='模板名称/模板类型'>
                <option>请选择科室</option>
                <option>儿科</option>
                <option>全科门诊</option>
                <option>中医科</option>
              </select>
              <input type='text' placeholder={'医生名称'} />
              <button>查询</button>
            </div>
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              {doctors.map((doctor, index) => {
                return (
                  <li
                    key={index}
                    onClick={async () => {
                      let doctor_visit_schedule_id = doctor.doctor_visit_schedule_id
                      let error = await triagePatient({ doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id })

                      if (error) {
                        return alert('分诊失败: ' + error)
                      } else {
                        return alert('分诊成功')
                      }
                    }}
                  >
                    <div>
                      <img src={'/static/login/u49.png'} />
                      <span>医生</span>
                      <span>{doctor.doctor_name}</span>
                    </div>
                    <div>
                      <span>科室名称：{doctor.department_name}</span>
                      <span>今日待接诊：{doctor.wait_total}人</span>
                      <span>今日已接诊：{doctor.triaged_total}人</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'pagination'} />
        </div>
      </div>
    )
  }

  // 显示分诊列表
  showTriageList() {
    const { triagePatients, patient_page_info } = this.props
    const { pageType } = this.state
    if (pageType !== 1 && pageType !== 2) return null
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索科室' />
            <button>查询</button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.status === 20 ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.status === 20 ? '已分诊' : '待分诊'}</span>
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
                    <span onClick={() => this.showCompleteHealthFile()}>完善健康档案</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>{pageType === 1 ? '选择医生' : '换诊'}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
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

  // 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
  }
  // 显示日历列表
  showCalendarList() {
    // const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let nowWeekNum = this.state.nowWeekNum
    const dateTime = this.state.dateTime
    return (
      <div className={'listContent'}>
        <div className={'calendarCotent'}>
          <div className={'calenderFilter'}>
            <div className={'filterCnter'}>
              <span style={{ flex: 3 }} onClick={() => this.setState({ nowWeekNum: nowWeekNum - 7 })}>
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
              <span style={{ flex: 3 }} onClick={() => this.setState({ nowWeekNum: nowWeekNum + 7 })}>
                下一周
              </span>
            </div>
          </div>
          <div className={'calenderBox'}>
            <div className={'calendarContent'}>
              <table>
                <thead>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={2}>
                      周一（{moment()
                        .day(nowWeekNum)
                        .format('MM-DD')}）
                    </td>
                    <td colSpan={2}>
                      周二（{moment()
                        .day(nowWeekNum + 1)
                        .format('MM-DD')}）
                    </td>
                    <td colSpan={2}>
                      周三（{moment()
                        .day(nowWeekNum + 2)
                        .format('MM-DD')}）
                    </td>
                    <td colSpan={2}>
                      周四（{moment()
                        .day(nowWeekNum + 3)
                        .format('MM-DD')}）
                    </td>
                    <td colSpan={2}>
                      周五（{moment()
                        .day(nowWeekNum + 4)
                        .format('MM-DD')}）
                    </td>
                    <td colSpan={2}>
                      周六（{moment()
                        .day(nowWeekNum + 5)
                        .format('MM-DD')}）
                    </td>
                    <td colSpan={2}>
                      周日（{moment()
                        .day(nowWeekNum + 6)
                        .format('MM-DD')}）
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2}>预约</td>
                    <td>上午</td>
                    <td>下午</td>
                    <td>上午</td>
                    <td>下午</td>
                    <td>上午</td>
                    <td>下午</td>
                    <td>上午</td>
                    <td>下午</td>
                    <td>上午</td>
                    <td>下午</td>
                    <td>上午</td>
                    <td>下午</td>
                    <td>上午</td>
                    <td>下午</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>预约</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                  </tr>
                  {dateTime.map((item, index) => {
                    return (
                      <tr>
                        <td colSpan={2}>{item.time}</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                    )
                  })}
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // 显示就诊人列表
  showPatientList() {
    return (
      <div className={'regisList'}>
        <ul>
          <li>
            <div className={'liTop'}>
              <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
              <span className={'status'}>已预约</span>
            </div>
            <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
            <div>门诊ID：000989123654</div>
            <div>接诊科室：</div>
            <div>接诊医生：</div>
            <div>预约时间：20180410 10:23:23</div>
            <div>备注：</div>
            <div className={'seeDetail'} onClick={() => this.seeDetail()}>
              <a onClick={() => this.editPatient()}>修改</a>
              <a onClick={() => this.cancelReservation()}>取消</a>
            </div>
          </li>
          <li>
            <div className={'liTop'}>
              <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
              <span className={'status'}>已就诊</span>
            </div>
            <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
            <div>门诊ID：000989123654</div>
            <div>接诊科室：</div>
            <div>接诊医生：</div>
            <div>预约时间：20180410 10:23:23</div>
            <div>备注：</div>
            <div className={'seeDetail'}>
              <a onClick={() => this.gotoWechat()}>微信交流</a>
              <a onClick={() => this.scanPatient()}>查看</a>
            </div>
          </li>
          <li>
            <div className={'liTop'}>
              <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
              <span className={'status'}>已就诊</span>
            </div>
            <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
            <div>门诊ID：000989123654</div>
            <div>接诊科室：</div>
            <div>接诊医生：</div>
            <div>预约时间：20180410 10:23:23</div>
            <div>备注：</div>
            <div className={'seeDetail'}>
              <a onClick={() => this.gotoWechat()}>微信交流</a>
              <a onClick={() => this.scanPatient()}>查看</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  // 新增预约
  addNewReservation() {
    Router.push('/treatment/reservation_add')
  }
  // 预约管理
  showReservation() {
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <label>
              <input type='radio' name={'listType'} /> 日历列表
            </label>
            <label>
              <input type='radio' name={'listType'} /> 就诊人列表
            </label>
            <input type='text' placeholder='搜索科室' />
            <input className={'searchbox'} type='text' placeholder='搜索科室' />
            <input type='text' placeholder='搜索医生' />
            {/* <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
            <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' /> */}
            <button>查询</button>
          </div>
          <div className={'boxRight'}>
            <button onClick={() => this.addNewReservation()}>新增预约</button>
          </div>
        </div>
        {/* <div className={'regisListTop'}>
          <button className={'bigBtn'} onClick={() => this.addNewReservation()}>
            新增预约
          </button>
          <div className={'radioDiv'}>
            <label>
              <input type='radio' checked={this.state.showType === 1 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 1 })} />
              日历列表
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input type='radio' checked={this.state.showType === 2 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 2 })} />
              就诊人列表
            </label>
          </div>
          <input className={'searchbox'} style={{ marginLeft: '25px' }} type='text' placeholder='搜索科室' />
          <input className={'searchbox'} style={{ marginLeft: '15px' }} type='text' placeholder='搜索医生' />
          <input type='text' style={{ marginLeft: '15px' }} placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <button className={'searchBtn'}>查询</button>
        </div> */}

        {this.state.showType === 1 ? this.showCalendarList() : ''}
        {/* {this.state.showType === 2 ? this.showPatientList() : ''} */}
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
            input[type='text'] {
              width: 152px;
              margin: 16px 0 16px 17px;
            }
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
              this.commonQueryList({ pageType: 1 })
            }}
          >
            分诊
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2, keyword1: '' })
              this.commonQueryList({ pageType: 2 })
            }}
          >
            分诊记录
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.setState({ pageType: 3 })}>
            预约管理
          </span>
        </div>
        {this.showTriageList()}
        {this.state.pageType === 3 ? this.showReservation() : ''}
        {this.state.alertType === 1 ? this.completeHealthFile() : ''}
        {this.state.alertType === 2 ? this.chooseDoctor() : ''}
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

export default connect(mapStateToProps, { triagePatientsList, triageDoctorsList, triagePatient })(TriageScreen)
