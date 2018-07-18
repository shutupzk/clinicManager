import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { PersonnelWithUsername, UpdatePersonnelStatus } from '../../../../ducks'
import { PageCard, Confirm } from '../../../../components'
import AddUserScreen from './components/addUserScreen'

class UserRightsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      keyword: '',
      personnel: {}
    }
  }

  componentWillMount() {
    this.getDataList({ offset: 0, limit: 10 })
  }
  showView() {
    const { pageInfo } = this.props
    const { offset, limit } = pageInfo
    const { personnel } = this.state
    return (
      <AddUserScreen
        personnel={personnel}
        backToList={() => {
          this.setState({ pageType: 1 })
          this.getDataList({ offset, limit })
        }}
      />
    )
  }
  // 获取数据列表
  getDataList({ offset = 0, limit = 10 }) {
    const { clinic_id, PersonnelWithUsername } = this.props
    const { keyword } = this.state
    PersonnelWithUsername({ clinic_id, keyword, offset, limit })
  }

  // 加载右侧表格
  renderRightTable() {
    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <input
              placeholder={'账号/人员姓名'}
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
          {/* <div className={'rightTopFilterRight'}>
            <button
              onClick={() => {
                this.setState({ pageType: 2 })
              }}
            >
              新增
            </button>
          </div> */}
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

  async updateStatus(personnel, status) {
    const { pageInfo, UpdatePersonnelStatus } = this.props
    let err = await UpdatePersonnelStatus({ personnel_id: personnel.personnel_id, status })
    if (err) {
      return this.refs.myAlert.alert('修改失败', err, null, 'Danger')
    }
    const { offset, limit } = pageInfo
    this.getDataList({ offset, limit })
  }

  renderTable() {
    const { doctors, pageInfo } = this.props
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
            {doctors.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.personnel_name}</td>
                  <td>{item.department_name}</td>
                  <td>{item.role_name}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <input type='radio' checked={item.status + '' === 'true'} value={!false} onChange={async e => this.updateStatus(item, true)} />
                      <label htmlFor='man'>生效</label>
                      <input type='radio' checked={item.status + '' === 'false'} style={{ marginLeft: '10px' }} value={false} onChange={async e => this.updateStatus(item, false)} />
                      <label htmlFor='woman'>关闭</label>
                    </div>
                  </td>
                  <td className={'operTd'}>
                    <div>
                      <div onClick={() => this.setState({ pageType: 2, personnel: item })}>修改</div>
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
    const { pageType } = this.state
    return (
      <div className={'boxContent'}>
        <div className={'topTitle'}>
          <span>{pageType === 1 ? '用户权限' : '用户权限分配'}</span>
          {pageType === 1 ? (
            ''
          ) : (
            <div className='back2List' onClick={() => this.setState({ pageType: 1 })}>
              {'<返回'}
            </div>
          )}
        </div>
        {pageType === 1 ? this.renderList() : this.showView()}
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
    doctors: state.doctors.username_array,
    pageInfo: state.doctors.username_page_info
  }
}

export default connect(
  mapStateToProps,
  {
    PersonnelWithUsername,
    UpdatePersonnelStatus
  }
)(UserRightsScreen)
