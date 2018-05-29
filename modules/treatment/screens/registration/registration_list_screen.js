import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
import {
  getPatientByCertNo,
  queryDepartmentList,
  addTriagePatientsList,
  triagePatientsList,
  getPatientByKeyword,
  triagePatientsSelect
} from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import moment from 'moment'
import { PageCard } from '../../../../components'

class RegistrationListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 2,
      keyword: '',
      patientInfo: {},
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      visit_date: moment()
        .add(1, 'day')
        .format('YYYYMMDD'),
      searchView: 0,
      candidatePatient: [],
      toSearch: false
    }
  }

  componentWillMount() {
    this.quetryTriagePatientsList({ status_start: 10, status_end: 100 })
  }

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }
  async queryPatients(keyword) {
    const { getPatientByKeyword } = this.props
    getPatientByKeyword({ keyword })
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

  // 显示新增列表
  showNewList() {
    const { pageType } = this.state
    if (pageType !== 2) return null
    const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input
              type='text'
              placeholder='搜索就诊人姓名/身份证号码/手机号码'
              value={this.state.keyword}
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button
              onClick={() => {
                let keyword = this.state.keyword
                this.quetryTriagePatientsList({ keyword, status_start: 10, status_end: 100 })
              }}
            >
              查询
            </button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let statusColor = patient.status === 20 ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.status === 20 ? '已分诊' : '待分诊'}</span>
                  </div>
                  <div className={'itemCenter'}>
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
                    <span>
                      <a>更新时间：</a>
                      <a>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => {
                      this.seeDetail({clinic_triage_patient_id: patient.clinic_triage_patient_id})
                    }}>查看详情 >></span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            const keyword = this.state.keyword
            this.quetryTriagePatientsList({ offset, limit, keyword, status_start: 10, status_end: 100 })
          }}
        />
        <style jsx='true'>{`
          .itemBottom span:nth-child(1) {
            flex: 1;
            border-right: none;
          }
          .formList {
            margin: 20px 66px 33px 66px;
          }
        `}</style>
      </div>
    )
  }
  // 查看详情
  seeDetail({clinic_triage_patient_id}) {
    const {triagePatientsSelect} = this.props
    triagePatientsSelect({clinic_triage_patient_id})
    Router.push('/treatment/registration/list_detail')
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => Router.push('/treatment/registration')}
          >
            + 新增登记
          </span>
          <span className={'sel'}>
            登记列表
          </span>
        </div>
        {this.showNewList()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    clinic_id: state.user.data.clinic_id,
    limit: state.triagePatients.page_info.limit
  }
}
export default connect(mapStateToProps, {
  getPatientByCertNo,
  queryDepartmentList,
  addTriagePatientsList,
  triagePatientsList,
  getPatientByKeyword,
  triagePatientsSelect
})(RegistrationListScreen)
