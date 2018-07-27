import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PatientGetByID, GetHealthRecord, ExaminationTriagePatientRecordList, queryMedicalRecord, ExaminationTriageList } from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import { PageCard, ImageViewer } from '../../../../../components'
import { API_SERVER } from '../../../../../config'
import moment from 'moment'

class ExamReportScreen extends Component {
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
        this.ExaminationTriagePatientRecordList({})
      })
    }
  }

  async submit() {}

  ExaminationTriagePatientRecordList({ offset = 0, limit = 10 }) {
    const { patient_id, ExaminationTriagePatientRecordList } = this.props
    ExaminationTriagePatientRecordList({ patient_id, offset, limit })
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

  renderExamHistory() {
    const { patient_record_data, patient_record_page_info, queryMedicalRecord, ExaminationTriageList } = this.props
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV' style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul style={{ flex: 1 }}>
            <li>
              <div style={{ flex: 2 }}>下单时间</div>
              <div style={{ flex: 2 }}>检查诊所</div>
              <div style={{ flex: 4 }}>项目名称</div>
              <div style={{ flex: 1 }} />
            </li>
            {patient_record_data.map((item, index) => {
              const { order_time, clinic_examination_name, clinic_name, clinic_triage_patient_id, department_name, order_doctor_name } = item
              return (
                <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                  <div style={{ flex: 2 }}>{moment(order_time).format('YYYY-MM-DD HH:mm')}</div>
                  <div style={{ flex: 2 }}>{clinic_name}</div>
                  <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{clinic_examination_name}</div>
                  <div
                    style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                    onClick={async () => {
                      let record = await queryMedicalRecord(clinic_triage_patient_id)
                      let exams = await ExaminationTriageList({ clinic_triage_patient_id, order_status: '30' })
                      this.setState({ showExamHistoryDetail: true, historyDetail: { record, exams, order_time, department_name, order_doctor_name, selIndex: 0, clinic_triage_patient_id } })
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
            this.ExaminationTriagePatientRecordList({ offset, limit, keyword })
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
        `}
      </style>
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
        <div className={'blankBox'}>{this.renderExamHistory()}</div>
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

  // 显示上传的文件
  renderFiles(picture_examination) {
    if (!picture_examination) return null
    let uploadedFiles = JSON.parse(picture_examination)
    if (uploadedFiles.length === 0) {
      return null
    } else {
      return (
        <div className={'filesBox'}>
          <ul>
            {uploadedFiles.map((item, index) => {
              let suffix = item.docName.split('.')[1].toLowerCase()
              if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
                return (
                  <li className={'imgLi'} key={index} title={item.docName} style={{ flexDirection: 'row' }}>
                    <img
                      src={API_SERVER + item.url}
                      onClick={e => {
                        this.refs.ImageViewer.show(index)
                      }}
                    />
                  </li>
                )
              } else {
                return (
                  <li key={index} title={item.docName}>
                    {item.docName}
                  </li>
                )
              }
            })}
          </ul>
          <style jsx>{`
            .filesBox {
              width: 100%;
              position: absolute;
              top: 60px;
            }
            .filesBox ul {
              display: flex;
              flex-direction: row;
              width: 100%;
            }
            .filesBox ul li {
              position: relative;
              margin: 0 0 0 5px;
              background: rgba(233, 233, 233, 0.8);
              border-radius: 4px;
              overflow: hidden;
              width: auto;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding: 3px 15px 3px 3px;
              height: 20px;
              text-align: left;
              display: block;
              cursor: default;
            }
            .filesBox ul li:first-child {
              margin: 0;
            }
            .filesBox ul li.imgLi {
              width: 100px;
              height: 100px;
            }
            .filesBox ul li.imgLi img {
              width: 100%;
              height: 100%;
            }
            .filesBox ul li span {
              position: absolute;
              display: block;
              top: 0;
              cursor: pointer;
              width: 12px;
              height: 12px;
              right: 0;
              text-align: center;
              background: rgba(100, 100, 100, 0.3);
              opacity: 0.7;
              line-height: 12px;
            }
            .filesBox ul li span:hover {
              opacity: 1;
            }
            .filesBox ul li:hover span {
              display: block;
              transition: 0.3s ease;
            }
          `}</style>
        </div>
      )
    }
  }

  renderHistoryDetail() {
    const { showExamHistoryDetail, historyDetail } = this.state
    if (!showExamHistoryDetail) return null
    let { record = {}, exams = [], selIndex } = historyDetail
    const data = exams[selIndex]
    let images = []
    if (data.picture_examination) {
      let uploadedFiles = JSON.parse(data.picture_examination)
      for (let f of uploadedFiles) {
        images.push({ src: API_SERVER + f.url })
      }
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>报告详情</span>
            <span onClick={() => this.setState({ showExamHistoryDetail: false })}>x</span>
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
                {exams.map((item, index) => {
                  return (
                    <span key={index} className={index === selIndex ? 'sel' : ''} onClick={() => this.setState({ historyDetail: { ...historyDetail, selIndex: index } })}>
                      {item.clinic_examination_name}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className={'detailContent formList'}>
              <ul>
                <li>
                  <div style={{ display: 'flex', margin: '20px 0 20px 0', fontSize: '20px' }}>
                    报告时间：
                    <label style={{ margin: '0 50px 0 5px', fontWeight: '400' }}>{moment(exams[selIndex].report_time).format('YYYY-MM-DD HH:mm:ss')}</label>
                    报告人：
                    <label style={{ margin: '0 20px 0 5px', fontWeight: '400' }}>{exams[selIndex].report_doctor_name}</label>
                  </div>
                </li>
                <li>
                  <label>检查图片</label>
                  <div style={{ height: '150px' }}>
                    {this.renderFiles(data.picture_examination)}
                    {<ImageViewer ref='ImageViewer' images={images} />}
                  </div>
                </li>
                <li>
                  <label>描述</label>
                  <textarea
                    disabled
                    value={data.conclusion_examination || ''}
                    onChange={e => {
                      exams[selIndex].conclusion_examination = e.target.value
                      this.setState({ exams })
                    }}
                  />
                </li>
                <li>
                  <label>结论</label>
                  <textarea
                    disabled
                    value={data.result_examination || ''}
                    onChange={e => {
                      exams[selIndex].result_examination = e.target.value
                      this.setState({ exams })
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
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
    clinic_id: state.user.data.clinic_id,
    patient_id: state.patients.selectId,
    patient_record_data: state.examinationTriages.patient_record_data,
    patient_record_page_info: state.examinationTriages.patient_record_page_info
  }
}
export default connect(
  mapStateToProps,
  { PatientGetByID, GetHealthRecord, ExaminationTriagePatientRecordList, queryMedicalRecord, ExaminationTriageList }
)(ExamReportScreen)
