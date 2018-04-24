import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
import { getPatientByCertNo, departmentList, addTriagePatientsList, triagePatientsList } from '../../../ducks'
import { getAgeByBirthday } from '../../../utils'
import moment from 'moment'

class AddNewRegistrationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      patientKeyword: '',
      patientInfo: {
        department_id: '0',
        visit_type: 1,
        patient_channel_id: 1
      },
      department_id: '0'
    }
  }

  componentWillMount() {
    const { departmentList, clinic_id } = this.props
    departmentList({ clinic_id })
  }

  async submit() {
    const { addTriagePatientsList, clinic_id, personnel_id } = this.props
    let patientInfo = this.state.patientInfo
    patientInfo.clinic_id = clinic_id
    patientInfo.personnel_id = personnel_id
    let error = await addTriagePatientsList({ patientInfo })
    if (error) {
      alert(error)
    } else {
      this.setState({ patientInfo: {}, patientKeyword: '', pageType: 2 })
      this.queryPatients()
    }
  }
	// 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }

	// 查询就诊人信息
  async queryOne(cert_no = '') {
    const { getPatientByCertNo } = this.props
    let patient = await getPatientByCertNo({ cert_no })
    this.setState({ patientInfo: patient || {} })
  }
	// 科室
  queryDepartment() {
    const array = []
    const { departments } = this.props
    for (let key in departments) {
      array.push(departments[key])
    }
		// console.log('array', array)
    return array
  }
	// 显示添加新增
  showAddNew() {
    let patient = this.state.patientInfo
		// console.log('patient', patient)
    let departments = this.queryDepartment()
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <label style={{ float: 'left', marginLeft: '20px', height: '60px', lineHeight: '60px' }}>就诊人登记</label>
          <input ref='patientKeywordInput' type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' defaultValue={this.state.patientKeyword} />
          <button
            className={'searchBtn'}
            onClick={() => {
              const patientKeyword = this.refs.patientKeywordInput.value
              this.setState({ patientKeyword })
              this.queryOne(patientKeyword)
            }}
					>
						查询
					</button>
          <button className={'searchBtn'}>读卡</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
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
                  let newPatient = patient
                  newPatient.name = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							/>
            </li>
            <li>
              <label>身份证号码：</label>
              <input
                type='text'
                value={patient.cert_no}
                onChange={e => {
                  let newPatient = patient
                  newPatient.cert_no = e.target.value
                  newPatient.birthday = e.target.value.substring(6, 14)
									// console.log(newPatient.birthday)
                  this.setState({ patientInfo: newPatient })
                }}
							/>
            </li>
            <li style={{ width: '20%' }}>
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
            <li style={{ width: '30%' }}>
              <label>
								性别：<b style={{ color: 'red' }}> *</b>
              </label>
              <div>
                <input
                  id='man'
                  type='radio'
                  name='sex'
                  value={'1'}
                  checked={patient.sex + '' === '1'}
                  onChange={e => {
                    let newPatient = patient
                    newPatient.sex = e.target.value
                    this.setState({ patientInfo: newPatient })
                  }}
								/>
                <label htmlFor='man'>男</label>
                <input
                  id='woman'
                  type='radio'
                  name='sex'
                  value={'2'}
                  style={{ marginLeft: '15px' }}
                  checked={patient.sex + '' === '2'}
                  onChange={e => {
                    let newPatient = patient
                    newPatient.sex = e.target.value
                    this.setState({ patientInfo: newPatient })
                  }}
								/>
                <label htmlFor='woman'>女</label>
              </div>
            </li>
            <li>
              <label>
								手机号码：<b style={{ color: 'red' }}> *</b>
              </label>
              <input
                type='text'
                value={patient.phone}
                onChange={e => {
                  let newPatient = patient
                  newPatient.phone = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							/>
            </li>
            <li style={{ width: '100%' }}>
              <label>住址：</label>
              <input style={{ width: '142px' }} type='text' defaultValue={'省'} />
              <input style={{ width: '142px', marginLeft: '20px' }} type='text' defaultValue={'市'} />
              <input style={{ width: '142px', marginLeft: '20px' }} type='text' defaultValue={'区'} />
              <input
                style={{ marginLeft: '20px' }}
                type='text'
                value={patient.address}
                onChange={e => {
                  let newPatient = patient
                  newPatient.address = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							/>
            </li>
            <li>
              <label>接诊科室：</label>
              <select
                value={patient.department_id}
                onChange={e => {
                  let newPatient = patient
                  newPatient.department_id = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							>
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
              <div>
                <input
                  id='first'
                  type='radio'
                  name='type'
                  value={1}
                  checked={patient.visit_type === 1}
                  onChange={e => {
                    let newPatient = patient
                    newPatient.visit_type = e.target.value
                    this.setState({ patientInfo: newPatient })
                  }}
								/>
                <label htmlFor='first'>首诊</label>
                <input
                  id='referral'
                  type='radio'
                  name='type'
                  value={2}
                  checked={patient.visit_type === 2}
                  style={{ marginLeft: '15px' }}
                  onChange={e => {
                    let newPatient = patient
                    newPatient.visit_type = e.target.value
                    this.setState({ patientInfo: newPatient })
                  }}
								/>
                <label htmlFor='referral'>复诊</label>
                <input
                  id='operate'
                  type='radio'
                  name='type'
                  value={3}
                  checked={patient.visit_type === 3}
                  style={{ marginLeft: '15px' }}
                  onChange={e => {
                    let newPatient = patient
                    newPatient.visit_type = e.target.value
                    this.setState({ patientInfo: newPatient })
                  }}
								/>
                <label htmlFor='operate'>术后复诊</label>
              </div>
            </li>
            <li style={{ width: '100%', cursor: 'pointer' }}>更多：完善健康档案（收起、展开）</li>
            <li>
              <label>会员卡号：</label>
              <input
                type='text'
                onChange={e => {
                  let newPatient = patient
                  newPatient.member_card_number = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							/>
            </li>
            <li>
              <label>就诊人来源：</label>
              <select
                value={patient.patient_channel_id}
                onChange={e => {
                  let newPatient = patient
                  newPatient.patient_channel_id = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </li>
            <li>
              <label>职业：</label>
              <input
                type='text'
                value={patient.profession}
                onChange={e => {
                  let newPatient = patient
                  newPatient.profession = e.target.value
                  this.setState({ patientInfo: newPatient })
                }}
							/>
            </li>
            <li>
              <label>备注：</label>
              <input
                type='text'
                onChange={e => {
                  let newPatient = patient
                  newPatient.remark = e.target.value
                  this.setState({ patientInfo: newPatient })
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
      </div>
    )
  }
  queryPatients() {
    const { clinic_id, triagePatientsList } = this.props
    triagePatientsList({ clinic_id })
  }
  getTriagePatientListData() {
    const { triagePatients } = this.props
    let array = []
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      array.push(patient)
    }
    return array
  }
	// 显示新增列表
  showNewList() {
    const array = this.getTriagePatientListData()
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          <a>注：当日登记就诊人列表</a>
        </div>
        <div className={'regisList'}>
          <ul>
            {array.map((patient, index) => {
              return (
                <li key={index}>
                  <div className={'liTop'}>
                    <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
                    <span className={'status'}>{patient.treat_status === true ? '已分诊' : '待分诊'}</span>
                  </div>
                  <div>
										就诊人姓名：{patient.patient_name} {patient.sex === 0 ? '女' : '男'} 年龄：{getAgeByBirthday(patient.birthday)}岁
									</div>
                  <div>门诊ID：{patient.cert_no}</div>
                  <div>接诊科室：{patient.department_name}</div>
                  <div>接诊医生：{patient.doctor_name}</div>
                  <div>登记人员：{patient.register_personnel_name}</div>
                  <div>登记时间：{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div className={'seeDetail'} onClick={() => this.seeDetail()}>
										查看详情
									</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
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
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
						登记
					</span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.queryPatients()
              this.changeContent({ type: 2 })
            }}
					>
						就诊人列表
					</span>
        </div>
        {this.state.pageType === 1 ? this.showAddNew() : this.showNewList()}
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
    clinic_id: state.user.data.clinic_id
  }
}
export default connect(mapStateToProps, { getPatientByCertNo, departmentList, addTriagePatientsList, triagePatientsList })(AddNewRegistrationScreen)
