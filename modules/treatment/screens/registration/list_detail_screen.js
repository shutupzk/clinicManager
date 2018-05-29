import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList, getPatientByKeyword } from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import moment from 'moment'
import { provinces } from '../../../../config/provinces'

class ListDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
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
  async submit() {}
  back() {
    Router.push('/treatment/registration')
  }
  componentWillMount() {
    const { clinic_triage_patient_id, triagePatients } = this.props
    for (let item of triagePatients) {
      if (item.clinic_triage_patient_id === clinic_triage_patient_id) {
        this.setState({ patientInfo: item })
        break
      }
    }
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id })
    this.quetryTriagePatientsList({ status_start: 10, status_end: 100 })
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
  quetryTriagePatientsList({ keyword, status_start, status_end, offset, limit }) {
    const { clinic_id, triagePatientsList } = this.props
    let params = { clinic_id, is_today: true, offset, limit, keyword }
    if (status_start && status_end) {
      params.status_start = status_start
      params.status_end = status_end
    }
    triagePatientsList(params)
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
  // 基本信息
  showBaseInfo() {
    if (this.state.pageType !== 1) return null
    let patient = this.state.patientInfo
    console.log('patient========', patient)
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
            <li style={{ width: '24%' }}>
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
              <label>门诊ID：</label>
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
        <style jsx='true'>{`
          .formList {
            margin: 20px 66px 33px 66px;
          }
        `}</style>
      </div>
    )
  }
  // 会员信息
  showMemberInfo() {
    return (
      <div className={'detailBox'}>
        <div className={'blankBox'}>
          <div className={'cardNumber'}>
            <span>储值卡号</span>
            <span>18507496262（储值卡号为手机号码）</span>
          </div>
          <div className={'memberLevel'}>
            <span>会员等级</span>
            <span>铂金卡会员</span>
          </div>
          <div className={'changeLevel'}>
            <button className={'addBtn'}>修改等级</button>
          </div>
        </div>
        <div className={'blankBox discountSituation'}>
          <span>折扣情况：</span>
          <ul>
            <li>检验医嘱：88%</li>
            <li>检查医嘱：88%</li>
            <li>治疗医嘱：88%</li>
            <li>处方医嘱：88%</li>
            <li>挂号费：88%</li>
            <li>其他费用：88%</li>
          </ul>
        </div>
        <div className={'blankBox discountSituation'}>
          <span>储值卡信息：</span>
          <ul>
            <li>本金余额：1,000.00元</li>
            <li>赠送金余额：1,000.00元</li>
            <li>累计充值：1,000.00元</li>
            <li>累计消费：1,000.00元</li>
          </ul>
          <div className={'cardInfoBtn'}>
            <button className={'addBtn'}>充值</button>
            <button className={'addBtn'}>退款</button>
            <button className={'addBtn'}>查看记录</button>
            <button className={'addBtn'}>设置密码</button>
          </div>
        </div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
  }
  // 就诊信息
  showVisitInfo() {
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：王俊凯</div>
          <div style={{ flex: 1 }}>性别：男</div>
          <div style={{ flex: 1 }}>年龄：18</div>
          <div>就诊ID：1234567890</div>
          <div>手机号码：13333333333</div>
        </div>
        <div className={'blankBox keyPhysicalData'}>
          <span>关键体征数据</span>
          <ul>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
            <li>
              <div className={'dataTitle'}>身高(CM)</div>
              <div className={'dataContent'}>180</div>
            </li>
          </ul>
          <div className={'seeMore'}>查看更多</div>
        </div>
        <div className={'blankBox'}>sadas</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
  }
  // 收费信息
  showTollInfo() {
    return <div className={'formList'}>dasdas</div>
  }
  // 积分信息
  showIntgralInfo() {
    return <div className={'formList'}>dasdas</div>
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          {/* <a style={{ float: 'left', lineHeight: '80px', marginLeft: '20px' }}>就诊人信息：</a> */}
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            基本信息
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            会员信息
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
            就诊信息
          </span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
            收费信息
          </span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
            积分信息
          </span>
          <span className={this.state.pageType === 6 ? 'sel' : ''} onClick={() => this.changeContent({ type: 6 })}>
            登记预约
          </span>
          <span onClick={() => Router.push('/treatment/registration/list')}>返回列表</span>
        </div>
        {this.state.pageType === 1 ? this.showBaseInfo() : ''}
        {this.state.pageType === 2 ? this.showMemberInfo() : ''}
        {this.state.pageType === 3 ? this.showVisitInfo() : ''}
        {this.state.pageType === 4 ? this.showTollInfo() : ''}
        {this.state.pageType === 5 ? this.showIntgralInfo() : ''}
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
    limit: state.triagePatients.page_info.limit,
    clinic_triage_patient_id: state.triagePatients.selectId
  }
}
export default connect(mapStateToProps, {
  getPatientByCertNo,
  queryDepartmentList,
  addTriagePatientsList,
  triagePatientsList,
  getPatientByKeyword
})(ListDetailScreen)
