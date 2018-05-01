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
      nowWeekNum: 1,
      keyword1: '',
      keyword2: ''
    }
  }

  componentDidMount() {
    this.commonQueryList({})
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

  commonQueryList({ offset = 0, limit = 6, pageType }) {
    const { keyword1, keyword2 } = this.state
    pageType = pageType || this.state.pageType
    let keyword = keyword1
    let status_start = 20
    let status_end = 30
    if (pageType === 2) {
      keyword = keyword2
      status_start = 40
      status_end = 90
    }
    console.log('keyword, status_start, status_end, offset, limit ', keyword, status_start, status_end, offset, limit)
    this.quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit })
  }

  // 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
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
                    <span onClick={() => this.showCompleteHealthFile()}> {pageType === 1 ? '接诊' : '查看'}</span>
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
          .itemBottom span:nth-child(2) {
            border-right: 2px solid #31b0b3;
          }
        `}</style>
        <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            this.commonQueryList({offset, limit})
          }}
        />
      </div>
    )
  }
  render() {
    const { pageType, keyword1, keyword2 } = this.state
    let keyword = pageType === 1 ? keyword1 : keyword2
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => {
            this.setState({pageType: 1, keyword2: ''})
            this.commonQueryList({ pageType: 1 })
          }}>
            今日待接诊
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => {
            this.setState({pageType: 2, keyword1: ''})
            this.commonQueryList({ pageType: 2 })
          }}>
            今日已接诊
          </span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input
              type='text'
              placeholder='搜索就诊人姓名/身份证号码/手机号码'
              value={keyword}
              onChange={e => {
                if (pageType === 1) {
                  this.setState({ keyword1: e.target.value })
                } else {
                  this.setState({ keyword2: e.target.value })
                }
              }}
            />
            <button
              onClick={() => this.commonQueryList({})}
            >
              查询
            </button>
          </div>
          <div className={'boxRight'}>
            <button>快速接诊</button>
          </div>
        </div>
        {this.showTriageList()}
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
