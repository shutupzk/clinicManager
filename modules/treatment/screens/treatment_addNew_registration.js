import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword } from '../../../ducks'
import { getAgeByBirthday } from '../../../utils'
import moment from 'moment'
import { provinces } from '../../../config/provinces'
import { PageCard } from '../../../components'

class AddNewRegistrationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 2,
      keyword: '',
      patientInfo: {
        department_id: '0',
        visit_type: 1,
        patient_channel_id: 1
      },
      department_id: '0',
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      visit_date: moment()
				.add(1, 'day')
				.format('YYYYMMDD'),
      searchView: 0,
      candidatePatient: []
    }
  }

  componentWillMount() {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id })
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

	// 科室
  queryDepartment() {
    const array = []
    const { departments } = this.props
    for (let key in departments) {
      array.push(departments[key])
    }
    return array
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
    console.log('patients ', patients)
    return (
      <div className={'researchView'}>
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
                  this.setState({ patientInfo: item, searchView: 0, province: item.province, cities: cities, counties: counties })
                }}
							>
                <img src={'/static/login/u49.png'} />
                <div className={'leftInfo'}>
                  <div>
                    {item.name} {item.sex === 1 ? '男' : '女'} {getAgeByBirthday(item.birthday)}岁
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
	// 显示添加新增
  showAddNew() {
    if (this.state.pageType !== 1) return null
    let patient = this.state.patientInfo
    const { cities, counties } = this.state
    let departments = this.queryDepartment()
    const searchView = this.state.searchView
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
                id='patientName'
                value={patient.name}
                onChange={e => {
                  this.setPatientInfo(e, 'name')
                  let value = e.target.value
                  this.setState({ searchView: value === '' ? 0 : 1 })
                  this.queryPatients(value)
                }}
                onFocus={e => this.setState({ searchView: 0 })}
							/>
              {searchView === 1 ? this.searchView() : ''}
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
                <select
                  onChange={item => {
                    let province = JSON.parse(item.target.value)
                    let newPatient = patient
                    newPatient.province = province.name
                    this.setState({ province: province.name, cities: province.city, patientInfo: newPatient })
                  }}
								>
                  <option key={0} value={'省'}>
										省
									</option>
                  {provinces.map((province, index) => {
                    return (
                      <option key={index} value={JSON.stringify(province)} selected={patient.province === province.name}>
                        {province.name}
                      </option>
                    )
                  })}
                </select>
                <select
                  onChange={item => {
                    let city = JSON.parse(item.target.value)
                    let newPatient = patient
                    newPatient.city = city.name
                    this.setState({ city: city.name, counties: city.area, patientInfo: newPatient })
                  }}
								>
                  <option>市</option>
                  {cities.map((city, index) => {
                    return (
                      <option key={index} value={JSON.stringify(city)} selected={patient.city === city.name}>
                        {city.name}
                      </option>
                    )
                  })}
                </select>
                <select
                  onChange={item => {
                    this.setPatientInfo(item, 'district')
                    this.setState({ county: item.target.value })
                  }}
								>
                  <option>区</option>
                  {counties.map((name, index) => {
                    return (
                      <option key={index} value={name} selected={patient.district === name}>
                        {name}
                      </option>
                    )
                  })}
                </select>
                <input type='text' value={patient.address} defaultValue={''} onChange={e => this.setPatientInfo(e, 'address')} />
              </div>
            </li>
            <li>
              <label>接诊科室：</label>
              <select value={patient.department_id} onChange={e => this.setPatientInfo(e, 'department_id')}>
                <option value={'0'} key={'0'}>
									请选择
								</option>
                {departments.map((item, index) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
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
                <select style={{ width: '100%' }} value={patient.patient_channel_id} onChange={e => this.setPatientInfo(e, 'patient_channel_id')}>
                  <option value={0}>请选择</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
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
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
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
export default connect(mapStateToProps, { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword })(AddNewRegistrationScreen)
