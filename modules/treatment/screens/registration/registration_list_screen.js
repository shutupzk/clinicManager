import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword } from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import moment from 'moment'
import { provinces } from '../../../../config/provinces'
import { PageCard, Select } from '../../../../components'

class RegistrationListScreen extends Component {
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
      toSearch: false
    }
  }

  componentWillMount() {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, limit: 100 })
    this.quetryTriagePatientsList({ status_start: 10, status_end: 100 })
  }
  // 保存新增登记
  async submit() {
    const { addTriagePatientsList, clinic_id, personnel_id } = this.props
    let patientInfo = this.state.patientInfo
    patientInfo.clinic_id = clinic_id
    patientInfo.personnel_id = personnel_id
    let error = await addTriagePatientsList({ patientInfo })
    if (error) {
      alert(error)
    } else {
      this.setState({ patientInfo: {}, keyword: '', pageType: 2 })
      this.quetryTriagePatientsList({ status_start: 10, status_end: 100 })
    }
  }
  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
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
                  console.log('this.state.toSearch====', this.state.toSearch)
                  if (this.state.toSearch && this.state.searchView === 1) {
                    this.setState({ searchView: 0 })
                  }
                }}
              />
              {this.state.searchView === 1 ? this.searchView() : ''}
            </li>
            <li>
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
              <div className='liDiv'>
                <input id='man' type='radio' name='sex' value={'1'} checked={patient.sex + '' === '1'} onChange={e => this.setPatientInfo(e, 'sex')} />
                <label htmlFor='man'>男</label>
                <input id='woman' type='radio' name='sex' value={'0'} style={{ marginLeft: '15px' }} checked={patient.sex + '' === '0'} onChange={e => this.setPatientInfo(e, 'sex')} />
                <label htmlFor='woman'>女</label>
              </div>
            </li>
            <li>
              <label>
                手机号码：<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' value={patient.phone} onChange={e => this.setPatientInfo(e, 'phone')} />
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
            <li style={{ width: '100%', cursor: 'pointer' }}>更多：完善健康档案（收起、展开）</li>
            <li>
              <label>会员卡号：</label>
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
        <style jsx>{`
          .formList {
            margin: 20px 66px 33px 66px;
          }
        `}</style>
      </div>
    )
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

  // 显示新增列表
  showNewList() {
    const { pageType } = this.state
    if (pageType !== 2) return null
    const { triagePatients, patient_page_info } = this.props
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input
              type='text'
              placeholder='搜索就诊人姓名/身份证号码/手机号码'
              value={this.state.keyword}
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button
              onClick={() => {
                let keyword = this.state.keyword
                this.quetryTriagePatientsList({ keyword, status_start: 10, status_end: 100 })
              }}
            >
              查询
            </button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let statusColor = patient.status === 20 ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.status === 20 ? '已分诊' : '待分诊'}</span>
                  </div>
                  <div className={'itemCenter'}>
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
                    <span>
                      <a>更新时间：</a>
                      <a>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.seeDetail()}>查看详情 >></span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={patient_page_info.offset}
          limit={patient_page_info.limit}
          total={patient_page_info.total}
          onItemClick={({ offset, limit }) => {
            const keyword = this.state.keyword
            this.quetryTriagePatientsList({ offset, limit, keyword, status_start: 10, status_end: 100 })
          }}
        />
        <style jsx>{`
          .itemBottom span:nth-child(1) {
            flex: 1;
            border-right: none;
          }
          .formList {
            margin: 20px 66px 33px 66px;
          }
        `}</style>
      </div>
    )
  }
  // 查看详情
  seeDetail() {
    Router.push('/treatment/newListDetail')
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ type: 1 })
            }}
          >
            + 新增登记
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ type: 2 })
              const keyword = this.state.keyword
              this.quetryTriagePatientsList({ offset, limit, keyword, status_start: 10, status_end: 100 })
            }}
          >
            登记列表
          </span>
        </div>
        {this.showAddNew()}
        {this.showNewList()}
        {/* {this.state.pageType === 1 ? this.showAddNew() : this.showNewList()} */}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    clinic_id: state.user.data.clinic_id,
    limit: state.triagePatients.page_info.limit
  }
}
export default connect(mapStateToProps, { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword })(RegistrationListScreen)
