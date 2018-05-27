import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
import { provinces } from '../../../../config/provinces'
import { queryClinicList, clinicUpdateStatus, clinicUpdate } from '../../../../ducks'
import { Confirm, PageCard, Select } from '../../../../components'

class ClinicListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      keyword: '',
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      item: {},

      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      district: '请选择',

      clinic_id: '',
      area: '', // 详细地址
      name: '', // 诊所名称
      code: '', // 诊所编码
      responsible_person: '', // 负责人
      status: true, // 开启状态
      username: '', // 诊所账号
      password: '', // 诊所密码
      passwordConfirm: '', // 诊所密码
      phone: '' // 手机号
    }
  }

  async submit() {
    const { password, passwordConfirm, name, responsible_people, username, phone, area } = this.state
    const { clinicUpdate } = this.props
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
    let res = await clinicUpdate(this.state)
    if (res) {
      return this.refs.myAlert.alert('更新失败', res, null, 'Warning')
    }
    this.refs.myAlert.alert('更新成功', null, () => {
      this.queryClinicList({offset: this.props.page_info.offset})
      this.setState({pageType: 1})
    })
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

  queryCommonData({ offset, limit }) {
    const { queryClinicList } = this.props
    queryClinicList({ ...this.state, offset, limit })
  }

  componentDidMount() {
    this.queryCommonData({})
  }

  async changeClinicStatus(clinicId, status) {
    let res = await this.props.clinicUpdateStatus({ clinic_id: clinicId, status })
    if (res) {
      return this.refs.myAlert.alert('修改失败', res, null, 'Warning')
    } else {
      this.refs.myAlert.alert('修改成功')
      let { clinics_page_info } = this.props
      this.queryCommonData({ offset: clinics_page_info.offset })
    }
  }

  showList() {
    if (this.state.pageType !== 1) return null
    const { clinics, clinics_page_info } = this.props
    const { offset, limit, total } = clinics_page_info
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform')}> + 新增诊所</span>
          <span className={'sel'}>诊所列表</span>
        </div>
        <div className={'filterBox'} style={{ marginBottom: '20px' }}>
          <div className={'boxLeft'}>
            <input
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({ end_date: e.target.value })
              }}
            />
            <input
              type='text'
              placeholder='搜索诊所名称/诊所编码'
              value={this.state.keyword}
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button
              onClick={() => {
                this.queryCommonData({})
              }}
            >
              查询
            </button>
          </div>
        </div>
        <div className={'feeScheduleBox'}>
          <ul style={{ margin: '25px 30px 30px 30px' }}>
            <li>
              <div>序号</div>
              <div>创建时间</div>
              <div>诊所名称</div>
              <div>诊所编码</div>
              <div>诊所超级账户</div>
              <div>预留手机号码</div>
              <div>区域</div>
              <div>负责人</div>
              <div>状态</div>
              <div>操作</div>
            </li>
            {clinics.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{iKey + 1}</div>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{item.name}</div>
                  <div>{item.code}</div>
                  <div>{item.username}</div>
                  <div>{item.phone.replace(/(\w{3})\w*(\w{4})/, '$1****$2')}</div>
                  <div>{item.province}</div>
                  <div>{item.responsible_person}</div>
                  <div>{item.status ? '已启用' : '已停用'}</div>
                  <div>
                    <span style={{ color: '#2ACDC8', cursor: 'pointer' }} onClick={() => this.changeClinicStatus(item.clinic_id, !item.status)}>
                      {item.status ? '停用' : '启用'}
                    </span>
                    <span style={{ color: '#2ACDC8', cursor: 'pointer', marginLeft: '6px' }} onClick={() => this.setState({ ...item, pageType: 2 })}>
                      {'修改'}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={offset}
          limit={limit}
          total={total}
          onItemClick={({ offset, limit }) => {
            this.queryCommonData({ offset, limit })
          }}
        />
      </div>
    )
  }

  showUpdate() {
    if (this.state.pageType !== 2) return null
    return (
      <div className={'formList'} style={{ marginLeft: '65px' }}>
        <div className={'formListBox'} style={{}}>
          <div style={{ margin: '25px 0 0 50px' }}>
            <h3>{`更新诊所信息 -- ${this.state.name}`}</h3>
          </div>
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
              <label style={{ marginLeft: '60px' }}>诊所编码：{this.state.code}</label>
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
            <button style={{ marginLeft: '453px' }} className='saveBtn' onClick={() => this.setState({ pageType: 1 })}>
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
        {this.showList()}
        {this.showUpdate()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinics_page_info: state.clinics.page_info
  }
}
export default connect(mapStateToProps, { queryClinicList, clinicUpdateStatus, clinicUpdate })(ClinicListScreen)
