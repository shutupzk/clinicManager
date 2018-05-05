import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { addAppointment, queryScheduleDepartments, queryScheduleDoctors, getPatientByKeyword, querySchedules } from '../../../ducks'
import { provinces } from '../../../config/provinces'
import moment from 'moment'
import { getAgeByBirthday } from '../../../utils'
import { Select, Confirm } from '../../../components'

class AddReservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      patientInfo: {},
      visit_date: moment()
        .add(1, 'day')
        .format('YYYYMMDD'),
      searchView: 0
    }
  }

  componentWillMount() {
    const { queryScheduleDepartments, clinic_id } = this.props
    queryScheduleDepartments({ clinic_id })
  }

  async queryPatients(keyword) {
    const { getPatientByKeyword } = this.props
    getPatientByKeyword({ keyword })
  }

  async querySchedules({ personnel_id, department_id }) {
    if (!personnel_id || !department_id) return
    const { clinic_id, querySchedules } = this.props
    querySchedules({
      clinic_id,
      personnel_id,
      department_id,
      start_date: moment()
        .add(1, 'day')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(30, 'day')
        .format('YYYY-MM-DD')
    })
  }

  checkSelectDate(visit_date) {
    visit_date = moment(visit_date).format('YYYY-MM-DD')
    let patient = this.state.patientInfo
    const { personnel_id, department_id } = patient
    let { schedules } = this.props
    if (!schedules || !schedules.length) {
      return this.refs.myAlert.alert('提示', '号源不存在，请重新选择科室，医生，日期')
    }
    let has = false
    for (let schedule of schedules) {
      if (moment(schedule.visit_date).format('YYYY-MM-DD') === visit_date && schedule.personnel_id === personnel_id && schedule.department_id === department_id) {
        patient.doctor_visit_schedule_id = schedule.id
        patient.visit_date = schedule.visit_date
        this.setState({ patientInfo: patient })
        has = true
        break
      }
    }
    if (!has) {
      return this.refs.myAlert.alert('提示', '号源不存在，请重新选择科室，医生，日期')
    }
  }

  searchView() {
    const patients = this.props.patients || []
    return (
      <div
        className={'researchView'}
        onMouseOver={e => {
          this.setState({ toSearch: false })
        }}
        onMouseLeave={e => {
          this.setState({ toSearch: true })
        }}
      >
        <span>请选择患者或继续新增</span>
        <ul>
          {patients.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
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

                  this.setState({
                    toSearch: false,
                    patientInfo: { ...this.state.patientInfo, ...item },
                    searchView: 0,
                    province: item.province,
                    city: item.city,
                    county: item.district,
                    cities: cities,
                    counties: counties
                  })
                }}
              >
                <img src={'/static/login/u49.png'} />
                <div className={'leftInfo'}>
                  <div>
                    {item.name} {item.sex === 1 ? '男' : '女'} {getAgeByBirthday(item.birthday)}
                  </div>
                  <div>{item.phone}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  async submit() {
    const { addAppointment, clinic_id } = this.props
    const { patientInfo } = this.state
    this.refs.myAlert.confirm('确认提示', '确认预约？', 'Success', async () => {
      let error = await addAppointment({ ...patientInfo, clinic_id })
      if (error) {
        return this.refs.myAlert.alert('预约失败', error)
      }
      return this.refs.myAlert.alert('预约成功')
    })
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

  getDepartmentOptions() {
    const { departments } = this.props
    let options = []
    for (let { department_id, name } of departments) {
      options.push({
        value: department_id,
        label: name
      })
    }
    return options
  }

  getDoctorOptions() {
    const { doctors } = this.props
    let options = []
    for (let { personnel_id, name } of doctors) {
      options.push({
        value: personnel_id,
        label: name
      })
    }
    return options
  }

  showBaseInfo() {
    let patient = this.state.patientInfo
    return (
      <div style={{ display: 'flex', margin: '31px 20px 63px 66px', backgroundColor: '#FFFFFF', height: 'auto', flexDirection: 'column', padding: '31px 47px 31px 47px' }}>
        <div style={{ width: '100%' }}>
          <label className='titleLabel'>新增预约</label>
        </div>
        <div style={{ height: '1px', width: '100%', backgroundColor: `rgba(238,238,238,1)`, marginTop: '21px' }} />
        <div className='formDiv'>
          <ul style={{ width: '100%' }}>
            <li style={{ width: '48%' }}>
              <label htmlFor='patientName'>
                就诊人名称：<b style={{ color: 'red' }}> *</b>
              </label>
              <input
                type='text'
                value={patient.name}
                onChange={e => {
                  let newPatient = this.state.patientInfo
                  newPatient.name = e.target.value
                  this.setState({ patientInfo: newPatient, searchView: 1 })
                  this.queryPatients(e.target.value)
                }}
                onFocus={e => {
                  this.setState({ toSearch: true })
                }}
                onBlur={e => {
                  if (this.state.toSearch && this.state.searchView === 1) {
                    this.setState({ searchView: 0 })
                  }
                }}
              />
              {this.state.searchView === 1 ? this.searchView() : ''}
            </li>
            <li style={{ width: '48%', marginLeft: '3.5%' }}>
              <label>身份证号码：</label>
              <input
                type='text'
                value={patient.cert_no}
                onChange={e => {
                  let newPatient = patient
                  newPatient.birthday = e.target.value.substring(6, 14)
                  this.setState({ patientInfo: newPatient })
                  this.setPatientInfo(e, 'cert_no')
                }}
              />
            </li>
            <li style={{ width: '24%' }}>
              <label>
                生日：<b style={{ color: 'red' }}> *</b>
              </label>
              <input
                type='date'
                style={{ width: '120px' }}
                value={moment(patient.birthday).format('YYYY-MM-DD')}
                onChange={e => {
                  let newPatient = patient
                  newPatient.birthday = moment(e.target.value).format('YYYYMMDD')
                  this.setState({ patientInfo: newPatient })
                }}
              />
            </li>
            <li style={{ width: '24%' }}>
              <label>
                性别：<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='centerItems'>
                <div style={{ flex: 1, height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <input id='woman' type='radio' name='sex' value={'0'} style={{ marginLeft: '15px' }} checked={patient.sex + '' === '0'} onChange={e => this.setPatientInfo(e, 'sex')} />
                  <label style={{ marginLeft: '11px' }} htmlFor='woman'>
                    女
                  </label>
                </div>
                <div style={{ flex: 1, height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <input id='man' type='radio' name='sex' value={'1'} checked={patient.sex + '' === '1'} onChange={e => this.setPatientInfo(e, 'sex')} />
                  <label style={{ marginLeft: '11px' }} htmlFor='man'>
                    男
                  </label>
                </div>
              </div>
            </li>
            <li style={{ width: '100%' }}>
              <label>住址：</label>
              <div style={{ height: '40px', marginTop: '17px', display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
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
                <input className='lidivTextinput' style={{ flex: 1, marginTop: '0px' }} type='text' value={patient.address} defaultValue={''} onChange={e => this.setPatientInfo(e, 'address')} />
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>预约科室</label>
              <div style={{ width: '100%', height: '40px', marginTop: '17px' }}>
                <Select
                  placeholder='选择科室'
                  options={this.getDepartmentOptions()}
                  onChange={({ value }) => {
                    let newPatient = patient
                    newPatient.department_id = value
                    this.setState({ patientInfo: newPatient })
                    this.props.queryScheduleDoctors({ department_id: value })
                  }}
                />
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>预约医生</label>
              <div style={{ width: '100%', height: '40px', marginTop: '17px' }}>
                <Select
                  placeholder='选择医生'
                  options={this.getDoctorOptions()}
                  onChange={({ value }) => {
                    let newPatient = patient
                    newPatient.personnel_id = value
                    this.setState({ patientInfo: newPatient })
                    this.querySchedules(newPatient)
                  }}
                />
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>
                预约类型<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='centerItems'>
                <input type='radio' name='visit_type' value={1} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label >首诊</label>
                <input type='radio' name='visit_type' value={2} style={{ marginLeft: '15px' }} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label >复诊</label>
                <input type='radio' name='visit_type' value={3} style={{ marginLeft: '15px' }} onChange={e => this.setPatientInfo(e, 'visit_type')} />
                <label >术后诊</label>
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>预约时间</label>
              <input
                type='date'
                value={moment(patient.visit_date).format('YYYY-MM-DD')}
                onChange={e => {
                  let visit_date = moment(e.target.value).format('YYYYMMDD')
                  this.checkSelectDate(visit_date)
                }}
              />
            </li>
          </ul>
        </div>
        <div style={{ height: '1px', width: '100%', backgroundColor: `rgba(238,238,238,1)`, marginTop: '40px' }} />
        <div className='formDiv'>
          <ul style={{ width: '100%' }}>
            <li style={{ width: '15%' }}>
              <label>会员等级</label>
              <input type='text' value={'无'} />
            </li>
            <li style={{ width: '15%', marginLeft: '3%' }}>
              <label>就诊人来源</label>
              <div>
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
            <li style={{ width: '30%', marginLeft: '3%' }}>
              <label>职业</label>
              <input type='text' value={patient.profession} onChange={e => this.setPatientInfo(e, 'profession')} />
            </li>
            <li style={{ width: '30%', marginLeft: '3%' }}>
              <label>备注</label>
              <input type='text' value={patient.remark} onChange={e => this.setPatientInfo(e, 'remark')} />
            </li>
          </ul>
        </div>
        <div style={{ marginTop: '20px', height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <label>展开跟多【收起】</label>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: '57px', marginBottom: '27px', paddingRight: '21px' }}>
          <button className='subButton' onClick={() => this.submit(this.props)}>
            保存
          </button>
        </div>
        <style jsx>
          {`
            .formDiv {
              margin-top: 10px;
            }
            .formDiv li {
              float: left;
              display: flex;
              flex-direction: column;
              margin-top 20px;
            }
            .formDiv li > input[type='text'] {
              width: 100%;
              height: 40px;
              background: rgba(245, 248, 249, 1);
              margin-top 17px;
              border-radius: 4px;
              border: 1px solid #D9D9D9;
            }
            .formDiv li input[type='date'] {
              width: 100%;
              height: 40px;
              background: rgba(245, 248, 249, 1);
              margin-top 17px;
              border-radius: 4px;
              border: 1px solid #D9D9D9;
            }
            .formDiv li > div {
              width: 100%;
              height: 40px;
              margin-top: 17px;
            }
            .centerItems {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .centerItems label {
              width:36px;
              height:18px; 
              font-size:12px;
              font-family:PingFangSC-Regular;
              color:rgba(102,102,102,1);
              line-height:18px;
            }
            .lidivTextinput {
              height: 40px;
              background: rgba(245, 248, 249, 1);
              border-radius: 4px;
              border: 1px solid #D9D9D9;
            }
          `}
        </style>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showBaseInfo()} <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    clinic_id: state.user.data.clinic_id,
    schedules: state.schedules.schedules,
    departments: state.schedules.departments,
    doctors: state.schedules.doctors,
    patients: state.patients.data
  }
}

export default connect(mapStateToProps, { addAppointment, queryScheduleDepartments, queryScheduleDoctors, getPatientByKeyword, querySchedules })(AddReservation)
