import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { queryDepartmentList, departmentCreate } from '../../../../ducks'
import moment from 'moment'
import { PageCard } from '../../../../components'

class DepartmentListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnelType: 1,
      pageType: 1,
      alertType: 0,
      keyword: '',
      departInfo: {
        code: '',
        name: '',
        weight: ''
      }
    }
  }

  componentWillMount() {
    this.queryDepartmentList({})
  }

  queryDepartmentList({ keyword, offset = 0, limit = 6 }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, offset, limit })
  }

  changeContent({ type }) {
    this.setState({ pageType: type })
  }

  showDoctor() {
    if (this.state.pageType !== 1) return null
    let { departments, page_info } = this.props
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
                this.setState({ alertType: 1 })
              }}
            >
              新增科室
            </button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {departments.map((depart, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{depart.name}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>科室编号：</a>
                      <a>{depart.code}</a>
                    </span>
                    <span>
                      <a>可否挂号：</a>
                      <a>{depart.is_appointment === true ? '可以' : '不可以'}</a>
                    </span>
                    <span>
                      <a>创建时间：</a>
                      <a>{moment(depart.created_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span>
                      <a>更新时间：</a>
                      <a>{moment(depart.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.showCompleteHealthFile()}>查看</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>编辑</span>
                    <span onClick={() => this.showCompleteHealthFile()}>删除</span>
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
        <style jsx>{`
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
            width: 1120px;
            margin-left: 66px;
            // background: #909090;
          }
          .listContent ul {
            float: left;
            margin: 10px 0 0 0;
          }
          .listContent ul li {
            width: 360px;
            height: 270px;
            background: rgba(255, 255, 255, 1);
            border-radius: 7px;
            margin: 10px 10px 0 0;
            float: left;
            display: flex;
            flex-direction: column;
          }
          .itemTop {
            border-bottom: 2px solid #f4f7f8;
            margin: 10px 14px 0 14px;
            height: 37px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .itemTop span:nth-child(1) {
            width: auto;
            height: 19px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 51, 51, 1);
            margin-left: 12px;
          }
          .itemTop span:nth-child(2) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(3) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(4) {
            width: 60px;
            height: 20px;
            border-radius: 10px;
            float: right;
            text-align: center;
          }
          .itemCenter {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 332px;
            margin: 10px auto 0 auto;
            justify-content: center;
          }
          .itemCenter span {
            display: flex;
            flex-direction: row;
            height: 35px;
            line-height: 26px;
            margin: 0px 0px 0 12px;
          }
          .itemCenter span a:nth-child(1) {
            width: 75px;
            color: #666666;
            font-size: 14px;
          }
          .itemCenter span a:nth-child(2) {
            color: #333333;
            font-size: 14px;
          }
          .itemBottom {
            width: 100%;
            height: 39px;
            border-top: 2px solid #42b7ba;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .itemBottom span {
            flex: 1;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(49, 176, 179, 1);
            height: 39px;
            line-height: 39px;
            text-align: center;
            cursor:pointer;
          }
          .itemBottom span:nth-child(1) {
            border-right: 2px solid #31b0b3;
          }
          .itemBottom span:nth-child(2) {
            border-right: 2px solid #31b0b3;
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
  setDeaprtInfo(e, key) {
    let newDepart = this.state.departInfo
    newDepart[key] = e.target.value
    this.setState({ departInfo: newDepart })
  }
  // 显示新增科室
  showAddDepart() {
    // let departInfo = this.state.departInfo
    if (this.state.alertType !== 1) return null
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '700px', height: '480px', left: '500px' }}>
          <div className={'doctorList_top'}>
            <span>新增科室</span>
            <div />
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'departList_content'}>
            <ul>
              <li>
                <label>科室编码：</label>
                <input placeholder='请填写科室编码' defaultValue='' onChange={e => this.setDeaprtInfo(e, 'code')} />
              </li>
              <li>
                <label>科室名称：</label>
                <input placeholder='请填写科室名称' defaultValue='' onChange={e => this.setDeaprtInfo(e, 'name')} />
              </li>
              <li>
                <label>所属诊所：</label>
                <input placeholder='请填写所属诊所' value='龙华诊所' />
              </li>
              <li>
                <label>科室权重：</label>
                <input placeholder='请填写科室权重' defaultValue='' onChange={e => this.setDeaprtInfo(e, 'weight')} />
              </li>
            </ul>
            <div className={'buttonBtn'}>
              <button>取消</button>
              <button
                onClick={() => {
                  this.saveAdd()
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
                margin: 50px auto;
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departments.data,
    page_info: state.departments.page_info,
    clinic_id: state.user.data.clinic_id,
    clinic_code: '00000001'
  }
}

export default connect(mapStateToProps, { queryDepartmentList, departmentCreate })(DepartmentListScreen)
