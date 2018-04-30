import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
import { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList } from '../../../ducks'
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
      searchView: 0
    }
  }

  componentWillMount() {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id })
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
    return array
  }
  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }
  // 显示添加新增
  showAddNew() {
    let patient = this.state.patientInfo
    const { cities, counties } = this.state
    let departments = this.queryDepartment()
    return (
      <div className={'formList'}>
        <div className={'formListBox'} style={{ marginTop: '20px' }}>
          <ul>
            <li>
              <label htmlFor='patientName'>
                就诊人名称：<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' id='patientName' value={patient.name} onChange={e => this.setPatientInfo(e, 'name')} />
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
                    this.setState({ province: province.name, cities: province.city })
                  }}
                >
                  <option>省</option>
                  {provinces.map((province, index) => {
                    return (
                      <option key={index} value={JSON.stringify(province)}>
                        {province.name}
                      </option>
                    )
                  })}
                </select>
                <select
                  onChange={item => {
                    let city = JSON.parse(item.target.value)
                    this.setState({ city: city.name, counties: city.area })
                  }}
                >
                  <option>市</option>
                  {cities.map((city, index) => {
                    return (
                      <option key={index} value={JSON.stringify(city)}>
                        {city.name}
                      </option>
                    )
                  })}
                </select>
                <select
                  onChange={item => {
                    this.setState({ county: item.target.value })
                  }}
                >
                  <option>区</option>
                  {counties.map((name, index) => {
                    return (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    )
                  })}
                </select>
                <input
                  type='text'
                  defaultValue={''}
                  onChange={e => {
                    let newPatient = patient
                    newPatient.address = this.state.province + this.state.city + this.state.county + e.target.value
                    this.setState({ patientInfo: newPatient })
                  }}
                />
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
                  </div>
                  <div className={'itemBottom'}>
                    <span>更新时间：{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</span>
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
        {this.state.pageType === 1 ? this.showAddNew() : this.showNewList()}
        <style jsx global>{`
          .childTopBar {
            float: left;
            width: 100%;
            // background:#909090;
          }
          .childTopBar span {
            margin-top: 31px;
            width: 126px;
            height: 37px;
            background: rgba(255, 255, 255, 1);
            float: left;
            text-align: center;
            line-height: 37px;
            cursor: pointer;
            margin-bottom: 10px;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 66px;
          }
          .childTopBar span:hover,
          .childTopBar span.sel {
            background: rgba(42, 205, 200, 1);
            border-radius: 4px 0px 0px 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei-Bold;
            color: rgba(255, 255, 255, 1);
          }
          .childTopBar span:nth-child(2):hover,
          .childTopBar span.sel {
            border-radius: 0;
          }
          .childTopBar span:nth-child(3):hover,
          .childTopBar span.sel {
            border-radius: 4px 4px 0px 0px;
          }
          .filterBox {
            float: left;
            width: 1098px;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 66px;
          }
          .filterBox .boxLeft {
            float: left;
          }
          .filterBox .boxLeft input {
            float: left;
            width: 328px;
            height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
          .newList_top {
            // background: #909090;
            height: 34px;
            max-width: 1146px;
            width: 100%;
            float: left;
            margin: 30px 0 28px 40px;
          }
          .newList_top .top_left {
            float: left;
          }
          .newList_top .top_left input {
            width: 300px;
            height: 32px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            padding: 0;
            border: 1px solid #dcdcdc;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            text-indent: 10px;
            float: left;
          }
          .newList_top .top_left button {
            width: 60px;
            height: 32px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            cursor: pointer;
            margin-left: 10px;
            float: left;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(255, 255, 255, 1);
          }
          .newList_top .top_right {
            float: right;
          }
          .newList_top .top_right button {
            float: left;
            width: 110px;
            height: 34px;
            background: rgba(238, 201, 6, 1);
            border: none;
            border-radius: 17px;
            cursor: pointer;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(255, 255, 255, 1);
            margin-right: 20px;
          }
          .listContent {
            float: left;
            width: 1120px;
            margin-left: 66px;
            // background: #909090;
          }
          .listContent ul {
            float: left;
            margin: 10px 0 0 0;
          }
          .listContent ul li {
            width: 360px;
            height: 270px;
            background: rgba(255, 255, 255, 1);
            border-radius: 7px;
            margin: 10px 10px 0 0;
            float: left;
            display: flex;
            flex-direction: column;
          }
          .itemTop {
            border-bottom: 2px solid #f4f7f8;
            margin: 10px 14px 0 14px;
            height: 37px;
            // display: flex;
            // flex-direction: row;
            // align-items: center;
          }
          .itemTop span:nth-child(1) {
            width: auto;
            height: 19px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 51, 51, 1);
            margin-left: 12px;
          }
          .itemTop span:nth-child(2) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(3) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(4) {
            width: 60px;
            height: 20px;
            border-radius: 10px;
            float: right;
            text-align: center;
          }
          .itemCenter {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 332px;
            margin: 10px auto 0 auto;
            justify-content: center;
          }
          .itemCenter span {
            display: flex;
            flex-direction: row;
            height: 35px;
            line-height: 26px;
            margin: 0px 0px 0 12px;
          }
          .itemCenter span a:nth-child(1) {
            width: 75px;
            color: #666666;
            font-size: 14px;
          }
          .itemCenter span a:nth-child(2) {
            color: #333333;
            font-size: 14px;
          }
          .itemBottom {
            width: 100%;
            height: 39px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .itemBottom span {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            height: 39px;
            line-height: 39px;
          }
          .itemBottom span:nth-child(1) {
            flex: 1;
            margin-left: 26px;
            // border-right: 2px solid #31b0b3;
            color: rgba(153, 153, 153, 1);
          }
          .itemBottom span:nth-child(2) {
            // border-right: 2px solid #31b0b3;
            color: rgba(49, 176, 179, 1);
            margin-right: 23px;
          }
          .saveBtn {
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
          }
          .formList {
            width: 1098px;
            align-items: center;
            margin: 31px 66px 33px 32px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            display: block;
            float: left;
          }
          .titleLabel {
            height: 19px;
            float: left;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 19px;
          }
          .line {
            height: 1px;
            width: 1000px;
            background: rgba(238, 238, 238, 1);
            margin: 21px 0 0 0;
          }
          .formList ul {
            width: 1000px;
            height: auto;
            margin: 0 auto;
          }
          .formList ul li {
            float: left;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            position: relative;
            width: 49%;
            // background: #909090;
            margin-left: 1%;
          }
          .formList ul li > label {
            height: 14px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 14px;
          }
          .formList ul li > input {
            flex: 1;
            height: 40px;
            margin-top: 17px;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
          }
          .formList ul li > select {
            margin-top: 17px;
            line-height: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin-right: 8px;
          }
          .liDiv {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 40px;
            with: 100%;
            margin-top: 17px;
          }
          .liDiv select {
            line-height: 40px;
            width: 100px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin-right: 8px;
          }
          .liDiv input[type='text'] {
            flex: 1;
            height: 40px;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
          }
          .liDiv input[type='radio'] {
            width: 14px;
            height: 14px;
            background: rgba(255, 255, 255, 1);
            box-sizing: inherit;
            border: 1px solid #108ee9;
          }
          .liDiv label {
            height: 18px;
            font-size: 10px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 18px;
          }
          .subButton {
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            color: #ffffff;
            border: 0;
          }
        `}</style>
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
export default connect(mapStateToProps, { getPatientByCertNo, queryDepartmentList, addTriagePatientsList, triagePatientsList })(AddNewRegistrationScreen)
