import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { queryDepartmentList, departmentCreate, DepartmentDelete, DepartmentUpdate } from '../../../../ducks'
// import moment from 'moment'
import { PageCard, Confirm } from '../../../../components'
import { limitLetterAndNumber } from '../../../../utils'

class DepartmentListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnelType: 1,
      pageType: 1,
      alertType: 0,
      editType: 0,
      keyword: '',
      departInfo: {
        code: '',
        name: '',
        weight: ''
      },
      items: []
    }
  }

  componentWillMount() {
    this.queryDepartmentList({})
  }

  queryDepartmentList({ keyword, offset = 0, limit = 10 }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, offset, limit })
    // const { departments } = this.props
    // this.setState({items: departments})
  }

  changeContent({ type }) {
    this.setState({ pageType: type })
  }

  // 删除科室
  DepartmentDelete(id) {
    const {DepartmentDelete, page_info, departments} = this.props
    this.refs.myAlert.confirm('提示', '确认删除这条记录？', 'Warning', async () => {
      let error = await DepartmentDelete({departmentID: id})
      if (error) {
        return this.refs.myAlert.alert('删除失败', error)
      } else {
        this.refs.myAlert.alert('删除成功')
        if (departments.length > 1) {
          this.queryDepartmentList({ offset: page_info.offset, limit: 10 })
        } else if (page_info.offset > 0) {
          this.queryDepartmentList({ offset: page_info.offset - 1, limit: 10 })
        }
      }
    })
  }

  showDoctor() {
    if (this.state.pageType !== 1) return null
    let { departments, page_info, clinic_name } = this.props
    // let { items } = this.state
    // items = departments
    console.log('departments=====', departments)
    // this.setState({items: departments})
    return (
      <div className={'newList'}>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索科室名称/科室编号' value={this.state.keyword} onChange={(e) => {
              this.setState({ keyword: e.target.value })
            }} />
            <button onClick={() => {
              let keyword = this.state.keyword
              this.queryDepartmentList({ keyword })
            }}>查询</button>
          </div>
          <div className={'boxRight'}>
            <button
              onClick={() => {
                this.setState({
                  alertType: 1,
                  editType: 0,
                  departInfo: {
                    code: '',
                    name: '',
                    weight: ''
                  }
                })
              }}
            >
              新增科室
            </button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            <li>
              <div>序号</div>
              <div>科室编码</div>
              <div>科室名称</div>
              <div>所属诊所</div>
              <div>是否开放预约/挂号</div>
              <div>操作</div>
            </li>
            {departments.map((depart, index) => {
              return (
                <li key={index}>
                  <div>{index + 1}</div>
                  <div>{depart.code}</div>
                  <div>{depart.name}</div>
                  <div>{clinic_name}</div>
                  <div>
                    <div>
                      <label>
                        <input
                          // readOnly
                          type='radio'
                          checked={depart.is_appointment}
                          onChange={async e => {
                            let info = {...depart}
                            info.is_appointment = true
                            const { DepartmentUpdate, clinic_id } = this.props
                            let requestData = {}
                            requestData.clinic_id = clinic_id
                            requestData.department_id = info.id
                            requestData.is_appointment = info.is_appointment
                            let error = await DepartmentUpdate(requestData)
                            if (error) {
                              alert(error)
                            } else {
                              const { queryDepartmentList, clinic_id } = this.props
                              queryDepartmentList({ clinic_id })
                            }
                          }}
                        />
                        是
                      </label>
                      <label>
                        <input
                          // readOnly
                          type='radio'
                          checked={!depart.is_appointment}
                          onChange={async e => {
                            let info = {...depart}
                            info.is_appointment = false
                            const { DepartmentUpdate, clinic_id } = this.props
                            let requestData = {}
                            requestData.clinic_id = clinic_id
                            requestData.department_id = info.id
                            requestData.is_appointment = info.is_appointment
                            let error = await DepartmentUpdate(requestData)
                            if (error) {
                              alert(error)
                            } else {
                              const { queryDepartmentList, clinic_id } = this.props
                              queryDepartmentList({ clinic_id })
                            }
                          }}
                        />
                        否
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span onClick={() => {
                        this.setState({alertType: 1, editType: 1, departInfo: depart})
                      }}>编辑</span>
                      |
                      <span
                        onClick={() => {
                          this.DepartmentDelete(depart.id)
                        }}
                      >删除</span>
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
            const keyword = this.state.keyword
            this.queryDepartmentList({ offset, limit, keyword })
          }}
        />
        <style jsx='true'>{`
          .filterBox {
            float: left;
            width: 1098px;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin: 30px 0 10px 66px;
          }
          .filterBox .boxLeft {
            float: left;
          }
          .filterBox .boxLeft input {
            float: left;
            width: 328px;
            height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
          .contentMenu {
            width: 100%;
            // background: #909090;
            float: left;
          }
          .contentMenu span:nth-child(1) {
            margin: 24px 0 0 32px;
          }
          .contentMenu span {
            width: 88px;
            height: 32px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            float: left;
            text-align: center;
            line-height: 32px;
            color: #000000;
            cursor: pointer;
            margin-top: 24px;
            margin-left: 10px;
          }
          .contentMenu span.sel {
            width: 100px;
            height: 32px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            color: #ffffff;
          }
          .newList_top {
            // background: #909090;
            height: 34px;
            max-width: 1146px;
            width: 100%;
            float: left;
            margin: 30px 0 28px 40px;
          }
          .newList_top .top_left {
            float: left;
          }
          .newList_top .top_left input {
            width: 300px;
            height: 32px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            padding: 0;
            border: 1px solid #dcdcdc;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            text-indent: 10px;
            float: left;
          }
          .newList_top .top_left button {
            width: 60px;
            height: 32px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            cursor: pointer;
            margin-left: 10px;
            float: left;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(255, 255, 255, 1);
          }
          .newList_top .top_right {
            float: right;
          }
          .newList_top .top_right button {
            float: left;
            width: 110px;
            height: 34px;
            background: rgba(238, 201, 6, 1);
            border: none;
            border-radius: 17px;
            cursor: pointer;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(255, 255, 255, 1);
            margin-right: 20px;
          }
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
  // 保存添加
  async saveAdd() {
    const { departmentCreate, clinic_id } = this.props
    let departInfo = this.state.departInfo
    departInfo.clinic_id = clinic_id
    let error = await departmentCreate({ departInfo })
    if (error) {
      alert(error)
    } else {
      const { queryDepartmentList, clinic_id } = this.props
      queryDepartmentList({ clinic_id })
      this.setState({ alertType: 0 })
    }
  }
  async DepartmentUpdate() {
    const { DepartmentUpdate, clinic_id } = this.props
    const {departInfo} = this.state
    let requestData = {}
    requestData.clinic_id = clinic_id
    requestData.departmentID = departInfo.id
    requestData.code = departInfo.code
    requestData.name = departInfo.name
    requestData.weight = departInfo.weight
    let error = await DepartmentUpdate(requestData)
    if (error) {
      alert(error)
    } else {
      const { queryDepartmentList, clinic_id } = this.props
      queryDepartmentList({ clinic_id })
      this.setState({ alertType: 0 })
    }
  }

  setDeaprtInfo(e, key, type = 1) {
    let newDepart = this.state.departInfo
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    newDepart[key] = value
    this.setState({ departInfo: newDepart })
  }
  // 显示新增科室
  showAddDepart() {
    // let departInfo = this.state.departInfo
    if (this.state.alertType !== 1) return null
    const {departInfo, editType} = this.state
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '700px', height: '480px', left: '500px' }}>
          <div className={'doctorList_top'}>
            <span>{editType === 0 ? '新增科室' : '编辑科室'}</span>
            <div />
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'departList_content'}>
            <ul>
              <li>
                <div>
                  <label>科室编码：</label>
                  <input
                    placeholder='请填写科室编码'
                    value={departInfo.code}
                    onChange={e => {
                      var reg = /^[0-9a-zA-Z]+$/
                      let value = e.target.value
                      if (reg.test(value) || value === '') {
                        this.setDeaprtInfo(value, 'code', 2)
                      }
                    }}
                  />
                </div>
                {departInfo.code === '' || !departInfo.code ? <div className={'mustTips'}>此为必填项</div> : ''}
              </li>
              <li>
                <div>
                  <label>科室名称：</label>
                  <input
                    placeholder='请填写科室名称'
                    value={departInfo.name}
                    onChange={e => this.setDeaprtInfo(e, 'name')}
                  />
                </div>
                {departInfo.name === '' || !departInfo.name ? <div className={'mustTips'}>此为必填项</div> : ''}
              </li>
              <li>
                <div>
                  <label>所属诊所：</label>
                  <input readOnly placeholder='请填写所属诊所' value='龙华诊所' />
                </div>
              </li>
              <li>
                <div>
                  <label>科室权重：</label>
                  <input
                    type='number'
                    placeholder='请填写科室权重'
                    value={departInfo.weight}
                    onChange={e => this.setDeaprtInfo(e, 'weight')}
                  />
                </div>
                {departInfo.weight === '' || !departInfo.weight ? <div className={'mustTips'}>此为必填项</div> : ''}
              </li>
            </ul>
            <div className={'buttonBtn'}>
              <button>取消</button>
              <button
                onClick={() => {
                  if (editType === 0) {
                    this.saveAdd()
                  } else {
                    this.DepartmentUpdate()
                  }
                }}
              >
                保存
              </button>
            </div>
          </div>
          <div className={'pagination'} />
          <style jsx global>
            {`
              .doctorList_top span:nth-child(1) {
                font-size: 16px;
                font-family: MicrosoftYaHei;
                color: rgba(102, 102, 102, 1);
                line-height: 17px;
                height: 17px;
                text-indent: 0;
                margin: 40px 0 0 50px;
                font-weight: bold;
                float: left;
              }
              .doctorList_top span:last-child {
                width: 40px;
                height: 40px;
                background: rgba(255, 95, 87, 1);
                float: right;
                color: #ffffff;
                font-size: 20px;
                text-align: center;
                text-indent: 10px;
                line-height: 35px;
                border-bottom-left-radius: 100%;
                cursor: pointer;
              }
              .departList_content ul {
                margin: 0 50px;
                display: flex;
                width: auto;
                flex-direction: column;
                // height: 400px;
                // background: #909090;
              }
              .departList_content ul li {
                margin: 10px 0;
                display: flex;
                flex-direction: column;
              }
              .departList_content ul li > div {
                display: flex;
              }
              .departList_content ul li > div.mustTips {
                color: red;
                font-size: 12px;
                text-align: end;
                display: block
              }
              .departList_content ul li label {
                // width: 25%;
                vertical-align: middle;
                line-height: 40px;
                flex: 1;
              }
              .departList_content ul li input {
                height: 40px;
                border-radius: 5px;
                border: 1px solid #d8d8d8;
                text-indent: 10px;
                flex: 6;
              }
              .buttonBtn {
                display: block;
                margin: 20px auto;
                width: 150px;
              }
              .buttonBtn button {
                width: 65px;
                height: 32px;
                background: rgba(255, 255, 255, 1);
                border-radius: 4px;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                color: rgba(0, 0, 0, 0.65);
                border: 1px solid #d9d9d9;
              }
              .buttonBtn button:nth-child(1) {
                float: left;
              }
              .buttonBtn button:nth-child(2) {
                float: right;
                background: rgba(42, 205, 200, 1);
                color: rgba(255, 255, 255, 1);
              }
            `}
          </style>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className={'orderRecordsPage'}>
        {this.showDoctor()}
        {this.showAddDepart()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departments.data,
    page_info: state.departments.page_info,
    clinic_id: state.user.data.clinic_id,
    clinic_name: state.user.data.clinic_name
  }
}

export default connect(mapStateToProps, { queryDepartmentList, departmentCreate, DepartmentDelete, DepartmentUpdate })(DepartmentListScreen)
