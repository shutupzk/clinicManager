import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryClinicHassetPermissions, queryClinicUnsetPermissions, createClinicPermissions } from '../../../../ducks'
import { Confirm } from '../../../../components'

class BusinessClinicPermissionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array1: [],
      array2: []
    }
  }

  async submit() {
    const { array2 } = this.state
    const { clinic_selectId, createClinicPermissions } = this.props
    let items = []
    for (let item of array2) {
      for (let it of item.childrens_menus) {
        console.log(it)
        items.push({ function_menu_id: it.function_menu_id + '' })
      }
    }
    let error = await createClinicPermissions({ clinic_id: clinic_selectId, items: JSON.stringify(items) })
    if (error) {
      return this.refs.myAlert.alert('设置权限失败', error, null, 'Warning')
    } else {
      this.refs.myAlert.alert('设置权限成功')
    }
  }

  cancel() {
    const { has_set_permissions, un_set_permissions } = this.props
    this.setState({ array1: [...un_set_permissions], array2: [...has_set_permissions] })
  }

  async componentDidMount() {
    let { queryClinicHassetPermissions, queryClinicUnsetPermissions, clinic_selectId } = this.props
    let unSet = await queryClinicUnsetPermissions(clinic_selectId)
    let hasSet = await queryClinicHassetPermissions(clinic_selectId)
    this.setState({ array1: [...unSet], array2: [...hasSet] })
  }

  // 添加功能
  addFunc(parent, menu) {
    let { array2, array1 } = this.state
    this.changeFunc(array1, array2, parent, menu)
    this.setState({ array2, array1 })
  }

  // 删除功能
  delFunc(parent, menu) {
    let { array2, array1 } = this.state
    this.changeFunc(array2, array1, parent, menu)
    this.setState({ array2, array1 })
  }

  // 将fromArray中的功能块移到toArray中并
  changeFunc(fromArray, toArray, parent, menu, cb) {
    // 向toArray中添加数据
    let index = -1
    for (let i = 0; i < toArray.length; i++) {
      let item = toArray[i]
      if (item.parent_id === parent.parent_id) {
        index = i
        break
      }
    }
    if (index === -1) {
      let obj = {
        parent_id: parent.parent_id,
        parent_name: parent.parent_name,
        parent_url: parent.parent_url,
        childrens_menus: [
          {
            function_menu_id: menu.function_menu_id,
            menu_name: menu.menu_name,
            menu_url: menu.menu_url
          }
        ]
      }
      toArray.push(obj)
    } else {
      let funcs = toArray[index].childrens_menus
      let exist = false
      for (let func of funcs) {
        // 子功能存在与否
        if (func.function_menu_id === menu.function_menu_id) {
          exist = true
          break
        }
      }
      if (!exist) {
        toArray[index].childrens_menus.push({
          function_menu_id: menu.function_menu_id,
          menu_name: menu.menu_name,
          menu_url: menu.menu_url
        })
      }
    }

    // 删除fromArray中的数据
    for (let ai = 0; ai < fromArray.length; ai++) {
      let childrens = fromArray[ai].childrens_menus
      for (let bi = 0; bi < childrens.length; bi++) {
        if (childrens[bi].function_menu_id === menu.function_menu_id) {
          fromArray[ai].childrens_menus.splice(bi, 1)
          break
        }
      }
      if (fromArray[ai].childrens_menus.length === 0) fromArray.splice(ai, 1)
    }

    fromArray = this.sort(fromArray)
    toArray = this.sort(toArray)
  }

  sort(array) {
    for (let i = 0; i < array.length; i++) {
      array[i].childrens_menus = array[i].childrens_menus.sort((a, b) => a.function_menu_id * 1 - b.function_menu_id * 1)
    }
    return array.sort((a, b) => a.parent_id * 1 - b.parent_id * 1)
  }

  showList() {
    let { array1, array2 } = this.state
    const { clinics, clinic_selectId } = this.props
    let clinic = null
    for (let item of clinics) {
      if (item.id === clinic_selectId) clinic = item
    }
    return (
      <div>
        <div className={'bussinessTitle'}>诊所业务分配</div>
        <div className={'formList'} style={{ marginTop: 0 }}>
          <div className={'boxTitle'}>诊所名称：{clinic.name}</div>
          <div className={'boxContent'}>
            <ul>
              <li>
                <span>业务分配</span>
                <div className={'boxContentItem'}>
                  {array1.map((item, iKey) => {
                    return (
                      <div key={iKey} className={'boxContentList'}>
                        <span>{item.parent_name}</span>
                        <ul>
                          {item.childrens_menus.map((func, funkey) => {
                            return (
                              <li key={funkey}>
                                <input
                                  type={'checkBox'}
                                  checked={false}
                                  onChange={e => {
                                    this.addFunc(item, func)
                                  }}
                                />
                                <label>{func.menu_name}</label>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </li>
              <li>
                <span>业务已分配</span>
                <div className={'boxContentItem'}>
                  {array2.map((item, iKey) => {
                    return (
                      <div key={iKey} className={'boxContentList'}>
                        <span>{item.parent_name}</span>
                        <ul>
                          {item.childrens_menus.map((func, funkey) => {
                            return (
                              <li key={funkey}>
                                <input
                                  type={'checkBox'}
                                  checked
                                  onChange={e => {
                                    this.delFunc(item, func)
                                  }}
                                />
                                <label>{func.menu_name}</label>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </li>
            </ul>
          </div>
          <div style={{ float: 'left', margin: '59px 0 174px 0', width: '100%' }}>
            <div
              style={{
                width: 'auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <button style={{ margin: 0 }} className='saveBtn' onClick={() => this.cancel()}>
                取消
              </button>
              <button style={{ margin: 0, marginLeft: '10px' }} className='saveBtn' onClick={() => this.submit()}>
                保存
              </button>
            </div>
          </div>
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
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            float: left;
            padding-left: 24px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
          .boxContentList ul {
            width: 100%;
          }
          .boxContentList span {
            height: 20px;
            margin-bottom: 10px;
          }
          .boxContentList > ul > li {
            margin: 0;
            margin-bottom: 5px;
            width: 25%;
            display: flex;
            flex-direction: row;
            align-items: center;
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

  render() {
    return (
      <div>
        {this.showList()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinic_selectId: state.clinics.selectId,
    has_set_permissions: state.clinicPermissions.has_set_permissions,
    un_set_permissions: state.clinicPermissions.un_set_permissions
  }
}

export default connect(
  mapStateToProps,
  { queryClinicHassetPermissions, queryClinicUnsetPermissions, createClinicPermissions }
)(BusinessClinicPermissionScreen)
