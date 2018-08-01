import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import {
    RecptionPatientList,
    triagePatientsSelect,
    triageReception,
    patientSelect,
    queryDepartmentList,
    getPatientByKeyword,
    QuickReception
} from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday, checkIdCard, checkPhoneNumber } from '../../../../utils'
import { provinces } from '../../../../config/provinces'
import { PageCard, Confirm, DatePicker, CustomSelect, Select } from '../../../../components'
class AddmisionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      startDate: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      endDate: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      keyword1: '',
      keyword2: '',
      alertType: 0,
      patientInfo: {
        visit_type: 1
      },
      isPhone: true,
      isIdCode: true,
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择'
    }
  }

  componentDidMount() {
    this.commonQueryList({})
  }

  quetryRecptionPatientList({ keyword, query_type, offset, limit, startDate, endDate }) {
    const { clinic_id, RecptionPatientList, triage_personnel_id } = this.props
    RecptionPatientList({ clinic_id, personnel_id: triage_personnel_id, query_type, offset, limit, startDate, endDate, keyword })
  }

  commonQueryList({ offset = 0, limit = 6, pageType }) {
    let { keyword1, keyword2, startDate, endDate } = this.state
    pageType = pageType || this.state.pageType
    let keyword = keyword1
    let query_type = '1'
    if (pageType === 2) {
      query_type = '1'
      keyword = keyword2
    }
    if (pageType === 1) {
      query_type = '0'
    }
    this.quetryRecptionPatientList({ keyword, query_type, offset, limit, startDate, endDate })
  }

  // 接诊
  async reception(patient) {
    const { triageReception, triagePatientsSelect, triage_personnel_id } = this.props
    let { status, clinic_triage_patient_id, patient_id } = patient
    // console.log('patient====', patient, status)
    triagePatientsSelect({ clinic_triage_patient_id })
    this.props.patientSelect({ patient_id })
    if (status === 20) {
      this.refs.myConfirm.confirm('确定接诊？', '', 'Success', async () => {
        let error = await triageReception({ clinic_triage_patient_id, recept_personnel_id: triage_personnel_id })
        if (error) {
          return this.refs.myAlert.alert('接诊失败', error)
        }
        Router.push('/treatment/admission/reception')
      })
    } else {
      Router.push('/treatment/admission/reception')
    }
  }

  receptionOperation(clinic_triage_patient_id) {
    triagePatientsSelect({ clinic_triage_patient_id })
    Router.push('/treatment/admission/reception')
  }

  formatWaittingTime(time) {
    if (time > 1440) {
      return `${Math.floor(time / 1440)}天${Math.floor((time % 1440) / 60)}小时${time % 60}分钟`
    }
    if (time > 60) {
      return `${Math.floor(time / 60)}小时${time % 60}分钟`
    }
    if (time <= 0) return `小于1分钟`
    return `${time}分钟`
  }

  // 显示待接诊列表
  showTriageList() {
    const { pageType } = this.state
    const { triagePatients, patient_page_info } = this.props
    // console.log('triagePatients====', triagePatients)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.updated_time || patient.register_time
              // let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              let waittingTime = this.formatWaittingTime(Math.floor(moment().diff(moment(updateTime)) / 60000))

              let treat_status = '待接诊'
              let statusColor = '#F24A01'

              switch (patient.status) {
                case 40:
                  treat_status = '已接诊'
                  statusColor = '#31B0B3'
                  break
                case 30:
                  treat_status = '接诊中'
                  statusColor = '#31B0B3'
                  break
                default:
                  break
              }

              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        let patient_id = patient.patient_id
                        // console.log('patient_id====', patient_id)
                        this.props.patientSelect({ patient_id })
                        Router.push('/treatment/registration/list_detail')
                      }}
                    >
                      {patient.patient_name}
                    </span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{treat_status}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>病人ID：</a>
                      <a>{patient.patient_id}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>
                        {patient.doctor_name}
                        {patient.status === 20 ? ` \\ 已等候 ${waittingTime}` : ''}
                      </a>
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
                    <span onClick={() => this.reception(patient)}> {pageType === 1 ? '接诊' : '查看'}</span>
                    <span
                      onClick={() => {
                        let patient_id = patient.patient_id
                        this.props.patientSelect({ patient_id })
                        Router.push('/treatment/registration/list_detail')
                      }}
                    >
                      查看健康档案
                    </span>
                    <span onClick={() => this.receptionOperation(patient.clinic_triage_patient_id)}>操作</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <style jsx='true'>{`
          .itemBottom span:nth-child(2) {
            border-right: 2px solid #31b0b3;
          }
        `}</style>
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

  showBoxLeft() {
    const { pageType, keyword1, keyword2, startDate, endDate } = this.state

    if (pageType === 1) {
      return (
        <div className={'boxLeft'}>
          <input
            type='text'
            placeholder='搜索就诊人姓名/身份证号码/手机号码'
            value={keyword1}
            onChange={e => {
              this.setState({ keyword1: e.target.value })
            }}
          />
          <button onClick={() => this.commonQueryList({})}>查询</button>
        </div>
      )
    } else {
      return (
        <div className={'boxLeft'}>
          <div className={'dateDiv'}>
            <DatePicker
              placeholder={'开始日期'}
              value={moment(moment(startDate).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
              onChange={(date, str) => {
                if (date) {
                  this.setState({ startDate: moment(date).format('YYYY-MM-DD') })
                }
              }}
            />
          </div>
          <div className={'dateDiv'}>
            <DatePicker
              placeholder={'结束日期'}
              value={moment(moment(endDate).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
              onChange={(date, str) => {
                if (date) {
                  this.setState({ endDate: moment(date).format('YYYY-MM-DD') })
                }
              }}
            />
          </div>
          <input
            type='text'
            placeholder='搜索就诊人姓名/身份证号码/手机号码'
            value={keyword2}
            onChange={e => {
              this.setState({ keyword2: e.target.value })
            }}
          />
          <button onClick={() => this.commonQueryList({})}>查询</button>
        </div>
      )
    }
  }

  render() {
    const {alertType} = this.state
    const {is_clinic_admin} = this.props
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
            今日待接诊
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ pageType: 2, keyword1: '' })
              this.commonQueryList({ pageType: 2 })
            }}
          >
            已接诊记录
          </span>
        </div>
        <div className={'filterBox'}>
          {this.showBoxLeft()}
          {!is_clinic_admin ? <div className={'boxRight'}>
            <button
              onClick={() => {
                this.setState({alertType: 1, patientInfo: {}})
              }}
            >快速接诊</button>
          </div> : ''}
        </div>
        {this.showTriageList()}
        {alertType === 1 ? this.showQuickReception() : ''}
        <Confirm ref='myAlert' isAlert />
        <Confirm ref='myConfirm' />
      </div>
    )
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
  showQuickReception() {
    let patient = this.state.patientInfo
    const patients = this.props.patients || []
    const {isPhone, isIdCode} = this.state
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '1098px', height: '600px' }}>
          <div className={'doctorList_top'}>
            <span>快速接诊</span>
            <div />
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'formList'} style={{width: '100%', margin: '0', height: '415px', boxShadow: 'none'}}>
            <div className={'formListBox'}>
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
                          // console.log('newPatient.birthday====', newPatient.birthday)
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
                    value={patient.phone || ''}
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
                    <input type='text' value={patient.address || ''} defaultValue={''} onChange={e => this.setPatientInfo(e, 'address')} />
                  </div>
                </li>
                <li>
                  <label>接诊科室：<b style={{ color: 'red' }}> *</b></label>
                  <div style={{ width: '100%', height: '40px', marginTop: '17px' }}>
                    <Select
                      placeholder='选择科室'
                      options={this.getDepartmentOptions()}
                      onChange={({ value }) => {
                        let newPatient = patient
                        // console.log('value ========== ', value)
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
              </ul>
            </div>
          </div>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <button
              className={'addBtn'}
              style={{marginTop: '20px'}}
              onClick={() => {
                this.QuickReception()
              }}
            >接诊</button>
          </div>
        </div>
      </div>
    )
  }
  async QuickReception() {
    const {patientInfo} = this.state
    const {QuickReception, personnel_id, clinic_id} = this.props
    // console.log('patientInfo====', patientInfo)
    let requestData = { ...patientInfo, birthday: moment(patientInfo.birthday).format('YYYYMMDD'), personnel_id, clinic_id }
    let data = await QuickReception(requestData)
    // console.log('data===', data)
    if (data.isPass) {
      this.commonQueryList({})
      this.reception(data.data)
    } else {
      this.refs.myAlert.alert('接诊失败', data.msg)
    }
  }
}

const mapStateToProps = state => {
  console.log('state===', state)
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info,
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    is_clinic_admin: state.user.data.is_clinic_admin
  }
}

export default connect(
  mapStateToProps,
  {
    RecptionPatientList,
    triagePatientsSelect,
    triageReception,
    patientSelect,
    queryDepartmentList,
    getPatientByKeyword,
    QuickReception
  }
)(AddmisionScreen)
