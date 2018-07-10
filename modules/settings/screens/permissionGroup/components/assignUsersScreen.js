import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Confirm, PageCard } from '../../../../../components'
// import 'rc-tree/assets/index.less'
// import './contextmenu.less'
// import Tree, { TreeNode } from 'rc-tree'
// import 'rc-tree/assets/index.css'
import {
  queryMenuGetByClinicID,
  RoleDetail,
  roleCreate,
  RoleUpdate,
  RoleFunctionUnset,
  queryDoctorList,
  RoleAllocation,
  PersonnelsByRole
} from '../../../../../ducks'
// import {limitMoney} from '../../../../../utils'

// 病历
class AssignUsersScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roleInfo: {
        items: []
      },
      array1: [],
      array2: [],
      role_id: '',
      keyword: '',
      department_id: ''
    }
  }

  componentDidMount() {
    const {selRole, role_id} = this.props
    let roleInfo = {
      name: selRole.name,
      role_id
    }
    this.setState({
      roleInfo
    })
    this.queryDoctorList({offset: 0, limit: 10})
  }

  queryDoctorList({offset = 0, limit = 10, keyword = ''}) {
    const {queryDoctorList, clinic_id} = this.props
    // const {} = this.state
    queryDoctorList({ clinic_id, keyword, offset, limit })
    this.PersonnelsByRole()
  }
  async PersonnelsByRole() {
    const {role_id, PersonnelsByRole} = this.props
    let personnels = await PersonnelsByRole({role_id})
    console.log('personnels=====', personnels)
    let array = []
    for (let key of personnels) {
      let item = {
        id: key.personnel_id,
        name: key.personnel_name,
        department_name: key.department_name
      }
      array.push(item)
    }
    this.setState({array2: array})
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
    // const {showWay} = this.props
    // console.log('menus', menus)
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => {
              // if (showWay === 2) {
              //   this.RoleUpdate()
              // } else {
              //   this.submit()
              // }
              this.submit()
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
    // let {roleInfo, array2} = this.state
    // const {clinic_id, roleCreate} = this.props
    // roleInfo.clinic_id = clinic_id
    // // console.log('array2=====', array2)
    // let items = []
    // for (let item of array2) {
    //   for (let it of item.childrens_menus) {
    //     // console.log(it)
    //     items.push({ clinic_function_menu_id: it.clinic_function_menu_id + '' }) // it.clinic_function_menu_id
    //   }
    // }
    // roleInfo.items = JSON.stringify(items)
    // if (this.validateData(roleInfo)) {
      // let error = await roleCreate(roleInfo)
      // if (error) {
      //   return this.refs.myAlert.alert('创建角色失败', error, null, 'Warning')
      // } else {
      //   this.props.backToList()
      // }
    // }
    const {role_id, RoleAllocation} = this.props
    const {array2} = this.state
    let requestData = {}
    let items = []
    for (let item of array2) {
      items.push({ personnel_id: item.id + '' })
    }
    requestData.role_id = role_id
    requestData.items = JSON.stringify(items)
    let error = await RoleAllocation(requestData)
    if (error) {
      return this.refs.myAlert.alert('分配角色失败', error, null, 'Warning')
    } else {
      this.props.backToList()
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
        items.push({ clinic_function_menu_id: it.clinic_function_menu_id + '' })
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
  // 选择用户
  addArray1(item) {
    let {array2} = this.state
    let idArray = []
    for (let key of array2) {
      idArray.push(key.id)
    }
    if (idArray.indexOf(item.id) === -1) {
      array2.push(item)
    }
    this.setState({array2})
  }
  removeArray2(item) {
    let {array2} = this.state
    for (let i = 0; i < array2.length; i++) {
      if (item.id === array2[i].id) {
        array2.splice(i, 1)
      }
    }
    this.setState({array2})
  }
  // 角色基本信息
  renderBaseInfoBlank() {
    const {roleInfo, array2} = this.state
    const {doctors, page_info} = this.props
    console.log('doctors=======', doctors)
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
              <label>用户分配</label>
              <div className={'boxContentItem'}>
                <div className={'boxContentList'}>
                  {/* <span>{'搜索科室/姓名'}</span> */}
                  <div>
                    <input
                      className={'serchDoctor'}
                      type='text'
                      placeholder={'搜索科室/姓名'}
                      onBlur={e => {
                        this.queryDoctorList({limit: 10, offset: 0, keyword: e.target.value})
                      }}
                    />
                  </div>
                  <ul>
                    {doctors.map((func, funkey) => {
                      // console.log('func===', func)
                      let checked = false
                      for (let i = 0; i < array2.length; i++) {
                        if (array2[i].id === func.id) {
                          checked = true
                        }
                      }
                      let depart = ''
                      if (func.department_name) {
                        depart = func.department_name
                      } else {
                        depart = '无'
                      }
                      return (
                        <li key={funkey}>
                          <input
                            type={'checkBox'}
                            checked={checked}
                            onChange={e => {
                              if (e.target.checked) {
                                this.addArray1(func)
                              } else {
                                this.removeArray2(func)
                              }
                              // this.addFunc(item, func)
                            }}
                          />
                          <label>{func.name + '(' + depart + ')'}</label>
                        </li>
                      )
                    })}
                    <PageCard
                      style={{width: '100%', margin: '0'}}
                      offset={page_info.offset}
                      limit={page_info.limit}
                      total={page_info.total}
                      onItemClick={({ offset, limit }) => {
                        // const keyword = this.state.keyword
                        this.queryDoctorList({ offset, limit })
                      }}
                    />
                  </ul>
                </div>
              </div>
              {/* {this.renderMenuList()} */}
            </li>
            <li style={{width: '49%'}}>
              <label>已分配用户</label>
              <div className={'boxContentItem'}>
                <div className={'boxContentList'}>
                  {/* <span>{'搜索科室/姓名'}</span> */}
                  <ul>
                    {array2.map((func, funkey) => {
                      // console.log('func===', func)
                      // let checked = false
                      // for (let i = 0; i < array2.length; i++) {
                      //   if (array2[i].id === func.id) {
                      //     checked = true
                      //   }
                      // }
                      let depart = ''
                      if (func.department_name) {
                        depart = func.department_name
                      } else {
                        depart = '无'
                      }
                      return (
                        <li key={funkey}>
                          <input
                            type={'checkBox'}
                            checked
                            onChange={e => {
                              this.removeArray2(func)
                              // if (e.target.checked) {
                              //   this.addArray1(func)
                              // }
                              // this.addFunc(item, func)
                            }}
                          />
                          <label>{func.name + '(' + depart + ')'}</label>
                        </li>
                      )
                    })}
                  </ul>
                </div>
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
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            float: left;
          }
          .serchDoctor{
            background: rgba(245,248,249,1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            height: 30px;
            padding: 0;
            width: 200px;
            margin: 20px 0;
          }
          .boxContentList > ul > li > input {
            margin: 0;
            margin-top: 2px;
            width: 16px;
            height: 16px;
            background: rgba(42, 205, 200, 1);
            border-radius: 2px;
            // flex: 1;
          }
          .boxContentList > ul > li > label {
            flex: 4;
            margin-left: 20px;
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
    menus: state.menus.array_data,
    doctors: state.doctors.array_data,
    page_info: state.doctors.page_info
  }
}

export default connect(mapStateToProps, {
  queryMenuGetByClinicID,
  RoleDetail,
  roleCreate,
  RoleUpdate,
  RoleFunctionUnset,
  queryDoctorList,
  RoleAllocation,
  PersonnelsByRole
})(AssignUsersScreen)
