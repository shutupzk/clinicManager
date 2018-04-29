import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { addAppointment, queryScheduleDepartments, queryScheduleDoctors } from '../../../ducks'
import { provinces } from '../../../config/provinces'
import moment from 'moment'

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
      visit_date: moment()
        .add(1, 'day')
        .format('YYYYMMDD'),
      searchView: 0
    }
  }
  async submit() {}
  back() {
    Router.push('/treatment')
  }
  componentWillMount() {
    const { queryScheduleDepartments, clinic_id } = this.props
    queryScheduleDepartments({ clinic_id })
  }

  onDepartmentChange(department_id = -1) {
    this.setState({ department_id })
    const { queryScheduleDoctors } = this.props
    queryScheduleDoctors({ department_id })
  }

  onDoctorChange(doctor_id = -1) {
    this.setState({ doctor_id })
    // const { queryScheduleDoctors } = this.props
    // queryScheduleDoctors({ department_id })
  }
  //
  searchView() {
    return (
      <div className={'researchView'}>
        <span>请选择患者或继续新增</span>
        <ul>
          <li>
            <div>测试 女 68岁</div>
            <div>13352415412</div>
          </li>
          <li>
            <div>测试 女 68岁</div>
            <div>13352415412</div>
          </li>
          <li>
            <div>测试 女 68岁</div>
            <div>13352415412</div>
          </li>
          <li>
            <div>测试 女 68岁</div>
            <div>13352415412</div>
          </li>
          <li>
            <div>测试 女 68岁</div>
            <div>13352415412</div>
          </li>
        </ul>
        <style>
          {`
            .researchView{
              position: absolute;
              background: #ffffff;
              width: 477px;
              z-index: 100;
              top: 75px;    
              cursor: default;
              border:1px solid #d8d8d8;
            }
            .researchView>span{
              height: 30px;
              width: 100%;
              background: #a0a0a0;
              display: inline-block;
              line-height: 30px;
            }
            .formList .researchView>ul{
              display: flex;
              flex-direction: column;
              width: 100% !important;
            }
            .formList .researchView>ul>li{
              margin-top:5px;
            }
            .formList .researchView>ul>li:hover{
              background: #eaeaea;
            }
            .formList .researchView>ul>li>div{
              
            }
        `}
        </style>
      </div>
    )
  }
  showBaseInfo() {
    const { departments, doctors } = this.props
    const this_department_id = this.state.department_id
    const { cities, counties } = this.state
    const searchView = this.state.searchView
    return (
      <div>
        <div className={'formList'}>
          <div style={{ width: '1000px', marginTop: '31px' }}>
            <label className='titleLabel'>新增预约</label>
          </div>
          <div className='line' />
          <ul>
            <li style={{ width: '479px' }}>
              <label>
                就诊人名称<b style={{ color: 'red' }}> *</b>
              </label>
              <input
                type='text'
                // value={''}
                onChange={() => {
                  this.setState({ searchView: 1 })
                }}
              />
              {searchView === 1 ? this.searchView() : ''}
            </li>
            <li style={{ width: '479px', marginLeft: '31px' }}>
              <label>
                身份证号码<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' value={''} />
            </li>
            <li style={{ width: '210px' }}>
              <label>
                年龄<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' value={''} />
            </li>
            <li style={{ width: '210px', marginLeft: '45px' }}>
              <label>
                性别<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input type='radio' name='sex' />
                <label>女</label>
                <input type='radio' name='sex' />
                <label>男</label>
              </div>
            </li>
            <li style={{ width: '479px', marginLeft: '45px' }}>
              <label>
                手机号码<b style={{ color: 'red' }}> *</b>
              </label>
              <input className='bigInput' type='text' value={''} />
            </li>
            <li style={{ width: '989px' }}>
              <label>住址</label>
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
                <input type='text' value={''} />
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>预约科室</label>
              <select
                onChange={item => {
                  this.onDepartmentChange(item.target.value)
                }}
              >
                <option>请选择</option>
                {departments.map(({ department_id, name }, index) => {
                  return (
                    <option key={index} value={department_id}>
                      {name}
                    </option>
                  )
                })}
              </select>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label
                onChange={item => {
                  this.onDoctorChange(item.target.value)
                }}
              >
                预约医生
              </label>
              <select>
                <option>请选择</option>
                {doctors.map(({ personnel_id, name, department_id }, index) => {
                  if (this_department_id !== department_id) return null
                  return (
                    <option key={index} value={personnel_id}>
                      {name}
                    </option>
                  )
                })}
              </select>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>
                预约类型<b style={{ color: 'red' }}> *</b>
              </label>
              <div className='liDiv'>
                <input id='first' type='radio' name='type' />
                <label htmlFor='first'>首诊</label>
                <input id='referral' type='radio' name='type' style={{ marginLeft: '15px' }} />
                <label htmlFor='referral'>复诊</label>
                <input id='operate' type='radio' name='type' style={{ marginLeft: '15px' }} />
                <label htmlFor='operate'>术后诊</label>
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label>预约时间</label>
              <input
                type='date'
                value={moment(this.state.visit_date).format('YYYY-MM-DD')}
                onChange={e => {
                  let visit_date = moment(e.target.value).format('YYYYMMDD')
                  this.setState({ visit_date })
                }}
              />
            </li>
          </ul>
          <div style={{ marginTop: '40px' }}>
            <label>完善健康档案【展开】</label>
          </div>
          <div style={{ width: '1000px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: '57px', marginBottom: '27px', paddingRight: '21px' }}>
            <button className='subButton' onClick={() => this.submit(this.props)}>
              保存
            </button>
          </div>
        </div>
        <style>
          {`
            .formList{
              display:flex;
              flex-direction: column;
              width:1098px;
              align-items:center;
              // height:650px; 
              margin: 31px 66px 33px 66px;
              background:rgba(255,255,255,1);
              box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px ; 
            }
            .titleLabel{
              height:19px; 
              float: left;
              font-size:16px;
              font-family:MicrosoftYaHei;
              color:rgba(102,102,102,1);
              line-height:19px;
            }
            .line{
              height:1px; 
              width: 1000px;
              background:rgba(238,238,238,1);
              margin: 21px 0 0 0;
            }
            .formList ul {
              width: 1000px;
              height: auto;
            }
            .formList ul li {
              float: left;
              margin-top: 30px;
              display:flex;
              flex-direction: column;
              position:relative;
            }
            .formList ul li > label {
              height:14px; 
              font-size:14px;
              font-family:MicrosoftYaHei;
              color:rgba(102,102,102,1);
              line-height:14px;
            }
            .formList ul li > input {
              flex: 1;
              height:40px; 
              margin-top: 17px;
              background:rgba(245,248,249,1);
              border-radius: 4px ; 
              border: 1px solid #d9d9d9;
            }
            .formList ul li > select {
              margin-top: 17px;
              line-height:40px;
              height:40px;
              background:rgba(255,255,255,1);
              border-radius: 4px ; 
              border: 1px solid #d9d9d9;
              margin-right: 8px;
            }
            .liDiv {
              display:flex;
              flex-direction:row;
              align-items:center;
              height: 40px;
              with: 100%;
              margin-top: 17px;
            }
            .liDiv select {
              line-height:40px;
              width:100px;
              height:40px; 
              background:rgba(255,255,255,1);
              border-radius: 4px ; 
              border: 1px solid #d9d9d9;
              margin-right: 8px;
            }
            .liDiv input[type='text'] {
              flex: 1;
              height:40px;
              background:rgba(245,248,249,1);
              border-radius: 4px ; 
              border: 1px solid #d9d9d9;
            }
            .liDiv input[type='radio'] {
              width:14px;
              height:14px; 
              background:rgba(255,255,255,1);
              box-sizing: inherit;
              border: 1px solid #108EE9;
            }
            .liDiv label {
              height:18px; 
              font-size:10px;
              font-family:MicrosoftYaHei;
              color:rgba(102,102,102,1);
              line-height:18px;
            }
            .subButton {
              width:100px;
              height:28px; 
              background:rgba(42,205,200,1);
              border-radius: 4px ; 
              color: #FFFFFF;
              border: 0
            }
            `}
        </style>
      </div>
    )
  }

  render() {
    return <div style={{ width: '100%' }}>{this.showBaseInfo()}</div>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    clinic_id: state.user.data.clinic_id,
    schedules: state.schedules.schedules,
    departments: state.schedules.departments,
    doctors: state.schedules.doctors
  }
}

export default connect(mapStateToProps, { addAppointment, queryScheduleDepartments, queryScheduleDoctors })(AddReservation)
