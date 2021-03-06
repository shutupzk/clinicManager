import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm, PageCard } from '../../../../../components'
import { queryExaminationList, queryExaminationOrganList, ExaminationPatientCreate, ExaminationPatientGet, examinationModelList } from '../../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday, formatMoney } from '../../../../../utils'
import Print from 'rc-print'

// 检查
class ExamineScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      examines: [],
      selOrgans: [],
      selPage: 5,
      examinesStr: ''
    }
  }

  async componentDidMount() {
    const { ExaminationPatientGet, clinic_triage_patient_id } = this.props
    const examines = await ExaminationPatientGet({ clinic_triage_patient_id })
    const { queryExaminationOrganList } = this.props
    queryExaminationOrganList({ limit: 1000 }, true)
    this.setState({ examines, examinesStr: JSON.stringify(examines) })
  }

  queryExaminationList(keyword) {
    const { queryExaminationList, clinic_id } = this.props
    if (keyword) {
      queryExaminationList({ clinic_id, status: true, keyword })
    }
  }

  getNameOptions(index) {
    const { examinations } = this.props
    let array = []
    let datas = this.state.examines || []
    for (let key in examinations) {
      const { clinic_examination_id, name } = examinations[key]
      let has = false
      for (let i = 0; i < datas.length; i++) {
        let obj = datas[i]
        if (obj.paid_status) continue
        if (obj.clinic_examination_id === clinic_examination_id && index !== i) {
          has = true
          break
        }
      }
      if (has) continue
      array.push({
        value: clinic_examination_id,
        label: name,
        ...examinations[key]
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

  queryExaminationOrganList(keyword) {
    const { queryExaminationOrganList, clinic_id } = this.props
    if (keyword) {
      queryExaminationOrganList({ clinic_id, keyword })
    }
  }

  addColumn() {
    const { examines } = this.state
    this.setState({ examines: [...examines, {}] })
  }

  removeColumn(index) {
    const { examines } = this.state
    let array = [...examines]
    array.splice(index, 1)
    this.setState({ examines: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { examines } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...examines]
    array[index][key] = value
    this.setState({ examines: array })
  }

  async submit() {
    const { ExaminationPatientCreate, personnel_id, clinic_triage_patient_id, changePage, ExaminationPatientGet } = this.props
    const { examines, selPage } = this.state
    let items = []
    for (let item of examines) {
      if (item.paid_status) continue
      if (!item.times) {
        return this.refs.myAlert.alert('保存失败', '存在次数无效的项目，请检查！', null, 'Danger')
      }

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
    let error = await ExaminationPatientCreate({ personnel_id, clinic_triage_patient_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      if (selPage !== 5) {
        this.refs.myAlert.alert('保存成功')
        changePage(selPage)
      } else {
        const examines = await ExaminationPatientGet({ clinic_triage_patient_id })
        this.setState({ examines, examinesStr: JSON.stringify(examines) })
        return this.refs.myAlert.alert('保存成功')
      }
    }
  }

  examinationModelList({ keyword, offset, limit }) {
    const { examinationModelList } = this.props
    examinationModelList({ keyword, offset, limit })
  }

  renderModelList() {
    const { showModelList, examines } = this.state
    if (!showModelList) return
    const { examinationModels, page_info } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>检查模板</span>
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
                      this.examinationModelList({ keyword })
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
              {examinationModels.map((item, index) => {
                const { model_name, items, created_time } = item
                let names = ''
                for (let obj of items) {
                  names += obj.examination_name + ','
                }
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>{model_name}</div>
                    <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{names}</div>
                    <div style={{ flex: 2 }}>{moment(created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div
                      style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={() => {
                        // let newArray = [...examines, ...items]
                        // this.setState({ examines: newArray, showModelList: false })
                        let newArray = examines
                        if (examines.length > 0) {
                          let idArray = []
                          for (let i = 0; i < examines.length; i++) {
                            idArray.push(examines[i].clinic_examination_id)
                          }
                          for (let j = 0; j < items.length; j++) {
                            if (idArray.indexOf(items[j].clinic_examination_id) === -1) {
                              newArray.push(items[j])
                              this.setState({ examines: newArray, showModelList: false })
                            } else {
                              this.refs.myAlert.confirm('提示', '模板中存在与已选择的检查项目相同，是否覆盖？', 'Warning', () => {
                                this.setState({ examines: [...items], showModelList: false })
                              })
                            }
                          }
                        } else {
                          newArray = [...items]
                          this.setState({ examines: newArray, showModelList: false })
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
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  // 选择部位
  chooseOrgan() {
    const { showChooseOrgan, index } = this.state
    if (!showChooseOrgan) return null
    const { examinationOrgans } = this.props
    const organs = examinationOrgans || []
    let { selOrgans } = this.state
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>检查部位</span>
            <div />
            <span onClick={() => this.setState({ showChooseOrgan: false })}>×</span>
          </div>
          <div className={'contentList'}>
            <ul>
              {organs.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        type='checkbox'
                        checked={selOrgans.indexOf(name) > -1}
                        onChange={e => {
                          if (e.target.checked) {
                            selOrgans.push(name)
                            this.setState({ selOrgans })
                          } else {
                            // let array = selOrgans
                            for (let i = 0; i < selOrgans.length; i++) {
                              if (selOrgans[i] === name) {
                                selOrgans.splice(i, 1)
                              }
                            }
                            this.setState({ selOrgans })
                          }
                        }}
                      />
                      {name}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'buttonBtn'}>
            <button onClick={() => this.setState({ showChooseOrgan: false })}>取消</button>
            <button
              onClick={() => {
                let organ = ''
                for (let i = 0; i < selOrgans.length; i++) {
                  if (i < selOrgans.length - 1) {
                    organ += selOrgans[i] + ','
                  } else {
                    organ += selOrgans[i]
                  }
                }
                this.setItemValue(organ, index, 'organ', 2)
                this.setState({ showChooseOrgan: false })
              }}
            >
              确定
            </button>
          </div>
        </div>
        <style jsx='true'>{`
          .contentList {
            width: 100%;
            height: 500px;
            // background: #a0a0a0;
            display: flex;
          }
          .contentList ul {
            width: 90%;
            margin: 10px auto;
          }
          .contentList ul li {
            float: left;
            width: 50%;
            font-size: 16px;
            // cursor: pointer;
            margin: 10px 0 0 0;
          }
          .contentList ul li label {
            cursor: pointer;
          }
          .contentList ul li input {
          }
          .buttonBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto;
          }
        `}</style>
      </div>
    )
  }
  // 提示是否保存当前页
  tipsToSave(pageType) {
    // console.log('pageType====', pageType)
    const { changePage } = this.props
    const { examines, examinesStr } = this.state
    // console.log('othercostsStr==', othercostsStr)
    if (JSON.stringify(examines) !== examinesStr) {
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
    let { examines = [] } = this.state
    const borderBottomDiv = { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px' }
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }
    let amont = 0
    let createTime = ''
    for (let item of examines) {
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
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name} 检查申请单</div>
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
            <div style={{ ...patientInforRowItem, flex: 3 }}>项目名称</div>
            <div style={{ ...patientInforRowItem, flex: 1 }}>单价（￥）</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>说明</div>
          </div>
          {examines.map((item, index) => {
            return (
              <div style={{ ...patientInfoRow, marginTop: '5px' }} key={index}>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{item.name}</div>
                <div style={{ ...patientInforRowItem, flex: 1 }}>{formatMoney(item.price)}</div>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{item.illustration}</div>
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
    const { examines, selPage } = this.state
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
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 3 })
              this.tipsToSave(3)
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
            className={'sel'}
            onClick={() => {
              // changePage(5)
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
                  this.examinationModelList({})
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
                  <div>次数</div>
                  <div>部位</div>
                  <div>说明</div>
                  <div>
                    <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                      新增
                    </div>
                  </div>
                </li>
                {examines.map((item, index) => {
                  let nameOptions = this.getNameOptions(index)
                  return (
                    <li key={index}>
                      <div>
                        <div style={{ width: '100%' }}>
                          {item.paid_status ? (
                            item.name
                          ) : (
                            <Select
                              value={this.getSelectValue(item.clinic_examination_id, nameOptions)}
                              onChange={({ value, organ, label }) => {
                                this.setItemValue(value, index, 'clinic_examination_id', 2)
                                this.setItemValue(label, index, 'name', 2)
                              }}
                              placeholder='搜索名称'
                              height={38}
                              onInputChange={keyword => this.queryExaminationList(keyword)}
                              options={nameOptions}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <input readOnly={item.paid_status} value={item.times || ''} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                      </div>
                      <div>
                        <input value={item.organ || ''} type='text' readOnly />
                        {item.paid_status ? null : (
                          <div
                            style={{
                              cursor: 'pointer',
                              border: '1px solid rgba(42, 205, 200, 1)',
                              borderRadius: '5px',
                              height: '20px',
                              width: '50px',
                              textAlign: 'center',
                              lineHeight: '20px',
                              color: 'rgba(42, 205, 200, 1)'
                            }}
                            onClick={() => {
                              let { organ } = item
                              let selOrgans = []
                              if (organ) {
                                selOrgans = organ.split(',')
                              }
                              this.setState({ showChooseOrgan: true, index, selOrgans })
                            }}
                          >
                            选择
                          </div>
                        )}
                      </div>
                      <div>
                        <input value={item.illustration || ''} type='text' onChange={e => this.setItemValue(e, index, 'illustration')} />
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
                <button onClick={() => this.refs.wprinter.onPrint()}>打印申请单</button>
                <Print ref='wprinter' lazyRender isIframe>
                  {this.printerContent()}
                </Print>
              </div>
            </div>
          </div>
          {this.getStyle()}
          {this.renderModelList()}
          {this.chooseOrgan()}
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
            min-width: 80px;
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
}

const mapStateToProps = state => {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    triagePatients: state.triagePatients.data,
    personnel_id: state.user.data.id,
    user: state.user.data,
    examinations: state.examinations.data,
    examinationOrgans: state.examinationOrgans.array_data,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    examinationPatients: state.examinationPatients.data,
    examinationModels: state.examinationModels.data,
    page_info: state.examinationModels.page_info
  }
}

export default connect(
  mapStateToProps,
  { queryExaminationList, queryExaminationOrganList, ExaminationPatientCreate, ExaminationPatientGet, examinationModelList }
)(ExamineScreen)
