import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import MedicalRecordScreen from './components/medicalRecord'
import PrescriptionScreen from './components/prescription'
import TreatmentScreen from './components/treatment'
import LaboratoryScreen from './components/laboratory'
import ExamineScreen from './components/examine'
import MaterialScreen from './components/material'
import OtherScreen from './components/other'
import TollScreen from './components/toll'
import { getAgeByBirthday, formatMoney } from '../../../../utils'
import { Confirm, Select } from '../../../../components'
import { triageFinish, queryDiagnosisTreatmentList, DiagnosisTreatmentPatientCreate } from '../../../../ducks'

class RecptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showConfirm: false,
      clinic_diagnosis_treatment_id: ''
    }
  }

  componentDidMount() {
    const { queryDiagnosisTreatmentList, clinic_id } = this.props
    queryDiagnosisTreatmentList({ clinic_id, status: true, offset: 0, limit: 1000 })
  }

  showDataList() {
    let { pageType } = this.state
    // console.log('pageType====', pageType)
    let map = {
      1: <MedicalRecordScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />,
      2: <PrescriptionScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />,
      3: <TreatmentScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />,
      4: <LaboratoryScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />,
      5: <ExamineScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />,
      6: <MaterialScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />,
      7: <OtherScreen changePage={(pageType) => {
        this.setState({pageType})
      }} />
    }
    return map[pageType] || null
  }

  finishTriage() {
    let { triage_personnel_id, clinic_triage_patient_id, triageFinish, DiagnosisTreatmentPatientCreate, personnel_id } = this.props
    const { clinic_diagnosis_treatment_id } = this.state
    this.refs.myAlert.confirm('确定完成接诊？', '', 'Success', async () => {
      let error = await DiagnosisTreatmentPatientCreate({ personnel_id, clinic_triage_patient_id, items: [{ clinic_diagnosis_treatment_id: clinic_diagnosis_treatment_id + '', amount: '1' }] })
      if (error) {
        return this.refs.myAlert.alert('保存失败', error)
      }
      error = await triageFinish({ clinic_triage_patient_id, recept_personnel_id: triage_personnel_id })
      if (error) {
        return this.refs.myAlert.alert('结束失败', error)
      }
      Router.push('/treatment/admission')
    })
  }

  closeConfirm() {
    this.setState({ showConfirm: false })
  }

  getTreatmentOption() {
    const { diagnosisTreatments } = this.props
    let array = []
    for (let key in diagnosisTreatments) {
      let { clinic_diagnosis_treatment_id, name, price } = diagnosisTreatments[key]
      array.push({
        value: clinic_diagnosis_treatment_id,
        label: `${formatMoney(price)} （${name}）`,
        ...diagnosisTreatments[key]
      })
    }
    return array
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  renderConfirmFinish() {
    const type = 'Success'
    const { showConfirm } = this.state
    if (!showConfirm) return null
    return (
      <div className='mask'>
        <div className='alertDiv'>
          <div style={{ width: '509px', display: 'flex', flexDirection: 'row', height: '24px', marginLeft: '32px', marginRight: '32px', marginTop: '32px' }}>
            <img src={`/static/icons/${type}.svg`} />
            <div className='title'>结束就诊</div>
          </div>
          <div style={{ width: '509px', display: 'flex', flexDirection: 'row', flex: 1, marginLeft: '32px', marginRight: '32px', marginTop: '12px', marginBottom: '24px' }}>
            <div className='content'>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '120px' }}>
                <label>
                  本次的诊疗费为：<b style={{ color: 'red' }}>*</b>
                </label>
                <div style={{ width: '200px', marginLeft: '20px' }}>
                  <Select
                    value={this.getSelectValue(this.state.clinic_diagnosis_treatment_id, this.getTreatmentOption())}
                    onChange={item => {
                      this.setState({ clinic_diagnosis_treatment_id: item.clinic_diagnosis_treatment_id })
                    }}
                    placeholder='选择'
                    height={38}
                    options={this.getTreatmentOption()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '509px', display: 'flex', flexDirection: 'row', height: '32px', marginLeft: '32px', marginRight: '32px', marginBottom: '24px' }}>
            <div style={{ flex: 1 }} />
            <div className='buttonDiv buttonDivCancel' onClick={() => this.closeConfirm()}>
              <span className='cancel'>取消</span>
            </div>
            <div className={`buttonDiv buttonDiv${type}`} onClick={() => this.finishTriage()}>
              <span className={`span${type}`}>确定</span>
            </div>
          </div>
        </div>
        <style jsx='true'>
          {`
            .mask {
              position: fixed;
              display: flex;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              top: 0;
              left: 0;
              z-index: 999;
              align-items: center;
              justify-content: center;
            }
            .alertDiv {
              margin-bottom: 150px;
              display: flex;
              flex-direction: column;
              width: 573px;
              height: auto;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
            .title {
              height: 24px;
              font-size: 16px;
              font-family: PingFangSC-Medium;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
              flex: 1;
              margin-left: 16px;
            }
            .content {
              height: auto;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: rgba(0, 0, 0, 0.65);
              line-height: 22px;
              margin-left: 38px;
            }
            .buttonDiv {
              width: 63px;
              height: 30px;
              border-radius: 4px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 8px;
            }
            .buttonDivSuccess {
              background: rgba(42, 205, 200, 1);
              border: 1px solid rgba(42, 205, 200, 1);
            }
            .buttonDivWarning {
              background: rgba(42, 205, 200, 1);
              border: 1px solid rgba(42, 205, 200, 1);
            }
            .buttonDivDanger {
              background: rgba(0, 0, 0, 0.04);
              border: 1px solid #d9d9d9;
            }
            .buttonDivCancel {
              background: rgba(255, 255, 255, 1);
              border: 1px solid #d9d9d9;
            }
            .buttonDiv span {
              height: 22px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              line-height: 22px;
            }
            .spanSuccess {
              color: rgba(255, 255, 255, 1);
            }
            .spanWarning {
              color: rgba(255, 255, 255, 1);
            }
            .spanDanger {
              color: rgba(245, 34, 45, 1);
            }
            .cancel {
              color: rgba(0, 0, 0, 0.65);
            }
          `}
        </style>
      </div>
    )
  }

  renderFeeModel() {
    const { showFeeModel } = this.state
    if (!showFeeModel) return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1215px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>费用预览</span>
            <span onClick={() => this.setState({ showFeeModel: false })}>x</span>
          </div>
          <TollScreen />
        </div>
      </div>
    )
  }

  render() {
    let { triagePatients, clinic_triage_patient_id } = this.props
    const { pageType } = this.state
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    return (
      <div className={'contentBox'} style={{ width: pageType === 2 ? '1500px' : '1098px' }}>
        <div className='filterBox' style={{ width: pageType === 2 ? '1500px' : '1098px' }}>
          <div>就诊人姓名：{triagePatient.patient_name}</div>
          <div>
            <a>性别：</a>
            <a>{triagePatient.sex === 1 ? '男' : '女'}</a>
          </div>
          <div>
            <a>年龄：</a>
            <a>{getAgeByBirthday(triagePatient.birthday)}</a>
          </div>
          <div>
            <a>门诊ID：</a>
            <a>{triagePatient.cert_no}</a>
          </div>
          <div>
            <a>手机号：</a>
            <a>{triagePatient.phone}</a>
          </div>
          <div className={'boxRight'}>
            <button onClick={() => this.setState({ showConfirm: true })}>
              <a>结束就诊</a>
            </button>
            <button onClick={() => this.setState({ showFeeModel: true })}>
              <a>费用预览</a>
            </button>
          </div>
        </div>
        {this.showDataList()}
        {this.renderConfirmFinish()}
        {this.renderFeeModel()}
        <Confirm ref='myAlert' />
        <style jsx='true'>
          {`
            .childTopBar {
              width: ${pageType === 2 ? '1500px' : '1098px'};
              margin: 31px 0 0 66px;
              background: #ffffff;
            }
            .childTopBar span {
              margin: 0;
            }
            .filterBox {
              margin: 20px 0 0 65px;
              display: flex;
              line-height: 60px;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: rgba(102, 102, 102, 1);
            }
            .filterBox > div {
              flex: 1;
              text-align: center;
            }
            .filterBox > div:last-child {
              flex: 2;
              text-align: center;
            }
            .filterBox > div:last-child > button {
              float: left;
              margin-left: 30px;
              margin-right: 0;
            }
          `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id,
    personnel_id: state.user.data.id,
    diagnosisTreatments: state.diagnosisTreatments.data,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, { triageFinish, queryDiagnosisTreatmentList, DiagnosisTreatmentPatientCreate })(RecptionScreen)
