
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import {
  queryRoleList
} from '../../../../ducks'
import { PageCard } from '../../../../components'
import AddUserScreen from './components/addUserScreen'
import moment from 'moment'

class UserRightsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugClassification: [],
      selDrugType: 0,
      pageType: 1,
      keyword: '',
      is_common: '',
      operation_id: '',
      type: 1,
      relateItem: {},
      alertType: 0
    }
  }

  componentWillMount() {
    this.getDataList({ offset: 0, limit: 10 })
  }
  showView() {
    let { pageType } = this.state
    let map = {
      // 1: <AddDrugScreen />,
      2: <AddUserScreen backToList={() => {
        this.setState({pageType: 1})
        this.getDataList({offset: 0, limit: 10})
      }} />
    }
    return map[pageType] || null
  }
  // 获取数据列表
  getDataList({ offset = 0, limit = 10 }) {
    const {clinic_id, queryRoleList} = this.props
    const {keyword} = this.state
    let requestData = {
      clinic_id,
      keyword: keyword,
      offset,
      limit
    }
    // console.log('requestData======', requestData)
    queryRoleList(requestData)
  }
  // 设置选中显示
  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  // 加载右侧表格
  renderRightTable() {
    return (
      <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <input
              placeholder={'分组名称'}
              onChange={e => {
                this.setState({keyword: e.target.value})
              }}
            />
            <button onClick={() => { this.getDataList({offset: 0, limit: 10}) }}>查询</button>
          </div>
          <div className={'rightTopFilterRight'}>
            <button
              onClick={() => { this.setState({pageType: 2}) }}
            >新增</button>
          </div>
        </div>
        <div className={'contentTable'}>
          {this.renderTable()}
        </div>
        <style jsx>{`
          .contentCenterRight{
            width:100%;
            height:768px; 
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
            border-radius: 4px ;
            margin-left:20px;
            display: flex;
            flex-direction: column;
          }
          .rightTopFilter{
            height:32px;
            margin:24px 32px 0 32px;
            display: flex;
            // background:#a0a0a0;
          }
          .rightTopFilter button{
            background:rgba(255,255,255,1);
            border-radius: 4px ; 
            border:1px solid #d9d9d9;
            height:32px; 
            cursor:pointer;
            margin-left:10px;
            font-size:14px;
            font-family:MicrosoftYaHei;
            color:rgba(0,0,0,0.65);
            padding: 0 15px;
          }
          .rightTopFilter button:first-child{
            margin-left:0;
          }
          .rightTopFilter button:hover{
            background:rgba(42,205,200,1);
            color:rgba(255,255,255,1);
            border:1px solid rgba(42,205,200,1);
          }
          .rightTopFilterLeft{
            flex:8;
            display:flex;
          }
          .rightTopFilterLeft>input{
            width: 150px;
            height: 30px;
            background: rgba(255,255,255,1);
            border-radius: 4px;
            padding: 0;
            border: 1px solid #d9d9d9;
          }
          .rightTopFilterLeft>button{

          }
          .rightTopFilterRight{
            display:flex;
          }
          .rightTopFilterRight button{
            
          }
          .contentTable{
            margin:18px 32px;
            // background:#b0b0b0;
          }
        `}</style>
      </div>
    )
  }
  // 返回检查项目名称
  itemsDetail(items) {
    return (
      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              {item.examination_name}
            </div>
          )
        })}
      </div>
    )
  }
  // 加载表格
  renderTable() {
    const { roles, pageInfo } = this.props
    console.log('roles=====', roles)
    return (
      <div className={'tableContent'}>
        <table>
          <thead>
            <tr>
              <td>账号</td>
              <td>姓名</td>
              <td>科室/部门</td>
              <td>所属权限分组</td>
              <td>生效开关</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            {roles.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.items.length > 0 ? this.itemsDetail(item.items) : ''}</td>
                  <td>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>{item.items.length > 0 ? this.itemsDetail(item.items) : ''}</td>
                  <td className={'operTd'}>
                    <div>
                      <div>修改</div>
                      <div className={'divideLine'}>|</div>
                      <div>删除</div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <PageCard
          offset={pageInfo.offset}
          limit={pageInfo.limit}
          total={pageInfo.total}
          style={{margin: '20px 0', width: '100%'}}
          onItemClick={({ offset, limit }) => {
            // const keyword = this.state.keyword
            this.getDataList({ offset, limit })
          }}
        />
        <style jsx>{`
          .tableContent{

          }
          .tableContent table{
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top:1px solid #e8e8e8;
          }
          .tableContent table thead{
            background:rgba(250,250,250,1);
            box-shadow: 1px 1px 0px 0px rgba(232,232,232,1) 
          }
          .tableContent table tr{
            height:40px; 
            display: flex;
            border-bottom:1px solid #e8e8e8;
            border-right:1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td{
            border-left:1px solid #e8e8e8;
            height:40px; 
            // display: flex;
            align-items: center;
            flex:1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd>div{
            margin:0 auto;
            width: max-content;
          }
          .operTd>div>div{
            cursor:pointer;
            color:#2ACDC8;
            float:left;
          }
          .operTd>div>div.divideLine{
            cursor:default;
            color:#e8e8e8;
            margin:0 5px;
          }
        `}</style>
      </div>
    )
  }
  // 显示列表信息
  renderList() {
    return (
      <div className={'contentCenter'}>
        {/* {this.renderLeftTree()} */}
        {this.renderRightTable()}
        <style jsx>{`
          .contentCenter{
            // background:#a0a0a0;
            display: flex;
          }
        `}</style>
      </div>
    )
  }
  render() {
    const {pageType, alertType} = this.state
    return (
      <div className={'boxContent'}>
        <div className={'topTitle'}>
          <span>用户权限</span>
          {pageType === 1 ? '' : <div className='back2List' onClick={() => this.setState({pageType: 1})}>{'<返回'}</div>}
        </div>
        {pageType === 1 ? this.renderList() : this.showView()}
        {alertType === 1 ? this.relatedItems() : ''}
        <style jsx>{`
          .boxContent{
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin:0 20px;
            min-width:1165px;
          }
          .topTitle{
            font-size:20px;
            font-family:MicrosoftYaHei;
            color:rgba(102,102,102,1);
            margin: 26px 5px;
            height: 20px;
            line-height: 20px;
            display: flex;
          }
          .topTitle span{
            flex:9;
          }
          .back2List{
            flex:1;
            cursor:pointer;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    roles: state.roles.array_data,
    pageInfo: state.roles.page_info
  }
}

export default connect(mapStateToProps, {
  queryRoleList
})(UserRightsScreen)