import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm } from '../../../../../components'
import { queryOtherCostList, OtherCostPatientCreate, OtherCostPatientGet } from '../../../../../ducks'

// 其他收费
class OtherScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      othercosts: [],
      selPage: 7
    }
  }

  async componentDidMount() {
    const { OtherCostPatientGet, clinic_triage_patient_id } = this.props
    const othercosts = await OtherCostPatientGet({ clinic_triage_patient_id })
    this.setState({ othercosts })
  }

  queryOtherCostLists(keyword) {
    const { queryOtherCostList, clinic_id } = this.props
    if (keyword) {
      queryOtherCostList({ clinic_id, keyword })
    }
  }

  getNameOptions(index) {
    const { otherCostS } = this.props
    let array = []
    let datas = this.state.othercosts || []
    for (let key in otherCostS) {
      const { name, clinic_other_cost_id } = otherCostS[key]
      let has = false
      for (let i = 0; i < datas.length; i++) {
        let obj = datas[i]
        if (obj.clinic_other_cost_id === clinic_other_cost_id && index !== i) {
          has = true
          break
        }
      }
      if (has) continue
      array.push({
        value: clinic_other_cost_id,
        label: name,
        ...otherCostS[key]
      })
    }
    return array
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  getUnitoptions() {
    return [{ value: 1, label: '次' }, { value: 2, label: '个' }]
  }

  addColumn() {
    const { othercosts } = this.state
    this.setState({ othercosts: [...othercosts, {}] })
  }

  removeColumn(index) {
    const { othercosts } = this.state
    let array = [...othercosts]
    array.splice(index, 1)
    this.setState({ othercosts: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { othercosts } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...othercosts]
    array[index][key] = value
    this.setState({ othercosts: array })
  }

  setItemValues(data, index) {
    const { othercosts } = this.state
    let array = [...othercosts] // [...treatments]
    array[index] = { ...array[index], ...data }
    this.setState({ othercosts: array })
  }

  async submit() {
    const { OtherCostPatientCreate, personnel_id, clinic_triage_patient_id, changePage } = this.props
    const { othercosts, selPage } = this.state
    let items = []
    for (let item of othercosts) {
      let obj = {}
      for (let key in item) {
        if (item[key] === 0) {
          obj[key] = item[key] + ''
        } else {
          obj[key] = item[key] ? item[key] + '' : ''
        }
      }
      items.push(obj)
    }
    let error = await OtherCostPatientCreate({ personnel_id, clinic_triage_patient_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      if (selPage !== 5) {
        this.refs.myAlert.alert('保存成功')
        changePage(selPage)
      } else {
        return this.refs.myAlert.alert('保存成功')
      }
    }
  }
  // 提示是否保存当前页
  tipsToSave(pageType) {
    // console.log('pageType====', pageType)
    this.refs.myConfirm.confirm('提示', '您填写的内容已修改，是否需要保存？', 'Warning', () => {
      this.submit()
    })
  }
  render() {
    const { othercosts, selPage } = this.state
    const { medicalRecord, changePage } = this.props
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            onClick={() => {
              this.setState({selPage: 1})
              this.tipsToSave(1)
            }}
          >
            病历
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({selPage: 2})
              this.tipsToSave(2)
            }}
          >
            处方
          </span>
          <span
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({selPage: 3})
              this.tipsToSave(3)
            }}
          >
            治疗
          </span>
          <span
            className={this.state.pageType === 4 ? 'sel' : ''}
            onClick={() => {
              this.setState({selPage: 4})
              this.tipsToSave(4)
            }}
          >
            检验
          </span>
          <span
            className={this.state.pageType === 5 ? 'sel' : ''}
            onClick={() => {
              this.setState({selPage: 5})
              this.tipsToSave(5)
            }}
          >
            检查
          </span>
          <span
            className={this.state.pageType === 6 ? 'sel' : ''}
            onClick={() => {
              this.setState({selPage: 6})
              this.tipsToSave(6)
            }}
          >
            材料费
          </span>
          <span
            className={'sel'}
            onClick={() => {
              // changePage(7)
            }}
          >
            其他费用
          </span>
        </div>
        <div className='filterBox'>
          {/* <Loading showLoading /> */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }} />
            <div className={'alergyBlank'}>
              <div>
                <label>过敏史</label>
                <input readOnly type='text' value={medicalRecord.allergic_history} />
              </div>
              <div style={{ marginLeft: '40px' }}>
                <label>过敏反应</label>
                <input readOnly type='text' value={medicalRecord.allergic_reaction} />
              </div>
            </div>
            <div className='tableDIV'>
              <ul>
                <li>
                  <div>名称</div>
                  <div>单位</div>
                  <div>次数</div>
                  <div>说明</div>
                  <div>
                    <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                      新增
                    </div>
                  </div>
                </li>
                {othercosts.map((item, index) => {
                  let nameOptions = this.getNameOptions()
                  return (
                    <li key={index}>
                      <div>
                        <div style={{ width: '100%' }}>
                          <Select
                            value={this.getSelectValue(item.clinic_other_cost_id, nameOptions)}
                            onChange={(data) => {
                              this.setItemValues(data, index)
                            }}
                            placeholder='搜索名称'
                            height={38}
                            onInputChange={keyword => this.queryOtherCostLists(keyword)}
                            options={nameOptions}
                          />
                        </div>
                      </div>
                      <div>
                        <input readOnly value={item.unit_name || ''} type='text' min={0} max={100} onChange={e => this.setItemValue(e, index, 'unit_name')} />
                      </div>
                      <div>
                        <input value={item.amount || ''} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'amount')} />
                      </div>
                      <div>
                        <input value={item.illustration || ''} type='text' onChange={e => this.setItemValue(e, index, 'illustration')} />
                      </div>
                      <div>
                        <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                          删除
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='formListBottom'>
              <div className={'bottomCenter'}>
                <button className={'cancel'}>取消</button>
                <button className={'save'} onClick={() => this.submit()}>
                  保存
                </button>
              </div>
              <div className={'bottomRight'}>
                <button>打印清单</button>
              </div>
            </div>
          </div>
          <Confirm ref='myConfirm' sureText={'保存'}>
            <div
              className={`buttonDiv buttonDivCancel`}
              onClick={() => {
                changePage(selPage)
              }}
            >
              <span className={`cancel`}>不保存</span>
            </div>
          </Confirm>
          <style jsx='true'>
            {`
              .buttonDiv {
                width: 63px;
                height: 30px;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
              }
              .buttonDivCancel {
                background: rgba(255, 255, 255, 1);
                border: 1px solid #d9d9d9;
              }
              .buttonDiv span {
                height: 22px;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                line-height: 22px;
              }
              .cancel {
                color: rgba(0, 0, 0, 0.65);
              }
              .tableDIV {
                display: flex;
                width: 987px;
                background: rgba(255, 255, 255, 1);
                border-radius: 4px;
                margin: 0 65px 65px 47px;
              }
              .tableDIV ul {
                width: 100%;
                display: flex;
                flex-direction: column;
                border: 1px solid #e9e9e9;
                border-bottom: none;
              }
              .tableDIV ul li {
                display: flex;
                height: 50px;
                border-bottom: 1px solid #e9e9e9;
                line-height: 40px;
                text-align: center;
              }
              .tableDIV ul li:nth-child(1) {
                background: rgba(247, 247, 247, 1);
              }
              .tableDIV ul li > div {
                flex: 2;
                border-left: 1px #e9e9e9 dashed;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
              }
              .tableDIV ul li > div > input {
                width: 90%;
                height: 30px;
                border-radius: 4px;
                outline-style: none;
                border: none;
              }
              .tableDIV ul li > div:nth-child(1) {
                flex: 3;
              }
              .formListBottom {
                width: 1000px;
                margin: 30px auto;
              }
              .formListBottom .bottomCenter {
                margin: 0 auto;
                display: block;
                width: 150px;
              }
              .formListBottom .bottomCenter button.cancel {
                width: 70px;
                height: 26px;
                background: rgba(167, 167, 167, 1);
                color: rgba(255, 255, 255, 1);
                border-radius: 15px;
                border: none;
                float: left;
                cursor: pointer;
              }
              .formListBottom .bottomCenter button.save {
                width: 70px;
                height: 26px;
                background: rgba(49, 176, 179, 1);
                color: rgba(255, 255, 255, 1);
                border-radius: 15px;
                border: none;
                float: right;
                cursor: pointer;
              }
              .formListBottom .bottomRight {
                float: right;
                margin-top: -23px;
              }
              .formListBottom .bottomRight button {
                width: 80px;
                height: 26px;
                border-radius: 15px;
                border: 1px solid #2acdc8;
                font-size: 12px;
                font-family: MicrosoftYaHei;
                color: rgba(49, 176, 179, 1);
                background: transparent;
                margin-right: 10px;
                cursor: pointer;
              }
              .alergyBlank {
                display: flex;
                flex-direction: row;
                margin: 0 65px 20px 47px;
              }
              .alergyBlank div {
                flex: 1;
                display: flex;
                flex-direction: column;
              }
              .alergyBlank div label {
                width: 98%;
              }
              .alergyBlank div input {
                width: 100%;
                height: 30px;
                background: rgba(245, 248, 249, 1);
                border-radius: 4px;
                border: 1px solid #d8d8d8;
                margin-top: 15px;
              }
            `}
          </style>
          <Confirm ref='myAlert' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    otherCostS: state.otherCostS.data,
    medicalRecord: state.medicalRecords.data,
    otherPatients: state.otherPatients.data
  }
}

export default connect(mapStateToProps, { queryOtherCostList, OtherCostPatientCreate, OtherCostPatientGet })(OtherScreen)
