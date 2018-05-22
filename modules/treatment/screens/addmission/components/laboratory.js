import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm, PageCard } from '../../../../../components'
import moment from 'moment'
import { queryLaboratoryList, LaboratoryPatientCreate, LaboratoryPatientGet, LaboratoryPatientModelCreate, LaboratoryPersonalPatientModelList } from '../../../../../ducks'

// 病历
class LaboratoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laboratories: []
    }
  }

  async componentDidMount() {
    const { LaboratoryPatientGet, clinic_triage_patient_id } = this.props
    const laboratories = await LaboratoryPatientGet({ clinic_triage_patient_id })
    console.log('laboratories =====', laboratories)
    this.setState({ laboratories })
  }

  queryLaboratoryList(keyword) {
    const { queryLaboratoryList, clinic_id } = this.props
    if (keyword) {
      queryLaboratoryList({ clinic_id, status: true, keyword })
    }
  }

  getNameOptions(defaultOption) {
    const { laboratories } = this.props
    let array = []
    for (let key in laboratories) {
      const { clinic_laboratory_id, laboratory_name } = laboratories[key]
      array.push({
        value: clinic_laboratory_id,
        label: laboratory_name
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
    const { laboratories } = this.state
    this.setState({ laboratories: [...laboratories, {}] })
  }

  removeColumn(index) {
    const { laboratories } = this.state
    let array = [...laboratories]
    array.splice(index, 1)
    this.setState({ laboratories: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { laboratories } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...laboratories]
    array[index][key] = value
    this.setState({ laboratories: array })
  }

  async submit() {
    const { LaboratoryPatientCreate, personnel_id, clinic_triage_patient_id } = this.props
    const { laboratories } = this.state
    let items = []
    for (let { clinic_laboratory_id, times, illustration } of laboratories) {
      items.push({
        clinic_laboratory_id: clinic_laboratory_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    let error = await LaboratoryPatientCreate({ personnel_id, clinic_triage_patient_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      return this.refs.myAlert.alert('保存成功')
    }
  }

  async LaboratoryPatientCreate() {
    const { LaboratoryPatientCreate, personnel_id } = this.props
    const { laboratories, model_name, is_common } = this.state
    let items = []
    for (let { clinic_treatment_id, times, illustration } of laboratories) {
      items.push({
        clinic_treatment_id: clinic_treatment_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    let error = await LaboratoryPatientCreate({ model_name, is_common, operation_id: personnel_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      this.setState({ showSaveModel: false })
      return this.refs.myAlert.alert('保存成功')
    }
  }

  async LaboratoryPatientModelCreate () {
    const { LaboratoryPatientModelCreate, personnel_id } = this.props
    const { laboratories, model_name, is_common } = this.state
    let items = []
    for (let { clinic_treatment_id, times, illustration } of laboratories) {
      items.push({
        clinic_treatment_id: clinic_treatment_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    let error = await LaboratoryPatientModelCreate({ model_name, is_common, operation_id: personnel_id, items })
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
    const { laboratories } = this.state
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
                <div style={{ flex: 2 }}>次数</div>
                <div style={{ flex: 3 }}>说明</div>
              </li>
              {laboratories.map((item, index) => {
                return (
                  <li style={{ display: 'flex' }} key={index}>
                    <div style={{ flex: 4 }}>{item.name}</div>
                    <div style={{ flex: 2 }}>{item.times}</div>
                    <div style={{ flex: 3 }}>{item.illustration}</div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='formListBottom' style={{ width: '100%' }}>
            <div className={'bottomCenter'}>
              <button className={'save'} onClick={() => this.LaboratoryPatientModelCreate()}>
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

  LaboratoryPersonalPatientModelList({ keyword, offset, limit }) {
    const { LaboratoryPersonalPatientModelList, personnel_id } = this.props
    LaboratoryPersonalPatientModelList({ keyword, offset, limit, operation_id: personnel_id })
  }

  renderModelList() {
    const { showModelList, laboratories } = this.state
    if (!showModelList) return
    const { laboratoryPatientModels, page_info } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>检验模板</span>
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
                      this.LaboratoryPersonalPatientModelList({ keyword })
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
              {laboratoryPatientModels.map((item, index) => {
                const { model_name, items, created_time } = item
                let names = ''
                for (let obj of items) {
                  names += obj.laboratory_name + ','
                }
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>{model_name}</div>
                    <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{names}</div>
                    <div style={{ flex: 2 }}>{moment(created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div
                      style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={() => {
                        let newArray = [...laboratories, ...items]
                        this.setState({ laboratories: newArray, showModelList: false })
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
              this.LaboratoryPersonalPatientModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  getStyle() {
    return (
      <style jsx>
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
    )
  }

  render() {
    const { laboratories } = this.state
    const { medicalRecord } = this.props
    return (
      <div className='filterBox'>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
            <button
              style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }}
              onClick={() => {
                this.LaboratoryPersonalPatientModelList({})
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
                <div>说明</div>
                <div>
                  <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                    新增
                  </div>
                </div>
              </li>
              {laboratories.map((item, index) => {
                let nameOptions = this.getNameOptions(laboratories[index])
                return (
                  <li key={index}>
                    <div>
                      <div style={{ width: '100%' }}>
                        <Select
                          value={this.getSelectValue(laboratories[index].clinic_laboratory_id, nameOptions)}
                          onChange={({ value, label }) => {
                            this.setItemValue(value, index, 'clinic_laboratory_id', 2)
                            this.setItemValue(label, index, 'name', 2)
                          }}
                          placeholder='搜索名称'
                          height={38}
                          onInputChange={keyword => this.queryLaboratoryList(keyword)}
                          options={nameOptions}
                        />
                      </div>
                    </div>
                    <div>
                      <input value={laboratories[index].times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                    </div>
                    <div>
                      <input value={laboratories[index].illustration} type='text' onChange={e => this.setItemValue(e, index, 'illustration')} />
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
              {/* <button onClick={() => this.setState({ showSaveModel: true })}>存为模板</button> */}
              <button>打印申请单</button>
            </div>
          </div>
        </div>
        {this.getStyle()}
        {this.renderSaveModel()}
        {this.renderModelList()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    laboratories: state.laboratories.data,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    laboratoryPatients: state.laboratoryPatients.data,
    laboratoryPatientModels: state.laboratoryPatientModels.data,
    page_info: state.laboratoryPatientModels.page_info
  }
}

export default connect(mapStateToProps, { queryLaboratoryList, LaboratoryPatientCreate, LaboratoryPatientGet, LaboratoryPatientModelCreate, LaboratoryPersonalPatientModelList })(LaboratoryScreen)
