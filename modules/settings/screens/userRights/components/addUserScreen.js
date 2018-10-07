import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryRoleList, PersonnelRoles, PersonnelAuthorizationAllocation, queryDepartmentList, queryDoctorList, UpdatePersonnelUsername } from '../../../../../ducks'
import { Confirm, Select } from '../../../../../components'

class AddUserScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasRoles: [],
      department_id: '-1'
    }
  }

  async componentWillMount() {
    this.queryRoleList()
    this.queryDepartmentList({})
    this.queryDoctorList({})
  }

  async queryRoleList() {
    let { queryRoleList, clinic_id, PersonnelRoles, personnel = {}, pageType } = this.props
    queryRoleList({ clinic_id, limit: 1000 })
    if (pageType === 2 && personnel.personnel_id) {
      let hasRoles = await PersonnelRoles({ id: personnel.personnel_id })
      this.setState({ hasRoles })
    }
  }

  getDepartmentOptions() {
    const { departments } = this.props
    let options = [{ value: '-1', label: '全部科室' }]
    for (let { id, name } of departments) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  getDoctorOptions() {
    const { doctors } = this.props
    let options = []
    for (let doctor of doctors) {
      const { id, name, username } = doctor
      if (!username) continue
      options.push({
        value: id,
        label: name,
        ...doctor
      })
    }
    return options
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  queryDepartmentList({ keyword, limit = 10 }) {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, keyword, limit })
  }

  queryDoctorList({ keyword, limit = 10, department_id }) {
    const { queryDoctorList, clinic_id } = this.props
    let param = {
      clinic_id,
      keyword,
      limit: 1000,
      personnel_type: 2
    }
    if (department_id && department_id !== '-1') {
      param.department_id = department_id
    }
    queryDoctorList(param)
  }

  renderAddPersonel() {
    let { pageType } = this.props
    if (pageType !== 3) return null
    const { department_id, personnel_id, username, password, repassword } = this.state
    const departments = this.getDepartmentOptions()
    const doctors = this.getDoctorOptions()
    const doctor = this.getSelectValue(personnel_id, doctors)
    return (
      <div style={{ display: 'flex', direction: 'row', alignItems: 'center', width: '100%', height: '60px', marginBottom: '20px', fontSize: '18px' }}>
        <div style={{ width: '200px' }}>
          <Select
            placeholder='选择科室'
            options={departments}
            value={this.getSelectValue(department_id, departments)}
            onChange={e => {
              let id = e.value
              this.setState({ department_id: id, personnel_id: null }, () => {
                this.queryDoctorList({ department_id: id, limit: 100 })
              })
            }}
          />
        </div>
        <div style={{ width: '200px', margin: '12px 20px' }}>
          <Select
            placeholder='选择医生'
            options={doctors}
            value={doctor}
            onChange={e => {
              let id = e.value
              this.setState({ personnel_id: id, username: '', password: '', repassword: '' })
            }}
          />
        </div>
        <div className='rightTopFilterLeft'>
          <input
            type='text'
            value={username || ''}
            placeholder={'账号'}
            maxLength={12}
            minLength={6}
            onChange={e => {
              this.setState({ username: e.target.value })
            }}
          />
          <input
            type='password'
            value={password || ''}
            maxLength={12}
            minLength={6}
            placeholder={'密码'}
            onChange={e => {
              this.setState({ password: e.target.value })
            }}
          />
          <input
            type='password'
            maxLength={12}
            minLength={6}
            value={repassword || ''}
            placeholder={'密码确认'}
            onChange={e => {
              this.setState({ repassword: e.target.value })
            }}
          />
        </div>
        <style jsx='true'>
          {`
            .rightTopFilterLeft > input {
              width: 150px;
              height: 40px;
              margin-left: 10px;
              background: rgba(255, 255, 255, 1);
              border-radius: 4px;
              padding: 0 5px 0 5px;
              border: 1px solid #d9d9d9;
            }
          `}
        </style>
      </div>
    )
  }

  renderPersonel() {
    let { personnel = {}, pageType } = this.props
    if (pageType !== 2) return null
    return (
      <div style={{ display: 'flex', direction: 'row', alignItems: 'center', width: '100%', height: '60px', marginBottom: '20px', fontSize: '18px' }}>
        <div>科室/部门名称: {personnel.department_name}</div>
        <div style={{ marginLeft: '40px' }}>姓名: {personnel.personnel_name}</div>
        <div style={{ marginLeft: '40px' }}>账号: {personnel.username}</div>
      </div>
    )
  }

  formatRoles() {
    const { hasRoles } = this.state
    const { roles } = this.props
    let array = []
    for (let role of roles) {
      let checked = false
      for (let hr of hasRoles) {
        if (hr.role_id === role.role_id) {
          checked = true
          break
        }
      }
      array.push({ ...role, checked })
    }
    return array.sort((a, b) => {
      if (a.role_id > b.role_id) return 1
      return -1
    })
  }

  async submit() {
    const { hasRoles, personnel_id, username, password, repassword } = this.state
    const { PersonnelAuthorizationAllocation, personnel, UpdatePersonnelUsername, pageType } = this.props
    let items = []
    for (let role of hasRoles) {
      items.push({ role_id: role.role_id + '' })
    }
    if (pageType === 2) {
      let err = await PersonnelAuthorizationAllocation({ id: personnel.personnel_id, items: JSON.stringify(items) })
      if (err) {
        return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
      } else {
        this.refs.myAlert.alert('保存成功')
      }
    } else {
      if (!personnel_id) {
        return this.refs.myAlert.alert('保存失败', '请选择医生', null, 'Danger')
      }
      if (!username) {
        return this.refs.myAlert.alert('保存失败', '请输入用户名', null, 'Danger')
      }
      if (password !== repassword) {
        return this.refs.myAlert.alert('保存失败', '两次密码不一致', null, 'Danger')
      }
      let err = await UpdatePersonnelUsername({ personnel_id, username, password })
      if (err) {
        return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
      } else {
        let err = await PersonnelAuthorizationAllocation({ id: personnel_id, items: JSON.stringify(items) })
        if (err) {
          return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
        } else {
          this.refs.myAlert.alert('保存成功')
        }
      }
    }
  }

  render() {
    const { hasRoles } = this.state
    const roles = this.formatRoles()
    return (
      <div className={'contentCenter'}>
        <div className={'commonBlank baseInfoBlank'}>
          <span />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {this.renderPersonel()}
            {this.renderAddPersonel()}
            <div style={{ fontSize: '18px', fontWeight: '400' }}>
              <label>选择权限组</label>
            </div>
            <ul>
              {roles.map((item, index) => {
                return (
                  <li key={index}>
                    <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '13px', fontWeight: '400', marginBottom: '5px', marginTop: '5px', alignItems: 'center' }}>
                      <input
                        type={'checkBox'}
                        checked={item.checked}
                        onChange={e => {
                          console.log(' e.target.checked ======', e.target.checked)
                          if (e.target.checked === false) {
                            let array = []
                            for (let role of hasRoles) {
                              if (item.role_id === role.role_id) continue
                              array.push(role)
                            }
                            this.setState({ hasRoles: array })
                          } else {
                            this.setState({ hasRoles: [...hasRoles, item] })
                          }
                        }}
                      />
                      <label>{item.name}</label>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.props.backToList()}>取消</button>
            <button
              onClick={() => {
                this.submit()
              }}
            >
              保存
            </button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }

  style() {
    return (
      <style jsx={'1'}>{`
        .contentCenter {
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button {
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
        .contentCenter button:hover {
          background: rgba(42, 205, 200, 1);
          color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(42, 205, 200, 1);
        }
        .bottomBtn {
          // background:#909090;
          width: 1098px;
          margin: 0 0 30px 0;
          display: flex;
          align-items: center;
        }
        .bottomBtn > div {
          margin: 0 auto;
        }
        .bottomBtn button {
        }
        .commonBlank {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          margin-bottom: 20px;
          // width:1038px;
          min-width: 1038px;
          display: flex;
          flex-direction: column;
          padding: 5px 30px;
        }
        .commonBlank > span {
          font-size: 18px;
          height: 40px;
          border-bottom: 1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank > div {
          display: flex;
          margin: 10px 0;
        }
        .commonBlank > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > button {
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
        .commonBlank > div > ul {
          // background:#a0a0a0;
          margin: 0 auto;
          width: 100%;
        }
        .commonBlank > div > ul > li {
          float: left;
          width: 24%;
          display: flex;
          flex-direction: column;
          min-height: 40px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 50px;
          padding: 0;
        }
        .commonBlank > div > ul > li > div > label {
          margin-left: 5px;
          display: flex;
          align-items: center;
          float: left;
          height: 50px;
        }
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    roles: state.roles.array_data,
    departments: state.departments.data,
    doctors: state.doctors.array_data
  }
}

export default connect(
  mapStateToProps,
  {
    queryRoleList,
    PersonnelRoles,
    PersonnelAuthorizationAllocation,
    queryDepartmentList,
    queryDoctorList,
    UpdatePersonnelUsername
  }
)(AddUserScreen)
