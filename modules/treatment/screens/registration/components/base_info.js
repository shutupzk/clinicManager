import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, DatePicker } from '../../../../../components'
import { TriagePatientDetail, GetHealthRecord } from '../../../../../ducks'
import { getAgeByBirthday, checkPhoneNumber, checkIdCard } from '../../../../../utils'
import moment from 'moment'
import { provinces } from '../../../../../config/provinces'

class BaseInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientInfo: {
        visit_type: 1,
        patient_channel_id: 1
      },
      isIdCode: true,
      isPhone: true,
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择'
    }
  }
  async componentWillMount() {
    const { clinic_triage_patient_id, TriagePatientDetail } = this.props
    let { patient } = await TriagePatientDetail({ clinic_triage_patient_id })
    if (patient) {
      const { province, city, district } = patient
      let { GetHealthRecord } = this.props
      let data = await GetHealthRecord({ clinic_triage_patient_id })
      const { pre_medical_record } = data
      this.setState({ patientInfo: patient, province, city, county: district, isIdCode: true, isPhone: true, preMedicalRecords: pre_medical_record })
    }
  }

  async submit() {}

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }

  getProvincesOptions() {
    let options = []
    for (let province of provinces) {
      options.push({
        value: province.name,
        label: province.name,
        cities: province.city
      })
    }
    return options
  }

  getCityOptions() {
    const { cities } = this.state
    let options = []
    for (let city of cities) {
      options.push({
        value: city.name,
        label: city.name,
        counties: city.area
      })
    }
    return options
  }

  getcountyOptions() {
    const { counties } = this.state
    let options = []
    for (let county of counties) {
      options.push({
        value: county,
        label: county
      })
    }
    return options
  }

  getChanelOptions() {
    let options = [
      {
        value: 1,
        label: '运营推荐'
      },
      {
        value: 2,
        label: '会员介绍'
      },
      {
        value: 3,
        label: '网络宣传'
      },
      {
        value: 4,
        label: '社区患者'
      }
    ]
    return options
  }

  getSelectValue(value, options) {
    for (let option of options) {
      if (option.value === value) return option
    }
    return null
  }

  render() {
    let patient = this.state.patientInfo
    let { preMedicalRecords = {} } = this.state
    console.log('preMedicalRecords======', preMedicalRecords)
    const { isPhone, isIdCode } = this.state
    return (
      <div className={'formList'}>
        <div className={'formListBox'} style={{ marginTop: '20px' }}>
          <ul>
            <li>
              <label htmlFor='patientName'>
                就诊人名称：<b style={{ color: 'red' }}> *</b>
              </label>
              <input
                type='text'
                value={patient.name || ''}
                onChange={e => {
                  patient.name = e.target.value
                  this.setState({ patientInfo: patient })
                }}
              />
            </li>
            <li>
              <label>身份证号码：</label>
              <input
                type='text'
                value={patient.cert_no || ''}
                onChange={e => {
                  let newPatient = patient
                  if (e.target.value.length > 14) {
                    newPatient.birthday = moment(e.target.value.substring(6, 14)).format('YYYY-MM-DD')
                  }
                  if (e.target.value.length > 16) {
                    newPatient.sex = e.target.value.substring(16, 17) % 2 === 0 ? '0' : '1'
                  }
                  // console.log('newPatient.birthday===', newPatient.birthday)
                  if (e.target.value.length > 14) {
                    newPatient.age = getAgeByBirthday(newPatient.birthday) === 'NaN岁' ? '未知' : getAgeByBirthday(newPatient.birthday)
                  }
                  let validate = checkIdCard(e.target.value)
                  this.setState({ patientInfo: newPatient, isIdCode: validate.pass })
                  this.setPatientInfo(e, 'cert_no')
                }}
              />
              {isIdCode || patient.cert_no === '' ? '' : <div style={{ color: 'red', fontSize: '10px' }}>身份证号格式不正确</div>}
            </li>
            <li style={{ width: '24%' }}>
              <label>
                生日：<b style={{ color: 'red' }}> *</b>
              </label>
              <DatePicker
                value={moment(moment(patient.birthday).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  let newPatient = patient
                  console.log('date======', date)
                  if (date) {
                    newPatient.birthday = moment(date).format('YYYY-MM-DD')
                    console.log('newPatient.birthday====', newPatient.birthday)
                    newPatient.age = getAgeByBirthday(newPatient.birthday) === 'NaN岁' ? '未知' : getAgeByBirthday(newPatient.birthday)
                    this.setState({ patientInfo: newPatient })
                  }
                }}
              />
            </li>
            <li style={{ width: '24%' }}>
              <label>
                年龄：<b style={{ color: 'red' }}> *</b>
              </label>
              <input readOnly type='text' style={{ width: '120px' }} value={getAgeByBirthday(patient.birthday)} />
            </li>
            <li style={{ width: '24%' }}>
              <label>
                性别：<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input id='man' type='radio' name='sex' value={'1'} checked={patient.sex + '' === '1'} onChange={e => this.setPatientInfo(e, 'sex')} />
                <label htmlFor='man'>男</label>
                <input id='woman' type='radio' name='sex' value={'0'} style={{ marginLeft: '15px' }} checked={patient.sex + '' === '0'} onChange={e => this.setPatientInfo(e, 'sex')} />
                <label htmlFor='woman'>女</label>
              </div>
            </li>
            <li style={{ width: '24%' }}>
              <label>
                手机号码：<b style={{ color: 'red' }}> *</b>
              </label>
              <input
                type='text'
                value={patient.phone || ''}
                onChange={e => {
                  if (checkPhoneNumber(e.target.value)) {
                    this.setState({ isPhone: true })
                  } else {
                    this.setState({ isPhone: false })
                  }
                  this.setPatientInfo(e, 'phone')
                }}
              />
              {isPhone ? '' : <div style={{ color: 'red', fontSize: '10px' }}>手机号码格式不正确</div>}
            </li>
            <li style={{ width: '100%' }}>
              <label>住址：</label>
              <div className='liDiv'>
                <div style={{ width: '100px', marginRight: '10px' }}>
                  <Select
                    placeholder='省'
                    value={{
                      value: this.state.province,
                      label: this.state.province,
                      cities: this.state.cities
                    }}
                    options={this.getProvincesOptions()}
                    onChange={({ value, cities }) => {
                      let newPatient = patient
                      newPatient.province = value
                      this.setState({ province: value, cities, patientInfo: newPatient })
                    }}
                  />
                </div>
                <div style={{ width: '100px', marginRight: '10px' }}>
                  <Select
                    placeholder='市'
                    value={{
                      value: this.state.city,
                      label: this.state.city,
                      counties: this.state.counties
                    }}
                    options={this.getCityOptions()}
                    onChange={({ value, counties }) => {
                      let newPatient = patient
                      newPatient.city = value
                      this.setState({ city: value, counties, patientInfo: newPatient })
                    }}
                  />
                </div>
                <div style={{ width: '100px', marginRight: '10px' }}>
                  <Select
                    value={{
                      value: this.state.county,
                      label: this.state.county
                    }}
                    placeholder='区'
                    options={this.getcountyOptions()}
                    onChange={({ value }) => {
                      let newPatient = patient
                      newPatient.district = value
                      this.setState({ county: value, patientInfo: newPatient })
                    }}
                  />
                </div>
                <input type='text' value={patient.address} defaultValue={''} onChange={e => this.setPatientInfo(e, 'address')} />
              </div>
            </li>
            <li style={{ width: '100%' }}>
              <label>
                就诊类型：<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input id='first' type='radio' name='type' value={1} checked={patient.visit_type === 1} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label htmlFor='first'>首诊</label>
                <input id='referral' type='radio' name='type' value={2} checked={patient.visit_type === 2} style={{ marginLeft: '15px' }} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label htmlFor='referral'>复诊</label>
                <input id='operate' type='radio' name='type' value={3} checked={patient.visit_type === 3} style={{ marginLeft: '15px' }} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label htmlFor='operate'>术后复诊</label>
              </div>
            </li>
            {/* <li style={{ width: '100%', cursor: 'pointer' }}>更多：完善健康档案（收起、展开）</li> */}
            <li>
              <label>会员等级：</label>
              <input type='text' onChange={e => this.setPatientInfo(e, 'member_card_number')} />
            </li>
            <li>
              <label>就诊人来源：</label>
              <div className='liDiv' style={{ height: '44px' }}>
                <div style={{ width: '100%' }}>
                  <Select
                    placeholder='请选择'
                    value={this.getSelectValue(patient.patient_channel_id, this.getChanelOptions())}
                    options={this.getChanelOptions()}
                    onChange={({ value }) => {
                      let newPatient = patient
                      newPatient.patient_channel_id = value
                      this.setState({ patientInfo: newPatient })
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <label>职业：</label>
              <input type='text' value={patient.profession || ''} onChange={e => this.setPatientInfo(e, 'profession')} />
            </li>
            <li>
              <label>备注：</label>
              <input type='text' value={patient.remark || ''} onChange={e => this.setPatientInfo(e, 'remark')} />
            </li>
          </ul>
          <ul>
            <li style={{ width: '48%' }}>
              <label>
                过敏史: <b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input
                  type='radio'
                  name='allergy'
                  style={{ width: 'auto', height: 'auto' }}
                  checked={preMedicalRecords.has_allergic_history === true}
                  value={!false}
                  onChange={e => {
                    this.setPreMedicalRecords(e, 'has_allergic_history')
                  }}
                />
                <label htmlFor='man'>是</label>
                <input
                  type='radio'
                  name='allergy'
                  checked={preMedicalRecords.has_allergic_history === false}
                  style={{ width: 'auto', height: 'auto' }}
                  value={false}
                  onChange={e => {
                    this.setPreMedicalRecords(e, 'has_allergic_history')
                  }}
                />
                <label htmlFor='woman'>否</label>
                <input
                  type='text'
                  placeholder={'对什么过敏'}
                  value={preMedicalRecords.allergic_history || ''}
                  onChange={e => {
                    this.setPreMedicalRecords(e, 'allergic_history')
                  }}
                />
              </div>
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
            <li>
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
            </li>
            <li>
              <label>生育史</label>
              <input
                type='text'
                style={{ width: '661px' }}
                value={preMedicalRecords.childbearing_history || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'childbearing_history')
                }}
              />
            </li>
          </ul>
          <div style={{ float: 'left', width: '1000px', height: '60px' }}>
            <button className='saveBtn' onClick={() => this.submit()}>
              保存
            </button>
          </div>
        </div>
        <style jsx='true'>{`
          .formList {
            margin: 20px 66px 33px 66px;
          }
        `}</style>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    triagePatients: state.triagePatients.data,
    clinic_id: state.user.data.clinic_id,
    clinic_triage_patient_id: state.triagePatients.selectId
  }
}
export default connect(
  mapStateToProps,
  {
    TriagePatientDetail,
    GetHealthRecord
  }
)(BaseInfoScreen)
