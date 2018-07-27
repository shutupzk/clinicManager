import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Confirm } from '../../../../../components'
// import 'rc-tree/assets/index.less'
// import './contextmenu.less'
// import Tree, { TreeNode } from 'rc-tree'
// import 'rc-tree/assets/index.css'
import { queryClinicHassetPermissions, RoleDetail, roleCreate, RoleUpdate, RoleFunctionUnset } from '../../../../../ducks'
// import {limitMoney} from '../../../../../utils'
import { formatMenuList, formatUnHasMemuList, deleteMenu, addMenu } from '../../../../../utils'

class AddRoleScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roleInfo: {
        items: []
      },
      selectedKeys: ['0-1', '0-1-1'],
      defaultCheckedKeys: [],
      defaultExpandedKeys: [],
      checkedMenuId: [],
      hasSet: [],
      allMenus: [],
      role_id: ''
    }
  }

  async componentDidMount() {
    const { showWay, role_id, RoleDetail, queryClinicHassetPermissions, clinic_id } = this.props
    let allMenus = await queryClinicHassetPermissions(clinic_id)
    let hasSet = []
    let roleInfo = {}
    if (showWay !== 1) {
      let data = await RoleDetail({ role_id })
      roleInfo = {
        name: data.name,
        role_id
      }
      hasSet = data.funtionMenus || []
    }
    this.setState({ allMenus, hasSet, roleInfo })
  }

  // 添加功能
  addFunc(menu) {
    let { hasSet, allMenus } = this.state
    let array = addMenu(menu, JSON.parse(JSON.stringify(hasSet)), JSON.parse(JSON.stringify(allMenus)))
    this.setState({ hasSet: array })
  }

  // 删除功能
  delFunc(menu) {
    let { hasSet } = this.state
    let array = deleteMenu(menu, JSON.parse(JSON.stringify(hasSet)))
    this.setState({ hasSet: array })
  }

  render() {
    const { showWay } = this.props
    // console.log('menus', menus)
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.props.backToList()}>取消</button>
            <button
              onClick={() => {
                if (showWay === 2) {
                  this.RoleUpdate()
                } else {
                  this.submit()
                }
              }}
            >
              保存
            </button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.name || data.name === '') {
      this.setState({ nameFailed: true })
      // alert(1)
      return false
    }
    return true
  }
  // 保存
  async submit() {
    let { roleInfo, hasSet } = this.state
    const { clinic_id, roleCreate } = this.props
    roleInfo.clinic_id = clinic_id
    let items = []
    for (let item of hasSet) {
      items.push({ clinic_function_menu_id: item.clinic_function_menu_id + '' })
    }
    roleInfo.items = JSON.stringify(items)
    if (this.validateData(roleInfo)) {
      let error = await roleCreate(roleInfo)
      if (error) {
        return this.refs.myAlert.alert('创建角色失败', error, null, 'Warning')
      } else {
        this.props.backToList()
      }
    }
  }
  // 修改
  async RoleUpdate() {
    let { roleInfo, hasSet } = this.state
    const { clinic_id, RoleUpdate } = this.props
    roleInfo.clinic_id = clinic_id
    let items = []
    for (let item of hasSet) {
      items.push({ clinic_function_menu_id: item.clinic_function_menu_id + '' })
    }
    roleInfo.items = JSON.stringify(items)
    if (this.validateData(roleInfo)) {
      let error = await RoleUpdate(roleInfo)
      if (error) {
        return this.refs.myAlert.alert('创建角色失败', error, null, 'Warning')
      } else {
        this.props.backToList()
      }
    }
  }
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const { roleInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    roleInfo[key] = value
    this.setState({ roleInfo })
  }
  // 设置选中显示
  getSelectValue(value, array, type) {
    for (let obj of array) {
      // console.log('obj.value======', obj.value, value)
      if (type) {
        if (obj.label === value) {
          return obj
        }
      } else {
        if (obj.value === value) {
          return obj
        }
      }
    }
    return null
  }

  // 角色基本信息
  renderBaseInfoBlank() {
    const { roleInfo, hasSet, allMenus } = this.state
    // console.log('roleInfo=======', roleInfo)
    let unsets = formatUnHasMemuList(JSON.parse(JSON.stringify(hasSet)), JSON.parse(JSON.stringify(allMenus)))
    let sets = formatMenuList(null, JSON.parse(JSON.stringify(hasSet)))
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li>
              <label>
                分组名称<b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                placeholder={'name'}
                value={roleInfo.name || ''}
                onChange={e => {
                  this.setItemValue(e, 'name')
                }}
              />
              {this.state.nameFailed || roleInfo.name === '' || !roleInfo.name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1 }}>
                <span>权限分组</span>
                <div className={'boxContentItem'} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  {unsets.map((item, iKey) => {
                    return (
                      <div key={iKey} className={'boxContentList'}>
                        <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '14px', fontFamily: 'PingFangSC-Regular', fontWeight: '600', marginBottom: '5px', marginTop: '5px' }}>
                          <input
                            type={'checkBox'}
                            checked={false}
                            onChange={e => {
                              this.addFunc(item)
                            }}
                          />
                          <span>{item.menu_name}</span>
                        </div>
                        <ul>
                          {item.children.map((func, funkey) => {
                            return (
                              <li key={funkey} style={{ width: func.children.length > 0 ? '100%' : '25%' }}>
                                <div className={'boxContentList'}>
                                  <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '13px', fontWeight: '400', marginBottom: '5px', marginTop: '5px' }}>
                                    <input
                                      type={'checkBox'}
                                      checked={false}
                                      onChange={e => {
                                        this.addFunc(func)
                                      }}
                                    />
                                    <label>{func.menu_name}</label>
                                  </div>
                                  <ul>
                                    {func.children.map((func, funkey) => {
                                      return (
                                        <li key={funkey}>
                                          <div className={'boxContentList'}>
                                            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '12px', fontWeight: '250', marginBottom: '5px', marginTop: '5px' }}>
                                              <input
                                                type={'checkBox'}
                                                checked={false}
                                                onChange={e => {
                                                  this.addFunc(func)
                                                }}
                                              />
                                              <label>{func.menu_name}</label>
                                            </div>
                                          </div>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div style={{width: '20px'}} />
              <div style={{ flex: 1 }}>
                <span>选择已分配</span>
                <div className={'boxContentItem'} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  {sets.map((item, iKey) => {
                    return (
                      <div key={iKey} className={'boxContentList'}>
                        <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '14px', fontFamily: 'PingFangSC-Regular', fontWeight: '600', marginBottom: '5px', marginTop: '5px' }}>
                          <input
                            type={'checkBox'}
                            checked
                            onChange={e => {
                              this.delFunc(item)
                            }}
                          />
                          <span>{item.menu_name}</span>
                        </div>
                        <ul>
                          {item.children.map((func, funkey) => {
                            return (
                              <li key={funkey} style={{ width: func.children.length > 0 ? '100%' : '25%' }}>
                                <div className={'boxContentList'}>
                                  <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '13px', fontWeight: '400', marginBottom: '5px', marginTop: '5px' }}>
                                    <input
                                      type={'checkBox'}
                                      checked
                                      onChange={e => {
                                        this.delFunc(func)
                                      }}
                                    />
                                    <label>{func.menu_name}</label>
                                  </div>
                                  <ul>
                                    {func.children.map((func, funkey) => {
                                      return (
                                        <li key={funkey}>
                                          <div className={'boxContentList'}>
                                            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '12px', fontWeight: '250', marginBottom: '5px', marginTop: '5px' }}>
                                              <input
                                                type={'checkBox'}
                                                checked
                                                onChange={e => {
                                                  this.delFunc(func)
                                                }}
                                              />
                                              <label>{func.menu_name}</label>
                                            </div>
                                          </div>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <style jsx='true'>{`
          .bussinessTitle {
            margin: 24px 0 26px 33px;
            height: 24px;
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
          }
          .boxTitle {
            margin: 29px 0 0 32px;
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
          }
          .boxContent {
            margin: 30px 0 0 32px;
          }
          .boxContent ul {
            width: 100%;
          }
          .boxContent ul li {
            margin: 0;
            width: 49%;
            margin-right: 1%;
          }
          .boxContent ul li > span {
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
          .boxContentItem {
            margin-top: 8px;
            width: 100%;
            min-height: 482px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.15);
          }
          .boxContentList {
            width: 94%;
            display: flex;
            flex-direction: column;
            float: left;
            padding-left: 24px;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
          .boxContentList ul {
            width: 100%;
          }
          .boxContentList span {
            height: 20px;
          }
          .boxContentList > ul > li {
            margin: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            float: left;
          }
          .boxContentList > ul > li > input {
            margin: 0;
            margin-top: 2px;
            width: 16px;
            height: 16px;
            background: rgba(42, 205, 200, 1);
            border-radius: 2px;
            flex: 1;
          }
          .boxContentList > ul > li > label {
            flex: 4;
          }
        `}</style>
      </div>
    )
  }
  style() {
    return (
      <style jsx={'1'}>{`
        .contentCenter {
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button {
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.65);
          padding: 0 15px;
        }
        .contentCenter button:hover {
          background: rgba(42, 205, 200, 1);
          color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(42, 205, 200, 1);
        }
        .bottomBtn {
          // background:#909090;
          width: 100%;
          margin: 0 0 30px 0;
          display: flex;
          align-items: center;
        }
        .bottomBtn > div {
          margin: 0 auto;
        }
        .bottomBtn button {
        }
        .commonBlank {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          margin-bottom: 20px;
          // width:1038px;
          min-width: 1038px;
          display: flex;
          flex-direction: column;
          padding: 5px 30px;
        }
        .commonBlank > span {
          font-size: 18px;
          height: 40px;
          border-bottom: 1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank > div {
          display: flex;
          margin: 10px 0;
        }
        .commonBlank > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > button {
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.65);
          padding: 0 15px;
        }
        .commonBlank > div > ul {
          // background:#a0a0a0;
          margin: 0 auto;
          width: 100%;
        }
        .commonBlank > div > ul > li {
          float: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          min-height: 70px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > label {
          height: 25px;
        }
        .commonBlank > div > ul > li > div > input,
        .commonBlank > div > ul > li > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > ul > li > div {
        }
        .commonBlank > div > ul > li > div > label {
          margin-left: 15px;
          display: flex;
          align-items: center;
          float: left;
          height: 30px;
        }
        .commonBlank > div > ul > li > div > label:first-child {
          margin-left: 0;
        }
        .commonBlank > div > ul > li > div.douInput {
          display: flex;
          align-items: center;
        }
        .commonBlank > div > ul > li > div.douInput > input {
          width: 100px;
        }
        .commonBlank > div > ul > li > div.douInput > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi {
          width: 100%;
          margin: 20px 0;
          height: auto;
        }
        .commonBlank > div > ul > li.tableLi > div {
          // background: #909090;
          float: left;
          width: 1000px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul {
          width: 100%;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li {
          display: flex;
          float: left;
          width: 100%;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li:first-child {
          background: rgba(250, 250, 250, 1);
          box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div {
          flex: 2;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float: left;
          line-height: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div:last-child {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
          width: 100%;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div.douInput {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    menus: state.menus.array_data
  }
}

export default connect(
  mapStateToProps,
  {
    queryClinicHassetPermissions,
    RoleDetail,
    roleCreate,
    RoleUpdate,
    RoleFunctionUnset
  }
)(AddRoleScreen)
