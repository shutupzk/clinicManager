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
import { getAgeByBirthday } from '../../../../utils'
import { Confirm } from '../../../../components'
import { triageFinish } from '../../../../ducks'

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
      4: <LaboratoryScreen />,
      5: <ExamineScreen />,
      6: <MaterialScreen />,
      7: <OtherScreen />
    }
    return map[pageType] || null
  }

  finishTriage() {
    let { triage_personnel_id, clinic_triage_patient_id, triageFinish } = this.props
    this.refs.myConfirm.confirm('确定完成接诊？', '', 'Success', async () => {
      let error = await triageFinish({ clinic_triage_patient_id, recept_personnel_id: triage_personnel_id })
      if (error) {
        return this.refs.myAlert.alert('结束失败', error)
      }
      Router.push('/treatment/admission')
    })
  }

  render() {
    let { triagePatients, clinic_triage_patient_id } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    return (
      <div className={'contentBox'}>
        <div className='filterBox'>
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
            <button onClick={() => this.finishTriage()}>
              <a>结束就诊</a>
            </button>
            <button>
              <a>费用预览</a>
            </button>
          </div>
        </div>
        <div className={'childTopBar'}>
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
        <Confirm ref='myAlert' isAlert />
        <Confirm ref='myConfirm' />
        <style jsx>
          {`
            .childTopBar{
              width: 1098px;
              margin: 31px 0 0 66px;
              background: #ffffff;
            }
            .childTopBar span{
              margin:0;
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
    triage_personnel_id: state.user.data.id
  }
}

export default connect(mapStateToProps, { triageFinish })(RecptionScreen)
