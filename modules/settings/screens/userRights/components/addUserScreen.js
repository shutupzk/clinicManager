import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryRoleList, PersonnelRoles, PersonnelAuthorizationAllocation } from '../../../../../ducks'
import { Confirm } from '../../../../../components'

class AddUserScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasRoles: []
    }
  }

  async componentWillMount() {
    this.queryRoleList()
  }

  async queryRoleList() {
    let { queryRoleList, clinic_id, PersonnelRoles, personnel = {} } = this.props
    queryRoleList({ clinic_id, limit: 1000 })
    if (personnel.personnel_id) {
      let hasRoles = await PersonnelRoles({ id: personnel.personnel_id })
      this.setState({ hasRoles })
    }
  }

  renderPersonel() {
    let { personnel = {} } = this.props
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
    const { hasRoles } = this.state
    const { PersonnelAuthorizationAllocation, personnel } = this.props
    let items = []
    for (let role of hasRoles) {
      items.push({ role_id: role.role_id + '' })
    }
    let err = await PersonnelAuthorizationAllocation({ id: personnel.personnel_id, items: JSON.stringify(items) })
    if (err) {
      return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
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
            <button>取消</button>
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
    roles: state.roles.array_data
  }
}

export default connect(
  mapStateToProps,
  {
    queryRoleList,
    PersonnelRoles,
    PersonnelAuthorizationAllocation
  }
)(AddUserScreen)
