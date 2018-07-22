import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { RecptionPatientList, triagePatientsSelect, triageReception, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Confirm, DatePicker } from '../../../../components'
class AddmisionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      startDate: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      endDate: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      keyword1: '',
      keyword2: ''
    }
  }

  componentDidMount() {
    this.commonQueryList({})
  }

  quetryRecptionPatientList({ keyword, query_type, offset, limit, startDate, endDate }) {
    const { clinic_id, RecptionPatientList, triage_personnel_id } = this.props
    RecptionPatientList({ clinic_id, personnel_id: triage_personnel_id, query_type, offset, limit, startDate, endDate, keyword })
  }

  commonQueryList({ offset = 0, limit = 6, pageType }) {
    let { keyword1, keyword2, startDate, endDate } = this.state
    pageType = pageType || this.state.pageType
    let keyword = keyword1
    let query_type = '1'
    if (pageType === 2) {
      query_type = '1'
      keyword = keyword2
    }
    if (pageType === 1) {
      query_type = '0'
    }
    this.quetryRecptionPatientList({ keyword, query_type, offset, limit, startDate, endDate })
  }

  // 接诊
  async reception(patient) {
    const { triageReception, triagePatientsSelect, triage_personnel_id } = this.props
    let { status, clinic_triage_patient_id, patient_id } = patient
    triagePatientsSelect({ clinic_triage_patient_id })
    this.props.patientSelect({ patient_id })
    if (status === 20) {
      this.refs.myConfirm.confirm('确定接诊？', '', 'Success', async () => {
        let error = await triageReception({ clinic_triage_patient_id, recept_personnel_id: triage_personnel_id })
        if (error) {
          return this.refs.myAlert.alert('接诊失败', error)
        }
        Router.push('/treatment/admission/reception')
      })
    } else {
      Router.push('/treatment/admission/reception')
    }
  }

  receptionOperation(clinic_triage_patient_id) {
    triagePatientsSelect({ clinic_triage_patient_id })
    Router.push('/treatment/admission/reception')
  }

  formatWaittingTime(time) {
    if (time > 1440) {
      return `${Math.floor(time / 1440)}天${Math.floor((time % 1440) / 60)}小时${time % 60}分钟`
    }
    if (time > 60) {
      return `${Math.floor(time / 60)}小时${time % 60}分钟`
    }
    if (time <= 0) return `小于1分钟`
    return `${time}分钟`
  }

  // 显示待接诊列表
  showTriageList() {
    const { pageType } = this.state
    const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.updated_time || patient.register_time
              // let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              let waittingTime = this.formatWaittingTime(Math.floor(moment().diff(moment(updateTime)) / 60000))

              let treat_status = '待接诊'
              let statusColor = '#F24A01'

              switch (patient.status) {
                case 40:
                  treat_status = '已接诊'
                  statusColor = '#31B0B3'
                  break
                case 30:
                  treat_status = '接诊中'
                  statusColor = '#31B0B3'
                  break
                default:
                  break
              }

              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        let patient_id = patient.patient_id
                        this.props.patientSelect({ patient_id })
                        Router.push('/treatment/registration/list_detail')
                      }}
                    >
                      {patient.patient_name}
                    </span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{treat_status}</span>
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
                      <a>
                        {patient.doctor_name}
                        {patient.status === 20 ? ` \\ 已等候 ${waittingTime}` : ''}
                      </a>
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
                    <span onClick={() => this.reception(patient)}> {pageType === 1 ? '接诊' : '查看'}</span>
                    <span
                      onClick={() => {
                        let patient_id = patient.patient_id
                        this.props.patientSelect({ patient_id })
                        Router.push('/treatment/registration/list_detail')
                      }}
                    >
                      查看健康档案
                    </span>
                    <span onClick={() => this.receptionOperation(patient.clinic_triage_patient_id)}>操作</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <style jsx='true'>{`
          .itemBottom span:nth-child(2) {
            border-right: 2px solid #31b0b3;
          }
        `}</style>
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

  showBoxLeft() {
    const { pageType, keyword1, keyword2, startDate, endDate } = this.state

    if (pageType === 1) {
      return (
        <div className={'boxLeft'}>
          <input
            type='text'
            placeholder='搜索就诊人姓名/身份证号码/手机号码'
            value={keyword1}
            onChange={e => {
              this.setState({ keyword1: e.target.value })
            }}
          />
          <button onClick={() => this.commonQueryList({})}>查询</button>
        </div>
      )
    } else {
      return (
        <div className={'boxLeft'}>
          <div className={'dateDiv'}>
            <DatePicker
              placeholder={'开始日期'}
              value={moment(moment(startDate).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
              onChange={(date, str) => {
                if (date) {
                  this.setState({ startDate: moment(date).format('YYYY-MM-DD') })
                }
              }}
            />
          </div>
          <div className={'dateDiv'}>
            <DatePicker
              placeholder={'结束日期'}
              value={moment(moment(endDate).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
              onChange={(date, str) => {
                if (date) {
                  this.setState({ endDate: moment(date).format('YYYY-MM-DD') })
                }
              }}
            />
          </div>
          <input
            type='text'
            placeholder='搜索就诊人姓名/身份证号码/手机号码'
            value={keyword2}
            onChange={e => {
              this.setState({ keyword2: e.target.value })
            }}
          />
          <button onClick={() => this.commonQueryList({})}>查询</button>
        </div>
      )
    }
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
            今日待接诊
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2, keyword1: '' })
              this.commonQueryList({ pageType: 2 })
            }}
          >
            已接诊记录
          </span>
        </div>
        <div className={'filterBox'}>
          {this.showBoxLeft()}
          <div className={'boxRight'}>
            <button>快速接诊</button>
          </div>
        </div>
        {this.showTriageList()}
        <Confirm ref='myAlert' isAlert />
        <Confirm ref='myConfirm' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  }
}

export default connect(
  mapStateToProps,
  { RecptionPatientList, triagePatientsSelect, triageReception, patientSelect }
)(AddmisionScreen)
