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
    this.setState({ bodySign })
  }

  // 保存体征数据
  async submitBodySign() {
    const { clinic_triage_patient_id, bodySign } = this.state
    const { completeBodySign } = this.props
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
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
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
                    bmi = weight / (bodySign.height * bodySign.height / 10000)
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
                    bmi = bodySign.weight / (height * height / 10000)
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
                  options={this.temperatureType()}
                  height={39}
                  onChange={e => {
                    this.setBodySign(2, e, 'temperature_type')
                  }}
                />
              </div>
              <input
                type='text'
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
                style={{ width: '140px' }}
                placeholder='请填写血压收缩压'
                onChange={e => {
                  this.setBodySign(1, e, 'systolic_blood_pressure')
                }}
              />
              <input
                type='number'
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
              <input
                type='datetime-local'
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
              <div style={{ display: 'block', width: '105px', float: 'left', marginTop: '3px', marginLeft: '10px' }}>
                <Select
                  placeholder='请选择...'
                  options={this.bloodSugarType()}
                  onChange={e => {
                    this.setBodySign(2, e, 'diastolic_blood_pressure')
                  }}
                />
              </div>
              <input
                type='text'
                placeholder='请填写血糖浓度'
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
  setPreMedicalRecords(e, key) {
    const { preMedicalRecords } = this.state
    preMedicalRecords[key] = e.target.value
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
              <label style={{ width: '150px', lineHeight: '30px', marginTop: '5px' }}>
                <input
                  type='radio'
                  name='allergy'
                  style={{ width: 'auto', height: 'auto' }}
                  value={!false}
                  onChange={e => {
                    console.log('过敏史=======', e)
                    this.setPreMedicalRecords(e, 'has_allergic_history')
                  }}
                />是
              </label>
              <label style={{ width: '150px', lineHeight: '30px', marginTop: '5px' }}>
                <input
                  type='radio'
                  name='allergy'
                  style={{ width: 'auto', height: 'auto' }}
                  value={false}
                  onChange={e => {
                    this.setPreMedicalRecords(e, 'has_allergic_history')
                  }}
                />否
              </label>
              <input
                type='text'
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
              <input
                type='text'
                style={{ width: '170px' }}
                placeholder='月经初潮年龄'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menarche_age')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '15px' }}
                placeholder='月经经期开始时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_period_start_day')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '5px' }}
                placeholder='月经经期结束时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_period_end_day')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '15px', marginTop: '10px' }}
                placeholder='月经周期开始时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_cycle_start_day')
                }}
              />
              <input
                type='text'
                style={{ width: '120px', marginLeft: '5px', marginTop: '10px' }}
                placeholder='月经周期结束时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_cycle_end_day')
                }}
              />
              <input
                type='text'
                style={{ width: '170px', marginTop: '10px' }}
                placeholder='末次月经时间'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'menstrual_last_day')
                }}
              />
              <input
                type='text'
                style={{ width: '170px', marginLeft: '15px', marginTop: '10px' }}
                placeholder='孕周'
                onChange={e => {
                  this.setPreMedicalRecords(e, 'gestational_weeks')
                }}
              />
            </li>
            <li>
              <label>生育史</label>
              <input
                type='text'
                style={{ width: '661px' }}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'childbearing_history')
                }}
              />
            </li>
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
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写主述'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'chief_complaint')
                }}
              />
            </li>
            <li>
              <label>现病史</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写现病史'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'history_of_rresent_illness')
                }}
              />
            </li>
            <li>
              <label>既往史</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写既往史'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'history_of_past_illness')
                }}
              />
            </li>
            <li>
              <label>体格检查</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写体格检查'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'physical_examination')
                }}
              />
            </li>
            <li>
              <label>备注</label>
              <textarea
                style={{ height: '70px' }}
                placeholder='请填写备注'
                onChange={e => {
                  setPreDiagnosisRecords(e, 'remark')
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

  show(clinic_triage_patient_id) {
    if (!clinic_triage_patient_id) return
    this.setState({ show: true, clinic_triage_patient_id })
  }

  close () {
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
