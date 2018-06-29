import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword } from '../../../../ducks'
import moment from 'moment'
import BaseInfoScreen from './components/base_info'
import MemberInfoScreen from './components/member_info'

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

  // 就诊信息
  showVisitInfo() {
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：王俊凯</div>
          <div style={{ flex: 1 }}>性别：男</div>
          <div style={{ flex: 1 }}>年龄：18</div>
          <div>就诊ID：1234567890</div>
          <div>手机号码：13333333333</div>
        </div>
        <div className={'blankBox keyPhysicalData'}>
          <span>关键体征数据</span>
          <ul>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
          </ul>
          <div className={'seeMore'}>查看更多</div>
        </div>
        <div className={'blankBox'}>sadas</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
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
            登记预约
          </span>
          <span onClick={() => Router.push('/treatment/registration/list')}>返回列表</span>
        </div>
        {this.state.pageType === 1 ? <BaseInfoScreen /> : ''}
        {this.state.pageType === 2 ? <MemberInfoScreen /> : ''}
        {this.state.pageType === 3 ? this.showVisitInfo() : ''}
        {this.state.pageType === 4 ? this.showTollInfo() : ''}
        {this.state.pageType === 5 ? this.showIntgralInfo() : ''}
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
