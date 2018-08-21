import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import {
  AdminCreate,
  MenubarList
} from '../../../../ducks'
import { Confirm } from '../../../../components'

class AccountAddScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accountInfo: {
        items: []
      },
      items: [],
      rightProfiles: [],
      parentMenu: {}
    }
  }
  componentDidMount() {
    this.MenubarList()
  }
  async MenubarList() {
    const {MenubarList} = this.props
    let menuData = await MenubarList({ascription: '02'})
    let rightProfiles = []
    let parentMenu = {}
    for (let item of menuData) {
      if (item.parent_function_menu_id !== null) {
        rightProfiles.push(item)
      } else {
        parentMenu = item
      }
    }
    this.setState({rightProfiles, parentMenu})
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>新增账号</span>
          <span onClick={() => Router.push('/platform/account/list')}>账号列表</span>
        </div>
        {this.showAddNew()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
  // 显示添加新增
  showAddNew() {
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
                  // value={accountInfo.password}
                  onChange={e => {
                    accountInfo.verifyCode = e.target.value
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
            <button style={{ marginLeft: '453px' }} className='saveBtn' onClick={() => this.setState({accountInfo: {}})}>
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
    const {AdminCreate} = this.props
    let {accountInfo, items, parentMenu} = this.state
    // console.log('accountInfo====', accountInfo)
    let newItems = []
    if (items.length > 0) {
      let p_item = {
        function_menu_id: parentMenu.function_menu_id + ''
      }
      newItems.push(p_item)
    }
    for (let item of items) {
      let a_item = {
        function_menu_id: item.function_menu_id + ''
      }
      newItems.push(a_item)
    }
    let reqData = {
      name: accountInfo.name,
      title: accountInfo.title,
      phone: accountInfo.phone,
      username: accountInfo.username,
      items: JSON.stringify(newItems)
    }
    if (accountInfo.password && accountInfo.password !== '') {
      reqData.password = accountInfo.password
    }
    let error = await AdminCreate(reqData)
    if (error) {
      this.refs.myAlert.alert('新增账号失败！', error)
    } else {
      Router.push('/platform/account/list')
    }
  }
}

const mapStateToProps = state => {
  return {
  }
}
export default connect(mapStateToProps, {
  AdminCreate,
  MenubarList
})(AccountAddScreen)
