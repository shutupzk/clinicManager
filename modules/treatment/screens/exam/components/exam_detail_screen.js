import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm, PageCard, ImageViewer, Upload } from '../../../../../components'
import {
  queryMedicalRecord,
  ExaminationTriageList,
  ExaminationTriageRecordCreate,
  ExaminationTriagePatientRecordList,
  FileUpload,
  examinationReportList
} from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import { API_SERVER } from '../../../../../config'
import moment from 'moment'
import Print from 'rc-print'

// 检查
class ExamDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      exams: [],
      selIndex: 0,
      showExamHistory: false,
      showExamHistoryDetail: false,
      historyDetail: {},
      showRecord: false,
      imgWidth: 0,
      imgHeight: 0,
      visible: false,
      showProgress: false,
      percent: 0,
      selTemplate: ''
    }
  }

  async componentDidMount() {
    this.examinationReportList()
    let { queryMedicalRecord, triagePatient, ExaminationTriageList, order_status = '20' } = this.props
    const { clinic_triage_patient_id } = triagePatient
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    let exams = await ExaminationTriageList({ clinic_triage_patient_id, order_status })
    this.setState({ record, exams })
  }
  examinationReportList() {
    const {examinationReportList} = this.props
    let reqData = {
      limit: 1000,
      offset: 0
    }
    examinationReportList(reqData)
  }
  render() {
    const { order_status } = this.props
    return (
      <div className={'detail'}>
        <div className={'detail_title'}>
          <span>{order_status === 30 ? '已检查' : '检查中'}</span>
          <span onClick={() => this.props.back2List()}>{'<返回'}</span>
        </div>
        {this.renderDoctorInfo()}
        {this.renderPatientInfo()}
        {this.renderRecordInfo()}
        {this.renderItemTitle()}
        {this.renderContent()}
        {this.getStyle()}
        {this.renderExamHistory()}
        {this.renderMedicalRecord()}
        {this.renderHistoryDetail()}
        <Confirm ref='myAlert' />
      </div>
    )
  }

  renderMedicalRecord() {
    const { record, showRecord } = this.state
    if (!showRecord) return null
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>查看病历</span>
            <span onClick={() => this.setState({ showRecord: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li />
              <li>
                <div style={{ flex: 1 }}>发病日期</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.morbidity_date}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>主诉</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.chief_complaint}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>现病史</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.history_of_present_illness}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>既往史</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.history_of_past_illness}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>过敏史</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.allergic_history}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>家族史</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.family_medical_history}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>疫苗接种史</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.immunizations}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>实验室及辅助材料</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>体格检查</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.body_examination}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>初步诊断</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.diagnosis}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>治疗建议</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.cure_suggestion}</div>
              </li>
              <li>
                <div style={{ flex: 1 }}>备注</div>
                <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-start', padding: '0 10px 0 10px' }}>{record.remark}</div>
              </li>
            </ul>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  ExaminationTriagePatientRecordList({ offset = 0, limit = 10 }) {
    const { triagePatient, ExaminationTriagePatientRecordList } = this.props
    const { clinic_triage_patient_id } = triagePatient
    ExaminationTriagePatientRecordList({ clinic_triage_patient_id, offset, limit })
  }

  renderExamHistory() {
    const { showExamHistory } = this.state
    if (!showExamHistory) return
    const { patient_record_data, patient_record_page_info, ExaminationTriageList, queryMedicalRecord } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>查看历史记录</span>
            <span onClick={() => this.setState({ showExamHistory: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                        this.setState({ showExamHistoryDetail: true, showExamHistory: false, historyDetail: { record, exams, order_time, department_name, order_doctor_name, selIndex: 0 } })
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
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={patient_record_page_info.offset}
            limit={patient_record_page_info.limit}
            total={patient_record_page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.ExaminationTriagePatientRecordList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
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
    // const {order_status} = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>报告详情</span>
            <span onClick={() => this.setState({ showExamHistoryDetail: false, showExamHistory: true })}>x</span>
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
                    <label style={{ margin: '0 50px 0 5px', fontWeight: '400' }}>{moment(data.report_time).format('YYYY-MM-DD HH:mm:ss')}</label>
                    报告人：
                    <label style={{ margin: '0 20px 0 5px', fontWeight: '400' }}>{data.report_doctor_name}</label>
                  </div>
                </li>
                <li>
                  <label>检查图片</label>
                  <div style={{ width: '100%', height: '170px' }}>
                    {<ImageViewer ref='ImageViewer1' images={images} />}
                    {this.renderFiles(data.picture_examination, 'ImageViewer1', false)}
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

  renderDoctorInfo() {
    const { triagePatient, order_status } = this.props
    console.log('triagePatient=====', triagePatient, order_status)
    return (
      <div className={'filterBox'}>
        <div>
          <div>开单医生：{triagePatient.order_doctor_name}</div>
        </div>
        <div>
          <div>开单科室：{triagePatient.department_name}</div>
        </div>
        <div>
          <div>开单时间：{moment(triagePatient.order_time).format('YYYY-MM-DD HH:mm')}</div>
        </div>
        <div />
        <div />
      </div>
    )
  }
  renderPatientInfo() {
    const { triagePatient } = this.props
    return (
      <div className={'filterBox'}>
        <div>
          <div>就诊人姓名：{triagePatient.patient_name}</div>
        </div>
        <div>
          <div>性别：{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
        </div>
        <div>
          <div>年龄：{getAgeByBirthday(triagePatient.birthday)}</div>
        </div>
        <div>
          <div>病人ID：{triagePatient.patient_id}</div>
        </div>
        <div>
          <div>手机号码：{triagePatient.phone}</div>
        </div>
      </div>
    )
  }
  renderRecordInfo() {
    const { record } = this.state
    return (
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
    )
  }
  getTemplateOptions() {
    const {examinationReportModels} = this.props
    console.log('examinationReportModels====', examinationReportModels)
    let array = []
    for (let key of examinationReportModels) {
      let item = {
        label: key.model_name,
        value: key.model_name,
        conclusion_examination: key.conclusion_examination,
        result_examination: key.result_examination
      }
      array.push(item)
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
  renderItemTitle() {
    let { exams, selIndex, selTemplate } = this.state
    // console.log('exams====', exams)
    return (
      <div className={'detailCenter'}>
        <div className={'childTopBar'}>
          {exams.map((item, index) => {
            return (
              <span key={index} className={index === selIndex ? 'sel' : ''} onClick={() => this.setState({ selIndex: index, selTemplate: '' })}>
                {item.clinic_examination_name}
              </span>
            )
          })}
        </div>
        <div className={'chooseModel'}>
          <div>
            <Select
              placeholder={'选择模板'}
              height={32}
              options={this.getTemplateOptions()}
              value={this.getSelectValue(selTemplate, this.getTemplateOptions())}
              onChange={e => {
                exams[selIndex].conclusion_examination = e.conclusion_examination
                exams[selIndex].result_examination = e.result_examination
                // exams[selIndex].template = e.value
                this.setState({ exams, selTemplate: e.value })
              }}
            />
          </div>
        </div>
        <div className={'rightBtn'}>
          <button onClick={() => this.setState({ showRecord: true })}>查看病历</button>
          <button
            onClick={() => {
              this.setState({ showExamHistory: true })
              this.ExaminationTriagePatientRecordList({})
            }}
          >
            检查记录
          </button>
        </div>
      </div>
    )
  }

  async save() {
    const { ExaminationTriageRecordCreate, triagePatient, operation_id } = this.props
    const { exams, selIndex } = this.state
    const { clinic_triage_patient_id } = triagePatient
    let exam = exams[selIndex]
    const { examination_patient_id, picture_examination, result_examination, conclusion_examination } = exam
    let error = await ExaminationTriageRecordCreate({ clinic_triage_patient_id, examination_patient_id, operation_id, picture_examination, result_examination, conclusion_examination })
    console.log('error ===', error)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
    }
  }

  // 显示上传的文件
  renderFiles(picture_examination, viewer, showDelete = true) {
    const { selIndex, exams } = this.state
    if (!picture_examination) return null
    let uploadedFiles = JSON.parse(picture_examination)
    if (uploadedFiles.length === 0) {
      return null
    } else {
      return (
        <div className={'filesBox'}>
          <ul>
            {uploadedFiles.map((item, index) => {
              // let fileNameArray = item.docName.split('.')
              // let suffix = fileNameArray[fileNameArray.length - 1].toLowerCase()
              // if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
              return (
                <li className={'imgLi'} key={index} title={item.docName} style={{ flexDirection: 'row' }}>
                  <img
                    src={API_SERVER + item.url}
                    onClick={e => {
                      this.refs[viewer].show(index)
                    }}
                  />
                  {showDelete ? (
                    <span
                      onClick={() => {
                        let array = uploadedFiles
                        array.splice(index, 1)
                        exams[selIndex].picture_examination = JSON.stringify(array)
                        this.setState({ exams })
                      }}
                    >
                      ×
                    </span>
                  ) : null}
                </li>
              )
              // } else {
              //   return (
              //     <li key={index} title={item.docName}>
              //       {item.docName}
              //       {showDelete ? (
              //         <span
              //           onClick={() => {
              //             let array = uploadedFiles
              //             array.splice(index, 1)
              //             exams[selIndex].picture_examination = JSON.stringify(array)
              //             this.setState({ exams })
              //           }}
              //         >
              //           ×
              //         </span>
              //       ) : null}
              //     </li>
              //   )
              // }
            })}
          </ul>
          <style jsx>{`
            .filesBox {
              width: 100%;
              position: absolute;
              top: 70px;
            }
            .filesBox ul {
              display: flex;
              flex-direction: row;
              width: 100%;
            }
            .filesBox ul li {
              position: relative;
              margin: 0 0 0 5px;
              background: rgba(200, 200, 200, 0.8);
              border-radius: 4px;
              overflow: hidden;
              width: auto;
              white-space: nowrap;
              text-overflow: ellipsis;
              // padding: 3px 15px 3px 3px;
              padding: 5px;
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
        </div>
      )
    }
  }

  // 上传文件
  async FileUpload(files, picture_examination) {
    const { FileUpload } = this.props // xhrFileUpload
    const { imgFiles, selIndex, exams } = this.state
    let uploadedFiles = picture_examination ? JSON.parse(picture_examination) : []
    let array = uploadedFiles
    let imgArray = imgFiles || []
    if (files) {
      let file = new FormData()
      // console.log('files===', files)
      // for (let i = 0; i < files.length; i++) {
      //   file.append('file[' + i + ']', files[i]) // ++++++++++
      // }
      file.append('file', files[0])
      let url = await FileUpload(file)
      // xhrFileUpload(file, function (type, data) {
      //   if (type === 'progress' || type === 'uploading') {
      //     console.log('progress=====', data)
      //   }
      //   if (type === 'cancel') {
      //     console.log('cancel=====', data)
      //   }
      //   if (type === 'error') {
      //     console.log('error=====', data)
      //   }
      //   if (type === 'ok') {
      //     console.log('ok=====', data)
      //   }
      // })
      console.log('url====', url)
      if (url) {
        let item = {
          docName: files[0].name,
          url
        }
        array.push(item)
        let suffix = url.split('.')[1].toLowerCase()
        if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
          imgArray.push(item)
        }
        exams[selIndex].picture_examination = JSON.stringify(array)
        this.setState({ exams })
        // this.setState({ uploadedFiles: array, imgFiles: imgArray, files: JSON.stringify(array) })
      }
    }
  }
  // 显示进度条
  showProgress(e) {
    const { imgFiles, selIndex, exams } = this.state
    let picture_examination = exams[selIndex].picture_examination
    let uploadedFiles = picture_examination ? JSON.parse(picture_examination) : []
    let array = uploadedFiles
    let imgArray = imgFiles || []
    let file = e.file
    if (e.event !== undefined) {
      let event = e.event
      this.setState({ showProgress: true, percent: event.percent })
    }
    console.log('event=====', e)
    if (file.status === 'done') {
      // this.setState({})
      if (e.file.response.url !== undefined) {
        let url = e.file.response.url
        let item = {
          docName: file.name,
          url
        }
        array.push(item)
        let suffix = file.type.split('/')[0] // url.split('.')[1].toLowerCase()
        if (suffix === 'image') {
          imgArray.push(item)
        }
        exams[selIndex].picture_examination = JSON.stringify(array)
        this.setState({ exams, showProgress: false, percent: 0 })
        // this.setState({ uploadedFiles: array, imgFiles: imgArray, files: JSON.stringify(array) })
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
  renderContent() {
    const { order_status } = this.props
    const { selIndex, exams, showProgress } = this.state
    const data = exams[selIndex]
    if (!data) return null
    let images = []
    if (data.picture_examination) {
      let uploadedFiles = JSON.parse(data.picture_examination)
      for (let f of uploadedFiles) {
        images.push({ src: API_SERVER + f.url })
      }
    }
    // const {order_status} = this.props
    return (
      <div className={'detailContent formList'}>
        <ul>
          <li>
            {order_status === '30' || order_status === 30 ? <div style={{ display: 'flex', margin: '20px 0 20px 0', fontSize: '20px' }}>
              报告时间：
              <label style={{ margin: '0 50px 0 5px', fontWeight: '400' }}>{moment(exams[selIndex].report_time).format('YYYY-MM-DD HH:mm:ss')}</label>
              报告人：
              <label style={{ margin: '0 20px 0 5px', fontWeight: '400' }}>{exams[selIndex].report_doctor_name}</label>
            </div> : ''}
          </li>
          <li>
            <label>检查图片</label>
            <div style={{ width: '100%', height: '170px' }}>
              {this.renderFiles(data.picture_examination, 'ImageViewer2')}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Upload
                  accept={'image/*'}
                  onChange={e => {
                    this.showProgress(e)
                    // console.log('Upload=====', e)
                  }}
                />
                <label>文件大小不能超过20M，支持图片、word、pdf文件</label>
              </div>
              {showProgress ? this.fileProgress() : ''}
              <ImageViewer ref='ImageViewer2' images={images} />
            </div>
          </li>
          <li>
            <label>描述</label>
            <textarea
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
              value={data.result_examination || ''}
              onChange={e => {
                exams[selIndex].result_examination = e.target.value
                this.setState({ exams })
              }}
            />
          </li>
        </ul>
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.save()}>保存</button>
            <button onClick={() => this.props.back2List()}>取消</button>
          </div>
        </div>
        {/* {this.mrPrinter()} */}
        {order_status === 30 || order_status === '30' ? (
          <div>
            <button
              style={{ float: 'right', marginRight: '20px' }}
              onClick={() => this.refs.printer.onPrint()}
            >打印报告</button>
            <Print ref='printer' lazyRender isIframe>
              {this.mrPrinter()}
              {/* <div>aaaaaa</div> */}
            </Print>
          </div>
        ) : (
          ''
        )}
        {this.getStyle()}
      </div>
    )
  }
  mrPrinter() {
    let { user, triagePatient } = this.props
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
    const patientInfoColumnDivStyle = {
      // flex: 1,
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 15px 10px 5px',
      minHeight: '30px',
      alignItems: 'center'
      // borderBottom: '1px solid #d8d8d8',
      // borderTop: '1px solid #ffffff'
    }
    const { selIndex, exams, record } = this.state
    // let array = laboraDetails[selIndex]
    // if (array === undefined) {
    //   array = []
    // }
    let data = exams[selIndex]
    let images = []
    if (data.picture_examination) {
      let uploadedFiles = JSON.parse(data.picture_examination)
      for (let f of uploadedFiles) {
        images.push({ src: API_SERVER + f.url })
      }
    }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>检查结果报告单</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>姓名：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.patient_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>性别：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>年龄：</lable>
            <div style={patientInfoRowDivStyle}>{getAgeByBirthday(triagePatient.birthday)}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>病人ID：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.patient_id}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>联系方式：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.phone}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>送检医生：</lable>
            <div style={patientInfoRowDivStyle}>{data.report_doctor_name}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>检查项目：</lable>
            <div style={patientInfoRowDivStyle}>{data.clinic_examination_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>检查部位：</lable>
            <div style={patientInfoRowDivStyle}>{data.organ}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>临床诊断：</lable>
            <div style={patientInfoRowDivStyle}>{record.diagnosis}</div>
          </div>
        </div>
        {images.map((item, index) => {
          return (
            <div style={{ width: '100%', display: 'flex', fontSize: '17px' }} key={index}>
              <div style={patientInfoRowStyle}>
                <img src={item.src} style={{maxHeight: '700px', maxWidth: '700px', marginTop: '20px'}} />
              </div>
            </div>
          )
        })}
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoColumnDivStyle}>
            <lable style={{width: '100%', fontWeight: 'bold'}}>检查所见：</lable>
            <div>{data.conclusion_examination}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoColumnDivStyle}>
            <lable style={{width: '100%', fontWeight: 'bold'}}>诊断意见：</lable>
            <div>{data.result_examination}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>报告医生：</lable>
            <div style={patientInfoRowDivStyle}>{data.report_doctor_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>报告时间：</lable>
            <div style={patientInfoRowDivStyle}>{moment(data.report_time).format('YYYY-MM-DD HH:mm:ss')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>审核：</lable>
            <div style={patientInfoRowDivStyle}>{}</div>
          </div>
        </div>
        {/* <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div className='tableDIV' style={{ width: '100%', margin: '0 0 0 0' }}>
            <ul>
              <li style={{ fontWeight: 'bold' }}>
                <div style={{ flex: 3 }}>检验项目</div>
                <div style={{ flex: 2 }}>结果</div>
                <div style={{ flex: 2 }}>异常标志</div>
                <div style={{ flex: 2 }}>单位</div>
                <div style={{ flex: 2 }}>性质</div>
                <div style={{ flex: 3, borderRight: '1px solid #d8d8d8' }}>参考值</div>
              </li>
              {array.map((item, index) => {
                // let nameOptions = this.getNameOptions(index)
                const { reference, reference_min, reference_max, data_type } = this.getReference(item)
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
                    <div style={{ flex: 3 }}>
                      <div style={{ width: '100%' }}>{item.name}</div>
                    </div>
                    <div style={{ flex: 2 }}>
                      <div style={{ width: '100%' }}>{item.result_inspection || ''}</div>
                    </div>
                    <div style={{ flex: 2, color: is_normal === '偏高' ? 'red' : is_normal === '偏低' ? 'blue' : '#505050' }}>{is_normal}</div>
                    <div style={{ flex: 2 }}>{item.unit_name}</div>
                    <div style={{ flex: 2 }}>{item.data_type === 1 ? '定性' : '定量'}</div>
                    <div style={{ flex: 3 }}>{reference}</div>
                  </li>
                )
              })}
            </ul>
            {this.getStyle()}
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>送检医生：</lable>
            <div style={patientInfoRowDivStyle}>{data.report_doctor_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>送检人员：</lable>
            <div style={patientInfoRowDivStyle}>{data.report_doctor_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>审核人员：</lable>
            <div style={patientInfoRowDivStyle}>{}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>接收时间：</lable>
            <div style={patientInfoRowDivStyle}>{}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>报告时间：</lable>
            <div style={patientInfoRowDivStyle}>{moment(data.report_time).format('YYYY-MM-DD HH:mm')}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>注：</lable>
            <div style={patientInfoRowDivStyle}>{'此检验报告仅对本次标本负责，如有疑问，请立即与检验科联系，谢谢合作'}</div>
          </div>
        </div> */}
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
            margin: 10px 5% 0 3%;
            width: 94%;
          }
          .detailContent ul li textarea {
            height: 100px;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            resize: none;
            margin: 10px 0 0 0;
            border: 1px solid #d8d8d8;
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
          .chooseFile {
            // height: 66px;
            margin-top: 10px;
            display: flex;
            position: relative;
          }
          .chooseFile input {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            margin: 0;
          }
          .chooseFile button {
            height: 30px;
            width: 200px;
            border: 1px dashed #d9d9d9;
            border-radius: 4px;
            background: transparent;
            cursor: pointer;
            margin: 0 20px 0px 0px;
            color: rgba(102, 102, 102, 1);
          }
          .chooseFile a {
            width: 500px;
            height: 34px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            color: rgba(102, 102, 102, 1);
            line-height: 15px;
            display: block;
            line-height: 34px;
          }
        `}
      </style>
    )
  }
}

const mapStateToProps = state => {
  console.log('state =======', state.examinationTriages)
  return {
    user: state.user.data,
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    patient_record_data: state.examinationTriages.patient_record_data,
    patient_record_page_info: state.examinationTriages.patient_record_page_info,
    examinationReportModels: state.examinationReportModels.data
  }
}

export default connect(
  mapStateToProps,
  {
    queryMedicalRecord,
    ExaminationTriageList,
    ExaminationTriageRecordCreate,
    ExaminationTriagePatientRecordList,
    FileUpload,
    examinationReportList
  }
)(ExamDetailScreen)
