import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm, PageCard } from '../../../../../components'
import moment from 'moment'
import { queryTreatmentList, queryDoseUnitList, TreatmentPatientCreate, TreatmentPatientGet, TreatmentPatientModelCreate, TreatmentPatientModelList } from '../../../../../ducks'
import { getAgeByBirthday, formatMoney } from '../../../../../utils'
import Print from 'rc-print'

// 病历
class TreatmentScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      treatments: [],
      selPage: 3,
      treatmentsStr: ''
    }
  }

  async componentDidMount() {
    const { TreatmentPatientGet, clinic_triage_patient_id } = this.props
    const treatments = await TreatmentPatientGet({ clinic_triage_patient_id })
    this.setState({ treatments, treatmentsStr: JSON.stringify(treatments) })
  }

  queryTreatmentList(keyword) {
    const { queryTreatmentList, clinic_id } = this.props
    if (keyword) {
      queryTreatmentList({ clinic_id, status: true, keyword })
    }
  }

  getNameOptions(index) {
    const { treatments } = this.props
    let datas = this.state.treatments || []
    let array = []
    for (let key in treatments) {
      const { clinic_treatment_id, treatment_name } = treatments[key]
      let has = false
      for (let i = 0; i < datas.length; i++) {
        let obj = datas[i]
        if (obj.paid_status) continue
        if (obj.clinic_treatment_id === clinic_treatment_id && index !== i) {
          has = true
          break
        }
      }
      if (has) continue
      array.push({
        value: clinic_treatment_id,
        label: treatment_name,
        ...treatments[key]
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

  queryDoseUnitList(keyword) {
    const { queryDoseUnitList } = this.props
    if (keyword) {
      queryDoseUnitList({ keyword })
    }
  }

  getUnitoptions(data) {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      let { id, name } = doseUnits[key]
      array.push({
        value: id,
        label: name
      })
    }
    return array
  }

  addColumn() {
    const { treatments } = this.state
    this.setState({ treatments: [...treatments, {}] })
  }

  removeColumn(index) {
    const { treatments } = this.state
    let array = [...treatments]
    array.splice(index, 1)
    this.setState({ treatments: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { treatments } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...treatments]
    array[index][key] = value
    this.setState({ treatments: array })
  }

  async submit() {
    const { TreatmentPatientCreate, personnel_id, clinic_triage_patient_id, changePage, TreatmentPatientGet } = this.props
    const { treatments, selPage } = this.state
    let items = []
    for (let { clinic_treatment_id, times, illustration, paid_status } of treatments) {
      if (paid_status) continue
      if (!times) {
        return this.refs.myAlert.alert('保存失败', '存在次数无效的项目，请检查！', null, 'Danger')
      }

      items.push({
        clinic_treatment_id: clinic_treatment_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    let error = await TreatmentPatientCreate({ personnel_id, clinic_triage_patient_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      if (selPage !== 3) {
        this.refs.myAlert.alert('保存成功')
        changePage(selPage)
      } else {
        const treatments = await TreatmentPatientGet({ clinic_triage_patient_id })
        this.setState({ treatments, treatmentsStr: JSON.stringify(treatments) })
        return this.refs.myAlert.alert('保存成功')
      }
    }
  }

  async TreatmentPatientModelCreate() {
    const { TreatmentPatientModelCreate, personnel_id } = this.props
    const { treatments, model_name, is_common } = this.state
    let items = []
    for (let { clinic_treatment_id, times, illustration } of treatments) {
      items.push({
        clinic_treatment_id: clinic_treatment_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    let error = await TreatmentPatientModelCreate({ model_name, is_common, operation_id: personnel_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      this.setState({ showSaveModel: false })
      return this.refs.myAlert.alert('保存成功')
    }
  }

  renderSaveModel() {
    const { showSaveModel } = this.state
    if (!showSaveModel) return
    const { treatments } = this.state
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>新增治疗模板</span>
            <span onClick={() => this.setState({ showSaveModel: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板名称</span>
                <input
                  style={{ background: 'rgba(255,255,255,1)', width: '80%', marginTop: '4px', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                  value={this.state.model_name}
                  onChange={e => {
                    let model_name = e.target.value
                    this.setState({ model_name })
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板类型</span>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '30px', marginTop: '4px' }}>
                  <input
                    type='radio'
                    name='type'
                    checked={this.state.is_common === true}
                    style={{ background: 'rgba(255,255,255,1)', width: '18px', height: '18px', borderRadius: '4px', border: '1px solid #108EE9' }}
                    onChange={e => {
                      this.setState({ is_common: e.target.checked })
                    }}
                  />通用
                  <input
                    type='radio'
                    name='type'
                    checked={this.state.is_common === false}
                    style={{ background: 'rgba(255,255,255,1)', width: '18px', height: '18px', borderRadius: '4px', border: '1px solid #108EE9', marginLeft: '40px' }}
                    onChange={e => {
                      this.setState({ is_common: !e.target.checked })
                    }}
                  />个人
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} />
            </div>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 4 }}>名称</div>
                <div style={{ flex: 3 }}>单位</div>
                <div style={{ flex: 2 }}>次数</div>
                <div style={{ flex: 3 }}>说明</div>
              </li>
              {treatments.map((item, index) => {
                return (
                  <li style={{ display: 'flex' }} key={index}>
                    <div style={{ flex: 4 }}>{item.treatment_name}</div>
                    <div style={{ flex: 3 }}>{item.unit_name}</div>
                    <div style={{ flex: 2 }}>{item.times}</div>
                    <div style={{ flex: 3 }}>{item.illustration}</div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='formListBottom' style={{ width: '100%' }}>
            <div className={'bottomCenter'}>
              <button className={'save'} onClick={() => this.TreatmentPatientModelCreate()}>
                保存
              </button>
              <button className={'cancel'}>取消</button>
            </div>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  TreatmentPatientModelList({ keyword, offset, limit }) {
    const { TreatmentPatientModelList } = this.props
    TreatmentPatientModelList({ keyword, offset, limit })
  }

  renderModelList() {
    const { showModelList, treatments } = this.state
    if (!showModelList) return
    const { treatmentPatientModels, page_info } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>治疗模板</span>
            <span onClick={() => this.setState({ showModelList: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板名称</span>
                <div style={{ display: 'flex', marginTop: '4px', alignItems: 'center' }}>
                  <input
                    style={{ background: 'rgba(255,255,255,1)', width: '80%', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                    value={this.state.keyword}
                    onChange={e => {
                      let keyword = e.target.value
                      this.setState({ keyword })
                    }}
                  />
                  <div
                    style={{
                      height: '30px',
                      borderRadius: '4px',
                      color: '#FFFFFF',
                      width: '100px',
                      background: '#2ACDC8',
                      cursor: 'pointer',
                      textAlign: 'center',
                      lineHeight: '30px',
                      marginLeft: '10px'
                    }}
                    onClick={() => {
                      const keyword = this.state.keyword
                      this.TreatmentPatientModelList({ keyword })
                    }}
                  >
                    搜索
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} />
            </div>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 3 }}>模板名称</div>
                <div style={{ flex: 4 }}>项目名称</div>
                <div style={{ flex: 2 }}>跟新时间</div>
                <div style={{ flex: 1 }} />
              </li>
              {treatmentPatientModels.map((item, index) => {
                const { model_name, items, created_time } = item
                let names = ''
                for (let obj of items) {
                  names += obj.treatment_name + ','
                }
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>{model_name}</div>
                    <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{names}</div>
                    <div style={{ flex: 2 }}>{moment(created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div
                      style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={() => {
                        // let newArray = [...treatments, ...items]
                        // this.setState({ treatments: newArray, showModelList: false })
                        // console.log('treatments=====', treatments, items)
                        let newArray = treatments
                        if (treatments.length > 0) {
                          let idArray = []
                          for (let i = 0; i < treatments.length; i++) {
                            idArray.push(treatments[i].clinic_treatment_id)
                          }
                          for (let j = 0; j < items.length; j++) {
                            if (idArray.indexOf(items[j].clinic_treatment_id) === -1) {
                              newArray.push(items[j])
                              this.setState({ treatments: newArray, showModelList: false })
                            } else {
                              this.refs.myAlert.confirm('提示', '模板中存在与已选择的治疗项目相同，是否覆盖？', 'Warning', () => {
                                this.setState({ treatments: [...items], showModelList: false })
                              })
                            }
                          }
                        } else {
                          newArray = [...items]
                          this.setState({ treatments: newArray, showModelList: false })
                        }
                      }}
                    >
                      选择
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.TreatmentPatientModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }
  getStyle() {
    return (
      <style jsx='true'>
        {`
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
            min-height: 50px;
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
            min-width: 70px;
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
    )
  }
  // 提示是否保存当前页
  tipsToSave(pageType) {
    // console.log('pageType====', pageType)
    const { changePage } = this.props
    const { treatments, treatmentsStr } = this.state
    // console.log('othercostsStr==', othercostsStr)
    if (JSON.stringify(treatments) !== treatmentsStr) {
      this.refs.myConfirm.confirm('提示', '您填写的内容已修改，是否需要保存？', 'Warning', () => {
        this.submit()
      })
    } else {
      changePage(pageType)
    }
  }

  printerContent() {
    let { user, triagePatients, clinic_triage_patient_id, medicalRecord } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    let { treatments = [] } = this.state
    const borderBottomDiv = { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px' }
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }
    let amont = 0
    let createTime = ''
    for (let item of treatments) {
      amont += item.price * item.times
      createTime = item.created_time
    }
    return (
      <div
        style={{
          width: '800px',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '50px',
          background: '#FFFFFF',
          padding: '10px 20px 10px 20px',
          fontSize: '15px',
          fontWeight: '400',
          color: '#202020'
        }}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name} 治疗单</div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '1px solid #d8d8d8', borderTop: '1px solid #d8d8d8' }}>
          <div style={{ ...patientInfoRow, marginTop: '5px' }}>
            <div style={patientInforRowItem}>姓名：{triagePatient.patient_name}</div>
            <div style={patientInforRowItem}>年龄：{getAgeByBirthday(triagePatient.birthday)}</div>
            <div style={patientInforRowItem}>性别：{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
            <div style={patientInforRowItem}>病人ID：{triagePatient.patient_id}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>科别：{triagePatient.department_name}</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>临床（初步）诊断：{medicalRecord.diagnosis}</div>
          </div>
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '2px solid #101010' }}>
          <div style={{ ...patientInfoRow, fontWeight: '500', borderBottom: '2px solid #101010' }}>
            <div style={{ ...patientInforRowItem, flex: 6 }}>项目名称</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>单价（￥）</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>单位</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>次数</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>金额（￥）</div>
            <div style={{ ...patientInforRowItem, flex: 4 }}>说明</div>
          </div>
          {treatments.map((item, index) => {
            return (
              <div style={{ ...patientInfoRow, marginTop: '5px' }} key={index}>
                <div style={{ ...patientInforRowItem, flex: 6 }}>{item.treatment_name}</div>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{formatMoney(item.price)}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>{item.unit_name}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>{item.times}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>{formatMoney(item.price * item.times)}</div>
                <div style={{ ...patientInforRowItem, flex: 4 }}>{item.illustration}</div>
              </div>
            )
          })}
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '0px', marginBottom: '20px' }}>
          <div style={{ ...patientInfoRow }}>
            <div style={patientInforRowItem}>合计金额：{formatMoney(amont)}</div>
            <div style={patientInforRowItem}>开单医师：{triagePatient.doctor_name}</div>
            <div style={patientInforRowItem}>开单日期：{moment(createTime).format('YYYY-MM-DD')}</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { treatments, selPage } = this.state
    const { medicalRecord, changePage } = this.props
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            onClick={() => {
              this.setState({ selPage: 1 })
              this.tipsToSave(1)
            }}
          >
            病历
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 2 })
              this.tipsToSave(2)
            }}
          >
            处方
          </span>
          <span
            className={'sel'}
            onClick={() => {
              // changePage(3)
            }}
          >
            治疗
          </span>
          <span
            className={this.state.pageType === 4 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 4 })
              this.tipsToSave(4)
            }}
          >
            检验
          </span>
          <span
            className={this.state.pageType === 5 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 5 })
              this.tipsToSave(5)
            }}
          >
            检查
          </span>
          <span
            className={this.state.pageType === 6 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 6 })
              this.tipsToSave(6)
            }}
          >
            材料费
          </span>
          <span
            className={this.state.pageType === 7 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 7 })
              this.tipsToSave(7)
            }}
          >
            其他费用
          </span>
        </div>
        <div className='filterBox'>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
              <button
                style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }}
                onClick={() => {
                  this.TreatmentPatientModelList({})
                  this.setState({ showModelList: true })
                }}
              >
                选择模板
              </button>
            </div>
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
                {treatments.map((item, index) => {
                  let nameOptions = this.getNameOptions(index)
                  return (
                    <li key={index}>
                      <div>
                        <div style={{ width: '100%' }}>
                          {item.paid_status ? (
                            item.treatment_name
                          ) : (
                            <Select
                              value={this.getSelectValue(treatments[index].clinic_treatment_id, nameOptions)}
                              onChange={({ value, unit_id, label, unit_name, price }) => {
                                this.setItemValue(value, index, 'clinic_treatment_id', 2)
                                this.setItemValue(label, index, 'treatment_name', 2)
                                this.setItemValue(unit_id, index, 'unit_id', 2)
                                this.setItemValue(unit_name, index, 'unit_name', 2)
                                this.setItemValue(price, index, 'price', 2)
                              }}
                              placeholder='搜索名称'
                              height={38}
                              onInputChange={keyword => this.queryTreatmentList(keyword)}
                              options={nameOptions}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <input readOnly type='text' value={treatments[index].unit_name} />
                      </div>
                      <div>
                        <input readOnly={item.paid_status} value={treatments[index].times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                      </div>
                      <div>
                        <input readOnly={item.paid_status} maxLength='500' value={treatments[index].illustration} type='text' onChange={e => this.setItemValue(e, index, 'illustration')} />
                      </div>
                      <div>
                        {item.paid_status ? null : (
                          <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                            删除
                          </div>
                        )}
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
                <button onClick={() => this.setState({ showSaveModel: true })}>存为模板</button>
                <button onClick={() => this.refs.wprinter.onPrint()}>打印治疗单</button>
                <Print ref='wprinter' lazyRender isIframe>
                  {this.printerContent()}
                </Print>
              </div>
            </div>
          </div>
          {this.getStyle()}
          {this.renderSaveModel()}
          {this.renderModelList()}
          <Confirm ref='myAlert' />
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
        </div>
        <style jsx='true'>{`
          .childTopBar {
            display: flex;
            margin-left: 65px;
          }
          .childTopBar > span {
            flex: 1;
            margin-left: 0;
          }
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
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    triagePatients: state.triagePatients.data,
    treatments: state.treatments.data,
    personnel_id: state.user.data.id,
    user: state.user.data,
    doseUnits: state.doseUnits.data,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    treatmentPatients: state.treatmentPatients.data,
    treatmentPatientModels: state.treatmentPatientModels.data,
    page_info: state.treatmentPatientModels.page_info
  }
}

export default connect(
  mapStateToProps,
  { queryTreatmentList, queryDoseUnitList, TreatmentPatientCreate, TreatmentPatientGet, TreatmentPatientModelCreate, TreatmentPatientModelList }
)(TreatmentScreen)
