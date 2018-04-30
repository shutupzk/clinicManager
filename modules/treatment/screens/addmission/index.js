import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { triagePatientsList } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard } from '../../../../components'
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
    this.quetryTriagePatientsList({ status_start: 20, status_end: 20 })
  }

  quetryTriagePatientsList({ status_start, status_end, offset, limit }) {
    const { clinic_id, triagePatientsList } = this.props
    let params = { clinic_id, is_today: true, offset, limit }
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
  // 显示分诊列表
  showTriageList() {
    const { pageType } = this.state
    if (pageType !== 1) return
    const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.treat_status === true ? '已分诊' : '待分诊'}</span>
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
                    <span onClick={() => this.showCompleteHealthFile()}>接诊</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>查看健康档案</span>
                    <span onClick={() => this.showCompleteHealthFile()}>操作</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <style jsx>{`
          .listContent {
            float: left;
            width: 1120px;
            margin-left: 66px;
            // background: #909090;
          }
          .listContent ul {
            float: left;
            margin: 10px 0 0 0;
          }
          .listContent ul li {
            width: 360px;
            height: 270px;
            background: rgba(255, 255, 255, 1);
            border-radius: 7px;
            margin: 10px 10px 0 0;
            float: left;
            display: flex;
            flex-direction: column;
          }
          .itemTop {
            border-bottom: 2px solid #f4f7f8;
            margin: 10px 14px 0 14px;
            height: 37px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .itemTop span:nth-child(1) {
            width: auto;
            height: 19px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 51, 51, 1);
            margin-left: 12px;
          }
          .itemTop span:nth-child(2) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(3) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(4) {
            width: 60px;
            height: 20px;
            border-radius: 10px;
            float: right;
            text-align: center;
          }
          .itemCenter {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 332px;
            margin: 10px auto 0 auto;
            justify-content: center;
          }
          .itemCenter span {
            display: flex;
            flex-direction: row;
            height: 35px;
            line-height: 26px;
            margin: 0px 0px 0 12px;
          }
          .itemCenter span a:nth-child(1) {
            width: 75px;
            color: #666666;
            font-size: 14px;
          }
          .itemCenter span a:nth-child(2) {
            color: #333333;
            font-size: 14px;
          }
          .itemBottom {
            width: 100%;
            height: 39px;
            border-top: 2px solid #42b7ba;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .itemBottom span {
            flex: 1;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(49, 176, 179, 1);
            height: 39px;
            line-height: 39px;
            text-align: center;
          }
          .itemBottom span:nth-child(1) {
            border-right: 2px solid #31b0b3;
          }
          .itemBottom span:nth-child(2) {
            border-right: 2px solid #31b0b3;
          }
        `}</style>
        <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            const keyword = this.state.keyword
            this.quetryTriagePatientsList({ offset, limit, keyword, status_start: 20, status_end: 20 })
          }}
        />
      </div>
    )
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            今日待接诊
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            今日已接诊
          </span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
            <button>查询</button>
          </div>
          <div className={'boxRight'}>
            <button>快速接诊</button>
          </div>
        </div>
        {this.state.pageType === 1 ? this.showTriageList() : ''}
        {this.state.pageType === 2 ? this.showTriageRecord() : ''}
        {this.state.pageType === 3 ? this.showReservation() : ''}
        {this.state.alertType === 1 ? this.completeHealthFile() : ''}
        {this.state.alertType === 2 ? this.chooseDoctor() : ''}
        <style jsx>{`
          .childTopBar {
            float: left;
            width: 100%;
            // background:#909090;
          }
          .childTopBar span {
            margin-top: 31px;
            width: 126px;
            height: 37px;
            background: rgba(255, 255, 255, 1);
            float: left;
            text-align: center;
            line-height: 37px;
            cursor: pointer;
            margin-bottom: 10px;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 66px;
          }
          .childTopBar span:hover,
          .childTopBar span.sel {
            background: rgba(42, 205, 200, 1);
            border-radius: 4px 0px 0px 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei-Bold;
            color: rgba(255, 255, 255, 1);
          }
          .childTopBar span:nth-child(2):hover,
          .childTopBar span.sel {
            border-radius: 0;
          }
          .childTopBar span:nth-child(3):hover,
          .childTopBar span.sel {
            border-radius: 4px 4px 0px 0px;
          }
          .filterBox {
            float: left;
            width: 1098px;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 66px;
          }
          .filterBox .boxLeft {
            float: left;
          }
          .filterBox .boxLeft input {
            float: left;
            width: 328px;
            height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
        `}</style>
        {/* <PageCard limit={10} offset={20} total={100} /> */}
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
