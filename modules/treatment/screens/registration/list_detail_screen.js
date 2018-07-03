import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword } from '../../../../ducks'
import moment from 'moment'
import BaseInfoScreen from './components/base_info'
import MemberInfoScreen from './components/member_info'
import VisitInfoScreen from './components/visit_info'
import LaboraReportScreen from './components/labora_report'
import ExamReportScreen from './components/exam_report'
import ChargeInfoScreen from './components/charge_info'

class ListDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      keyword: '',
      patientInfo: {
        department_id: '0',
        visit_type: 1,
        patient_channel_id: 1
      },
      department_id: '0',
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      visit_date: moment()
        .add(1, 'day')
        .format('YYYYMMDD'),
      searchView: 0,
      candidatePatient: []
    }
  }
  async submit() {}
  back() {
    Router.push('/treatment/registration')
  }
  componentWillMount() {}
  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  // 科室
  queryDepartment() {
    const array = []
    const { departments } = this.props
    for (let key in departments) {
      array.push(departments[key])
    }
    return array
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

  // 收费信息
  showTollInfo() {
    return <div className={'formList'}>dasdas</div>
  }
  // 积分信息
  showIntgralInfo() {
    return <div className={'formList'}>dasdas</div>
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          {/* <a style={{ float: 'left', lineHeight: '80px', marginLeft: '20px' }}>就诊人信息：</a> */}
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            基本信息
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            会员信息
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
            就诊信息
          </span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
            收费信息
          </span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
            积分信息
          </span>
          <span className={this.state.pageType === 6 ? 'sel' : ''} onClick={() => this.changeContent({ type: 6 })}>
            检验报告
          </span>
          <span className={this.state.pageType === 7 ? 'sel' : ''} onClick={() => this.changeContent({ type: 7 })}>
            检查报告
          </span>
          <span onClick={() => Router.push('/treatment/registration/list')}>返回列表</span>
        </div>
        {this.state.pageType === 1 ? <BaseInfoScreen /> : ''}
        {this.state.pageType === 2 ? <MemberInfoScreen /> : ''}
        {this.state.pageType === 3 ? <VisitInfoScreen /> : ''}
        {this.state.pageType === 4 ? <ChargeInfoScreen /> : ''}
        {this.state.pageType === 6 ? <LaboraReportScreen /> : ''}
        {this.state.pageType === 7 ? <ExamReportScreen /> : ''}
        {this.state.pageType === 5 ? this.showIntgralInfo() : ''}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    clinic_id: state.user.data.clinic_id,
    limit: state.triagePatients.page_info.limit,
    clinic_triage_patient_id: state.triagePatients.selectId
  }
}
export default connect(
  mapStateToProps,
  {
    getPatientByCertNo,
    queryDepartmentList,
    addTriagePatientsList,
    triagePatientsList,
    getPatientByKeyword
  }
)(ListDetailScreen)
