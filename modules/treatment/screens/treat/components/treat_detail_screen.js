import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm, PageCard } from '../../../../../components'
import { queryMedicalRecord, TreatmentTriageList, TreatmentTriageRecordCreate, TreatmentTriagePatientRecordList } from '../../../../../ducks'
import { getAgeByBirthday, formatMoney } from '../../../../../utils'
import moment from 'moment'
import Print from 'rc-print'

// 治疗
class TreatDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      treatments: [],
      laboraDetails: {},
      showTreatHistory: false,
      showRecord: false
    }
  }

  async componentDidMount() {
    let { queryMedicalRecord, triagePatient, TreatmentTriageList, order_status = '20' } = this.props
    const { clinic_triage_patient_id } = triagePatient
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    let treatments = await TreatmentTriageList({ clinic_triage_patient_id, order_status })
    this.setState({ record, treatments })
  }

  render() {
    const {order_status} = this.props
    return (
      <div className={'detail'}>
        <div className={'detail_title'}>
          <span>{order_status === '30' ? '已治疗' : '治疗中'}</span>
          <span onClick={() => this.props.back2List()}>{'<返回'}</span>
        </div>
        {this.renderDoctorInfo()}
        {this.renderPatientInfo()}
        {this.renderRecordInfo()}
        {this.renderItemTitle()}
        {this.renderContent()}
        {this.getStyle()}
        {this.renderTreatHistory()}
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
        <div className='doctorList' style={{ width: '1200px', left: 'unset', height: 'unset', minHeight: '500px' }}>
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
                <div style={{ flex: 1 }}>体格治疗</div>
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

  TreatmentTriagePatientRecordList({ offset = 0, limit = 10 }) {
    const { triagePatient, TreatmentTriagePatientRecordList } = this.props
    const { clinic_triage_patient_id } = triagePatient
    TreatmentTriagePatientRecordList({ clinic_triage_patient_id, offset, limit })
  }

  renderTreatHistory() {
    const { showTreatHistory } = this.state
    if (!showTreatHistory) return
    const { patient_record_data, patient_record_page_info, queryMedicalRecord, TreatmentTriageList } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1200px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>查看历史记录</span>
            <span onClick={() => this.setState({ showTreatHistory: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 2 }}>下单时间</div>
                <div style={{ flex: 2 }}>治疗诊所</div>
                <div style={{ flex: 4 }}>项目名称</div>
                <div style={{ flex: 1 }} />
              </li>
              {patient_record_data.map((item, index) => {
                const { order_time, clinic_treatment_name, clinic_name, clinic_triage_patient_id, department_name, order_doctor_name } = item
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 2 }}>{moment(order_time).format('YYYY-MM-DD HH:mm')}</div>
                    <div style={{ flex: 2 }}>{clinic_name}</div>
                    <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{clinic_treatment_name}</div>
                    <div
                      style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={async () => {
                        let record = await queryMedicalRecord(clinic_triage_patient_id)
                        let treatments = await TreatmentTriageList({ clinic_triage_patient_id, order_status: '30' })
                        this.setState({
                          showTreatHistoryDetail: true,
                          showTreatHistory: false,
                          historyDetail: { record, treatments, order_time, department_name, order_doctor_name }
                        })
                      }}
                    >
                      查看
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
              this.TreatmentTriagePatientRecordList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderHistoryDetail() {
    const { showTreatHistoryDetail, historyDetail } = this.state
    if (!showTreatHistoryDetail) return null
    let { record = {}, treatments = [] } = historyDetail
    const array = treatments
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1200px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>报告详情</span>
            <span onClick={() => this.setState({ showTreatHistoryDetail: false, showTreatHistory: true })}>x</span>
          </div>
          <div className={'detail'}>
            <div className={'filterBox'}>
              <div>
                <div>开单医生：{historyDetail.order_doctor_name}</div>
              </div>
              <div>
                <div>开单科室：{historyDetail.department_name}</div>
              </div>
              <div>
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
            <div className={'detailCenter'} />
            <div className='tableDIV' style={{ width: '100%', margin: '0 0 0 0' }}>
              <ul>
                <li>
                  <div style={{ flex: 1 }}>序号</div>
                  <div style={{ flex: 3 }}>项目</div>
                  <div style={{ flex: 2 }}>单位</div>
                  <div style={{ flex: 2 }}>单价</div>
                  <div style={{ flex: 2 }}>总次数</div>
                  <div style={{ flex: 3 }}>说明</div>
                  <div style={{ flex: 3 }}>备注</div>
                </li>
                {array.map((item, index) => {
                  return (
                    <li key={index}>
                      <div style={{ flex: 1 }}>{index + 1}</div>
                      <div style={{ flex: 3 }}>{item.clinic_treatment_name}</div>
                      <div style={{ flex: 2 }}>{item.unit_name}</div>
                      <div style={{ flex: 2 }}>{formatMoney(item.price)}</div>
                      <div style={{ flex: 2 }}>{item.total_times}</div>
                      <div style={{ flex: 3 }}>{item.illustration}</div>
                      <div style={{ flex: 3 }}>{item.remark}</div>
                    </li>
                  )
                })}
              </ul>
              {this.getStyle()}
            </div>
          </div>
        </div>
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
    return (
      <div className={'detailCenter'}>
        <div className={'childTopBar'} />
        <div className={'rightBtn'}>
          <button onClick={() => this.setState({ showRecord: true })}>查看病历</button>
          <button
            onClick={() => {
              this.setState({ showTreatHistory: true })
              this.TreatmentTriagePatientRecordList({})
            }}
          >
            治疗记录
          </button>
        </div>
      </div>
    )
  }

  async save() {
    const { TreatmentTriageRecordCreate, triagePatient, operation_id, TreatmentTriageList, order_status } = this.props
    const { treatments } = this.state
    const { clinic_triage_patient_id } = triagePatient
    let items = []
    for (let item of treatments) {
      let obj = {}
      if (item.checked) {
        for (let key in item) {
          if (item[key] === 0) {
            obj[key] = item[key] + ''
          } else {
            obj[key] = item[key] ? item[key] + '' : ''
          }
        }
        items.push(obj)
      }
    }
    console.log('items =======', items)
    let error = await TreatmentTriageRecordCreate({ clinic_triage_patient_id, operation_id, items: JSON.stringify(items) })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
      let treatments = await TreatmentTriageList({ clinic_triage_patient_id, order_status })
      this.setState({ treatments })
    }
  }

  renderContent() {
    const { treatments } = this.state
    const { order_status } = this.props
    let checked = false
    if (treatments && treatments.length) {
      checked = true
      for (let treatment of treatments) {
        if (!treatment.checked) {
          checked = false
          break
        }
      }
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 0 40px 0', background: 'rgba(255, 255, 255, 1)' }}>
        <div className='tableDIV' style={{ width: '100%', margin: '0 0 0 0' }}>
          <ul>
            <li>
              {order_status === '30' ? null : (
                <div style={{ flex: 1 }}>
                  <input
                    type='checkbox'
                    checked={checked}
                    onChange={e => {
                      let checked = e.target.checked
                      for (let treatment of treatments) {
                        if (checked) {
                          let times = 1
                          if (treatment.times) {
                            times = treatment.times * 1
                          }
                          treatment.times = times
                        }
                        treatment.checked = checked
                      }
                      this.setState({ treatments })
                    }}
                  />
                </div>
              )}

              <div style={{ flex: 1 }}>序号</div>
              <div style={{ flex: 3 }}>项目</div>
              <div style={{ flex: 2 }}>单位</div>
              <div style={{ flex: 2 }}>单价</div>
              { order_status === '30' ? null : <div style={{ flex: 2 }}>本次治疗次数</div> }
              <div style={{ flex: 2 }}>总次数</div>
              <div style={{ flex: 2 }}>剩余次数</div>
              <div style={{ flex: 3 }}>说明</div>
              <div style={{ flex: 3 }}>备注</div>
            </li>
            {treatments.map((item, index) => {
              const left = item.left_times * 1
              return (
                <li key={index}>
                  { order_status === '30' ? null : <div style={{ flex: 1 }}>
                    <input
                      type='checkbox'
                      checked={item.checked}
                      onChange={e => {
                        let checked = e.target.checked
                        treatments[index].checked = checked
                        this.setState({ treatments })
                      }}
                    />
                  </div>}
                  <div style={{ flex: 1 }}>{index + 1}</div>
                  <div style={{ flex: 3 }}>{item.clinic_treatment_name}</div>
                  <div style={{ flex: 2 }}>{item.unit_name}</div>
                  <div style={{ flex: 2 }}>{formatMoney(item.price)}</div>
                  { order_status === '30' ? null : <div style={{ flex: 2 }}>
                    <input
                      value={item.times || 0}
                      type='number'
                      min={0}
                      max={left}
                      onChange={e => {
                        if (e.target.value * 1 <= left) {
                          treatments[index].times = e.target.value
                          this.setState({ treatments })
                        }
                      }}
                    />
                  </div>}
                  <div style={{ flex: 2 }}>{item.total_times}</div>
                  <div style={{ flex: 2 }}>{left}</div>
                  <div style={{ flex: 3 }}>{item.illustration}</div>
                  <div style={{ flex: 3 }}>
                    <input
                      value={item.remark || ''}
                      type='text'
                      onChange={e => {
                        treatments[index].remark = e.target.value
                        this.setState({ treatments })
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          {this.getStyle()}
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.save()}>保存</button>
            <button>取消</button>
          </div>
        </div>
        <div>
          <button
            style={{float: 'right', marginRight: '20px'}}
            onClick={() => this.refs.printer.onPrint()}
          >打印治疗单</button>
          <Print ref='printer' lazyRender isIframe>
            {this.mrPrinter()}
            {/* <div>aaaaaa</div> */}
          </Print>
        </div>
      </div>
    )
  }
  mrPrinter() {
    let { user, triagePatient } = this.props
    console.log('triagePatient=====', triagePatient)
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
    const { treatments, record } = this.state
    console.log('treatments======', treatments)
    let amount = 0
    for (let item of treatments) {
      amount += item.price * item.total_times
    }
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
            <lable>病案号：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.clinic_triage_patient_id}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>科室：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.department_name}</div>
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
              <li style={{fontWeight: 'bold'}}>
                <div style={{ flex: 3 }}>项目名称</div>
                <div style={{ flex: 2 }}>单价（￥）</div>
                <div style={{ flex: 2 }}>单位</div>
                <div style={{ flex: 2 }}>次数</div>
                <div style={{ flex: 2 }}>金额（￥）</div>
                <div style={{ flex: 3, borderRight: '1px solid #d8d8d8' }}>说明</div>
              </li>
              {treatments.map((item, index) => {
                return (
                  <li key={index}>
                    <div style={{ flex: 3 }}>
                      <div style={{ width: '100%' }}>
                        {item.clinic_treatment_name}
                      </div>
                    </div>
                    <div style={{ flex: 2 }}>
                      <div style={{ width: '100%' }}>
                        {formatMoney(item.price)}
                      </div>
                    </div>
                    <div style={{ flex: 2 }}>{item.unit_name}</div>
                    <div style={{ flex: 2 }}>{item.total_times}</div>
                    <div style={{ flex: 2 }}>
                      <div style={{ width: '100%' }}>
                        {formatMoney(item.price * item.total_times)}
                      </div>
                    </div>
                    <div style={{ flex: 3 }}>{item.illustration}</div>
                  </li>
                )
              })}
            </ul>
            {this.getStyle()}
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>合计金额（￥）：{formatMoney(amount)}</lable>
            <div style={patientInfoRowDivStyle}>{}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>开单医生：</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.order_doctor_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>开单日期：</lable>
            <div style={patientInfoRowDivStyle}>{moment(triagePatient.order_time).format('YYYY-MM-DD')}</div>
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
            margin: 10px 0;
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
            min-height: 50px;
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
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    patient_record_data: state.treatmentTriages.patient_record_data,
    patient_record_page_info: state.treatmentTriages.patient_record_page_info,
    laboItemData: state.laboratoryItems.data
  }
}

export default connect(
  mapStateToProps,
  {
    queryMedicalRecord,
    TreatmentTriageList,
    TreatmentTriageRecordCreate,
    TreatmentTriagePatientRecordList
  }
)(TreatDetailScreen)
