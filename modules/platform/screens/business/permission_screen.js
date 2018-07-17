import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryClinicHassetPermissions, queryClinicUnsetPermissions, createClinicPermissions, MenubarList } from '../../../../ducks'
import { Confirm } from '../../../../components'
import { formatMenuList, formatUnHasMemuList, deleteMenu, addMenu } from '../../../../utils'

class BusinessClinicPermissionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSet: [],
      allMenus: []
    }
  }

  async submit() {
    const { hasSet } = this.state
    const { clinic_id, createClinicPermissions } = this.props
    let items = []
    for (let item of hasSet) {
      items.push({function_menu_id: item.function_menu_id + ''})
    }
    let error = await createClinicPermissions({ clinic_id, items: JSON.stringify(items) })
    if (error) {
      return this.refs.myAlert.alert('设置权限失败', error, null, 'Warning')
    } else {
      this.refs.myAlert.alert('设置权限成功')
    }
  }

  cancel() {}

  async componentDidMount() {
    let { queryClinicHassetPermissions, clinic_id, MenubarList } = this.props
    let hasSet = await queryClinicHassetPermissions(clinic_id)
    let allMenus = await MenubarList({ ascription: '01' })
    this.setState({ hasSet, allMenus })
  }

  // 添加功能
  addFunc(menu) {
    let { hasSet, allMenus } = this.state
    let array = addMenu(menu, JSON.parse(JSON.stringify(hasSet)), JSON.parse(JSON.stringify(allMenus)))
    this.setState({ hasSet: array })
  }

  // 删除功能
  delFunc(menu) {
    let { hasSet } = this.state
    let array = deleteMenu(menu, JSON.parse(JSON.stringify(hasSet)))
    this.setState({ hasSet: array })
  }

  showList() {
    let { hasSet, allMenus } = this.state
    let unsets = formatUnHasMemuList(JSON.parse(JSON.stringify(hasSet)), JSON.parse(JSON.stringify(allMenus)))
    let sets = formatMenuList(null, JSON.parse(JSON.stringify(hasSet)))
    const { clinics, clinic_id } = this.props
    let clinic = null
    for (let item of clinics) {
      if (item.id === clinic_id) clinic = item
    }
    return (
      <div>
        <div className={'bussinessTitle'}>诊所业务分配</div>
        <div className={'formList'} style={{ marginTop: 0 }}>
          <div className={'boxTitle'}>诊所名称：{clinic.name}</div>
          <div className={'boxContent'}>
            <ul>
              <li>
                <span>业务分配</span>
                <div className={'boxContentItem'} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  {unsets.map((item, iKey) => {
                    return (
                      <div key={iKey} className={'boxContentList'}>
                        <div
                          style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '14px', fontFamily: 'PingFangSC-Regular', fontWeight: '600', marginBottom: '5px', marginTop: '5px' }}
                        >
                          <input
                            type={'checkBox'}
                            checked={false}
                            onChange={e => {
                              this.addFunc(item)
                            }}
                          />
                          <span>{item.menu_name}</span>
                        </div>
                        <ul>
                          {item.children.map((func, funkey) => {
                            return (
                              <li key={funkey} style={{ width: func.children.length > 0 ? '100%' : '25%' }}>
                                <div className={'boxContentList'}>
                                  <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '13px', fontWeight: '400', marginBottom: '5px', marginTop: '5px' }}>
                                    <input
                                      type={'checkBox'}
                                      checked={false}
                                      onChange={e => {
                                        this.addFunc(func)
                                      }}
                                    />
                                    <label>{func.menu_name}</label>
                                  </div>
                                  <ul>
                                    {func.children.map((func, funkey) => {
                                      return (
                                        <li key={funkey}>
                                          <div className={'boxContentList'}>
                                            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '12px', fontWeight: '250', marginBottom: '5px', marginTop: '5px' }}>
                                              <input
                                                type={'checkBox'}
                                                checked={false}
                                                onChange={e => {
                                                  this.addFunc(func)
                                                }}
                                              />
                                              <label>{func.menu_name}</label>
                                            </div>
                                          </div>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </li>
              <li>
                <span>业务已分配</span>
                <div className={'boxContentItem'} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  {sets.map((item, iKey) => {
                    return (
                      <div key={iKey} className={'boxContentList'}>
                        <div
                          style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '14px', fontFamily: 'PingFangSC-Regular', fontWeight: '600', marginBottom: '5px', marginTop: '5px' }}
                        >
                          <input
                            type={'checkBox'}
                            checked
                            onChange={e => {
                              this.delFunc(item)
                            }}
                          />
                          <span>{item.menu_name}</span>
                        </div>
                        <ul>
                          {item.children.map((func, funkey) => {
                            return (
                              <li key={funkey} style={{ width: func.children.length > 0 ? '100%' : '25%' }}>
                                <div className={'boxContentList'}>
                                  <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '13px', fontWeight: '400', marginBottom: '5px', marginTop: '5px' }}>
                                    <input
                                      type={'checkBox'}
                                      checked
                                      onChange={e => {
                                        this.delFunc(func)
                                      }}
                                    />
                                    <label>{func.menu_name}</label>
                                  </div>
                                  <ul>
                                    {func.children.map((func, funkey) => {
                                      return (
                                        <li key={funkey}>
                                          <div className={'boxContentList'}>
                                            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', fontSize: '12px', fontWeight: '250', marginBottom: '5px', marginTop: '5px' }}>
                                              <input
                                                type={'checkBox'}
                                                checked
                                                onChange={e => {
                                                  this.delFunc(func)
                                                }}
                                              />
                                              <label>{func.menu_name}</label>
                                            </div>
                                          </div>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </li>
            </ul>
          </div>
          <div style={{ float: 'left', margin: '59px 0 174px 0', width: '100%' }}>
            <div
              style={{
                width: 'auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <button style={{ margin: 0 }} className='saveBtn' onClick={() => this.cancel()}>
                取消
              </button>
              <button style={{ margin: 0, marginLeft: '10px' }} className='saveBtn' onClick={() => this.submit()}>
                保存
              </button>
            </div>
          </div>
        </div>
        <style jsx='true'>{`
          .bussinessTitle {
            margin: 24px 0 26px 33px;
            height: 24px;
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
          }
          .boxTitle {
            margin: 29px 0 0 32px;
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
          }
          .boxContent {
            margin: 30px 0 0 32px;
          }
          .boxContent ul {
            width: 100%;
          }
          .boxContent ul li {
            margin: 0;
            width: 49%;
            margin-right: 1%;
          }
          .boxContent ul li > span {
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
          .boxContentItem {
            margin-top: 8px;
            width: 100%;
            min-height: 482px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.15);
          }
          .boxContentList {
            width: 94%;
            display: flex;
            flex-direction: column;
            float: left;
            padding-left: 24px;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
          .boxContentList > ul {
            width: 100%;
          }
          .boxContentList span {
            height: 20px;
          }
          .boxContentList > ul > li {
            margin: 0;
            width: 25%;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .boxContentList > ul > li > input {
            margin: 0;
            width: 16px;
            background: rgba(42, 205, 200, 1);
            border-radius: 2px;
            flex: 1;
          }
          .boxContentList > ul > li > label {
            flex: 4;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showList()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinic_id: state.clinics.selectId,
    all_menu: state.user.all_menu
  }
}

export default connect(
  mapStateToProps,
  { queryClinicHassetPermissions, queryClinicUnsetPermissions, createClinicPermissions, MenubarList }
)(BusinessClinicPermissionScreen)
