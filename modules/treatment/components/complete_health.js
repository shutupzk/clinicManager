import React, { Component } from 'react'
import { Select, Confirm } from '../../../components'

export default class CompleteHealth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      alertPageType: 1,
      bodySign: {}, // 体征
      preMedicalRecords: {}, // 诊前病历
      preDiagnosisRecords: {}, // 诊前预诊
      BMI: 0,
      clinic_triage_patient_id: ''
    }
  }

  show(clinic_triage_patient_id, bodySign = {}, preMedicalRecords = {}, preDiagnosisRecords = {}) {
    if (!clinic_triage_patient_id) return
    this.setState({ show: true, clinic_triage_patient_id, bodySign, preMedicalRecords, preDiagnosisRecords })
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
        value: 0,
        label: '未查'
      },
      {
        value: -1,
        label: '阴性'
      },
      {
        value: 1,
        label: '阳性'
      }
    ]
    return options
  }

  temperatureType() {
    let options = [
      {
        value: 1,
        label: '口温'
      },
      {
        value: 2,
        label: '耳温'
      },
      {
        value: 3,
        label: '额温'
      },
      {
        value: 4,
        label: '腋温'
      },
      {
        value: 5,
        label: '肛温'
      }
    ]
    return options
  }

  bloodSugarType() {
    let options = [
      {
        value: 1,
        label: '睡前'
      },
      {
        value: 2,
        label: '晚餐后'
      },
      {
        value: 3,
        label: '晚餐前'
      },
      {
        value: 4,
        label: '午餐后'
      },
      {
        value: 5,
        label: '午餐前'
      },
      {
        value: 6,
        label: '早餐后'
      },
      {
        value: 7,
        label: '早餐前'
      },
      {
        value: 8,
        label: '凌晨'
      },
      {
        value: 9,
        label: '空腹'
      }
    ]
    return options
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  painScore() {
    let options = []
    for (let i = 1; i < 11; i++) {
      options.push({
        value: i,
        label: i
      })
    }
    return options
  }

  // 设置体征数据
  setBodySign(type, e, key) {
    const { bodySign } = this.state
    if (type === 1) {
      bodySign[key] = e.target.value
    } else if (type === 2) {
      bodySign[key] = e.value
    } else if (type === 3) {
      bodySign[key] = e
    }
    this.setState({ bodySign })
  }

  // 保存体征数据
  async submitBodySign() {
    const { clinic_triage_patient_id, bodySign } = this.state
    const { completeBodySign } = this.props
    console.log('bodySign ============', bodySign)
    let error = await completeBodySign({ ...bodySign, clinic_triage_patient_id })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    }
    this.refs.myAlert.alert('保存成功')
  }

  // 显示体征表单
  showBodySigns() {
    let { bodySign } = this.state
    console.log('bodySign======', bodySign)
    return (
      <div>
        {/* <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div> */}
        <div className={'recordContent'}>
          <ul>
            <li>
              <label>体重（Kg）</label>
              <input
                type='number'
                value={bodySign.weight}
                placeholder='请填写体重'
                onChange={e => {
                  this.setBodySign(1, e, 'weight')
                  let bmi = ''
                  if (bodySign.height) {
                    let weight = e.target.value
                    bmi = (weight / (bodySign.height * bodySign.height / 10000)).toFixed(2)
                    this.setState({ BMI: bmi })
                  }
                  bodySign.bmi = bmi
                  this.setState({ bodySign })
                }}
              />
            </li>
            <li>
              <label>身高（cm）</label>
              <input
                type='number'
                value={bodySign.height}
                placeholder='请填写升高（m）'
                onChange={e => {
                  let bmi = ''
                  if (bodySign.weight) {
                    let height = e.target.value
                    bmi = (bodySign.weight / (height * height / 10000)).toFixed(2)
                    this.setState({ BMI: bmi })
                  }
                  bodySign.bmi = bmi
                  this.setBodySign(1, e, 'height')
                  this.setState({ bodySign })
                }}
              />
            </li>
            <li>
              <label>BMI</label>
              <input
                type='text'
                value={bodySign.bmi}
                readOnly
                onChange={e => {
                  this.setBodySign(1, e, 'bmi')
                }}
              />
            </li>
            <li style={{ width: '25%' }}>
              <label>血型</label>
              <div style={{ display: 'block', width: '115px' }}>
                <Select
                  placeholder='请选择...'
                  value={this.getSelectValue(bodySign.blood_type, this.bloodType())}
                  options={this.bloodType()}
                  height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'blood_type')
                  }}
                />
              </div>
            </li>
            <li style={{ width: '25%' }}>
              <label>RH血型</label>
              <div style={{ display: 'block', width: '115px' }}>
                <Select
                  placeholder='请选择...'
                  value={this.getSelectValue(bodySign.rh_blood_type, this.rhBloodType())}
                  options={this.rhBloodType()}
                  height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'rh_blood_type')
                  }}
                />
              </div>
            </li>
            <li>
              <label>体温（°C）</label>
              <div style={{ display: 'block', width: '115px', float: 'left', marginTop: '3px' }}>
                <Select
                  placeholder='请选择...'
                  value={this.getSelectValue(bodySign.temperature_type, this.temperatureType())}
                  options={this.temperatureType()}
                  height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'temperature_type')
                  }}
                />
              </div>
              <input
                type='text'
                value={bodySign.temperature}
                style={{ width: '200px', marginLeft: '10px' }}
                placeholder='请填写温度数值'
                onChange={e => {
                  this.setBodySign(1, e, 'temperature')
                }}
              />
            </li>
            <li>
              <label>呼吸(次/分钟)</label>
              <input
                type='number'
                value={bodySign.breathe || ''}
                placeholder='请填写呼吸次数'
                onChange={e => {
                  this.setBodySign(1, e, 'breathe')
                }}
              />
            </li>
            <li>
              <label>脉搏(次/分钟)</label>
              <input
                type='number'
                value={bodySign.pulse || ''}
                placeholder='请填写脉搏次数'
                onChange={e => {
                  this.setBodySign(1, e, 'pulse')
                }}
              />
            </li>
            <li>
              <label>血压(mmHg)</label>
              <input
                type='number'
                value={bodySign.systolic_blood_pressure || ''}
                style={{ width: '140px' }}
                placeholder='请填写血压收缩压'
                onChange={e => {
                  this.setBodySign(1, e, 'systolic_blood_pressure')
                }}
              />
              <input
                type='number'
                value={bodySign.diastolic_blood_pressure || ''}
                style={{ width: '140px', marginLeft: '10px' }}
                placeholder='请填写血压舒张压'
                onChange={e => {
                  this.setBodySign(1, e, 'diastolic_blood_pressure')
                }}
              />
            </li>
            <li>
              <label>血糖时间</label>
              {/* //时间控件 */}
              <input
                type='text'
                placeholder='YYYY-MM-DD HH:mm'
                value={bodySign.blood_sugar_time || ''}
                onChange={e => {
                  this.setBodySign(1, e, 'blood_sugar_time')
                }}
              />
            </li>
            <li>
              <label>血糖浓度(mmol/I)</label>
              <div style={{ display: 'block', width: '105px', float: 'left', marginTop: '3px' }}>
                <Select
                  height={39}
                  placeholder='请选择...'
                  value={this.getSelectValue(bodySign.blood_sugar_type, this.bloodSugarType())}
                  options={this.bloodSugarType()}
                  onChange={e => {
                    this.setBodySign(2, e, 'blood_sugar_type')
                  }}
                />
              </div>
              <input
                type='text'
                placeholder='请填写血糖浓度'
                value={bodySign.blood_sugar_concentration || ''}
                style={{ width: '105px', float: 'left', marginLeft: '10px' }}
                onChange={e => {
                  this.setBodySign(1, e, 'blood_sugar_concentration')
                }}
              />
            </li>
            <li style={{ width: '25%' }}>
              <label>左眼视力</label>
              <input
                type='text'
                style={{ width: '130px' }}
                value={bodySign.left_vision || ''}
                placeholder='请填写左眼视力'
                onChange={e => {
                  this.setBodySign(1, e, 'left_vision')
                }}
              />
            </li>
            <li style={{ width: '25%' }}>
              <label>右眼视力</label>
              <input
                type='text'
                style={{ width: '130px' }}
                value={bodySign.right_vision || ''}
                placeholder='请填写右眼视力'
                onChange={e => {
                  this.setBodySign(1, e, 'right_vision')
                }}
              />
            </li>
            <li>
              <label>氧饱和度(%)</label>
              <input
                type='text'
                value={bodySign.oxygen_saturation || ''}
                placeholder='请填写氧饱和度'
                onChange={e => {
                  this.setBodySign(1, e, 'oxygen_saturation')
                }}
              />
            </li>
            <li>
              <label>疼痛评分（1-10分）</label>
              <div style={{ display: 'block', width: '326px', float: 'left', marginTop: '3px' }}>
                <Select
                  placeholder='请选择...'
                  value={this.getSelectValue(bodySign.pain_score, this.painScore())}
                  options={this.painScore()}
                  height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'pain_score')
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'} style={{ width: '300px' }}>
          <button className='addBtn' onClick={() => this.submitBodySign()}>
            保存
          </button>
          <button className='addBtn' onClick={() => this.close()}>
            取消
          </button>
        </div>
      </div>
    )
  }

  // 设置诊前病历数据
  setPreMedicalRecords(e, key, type = 1) {
    const { preMedicalRecords } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    preMedicalRecords[key] = value
    this.setState({ preMedicalRecords })
  }

  // 保存诊前病历数据
  async submitPreMedicalRecords() {
    const { clinic_triage_patient_id, preMedicalRecords } = this.state
    const { completePreMedicalRecord } = this.props
    let error = await completePreMedicalRecord({ ...preMedicalRecords, clinic_triage_patient_id })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    }
    this.refs.myAlert.alert('保存成功')
  }

  // 显示诊前病历
  showPreMedicalRecords() {
    let { preMedicalRecords } = this.state
    const {selSex} = this.props
    console.log('preMedicalRecords======', preMedicalRecords)
    return (
      <div>
        {/* <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div> */}
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>过敏史</label>
              <label style={{ width: '150px', lineHeight: '30px', marginTop: '5px' }}>
                <input
                  type='radio'
                  name='allergy'
                  style={{ width: 'auto', height: 'auto' }}
                  checked={preMedicalRecords.has_allergic_history}
                  // value={!false}
                  onChange={e => {
                    console.log('过敏史=======', e)
                    this.setPreMedicalRecords(true, 'has_allergic_history', 2)
                  }}
                />是
              </label>
              <label style={{ width: '150px', lineHeight: '30px', marginTop: '5px' }}>
                <input
                  type='radio'
                  name='allergy'
                  checked={!preMedicalRecords.has_allergic_history}
                  style={{ width: 'auto', height: 'auto' }}
                  // value={false}
                  onChange={e => {
                    this.setPreMedicalRecords(false, 'has_allergic_history', 2)
                  }}
                />否
              </label>
              <input
                type='text'
                placeholder={'对什么过敏'}
                readOnly={!preMedicalRecords.has_allergic_history}
                value={preMedicalRecords.allergic_history || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'allergic_history')
                }}
              />
            </li>
            <li>
              <label>个人史</label>
              <textarea
                style={{ height: '63px' }}
                value={preMedicalRecords.personal_medical_history || ''}
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
                value={preMedicalRecords.family_medical_history || ''}
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
                value={preMedicalRecords.vaccination || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'vaccination')
                }}
              />
            </li>
            {selSex === 2 ? <li>
              <label>月经史</label>
              <input
                type='text'
                style={{ width: '170px' }}
                placeholder='月经初潮年龄'
                value={preMedicalRecords.menarche_age || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menarche_age')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '15px' }}
                placeholder='月经经期开始时间'
                value={preMedicalRecords.menstrual_period_start_day || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_period_start_day')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '5px' }}
                placeholder='月经经期结束时间'
                value={preMedicalRecords.menstrual_period_end_day || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_period_end_day')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '15px', marginTop: '10px' }}
                placeholder='月经周期开始时间'
                value={preMedicalRecords.menstrual_cycle_start_day || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_cycle_start_day')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '5px', marginTop: '10px' }}
                placeholder='月经周期结束时间'
                value={preMedicalRecords.menstrual_cycle_end_day || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_cycle_end_day')
                }}
              />
              <input
                type='text'
                style={{ width: '170px', marginTop: '10px' }}
                placeholder='末次月经时间'
                value={preMedicalRecords.menstrual_last_day || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_last_day')
                }}
              />
              <input
                type='text'
                style={{ width: '170px', marginLeft: '15px', marginTop: '10px' }}
                placeholder='孕周'
                value={preMedicalRecords.gestational_weeks || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'gestational_weeks')
                }}
              />
            </li> : ''}
            {selSex === 2 ? <li>
              <label>生育史</label>
              <input
                type='text'
                style={{ width: '661px' }}
                value={preMedicalRecords.childbearing_history || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'childbearing_history')
                }}
              />
            </li> : ''}
          </ul>
        </div>
        <div className={'bottomBtn'} style={{ width: '300px' }}>
          <button className='addBtn' onClick={() => this.submitPreMedicalRecords()}>
            保存
          </button>
          <button className='addBtn' onClick={() => this.close()}>
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
    this.setState({ preDiagnosisRecords })
  }

  // 保存诊前预诊
  async submitPreDiagnosisRecords() {
    const { clinic_triage_patient_id, preDiagnosisRecords } = this.state
    const { completePreDiagnosis } = this.props
    let error = await completePreDiagnosis({ ...preDiagnosisRecords, clinic_triage_patient_id })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    }
    this.refs.myAlert.alert('保存成功')
  }

  // 诊前预诊
  showPreDiagnosisRecords() {
    const { preDiagnosisRecords } = this.state
    return (
      <div>
        {/* <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div> */}
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>
                主诉<b style={{ color: 'red' }}>*</b>
              </label>
              <textarea
                style={{ height: '70px' }}
                value={preDiagnosisRecords.chief_complaint || ''}
                placeholder='请填写主述'
                onChange={e => {
                  this.setPreDiagnosisRecords(e, 'chief_complaint')
                }}
              />
            </li>
            <li>
              <label>现病史</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写现病史'
                value={preDiagnosisRecords.history_of_rresent_illness || ''}
                onChange={e => {
                  this.setPreDiagnosisRecords(e, 'history_of_rresent_illness')
                }}
              />
            </li>
            <li>
              <label>既往史</label>
              <textarea
                style={{ height: '70px' }}
                value={preDiagnosisRecords.history_of_past_illness || ''}
                placeholder='请填写既往史'
                onChange={e => {
                  this.setPreDiagnosisRecords(e, 'history_of_past_illness')
                }}
              />
            </li>
            <li>
              <label>体格检查</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写体格检查'
                value={preDiagnosisRecords.physical_examination || ''}
                onChange={e => {
                  this.setPreDiagnosisRecords(e, 'physical_examination')
                }}
              />
            </li>
            <li>
              <label>备注</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写备注'
                value={preDiagnosisRecords.remark || ''}
                onChange={e => {
                  this.setPreDiagnosisRecords(e, 'remark')
                }}
              />
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'} style={{ width: '300px' }}>
          <button className='addBtn' onClick={() => this.submitPreDiagnosisRecords()}>
            保存
          </button>
          <button className='addBtn' onClick={() => this.close()}>
            取消
          </button>
        </div>
      </div>
    )
  }

  close() {
    this.setState({ show: false })
  }

  render() {
    if (!this.state.show) return null
    return (
      <div className={'mask'}>
        <div className={'healthFile'}>
          <div className={'healthFile_top'}>
            <span>个人健康档案</span>
            <span onClick={() => this.close()}>×</span>
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
        <Confirm ref='myAlert' />
      </div>
    )
  }
}
