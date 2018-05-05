import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import moment from 'moment'
import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList } from '../../../ducks'
import { getAgeByBirthday } from '../../../utils'
import { PageCard, Select } from '../../../components'

class TriageScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      alertType: 0,
      status: 10,
      alertPageType: 1,
      keyword1: '',
      keyword2: '',
      nowWeekNum: 1,
      dateTime: [
        { time: '08:00-09:00' },
        { time: '09:00-10:00' },
        { time: '10:00-11:00' },
        { time: '11:00-12:00' },
        { time: '13:00-14:00' },
        { time: '14:00-15:00' },
        { time: '15:00-16:00' },
        { time: '16:00-17:00' },
        { time: '17:00-18:00' }
      ],
      bodySign: {}, // 体征
      preMedicalRecords: {}, // 诊前病历
      preDiagnosisRecords: {}, // 诊前预诊
      BMI: 0,
      department_id: '',
      clinic_triage_patient_id: ''
    }
  }

  componentDidMount() {
    this.commonQueryList({})
    this.queryDepartmentList({ limit: 100 })
    this.queryDoctorsList({ limit: 100, personnel_type: 2 })
  }
  queryDoctorsList({ keyword, limit = 100, department_id }) {
    const { queryDoctorList, clinic_id } = this.props
    console.log('department_id ========', department_id)
    queryDoctorList({ clinic_id, keyword, limit: 10, personnel_type: 2, department_id })
  }
  queryDepartmentList({ keyword, limit }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit })
  }

  commonQueryList({ offset = 0, limit = 6, pageType }) {
    const { keyword1, keyword2 } = this.state
    pageType = pageType || this.state.pageType
    let keyword = keyword1
    let status_start = 10
    let status_end = 10
    if (pageType === 2) {
      keyword = keyword2
      status_start = 20
      status_end = 90
    }
    console.log('keyword, status_start, status_end, offset, limit ', keyword, status_start, status_end, offset, limit)
    this.quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit })
  }

  quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit }) {
    const { clinic_id, triagePatientsList } = this.props
    let params = { clinic_id, is_today: true, offset, limit, keyword }
    if (status_start && status_end) {
      params.status_start = status_start
      params.status_end = status_end
    }
    triagePatientsList(params)
  }

  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  // 完善健康档案
  showCompleteHealthFile() {
    this.setState({ alertType: 1 })
  }

  bloodType() {
    let options = [
      {
        value: 'UC',
        label: '未查'
      },
      {
        value: 'A',
        label: 'A'
      },
      {
        value: 'B',
        label: 'B'
      },
      {
        value: 'O',
        label: 'O'
      },
      {
        value: 'AB',
        label: 'AB'
      }
    ]
    return options
  }
  rhBloodType() {
    let options = [
      {
        value: 'UC',
        label: '未查'
      },
      {
        value: '0',
        label: '阴性'
      },
      {
        value: '1',
        label: '阳性'
      }
    ]
    return options
  }
  temperatureType() {
    let options = [
      {
        value: '1',
        label: '口温'
      },
      {
        value: '2',
        label: '耳温'
      },
      {
        value: '3',
        label: '额温'
      },
      {
        value: '4',
        label: '腋温'
      },
      {
        value: '5',
        label: '肛温'
      }
    ]
    return options
  }
  bloodSugarType() {
    let options = [
      {
        value: '1',
        label: '睡前'
      },
      {
        value: '2',
        label: '晚餐后'
      },
      {
        value: '3',
        label: '晚餐前'
      },
      {
        value: '4',
        label: '午餐后'
      },
      {
        value: '5',
        label: '午餐前'
      },
      {
        value: '6',
        label: '早餐后'
      },
      {
        value: '7',
        label: '早餐前'
      },
      {
        value: '8',
        label: '凌晨'
      },
      {
        value: '9',
        label: '空腹'
      }
    ]
    return options
  }
  painScore() {
    let options = [
      {
        value: '1',
        label: '1'
      },
      {
        value: '2',
        label: '2'
      },
      {
        value: '3',
        label: '3'
      },
      {
        value: '4',
        label: '4'
      },
      {
        value: '5',
        label: '5'
      },
      {
        value: '6',
        label: '6'
      },
      {
        value: '7',
        label: '7'
      },
      {
        value: '8',
        label: '8'
      },
      {
        value: '9',
        label: '9'
      },
      {
        value: '10',
        label: '10'
      }
    ]
    return options
  }
  // 设置体征数据
  setBodySign(type, e, key) {
    const { bodySign } = this.state
    if (type === 1) {
      bodySign[key] = e.target.value
    } else {
      bodySign[key] = e.value
    }
    this.setState({bodySign})
  }
  // 保存体征数据
  submitBodySign() {
    const { clinic_triage_patient_id, bodySign } = this.state
    bodySign.clinic_triage_patient_id = clinic_triage_patient_id
  }
  // 显示体征表单
  showBodySigns() {
    let { bodySign } = this.state
    console.log('bodySign======', bodySign)
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'recordContent'}>
          <ul>
            <li>
              <label>体重（Kg）</label>
              <input type='number'
                value={bodySign.weight}
                placeholder='请填写体重'
                onChange={e => {
                  this.setBodySign(1, e, 'weight')
                  let bmi = ''
                  if (bodySign.height) {
                    let weight = e.target.value
                    bmi = weight / ((bodySign.height * bodySign.height) / 10000)
                    this.setState({BMI: bmi})
                  }
                  bodySign.bmi = bmi
                  this.setState({bodySign})
                }}
              />
            </li>
            <li>
              <label>身高（cm）</label>
              <input type='number'
                value={bodySign.height}
                placeholder='请填写升高（m）'
                onChange={e => {
                  let bmi = ''
                  if (bodySign.weight) {
                    let height = e.target.value
                    bmi = bodySign.weight / ((height * height) / 10000)
                    this.setState({BMI: bmi})
                  }
                  bodySign.bmi = bmi
                  this.setBodySign(1, e, 'height')
                  this.setState({bodySign})
                }}
              />
            </li>
            <li>
              <label>BMI</label>
              <input type='text' value={bodySign.bmi} readOnly
                onChange={e => {
                  this.setBodySign(1, e, 'bmi')
                }}
              />
            </li>
            <li style={{ width: '25%' }}>
              <label>血型</label>
              <div style={{display: 'block', width: '115px'}}>
                <Select placeholder='请选择...' options={this.bloodType()} height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'blood_type')
                  }}
                />
              </div>
            </li>
            <li style={{ width: '25%' }}>
              <label>RH血型</label>
              <div style={{display: 'block', width: '115px'}}>
                <Select placeholder='请选择...' options={this.rhBloodType()} height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'rh_blood_type')
                  }}
                />
              </div>
            </li>
            <li>
              <label>体温（°C）</label>
              <div style={{display: 'block', width: '115px', float: 'left', marginTop: '3px'}}>
                <Select placeholder='请选择...' options={this.temperatureType()} height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'temperature_type')
                  }}
                />
              </div>
              <input type='text'
                style={{ width: '200px', marginLeft: '10px' }}
                placeholder='请填写温度数值'
                onChange={e => {
                  this.setBodySign(1, e, 'temperature')
                }}
              />
            </li>
            <li>
              <label>呼吸(次/分钟)</label>
              <input type='number'
                placeholder='请填写呼吸次数'
                onChange={e => {
                  this.setBodySign(1, e, 'breathe')
                }}
              />
            </li>
            <li>
              <label>脉搏(次/分钟)</label>
              <input type='number'
                placeholder='请填写脉搏次数'
                onChange={e => {
                  this.setBodySign(1, e, 'pulse')
                }}
              />
            </li>
            <li>
              <label>血压(mmHg)</label>
              <input type='number'
                style={{ width: '140px' }}
                placeholder='请填写血压收缩压'
                onChange={e => {
                  this.setBodySign(1, e, 'systolic_blood_pressure')
                }}
              />
              <input type='number'
                style={{ width: '140px', marginLeft: '10px' }}
                placeholder='请填写血压舒张压'
                onChange={e => {
                  this.setBodySign(1, e, 'diastolic_blood_pressure')
                }}
              />
            </li>
            <li>
              <label>血糖浓度(mmol/I)</label>
              {/* //时间控件 */}
              <input type='datetime-local'
                style={{ width: '95px', float: 'left' }}
                placeholder='请填写血糖时间'
                onChange={e => {
                  console.log('血糖时间======', e)
                  this.setBodySign(1, e, 'blood_sugar_time')
                }}
                onSelect={e => {
                  console.log('血糖时间  ======', e.target.value)
                }}
              />
              <div style={{display: 'block', width: '105px', float: 'left', marginTop: '3px', marginLeft: '10px'}}>
                <Select placeholder='请选择...' options={this.bloodSugarType()}
                  onChange={e => {
                    this.setBodySign(2, e, 'diastolic_blood_pressure')
                  }}
                />
              </div>
              <input type='text'
                placeholder='请填写血糖浓度'
                style={{ width: '105px', float: 'left', marginLeft: '10px' }}
                onChange={e => {
                  this.setBodySign(1, e, 'blood_sugar_concentration')
                }}
              />
            </li>
            <li style={{ width: '25%' }}>
              <label>左眼视力</label>
              <input type='text' style={{ width: '130px' }}
                placeholder='请填写左眼视力'
                onChange={e => {
                  this.setBodySign(1, e, 'left_vision')
                }}
              />
            </li>
            <li style={{ width: '25%' }}>
              <label>右眼视力</label>
              <input type='text' style={{ width: '130px' }}
                placeholder='请填写右眼视力'
                onChange={e => {
                  this.setBodySign(1, e, 'right_vision')
                }}
              />
            </li>
            <li>
              <label>氧饱和度(%)</label>
              <input type='text'
                placeholder='请填写氧饱和度'
                onChange={e => {
                  this.setBodySign(1, e, 'oxygen_saturation')
                }}
              />
            </li>
            <li>
              <label>疼痛评分（1-10分）</label>
              <div style={{display: 'block', width: '326px', float: 'left', marginTop: '3px'}}>
                <Select placeholder='请选择...' options={this.painScore()} height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'pain_score')
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'} style={{width: '300px'}}>
          <button className='addBtn' onClick={() => this.submitBodySign()}>
            保存
          </button>
          <button className='addBtn' onClick={() => {}}>
            取消
          </button>
        </div>
      </div>
    )
  }
  // 设置诊前病历数据
  setPreMedicalRecords(e, key) {
    const { preMedicalRecords } = this.state
    preMedicalRecords[key] = e.target.value
    this.setState({preMedicalRecords})
  }
  // 保存诊前病历数据
  submitPreMedicalRecords() {
    const { clinic_triage_patient_id, preMedicalRecords } = this.state
    preMedicalRecords.clinic_triage_patient_id = clinic_triage_patient_id
  }
  // 显示诊前病历
  showPreMedicalRecords() {
    let {preMedicalRecords} = this.state
    console.log('preMedicalRecords======', preMedicalRecords)
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>过敏史</label>
              <label
                style={{ width: '150px', lineHeight: '30px', marginTop: '5px' }}>
                <input type='radio' name='allergy'
                  style={{ width: 'auto', height: 'auto' }}
                  value={!false}
                  onChange={e => {
                    console.log('过敏史=======', e)
                    this.setPreMedicalRecords(e, 'has_allergic_history')
                  }}
                />是
              </label>
              <label
                style={{ width: '150px', lineHeight: '30px', marginTop: '5px' }}>
                <input type='radio' name='allergy'
                  style={{ width: 'auto', height: 'auto' }}
                  value={false}
                  onChange={e => {
                    this.setPreMedicalRecords(e, 'has_allergic_history')
                  }}
                />否
              </label>
              <input type='text'
                placeholder={'对什么过敏'}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'allergic_history')
                }}
              />
            </li>
            <li>
              <label>个人史</label>
              <textarea
                style={{ height: '63px' }}
                placeholder='请填写个人史'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'personal_medical_history')
                }}
              />
            </li>
            <li>
              <label>家族史</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写家族史'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'family_medical_history')
                }}
              />
            </li>
            <li>
              <label>接种疫苗</label>
              <textarea
                style={{ height: '35px' }}
                placeholder='请填写接种疫苗'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'vaccination')
                }}
              />
            </li>
            <li>
              <label>月经史</label>
              <input type='text'
                style={{ width: '170px' }}
                placeholder='月经初潮年龄'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menarche_age')
                }}
              />
              <input type='text'
                style={{ width: '120px', marginLeft: '15px' }}
                placeholder='月经经期开始时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_period_start_day')
                }}
              />
              <input type='text'
                style={{ width: '120px', marginLeft: '5px' }}
                placeholder='月经经期结束时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_period_end_day')
                }}
              />
              <input type='text'
                style={{ width: '120px', marginLeft: '15px', marginTop: '10px' }}
                placeholder='月经周期开始时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_cycle_start_day')
                }}
              />
              <input type='text'
                style={{ width: '120px', marginLeft: '5px', marginTop: '10px' }}
                placeholder='月经周期结束时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_cycle_end_day')
                }}
              />
              <input type='text'
                style={{ width: '170px', marginTop: '10px' }}
                placeholder='末次月经时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_last_day')
                }}
              />
              <input type='text'
                style={{ width: '170px', marginLeft: '15px', marginTop: '10px' }}
                placeholder='孕周'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'gestational_weeks')
                }}
              />
            </li>
            <li>
              <label>生育史</label>
              <input type='text'
                style={{ width: '661px' }}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'childbearing_history')
                }}
              />
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'} style={{width: '300px'}}>
          <button className='addBtn' onClick={() => this.submitPreMedicalRecords()}>
            保存
          </button>
          <button className='addBtn' onClick={() => {}}>
            取消
          </button>
        </div>
      </div>
    )
  }
  // 设置诊前预诊
  setPreDiagnosisRecords(e, key) {
    const { preDiagnosisRecords } = this.state
    preDiagnosisRecords[key] = e.target.value
    this.setState({preDiagnosisRecords})
  }
  // 保存诊前预诊
  submitPreDiagnosisRecords() {
    const { clinic_triage_patient_id, preDiagnosisRecords } = this.state
    preDiagnosisRecords.clinic_triage_patient_id = clinic_triage_patient_id
  }
  // 诊前预诊
  showPreDiagnosisRecords() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>
                主诉<b style={{ color: 'red' }}>*</b>
              </label>
              <textarea style={{ height: '70px' }}
                placeholder='请填写主述'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'chief_complaint')
                }}
              />
            </li>
            <li>
              <label>现病史</label>
              <textarea style={{ height: '70px' }}
                placeholder='请填写现病史'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'history_of_rresent_illness')
                }}
              />
            </li>
            <li>
              <label>既往史</label>
              <textarea style={{ height: '70px' }}
                placeholder='请填写既往史'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'history_of_past_illness')
                }}
              />
            </li>
            <li>
              <label>体格检查</label>
              <textarea style={{ height: '70px' }}
                placeholder='请填写体格检查'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'physical_examination')
                }}
              />
            </li>
            <li>
              <label>备注</label>
              <textarea style={{ height: '70px' }}
                placeholder='请填写备注'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'remark')
                }}
              />
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'} style={{width: '300px'}}>
          <button className='addBtn'
            onClick={() => this.submitPreDiagnosisRecords()}>
            保存
          </button>
          <button className='addBtn' onClick={() => {}}>
            取消
          </button>
        </div>
      </div>
    )
  }

  completeHealthFile() {
    return (
      <div className={'mask'}>
        <div className={'healthFile'}>
          <div className={'healthFile_top'}>
            <span>个人健康档案</span>
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'healthFile_menu'}>
            <span className={this.state.alertPageType === 1 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 1 })}>
              体征
            </span>
            <span className={this.state.alertPageType === 2 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 2 })}>
              诊前病历
            </span>
            <span className={this.state.alertPageType === 3 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 3 })}>
              诊前预诊
            </span>
          </div>
          {this.state.alertPageType === 1 ? this.showBodySigns() : ''}
          {this.state.alertPageType === 2 ? this.showPreMedicalRecords() : ''}
          {this.state.alertPageType === 3 ? this.showPreDiagnosisRecords() : ''}
        </div>
      </div>
    )
  }
  // 选择医生
  showChooseDoctor({department_id, keyword, offset = 0, limit = 6}) {
    const { triageDoctorsList, clinic_id } = this.props
    if (department_id === '-1') {
      department_id = null
    } else {
      department_id = department_id || this.state.department_id
    }
    const {clinic_triage_patient_id} = this.state
    triageDoctorsList({ clinic_id, department_id, offset, limit, keyword })
    this.setState({ alertType: 2, clinic_triage_patient_id })
  }

  getDepartmentOptions() {
    const { departments } = this.props
    let options = [{ value: '-1', label: '全部科室' }]
    for (let { id, name } of departments) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }
  getDoctorOptions() {
    const { selectDoctors } = this.props
    let options = [{ value: '-1', label: '全部医生' }]
    for (let { id, name } of selectDoctors) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  chooseDoctor() {
    // let doctors = this.getDoctorDatas()
    let { triageDoctors, doctor_page_info } = this.props
    console.log('triageDoctors=====', triageDoctors)
    const { triagePatient, triage_personnel_id } = this.props
    const { clinic_triage_patient_id } = this.state
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>选择医生</span>
            <div className={'topFilter'}>
              {/* <select placeholder='模板名称/模板类型'>
                <option>请选择科室</option>
                <option>儿科</option>
                <option>全科门诊</option>
                <option>中医科</option>
              </select> */}
              <div style={{width: '200px', float: 'left', margin: '30px 0 0 15px'}}>
                <Select
                  placeholder='请选择科室'
                  options={this.getDepartmentOptions()}
                  onChange={e => {
                    // alert(0)
                    let id = e.value
                    this.setState({department_id: id})
                    this.showChooseDoctor({ department_id: id })
                  }}
                />
              </div>
              <input type='text' placeholder={'医生名称'} />
              <button>查询</button>
            </div>
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              {triageDoctors.map((doctor, index) => {
                return (
                  <li
                    key={index}
                    onClick={async () => {
                      let doctor_visit_schedule_id = doctor.doctor_visit_schedule_id
                      let error = await triagePatient({ doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id })

                      if (error) {
                        return alert('分诊失败: ' + error)
                      } else {
                        return alert('分诊成功')
                      }
                    }}
                  >
                    <div>
                      <img src={'/static/login/u49.png'} />
                      <span>医生</span>
                      <span>{doctor.doctor_name}</span>
                    </div>
                    <div>
                      <span>科室名称：{doctor.department_name}</span>
                      <span>今日待接诊：{doctor.wait_total}人</span>
                      <span>今日已接诊：{doctor.triaged_total}人</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'pagination'} />
          <PageCard
            offset={doctor_page_info.offset}
            limit={doctor_page_info.limit}
            total={doctor_page_info.total}
            style={{width: '910px', float: 'none', display: 'table', margin: '40px auto'}}
            onItemClick={({ offset, limit }) => {
              this.commonQueryList({ offset, limit })
            }}
          />
        </div>
      </div>
    )
  }

  // 显示分诊列表
  showTriageList() {
    const { triagePatients, patient_page_info } = this.props
    const { pageType } = this.state
    if (pageType !== 1 && pageType !== 2) return null
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索科室' />
            <button>查询</button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.status === 20 ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.status === 20 ? '已分诊' : '待分诊'}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.doctor_name}</a>
                    </span>
                    <span>
                      <a>登记人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>登记时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span style={{ color: 'rgba(153,153,153,1)' }}>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span
                      onClick={() => {
                        this.showCompleteHealthFile()
                        let bodySign = {}
                        let preMedicalRecords = {}
                        let preDiagnosisRecords = {}
                        // 设置选择的病人ID
                        let clinic_triage_patient_id = patient.id
                        this.setState({clinic_triage_patient_id, bodySign, preMedicalRecords, preDiagnosisRecords})
                      }}
                    >完善健康档案</span>
                    <span
                      onClick={() => {
                        let clinic_triage_patient_id = patient.id
                        this.setState({clinic_triage_patient_id})
                        this.showChooseDoctor()
                      }}
                    >
                      {pageType === 1 ? '选择医生' : '换诊'}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <div className={'pagination'} /> */}
        <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            this.commonQueryList({ offset, limit })
          }}
        />
      </div>
    )
  }

  // 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
  }
  // 显示日历列表
  showCalendarList() {
    // const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let nowWeekNum = this.state.nowWeekNum
    const dateTime = this.state.dateTime
    return (
      <div className={'listContent'}>
        <div className={'calendarCotent'}>
          <div className={'calenderFilter'}>
            <div className={'filterCnter'}>
              <span style={{ flex: 3 }} onClick={() => this.setState({ nowWeekNum: nowWeekNum - 7 })}>
                {'上一周'}
              </span>
              <span style={{ flex: 1 }}>{'《'}</span>
              <span style={{ flex: 1 }}>{'<'}</span>
              <span style={{ flex: 11 }} onClick={() => this.setState({ nowWeekNum: 1 })}>
                本周（{moment()
                  .day(nowWeekNum)
                  .format('YYYY年MM月DD日')}至{moment()
                  .day(nowWeekNum + 6)
                  .format('MM月DD日')}）
              </span>
              <span style={{ flex: 1 }}>{'>'}</span>
              <span style={{ flex: 1 }}>{'》'}</span>
              <span style={{ flex: 3 }} onClick={() => this.setState({ nowWeekNum: nowWeekNum + 7 })}>
                下一周
              </span>
            </div>
          </div>
          <div className={'calenderBox'}>
            <div className={'calendarContent'}>
              <table>
                <thead>
                  <tr>
                    <td />
                    <td>
                      周一（{moment()
                        .day(nowWeekNum)
                        .format('MM-DD')}）
                    </td>
                    <td>
                      周二（{moment()
                        .day(nowWeekNum + 1)
                        .format('MM-DD')}）
                    </td>
                    <td>
                      周三（{moment()
                        .day(nowWeekNum + 2)
                        .format('MM-DD')}）
                    </td>
                    <td>
                      周四（{moment()
                        .day(nowWeekNum + 3)
                        .format('MM-DD')}）
                    </td>
                    <td>
                      周五（{moment()
                        .day(nowWeekNum + 4)
                        .format('MM-DD')}）
                    </td>
                    <td>
                      周六（{moment()
                        .day(nowWeekNum + 5)
                        .format('MM-DD')}）
                    </td>
                    <td>
                      周日（{moment()
                        .day(nowWeekNum + 6)
                        .format('MM-DD')}）
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>上午</td>
                    <td>1人</td>
                    <td>2人</td>
                    <td>3人</td>
                    <td>4人</td>
                    <td>5人</td>
                    <td>6人</td>
                    <td>7人</td>
                  </tr>
                  <tr>
                    <td>下午</td>
                    <td>1人</td>
                    <td>2人</td>
                    <td>3人</td>
                    <td>4人</td>
                    <td>5人</td>
                    <td>6人</td>
                    <td>7人</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // 显示就诊人列表
  showPatientList() {
    // const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            <li key={1}>
              <div className={'itemTop'}>
                <span>龙超</span>
                <span>男</span>
                <span>18岁</span>
                <span style={{ color: '#F24A01', border: '1px solid #F24A01' }}>已分诊</span>
              </div>
              <div className={'itemCenter'}>
                <span>
                  <a>门诊ID：</a>
                  <a>1515151515</a>
                </span>
                <span>
                  <a>接诊科室：</a>
                  <a>骨科</a>
                </span>
                <span>
                  <a>接诊医生：</a>
                  <a>关云长</a>
                </span>
                <span>
                  <a>登记人员：</a>
                  <a>扁鹊</a>
                </span>
                <span>
                  <a>登记时间：</a>
                  <a>{moment('20180505').format('YYYY-MM-DD HH:mm:ss')}</a>
                </span>
                <span style={{ color: 'rgba(153,153,153,1)' }}>
                  <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                  <a style={{ color: 'rgba(153,153,153,1)' }}>{moment('20180505').format('YYYY-MM-DD HH:mm:ss')}</a>
                </span>
              </div>
              <div className={'itemBottom'}>
                <span
                  onClick={() => {}}
                >修改</span>
                <span
                  onClick={() => {}}
                >取消</span>
              </div>
            </li>
            {/* {triagePatients.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.status === 20 ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.status === 20 ? '已分诊' : '待分诊'}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.doctor_name}</a>
                    </span>
                    <span>
                      <a>登记人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>登记时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span style={{ color: 'rgba(153,153,153,1)' }}>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span
                      onClick={() => {
                        this.showCompleteHealthFile()
                        let bodySign = {}
                        let preMedicalRecords = {}
                        let preDiagnosisRecords = {}
                        // 设置选择的病人ID
                        let clinic_triage_patient_id = patient.id
                        this.setState({clinic_triage_patient_id, bodySign, preMedicalRecords, preDiagnosisRecords})
                      }}
                    >完善健康档案</span>
                    <span
                      onClick={() => {
                        let clinic_triage_patient_id = patient.id
                        this.setState({clinic_triage_patient_id})
                        this.showChooseDoctor()
                      }}
                    >
                      {pageType === 1 ? '选择医生' : '换诊'}</span>
                  </div>
                </li>
              )
            })} */}
          </ul>
        </div>
        {/* <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            this.commonQueryList({ offset, limit })
          }}
        /> */}
      </div>
    )
  }

  // 新增预约
  addNewReservation() {
    Router.push('/treatment/reservation_add')
  }
  showExtraFilter() {
    return (
      <div className={'filterBox'}>
        <div className={'boxLeft'}>
          <input type='date' placeholder='预约日期'
            style={{ margin: '14px 0 0 15px' }}
          />
          <input type='text'
            style={{ margin: '14px 15px 0 15px' }}
            placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码'
          />
          {/* <input type='text' placeholder='搜索科室' /> */}
          {/* <input type='text' placeholder='搜索科室' /> */}
          {/* <input type='text' placeholder='搜索医生' /> */}
          {/* <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' /> */}
          <button >查询</button>
        </div>
      </div>
    )
  }
  // 预约管理
  showReservation() {
    const {showType} = this.state
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <label style={{marginLeft: '15px'}}>
              <input type='radio'
                name={'listType'}
                checked={showType === 1}
                onChange={() => this.changeShowType({ type: 1 })}
              /> 日历列表
            </label>
            <label style={{marginLeft: '15px'}}>
              <input type='radio'
                name={'listType'}
                checked={showType === 2}
                onChange={() => this.changeShowType({ type: 2 })}
              /> 就诊人列表
            </label>
            <div style={{width: '150px', float: 'left', margin: '14px 0 0 15px'}}>
              <Select
                placeholder='搜索科室'
                options={this.getDepartmentOptions()}
                height={32}
                onChange={e => {
                  let id = e.value
                  console.log('id ========', id)
                  this.setState({ department_id: id })
                  this.queryDoctorsList({ department_id: id, limit: 100 })
                  // this.queryListData({ department_id: id })
                }}
              />
            </div>
            <div style={{width: '150px', float: 'left', margin: '14px 0 0 15px'}}>
              <Select
                placeholder='搜索医生'
                options={this.getDoctorOptions()}
                height={32}
              />
            </div>
          </div>
          <div className={'boxRight'}>
            <button onClick={() => this.addNewReservation()}>新增预约</button>
          </div>
        </div>
        {showType === 2 ? this.showExtraFilter() : '' }
        {/* <div className={'regisListTop'}>
          <button className={'bigBtn'} onClick={() => this.addNewReservation()}>
            新增预约
          </button>
          <div className={'radioDiv'}>
            <label>
              <input type='radio' checked={this.state.showType === 1 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 1 })} />
              日历列表
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input type='radio' checked={this.state.showType === 2 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 2 })} />
              就诊人列表
            </label>
          </div>
          <input className={'searchbox'} style={{ marginLeft: '25px' }} type='text' placeholder='搜索科室' />
          <input className={'searchbox'} style={{ marginLeft: '15px' }} type='text' placeholder='搜索医生' />
          <input type='text' style={{ marginLeft: '15px' }} placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <button className={'searchBtn'}>查询</button>
        </div> */}

        {this.state.showType === 1 ? this.showCalendarList() : ''}
        {this.state.showType === 2 ? this.showPatientList() : ''}
        <div className={'pagination'} />
        <style jsx>
          {`
            .boxLeft label {
              float: left;
              height: 60px;
              line-height: 60px;
              margin-left: 30px;
            }
            input[type='radio'] {
              width: 14px;
              height: 14px;
              margin: 23px 5px;
              clear: both;
              vertical-align: middle;
            }
            // input[type='text'] {
            //   width: 152px;
            //   margin: 16px 0 16px 17px;
            // }
            .boxLeft button {
              margin: 16px 0 16px 17px;
            }
          `}
        </style>
      </div>
    )
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 1, keyword2: '' })
              this.commonQueryList({ pageType: 1 })
            }}
          >
            分诊
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2, keyword1: '' })
              this.commonQueryList({ pageType: 2 })
            }}
          >
            分诊记录
          </span>
          <span
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 3, department_id: '' })
              this.queryDoctorsList({ department_id: '', limit: 100 })
            }}
          >
            预约管理
          </span>
        </div>
        {this.showTriageList()}
        {this.state.pageType === 3 ? this.showReservation() : ''}
        {this.state.alertType === 1 ? this.completeHealthFile() : ''}
        {this.state.alertType === 2 ? this.chooseDoctor() : ''}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    departments: state.departments.data,
    doctor_page_info: state.triageDoctors.page_info,
    selectDoctors: state.doctors.data
  }
}

export default connect(mapStateToProps, { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList })(TriageScreen)
