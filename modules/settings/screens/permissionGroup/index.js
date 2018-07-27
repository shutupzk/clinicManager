import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { queryRoleList, RoleDelete } from '../../../../ducks'
import { PageCard, Confirm } from '../../../../components'
import AddRoleScreen from './components/addRoleScreen'
import AssignUsersScreen from './components/assignUsersScreen'
import moment from 'moment'

class PermissionGroupScreen extends Component {
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
      alertType: 0,
      showWay: 1,
      role_id: '',
      selRole: {}
    }
  }

  componentWillMount() {
    this.getDataList({ offset: 0, limit: 10 })
  }
  showView() {
    let { pageType, showWay, role_id, selRole } = this.state
    let map = {
      // 1: <AddDrugScreen />,
      2: (
        <AddRoleScreen
          showWay={showWay}
          role_id={role_id}
          backToList={() => {
            this.setState({ pageType: 1 })
            this.getDataList({ offset: 0, limit: 10 })
          }}
        />
      ),
      3: (
        <AssignUsersScreen
          selRole={selRole}
          role_id={role_id}
          backToList={() => {
            this.setState({ pageType: 1 })
            this.getDataList({ offset: 0, limit: 10 })
          }}
        />
      )
    }
    return map[pageType] || null
  }
  // 获取数据列表
  getDataList({ offset = 0, limit = 10 }) {
    const { clinic_id, queryRoleList } = this.props
    const { keyword } = this.state
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
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <input
              placeholder={'分组名称'}
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button
              onClick={() => {
                this.getDataList({ offset: 0, limit: 10 })
              }}
            >
              查询
            </button>
          </div>
          <div className={'rightTopFilterRight'}>
            <button
              onClick={() => {
                this.setState({ pageType: 2, showWay: 1 })
              }}
            >
              新增
            </button>
          </div>
        </div>
        <div className={'contentTable'}>{this.renderTable()}</div>
        <style jsx='true'>{`
          .contentCenterRight {
            width: 100%;
            height: 768px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
          }
          .rightTopFilter {
            height: 32px;
            margin: 24px 32px 0 32px;
            display: flex;
            // background:#a0a0a0;
          }
          .rightTopFilter button {
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
          .rightTopFilter button:first-child {
            margin-left: 0;
          }
          .rightTopFilter button:hover {
            background: rgba(42, 205, 200, 1);
            color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(42, 205, 200, 1);
          }
          .rightTopFilterLeft {
            flex: 8;
            display: flex;
          }
          .rightTopFilterLeft > input {
            width: 150px;
            height: 30px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            padding: 0;
            border: 1px solid #d9d9d9;
          }
          .rightTopFilterLeft > button {
          }
          .rightTopFilterRight {
            display: flex;
          }
          .rightTopFilterRight button {
          }
          .contentTable {
            margin: 18px 32px;
            // background:#b0b0b0;
          }
        `}</style>
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
              <td>序号</td>
              <td style={{ flex: 2 }}>分组名称</td>
              <td style={{ flex: 2 }}>权限内容</td>
              <td style={{ flex: 2 }}>创建时间</td>
              <td style={{ flex: 2 }}>操作</td>
            </tr>
          </thead>
          <tbody>
            {roles.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ flex: 2 }}>{item.name}</td>
                  <td style={{ flex: 2 }} title={item.function_menu_name}>
                    {item.function_menu_name}
                  </td>
                  <td style={{ flex: 2 }}>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td style={{ flex: 2 }} className={'operTd'}>
                    <div>
                      <div
                        onClick={() => {
                          this.setState({
                            pageType: 2,
                            role_id: item.role_id,
                            showWay: 2
                          })
                        }}
                      >
                        修改
                      </div>
                      <div className={'divideLine'}>|</div>
                      <div
                        onClick={() => {
                          this.setState({
                            pageType: 3,
                            role_id: item.role_id,
                            selRole: item
                          })
                        }}
                      >
                        分配
                      </div>
                      <div className={'divideLine'}>|</div>
                      <div onClick={async () => {
                        this.refs.myAlert.confirm('提示', '确认删除？', 'Warning', async () => {
                          let error = await this.props.RoleDelete({ role_id: item.role_id })
                          if (error) {
                            return this.refs.myAlert.alert('创建角色失败', error, null, 'Danger')
                          }
                          this.getDataList({ offset: pageInfo.offset, limit: pageInfo.limit })
                        })
                      }}>删除</div>
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
          style={{ margin: '20px 0', width: '100%' }}
          onItemClick={({ offset, limit }) => {
            // const keyword = this.state.keyword
            this.getDataList({ offset, limit })
          }}
        />
        <style jsx='true'>{`
          .tableContent {
          }
          .tableContent table {
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top: 1px solid #e8e8e8;
          }
          .tableContent table thead {
            background: rgba(250, 250, 250, 1);
            box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
          }
          .tableContent table tr {
            height: 40px;
            display: flex;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td {
            border-left: 1px solid #e8e8e8;
            height: 40px;
            // display: flex;
            align-items: center;
            flex: 1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd > div {
            margin: 0 auto;
            width: max-content;
          }
          .operTd > div > div {
            cursor: pointer;
            color: #2acdc8;
            float: left;
          }
          .operTd > div > div.divideLine {
            cursor: default;
            color: #e8e8e8;
            margin: 0 5px;
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
        <style jsx='true'>{`
          .contentCenter {
            // background:#a0a0a0;
            display: flex;
          }
        `}</style>
      </div>
    )
  }
  render() {
    const { pageType, alertType } = this.state
    return (
      <div className={'boxContent'}>
        <div className={'topTitle'}>
          <span>权限分组</span>
          {pageType === 1 ? (
            ''
          ) : (
            <div className='back2List' onClick={() => this.setState({ pageType: 1 })}>
              {'<返回'}
            </div>
          )}
        </div>
        {pageType === 1 ? this.renderList() : this.showView()}
        {alertType === 1 ? this.relatedItems() : ''}
        <style jsx='true'>{`
          .boxContent {
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin: 0 20px;
            min-width: 1165px;
          }
          .topTitle {
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 26px 5px;
            height: 20px;
            line-height: 20px;
            display: flex;
          }
          .topTitle span {
            flex: 9;
          }
          .back2List {
            flex: 1;
            cursor: pointer;
          }
        `}</style>
        <Confirm ref='myAlert' />
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

export default connect(
  mapStateToProps,
  {
    queryRoleList, RoleDelete
  }
)(PermissionGroupScreen)
