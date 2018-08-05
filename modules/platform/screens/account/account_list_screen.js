import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  AdminList,
  AdminOnOff,
  AdminGetByID,
  MenubarList,
  MenuGetByAdminID,
  AdminUpdate
} from '../../../../ducks'
import { Confirm, PageCard, Select } from '../../../../components'

class AccountListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      showType: 0,
      start_date: '',
      end_date: '',
      status: '',
      accountInfo: {
        items: []
      },
      items: [],
      rightProfiles: []
    }
  }
  componentDidMount() {
    this.AdminList({})
  }
  AdminList(offset = 0, limit = 10) {
    const {AdminList} = this.props
    const {keyword, start_date, end_date, status} = this.state
    let reqData = {
      offset,
      limit
    }
    if (start_date !== '') {
      reqData.start_date = start_date
    }
    if (keyword !== '') {
      reqData.keyword = keyword
    }
    if (end_date !== '') {
      reqData.end_date = end_date
    }
    if (status !== '' && status !== -1) {
      reqData.status = status
    }
    AdminList(reqData)
  }
  getStatusOptions() {
    return [{ value: -1, label: '全部' }, { value: true, label: '启用' }, { value: false, label: '停用' }]
  }

  render() {
    const {showType} = this.state
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/account/add')}>新增账号</span>
          <span className={'sel'}>账号列表</span>
        </div>
        {showType === 0 ? this.renderFilter() : ''}
        {showType === 0 ? this.renderList() : ''}
        {showType === 1 ? this.renderDetail() : ''}
      </div>
    )
  }
  renderFilter() {
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'} style={{display: 'flex'}}>
            <input
              type='date'
              placeholder='开始日期'
              onChange={e => {
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              onChange={e => {
                this.setState({ end_date: e.target.value })
              }}
            />
            <div style={{ width: '100px', marginLeft: '10px', marginTop: '14px' }}>
              <Select
                placeholder={'状态'}
                height={32}
                options={this.getStatusOptions()}
                onChange={({ value }) => {
                  this.setState({ status: value })
                }}
              />
            </div>
            <input type='text'
              placeholder='搜索用户名称'
              onChange={(e) => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button onClick={() => {
              this.AdminList()
            }}>查询</button>
          </div>
        </div>
      </div>
    )
  }
  renderList() {
    const {admins, page_info} = this.props
    console.log('admins=====', admins)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            <li>
              <div>序号</div>
              <div>创立时间</div>
              <div>用户姓名</div>
              <div>平台账号</div>
              <div>预留手机号码</div>
              <div>状态</div>
              <div>操作</div>
            </li>
            {admins.map((item, index) => {
              return (
                <li key={index}>
                  <div>{index + 1}</div>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{item.name}</div>
                  <div>{item.username}</div>
                  <div>{item.phone}</div>
                  <div>{item.status ? '启用' : '停用'}</div>
                  <div>
                    <div>
                      <span onClick={() => {
                        this.AdminOnOff(item.admin_id, !item.status)
                      }}>{item.status ? '停用' : '启用'}</span>
                      |
                      <span
                        onClick={() => {
                          // this.DepartmentDelete(depart.id)
                          this.AdminGetByID(item.admin_id)
                        }}
                      >修改</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={page_info.offset}
          limit={page_info.limit}
          total={page_info.total}
          onItemClick={({ offset, limit }) => {
            this.AdminList({ offset, limit })
          }}
        />
        <Confirm ref='myAlert' />
        <style jsx>{`
          .listContent {
            float: left;
            width: 1100px;
            margin-left: 66px;
            // background: #909090;
          }
          .listContent ul {
            float: left;
            margin: 10px 0 0 0;
            display: flex;
            flex-direction: column;
            width:100%;
            border-top: 1px solid #d8d8d8;
          }
          .listContent ul li {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 40px;
            margin: 0;
            border-radius: 0;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #d8d8d8;
            border-bottom: 1px solid #d8d8d8;
          }
          .listContent ul li:nth-child(1) {
            background: rgba(250,250,250,1);
            box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
          }
          .listContent ul li>div {
            flex: 1;
            height: 40px;
            border-left: 1px solid #d8d8d8;
            line-height: 40px;
            text-align: center;
          }
          .listContent ul li>div>div{
            display: flex;
          }
          .listContent ul li>div>div>label{
            flex: 1;
          }
          .listContent ul li>div>div>span{
            flex: 1;
            cursor: pointer;
            color: #2ACDC8;
          }
        `}</style>
      </div>
    )
  }
  async AdminOnOff(admin_id, status) {
    const {AdminOnOff} = this.props
    let error = await AdminOnOff({admin_id, status})
    if (error) {
      this.refs.myAlert.alert('修改状态失败', error)
    } else {
      this.AdminList()
    }
  }
  async AdminGetByID(admin_id) {
    const {AdminGetByID, MenubarList, MenuGetByAdminID} = this.props
    let data = await AdminGetByID({admin_id})
    let menuData = await MenubarList({ascription: '02'})
    let adminMenu = await MenuGetByAdminID({admin_id})
    console.log('data=====', data, menuData, adminMenu)
    if (data.code !== '200') {
      this.refs.myAlert.alert('查询数据详情失败', data.msg)
      this.setState({showType: 0, accountInfo: {items: []}})
    } else {
      let rightProfiles = []
      for (let item of menuData) {
        if (item.parent_function_menu_id !== null) {
          rightProfiles.push(item)
        }
      }
      let items = []
      for (let item of adminMenu) {
        if (item.parent_function_menu_id !== null) {
          items.push(item)
        }
      }
      this.setState({
        showType: 1,
        accountInfo: data.data,
        items,
        rightProfiles
      })
    }
  }
  renderDetail() {
    let {accountInfo} = this.state
    console.log('accountInfo====', accountInfo)
    return (
      <div className={'formList'} style={{ marginLeft: '65px' }}>
        <div className={'formListBox'} style={{}}>
          <ul>
            <li>
              <label>
                姓名：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={accountInfo.name}
                onChange={e => {
                  accountInfo.name = e.target.value
                  this.setState({ accountInfo })
                }}
              />
            </li>
            <li>
              <label>
                职务：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={accountInfo.title}
                onChange={e => {
                  accountInfo.title = e.target.value
                  this.setState({ accountInfo })
                }}
              />
            </li>
            <li>
              <label>
                平台账号设置：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={accountInfo.username}
                onChange={e => {
                  accountInfo.username = e.target.value
                  this.setState({ accountInfo })
                }}
              />
            </li>
            <li>
              <label>
                平台账号预留手机号码：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                value={accountInfo.phone}
                onChange={e => {
                  accountInfo.phone = e.target.value
                  this.setState({ accountInfo })
                }}
              />
            </li>
            <li>
              <label>
                验证码：
              </label>
              <div className={'verifyCode'}>
                <input
                  type='text'
                  value={accountInfo.password}
                  onChange={e => {
                    accountInfo.password = e.target.value
                    this.setState({ accountInfo })
                  }}
                />
                <button style={{ marginLeft: '30px', marginBottom: '0', marginTop: '0' }} className='saveBtn' onClick={() => {}}>
                  获取验证码
                </button>
              </div>
            </li>
            <li>
              <label>
                平台账号密码：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='password'
                value={accountInfo.password}
                onChange={e => {
                  accountInfo.password = e.target.value
                  this.setState({ accountInfo })
                }}
              />
            </li>
            <li>
              <label>
                平台账号密码确认：
                <b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='password'
                value={accountInfo.passwordConfirm}
                onChange={e => {
                  accountInfo.passwordConfirm = e.target.value
                  this.setState({ accountInfo })
                }}
                onBlur={e => {
                  if (accountInfo.password !== e.target.value) {
                    this.refs.myAlert.alert('密码输入不一致，请重新输入！')
                    accountInfo.password = ''
                    accountInfo.passwordConfirm = ''
                    this.setState({accountInfo})
                  }
                }}
              />
            </li>
            <li>
              <label>
                权限配置：
              </label>
              {this.renderRightsProfile()}
            </li>
          </ul>
          <div style={{ float: 'left', margin: '59px 0 174px 0' }}>
            <button style={{ marginLeft: '453px' }} className='saveBtn' onClick={() => this.setState({showType: 0})}>
              取消
            </button>
            <button style={{ marginLeft: '8px' }} className='saveBtn' onClick={() => this.submit()}>
              保存
            </button>
          </div>
        </div>
        <style jsx='true'>{`
          .formListBox ul {
            margin-left: 22px;
          }
          .formListBox ul li {
            flex-direction: column
            // align-items: center
            width: 100%
            margin-top: 24px
          }
          .formListBox ul li>label {
            width: 200px
            line-height: 33px
          }
          .verifyCode{
            display: flex;
            margin-top: 17px;
            align-items: center;
          }
          .verifyCode>input,
          .formListBox ul li>input {
            height: 32px
            width: 468px;
            flex: none;
            // margin: 0;
            border-radius:4px;
            border:1px solid rgba(0,0,0,0.15);
            background: rgba(245,248,249,1);
          }
          .saveBtn {
            float: left
          }
        `}</style>
      </div>
    )
  }
  renderRightsProfile() {
    const {items, rightProfiles} = this.state
    return (
      <div>
        <ul>
          {rightProfiles.map((item, index) => {
            let checked = false
            for (let i = 0; i < items.length; i++) {
              if (items[i].function_menu_id === item.function_menu_id) {
                checked = true
              }
            }
            return (
              <li key={index}>
                <label>
                  <input
                    type={'checkbox'}
                    checked={checked}
                    onChange={e => {
                      if (e.target.checked) {
                        this.setItems(item.function_menu_id, true)
                      } else {
                        this.setItems(item.function_menu_id, false)
                      }
                    }}
                  />
                  {item.menu_name}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  setItems(function_menu_id, isChecked) {
    let {rightProfiles, items} = this.state
    if (isChecked) {
      for (let item of rightProfiles) {
        if (item.function_menu_id === function_menu_id) {
          items.push(item)
        }
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i].function_menu_id === function_menu_id) {
          items.splice(i, 1)
        }
      }
    }
    this.setState({items})
  }
  async submit() {
    const {AdminUpdate} = this.props
    let {accountInfo, items} = this.state
    let newItems = []
    for (let item of items) {
      let a_item = {
        function_menu_id: item.function_menu_id + ''
      }
      newItems.push(a_item)
    }
    let reqData = {
      admin_id: accountInfo.admin_id,
      name: accountInfo.name,
      title: accountInfo.title,
      phone: accountInfo.phone,
      username: accountInfo.username,
      items: JSON.stringify(newItems)
    }
    if (accountInfo.password && accountInfo.password !== '') {
      reqData.password = accountInfo.password
    }
    let error = await AdminUpdate(reqData)
    if (error) {
      this.refs.myAlert.alert('数据更新失败', error)
    } else {
      this.setState({showType: 0})
    }
  }
}

const mapStateToProps = state => {
  return {
    admins: state.admins.array_data,
    page_info: state.admins.page_info
  }
}
export default connect(mapStateToProps, {
  AdminList,
  AdminOnOff,
  AdminGetByID,
  MenubarList,
  MenuGetByAdminID,
  AdminUpdate
})(AccountListScreen)
