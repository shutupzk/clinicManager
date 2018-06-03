import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import {
  queryDoctorList,
  doctorCreate,
  queryDepartmentList,
  PersonnelUpdate
} from '../../../../ducks'
// import moment from 'moment'
import { PageCard, Select, Confirm } from '../../../../components'

class DoctorListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnel_type: 2,
      doctorKeyword: '',
      employeeKeyword: '',
      showAddPersonnel: false,
      doctorInfo: {},
      items: [],
      editType: 0
    }
  }

  componentWillMount() {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, limit: 1000 })
    this.queryDoctorList({ personnel_type: 2 })
  }

  queryDoctorList({ personnel_type, keyword, offset = 0, limit = 10 }) {
    const { queryDoctorList, clinic_id } = this.props
    queryDoctorList({ clinic_id, personnel_type, keyword, offset, limit })
  }

  getDepartmentList() {
    const { departments } = this.props
    let array = []
    for (let key in departments) {
      const { name, id } = departments[key]
      array.push({
        value: id,
        label: name
      })
      // array.push(departments[key])
    }
    return array
  }

  changeContent({ personnel_type }) {
    this.setState({ personnel_type })
  }

  renderPersonnelList() {
    const { personnel_type, doctorKeyword, employeeKeyword } = this.state
    let defaultValue = doctorKeyword
    let showText = '医生'
    if (personnel_type === 1) {
      showText = '职员'
      defaultValue = employeeKeyword
    }
    let { doctors } = this.props
    // let {items} = this.state
    // items = doctors
    console.log('doctors====', doctors)
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder={`搜索${showText}名称/${showText}编号`} value={defaultValue} onChange={(e) => {
              if (personnel_type === 2) {
                this.setState({ doctorKeyword: e.target.value })
              } else {
                this.setState({employeeKeyword: e.target.value})
              }
            }} />
            <button onClick={() => {
              let keyword = personnel_type === 2 ? this.state.doctorKeyword : this.state.employeeKeyword
              this.queryDoctorList({ personnel_type, keyword })
            }}>查询</button>
          </div>
          <div className={'boxRight'}>
            <button
              onClick={() => {
                this.setState({ showAddPersonnel: true, editType: 0, doctorInfo: {} })
              }}
            >
              新增{showText}
            </button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            <li>
              <div>序号</div>
              <div>医生编码</div>
              <div>医生名称</div>
              <div>所属科室</div>
              <div>所属诊所</div>
              <div>是否开放预约/挂号</div>
              <div>操作</div>
            </li>
            {doctors.map((doctor, index) => {
              return (
                <li key={index}>
                  <div>{index + 1}</div>
                  <div>{doctor.code}</div>
                  <div>{doctor.name}</div>
                  <div>{doctor.department_name}</div>
                  <div>{doctor.clinic_name}</div>
                  <div>
                    <div>
                      <label>
                        <input
                          // readOnly
                          type='radio'
                          checked={doctor.is_appointment}
                          onChange={async e => {
                            let info = {...doctor}
                            info.is_appointment = true
                            const { PersonnelUpdate, clinic_id } = this.props
                            const { personnel_type } = this.state
                            let requestData = {}
                            requestData.is_appointment = info.is_appointment
                            requestData.personnel_id = info.id
                            requestData.clinic_id = clinic_id
                            requestData.personnel_type = personnel_type
                            // console.log('info=====', info)
                            let error = await PersonnelUpdate(requestData)
                            if (error) {
                              return this.refs.myAlert.alert('修改失败', error)
                            }
                            this.queryDoctorList({ personnel_type })
                          }}
                        />
                        是
                      </label>
                      <label>
                        <input
                          // readOnly
                          type='radio'
                          checked={!doctor.is_appointment}
                          onChange={async e => {
                            let info = {...doctor}
                            info.is_appointment = false
                            const { PersonnelUpdate, clinic_id } = this.props
                            const { personnel_type } = this.state
                            let requestData = {}
                            requestData.is_appointment = info.is_appointment
                            requestData.personnel_id = info.id
                            requestData.clinic_id = clinic_id
                            requestData.personnel_type = personnel_type
                            // console.log('info=====', info)
                            let error = await PersonnelUpdate(requestData)
                            if (error) {
                              return this.refs.myAlert.alert('修改失败', error)
                            }
                            this.queryDoctorList({ personnel_type })
                          }}
                        />
                        否
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span
                        onClick={() => {
                          this.setState({ showAddPersonnel: true, editType: 1, doctorInfo: doctor })
                        }}
                      >编辑</span>
                      {/* |
                      <span>删除</span> */}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          {/* <PageCard numberValue={1} data={[{}, {}]} page={1} /> */}
        </div>
        <style jsx='true'>{`
          .filterBox {
            float: left;
            width: 1098px;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 66px;
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
            // width:max-content;
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
    const { doctorCreate, clinic_id } = this.props
    const { doctorInfo, personnel_type } = this.state
    let error = await doctorCreate({ ...doctorInfo, clinic_id, personnel_type })
    if (error) {
      return this.refs.myAlert.alert('添加失败', error)
    }
    this.queryDoctorList({ personnel_type })
    this.refs.myAlert.alert('添加成功')
    this.setState({ showAddPersonnel: false })
  }
  // 保存编辑
  async PersonnelUpdate() {
    const { PersonnelUpdate, clinic_id } = this.props
    const { doctorInfo, personnel_type } = this.state
    let personnel_id = doctorInfo.id
    let error = await PersonnelUpdate({ ...doctorInfo, personnel_id, clinic_id, personnel_type })
    if (error) {
      return this.refs.myAlert.alert('添加失败', error)
    }
    this.queryDoctorList({ personnel_type })
    this.refs.myAlert.alert('修改成功')
    this.setState({ showAddPersonnel: false })
  }

  setDoctorInfo(e, key, type = 1) {
    let newDoctor = this.state.doctorInfo
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    newDoctor[key] = value
    this.setState({ doctorInfo: newDoctor })
  }

  showAddPersonnelDiv() {
    const { showAddPersonnel, personnel_type, doctorInfo, editType } = this.state
    if (!showAddPersonnel) return null
    // const departments = this.getDepartmentList()
    // console.log('doctorInfo====', doctorInfo)
    let keyName = personnel_type === 2 ? '医生' : '职员'
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '700px', height: '800px', left: '450px', top: '50px' }}>
          <div className={'doctorList_top'}>
            <span>{editType === 0 ? '新增' : '编辑'}{keyName}</span>
            <div />
            <span onClick={() => this.setState({ showAddPersonnel: false })}>×</span>
          </div>
          <div className={'newList_content'}>
            <ul>
              <li>
                <label>{keyName}编码：</label>
                <input
                  value={doctorInfo.code}
                  onChange={e => this.setDoctorInfo(e, 'code')}
                />
              </li>
              <li>
                <label>{keyName}名称</label>
                <input
                  value={doctorInfo.name}
                  onChange={e => this.setDoctorInfo(e, 'name')}
                />
              </li>
              <li>
                <label>所属诊所</label>
                <label>{this.props.clinic_name}</label>
              </li>
              <li>
                <label>科室名称</label>
                <div style={{flex: 6}}>
                  <div>
                    <Select
                      placeholder={'请选择科室'}
                      value={{value: doctorInfo.department_id, label: doctorInfo.department_name}}
                      options={this.getDepartmentList()}
                      onChange={({value, label}) => {
                        this.setDoctorInfo(value, 'department_id', 2)
                        this.setDoctorInfo(label, 'department_name', 2)
                      }}
                    />
                  </div>
                </div>
              </li>
              <li>
                <label>{keyName}权重</label>
                <input
                  value={doctorInfo.weight}
                  onChange={e => this.setDoctorInfo(e, 'weight')}
                />
              </li>
              <li>
                <label>{keyName}职称</label>
                <input
                  value={doctorInfo.title}
                  onChange={e => this.setDoctorInfo(e, 'title')}
                />
              </li>
              <li>
                <label>登录账号</label>
                <input
                  value={doctorInfo.username}
                  onChange={e => this.setDoctorInfo(e, 'username')}
                />
              </li>
              <li>
                <label>设置密码</label>
                <input
                  type='password'
                  value={doctorInfo.password}
                  onChange={e => this.setDoctorInfo(e, 'password')}
                />
              </li>
              <li>
                <label>确认密码</label>
                <input
                  type='password'
                  value={doctorInfo.passwordConfirm}
                  onChange={e => this.setDoctorInfo(e, 'passwordConfirm')}
                />
              </li>
            </ul>
            <div className={'buttonBtn'}>
              <button onClick={() => this.setState({ showAddPersonnel: false })}>取消</button>
              <button
                onClick={() => {
                  if (editType === 0) {
                    this.saveAdd()
                  } else {
                    this.PersonnelUpdate()
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
              .newList_content ul {
                margin: 0 50px;
                display: flex;
                width: auto;
                flex-direction: column;
                // height: 400px;
                // background: #909090;
              }
              .newList_content ul li {
                margin: 10px 0;
                display: flex;
              }
              .newList_content ul li label {
                // width: 25%;
                vertical-align: middle;
                line-height: 40px;
                flex: 1;
              }
              .newList_content ul li input {
                height: 40px;
                border-radius: 5px;
                border: 1px solid #d8d8d8;
                text-indent: 10px;
                flex: 6;
              }
              .newList_content ul li select {
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
    let { page_info } = this.props
    const { personnel_type } = this.state
    return (
      <div className={'orderRecordsPage'}>
        <div className={'childTopBar'}>
          <span
            className={this.state.personnel_type === 2 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 2 })
              this.queryDoctorList({ personnel_type: 2 })
            }}
          >
            医生
          </span>
          <span
            className={this.state.personnel_type === 1 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 1 })
              this.queryDoctorList({ personnel_type: 1 })
            }}
          >
            职员
          </span>
        </div>
        {this.renderPersonnelList()}
        {this.showAddPersonnelDiv()}
        <PageCard
          offset={page_info.offset}
          limit={page_info.limit}
          total={page_info.total}
          onItemClick={({ offset, limit }) => {
            let keyword = personnel_type === 2 ? this.state.doctorKeyword : this.state.employeeKeyword
            this.queryDoctorList({ personnel_type, offset, limit, keyword })
          }}
        />
        <style jsx='true'>{`
          .childTopBar {
            float: left;
            width: 100%;
            // background:#909090;
          }
          .childTopBar span {
            margin-top: 31px;
            width: 126px;
            height: 37px;
            background: rgba(255, 255, 255, 1);
            float: left;
            text-align: center;
            line-height: 37px;
            cursor: pointer;
            margin-bottom: 10px;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 66px;
          }
          .childTopBar span:hover,
          .childTopBar span.sel {
            background: rgba(42, 205, 200, 1);
            border-radius: 4px 0px 0px 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei-Bold;
            color: rgba(255, 255, 255, 1);
          }
          .childTopBar span:nth-child(2):hover,
          .childTopBar span.sel {
            border-radius: 0;
          }
          .childTopBar span:nth-child(3):hover,
          .childTopBar span.sel {
            border-radius: 4px 4px 0px 0px;
          }
        `}</style>
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    doctors: state.doctors.array_data,
    page_info: state.doctors.page_info,
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id,
    clinic_name: state.user.data.clinic_name
  }
}

export default connect(mapStateToProps, {
  queryDoctorList,
  doctorCreate,
  queryDepartmentList,
  PersonnelUpdate
})(DoctorListScreen)
