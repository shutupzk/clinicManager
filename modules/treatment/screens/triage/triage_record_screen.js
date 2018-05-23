import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList } from '../../../../ducks'
import { PageCard } from '../../../../components'
import { CompleteHealth, PatientCard, ChooseDoctor } from '../../components'

class TriageRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 2,
      keyword: ''
    }
  }

  componentDidMount() {
    this.commonQueryList({})
    this.queryDepartmentList({ limit: 100 })
  }

  queryDepartmentList({ keyword, limit }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit })
  }

  commonQueryList({ offset = 0, limit = 6 }) {
    const { keyword } = this.state
    let status_start = 20
    let status_end = 90
    this.quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit })
  }

  quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit }) {
    const { clinic_id, triagePatientsList } = this.props
    let params = { clinic_id, is_today: true, offset, limit, keyword }
    if (status_start && status_end) {
      params.status_start = status_start
      params.status_end = status_end
    }
    console.log('params ====', params)
    triagePatientsList(params)
  }

  // 选择医生
  showChooseDoctor(clinic_triage_patient_id) {
    this.refs.ChooseDoctor.show(clinic_triage_patient_id)
  }

  // 显示分诊列表
  showTriageList() {
    const { triagePatients, patient_page_info } = this.props
    console.log('triagePatients ======', triagePatients)
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
              return (
                <li key={index}>
                  <PatientCard
                    patient={patient}
                    buttons={
                      patient.status === 20
                        ? [
                          {
                            title: '完善健康档案',
                            onClick: () => {
                              let { clinic_triage_patient_id } = patient
                              this.showCompleteHealthFile(clinic_triage_patient_id)
                              this.setState({ clinic_triage_patient_id })
                            }
                          },
                          {
                            title: '换诊',
                            onClick: () => {
                              let { clinic_triage_patient_id } = patient
                              this.showChooseDoctor(clinic_triage_patient_id)
                            }
                          }
                        ]
                        : [
                          {
                            title: '查看详情',
                            onClick: () => {}
                          }
                        ]
                    }
                  />
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
            this.commonQueryList({ offset, limit })
          }}
        />
      </div>
    )
  }

  showCompleteHealthFile(clinic_triage_patient_id) {
    this.refs.CompleteHealth.show(clinic_triage_patient_id)
  }

  render() {
    const { triageDoctors, doctor_page_info, departments, clinic_id, triage_personnel_id } = this.props
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 1 })
              Router.push('/treatment/triage/triage')
            }}
          >
            分诊
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2 })
              this.commonQueryList({})
            }}
          >
            分诊记录
          </span>
          <span
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 3 })
              Router.push('/treatment/triage/appointment/list')
            }}
          >
            预约管理
          </span>
        </div>
        {this.showTriageList()}
        <CompleteHealth ref='CompleteHealth' />
        <ChooseDoctor
          ref='ChooseDoctor'
          triageDoctors={triageDoctors}
          departments={departments}
          doctor_page_info={doctor_page_info}
          clinic_id={clinic_id}
          triagePatient={this.props.triagePatient}
          triageDoctorsList={this.props.triageDoctorsList}
          triage_personnel_id={triage_personnel_id}
          refreshPatients={() => this.commonQueryList({})}
        />
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
    departments: state.departments.data,
    doctor_page_info: state.triageDoctors.page_info,
    selectDoctors: state.doctors.data
  }
}

export default connect(mapStateToProps, { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList })(TriageRecordScreen)
