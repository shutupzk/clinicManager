import React, { Component } from 'react'
import { connect } from 'react-redux'
import MedicalRecordScreen from './medicalRecord_screen'
import PrescriptionScreen from './prescription_screen'
import TreatmentScreen from './treatment_screen'
import { getAgeByBirthday } from '../../../../utils'

class RecptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }

  showDataList() {
    let { pageType } = this.state
    let map = {
      1: <MedicalRecordScreen />,
      2: <PrescriptionScreen />,
      3: <TreatmentScreen />,
      4: <MedicalRecordScreen />,
      5: <MedicalRecordScreen />,
      6: <MedicalRecordScreen />,
      7: <MedicalRecordScreen />
    }
    return map[pageType] || null
  }

  render() {
    let { triagePatients, clinic_triage_patient_id } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    return (
      <div className={'childTopBar'}>
        <div className='filterBox'>
          <span>
            <a>就诊人姓名：</a>
            <a>{triagePatient.patient_name}</a>
          </span>
          <span>
            <a>性别：</a>
            <a>{triagePatient.sex === 1 ? '男' : '女'}</a>
          </span>
          <span>
            <a>年龄：</a>
            <a>{getAgeByBirthday(triagePatient.birthday)}</a>
          </span>
          <span>
            <a>门诊ID：</a>
            <a>{triagePatient.cert_no}</a>
          </span>
          <span>
            <a>手机号：</a>
            <a>{triagePatient.phone}</a>
          </span>
          <span>
            <a>结束就诊</a>
          </span>
          <span>
            <a>费用预览</a>
          </span>
        </div>
        <div className={'filterBox'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 1 })
            }}
          >
            病历
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2 })
            }}
          >
            处方
          </span>
          <span
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 3 })
            }}
          >
            治疗
          </span>
          <span
            className={this.state.pageType === 4 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 4 })
            }}
          >
            检验
          </span>
          <span
            className={this.state.pageType === 5 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 5 })
            }}
          >
            检查
          </span>
          <span
            className={this.state.pageType === 6 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 6 })
            }}
          >
            材料费
          </span>
          <span
            className={this.state.pageType === 7 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 7 })
            }}
          >
            其他费用
          </span>
        </div>
        {this.showDataList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId
  }
}

export default connect(mapStateToProps, {})(RecptionScreen)
