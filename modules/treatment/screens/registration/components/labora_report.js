import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PatientGetByID, LaboratoryTriagePatientRecordList, queryMedicalRecord, LaboratoryTriageList, LaboratoryTriageDetail } from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import { PageCard } from '../../../../../components'
import moment from 'moment'

class LaboraReportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientInfo: {},
      historyDetail: {}
    }
  }

  async componentWillMount() {
    const { patient_id, PatientGetByID } = this.props
    let patient = await PatientGetByID({ patient_id })
    if (patient) {
      this.setState({ patientInfo: patient }, () => {
        this.LaboratoryTriagePatientRecordList({})
      })
    }
  }

  async submit() {}

  LaboratoryTriagePatientRecordList({ offset = 0, limit = 10 }) {
    const { patient_id, LaboratoryTriagePatientRecordList } = this.props
    LaboratoryTriagePatientRecordList({ patient_id, offset, limit })
  }

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }

  getVisitType(type) {
    const types = { '1': '出诊', '2': '复诊', '3': '术后复诊' }
    return types[type]
  }

  renderLobroaHistory() {
    const { patient_record_data, patient_record_page_info, queryMedicalRecord, LaboratoryTriageList, LaboratoryTriageDetail } = this.props
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV' style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul style={{ flex: 1 }}>
            <li>
              <div style={{ flex: 2 }}>下单时间</div>
              <div style={{ flex: 2 }}>检验诊所</div>
              <div style={{ flex: 4 }}>项目名称</div>
              <div style={{ flex: 1 }} />
            </li>
            {patient_record_data.map((item, index) => {
              const { order_time, clinic_laboratory_name, clinic_name, clinic_triage_patient_id, department_name, order_doctor_name } = item
              return (
                <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                  <div style={{ flex: 2 }}>{moment(order_time).format('YYYY-MM-DD HH:mm')}</div>
                  <div style={{ flex: 2 }}>{clinic_name}</div>
                  <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{clinic_laboratory_name}</div>
                  <div
                    style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                    onClick={async () => {
                      let record = await queryMedicalRecord(clinic_triage_patient_id)
                      let laboras = await LaboratoryTriageList({ clinic_triage_patient_id, order_status: '30' })
                      let laboraDetails = {}
                      if (laboras && laboras.length) {
                        let { clinic_laboratory_id, laboratory_patient_id } = laboras[0]
                        let detail = await LaboratoryTriageDetail({ laboratory_patient_id, clinic_laboratory_id })
                        let resultsData = detail.resultsData || []
                        let array = [...resultsData]
                        laboraDetails['0'] = array
                      }
                      this.setState({
                        showLaboraHistoryDetail: true,
                        historyDetail: { record, laboras, order_time, department_name, order_doctor_name, selIndex: 0, laboraDetails, clinic_triage_patient_id }
                      })
                    }}
                  >
                    查看报告
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          style={{ width: '94%', margin: '0 3% 0 3%' }}
          offset={patient_record_page_info.offset}
          limit={patient_record_page_info.limit}
          total={patient_record_page_info.total}
          onItemClick={({ offset, limit }) => {
            const keyword = this.state.keyword
            this.LaboratoryTriagePatientRecordList({ offset, limit, keyword })
          }}
        />
        {this.getStyle()}
      </div>
    )
  }

  getStyle() {
    return (
      <style jsx='true'>
        {`
          .detail {
            // width: 100%;
            // background: #909090;
            display: flex;
            flex-direction: column;
            margin: 20px 66px;
          }
          .detail_title {
            display: flex;
          }
          .detail_title span {
            font-size: 20px;
            cursor: default;
          }
          .detail_title span:first-child {
            flex: 1;
          }
          .detail_title span:last-child {
          }
          .filterBox {
            margin: 10px 0 0 0;
            width: 100%;
            align-items: center;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            max-height: 100px;
            overflow: hidden;
            padding: 10px 0;
            min-height: 30px;
          }
          .filterBox > div {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .filterBox > div.longTxt {
            padding: 10px;
          }
          .filterBox > div.longTxt label {
            white-space: nowrap;
            font-weight: 700;
          }
          .filterBox > div.longTxt div {
            text-align: left;
            font-size: 14px;
            max-height: 100px;
            overflow: auto;
            flex: 1;
          }
          .childTopBar span {
            margin: 10px 0 0 0;
            // flex:1;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 0;
          }
          .detailCenter {
            display: flex;
          }
          .childTopBar {
            flex: 8;
            display: flex;
          }
          .chooseModel {
            // flex:2;
            width: 200px;
            display: flex;
            align-items: center;
            margin-left: 10px;
          }
          .chooseModel > div {
            width: 100%;
          }
          .rightBtn {
            display: flex;
            align-items: center;
          }
          button {
            background: transparent;
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            height: 32px;
            cursor: pointer;
            margin-left: 10px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(0, 0, 0, 0.65);
            padding: 0 15px;
          }
          button:hover {
            background: rgba(42, 205, 200, 1);
            color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(42, 205, 200, 1);
          }
          .detailContent {
            width: 100%;
            margin: 0;
            border-radius: 0;
            padding: 10px 0 40px 0;
          }
          .detailContent ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            // padding: 10px;
          }
          .detailContent ul li {
            // width: 100%;
            display: flex;
            flex-direction: column;
            margin: 10px 20px;
            width: 90%;
          }
          .detailContent ul li textarea {
            resize: none;
            width: 100%;
            height: 100px;
          }
          .tableDIV {
            display: flex;
            width: 100%;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
          }
          .tableDIV ul {
            margin: 0 3% 0 3%;
            width: 94%;
            display: flex;
            flex-direction: column;
            border: 1px solid #e9e9e9;
            border-bottom: none;
          }
          .tableDIV ul li {
            display: flex;
            height: 50px;
            border-bottom: 1px solid #e9e9e9;
            line-height: 40px;
            text-align: center;
          }
          .tableDIV ul li:nth-child(1) {
            background: rgba(247, 247, 247, 1);
          }
          .tableDIV ul li > div {
            flex: 2;
            border-left: 1px #e9e9e9 dashed;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .tableDIV ul li > div > input {
            width: 90%;
            height: 30px;
            border-radius: 4px;
            outline-style: none;
            border: none;
          }
          .tableDIV ul li > div:nth-child(1) {
            flex: 3;
          }
          .detailBottom {
            display: flex;
            flex-direction: column;
            margin: 10px 0;
          }
          .detailBottom textarea {
            resize: none;
            width: 100%;
            height: 100px;
            background: rgb(245, 248, 249);
            border-radius: 4px;
            border: 1px solid rgb(216, 216, 216);
          }
        `}
      </style>
    )
  }

  // 就诊信息
  showVisitInfo() {
    const { patientInfo, historyDetail } = this.state
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：{patientInfo.name}</div>
          <div style={{ flex: 1 }}>性别：{patientInfo.sex === 0 ? '女' : '男'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
          <div>就诊ID：{historyDetail.clinic_triage_patient_id}</div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
        <div className={'blankBox'}>{this.renderLobroaHistory()}</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
  }

  renderPatientInfo() {
    const { patientInfo, historyDetail } = this.state
    return (
      <div className={'filterBox'}>
        <div>
          <div>就诊人姓名：{patientInfo.name}</div>
        </div>
        <div>
          <div>性别：{patientInfo.sex * 1 === 0 ? '女' : '男'}</div>
        </div>
        <div>
          <div>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
        </div>
        <div>
          <div>就诊ID：{historyDetail.clinic_triage_patient_id}</div>
        </div>
        <div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
      </div>
    )
  }

  renderHistoryDetail() {
    const { showLaboraHistoryDetail, historyDetail } = this.state
    const { LaboratoryTriageDetail } = this.props
    if (!showLaboraHistoryDetail) return null
    let { record = {}, laboras = [], selIndex, laboraDetails } = historyDetail
    const array = laboraDetails[selIndex] || []
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1200px', left: 'unset', height: 'unset', minHeight: '500px', background: '#FFFFFF' }}>
          <div className='doctorList_top'>
            <span>报告详情</span>
            <span onClick={() => this.setState({ showLaboraHistoryDetail: false })}>x</span>
          </div>
          <div className={'detail'}>
            <div className={'filterBox'} style={{ fontSize: '14px' }}>
              <div>
                <div>开单医生：{historyDetail.order_doctor_name}</div>
              </div>
              <div>
                <div>开单科室：{historyDetail.department_name}</div>
              </div>
              <div style={{ flex: 1.5 }}>
                <div>开单时间：{moment(historyDetail.order_time).format('YYYY-MM-DD HH:mm')}</div>
              </div>
              <div />
              <div />
            </div>
            {this.renderPatientInfo()}
            <div className={'filterBox'}>
              <div className={'longTxt'}>
                <label>诊断：</label>
                <div>{record.diagnosis}</div>
              </div>
              <div className={'longTxt'}>
                <label>过敏史：</label>
                <div>{record.allergic_history}</div>
              </div>
            </div>
            <div className={'detailCenter'}>
              <div className={'childTopBar'}>
                {laboras.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={index === selIndex ? 'sel' : ''}
                      onClick={async () => {
                        const { laboratory_patient_id, clinic_laboratory_id } = item
                        let detail = await LaboratoryTriageDetail({ laboratory_patient_id, clinic_laboratory_id })
                        let resultsData = detail.resultsData || []
                        let array = [...resultsData]
                        laboraDetails[index] = array
                        this.setState({ historyDetail: { ...historyDetail, selIndex: index } })
                      }}
                    >
                      {item.clinic_laboratory_name}
                    </span>
                  )
                })}
              </div>
            </div>
            <div style={{ display: 'flex', margin: '20px 0 20px 10px', fontSize: '20px' }}>
              报告时间：
              <label style={{ margin: '0 50px 0 5px', fontWeight: '400' }}>{moment(laboras[selIndex].report_time).format('YYYY-MM-DD HH:mm:ss')}</label>
              报告人：
              <label style={{ margin: '0 20px 0 5px', fontWeight: '400' }}>{laboras[selIndex].report_doctor_name}</label>
            </div>
            <div className='tableDIV' style={{ width: '100%', margin: '0 0 0 0' }}>
              <ul>
                <li>
                  <div style={{ flex: 1 }}>序号</div>
                  <div style={{ flex: 3 }}>项目</div>
                  <div style={{ flex: 2 }}>结果</div>
                  <div style={{ flex: 2 }}>异常标志</div>
                  <div style={{ flex: 2 }}>单位</div>
                  <div style={{ flex: 2 }}>性质</div>
                  <div style={{ flex: 3 }}>参考值</div>
                </li>
                {array.map((item, index) => {
                  const { reference, data_type, reference_min, reference_max } = this.getReference(item)
                  let is_normal = ''
                  if (data_type === 2) {
                    if (item.result_inspection * 1 < reference_min) {
                      is_normal = '偏低'
                    } else if (item.result_inspection * 1 > reference_max) {
                      is_normal = '偏高'
                    } else {
                      is_normal = '正常'
                    }
                  }
                  return (
                    <li key={index}>
                      <div style={{ flex: 1 }}>{index + 1}</div>
                      <div style={{ flex: 3 }}>{item.name}</div>
                      <div style={{ flex: 2 }}>{item.result_inspection}</div>
                      <div style={{ flex: 2, color: is_normal === '偏高' ? 'red' : is_normal === '偏低' ? 'blue' : '#505050' }}>{is_normal}</div>
                      <div style={{ flex: 2 }}>{item.unit_name}</div>
                      <div style={{ flex: 2 }}>{item.data_type === 1 ? '定性' : '定量'}</div>
                      <div style={{ flex: 3 }}>{reference}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={'detailBottom'}>
              <label>备注</label>
              <textarea readOnly value={laboras[selIndex].remark} />
            </div>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  getReference(item) {
    const { patientInfo } = this.state
    let reference = ''
    let references = item.references || []
    let age = getAgeByBirthday(patientInfo.birthday)
    let sex = patientInfo.sex === 0 ? '女' : '男'
    let data_type = item.data_type
    let reference_min = 0
    let reference_max = 0
    for (let item of references) {
      const { reference_sex, age_max, age_min, reference_value } = item
      if (reference_sex === sex || reference_sex === '通用') {
        if (age_max && age_min) {
          if (age_max >= age && age >= age_min) {
            if (data_type === 2) {
              reference = item.reference_min + ' ~ ' + item.reference_max
              reference_min = item.reference_min * 1
              reference_max = item.reference_max * 1
            } else {
              reference = reference_value
            }
          }
        } else {
          if (data_type === 2) {
            reference = item.reference_min + ' ~ ' + item.reference_max
            reference_min = item.reference_min * 1
            reference_max = item.reference_max * 1
          } else {
            reference = reference_value
          }
        }
      }
    }
    return { reference, reference_min, reference_max, data_type }
  }

  render() {
    return (
      <div>
        {this.showVisitInfo()}
        {this.renderHistoryDetail()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    triagePatients: state.triagePatients.data,
    clinic_id: state.user.data.clinic_id,
    patient_id: state.patients.selectId,
    patient_record_data: state.laboratoryTriages.patient_record_data,
    patient_record_page_info: state.laboratoryTriages.patient_record_page_info
  }
}
export default connect(
  mapStateToProps,
  { PatientGetByID, LaboratoryTriagePatientRecordList, queryMedicalRecord, LaboratoryTriageList, LaboratoryTriageDetail }
)(LaboraReportScreen)
