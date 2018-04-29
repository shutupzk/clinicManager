import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { doctorList, doctorCreate, departmentList } from '../../../../ducks'

class DoctorListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnel_type: 2,
      doctorKeyword: '',
      employeeKeyword: '',
      showPersonnel: false,
      doctorInfo: {}
    }
  }

  componentWillMount() {
    const { departmentList, clinic_id } = this.props
    departmentList({ clinic_id })
    this.queryList()
  }

  queryList(keyword = '', personnel_type = 2) {
    const { doctorList, clinic_id } = this.props
    doctorList({ clinic_id, personnel_type, keyword })
  }

  getListData(personnel_type) {
    const { doctors } = this.props
    console.log('doctors ======', doctors)
    const { doctorKeyword, employeeKeyword } = this.state
    const keyword = personnel_type === 2 ? doctorKeyword : employeeKeyword
    let array = []
    for (let key in doctors) {
      if (doctors[key].personnel_type !== personnel_type) continue
      if (keyword) {
        let pattern = new RegExp(keyword)
        const { code, name } = doctors[key]
        if (!pattern.test(code) && !pattern.test(name)) continue
      }
      array.push(doctors[key])
    }
    return array
  }

  getDepartmentList() {
    const { departments } = this.props
    let array = []
    for (let key in departments) {
      array.push(departments[key])
    }
    return array
  }

  goToDetail({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/detail')
  }

  goToEdit({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/edit')
  }

  async toRemove({ apiName }) {
    const confirmed = confirm('确定要删除  ' + apiName + '?')
    if (confirmed) {
      const { removeBaseApi } = this.props
      const error = await removeBaseApi({ apiName })
      if (error) {
        alert(error)
      }
    }
  }

  renderTitle() {
    return (
      <ul className='flex tb-flex'>
        <li style={{ flex: 1, height: '40px', lineHeight: '40px' }}>序号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>医生编码 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>医生名称</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属科室</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属诊所</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>是否开放预约挂号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderTitle1() {
    return (
      <ul className='flex tb-flex'>
        <li style={{ flex: 1, height: '40px', lineHeight: '40px' }}>序号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>职员编码 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>职员名称</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属科室(部门)</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属诊所</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>职位</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderRow({ code, name, department_name, clinic_name, is_appointment }, index) {
    const { fenyeItem, buttonMiddle } = styles
    return (
      <ul className='flex tb-flex' key={index}>
        <li style={{ flex: 1 }}>{`${index + 1}`}</li>
        <li style={{ flex: 3 }}>{code}</li>
        <li style={{ flex: 3 }}>{name}</li>
        <li style={{ flex: 3 }}>{department_name}</li>
        <li style={{ flex: 3 }}>{clinic_name}</li>
        <li style={{ flex: 5 }}>{is_appointment ? '是' : '否'}</li>
        <li style={{ flex: 3, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({})}>
            编辑
          </button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({})}>
            删除
          </button>
        </li>
      </ul>
    )
  }

  renderRow1({ code, name, department_name, clinic_name, is_appointment }, index) {
    const { fenyeItem, buttonMiddle } = styles
    return (
      <ul className='flex tb-flex' key={index}>
        <li style={{ flex: 1 }}>{`${index + 1}`}</li>
        <li style={{ flex: 3 }}>{code}</li>
        <li style={{ flex: 3 }}>{name}</li>
        <li style={{ flex: 3 }}>{department_name}</li>
        <li style={{ flex: 3 }}>{clinic_name}</li>
        <li style={{ flex: 3 }}>{is_appointment ? '是' : '否'}</li>
        <li style={{ flex: 3, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({})}>
            编辑
          </button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({})}>
            删除
          </button>
        </li>
      </ul>
    )
  }
  changeContent({ personnel_type }) {
    this.setState({ personnel_type })
  }
  showDoctor() {
    let exercises = this.getListData(2)
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索医生名称/医生编号' ref='doctorKeywordInput' defaultValue={this.state.doctorKeyword} />
          <button
            className={'searchBtn'}
            onClick={() => {
              const doctorKeyword = this.refs.doctorKeywordInput.value
              this.setState({ doctorKeyword })
              this.queryList(doctorKeyword, 2)
            }}
          >
            查询
          </button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'} onClick={() => this.setState({ showPersonnel: true })}>
            新增医生
          </button>
          {this.renderTitle()}
          {exercises.map((item, index) => {
            return this.renderRow(item, index)
          })}
        </div>
      </div>
    )
  }
  showEmployee() {
    let exercises = this.getListData(1)
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索职员名称/职员编号' ref='employeeKeywordInput' defaultValue={this.state.employeeKeyword} />
          <button
            className={'searchBtn'}
            onClick={() => {
              const employeeKeyword = this.refs.employeeKeywordInput.value
              this.setState({ employeeKeyword })
              this.queryList(employeeKeyword, 1)
            }}
          >
            查询
          </button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'} onClick={() => this.setState({ showPersonnel: true })}>
            新增职员
          </button>
          {this.renderTitle1()}
          {exercises.map((item, index) => {
            return this.renderRow1(item, index)
          })}
        </div>
      </div>
    )
  }

  // 保存添加
  async saveAdd() {
    const { doctorCreate, clinic_id } = this.props
    const { doctorInfo, personnel_type } = this.state
    let error = await doctorCreate({ ...doctorInfo, clinic_id, personnel_type })
    if (error) {
      return alert('添加失败', error)
    }
    this.queryList()
    alert('添加成功')
    this.setState({ showPersonnel: false })
  }

  setDoctorInfo(e, key) {
    let newDoctor = this.state.doctorInfo
    newDoctor[key] = e.target.value
    this.setState({ doctorInfo: newDoctor })
  }

  showAddDepart() {
    const { showPersonnel } = this.state
    if (!showPersonnel) return null
    const departments = this.getDepartmentList()
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '700px', height: '800px', left: '450px', top: '50px' }}>
          <div className={'doctorList_top'}>
            <span>新增医生</span>
            <div />
            <span onClick={() => this.setState({ showPersonnel: false })}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              <li>
                <label>医生编码：</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'code')} />
              </li>
              <li>
                <label>医生名称</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'name')} />
              </li>
              <li>
                <label>所属诊所</label>
                <label>{this.props.clinic_name}</label>
              </li>
              <li>
                <label>科室名称</label>
                <select onChange={e => this.setDoctorInfo(e, 'department_id')}>
                  <option>请选择</option>
                  {departments.map(({ id, name }, index) => {
                    return (
                      <option key={index} value={id}>
                        {name}
                      </option>
                    )
                  })}
                </select>
              </li>
              <li>
                <label>医生权重</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'weight')} />
              </li>
              <li>
                <label>医生职称</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'title')} />
              </li>
              <li>
                <label>登录账号</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'username')} />
              </li>
              <li>
                <label>设置密码</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'password')} />
              </li>
              <li>
                <label>确认密码</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'passwordConfirm')} />
              </li>
            </ul>
            <div className={'buttonBtn'}>
              <button onClick={() => this.setState({ showPersonnel: false })}>取消</button>
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
              .doctorList_content ul {
                margin: 0 50px;
                display: flex;
                width: auto;
                flex-direction: column;
                // height: 400px;
                // background: #909090;
              }
              .doctorList_content ul li {
                margin: 10px 0;
                display: flex;
              }
              .doctorList_content ul li label {
                // width: 25%;
                vertical-align: middle;
                line-height: 40px;
                flex: 1;
              }
              .doctorList_content ul li input {
                height: 40px;
                border-radius: 5px;
                border: 1px solid #d8d8d8;
                text-indent: 10px;
                flex: 6;
              }
              .doctorList_content ul li select {
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
    // const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={'childTopBar'}>
          <span className={this.state.personnel_type === 2 ? 'sel' : ''} onClick={() => this.changeContent({ personnel_type: 2 })}>
            医生
          </span>
          <span className={this.state.personnel_type === 1 ? 'sel' : ''} onClick={() => this.changeContent({ personnel_type: 1 })}>
            职员
          </span>
        </div>
        {this.state.personnel_type === 2 ? this.showDoctor() : ''}
        {this.state.personnel_type === 1 ? this.showEmployee() : ''}
        {this.showAddDepart()}
      </div>
    )
  }
}

const styles = {
  titleText: {
    fontSize: '16px'
  },
  liPadding: {
    padding: '10px 15px'
  },
  orderTitle: {
    color: '#797979',
    background: '#f2f2f2',
    borderRadius: '3px'
  },
  buttonMiddle: {
    height: '30px',
    width: '50px'
  },
  buttonLarge: {
    height: '40px',
    width: '80px',
    fontSize: '20px'
  },
  fenyeItem: {
    background: '#3ca0ff',
    borderRadius: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    border: '1px solid #3ca0ff',
    color: '#fff'
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    doctors: state.doctors.data,
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id,
    clinic_name: state.user.data.clinic_name
  }
}

export default connect(mapStateToProps, { doctorList, doctorCreate, departmentList })(DoctorListScreen)
