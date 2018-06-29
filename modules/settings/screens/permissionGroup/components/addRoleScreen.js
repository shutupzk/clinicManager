import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Confirm } from '../../../../../components'
// import 'rc-tree/assets/index.less'
// import './contextmenu.less'
// import Tree, { TreeNode } from 'rc-tree'
// import 'rc-tree/assets/index.css'
import {
  queryMenuGetByClinicID,
  RoleDetail,
  roleCreate,
  RoleUpdate
} from '../../../../../ducks'
// import {limitMoney} from '../../../../../utils'

// 病历
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
      array1: [],
      array2: [],
      role_id: ''
    }
  }

  async componentDidMount() {
    const {showWay, role_id, RoleDetail} = this.props
    if (showWay === 1) {
      this.queryMenuGetByClinicID()
    } else {
      let data = await RoleDetail({role_id})
      console.log('data====', data)
      let roleInfo = {
        name: data.name,
        role_id: data.role_id
      }
      let array2 = []
      for (let key of data.funtionMenus) {
        let item = {
          parent_id: key.parent_id,
          parent_name: key.parent_name,
          parent_url: key.parent_url,
          childrens_menus: []
        }
        for (let it of key.childrens_menus) {
          console.log(it)
          item.childrens_menus.push({ function_menu_id: it.clinic_function_menu_id + '' })
        }
        array2.push(item)
      }
      this.setState({
        roleInfo,
        array2: data.funtionMenus
      })
    }
  }
  async queryMenuGetByClinicID() {
    const {queryMenuGetByClinicID, clinic_id} = this.props
    let data = await queryMenuGetByClinicID({clinic_id})
    this.setState({array1: JSON.parse(JSON.stringify(data))})
  }
  style() {
    return (
      <style jsx={'1'}>{`
        .contentCenter{
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button{
          background: rgba(255,255,255,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,0.65);
          padding: 0 15px;
        }
        .contentCenter button:hover{
          background:rgba(42,205,200,1);
          color:rgba(255,255,255,1);
          border: 1px solid rgba(42,205,200,1);
        }
        .bottomBtn{
          // background:#909090;
          width: 1098px;
          margin:0 0 30px 0;
          display: flex;
          align-items:center;
        }
        .bottomBtn>div{
          margin:0 auto;
        }
        .bottomBtn button{
          
        }
        .commonBlank{
          background:rgba(255,255,255,1);
          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
          border-radius: 4px ; 
          margin-bottom:20px;
          // width:1038px;
          min-width:1038px;
          display: flex;
          flex-direction: column;
          padding:5px 30px;
        }
        .commonBlank>span{
          font-size:18px;
          height:40px;
          border-bottom:1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank>div{
          display: flex;
          margin:10px 0;
        }
        .commonBlank>div>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
        }
        .commonBlank>div>button{
          background: rgba(255,255,255,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,0.65);
          padding: 0 15px;
        }
        .commonBlank>div>ul{
          // background:#a0a0a0;
          margin:0 auto;
          width:100%;
        }
        .commonBlank>div>ul>li{
          float:left;
          width:100%;
          display: flex;
          flex-direction: column;
          min-height:70px;
          margin-right:1%;
          margin-top:5px;
        }
        .commonBlank>div>ul>li>label{
          height:25px;
        }
        .commonBlank>div>ul>li>div>input,
        .commonBlank>div>ul>li>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
        }
        .commonBlank>div>ul>li>div{
          
        }
        .commonBlank>div>ul>li>div>label{
          margin-left:15px;
          display: flex;
          align-items:center;
          float:left;
          height:30px;
        }
        .commonBlank>div>ul>li>div>label:first-child{
          margin-left:0;
        }
        .commonBlank>div>ul>li>div.douInput{
          display: flex;
          align-items: center;
        }
        .commonBlank>div>ul>li>div.douInput>input{
          width:100px;
        }
        .commonBlank>div>ul>li>div.douInput>span{
          margin:0 5px;
        }
        .commonBlank>div>ul>li.tableLi{
          width: 100%;
          margin: 20px 0;
          height: auto;
        }
        .commonBlank>div>ul>li.tableLi>div{
          // background: #909090;
          float: left;
          width: 1000px;
        }
        .commonBlank>div>ul>li.tableLi>div>ul{
          width: 100%;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li{
          display: flex;
          float:left;
          width: 100%;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li:first-child{
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div{
          flex:2;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float:left;
          line-height: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div:last-child{
          flex:1;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div{
          flex:1;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div{
         
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
          width:100%;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div>span{
          margin:0 5px;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div.douInput{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    )
  }
  render() {
    const {menus, showWay} = this.props
    console.log('menus', menus)
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => {
              if (showWay === 2) {
                this.RoleUpdate()
              } else {
                this.submit()
              }
            }}>保存</button>
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
      this.setState({nameFailed: true})
      // alert(1)
      return false
    }
    return true
  }
  // 保存
  async submit() {
    let {roleInfo, array2} = this.state
    const {clinic_id, roleCreate} = this.props
    roleInfo.clinic_id = clinic_id
    // console.log('array2=====', array2)
    let items = []
    for (let item of array2) {
      for (let it of item.childrens_menus) {
        // console.log(it)
        items.push({ function_menu_id: it.clinic_function_menu_id + '' }) // it.clinic_function_menu_id
      }
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
    let {roleInfo, array2} = this.state
    const {clinic_id, RoleUpdate} = this.props
    roleInfo.clinic_id = clinic_id
    // console.log('array2=====', array2)
    let items = []
    for (let item of array2) {
      for (let it of item.childrens_menus) {
        // console.log(it)
        items.push({ function_menu_id: it.clinic_function_menu_id + '' })
      }
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
    const {roleInfo} = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    roleInfo[key] = value
    this.setState({roleInfo})
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

  // 菜单数据---测试数据
  // getMenuData() {
  //   let array = [
  //     {'id': 1, parentID: 0, 'name': '工作站'},
  //     {'id': 2, parentID: 0, 'name': '就诊流程'},
  //     {'id': 3, parentID: 0, 'name': '诊所管理'},
  //     {'id': 4, parentID: 0, 'name': '财务管理'},
  //     {'id': 5, parentID: 0, 'name': '设置管理'},
  //     {'id': 6, parentID: 1, 'name': '医生工作站'},
  //     {'id': 7, parentID: 1, 'name': '专员工作站'},
  //     {'id': 8, parentID: 1, 'name': '护士工作站'},
  //     {'id': 9, parentID: 1, 'name': '前台工作站'},
  //     {'id': 10, parentID: 2, 'name': '登记'},
  //     {'id': 11, parentID: 2, 'name': '预约'},
  //     {'id': 12, parentID: 2, 'name': '分诊'},
  //     {'id': 13, parentID: 2, 'name': '接诊'},
  //     {'id': 14, parentID: 2, 'name': '开电子病历'},
  //     {'id': 15, parentID: 2, 'name': '开西/成药处方'},
  //     {'id': 16, parentID: 2, 'name': '开中药处方'},
  //     {'id': 17, parentID: 2, 'name': '开检查'},
  //     {'id': 18, parentID: 2, 'name': '开检验'},
  //     {'id': 19, parentID: 2, 'name': '开诊疗'},
  //     {'id': 20, parentID: 2, 'name': '开材料费'},
  //     {'id': 21, parentID: 2, 'name': '开其他费用'},
  //     {'id': 22, parentID: 2, 'name': '收费'},
  //     {'id': 23, parentID: 2, 'name': '检查'},
  //     {'id': 24, parentID: 2, 'name': '检验'},
  //     {'id': 25, parentID: 2, 'name': '治疗'},
  //     {'id': 26, parentID: 2, 'name': '发药'},
  //     {'id': 27, parentID: 2, 'name': '药品零售'},
  //     {'id': 28, parentID: 3, 'name': '科室管理'},
  //     {'id': 29, parentID: 3, 'name': '医生管理'},
  //     {'id': 30, parentID: 3, 'name': '人员管理'},
  //     {'id': 31, parentID: 3, 'name': '排班管理'},
  //     {'id': 32, parentID: 3, 'name': '药房管理'},
  //     {'id': 33, parentID: 3, 'name': '耗材管理'},
  //     {'id': 34, parentID: 3, 'name': '患者管理'},
  //     {'id': 35, parentID: 4, 'name': '收费报表'},
  //     {'id': 36, parentID: 4, 'name': '医用报表'},
  //     {'id': 37, parentID: 5, 'name': '收费项目设置'},
  //     {'id': 38, parentID: 5, 'name': '模板设置'},
  //     {'id': 39, parentID: 5, 'name': '角色'},
  //     {'id': 40, parentID: 5, 'name': '用户权限'}
  //   ]
  //   return array
  // }
  // isSelectedMenu(id) {
  //   let array = [5, 6, 20, 30, 40]
  //   let checked = false
  //   // console.log('id========', id)
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === id) {
  //       checked = true
  //       break
  //     }
  //   }
  //   return checked
  // }
  // onTreeCheck(array) {
  //   console.log('treeCheck====', array)
  //   let json = {}
  //   for (let i = 0; i < array.length; i++) {
  //     let data = array[i].split('-')
  //     for (let j = 0; j < data.length; j++) {
  //       if (data[j] !== '0') {
  //         json[data[j]] = data[j]
  //       }
  //     }
  //   }
  //   let data_array = []
  //   for (let key in json) {
  //     data_array.push(key)
  //   }
  //   console.log('json=====', json, data_array)
  // }
  // renderMenuList() {
  //   const {menus} = this.props
  //   console.log('menus=======', menus)
  //   let array = this.getMenuData()
  //   let tree_data = []
  //   let {defaultCheckedKeys, defaultExpandedKeys} = this.state
  //   for (let i = 0; i < array.length; i++) {
  //     let per = array[i]
  //     if (per.parentID === 0) {
  //       var parendNode = {}
  //       parendNode.id = per.id
  //       parendNode.text = per.name
  //       parendNode.state = 'closed'
  //       parendNode.checked = this.isSelectedMenu(per.id)

  //       let childrens = []
  //       var flagAllSelected = true // 标记当前父级菜单的子菜单是否被全部选中
  //       for (var j = 0; j < array.length; j++) {
  //         let childNode = {}
  //         let m = array[j]
  //         if (per.id === m.parentID) {
  //           // 子节点
  //           childNode.id = m.id
  //           childNode.text = m.name
  //           childNode.checked = this.isSelectedMenu(m.id)
  //           if (this.isSelectedMenu(m.id) === false) {
  //             flagAllSelected = false
  //           }
  //           childrens.push(childNode)
  //         }
  //       }
  //       // 设置子节点
  //       if (childrens.length !== 0) {
  //         parendNode.children = childrens
  //       }
  //       // 设计当子节点没有全部被选中时 父节点取消选中
  //       if (!flagAllSelected) {
  //         parendNode.checked = false
  //       }
  //       tree_data.push(parendNode)
  //     }
  //   }
  //   for (let j = 0; j < tree_data.length; j++) {
  //     let data = tree_data[j]
  //     // console.log('data=======', data)
  //     if (data.checked) {
  //       defaultCheckedKeys.push('0-' + data.id)
  //     }
  //     for (let k = 0; k < data.children.length; k++) {
  //       let c_data = data.children[k]
  //       if (c_data.checked) {
  //         defaultCheckedKeys.push(data.id + '-' + c_data.id)
  //       }
  //     }
  //   }
  //   defaultExpandedKeys = defaultCheckedKeys
  //   console.log('tree_data=====', tree_data, defaultCheckedKeys, defaultExpandedKeys)
  //   return (
  //     <div className={'menuBox'}>
  //       <MyTree
  //         tree_data={tree_data}
  //         onCheck={this.onTreeCheck}
  //         defaultCheckedKeys={defaultCheckedKeys}
  //         defaultExpandedKeys={defaultExpandedKeys}
  //       />
  //     </div>
  //   )
  // }
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
            clinic_function_menu_id: menu.clinic_function_menu_id,
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
          clinic_function_menu_id: menu.clinic_function_menu_id,
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
  // 角色基本信息
  renderBaseInfoBlank() {
    const {roleInfo, array1, array2} = this.state
    // console.log('roleInfo=======', roleInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li>
              <label>分组名称<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'name'}
                value={roleInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                }}
              />
              {this.state.nameFailed || roleInfo.name === '' || !roleInfo.name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li style={{width: '49%'}}>
              <label>分组分配</label>
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
              {/* {this.renderMenuList()} */}
            </li>
            <li style={{width: '49%'}}>
              <label>已分配权限</label>
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
              {/* {this.renderMenuList()} */}
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
}

const mapStateToProps = state => {
  console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    menus: state.menus.array_data
  }
}

export default connect(mapStateToProps, {
  queryMenuGetByClinicID,
  RoleDetail,
  roleCreate,
  RoleUpdate
})(AddRoleScreen)
