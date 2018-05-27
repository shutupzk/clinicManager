import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'

import { clinicCreate, queryClinicCode } from '../../../../ducks'
import { provinces } from '../../../../config/provinces'
import { Select, Confirm } from '../../../../components'

class ClinicAddScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      district: '请选择',

      area: '', // 详细地址
      name: '', // 诊所名称
      code: '123456', // 诊所编码
      responsible_person: '', // 负责人
      status: true, // 开启状态
      username: '', // 诊所账号
      password: '', // 诊所密码
      passwordConfirm: '', // 诊所密码
      phone: '' // 手机号
    }
  }

  // 保存新增登记
  async submit() {
    const { password, passwordConfirm, name, responsible_people, username, phone, area } = this.state
    const { clinicCreate } = this.props
    if (name === '') {
      return this.refs.myAlert.alert('请输入诊所名称！', null, null, 'Warning')
    }
    if (responsible_people === '') {
      return this.refs.myAlert.alert('请输入诊所分责人！', null, null, 'Warning')
    }
    if (username === '') {
      return this.refs.myAlert.alert('请输入管理员账号！', null, null, 'Warning')
    }
    if (phone === '') {
      return this.refs.myAlert.alert('请输入管理员手机！', null, null, 'Warning')
    }
    if (area === '') {
      return this.refs.myAlert.alert('请输入诊所地址！', null, null, 'Warning')
    }
    if (password === '') {
      return this.refs.myAlert.alert('请输入管理员密码！', null, null, 'Warning')
    }
    if (password !== passwordConfirm) {
      return this.refs.myAlert.alert('两次输入密码不一致！', null, null, 'Warning')
    }
    let res = await clinicCreate(this.state)
    if (res) {
      return this.refs.myAlert.alert('添加失败', res, null, 'Warning')
    }
    this.refs.myAlert.alert('添加成功', null, () => {
      Router.push('/platform/clinique')
    })
  }

  componentDidMount() {
    this.props.queryClinicCode()
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

  // 显示添加新增
  showAddNew() {
    let { lastest_code } = this.props
    if (!lastest_code || lastest_code * 1 < 10000) lastest_code = 10000
    lastest_code = lastest_code * 1 + 1
    return (
      <div className={'formList'} style={{ marginLeft: '65px' }}>
        <div className={'formListBox'} style={{}}>
          <ul>
            <li>
              <label>
                诊所名称：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={this.state.name}
                onChange={e => {
                  this.setState({ name: e.target.value })
                }}
              />
              <label style={{ marginLeft: '60px' }}>诊所编码：{lastest_code}</label>
            </li>
            <li style={{ width: '100%' }}>
              <label>住址：</label>
              <div className='liDiv'>
                <div style={{ width: '100px', marginRight: '10px' }}>
                  <Select
                    height={'36px'}
                    placeholder='省'
                    value={{
                      value: this.state.province,
                      label: this.state.province,
                      cities: this.state.cities
                    }}
                    options={this.getProvincesOptions()}
                    onChange={({ value, cities }) => {
                      this.setState({ province: value, cities })
                    }}
                  />
                </div>
                <div style={{ width: '100px', marginRight: '10px' }}>
                  <Select
                    height={'36px'}
                    placeholder='市'
                    value={{
                      value: this.state.city,
                      label: this.state.city,
                      counties: this.state.counties
                    }}
                    options={this.getCityOptions()}
                    onChange={({ value, counties }) => {
                      this.setState({ city: value, counties })
                    }}
                  />
                </div>
                <div style={{ width: '100px', marginRight: '10px' }}>
                  <Select
                    value={{
                      value: this.state.district,
                      label: this.state.district
                    }}
                    height={'36px'}
                    placeholder='区'
                    options={this.getcountyOptions()}
                    onChange={({ value }) => {
                      this.setState({ district: value })
                    }}
                  />
                </div>
                <input
                  type='text'
                  style={{
                    width: '507px',
                    height: '32px'
                  }}
                  placeholder={'详细地址'}
                  value={this.state.area}
                  onChange={e => this.setState({ area: e.target.value })}
                />
              </div>
            </li>
            <li>
              <label>
                负责人：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input type='text' value={this.state.responsible_person} onChange={e => this.setState({ responsible_person: e.target.value })} />
            </li>
            <li>
              <label>
                超级管理员账号：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={this.state.username}
                onChange={e => {
                  this.setState({ username: e.target.value })
                }}
              />
            </li>
            <li>
              <label>
                预留手机号码：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={this.state.phone}
                onChange={e => {
                  this.setState({ phone: e.target.value })
                }}
              />
              <button style={{ marginLeft: '30px', marginBottom: '0' }} className='saveBtn' onClick={() => {}}>
                获取验证码
              </button>
            </li>
            <li>
              <label>
                验证码：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value })
                }}
              />
            </li>
            <li>
              <label>
                设置密码：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='password'
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value })
                }}
              />
            </li>
            <li>
              <label>
                确认密码：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='password'
                value={this.state.passwordConfirm}
                onChange={e => {
                  this.setState({ passwordConfirm: e.target.value })
                }}
              />
            </li>
          </ul>
          <div style={{ float: 'left', margin: '59px 0 174px 0' }}>
            <button style={{ marginLeft: '453px' }} className='saveBtn' onClick={() => this.setState({})}>
              取消
            </button>
            <button style={{ marginLeft: '8px' }} className='saveBtn' onClick={() => this.submit()}>
              保存
            </button>
          </div>
        </div>
        <style jsx>{`
          .formListBox ul {
            margin-left: 22px;
          }
          .formListBox ul li {
            flex-direction: row
            align-items: center
            width: 100%
            margin-top: 24px
          }
          .formListBox ul li>label {
            width: 132px
            line-height: 33px
          }
          .formListBox ul li>input {
            height: 32px
            width: 468px;
            flex: none;
            margin: 0：
            border-radius:4px;
            border:1px solid rgba(0,0,0,0.15);
          }
          .saveBtn {
            float: left
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}> + 新增诊所</span>
          <span onClick={() => Router.push('/platform/clinique')}>诊所列表</span>
        </div>
        {this.showAddNew()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    lastest_code: state.clinics.lastest_code
  }
}
export default connect(mapStateToProps, {
  clinicCreate,
  queryClinicCode
})(ClinicAddScreen)
