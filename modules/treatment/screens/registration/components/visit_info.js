import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  PatientGetByID,
  GetLastBodySign,
  queryMedicalsByPatient,
  UpsertPatientHeight,
  UpsertPatientWeight,
  UpsertPatientBloodPressure,
  UpsertPatientVision,
  UpsertPatientBloodSugar,
  PatientHeightList,
  PatientWeightList,
  PatientBmiList,
  PatientBloodPressureList,
  PatientVisionList,
  PatientBloodSugarList,
  PersonalMedicalRecord,
  TriagePatientVisitDetail,
  queryMedicalRecord,
  MedicalRecordRenew,
  MedicalRecordRenewUpdate,
  MedicalRecordRenewDelete,
  selectHistoryMedicalRecord
} from '../../../../../ducks'
import { getAgeByBirthday, limitMoney } from '../../../../../utils'
import { PageCard, DatePicker, Confirm, ImageViewer, Upload } from '../../../../../components'
import moment from 'moment'
import ReactEcharts from 'echarts-for-react'
import { API_SERVER } from '../../../../../config'
import Print from 'rc-print'
import Router from 'next/router'

class VisitInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      body_sign: {},
      pre_medical_record: {},
      pre_diagnosis: {},
      patientInfo: {},
      medicalRecord: {},
      showUpdateModel: '',
      pateintHeights: [],
      pateintWeights: [],
      pateintBloodPressures: [],
      pateintVisions: [],
      patientBloodSugars: [],
      page_info: {},
      openIndex: null,
      triageDetail: {},
      uploadedFiles: []
    }
  }

  async componentWillMount() {
    const { patient_id, PatientGetByID, GetLastBodySign } = this.props
    let patient = await PatientGetByID({ patient_id })
    let body_sign = await GetLastBodySign({ patient_id })
    if (patient) {
      this.setState({ patientInfo: patient, body_sign }, () => {
        this.queryMedicalsByPatient({})
      })
    }
  }

  async submit() {}

  queryMedicalsByPatient({ offset = 0, limit = 6 }) {
    const { queryMedicalsByPatient, patient_id } = this.props
    queryMedicalsByPatient({ patient_id, offset, limit })
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

  renderFiles(picture_examination) {
    if (!picture_examination) return null
    let uploadedFiles = JSON.parse(picture_examination)
    // let viewUrl = 'https://view.officeapps.live.com/op/view.aspx?src='
    if (uploadedFiles.length === 0) {
      return null
    } else {
      return (
        <div className={'filesBox'}>
          <ul>
            {uploadedFiles.map((item, index) => {
              let fileNameArray = item.docName.split('.')
              let suffix = fileNameArray[fileNameArray.length - 1].toLowerCase()
              if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
                return (
                  <li className={'imgLi'} key={index} title={item.docName} style={{ flexDirection: 'row' }}>
                    <img
                      src={API_SERVER + item.url}
                      onClick={e => {
                        this.setState({ showImages: uploadedFiles }, () => {
                          this.refs.ImageViewer.show(index)
                        })
                      }}
                    />
                  </li>
                )
              } else {
                return (
                  <li key={index} title={item.docName}>
                    {suffix === 'pdf' ? <a
                      style={{width: '100%', height: '100%'}}
                      href={API_SERVER + item.url}
                      target={'_blank'}>{item.docName}
                    </a> : <a
                      style={{width: '100%', height: '100%'}}
                      href={API_SERVER + item.url}
                      target={'_blank'}
                      >{item.docName}</a>
                    }
                  </li>
                )
              }
            })}
          </ul>
          {this.getShowFileStyle()}
        </div>
      )
    }
  }

  wpPrinter(triagePatient, clinic_triage_patient_id) {
    let { triageDetail, body_sign = {}, patientInfo = {} } = this.state
    let { user } = this.props
    let wPrescItemArray = triageDetail.prescription_western_patient || []
    let orderSn = ''
    if (wPrescItemArray && wPrescItemArray.length > 0) {
      orderSn = wPrescItemArray[0].order_sn || ''
    }
    const borderBottomDiv = { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px', borderBottom: '2px solid #101010' }
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px', fontSize: '15px', fontWeight: '400', color: '#202020' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label style={{ fontSize: '20px', fontWeight: '400' }}>门诊</label>
            <label style={{ fontSize: '25px', fontWeight: '500' }}>处方笺</label>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInfoRow} />
            <div style={patientInfoRow} />
            <div style={patientInfoRow}>处方编号：{orderSn}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>姓名：{patientInfo.name}</div>
            <div style={patientInforRowItem}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
            <div style={patientInforRowItem}>性别：{patientInfo.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>体重：{body_sign.weight}</div>
            <div style={patientInforRowItem}>病人ID：{patientInfo.id}</div>
            <div style={patientInforRowItem}>科别：{triagePatient.department_name}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>临床（初步）诊断：{patientInfo.diagnosis}</div>
            <div style={patientInforRowItem}>开具日期：{moment(orderSn.substr(0, 8)).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>地址：{(patientInfo.province || '') + ' ' + (patientInfo.city || '') + ' ' + (patientInfo.district || '') + ' ' + (patientInfo.address || '')}</div>
            <div style={patientInforRowItem}>电话：{patientInfo.phone}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={{ ...patientInfoRow, fontWeight: '500', fontSize: '20px', marginLeft: '20px' }}>Rp</div>
          <div style={{ ...patientInfoRow, fontWeight: '500' }}>
            <div style={patientInforRowItem} />
            <div style={{ ...patientInforRowItem, flex: 7 }}>药品名</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>规格</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>总量</div>
          </div>
          {wPrescItemArray.map((item, index) => {
            return (
              <div style={patientInfoRow} key={index}>
                <div style={patientInforRowItem}>{index + 1}</div>
                <div style={{ ...patientInforRowItem, flex: 7 }}>
                  <label>{item.drug_name}</label>
                  <label>
                    用法：{item.route_administration_name} 1次{item.once_dose} {item.once_dose_unit_name} {item.frequency_name} 共{item.eff_day}天
                  </label>
                </div>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{item.specification}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>
                  共{item.amount}
                  {item.packing_unit_name}
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '0px', marginBottom: '20px' }}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>医师签名：{triagePatient.doctor_name}</div>
          </div>
          <div style={{ ...patientInfoRow, marginTop: '20px' }}>
            <div style={patientInforRowItem}>审核药师：</div>
            <div style={patientInforRowItem}>发药药师：</div>
          </div>
        </div>
      </div>
    )
  }

  cpPrinter(triagePatient, clinic_triage_patient_id, selIndex) {
    let { triageDetail, body_sign = {}, patientInfo = {} } = this.state
    let { user } = this.props
    let array = []
    let info = {}
    let cPrescItemArray = triageDetail.prescription_chinese_patient || []
    if (cPrescItemArray[selIndex] !== undefined) {
      array = cPrescItemArray[selIndex].items || []
      info = cPrescItemArray[selIndex]
    }
    let orderSn = info.order_sn || ''
    const borderBottomDiv = { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px', borderBottom: '2px solid #101010' }
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px', fontSize: '15px', fontWeight: '400', color: '#202020' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label style={{ fontSize: '20px', fontWeight: '400' }}>门诊</label>
            <label style={{ fontSize: '25px', fontWeight: '500' }}>处方笺</label>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInfoRow} />
            <div style={patientInfoRow} />
            <div style={patientInfoRow}>处方编号：{orderSn}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>姓名：{patientInfo.name}</div>
            <div style={patientInforRowItem}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
            <div style={patientInforRowItem}>性别：{patientInfo.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>体重：{body_sign.weight}</div>
            <div style={patientInforRowItem}>病人ID：{patientInfo.id}</div>
            <div style={patientInforRowItem}>科别：{triagePatient.department_name}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>临床（初步）诊断：{triageDetail.diagnosis}</div>
            <div style={patientInforRowItem}>开具日期：{moment(orderSn.substr(0, 8)).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>地址：{(patientInfo.province || '') + ' ' + (patientInfo.city || '') + ' ' + (patientInfo.district || '') + ' ' + (patientInfo.address || '')}</div>
            <div style={patientInforRowItem}>电话：{patientInfo.phone}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={{ ...patientInfoRow, fontWeight: '500', fontSize: '20px', marginLeft: '20px' }}>Rp</div>
          <div style={{ ...patientInfoRow, fontWeight: '500' }}>
            <div style={patientInforRowItem} />
            <div style={{ ...patientInforRowItem, flex: 7 }}>药品名</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>规格</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>总量</div>
          </div>
          {array.map((item, index) => {
            return (
              <div style={patientInfoRow} key={index}>
                <div style={patientInforRowItem}>{index + 1}</div>
                <div style={{ ...patientInforRowItem, flex: 7 }}>
                  <label>{item.drug_name}</label>
                  <label>
                    用法：1次 {item.once_dose} {item.once_dose_unit_name}
                  </label>
                </div>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{item.specification}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>
                  共{item.amount}
                  {item.packing_unit_name}
                </div>
              </div>
            )
          })}
          <div style={{ ...patientInfoRow, margin: '30px' }}>
            <div style={patientInforRowItem}>
              共{info.amount || ''}剂 {info.frequency_name || ''} {info.route_administration_name || ''}
            </div>
          </div>
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '0px', marginBottom: '20px' }}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>医师签名：{triagePatient.doctor_name}</div>
          </div>
          <div style={{ ...patientInfoRow, marginTop: '20px' }}>
            <div style={patientInforRowItem}>审核药师：</div>
            <div style={patientInforRowItem}>发药药师：</div>
          </div>
        </div>
      </div>
    )
  }

  mrPrinter(clinic_triage_patient_id) {
    let { user } = this.props
    let { patientInfo, medicalRecord = {} } = this.state
    let triagePatient = patientInfo
    const patientInfoRowStyle = {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50px'
    }
    const patientInfoRowDivStyle = {
      flex: 1,
      display: 'flex',
      margin: '10px 15px 10px 5px',
      minHeight: '30px',
      alignItems: 'center',
      borderBottom: '1px solid #d8d8d8',
      borderTop: '1px solid #ffffff'
    }
    const recordDetailDiv = {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '17px',
      marginTop: '10px'
    }
    const recordDetailDivLable = {
      width: '120px',
      fontWeight: '500'
    }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>门诊病历</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>姓名</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>性别</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>病人ID</lable>
            <div style={patientInfoRowDivStyle}>{clinic_triage_patient_id}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>年龄</lable>
            <div style={patientInfoRowDivStyle}>{getAgeByBirthday(triagePatient.birthday)}</div>
          </div>
          <div />
          <div />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>职业</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.profession}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>电话</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.phone}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>证件号</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.cert_no}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>临床诊断</lable>
            <div style={patientInfoRowDivStyle}>{medicalRecord.diagnosis}</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '30px 0 0 0'
          }}
        >
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>主诉</label>
            <div style={{ flex: 1 }}>{medicalRecord.chief_complaint}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>现病史</label>
            <div style={{ flex: 1 }}>{medicalRecord.history_of_present_illness}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>既往史</label>
            <div style={{ flex: 1 }}>{medicalRecord.history_of_past_illness}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>过敏史</label>
            <div style={{ flex: 1 }}>{medicalRecord.allergic_history}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>个人史</label>
            <div style={{ flex: 1 }}>{medicalRecord.personal_medical_history}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>家族史</label>
            <div style={{ flex: 1 }}>{medicalRecord.family_medical_history}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>体格检查</label>
            <div style={{ flex: 1 }}>{medicalRecord.body_examination}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>治疗意见</label>
            <div style={{ flex: 1 }}>{medicalRecord.cure_suggestion}</div>
          </div>
        </div>
        <div style={{ marginTop: '50px', width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle} />
          <div style={patientInfoRowStyle} />
          <div style={patientInfoRowStyle}>
            <lable>医师</lable>
            <div style={{ borderBottom: '1px solid #ffffff', marginLeft: '20px' }}>{user.name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>日期：</lable>
            <div style={{ borderBottom: '1px solid #ffffff' }}>{moment().format('YYYY年MM月DD日')}</div>
          </div>
        </div>
      </div>
    )
  }

  getShowFileStyle() {
    return (
      <style jsx='true'>{`
        .filesBox {
          width: 100%;
        }
        .filesBox ul {
          display: flex;
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
          // padding: 3px 15px 3px 3px;
          padding: 5px;
          height: 30px;
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
          background: #afb6ba;
          color: #fff;
          font-weight: bold;
          /* opacity: 0.7; */
          line-height: 10px;
        }
        .filesBox ul li span:hover {
          opacity: 1;
        }
        .filesBox ul li:hover span {
          display: block;
          transition: 0.3s ease;
        }
      `}</style>
    )
  }

  // 显示上传的文件
  renderUploadFiles() {
    const { uploadedFiles } = this.state
    // console.log('uploadedFiles==', uploadedFiles)
    // let viewUrl = 'https://view.officeapps.live.com/op/view.aspx?src='
    if (uploadedFiles.length === 0) {
      return null
    } else {
      return (
        <div className={'filesBox'}>
          <ul>
            {uploadedFiles.map((item, index) => {
              let fileNameArray = item.docName.split('.')
              let suffix = fileNameArray[fileNameArray.length - 1].toLowerCase()
              if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
                return (
                  <li className={'imgLi'} key={index} title={item.docName}>
                    <img
                      src={API_SERVER + item.url}
                      onClick={e => {
                        this.setState({ showImages: uploadedFiles }, () => {
                          this.refs.ImageViewer.show(index)
                        })
                      }}
                    />
                    <span
                      onClick={() => {
                        let array = uploadedFiles
                        array.splice(index, 1)
                        this.setState({ uploadedFiles: array })
                      }}
                    >
                      ×
                    </span>
                  </li>
                )
              } else {
                return (
                  <li key={index} title={item.docName}>
                    {suffix === 'pdf' ? <a
                      style={{width: '100%', height: '100%'}}
                      href={API_SERVER + item.url}
                      target={'_blank'}>{item.docName}
                    </a> : <a
                      style={{width: '100%', height: '100%'}}
                      href={API_SERVER + item.url}
                      target={'_blank'}
                      >{item.docName}</a>
                    }
                    <span
                      onClick={() => {
                        let array = uploadedFiles
                        array.splice(index, 1)
                        this.setState({ uploadedFiles: array })
                      }}
                    >
                      ×
                    </span>
                  </li>
                )
              }
            })}
          </ul>
          {this.getShowFileStyle()}
        </div>
      )
    }
  }
  // 显示进度条
  showProgress(e) {
    const { uploadedFiles } = this.state
    let array = [...uploadedFiles]
    let file = e.file
    if (e.event !== undefined) {
      let event = e.event
      this.setState({ showProgress: true, percent: event.percent })
    }
    if (file.status === 'done') {
      this.setState({ showProgress: false, percent: 0 })
      if (e.file.response.url !== undefined) {
        let url = e.file.response.url
        let item = {
          docName: file.name,
          url
        }
        array.push(item)
        this.setState({ uploadedFiles: array, files: JSON.stringify(array) })
      }
    }
  }
  fileProgress() {
    const { percent } = this.state
    return (
      <div className={'progress'}>
        <div className={'percent'} style={{ width: percent + '%' }} />
        <style jsx>{`
          .progress {
            position: absolute;
            z-index: 1;
            width: 100%;
            top: 75px;
            height: 8px;
            border: 1px solid #d8d8d8;
            border-radius: 4px;
          }
          .percent {
            height: 100%;
            background: #1ba798;
          }
        `}</style>
      </div>
    )
  }

  renderWriteRecordModel() {
    const { showUpdateModel, showProgress, uploadedFiles, clinic_triage_patient_id, chief_complaint, writeType, medical_record_id, openIndex, writeIndex } = this.state
    if (showUpdateModel !== 'write_record') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px', background: '#FFFFFF' }}>
          <div className='doctorList_top'>
            <span>续写病历</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column' }}>
            <label>
              续写病历<b style={{ color: 'red' }}> *</b>
            </label>
            <textarea
              style={{ width: '100%', height: '100px' }}
              value={chief_complaint || ''}
              onChange={e => {
                this.setState({ chief_complaint: e.target.value })
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Upload
                accept={'image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
                onChange={e => {
                  this.showProgress(e)
                }}
              />
              <label>文件大小不能超过20M，支持图片、word、pdf文件</label>
              {showProgress ? this.fileProgress() : ''}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', minHeight: '120px' }}>{this.renderUploadFiles()}</div>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { MedicalRecordRenew, operation_id, TriagePatientVisitDetail, MedicalRecordRenewUpdate } = this.props
                let error
                if (writeType === 'create') {
                  error = await MedicalRecordRenew({ clinic_triage_patient_id, chief_complaint, files: JSON.stringify(uploadedFiles), operation_id })
                } else {
                  error = await MedicalRecordRenewUpdate({ medical_record_id, chief_complaint, files: JSON.stringify(uploadedFiles), operation_id })
                }
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  this.refs.myAlert.alert('保存成功', error, async () => {
                    if (openIndex === writeIndex) {
                      const triageDetail = await TriagePatientVisitDetail({ clinic_triage_patient_id })
                      this.setState({ showUpdateModel: '', triageDetail: triageDetail || {} })
                    } else {
                      this.setState({ showUpdateModel: '' })
                    }
                  })
                }
              }}
            >
              保存
            </button>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderMedicalHistory() {
    const { history_medicals, history_page_info, queryMedicalRecord } = this.props
    let { openIndex, triageDetail = {}, pre_medical_record = {} } = this.state
    let wPrescItemArray = triageDetail.prescription_western_patient || []
    let cPrescItemArray = triageDetail.prescription_chinese_patient || []
    let medical_records = triageDetail.medical_records || []
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }

    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td style={{ flex: 2 }}>就诊时间</td>
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
            </table>

            {history_medicals.map((item, index) => {
              let clinic_triage_patient_id = item.clinic_triage_patient_id
              return (
                <div style={{ width: '100%' }} key={index}>
                  <table>
                    <tbody>
                      <tr key={index}>
                        <td style={{ flex: 2 }}>{moment(item.registion_time).format('YYYY-MM-DD HH:mm')}</td>
                        <td>{this.getVisitType(item.visit_type)}</td>
                        <td>{item.clinic_name}</td>
                        <td>{item.department_name}</td>
                        <td>{item.doctor_name}</td>
                        <td>{}</td>
                        <td title={item.chief_complaint}>{item.chief_complaint}</td>
                        <td title={item.diagnosis}>{item.diagnosis}</td>
                        <td style={{ flex: 2 }} className={'operTd'}>
                          <div>
                            <div
                              onClick={async () => {
                                const { PersonalMedicalRecord, TriagePatientVisitDetail, patient_id } = this.props
                                if (openIndex === index) {
                                  this.setState({ openIndex: openIndex === index ? null : index, triageDetail: {} })
                                } else {
                                  let pre_medical_record = await PersonalMedicalRecord({ patient_id })
                                  const triageDetail = await TriagePatientVisitDetail({ clinic_triage_patient_id })
                                  this.setState({ openIndex: openIndex === index ? null : index, triageDetail: triageDetail || {}, pre_medical_record })
                                }
                              }}
                            >
                              {openIndex === index ? '收起' : '展开'}
                            </div>
                            <div className={'divideLine'}>|</div>
                            <div
                              onClick={() => {
                                this.setState({ showUpdateModel: 'write_record', clinic_triage_patient_id, uploadedFiles: [], writeType: 'create', chief_complaint: '', writeIndex: index })
                              }}
                            >
                              续写
                            </div>
                            <div className={'divideLine'}>|</div>
                            <div
                              onClick={async () => {
                                let record = await queryMedicalRecord(clinic_triage_patient_id)
                                this.setState({ medicalRecord: record }, () => {
                                  this.refs.printer.onPrint()
                                })
                              }}
                            >
                              打印病历
                            </div>
                            <Print ref='printer' lazyRender isIframe>
                              {this.mrPrinter(clinic_triage_patient_id)}
                            </Print>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {openIndex === index ? (
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', right: '20px', top: '20px', display: 'flex', zIndex: 100 }}>
                        <button className='showButton' onClick={() => {
                          this.props.selectHistoryMedicalRecord(item.id)
                          Router.push('/treatment/registration/report')
                        }}>查看报告</button>
                      </div>
                      <div className='detailDiv'>
                        <div>
                          <label>发病日期：</label>
                          <div>{triageDetail.morbidity_date}</div>
                        </div>
                        <div>
                          <label>主诉：</label>
                          <div>{triageDetail.chief_complaint}</div>
                        </div>
                        <div>
                          <label>现病史：</label>
                          <div>{triageDetail.history_of_present_illness}</div>
                        </div>
                        <div>
                          <label>既往史：</label>
                          <div>{triageDetail.history_of_past_illness}</div>
                        </div>
                        <div>
                          <label>过敏史：</label>
                          <div>{triageDetail.allergic_history}</div>
                        </div>
                        <div>
                          <label>个人史：</label>
                          <div>{pre_medical_record.personal_medical_history}</div>
                        </div>
                        <div>
                          <label>家族史：</label>
                          <div>{triageDetail.family_medical_history}</div>
                        </div>
                        <div>
                          <label>疫苗接种史：</label>
                          <div>{triageDetail.immunizations}</div>
                        </div>
                        <div>
                          <label>体格检查：</label>
                          <div>{triageDetail.body_examination}</div>
                        </div>
                        <div>
                          <label>治疗建议：</label>
                          <div>{triageDetail.cure_suggestion}</div>
                        </div>
                        <div>
                          <label>诊断：</label>
                          <div>{triageDetail.diagnosis}</div>
                        </div>
                        <div>
                          <label>备注：</label>
                          <div>{triageDetail.remark}</div>
                        </div>
                        <div>
                          <label>检验项目：</label>
                          <div>{triageDetail.clinic_laboratory_name}</div>
                        </div>
                        <div>
                          <label>检查项目：</label>
                          <div>{triageDetail.clinic_examination_name}</div>
                        </div>
                        <div>
                          <label>治疗项目：</label>
                          <div>{triageDetail.clinic_treatment_name}</div>
                        </div>
                        {wPrescItemArray.length ? (
                          <div style={{ flexDirection: 'column', marginTop: '20px' }}>
                            <label style={{ display: 'flex', fontSize: '14', fontWeight: '500' }}>
                              西/成药处方：<button className='showButton' onClick={() => this.refs.wprinter.onPrint()}>
                                打印处方
                              </button>
                              <Print ref='wprinter' lazyRender isIframe>
                                {this.wpPrinter(item, clinic_triage_patient_id)}
                              </Print>
                            </label>
                            <div style={{ marginTop: '5px' }}>
                              {wPrescItemArray.map((item, index) => {
                                return (
                                  <div style={patientInfoRow} key={index}>
                                    <div style={patientInforRowItem}>{index + 1}</div>
                                    <div style={{ ...patientInforRowItem, flex: 7 }}>
                                      <label>{item.drug_name}</label>
                                      <label>
                                        用法：{item.route_administration_name} 1次{item.once_dose} {item.once_dose_unit_name} {item.frequency_name} 共{item.eff_day}天
                                      </label>
                                    </div>
                                    <div style={{ ...patientInforRowItem, flex: 3 }}>{item.specification}</div>
                                    <div style={{ ...patientInforRowItem, flex: 2 }}>
                                      共{item.amount}
                                      {item.packing_unit_name}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        ) : null}

                        {cPrescItemArray.map((info, index) => {
                          let array = info.items || []
                          return (
                            <div style={{ flexDirection: 'column', marginTop: '20px' }} key={index}>
                              <label style={{ display: 'flex', fontSize: '14', fontWeight: '500' }}>
                                {' '}
                                中 药处方 {index + 1}：<button className='showButton' onClick={() => this.refs['cprinter' + index].onPrint()}>
                                  打印处方
                                </button>
                                <Print ref={'cprinter' + index} lazyRender isIframe>
                                  {this.cpPrinter(item, clinic_triage_patient_id, index)}
                                </Print>
                              </label>
                              <div>
                                {array.map((item, index) => {
                                  return (
                                    <div style={patientInfoRow} key={index}>
                                      <div style={patientInforRowItem}>{index + 1}</div>
                                      <div style={{ ...patientInforRowItem, flex: 7 }}>
                                        <label>{item.drug_name}</label>
                                        <label>
                                          用法：1次 {item.once_dose} {item.once_dose_unit_name}
                                        </label>
                                      </div>
                                      <div style={{ ...patientInforRowItem, flex: 3 }}>{item.specification}</div>
                                      <div style={{ ...patientInforRowItem, flex: 2 }}>
                                        共{item.amount}
                                        {item.packing_unit_name}
                                      </div>
                                    </div>
                                  )
                                })}
                                <div style={{ ...patientInfoRow, margin: '30px' }}>
                                  <div style={patientInforRowItem}>
                                    共{info.amount || ''}剂 {info.frequency_name || ''} {info.route_administration_name || ''}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                        <div>
                          <label>文件：</label>
                          <div>{this.renderFiles(triageDetail.files)}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderLeft: '1px solid #e8e8e8', borderRight: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
                        {medical_records.map((item, aindex) => {
                          return (
                            <div key={aindex}>
                              <div style={{ display: 'flex', height: '40px', justifyContent: 'center', borderTop: aindex === 0 ? null : '1px solid #e8e8e8' }} key={aindex}>
                                <div style={{ flex: 1, margin: '10px', display: 'flex' }}>
                                  <label style={{ display: 'flex', fontSize: '14', fontWeight: '500' }}>续写病历：</label>
                                  <label>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</label> <label>{item.operation_name}</label>
                                </div>
                                <div style={{ display: 'flex', margin: '10px' }}>
                                  <div
                                    className='showButton'
                                    onClick={() => {
                                      let uploadedFiles = item.files ? JSON.parse(item.files) : []
                                      this.setState({ uploadedFiles, writeType: 'update', medical_record_id: item.id, showUpdateModel: 'write_record', chief_complaint: item.chief_complaint, clinic_triage_patient_id, writeIndex: index })
                                    }}
                                  >
                                    修改
                                  </div>
                                  <div
                                    className='showButton'
                                    style={{ background: 'red' }}
                                    onClick={async () => {
                                      this.refs.myAlert.confirm('提示', '确认删除？', 'Warning', async () => {
                                        const { TriagePatientVisitDetail, MedicalRecordRenewDelete } = this.props
                                        let error = await MedicalRecordRenewDelete({ medical_record_id: item.id })
                                        if (error) {
                                          return this.refs.myAlert.alert('删除失败', error, null, 'Danger')
                                        } else {
                                          const triageDetail = await TriagePatientVisitDetail({ clinic_triage_patient_id })
                                          this.setState({ triageDetail: triageDetail || {} })
                                        }
                                      })
                                    }}
                                  >
                                    删除
                                  </div>
                                </div>
                              </div>
                              <div style={{ borderTop: '1px solid #e8e8e8', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ margin: '20px' }}>{item.chief_complaint}</div>
                                <div style={{ margin: '0 20px 20px 20px' }}>{this.renderFiles(item.files)}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}

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
            min-height: 400px;
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
          }
          .tableContent table thead {
            background: rgba(250, 250, 250, 1);
            border-top: 1px solid #e8e8e8;
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
          .detailDiv {
            display: flex;
            flex-direction: column;
            position: relative;
            border-bottom: 1px solid #e8e8e8;
            border-left: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            padding: 20px 0 15px 0;
          }
          .detailDiv > div {
            margin: 0 20px 0 20px;
            margin-bottom: 5px;
            // width: 100%;
            width: auto;
            display: flex;
          }
          .detailDiv > div > div {
            margin-left: 5px;
            flex: 1;
          }
          .showButton {
            border-width: 0px;
            background: inherit;
            background-color: rgba(42, 205, 200, 1);
            border: none;
            border-radius: 5px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            font-family: 'PingFangSC-Regular', 'PingFang SC';
            font-weight: 100;
            font-style: normal;
            color: #ffffff;
            display: table;
            padding: 2px 5px 2px 5px;
            text-align: center;
            margin: 0 0 0 10px;
            font-size: 12px;
            line-height: 20px;
          }
        `}</style>
      </div>
    )
  }

  renderHeightModel() {
    const { showUpdateModel, pateintHeights, page_info } = this.state
    if (showUpdateModel !== 'height') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>身高记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 3 }}>记录时间</div>
                <div style={{ flex: 4 }}>身高（m）</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintHeights: [...pateintHeights, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintHeights.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintHeights[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintHeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 4 }}>
                      <input
                        type='text'
                        value={item.height || ''}
                        onChange={e => {
                          let height = limitMoney(e.target.value)
                          if (height) {
                            pateintHeights[index].height = height + ''
                            this.setState({ pateintHeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintHeights[index].upsert_type = 'delete'
                          this.setState({ pateintHeights })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientHeight } = this.props
                let error = await UpsertPatientHeight({ patient_id, items: JSON.stringify(pateintHeights) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderWeightModel() {
    const { showUpdateModel, pateintWeights, page_info } = this.state
    if (showUpdateModel !== 'weight') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>体重记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 3 }}>记录时间</div>
                <div style={{ flex: 4 }}>体重（kg）</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintWeights: [...pateintWeights, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintWeights.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintWeights[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintWeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 4 }}>
                      <input
                        type='text'
                        value={item.weight || ''}
                        onChange={e => {
                          let weight = limitMoney(e.target.value)
                          if (weight) {
                            pateintWeights[index].weight = weight + ''
                            this.setState({ pateintWeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintWeights[index].upsert_type = 'delete'
                          this.setState({ pateintWeights })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientWeight } = this.props
                let error = await UpsertPatientWeight({ patient_id, items: JSON.stringify(pateintWeights) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodPressureModel() {
    const { showUpdateModel, pateintBloodPressures, page_info } = this.state
    if (showUpdateModel !== 'blood_pressure') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血压记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 2 }}>记录时间</div>
                <div style={{ flex: 2 }}>收缩压(mmHg)）</div>
                <div style={{ flex: 2 }}>舒张压(mmHg)</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintBloodPressures: [...pateintBloodPressures, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintBloodPressures.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 2 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintBloodPressures[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintBloodPressures })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.systolic_blood_pressure || ''}
                        onChange={e => {
                          let systolic_blood_pressure = limitMoney(e.target.value)
                          if (systolic_blood_pressure) {
                            pateintBloodPressures[index].systolic_blood_pressure = systolic_blood_pressure + ''
                            this.setState({ pateintBloodPressures })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.diastolic_blood_pressure || ''}
                        onChange={e => {
                          let diastolic_blood_pressure = limitMoney(e.target.value)
                          if (diastolic_blood_pressure) {
                            pateintBloodPressures[index].diastolic_blood_pressure = diastolic_blood_pressure + ''
                            this.setState({ pateintBloodPressures })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintBloodPressures[index].upsert_type = 'delete'
                          this.setState({ pateintBloodPressures })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientBloodPressure } = this.props
                let error = await UpsertPatientBloodPressure({ patient_id, items: JSON.stringify(pateintBloodPressures) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderVisionModel() {
    const { showUpdateModel, pateintVisions, page_info } = this.state
    if (showUpdateModel !== 'vision') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>视力记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 2 }}>记录时间</div>
                <div style={{ flex: 2 }}>左眼</div>
                <div style={{ flex: 2 }}>右眼</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintVisions: [...pateintVisions, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintVisions.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 2 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintVisions[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintVisions })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.left_vision || ''}
                        onChange={e => {
                          let left_vision = limitMoney(e.target.value)
                          if (left_vision) {
                            pateintVisions[index].left_vision = left_vision + ''
                            this.setState({ pateintVisions })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.right_vision || ''}
                        onChange={e => {
                          let right_vision = limitMoney(e.target.value)
                          if (right_vision) {
                            pateintVisions[index].right_vision = right_vision + ''
                            this.setState({ pateintVisions })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintVisions[index].upsert_type = 'delete'
                          this.setState({ pateintVisions })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientVision } = this.props
                let error = await UpsertPatientVision({ patient_id, items: JSON.stringify(pateintVisions) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodSugarModel() {
    const { showUpdateModel, patientBloodSugars, page_info } = this.state
    if (showUpdateModel !== 'blood_sugar') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1300px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血糖记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 3 }}>记录时间</div>
                <div style={{ flex: 2 }}>空腹</div>
                <div style={{ flex: 2 }}>凌晨</div>
                <div style={{ flex: 2 }}>早餐前</div>
                <div style={{ flex: 2 }}>早餐后</div>
                <div style={{ flex: 2 }}>午餐前</div>
                <div style={{ flex: 2 }}>午餐后</div>
                <div style={{ flex: 2 }}>晚餐前</div>
                <div style={{ flex: 2 }}>晚餐后</div>
                <div style={{ flex: 2 }}>睡前</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ patientBloodSugars: [...patientBloodSugars, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {patientBloodSugars.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            patientBloodSugars[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_empty_stomach || ''}
                        onChange={e => {
                          let concentration_empty_stomach = limitMoney(e.target.value)
                          if (concentration_empty_stomach) {
                            patientBloodSugars[index].concentration_empty_stomach = concentration_empty_stomach + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_before_dawn || ''}
                        onChange={e => {
                          let concentration_before_dawn = limitMoney(e.target.value)
                          if (concentration_before_dawn) {
                            patientBloodSugars[index].concentration_before_dawn = concentration_before_dawn + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_before_breakfast || ''}
                        onChange={e => {
                          let concentration_before_breakfast = limitMoney(e.target.value)
                          if (concentration_before_breakfast) {
                            patientBloodSugars[index].concentration_before_breakfast = concentration_before_breakfast + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>

                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_after_breakfast || ''}
                        onChange={e => {
                          let concentration_after_breakfast = limitMoney(e.target.value)
                          if (concentration_after_breakfast) {
                            patientBloodSugars[index].concentration_after_breakfast = concentration_after_breakfast + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>

                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_before_lunch || ''}
                        onChange={e => {
                          let concentration_before_lunch = limitMoney(e.target.value)
                          if (concentration_before_lunch) {
                            patientBloodSugars[index].concentration_before_lunch = concentration_before_lunch + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_after_lunch || ''}
                        onChange={e => {
                          let concentration_after_lunch = limitMoney(e.target.value)
                          if (concentration_after_lunch) {
                            patientBloodSugars[index].concentration_after_lunch = concentration_after_lunch + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_before_dinner || ''}
                        onChange={e => {
                          let concentration_before_dinner = limitMoney(e.target.value)
                          if (concentration_before_dinner) {
                            patientBloodSugars[index].concentration_before_dinner = concentration_before_dinner + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_after_dinner || ''}
                        onChange={e => {
                          let concentration_after_dinner = limitMoney(e.target.value)
                          if (concentration_after_dinner) {
                            patientBloodSugars[index].concentration_after_dinner = concentration_after_dinner + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.concentration_before_retiring || ''}
                        onChange={e => {
                          let concentration_before_retiring = limitMoney(e.target.value)
                          if (concentration_before_retiring) {
                            patientBloodSugars[index].concentration_before_retiring = concentration_before_retiring + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          patientBloodSugars[index].upsert_type = 'delete'
                          this.setState({ patientBloodSugars })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientBloodSugar } = this.props
                let error = await UpsertPatientBloodSugar({ patient_id, items: JSON.stringify(patientBloodSugars) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderHeightEchart() {
    const { showUpdateModel, pateintHeights } = this.state
    if (showUpdateModel !== 'height_echart') return
    let xdata = []
    let ydata = []
    for (let item of pateintHeights) {
      xdata.push(item.record_time)
      ydata.push(item.height * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '身高曲线图',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>身高曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderWeightEchart() {
    const { showUpdateModel, pateintWeights } = this.state
    if (showUpdateModel !== 'weight_echart') return
    let xdata = []
    let ydata = []
    for (let item of pateintWeights) {
      xdata.push(item.record_time)
      ydata.push(item.weight * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '体重曲线图',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>体重曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBMIEchart() {
    const { showUpdateModel, patientBmis } = this.state
    if (showUpdateModel !== 'bmi_echart') return
    let xdata = []
    let ydata = []
    for (let item of patientBmis) {
      xdata.push(item.record_time)
      ydata.push(item.bmi * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: 'BMI曲线图',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>BMI曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodPressureEchart() {
    const { showUpdateModel, pateintBloodPressures } = this.state
    if (showUpdateModel !== 'blood_pressure_echart') return
    let xdata = []
    let ssdata = []
    let szdata = []
    for (let item of pateintBloodPressures) {
      xdata.push(item.record_time)
      ssdata.push(item.systolic_blood_pressure * 1)
      szdata.push(item.diastolic_blood_pressure * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      legend: {
        data: ['收缩压', '舒张压']
      },
      yAxis: {},
      series: [
        {
          name: '收缩压',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ssdata
          // smooth: true,
        },
        {
          name: '舒张压',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: szdata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血压曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderVisionEchart() {
    const { showUpdateModel, pateintVisions } = this.state
    if (showUpdateModel !== 'vision_echart') return
    let xdata = []
    let ssdata = []
    let szdata = []
    for (let item of pateintVisions) {
      xdata.push(item.record_time)
      ssdata.push(item.left_vision * 1)
      szdata.push(item.right_vision * 1)
    }
    let loption = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '左眼',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ssdata
          // smooth: true,
        }
      ]
    }
    let roption = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '右眼',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: szdata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>视力曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>左眼</div>
            <ReactEcharts option={loption} style={{ height: '400px', width: '100%' }} />
            <div style={{ textAlign: 'center' }}>右眼</div>
            <ReactEcharts option={roption} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodSugarEchart() {
    const { showUpdateModel, patientBloodSugars } = this.state
    if (showUpdateModel !== 'blood_sugar_echart') return
    let xdata = []
    let data1 = []
    let data2 = []
    let data3 = []
    let data4 = []
    let data5 = []
    let data6 = []
    let data7 = []
    let data8 = []
    let data9 = []
    for (let item of patientBloodSugars) {
      xdata.push(item.record_time)
      data1.push(item.concentration_empty_stomach * 1)
      data2.push(item.concentration_before_dawn * 1)
      data3.push(item.concentration_before_breakfast * 1)
      data4.push(item.concentration_after_breakfast * 1)
      data5.push(item.concentration_before_lunch * 1)
      data6.push(item.concentration_after_lunch * 1)
      data7.push(item.concentration_before_dinner * 1)
      data8.push(item.concentration_after_dinner * 1)
      data9.push(item.concentration_before_retiring * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      legend: {
        data: ['空腹', '凌晨', '早餐前', '早餐后', '午餐前', '午餐后', '晚餐前', '晚餐后', '睡前']
      },
      yAxis: {},
      series: [
        {
          name: '空腹',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data1
          // smooth: true,
        },
        {
          name: '凌晨',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data2
          // smooth: true,
        },
        {
          name: '早餐前',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data3
          // smooth: true,
        },
        {
          name: '早餐后',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data4
          // smooth: true,
        },
        {
          name: '午餐前',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data5
          // smooth: true,
        },
        {
          name: '午餐后',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data6
          // smooth: true,
        },
        {
          name: '晚餐前',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data7
          // smooth: true,
        },
        {
          name: '晚餐后',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data8
          // smooth: true,
        },
        {
          name: '睡前',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: data9
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血压曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  // 就诊信息
  showVisitInfo() {
    const { patientInfo, body_sign } = this.state
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：{patientInfo.name}</div>
          <div style={{ flex: 1 }}>性别：{patientInfo.sex === 0 ? '女' : '男'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
          <div>就诊ID：{patientInfo.id}</div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
        <div className={'blankBox keyPhysicalData'}>
          <span>关键体征数据</span>
          <ul>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  身高(CM)<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientHeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientHeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, height } of docs) {
                        array.push({ record_time, height: height + '', upsert_type: 'update' })
                      }
                      this.setState({
                        showUpdateModel: 'height',
                        pateintHeights: array,
                        page_info
                      })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientHeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientHeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, height } of docs) {
                        array.push({ record_time, height: height + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'height_echart', pateintHeights: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.height}</div>
            </li>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  体重(kg))<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientWeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientWeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, weight } of docs) {
                        array.push({ record_time, weight: weight + '', upsert_type: 'update' })
                      }
                      this.setState({ showUpdateModel: 'weight', pateintWeights: array, page_info })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientWeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientWeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, weight } of docs) {
                        array.push({ record_time, weight: weight + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'weight_echart', pateintWeights: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.weight}</div>
            </li>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  BMI<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBmiList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBmiList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, bmi } of docs) {
                        array.push({ record_time, bmi: bmi + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'bmi_echart', patientBmis: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.bmi}</div>
            </li>
            <li>
              <div className={'dataTitle'}>体温(C)</div>
              <div className={'dataContent'}>{body_sign.temperature}</div>
            </li>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>呼吸(次/分钟)</div>
              </div>
              <div className={'dataContent'}>{body_sign.breathe}</div>
            </li>
            <li>
              <div className={'dataTitle'}>脉搏(次/分钟)</div>
              <div className={'dataContent'}>{body_sign.pulse}</div>
            </li>
            <li style={{ width: '50%' }}>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  血压<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBloodPressureList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBloodPressureList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, systolic_blood_pressure, diastolic_blood_pressure } of docs) {
                        array.push({ record_time, systolic_blood_pressure: systolic_blood_pressure + '', diastolic_blood_pressure: diastolic_blood_pressure + '', upsert_type: 'update' })
                      }
                      this.setState({ showUpdateModel: 'blood_pressure', pateintBloodPressures: array, page_info })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBloodPressureList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBloodPressureList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, systolic_blood_pressure, diastolic_blood_pressure } of docs) {
                        array.push({ record_time, systolic_blood_pressure: systolic_blood_pressure + '', diastolic_blood_pressure: diastolic_blood_pressure + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'blood_pressure_echart', pateintBloodPressures: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>
                收缩压{body_sign.systolic_blood_pressure}mmHg / 舒张压{body_sign.diastolic_blood_pressure}mmHg
              </div>
            </li>
            <li>
              <div className={'dataTitle'}>氧饱和度(%)</div>
              <div className={'dataContent'}>{body_sign.oxygen_saturation}</div>
            </li>
            <li style={{ width: '50%' }}>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  视力<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientVisionList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientVisionList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, left_vision, right_vision } of docs) {
                        array.push({ record_time, left_vision: left_vision + '', right_vision: right_vision + '', upsert_type: 'update' })
                      }
                      this.setState({ showUpdateModel: 'vision', pateintVisions: array, page_info })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientVisionList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientVisionList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, left_vision, right_vision } of docs) {
                        array.push({ record_time, left_vision: left_vision + '', right_vision: right_vision + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'vision_echart', pateintVisions: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>
                左眼 {body_sign.left_vision} 右眼{body_sign.right_vision}
              </div>
            </li>
            <li style={{ width: '100%' }}>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  血糖浓度(mmol/I)<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBloodSugarList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBloodSugarList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let {
                        record_time,
                        concentration_before_retiring,
                        concentration_after_dinner,
                        concentration_before_dinner,
                        concentration_after_lunch,
                        concentration_before_lunch,
                        concentration_after_breakfast,
                        concentration_before_breakfast,
                        concentration_before_dawn,
                        concentration_empty_stomach
                      } of docs) {
                        array.push({
                          record_time,
                          concentration_before_retiring: concentration_before_retiring + '',
                          concentration_after_dinner: concentration_after_dinner + '',
                          concentration_before_dinner: concentration_before_dinner + '',
                          concentration_after_lunch: concentration_after_lunch + '',
                          concentration_before_lunch: concentration_before_lunch + '',
                          concentration_after_breakfast: concentration_after_breakfast + '',
                          concentration_before_breakfast: concentration_before_breakfast + '',
                          concentration_before_dawn: concentration_before_dawn + '',
                          concentration_empty_stomach: concentration_empty_stomach + '',
                          upsert_type: 'update'
                        })
                      }
                      this.setState({ showUpdateModel: 'blood_sugar', patientBloodSugars: array, page_info })
                    }}
                  >
                    查看详情
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBloodSugarList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBloodSugarList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let {
                        record_time,
                        concentration_before_retiring,
                        concentration_after_dinner,
                        concentration_before_dinner,
                        concentration_after_lunch,
                        concentration_before_lunch,
                        concentration_after_breakfast,
                        concentration_before_breakfast,
                        concentration_before_dawn,
                        concentration_empty_stomach
                      } of docs) {
                        array.push({
                          record_time,
                          concentration_before_retiring: concentration_before_retiring + '',
                          concentration_after_dinner: concentration_after_dinner + '',
                          concentration_before_dinner: concentration_before_dinner + '',
                          concentration_after_lunch: concentration_after_lunch + '',
                          concentration_before_lunch: concentration_before_lunch + '',
                          concentration_after_breakfast: concentration_after_breakfast + '',
                          concentration_before_breakfast: concentration_before_breakfast + '',
                          concentration_before_dawn: concentration_before_dawn + '',
                          concentration_empty_stomach: concentration_empty_stomach + '',
                          upsert_type: 'update'
                        })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'blood_sugar_echart', patientBloodSugars: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.blood_sugar_concentration}</div>
            </li>
          </ul>
        </div>
        <div className={'blankBox'}>{this.renderMedicalHistory()}</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
          .showDiv {
            display: flex;
            align-items: center;
          }
          .showButton {
            border-width: 0px;
            background: inherit;
            background-color: rgba(42, 205, 200, 1);
            border: none;
            border-radius: 5px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            font-family: 'PingFangSC-Regular', 'PingFang SC';
            font-weight: 100;
            font-style: normal;
            color: #ffffff;
            display: table;
            padding: 2px 5px 2px 5px;
            text-align: center;
            margin: 0 0 0 10px;
            font-size: 12px;
            line-height: 20px;
          }
        `}</style>
      </div>
    )
  }

  render() {
    let { showImages = [] } = this.state
    let images = []
    for (let f of showImages) {
      let fileNameArray = f.docName.split('.')
      let suffix = fileNameArray[fileNameArray.length - 1]
      if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
        images.push({ src: API_SERVER + f.url })
      }
    }
    return (
      <div>
        {this.showVisitInfo()}
        {this.renderHeightModel()}
        {this.renderWeightModel()}
        {this.renderBloodPressureModel()}
        {this.renderVisionModel()}
        {this.renderBloodSugarModel()}
        {this.renderHeightEchart()}
        {this.renderWeightEchart()}
        {this.renderBMIEchart()}
        {this.renderBloodPressureEchart()}
        {this.renderVisionEchart()}
        {this.renderBloodSugarEchart()}
        {this.renderWriteRecordModel()}
        <Confirm ref='myAlert' />
        <ImageViewer ref='ImageViewer' images={images} />
      </div>
    )
  }
  getStyle() {
    return (
      <style jsx='true'>
        {`
          .ant-input {
            height: 40px;
          }
          .tableDIV {
            display: flex;
            width: 987px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin: 0 65px 65px 47px;
          }
          .tableDIV ul {
            width: 100%;
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
          .bottomCenter {
            width: 160px;
            margin: 30px auto;
          }
          .bottomCenter button.cancel {
            width: 70px;
            height: 26px;
            background: rgba(167, 167, 167, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: left;
            cursor: pointer;
          }
          .bottomCenter button.save {
            width: 70px;
            height: 26px;
            background: rgba(49, 176, 179, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: right;
            cursor: pointer;
          }
          textarea {
            width: 479px;
            height: 60px;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            resize: none;
            margin-top: 10px;
            border: 1px solid #d8d8d8;
          }
        `}
      </style>
    )
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    clinic_id: state.user.data.clinic_id,
    operation_id: state.user.data.id,
    triagePatients: state.triagePatients.data,
    user: state.user.data,
    patient_id: state.patients.selectId,
    history_medicals: state.medicalRecords.history_medicals,
    history_page_info: state.medicalRecords.history_page_info
  }
}
export default connect(
  mapStateToProps,
  {
    PatientGetByID,
    GetLastBodySign,
    queryMedicalsByPatient,
    UpsertPatientHeight,
    UpsertPatientWeight,
    UpsertPatientBloodPressure,
    UpsertPatientVision,
    UpsertPatientBloodSugar,
    PatientHeightList,
    PatientWeightList,
    PatientBmiList,
    PatientBloodPressureList,
    PatientVisionList,
    PatientBloodSugarList,
    MedicalRecordRenew,
    PersonalMedicalRecord,
    queryMedicalRecord,
    TriagePatientVisitDetail,
    MedicalRecordRenewUpdate,
    MedicalRecordRenewDelete,
    selectHistoryMedicalRecord
  }
)(VisitInfoScreen)
