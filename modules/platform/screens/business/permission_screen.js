import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryClinicList, clinicSelect } from '../../../../ducks'
import { Confirm } from '../../../../components'

class BusinessClinicPermissionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array1: [
        {
          parent_id: 1,
          parent_name: '工作站',
          parent_url: 'jobClub',
          childrens_menus: [
            {
              functionmenu_id: 19,
              menu_name: '医生工作站',
              menu_url: 'doctor'
            },
            {
              functionmenu_id: 20,
              menu_name: '护士工作站',
              menu_url: '/nurse'
            },
            {
              functionmenu_id: 21,
              menu_name: '专员工作站',
              menu_url: '/staff'
            }
          ]
        },
        {
          parent_id: 2,
          parent_name: '就诊流程',
          parent_url: 'jiuzhenliucheng',
          childrens_menus: [
            {
              functionmenu_id: 22,
              menu_name: '登记',
              menu_url: '/register'
            },
            {
              functionmenu_id: 23,
              menu_name: '预约',
              menu_url: '/appointment'
            },
            {
              functionmenu_id: 24,
              menu_name: '检验',
              menu_url: '/laboratory'
            },
            {
              functionmenu_id: 25,
              menu_name: '检查',
              menu_url: '/examination'
            },
            {
              functionmenu_id: 26,
              menu_name: '治疗',
              menu_url: '/treatment'
            }
          ]
        },
        {
          parent_id: 3,
          parent_name: '诊所管理',
          parent_url: 'clinicmanage',
          childrens_menus: [
            {
              functionmenu_id: 27,
              menu_name: '科室管理',
              menu_url: '/department'
            },
            {
              functionmenu_id: 28,
              menu_name: '医生管理',
              menu_url: '/doctor'
            },
            {
              functionmenu_id: 29,
              menu_name: '人员管理',
              menu_url: '/personnel'
            },
            {
              functionmenu_id: 30,
              menu_name: '患者管理',
              menu_url: '/patient'
            },
            {
              functionmenu_id: 31,
              menu_name: '药房管理',
              menu_url: '/storehouse'
            }
          ]
        },
        {
          parent_id: 4,
          parent_name: '财务管理',
          parent_url: 'financeManage',
          childrens_menus: [
            {
              functionmenu_id: 32,
              menu_name: '费用报表',
              menu_url: '/feeReport'
            },
            {
              functionmenu_id: 33,
              menu_name: '医用报表',
              menu_url: '/MedicalReport'
            }
          ]
        },
        {
          parent_id: 5,
          parent_name: '设置管理',
          parent_url: 'setUpManage',
          childrens_menus: [
            {
              functionmenu_id: 34,
              menu_name: '收费项目设置',
              menu_url: '/feeProjec'
            },
            {
              functionmenu_id: 35,
              menu_name: '模板设置',
              menu_url: '/ModelProject'
            },
            {
              functionmenu_id: 36,
              menu_name: '权限设置',
              menu_url: '/authority'
            }
          ]
        }
      ],
      array2: []
    }
  }

  addFunc(parent, menu) {
    let { array2 } = this.state
    // 主功能是否存在
    let index = -1
    for (let i = 0; i < array2.length; i++) {
      if (item.parent_id === parent.parent_id) {
        index = i
      }
    }
    if (index === -1) {
      let obj = {
        parent_id: parent.parent_id,
        parent_name: parent.parent_name,
        parent_url: parent.parent_url,
        childrens_menus: [
          {
            functionmenu_id: menu.functionmenu_id,
            menu_name: menu.menu_name,
            menu_url: menu.menu_url
          }
        ]
      }
      array2.push(obj)
    } else {
      let funcs = array2[index].childrens_menus
      for (let func of funcs) {
        // 子功能存在与否
        let exist = false
        if (func.functionmenu_id === menu.functionmenu_id) {
          exist = true
        }
        if (!exist) {
          array2[index].childrens_menus.push({
            functionmenu_id: menu.functionmenu_id,
            menu_name: menu.menu_name,
            menu_url: menu.menu_url
          })
        }
      }
    }
    this.setState({ array2 })
  }

  showList() {
    let { array1, array2 } = this.state
    const { clinics, clinic_selectId } = this.props
    let clinic = null
    for (let item of clinics) {
      if (item.id === clinic_selectId) clinic = item
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
                <div className={'boxContentItem'}>
                  {array1.map((item, iKey) => {
                    return (
                      <div iKey={iKey} className={'boxContentList'}>
                        <span>{item.parent_name}</span>
                        <ul>
                          {item.childrens_menus.map((func, funkey) => {
                            return (
                              <li iKey={funkey}>
                                <input type={'checkBox'} />
                                <label>{func.menu_name}</label>
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
                <div className={'boxContentItem'}>
                  {array2.map((item, iKey) => {
                    return (
                      <div iKey={iKey} className={'boxContentList'}>
                        <span>{item.parent_name}</span>
                        <ul>
                          {item.childrens_menus.map((func, funkey) => {
                            return (
                              <li iKey={funkey}>
                                <input type={'checkBox'} />
                                <label>{func.menu_name}</label>
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
          <div style={{ float: 'left', margin: '59px 0 174px 0' }}>
            <button style={{ marginLeft: '453px' }} className='saveBtn' onClick={() => this.setState({})}>
              取消
            </button>
            <button style={{ marginLeft: '8px' }} className='saveBtn' onClick={() => this.submit()}>
              保存
            </button>
          </div>
        </div>
        <style jsx>{`
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
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            float: left;
            padding-left: 24px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
          .boxContentList ul {
            width: 100%;
          }
          .boxContentList span {
            height: 20px;
            margin-bottom: 10px;
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
            margin-top: 2px;
            width: 16px;
            height: 16px;
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
    clinic_selectId: state.clinics.selectId
  }
}

export default connect(mapStateToProps, { queryClinicList, clinicSelect })(BusinessClinicPermissionScreen)
