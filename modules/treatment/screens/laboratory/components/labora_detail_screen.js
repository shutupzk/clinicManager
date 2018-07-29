import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm, PageCard } from '../../../../../components'
import { queryMedicalRecord, LaboratoryTriageList, LaboratoryTriageDetail, LaboratoryTriageRecordCreate, LaboratoryTriagePatientRecordList, queryLaboratoryItemList } from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import moment from 'moment'
import Print from 'rc-print'

// 检验
class LaboraDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      laboras: [],
      selIndex: 0,
      laboraDetails: {},
      showLaboraHistory: false,
      showRecord: false
    }
  }

  async componentDidMount() {
    let { queryMedicalRecord, triagePatient, LaboratoryTriageList, order_status = '20' } = this.props
    const { clinic_triage_patient_id } = triagePatient
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    let laboras = await LaboratoryTriageList({ clinic_triage_patient_id, order_status })
    if (laboras && laboras.length) {
      this.LaboratoryTriageDetail(laboras, 0)
    }
    this.setState({ record, laboras })
  }

  async LaboratoryTriageDetail(laboras, index) {
    const { LaboratoryTriageDetail } = this.props
    const { laboraDetails } = this.state
    let { clinic_laboratory_id, laboratory_patient_id } = laboras[index]
    let detail = await LaboratoryTriageDetail({ laboratory_patient_id, clinic_laboratory_id })
    let associationsData = detail.associationsData || []
    let resultsData = detail.resultsData || []
    let array = [...resultsData]
    for (let obj of associationsData) {
      let has = false
      for (let item of array) {
        if (item.clinic_laboratory_item_id === obj.clinic_laboratory_item_id) {
          has = true
          break
        }
      }
      if (!has) {
        array.push(obj)
      }
    }
    laboraDetails[index] = array
    this.setState({ laboraDetails })
  }

  render() {
    const { order_status } = this.props
    return (
      <div className={'detail'}>
        <div className={'detail_title'}>
          <span>{order_status === '30' ? '已检验' : '检验中'}</span>
          <span onClick={() => this.props.back2List()}>{'<返回'}</span>
        </div>
        {this.renderDoctorInfo()}
        {this.renderPatientInfo()}
        {this.renderRecordInfo()}
        {this.renderItemTitle()}
        {this.renderContent()}
        {this.getStyle()}
        {this.renderLobroaHistory()}
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
                <div style={{ flex: 1 }}>体格检验</div>
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

  LaboratoryTriagePatientRecordList({ offset = 0, limit = 10 }) {
    const { triagePatient, LaboratoryTriagePatientRecordList } = this.props
    const { clinic_triage_patient_id } = triagePatient
    LaboratoryTriagePatientRecordList({ clinic_triage_patient_id, offset, limit })
  }

  renderLobroaHistory() {
    const { showLaboraHistory } = this.state
    if (!showLaboraHistory) return
    const { patient_record_data, patient_record_page_info, queryMedicalRecord, LaboratoryTriageList, LaboratoryTriageDetail } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>查看历史记录</span>
            <span onClick={() => this.setState({ showLaboraHistory: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                          showLaboraHistory: false,
                          historyDetail: { record, laboras, order_time, department_name, order_doctor_name, selIndex: 0, laboraDetails }
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
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={patient_record_page_info.offset}
            limit={patient_record_page_info.limit}
            total={patient_record_page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.LaboratoryTriagePatientRecordList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderHistoryDetail() {
    const { showLaboraHistoryDetail, historyDetail } = this.state
    if (!showLaboraHistoryDetail) return null
    let { record = {}, laboras = [], selIndex, laboraDetails } = historyDetail
    let array = laboraDetails[selIndex]
    if (array === undefined) {
      array = []
    }
    // const {order_status} = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px', background: '#FFFFFF' }}>
          <div className='doctorList_top'>
            <span>报告详情</span>
            <span onClick={() => this.setState({ showLaboraHistoryDetail: false, showExamHistory: true })}>x</span>
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
                        array = [...resultsData]
                        // laboraDetails[index] = array
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
                  // const { reference, reference_min, reference_max, data_type } = this.getReference(item)
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

  renderDoctorInfo() {
    const { triagePatient } = this.props
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
          <div>就诊ID：{triagePatient.clinic_triage_patient_id}</div>
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
  renderItemTitle() {
    const { laboras, selIndex } = this.state
    return (
      <div className={'detailCenter'}>
        <div className={'childTopBar'}>
          {laboras.map((item, index) => {
            return (
              <span
                key={index}
                className={index === selIndex ? 'sel' : ''}
                onClick={() => {
                  this.setState({ selIndex: index })
                  this.LaboratoryTriageDetail(laboras, index)
                }}
              >
                {item.clinic_laboratory_name}
              </span>
            )
          })}
        </div>
        <div className={'rightBtn'}>
          <button onClick={() => this.setState({ showRecord: true })}>查看病历</button>
          <button
            onClick={() => {
              this.setState({ showLaboraHistory: true })
              this.LaboratoryTriagePatientRecordList({})
            }}
          >
            检验记录
          </button>
        </div>
      </div>
    )
  }

  async save() {
    const { LaboratoryTriageRecordCreate, triagePatient, operation_id } = this.props
    const { laboras, selIndex, laboraDetails } = this.state
    const { clinic_triage_patient_id } = triagePatient
    let labora = laboras[selIndex]
    const { laboratory_patient_id, remark } = labora
    let items = []
    let array = laboraDetails[selIndex]
    for (let o of array) {
      let obj = {}
      let ref = this.getReference(o)
      let item = { ...o, ...ref }
      for (let key in item) {
        if (item[key] === 0) {
          obj[key] = item[key] + ''
        } else {
          obj[key] = item[key] ? item[key] + '' : ''
        }
      }
      let is_normal = '正常'
      if (ref.data_type === 2) {
        if (item.result_inspection * 1 < ref.reference_min) {
          is_normal = '偏低'
        } else if (item.result_inspection * 1 > ref.reference_max) {
          is_normal = '偏高'
        }
      }
      obj.is_normal = is_normal
      items.push(obj)
    }
    let error = await LaboratoryTriageRecordCreate({ clinic_triage_patient_id, laboratory_patient_id, operation_id, remark, items: JSON.stringify(items) })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
    }
  }

  getNameOptions(index) {
    const { laboItemData } = this.props
    let array = []
    for (let key in laboItemData) {
      const { clinic_laboratory_item_id, name } = laboItemData[key]
      array.push({
        value: clinic_laboratory_item_id,
        label: name,
        ...laboItemData[key]
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

  queryLaboratoryItemList(keyword) {
    const { queryLaboratoryItemList, clinic_id } = this.props
    queryLaboratoryItemList({ clinic_id, name: keyword })
  }

  addColumn() {
    const { selIndex, laboraDetails } = this.state
    const array = laboraDetails[selIndex]
    laboraDetails[selIndex] = [...array, {}]
    this.setState({ laboraDetails })
  }

  removeColumn(index) {
    const { selIndex, laboraDetails } = this.state
    const array = laboraDetails[selIndex]
    array.splice(index, 1)
    laboraDetails[selIndex] = [...array]
    this.setState({ laboraDetails })
  }

  getReference(item) {
    const { triagePatient } = this.props
    let reference = ''
    let references = item.references || []
    let age = getAgeByBirthday(triagePatient.birthday)
    let sex = triagePatient.sex === 0 ? '女' : '男'
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

  renderContent() {
    const { order_status } = this.props
    const { selIndex, laboraDetails, laboras } = this.state
    const array = laboraDetails[selIndex]
    if (!array || !array.length) return null
    let data = laboras[selIndex]
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 0 40px 0', background: 'rgba(255, 255, 255, 1)' }}>
        {order_status === '30' || order_status === 30 ? <div style={{ display: 'flex', margin: '20px 0 20px 10px', fontSize: '20px' }}>
          报告时间：
          <label style={{ margin: '0 50px 0 5px', fontWeight: '400' }}>{moment(laboras[selIndex].report_time).format('YYYY-MM-DD HH:mm:ss')}</label>
          报告人：
          <label style={{ margin: '0 20px 0 5px', fontWeight: '400' }}>{laboras[selIndex].report_doctor_name}</label>
        </div> : ''}
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
              <div style={{ flex: 2 }}>
                <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                  新增
                </div>
              </div>
            </li>
            {array.map((item, index) => {
              let nameOptions = this.getNameOptions(index)
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
                  <div style={{ flex: 3 }}>
                    <div style={{ width: '100%' }}>
                      <Select
                        value={this.getSelectValue(item.clinic_laboratory_item_id, nameOptions)}
                        onChange={item => {
                          array[index] = item
                          this.setState({ laboraDetails: { ...laboraDetails, [selIndex]: array } })
                        }}
                        placeholder='搜索名称'
                        height={38}
                        onInputChange={keyword => this.queryLaboratoryItemList(keyword)}
                        options={nameOptions}
                      />
                    </div>
                  </div>
                  <div style={{ flex: 2 }}>
                    <input
                      value={item.result_inspection || ''}
                      type='text'
                      onChange={e => {
                        let value = e.target.value
                        array[index].result_inspection = value
                        this.setState({ laboraDetails: { ...laboraDetails, [selIndex]: array } })
                      }}
                    />
                  </div>
                  <div style={{ flex: 2, color: is_normal === '偏高' ? 'red' : is_normal === '偏低' ? 'blue' : '#505050' }}>{is_normal}</div>
                  <div style={{ flex: 2 }}>{item.unit_name}</div>
                  <div style={{ flex: 2 }}>{item.data_type === 1 ? '定性' : '定量'}</div>
                  <div style={{ flex: 3 }}>{reference}</div>
                  <div style={{ flex: 2 }}>
                    <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                      删除
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          {this.getStyle()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 10px 10px 10px' }}>
          <label>备注</label>
          <textarea
            style={{ resize: 'none', width: '100%', height: '100px', background: 'rgba(245, 248, 249, 1)', borderRadius: '4px', border: '1px solid #d8d8d8' }}
            value={data.remark || ''}
            onChange={e => {
              laboras[selIndex].remark = e.target.value
              this.setState({ laboras })
            }}
          />
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.save()}>保存</button>
            <button onClick={() => this.props.back2List()}>取消</button>
          </div>
        </div>
        {order_status === 30 || order_status === '30' ? (
          <div>
            <button
              style={{ float: 'right', marginRight: '20px' }}
              onClick={() => this.refs.printer.onPrint()}
            >
              打印报告
            </button>
            <Print ref='printer' lazyRender isIframe>
              {this.mrPrinter()}
              {/* <div>aaaaaa</div> */}
            </Print>
          </div>
        ) : (
          ''
        )}
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
    // const recordDetailDiv = {
    //   width: '100%',
    //   display: 'flex',
    //   flexDirection: 'row',
    //   fontSize: '17px',
    //   marginTop: '10px'
    // }
    // const recordDetailDivLable = {
    //   width: '120px',
    //   fontWeight: '500'
    // }
    const { selIndex, laboraDetails, laboras } = this.state
    let array = laboraDetails[selIndex]
    if (array === undefined) {
      array = []
    }
    let data = laboras[selIndex]
    console.log('triagePatient====', triagePatient, data, array)
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>检验报告单</div>
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
          <div style={patientInfoRowStyle}>
            <lable>标本种类：</lable>
            <div style={patientInfoRowDivStyle}>{data.laboratory_sample}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>病案号：</lable>
            <div style={patientInfoRowDivStyle}>{data.clinic_triage_patient_id}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>科室：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.department_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>备注：</lable>
            <div style={patientInfoRowDivStyle}>{data.remark || ''}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>初步诊断：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.diagnosis}</div>
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
}

const mapStateToProps = state => {
  return {
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    patient_record_data: state.laboratoryTriages.patient_record_data,
    patient_record_page_info: state.laboratoryTriages.patient_record_page_info,
    laboItemData: state.laboratoryItems.data,
    user: state.user.data
  }
}

export default connect(
  mapStateToProps,
  {
    queryMedicalRecord,
    LaboratoryTriageList,
    LaboratoryTriageDetail,
    LaboratoryTriageRecordCreate,
    LaboratoryTriagePatientRecordList,
    queryLaboratoryItemList
  }
)(LaboraDetailScreen)
