import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, getPatientByKeyword } from '../../../../ducks'

import { getAgeByBirthday, checkIdCard, checkPhoneNumber } from '../../../../utils'
import moment from 'moment'
import { provinces } from '../../../../config/provinces'
import { Select, Confirm, CustomSelect, DatePicker } from '../../../../components'

class RegistrationAddScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      keyword: '',
      patientInfo: {},
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      visit_date: moment()
        .add(1, 'day')
        .format('YYYYMMDD'),
      searchView: 0,
      candidatePatient: [],
      toSearch: false,
      isPhone: true,
      isIdCode: true
    }
  }

  componentWillMount() {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, limit: 100 })
  }

  // 保存新增登记
  async submit() {
    const { addTriagePatientsList, clinic_id, personnel_id } = this.props
    const {isPhone} = this.state
    let patientInfo = this.state.patientInfo
    patientInfo.clinic_id = clinic_id
    patientInfo.personnel_id = personnel_id
    if (!patientInfo.name) {
      return this.refs.myAlert.alert('提示', '请填写姓名', null, 'Danger')
    }
    if (!patientInfo.birthday) {
      return this.refs.myAlert.alert('提示', '请填写生日', null, 'Danger')
    } else {
      patientInfo.birthday = moment(patientInfo.birthday).format('YYYYMMDD')
    }
    if (patientInfo.sex * 1 !== 0 && patientInfo.sex * 1 !== 1) {
      return this.refs.myAlert.alert('提示', '请选择性别', null, 'Danger')
    }
    if (!patientInfo.phone) {
      return this.refs.myAlert.alert('提示', '请填写手机号', null, 'Danger')
    }
    if (!isPhone) {
      return this.refs.myAlert.alert('提示', '请填正确的手机号', null, 'Danger')
    }
    if (!patientInfo.visit_type) {
      return this.refs.myAlert.alert('提示', '请选择出诊类型', null, 'Danger')
    }
    // console.log('patientInfo=====', patientInfo)
    let error = await addTriagePatientsList({ patientInfo })
    if (error) {
      this.refs.myAlert.alert('提交失败', error, null, 'Danger')
    } else {
      Router.push('/treatment/registration/list')
    }
  }

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }

  async queryPatients(keyword) {
    const { getPatientByKeyword } = this.props
    getPatientByKeyword({ keyword })
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

  getDepartmentOptions() {
    const { departments } = this.props
    let options = []
    for (let { id, name } of departments) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  // 显示添加新增
  showAddNew() {
    if (this.state.pageType !== 1) return null
    let patient = this.state.patientInfo
    const patients = this.props.patients || []
    const {isPhone, isIdCode} = this.state
    // console.log('locale======', locale, zh_CH)
    return (
      <div className={'formList'}>
        <div className={'formListBox'} style={{ marginTop: '20px' }}>
          <ul>
            <li>
              <label htmlFor='patientName'>
                就诊人名称：<b style={{ color: 'red' }}> *</b>
              </label>
              <CustomSelect
                placeholder='就诊人姓名'
                controlStyle={{ marginTop: '17px' }}
                labelKey='name'
                withoutFitler={!false}
                options={patients}
                onInputChange={name => {
                  let newPatient = this.state.patientInfo
                  newPatient.name = name
                  this.setState({ patientInfo: newPatient })
                  this.queryPatients(name)
                }}
                onChange={(item) => {
                  let cities = []
                  for (let province of provinces) {
                    if (item.province === province.name) {
                      cities = province.city
                      break
                    }
                  }
                  let counties = []
                  for (let city of cities) {
                    if (item.city === city.name) {
                      counties = city.area
                      break
                    }
                  }
                  let birthday = moment(item.birthday).format('YYYY-MM-DD')
                  let age = getAgeByBirthday(birthday) || ''
                  if (checkPhoneNumber(item.phone)) {
                    this.setState({isPhone: true})
                  } else {
                    this.setState({isPhone: false})
                  }
                  this.setState({
                    toSearch: false,
                    patientInfo: { ...this.state.patientInfo, ...item, birthday, age },
                    searchView: 0,
                    province: item.province,
                    city: item.city,
                    county: item.district,
                    cities: cities,
                    counties: counties
                  })
                }}
                renderItem={(item, index) => {
                  return (
                    <div style={{ width: '470px', height: '60px', flexDirection: 'column', display: 'flex', justifyContent: 'center', paddingLeft: '15px' }} key={index}>
                      <div>{`${item.name}    ${item.sex === 1 ? '男' : '女'}   ${getAgeByBirthday(item.birthday)}`}</div>
                      <div style={{ marginTop: '5px' }}>{item.phone}</div>
                    </div>
                  )
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
                  this.setState({ patientInfo: newPatient })
                  this.setPatientInfo(e, 'cert_no')
                }}
                onBlur={e => {
                  let validate = checkIdCard(e.target.value)
                  this.setState({ isIdCode: validate.pass })
                }}
              />
              {isIdCode || patient.cert_no === '' ? '' : <div style={{color: 'red', fontSize: '10px'}}>身份证号格式不正确</div>}
            </li>
            <li style={{ width: '24%' }}>
              <label>
                生日：<b style={{ color: 'red' }}> *</b>
              </label>
              <div>
                <DatePicker
                  value={moment(moment(patient.birthday).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                  onChange={(date, str) => {
                    let newPatient = patient
                    if (date) {
                      newPatient.birthday = moment(date).format('YYYY-MM-DD')
                      console.log('newPatient.birthday====', newPatient.birthday)
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
              <input
                type='text'
                style={{ width: '120px' }}
                value={patient.age || ''}
                onChange={e => {
                  let newPatient = patient
                  newPatient.age = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
              />
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
                value={patient.phone}
                onChange={e => {
                  this.setPatientInfo(e, 'phone')
                }}
                onBlur={e => {
                  if (checkPhoneNumber(e.target.value)) {
                    this.setState({isPhone: true})
                  } else {
                    this.setState({isPhone: false})
                  }
                }}
              />
              {isPhone ? '' : <div style={{color: 'red', fontSize: '10px'}}>手机号码格式不正确</div>}
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
            <li>
              <label>接诊科室：</label>
              <div style={{ width: '100%', height: '40px', marginTop: '17px' }}>
                <Select
                  placeholder='选择科室'
                  options={this.getDepartmentOptions()}
                  onChange={({ value }) => {
                    let newPatient = patient
                    console.log('value ========== ', value)
                    newPatient.department_id = value
                    this.setState({ patientInfo: newPatient })
                  }}
                />
              </div>
            </li>
            <li>
              <label>
                就诊类型：<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input id='first' type='radio' name='type' value={1} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label htmlFor='first'>首诊</label>
                <input id='referral' type='radio' name='type' value={2} style={{ marginLeft: '15px' }} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label htmlFor='referral'>复诊</label>
                <input id='operate' type='radio' name='type' value={3} style={{ marginLeft: '15px' }} onChange={e => this.setPatientInfo(e, 'visit_type')} />
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
              <input type='text' value={patient.profession} onChange={e => this.setPatientInfo(e, 'profession')} />
            </li>
            <li>
              <label>备注：</label>
              <input type='text' onChange={e => this.setPatientInfo(e, 'remark')} />
            </li>
          </ul>
          <div style={{ float: 'left', width: '1000px', height: '60px' }}>
            <button className='saveBtn' onClick={() => this.submit()}>
              保存
            </button>
          </div>
        </div>
        <style>{`
          .formList {
            margin: 20px 66px 33px 66px;
          }
          .ant-input{
            height:40px;
          }
        `}</style>
        {this.style()}
      </div>
    )
  }
  style() {
    return (
      <style jsx='true'>{`
        .ant-input{
          height:40px;
        }
      `}</style>
    )
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}> + 新增登记</span>
          <span onClick={() => Router.push('/treatment/registration/list')}>登记列表</span>
        </div>
        {this.showAddNew()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id
  }
}
export default connect(mapStateToProps, {
  getPatientByCertNo,
  queryDepartmentList,
  addTriagePatientsList,
  getPatientByKeyword
})(RegistrationAddScreen)
