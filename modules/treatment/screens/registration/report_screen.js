import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TriagePatientReport, PatientGetByID, LaboratoryTriageDetail } from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import { ImageViewer } from '../../../../components'
import Print from 'rc-print'
import moment from 'moment'
import { API_SERVER } from '../../../../config'

class ReportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientInfo: {},
      record: {},
      exams: [],
      laboras: [],
      selIndex: null,
      laboraDetails: {}
    }
  }

  async componentDidMount() {
    const { history_id, patient_id, history_medicals, TriagePatientReport, PatientGetByID } = this.props
    let patientInfo = await PatientGetByID({ patient_id })
    let exams = []
    let laboras = []
    let selIndex = null
    let record = {}
    for (let item of history_medicals) {
      const { id, clinic_triage_patient_id } = item
      if (history_id === id) {
        let data = await TriagePatientReport({ clinic_triage_patient_id })
        exams = data.examination_results || []
        laboras = data.laboratory_results || []
        record = item
        break
      }
    }

    if (exams.length) {
      selIndex = 0
    } else if (laboras.length) {
      selIndex = 0
      this.LaboratoryTriageDetail(laboras, selIndex)
    }
    this.setState({ patientInfo, exams, laboras, selIndex, record })
  }

  async LaboratoryTriageDetail(laboras, index) {
    const { LaboratoryTriageDetail } = this.props
    const { laboraDetails } = this.state
    let { clinic_laboratory_id, laboratory_patient_id } = laboras[index]
    let detail = await LaboratoryTriageDetail({ laboratory_patient_id, clinic_laboratory_id })
    let resultsData = detail.resultsData || []
    laboraDetails[index] = resultsData
    this.setState({ laboraDetails })
  }

  // 显示上传的文件
  renderFiles(picture_examination, viewer, showDelete = false) {
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
                </li>
              )
            })}
          </ul>
          <style jsx>{`
            .filesBox {
              width: 100%;
              position: absolute;
              top: 20px;
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

  renderExamContent() {
    const { selIndex, exams } = this.state
    if (selIndex >= exams.length) return null
    const data = exams[selIndex]
    if (!data) return null
    let images = []
    if (data.picture_examination) {
      let uploadedFiles = JSON.parse(data.picture_examination)
      for (let f of uploadedFiles) {
        images.push({ src: API_SERVER + f.url })
      }
    }
    return (
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
            <div style={{ width: '100%', height: '120px' }}>
              {this.renderFiles(data.picture_examination, 'ImageViewer2')}
              <ImageViewer ref='ImageViewer2' images={images} />
            </div>
          </li>
          <li>
            <label>描述</label>
            <textarea
              readOnly
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
              readOnly
              value={data.result_examination || ''}
              onChange={e => {
                exams[selIndex].result_examination = e.target.value
                this.setState({ exams })
              }}
            />
          </li>
        </ul>
        <div>
          <button style={{ float: 'right', marginRight: '35px', marginTop: '20px' }} onClick={() => this.refs.printer.onPrint()}>
            打印报告
          </button>
          <Print ref='printer' lazyRender isIframe>
            {this.examPrinter()}
          </Print>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  examPrinter() {
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
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 15px 10px 5px',
      minHeight: '30px',
      alignItems: 'center'
    }
    const { selIndex, exams, record, patientInfo } = this.state
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
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{data.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>检查结果报告单</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <label>姓名：</label>
            <div style={patientInfoRowDivStyle}>{patientInfo.name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>性别：</label>
            <div style={patientInfoRowDivStyle}>{patientInfo.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>年龄：</label>
            <div style={patientInfoRowDivStyle}>{getAgeByBirthday(patientInfo.birthday)}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <label>病人ID：</label>
            <div style={patientInfoRowDivStyle}>{patientInfo.id}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>联系方式：</label>
            <div style={patientInfoRowDivStyle}>{patientInfo.phone}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>送检医生：</label>
            <div style={patientInfoRowDivStyle}>{data.report_doctor_name}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <label>检查项目：</label>
            <div style={patientInfoRowDivStyle}>{data.clinic_examination_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>检查部位：</label>
            <div style={patientInfoRowDivStyle}>{data.organ}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <label>临床诊断：</label>
            <div style={patientInfoRowDivStyle}>{record.diagnosis}</div>
          </div>
        </div>
        {images.map((item, index) => {
          return (
            <div style={{ width: '100%', display: 'flex', fontSize: '17px' }} key={index}>
              <div style={patientInfoRowStyle}>
                <img src={item.src} style={{ maxHeight: '700px', maxWidth: '700px', marginTop: '20px' }} />
              </div>
            </div>
          )
        })}
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoColumnDivStyle}>
            <label style={{ width: '100%', fontWeight: 'bold' }}>检查所见：</label>
            <div>{data.conclusion_examination}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoColumnDivStyle}>
            <label style={{ width: '100%', fontWeight: 'bold' }}>诊断意见：</label>
            <div>{data.result_examination}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <label>报告医生：</label>
            <div style={patientInfoRowDivStyle}>{data.report_doctor_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>报告时间：</label>
            <div style={patientInfoRowDivStyle}>{moment(data.report_time).format('YYYY-MM-DD HH:mm:ss')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <label>审核：</label>
            <div style={patientInfoRowDivStyle}>{}</div>
          </div>
        </div>
      </div>
    )
  }

  renderLaboraContent() {
    let { selIndex, laboraDetails, laboras = [], exams = [] } = this.state
    if (selIndex < exams.length) return null
    selIndex = selIndex - exams.length
    const array = laboraDetails[selIndex]
    if (!array || !array.length) return null
    let data = laboras[selIndex]
    if (!data) return null
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 0 40px 0', background: 'rgba(255, 255, 255, 1)' }}>
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
          {this.getStyle()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 10px 10px 10px' }}>
          <label>备注</label>
          <textarea
            readOnly
            style={{ resize: 'none', width: '100%', height: '100px', background: 'rgba(245, 248, 249, 1)', borderRadius: '4px', border: '1px solid #d8d8d8' }}
            value={data.remark || ''}
            onChange={e => {
              laboras[selIndex].remark = e.target.value
              this.setState({ laboras })
            }}
          />
        </div>
        <div>
          <button style={{ float: 'right', marginRight: '5px', marginTop: '20px' }} onClick={() => this.refs.laboraPrinter.onPrint()}>
            打印报告
          </button>
          <Print ref='laboraPrinter' lazyRender isIframe>
            {this.mrPrinter()}
            {/* <div>aaaaaa</div> */}
          </Print>
        </div>
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

  mrPrinter() {
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
    let { selIndex, laboraDetails, laboras, exams = [], patientInfo, record } = this.state
    selIndex = selIndex - exams.length
    let array = laboraDetails[selIndex]
    if (array === undefined) {
      array = []
    }
    let data = laboras[selIndex]
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{data.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>检验报告单</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>姓名：</lable>
            <div style={patientInfoRowDivStyle}>{patientInfo.name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>性别：</lable>
            <div style={patientInfoRowDivStyle}>{patientInfo.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>年龄：</lable>
            <div style={patientInfoRowDivStyle}>{getAgeByBirthday(patientInfo.birthday)}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>标本种类：</lable>
            <div style={patientInfoRowDivStyle}>{data.laboratory_sample}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>病人ID：</lable>
            <div style={patientInfoRowDivStyle}>{patientInfo.id}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>科室：</lable>
            <div style={patientInfoRowDivStyle}>{record.department_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>备注：</lable>
            <div style={patientInfoRowDivStyle}>{data.remark || ''}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>初步诊断：</lable>
            <div style={patientInfoRowDivStyle}>{record.diagnosis}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
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
        </div>
      </div>
    )
  }

  renderItemTitle() {
    let { exams = [], laboras = [], selIndex } = this.state
    return (
      <div className={'detailCenter'}>
        <div className={'childTopBar'}>
          {exams.map((item, index) => {
            return (
              <span key={index} className={index === selIndex ? 'sel' : ''} onClick={() => this.setState({ selIndex: index })}>
                {item.clinic_examination_name}
              </span>
            )
          })}
          {laboras.map((item, index) => {
            index = exams.length + index
            return (
              <span
                key={index}
                className={index === selIndex ? 'sel' : ''}
                onClick={() => {
                  this.setState({ selIndex: index })
                  this.LaboratoryTriageDetail(laboras, index - exams.length)
                }}
              >
                {item.clinic_laboratory_name}
              </span>
            )
          })}
        </div>
      </div>
    )
  }

  render() {
    const { patientInfo } = this.state
    return (
      <div className={'detail'}>
        <div className={'detailBox'}>
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
              <div>病人ID：{patientInfo.id}</div>
            </div>
            <div>
              <div>手机号码：{patientInfo.phone}</div>
            </div>
          </div>
        </div>
        {this.renderItemTitle()}
        {this.renderExamContent()}
        {this.renderLaboraContent()}
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
  return {
    personnel_id: state.user.data.id,
    history_medicals: state.medicalRecords.history_medicals,
    history_id: state.medicalRecords.history_id,
    patient_id: state.patients.selectId
  }
}
export default connect(
  mapStateToProps,
  { TriagePatientReport, PatientGetByID, LaboratoryTriageDetail }
)(ReportScreen)
