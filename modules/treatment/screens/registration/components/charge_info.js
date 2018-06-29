import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TriagePatientDetail, PatientChargeList } from '../../../../../ducks'
import { getAgeByBirthday, formatMoney } from '../../../../../utils'
import { PageCard } from '../../../../../components'
import moment from 'moment'

class ChargeInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body_sign: {},
      pre_medical_record: {},
      pre_diagnosis: {},
      patientInfo: {}
    }
  }

  async componentWillMount() {
    const { clinic_triage_patient_id, TriagePatientDetail } = this.props
    let { patient } = await TriagePatientDetail({ clinic_triage_patient_id })
    if (patient) {
      this.setState({ patientInfo: patient }, () => {
        this.PatientChargeList({})
      })
    }
  }

  async submit() {}

  PatientChargeList({ offset = 0, limit = 6 }) {
    const { patientInfo } = this.state
    const { PatientChargeList } = this.props
    const { id } = patientInfo
    PatientChargeList({ patient_id: id, offset, limit })
  }

  renderChargeList() {
    const { patient_charge_data, patient_charge_page_info } = this.props
    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td>收费时间</td>
                  <td>接诊诊所</td>
                  <td>收费状态</td>
                  <td>就诊时间</td>
                  <td>应收金额</td>
                  <td>实收金额</td>
                  <td>挂账</td>
                  <td style={{ flex: 2 }}>操作</td>
                </tr>
              </thead>
              <tbody>
                {patient_charge_data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                      <td>{item.clinic_name}</td>
                      <td>{item.in_out === 'in' ? '已收费' : '已退费'}</td>
                      <td>{moment(item.visit_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                      <td>{formatMoney(item.total_money)}</td>
                      <td>{formatMoney(item.balance_money)}</td>
                      <td>{formatMoney(item.on_credit_money)}</td>
                      <td style={{ flex: 2 }} className={'operTd'}>
                        <div>
                          <div onClick={() => {}}>展开</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {}}>续写</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {}}>打印</div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <PageCard
              offset={patient_charge_page_info.offset}
              limit={patient_charge_page_info.limit}
              total={patient_charge_page_info.total}
              style={{ margin: '20px 0', width: '100%' }}
              onItemClick={({ offset, limit }) => {
                // const keyword = this.state.keyword
                this.PatientChargeList({ offset, limit })
              }}
            />
          </div>
        </div>
        <style jsx='true'>{`
          .contentCenterRight {
            width: 100%;
            height: 715px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 20px;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
          }
          .contentCenter {
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable {
            margin: 18px 32px;
            // background:#b0b0b0;
          }
          .tableContent {
          }
          .tableContent table {
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top: 1px solid #e8e8e8;
          }
          .tableContent table thead {
            background: rgba(250, 250, 250, 1);
            box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
          }
          .tableContent table tr {
            height: 40px;
            display: flex;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td {
            border-left: 1px solid #e8e8e8;
            height: 40px;
            // display: flex;
            align-items: center;
            flex: 1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd > div {
            margin: 0 auto;
            width: max-content;
          }
          .operTd > div > div {
            cursor: pointer;
            color: #2acdc8;
            float: left;
          }
          .operTd > div > div.divideLine {
            cursor: default;
            color: #e8e8e8;
            margin: 0 5px;
          }
        `}</style>
      </div>
    )
  }

  // 就诊信息
  showVisitInfo() {
    const { patientInfo } = this.state
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：{patientInfo.name}</div>
          <div style={{ flex: 1 }}>性别：{patientInfo.sex === 0 ? '女' : '男'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
          <div>就诊ID：</div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
        <div className={'blankBox'}>{this.renderChargeList()}</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return <div>{this.showVisitInfo()}</div>
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    triagePatients: state.triagePatients.data,
    clinic_id: state.user.data.clinic_id,
    clinic_triage_patient_id: state.triagePatients.selectId,
    patient_charge_data: state.charge.patient_charge_data,
    patient_charge_page_info: state.charge.patient_charge_page_info
  }
}
export default connect(
  mapStateToProps,
  { TriagePatientDetail, PatientChargeList }
)(ChargeInfoScreen)
