import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { MyTree } from '../../../../../components'
// import 'rc-tree/assets/index.less'
// import './contextmenu.less'
// import Tree, { TreeNode } from 'rc-tree'
// import 'rc-tree/assets/index.css'
import {
  queryMenuGetByClinicID
} from '../../../../../ducks'
// import {limitMoney} from '../../../../../utils'

// 病历
class AddUserScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roleInfo: {
        items: []
      },
      selectedKeys: ['0-1', '0-1-1'],
      defaultCheckedKeys: [],
      defaultExpandedKeys: [],
      checkedMenuId: []
    }
  }

  async componentWillMount() {
    this.queryMenuGetByClinicID()
  }
  queryMenuGetByClinicID() {
    const {queryMenuGetByClinicID, clinic_id} = this.props
    queryMenuGetByClinicID({clinic_id})
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
    const {showType} = this.state
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        {showType ? this.chooseOrgan() : ''}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => { this.submit() }}>保存</button>
          </div>
        </div>
        {this.style()}
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
    let {roleInfo} = this.state
    const {clinic_id, roleCreate} = this.props
    roleInfo.clinic_id = clinic_id
    if (this.validateData(roleInfo)) {
      let error = await roleCreate(roleInfo)
      if (error) {
        alert(error)
        this.setState({roleInfo})
      } else {
        this.props.back2List()
      }
    }
    // alert(0)
  }
  // 保存并入库
  saveInStock() {

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
  getMenuData() {
    let array = [
      {'id': 1, parentID: 0, 'name': '工作站'},
      {'id': 2, parentID: 0, 'name': '就诊流程'},
      {'id': 3, parentID: 0, 'name': '诊所管理'},
      {'id': 4, parentID: 0, 'name': '财务管理'},
      {'id': 5, parentID: 0, 'name': '设置管理'},
      {'id': 6, parentID: 1, 'name': '医生工作站'},
      {'id': 7, parentID: 1, 'name': '专员工作站'},
      {'id': 8, parentID: 1, 'name': '护士工作站'},
      {'id': 9, parentID: 1, 'name': '前台工作站'},
      {'id': 10, parentID: 2, 'name': '登记'},
      {'id': 11, parentID: 2, 'name': '预约'},
      {'id': 12, parentID: 2, 'name': '分诊'},
      {'id': 13, parentID: 2, 'name': '接诊'},
      {'id': 14, parentID: 2, 'name': '开电子病历'},
      {'id': 15, parentID: 2, 'name': '开西/成药处方'},
      {'id': 16, parentID: 2, 'name': '开中药处方'},
      {'id': 17, parentID: 2, 'name': '开检查'},
      {'id': 18, parentID: 2, 'name': '开检验'},
      {'id': 19, parentID: 2, 'name': '开诊疗'},
      {'id': 20, parentID: 2, 'name': '开材料费'},
      {'id': 21, parentID: 2, 'name': '开其他费用'},
      {'id': 22, parentID: 2, 'name': '收费'},
      {'id': 23, parentID: 2, 'name': '检查'},
      {'id': 24, parentID: 2, 'name': '检验'},
      {'id': 25, parentID: 2, 'name': '治疗'},
      {'id': 26, parentID: 2, 'name': '发药'},
      {'id': 27, parentID: 2, 'name': '药品零售'},
      {'id': 28, parentID: 3, 'name': '科室管理'},
      {'id': 29, parentID: 3, 'name': '医生管理'},
      {'id': 30, parentID: 3, 'name': '人员管理'},
      {'id': 31, parentID: 3, 'name': '排班管理'},
      {'id': 32, parentID: 3, 'name': '药房管理'},
      {'id': 33, parentID: 3, 'name': '耗材管理'},
      {'id': 34, parentID: 3, 'name': '患者管理'},
      {'id': 35, parentID: 4, 'name': '收费报表'},
      {'id': 36, parentID: 4, 'name': '医用报表'},
      {'id': 37, parentID: 5, 'name': '收费项目设置'},
      {'id': 38, parentID: 5, 'name': '模板设置'},
      {'id': 39, parentID: 5, 'name': '角色'},
      {'id': 40, parentID: 5, 'name': '用户权限'}
    ]
    return array
  }
  isSelectedMenu(id) {
    let array = [5, 6, 20, 30, 40]
    let checked = false
    // console.log('id========', id)
    for (let i = 0; i < array.length; i++) {
      if (array[i] === id) {
        checked = true
        break
      }
    }
    return checked
  }
  onTreeCheck(array) {
    console.log('treeCheck====', array)
    let json = {}
    for (let i = 0; i < array.length; i++) {
      let data = array[i].split('-')
      for (let j = 0; j < data.length; j++) {
        if (data[j] !== '0') {
          json[data[j]] = data[j]
        }
      }
    }
    let data_array = []
    for (let key in json) {
      data_array.push(key)
    }
    console.log('json=====', json, data_array)
  }
  renderMenuList() {
    const {menus} = this.props
    console.log('menus=======', menus)
    let array = this.getMenuData()
    let tree_data = []
    let {defaultCheckedKeys, defaultExpandedKeys} = this.state
    for (let i = 0; i < array.length; i++) {
      let per = array[i]
      if (per.parentID === 0) {
        var parendNode = {}
        parendNode.id = per.id
        parendNode.text = per.name
        parendNode.state = 'closed'
        parendNode.checked = this.isSelectedMenu(per.id)

        let childrens = []
        var flagAllSelected = true // 标记当前父级菜单的子菜单是否被全部选中
        for (var j = 0; j < array.length; j++) {
          let childNode = {}
          let m = array[j]
          if (per.id === m.parentID) {
            // 子节点
            childNode.id = m.id
            childNode.text = m.name
            childNode.checked = this.isSelectedMenu(m.id)
            if (this.isSelectedMenu(m.id) === false) {
              flagAllSelected = false
            }
            childrens.push(childNode)
          }
        }
        // 设置子节点
        if (childrens.length !== 0) {
          parendNode.children = childrens
        }
        // 设计当子节点没有全部被选中时 父节点取消选中
        if (!flagAllSelected) {
          parendNode.checked = false
        }
        tree_data.push(parendNode)
      }
    }
    for (let j = 0; j < tree_data.length; j++) {
      let data = tree_data[j]
      // console.log('data=======', data)
      if (data.checked) {
        defaultCheckedKeys.push('0-' + data.id)
      }
      for (let k = 0; k < data.children.length; k++) {
        let c_data = data.children[k]
        if (c_data.checked) {
          defaultCheckedKeys.push(data.id + '-' + c_data.id)
        }
      }
    }
    defaultExpandedKeys = defaultCheckedKeys
    console.log('tree_data=====', tree_data, defaultCheckedKeys, defaultExpandedKeys)
    return (
      <div className={'menuBox'}>
        <MyTree
          tree_data={tree_data}
          onCheck={this.onTreeCheck}
          defaultCheckedKeys={defaultCheckedKeys}
          defaultExpandedKeys={defaultExpandedKeys}
        />
      </div>
    )
  }
  // 角色基本信息
  renderBaseInfoBlank() {
    const {roleInfo} = this.state
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
            <li>
              <label>分组分配</label>
              {this.renderMenuList()}
            </li>
          </ul>
        </div>
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
  queryMenuGetByClinicID
})(AddUserScreen)
