import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TriagePatientDetail, GetHealthRecord, queryMedicalsByPatient } from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import { PageCard } from '../../../../../components'
import moment from 'moment'

class VisitInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      body_sign: {},
      pre_medical_record: {},
      pre_diagnosis: {},
      patientInfo: {}
    }
  }

  async componentWillMount() {
    const { clinic_triage_patient_id, TriagePatientDetail, GetHealthRecord } = this.props
    let { patient } = await TriagePatientDetail({ clinic_triage_patient_id })
    let data = await GetHealthRecord({ clinic_triage_patient_id })
    const { body_sign, pre_medical_record, pre_diagnosis } = data
    if (patient) {
      this.setState({ patientInfo: patient, body_sign, pre_medical_record, pre_diagnosis }, () => {
        this.queryMedicalsByPatient({})
      })
    }
  }

  async submit() {}

  queryMedicalsByPatient({ offset = 0, limit = 6 }) {
    const { patientInfo } = this.state
    const { queryMedicalsByPatient } = this.props
    const { clinic_patient_id } = patientInfo
    queryMedicalsByPatient({ clinic_patient_id, offset, limit })
  }

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }

  getVisitType(type) {
    const types = { '1': '初诊', '2': '复诊', '3': '术后复诊' }
    return types[type]
  }

  renderMedicalHistory() {
    const { history_medicals, history_page_info } = this.props
    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td>就诊时间</td>
                  <td>就诊类型</td>
                  <td>接诊诊所</td>
                  <td>接诊科室</td>
                  <td>接诊医生</td>
                  <td>标签</td>
                  <td>主诉关键字</td>
                  <td>诊断</td>
                  <td style={{ flex: 2 }}>操作</td>
                </tr>
              </thead>
              <tbody>
                {history_medicals.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{moment(item.registion_time).format('YYYY-MM-DD hh:mm')}</td>
                      <td>{this.getVisitType(item.visit_type)}</td>
                      <td>{item.clinic_name}</td>
                      <td>{item.department_name}</td>
                      <td>{item.doctor_name}</td>
                      <td>{}</td>
                      <td>{item.chief_complaint}</td>
                      <td>{item.diagnosis}</td>
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
              offset={history_page_info.offset}
              limit={history_page_info.limit}
              total={history_page_info.total}
              style={{ margin: '20px 0', width: '100%' }}
              onItemClick={({ offset, limit }) => {
                // const keyword = this.state.keyword
                this.queryMedicalsByPatient({ offset, limit })
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
    const { patientInfo, body_sign, showMore } = this.state
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：{patientInfo.name}</div>
          <div style={{ flex: 1 }}>性别：{patientInfo.sex === 0 ? '女' : '男'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
          <div>就诊ID：</div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
        <div className={'blankBox keyPhysicalData'}>
          <span>关键体征数据</span>
          <ul>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>{body_sign.height}</div>
            </li>
            <li>
              <div className={'dataTitle'}>体重(kg)</div>
              <div className={'dataContent'}>{body_sign.weight}</div>
            </li>
            <li>
              <div className={'dataTitle'}>BMI</div>
              <div className={'dataContent'}>{body_sign.bmi}</div>
            </li>
            <li>
              <div className={'dataTitle'}>体温(C)</div>
              <div className={'dataContent'}>{body_sign.temperature}</div>
            </li>
            <li>
              <div className={'dataTitle'}>血压</div>
              <div className={'dataContent'}>
                收缩压{body_sign.systolic_blood_pressure}mmHg / 舒张压{body_sign.diastolic_blood_pressure}mmHg
              </div>
            </li>
          </ul>
          {showMore ? (
            <ul>
              <li>
                <div className={'dataTitle'}>呼吸(次/分钟)</div>
                <div className={'dataContent'}>{body_sign.breathe}</div>
              </li>
              <li>
                <div className={'dataTitle'}>脉搏(次/分钟)</div>
                <div className={'dataContent'}>{body_sign.pulse}</div>
              </li>
              <li>
                <div className={'dataTitle'}>血糖浓度(mmol/I)</div>
                <div className={'dataContent'}>{body_sign.oxygen_saturation}</div>
              </li>
              <li>
                <div className={'dataTitle'}>疼痛评分</div>
                <div className={'dataContent'}>{body_sign.pain_score}</div>
              </li>
            </ul>
          ) : null}
          <div className={'seeMore'} onClick={() => this.setState({ showMore: !showMore })}>
            {!showMore ? '查看更多' : '收起更多'}
          </div>
        </div>
        <div className={'blankBox'}>{this.renderMedicalHistory()}</div>
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
    history_medicals: state.medicalRecords.history_medicals,
    history_page_info: state.medicalRecords.history_page_info
  }
}
export default connect(
  mapStateToProps,
  { TriagePatientDetail, GetHealthRecord, queryMedicalsByPatient }
)(VisitInfoScreen)
