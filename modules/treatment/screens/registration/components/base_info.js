import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, DatePicker, Confirm } from '../../../../../components'
import { PatientGetByID, PersonalMedicalRecord, PatientUpdate, PersonalMedicalRecordUpsert } from '../../../../../ducks'
import { getAgeByBirthday, checkPhoneNumber, checkIdCard } from '../../../../../utils'
import moment from 'moment'
import { provinces } from '../../../../../config/provinces'

class BaseInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientInfo: {
        patient_channel_id: 1
      },
      preMedicalRecords: {},
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
    const { patient_id, PatientGetByID } = this.props
    let patient = await PatientGetByID({ patient_id })
    if (patient) {
      const { province, city, district } = patient
      let { PersonalMedicalRecord } = this.props
      let pre_medical_record = await PersonalMedicalRecord({ patient_id })
      this.setState({ patientInfo: patient, province, city, county: district, isIdCode: true, isPhone: true, preMedicalRecords: pre_medical_record })
    }
  }

  async submit() {
    const { PatientUpdate, PersonalMedicalRecordUpsert, patient_id } = this.props
    const { patientInfo, preMedicalRecords } = this.state
    let error = await PatientUpdate({ ...patientInfo, patient_id })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    }
    error = await PersonalMedicalRecordUpsert({ ...preMedicalRecords, patient_id })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    }
    this.refs.myAlert.alert('保存成功')
  }

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

  setPreMedicalRecords(e, key) {
    const { preMedicalRecords } = this.state
    this.setState({ preMedicalRecords: { ...preMedicalRecords, [key]: e.target.value } })
  }

  render() {
    let patient = this.state.patientInfo
    let { preMedicalRecords = {} } = this.state
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
              <div>
                <DatePicker
                  style={{ width: '120px', marginTop: '17px' }}
                  value={moment(moment(patient.birthday).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                  onChange={(date, str) => {
                    let newPatient = patient
                    if (date) {
                      newPatient.birthday = moment(date).format('YYYY-MM-DD')
                      newPatient.age = getAgeByBirthday(newPatient.birthday) === 'NaN岁' ? '未知' : getAgeByBirthday(newPatient.birthday)
                      this.setState({ patientInfo: newPatient })
                    }
                  }}
                />
              </div>
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
            <li style={{ width: '99%' }}>
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
                <input type='text' value={patient.address || ''} defaultValue={''} onChange={e => this.setPatientInfo(e, 'address')} />
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
        </div>
        <div className={'formListBox'} style={{ marginTop: '40px', marginBottom: '40px' }}>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#d8d8d8' }} />
          <ul>
            <li style={{ width: '20%' }}>
              <label>
                过敏史: <b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input
                  type='radio'
                  name='allergy'
                  checked={preMedicalRecords.has_allergic_history === true}
                  value={!false}
                  onChange={e => {
                    this.setState({ preMedicalRecords: { ...preMedicalRecords, has_allergic_history: true } })
                  }}
                />
                <label htmlFor='man'>是</label>
                <input
                  type='radio'
                  name='allergy'
                  checked={preMedicalRecords.has_allergic_history === false}
                  style={{ marginLeft: '50px' }}
                  value={false}
                  onChange={e => {
                    this.setState({ preMedicalRecords: { ...preMedicalRecords, has_allergic_history: false } })
                  }}
                />
                <label htmlFor='woman'>否</label>
              </div>
            </li>
            <li style={{ width: '78%' }}>
              <label />
              <div className='liDiv'>
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
            <li style={{ width: '99%' }}>
              <label>个人史</label>
              <textarea
                value={preMedicalRecords.personal_medical_history || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'personal_medical_history')
                }}
              />
            </li>
            <li style={{ width: '99%' }}>
              <label>家族史</label>
              <textarea
                value={preMedicalRecords.family_medical_history || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'family_medical_history')
                }}
              />
            </li>
            <li style={{ width: '99%' }}>
              <label>接种疫苗</label>
              <textarea
                value={preMedicalRecords.immunizations || ''}
                onChange={e => {
                  this.setPreMedicalRecords(e, 'immunizations')
                }}
              />
            </li>
          </ul>
          {patient.sex * 1 === 1 ? null : (
            <ul>
              <li style={{ width: '32.5%' }}>
                <label>月经史</label>
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '170px' }}
                    placeholder='月经初潮年龄'
                    value={preMedicalRecords.menarche_age || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'menarche_age')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '32.5%' }}>
                <label />
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '120px', marginLeft: '15px' }}
                    placeholder='月经经期开始时间'
                    value={preMedicalRecords.menstrual_period_start_day || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'menstrual_period_start_day')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '32%' }}>
                <label />
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '120px', marginLeft: '5px' }}
                    placeholder='月经经期结束时间'
                    value={preMedicalRecords.menstrual_period_end_day || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'menstrual_period_end_day')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '32.5%' }}>
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '120px' }}
                    placeholder='月经周期开始时间'
                    value={preMedicalRecords.menstrual_cycle_start_day || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'menstrual_cycle_start_day')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '32%' }}>
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '120px', marginLeft: '15px' }}
                    placeholder='月经周期结束时间'
                    value={preMedicalRecords.menstrual_cycle_end_day || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'menstrual_cycle_end_day')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '32.5%' }}>
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '170px' }}
                    placeholder='末次月经时间'
                    value={preMedicalRecords.menstrual_last_day || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'menstrual_last_day')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '32%' }}>
                <div className='liDiv'>
                  <input
                    type='text'
                    style={{ width: '170px' }}
                    placeholder='孕周'
                    value={preMedicalRecords.gestational_weeks || ''}
                    onChange={e => {
                      this.setPreMedicalRecords(e, 'gestational_weeks')
                    }}
                  />
                </div>
              </li>
              <li style={{ width: '100%' }}>
                <label>生育史</label>
                <textarea
                  value={preMedicalRecords.childbearing_history || ''}
                  onChange={e => {
                    this.setPreMedicalRecords(e, 'childbearing_history')
                  }}
                />
              </li>
            </ul>
          )}
        </div>
        <div style={{ float: 'left', width: '1000px', height: '60px' }}>
          <button className='saveBtn' onClick={() => this.submit()}>
            保存
          </button>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  style() {
    return (
      <style jsx='true'>{`
        .ant-input{
          height:40px;
        }
        .formList {
          margin: 20px 66px 33px 66px;
        }
        textarea {
          width: 100%;
          height: 70px;
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          resize: none;
          margin-top: 10px;
          border: 1px solid #d8d8d8;
        }
      `}</style>
    )
  }
}
const mapStateToProps = state => {
  console.log('state.patients ======== ', state.patients)
  return {
    patients: state.patients.data,
    triagePatients: state.triagePatients.data,
    clinic_id: state.user.data.clinic_id,
    patient_id: state.patients.selectId
  }
}
export default connect(
  mapStateToProps,
  {
    PatientGetByID,
    PersonalMedicalRecord,
    PatientUpdate,
    PersonalMedicalRecordUpsert
  }
)(BaseInfoScreen)
