import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '../../../../../components'
import { queryDrugList, PrescriptionWesternPatientCreate, PrescriptionWesternPatientGet } from '../../../../../ducks'

// 处方
class MedicalRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      c_presc_btn: 0,
      cPrescItemArray: [],
      wPrescItemArray: [],
      selItem: 'wPresc',
      selIndex: 0
    }
  }

  getCNameOptions() {
    return [{ value: 1, label: '黄芪' }, { value: 2, label: '静脉输液' }]
  }

  queryDrugList(keyword, type = 0) {
    const { queryDrugList, clinic_id } = this.props
    if (keyword) {
      queryDrugList({ clinic_id, status: true, keyword, type }, true)
    }
  }

  getWNameOptions() {
    const { drugs } = this.props
    let array = []
    for (let key in drugs) {
      let { drug_stock_id, drug_name, specification } = drugs[key]
      array.push({
        value: drug_stock_id,
        label: drug_name,
        specification
      })
    }
    return array
  }
  getUnitoptions() {
    return [{ value: 1, label: '次' }, { value: 2, label: '个' }, { value: 3, label: '颗' }]
  }
  getUsageOptions() {
    return [{ value: 1, label: '口服' }, { value: 2, label: '外敷' }]
  }
  getPharmacyOptions() {
    return [{ value: 1, label: '药房1' }, { value: 2, label: '药房1' }]
  }
  getFrequencyOptions() {
    return [{ value: 1, label: '一次' }, { value: 2, label: '两次' }]
  }
  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  // 设置中药药品信息
  setCItemValue(e, index, key, type = 1) {
    const { selIndex, cPrescItemArray } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = cPrescItemArray[selIndex].data // [...treatments]
    array[index][key] = value
    cPrescItemArray[selIndex].data = array
    this.setState({ cPrescItemArray })
  }
  // 设置中药药品总信息
  setCInfoValue(e, key, type = 1) {
    const { selIndex, cPrescItemArray } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let info = cPrescItemArray[selIndex].info // [...treatments]
    info[key] = value
    cPrescItemArray[selIndex].info = info
    this.setState({ cPrescItemArray })
  }
  // 设置西药信息
  setWItemValue(e, index, key, type = 1) {
    const { wPrescItemArray } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...wPrescItemArray] // [...treatments]
    array[index][key] = value
    this.setState({ wPrescItemArray: array })
  }
  // 添加中药处方项
  addChineseMedicinePres() {
    const { cPrescItemArray } = this.state
    this.setState({ cPrescItemArray: [...cPrescItemArray, { info: {}, data: [] }] })
  }
  // 删除中药处方项
  removecPrescItem(index) {
    const { selIndex, cPrescItemArray } = this.state
    let array = [...cPrescItemArray]
    array.splice(index, 1)
    index = selIndex - 1
    if (index < 0) {
      index = 0
    }
    let selItem = 'cPresc' + index
    // console.log('array=========', array, index, selItem)
    if (array.length === 0) {
      selItem = 'wPresc'
    }
    this.setState({ cPrescItemArray: array, selIndex: index, selItem: selItem })
  }
  // 添加西药处方药品
  addWestMedicinePres() {
    const { wPrescItemArray } = this.state
    this.setState({ wPrescItemArray: [...wPrescItemArray, {}] })
  }
  // 删除西药处方药品
  removeWestMedicinePres(index) {
    const { wPrescItemArray } = this.state
    let array = [...wPrescItemArray]
    array.splice(index, 1)
    this.setState({ wPrescItemArray: array })
  }

  async prescriptionWesternPatientCreate() {
    const { PrescriptionWesternPatientCreate, clinic_triage_patient_id, personnel_id } = this.props
    const { wPrescItemArray } = this.state
    let items = []
    for (let { drug_stock_id, once_dose, once_dose_unit_id, route_administration_id, frequency_id, amount, illustration, fetch_address, eff_day } of wPrescItemArray) {
      items.push({
        drug_stock_id: drug_stock_id + '',
        once_dose: once_dose + '',
        once_dose_unit_id: once_dose_unit_id + '',
        route_administration_id: route_administration_id + '',
        frequency_id: frequency_id + '',
        amount: amount + '',
        illustration: illustration + '',
        fetch_address: fetch_address + '',
        eff_day: eff_day + ''
      })
    }
    let error = await PrescriptionWesternPatientCreate({ personnel_id, clinic_triage_patient_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      return this.refs.myAlert.alert('保存成功')
    }
  }

  // 显示西药处方详情
  renderPrescriptionDetail() {
    const { wPrescItemArray } = this.state
    return (
      <div className={'tableDIV'}>
        <ul>
          <li>
            <div style={{ flex: 3 }}>药品名称</div>
            <div style={{ flex: 3 }}>规格</div>
            <div style={{ flex: 2 }}>库存</div>
            <div style={{ flex: 2 }}>单次剂量</div>
            <div style={{ flex: 3 }}>用法</div>
            <div style={{ flex: 3 }}>用药频次</div>
            <div style={{ flex: 1 }}>天数</div>
            <div style={{ flex: 2 }}>总量</div>
            <div style={{ flex: 3 }}>药房</div>
            <div style={{ flex: 3 }}>用药说明</div>
            <div
              style={{ flex: 2 }}
              className={'addItem'}
              onClick={() => {
                this.addWestMedicinePres()
              }}
            >
              新增
            </div>
          </li>
          {wPrescItemArray.map((item, index) => {
            return (
              <li key={index}>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].drug_stock_id, this.getWNameOptions())}
                      onChange={({ value, specification }) => {
                        this.setWItemValue(value, index, 'drug_stock_id', 2)
                        this.setWItemValue(specification, index, 'specification', 2)
                      }}
                      placeholder='搜索'
                      height={38}
                      onInputChange={keyword => this.queryDrugList(keyword, 0)}
                      options={this.getWNameOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 3 }}>{wPrescItemArray[index].specification}</div>
                <div style={{ flex: 2 }}>50瓶</div>
                <div style={{ flex: 2 }}>
                  <input value={wPrescItemArray[index].dose === undefined ? '' : wPrescItemArray[index].dose} type='number' onChange={e => this.setWItemValue(e, index, 'dose')} />
                </div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].route_administration_id, this.getUsageOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'route_administration_id', 2)}
                      placeholder='搜索'
                      height={38}
                      options={this.getUsageOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].frequency_id, this.getFrequencyOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'frequency_id', 2)}
                      placeholder='搜索'
                      height={38}
                      options={this.getFrequencyOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <input value={wPrescItemArray[index].days === undefined ? '' : wPrescItemArray[index].days} type='number' onChange={e => this.setWItemValue(e, index, 'days')} />
                </div>
                <div style={{ flex: 2 }}>
                  <input
                    value={wPrescItemArray[index].total_amount === undefined ? '' : wPrescItemArray[index].total_amount}
                    type='number'
                    onChange={e => this.setWItemValue(e, index, 'total_amount')}
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].pharmacy_id, this.getPharmacyOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'pharmacy_id', 2)}
                      placeholder='搜索'
                      height={38}
                      options={this.getPharmacyOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 3 }}>
                  <input
                    value={wPrescItemArray[index].default_remark === undefined ? '' : wPrescItemArray[index].default_remark}
                    type='text'
                    onChange={e => this.setWItemValue(e, index, 'default_remark')}
                  />
                </div>
                <div
                  style={{ flex: 2 }}
                  className={'removeItem'}
                  onClick={() => {
                    this.removeWestMedicinePres(index)
                  }}
                >
                  删除
                </div>
              </li>
            )
          })}
        </ul>
        <div className={'formListBottom'}>
          <div className={'bottomCenter'}>
            <button className={'cancel'}>取消</button>
            <button
              className={'save'}
              onClick={() => {
                this.submit()
              }}
            >
              保存
            </button>
          </div>
          <div className={'bottomRight'}>
            <button>存为模板</button>
            <button>打印病历</button>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }
  // 添加中药处方药品
  addCPresc() {
    const { selIndex, cPrescItemArray } = this.state
    cPrescItemArray[selIndex].data.push({})
    this.setState({ cPrescItemArray })
  }
  // 删除中药处方药品
  removecPresc(index) {
    const { selIndex, cPrescItemArray } = this.state
    let array = [...cPrescItemArray[selIndex].data]
    array.splice(index, 1)
    cPrescItemArray[selIndex].data = array
    this.setState({ cPrescItemArray })
  }
  // 中药处方详情
  renderCPrescDetail() {
    const { selIndex, cPrescItemArray } = this.state
    let array = []
    let info = {}
    if (cPrescItemArray[selIndex] !== undefined) {
      array = cPrescItemArray[selIndex].data
      info = cPrescItemArray[selIndex].info
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={'tableDIV'}>
          <ul>
            <li>
              <div>药品名称</div>
              <div>库存</div>
              <div>单次剂量</div>
              <div>单位</div>
              <div>特殊要求</div>
              <div>总量</div>
              <div
                className={'addItem'}
                onClick={() => {
                  this.addCPresc()
                }}
              >
                新增
              </div>
            </li>
            {array.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <div>
                      <Select
                        value={this.getSelectValue(array[index].drug_id, this.getCNameOptions())}
                        onChange={e => this.setCItemValue(e.value, index, 'drug_id', 2)}
                        placeholder='名称'
                        height={38}
                        options={this.getCNameOptions()}
                      />
                    </div>
                  </div>
                  <div>100000瓶</div>
                  <div>
                    <input value={array[index].dose === undefined ? '' : array[index].dose} type='number' onChange={e => this.setCItemValue(e, index, 'dose')} />
                  </div>
                  <div>
                    <div>
                      <Select
                        value={this.getSelectValue(array[index].unit_id, this.getUnitoptions())}
                        onChange={({ value }) => this.setCItemValue(value, index, 'unit_id', 2)}
                        placeholder='搜索单位'
                        height={38}
                        options={this.getUnitoptions()}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      value={array[index].special_requirements === undefined ? '' : array[index].special_requirements}
                      type='text'
                      onChange={e => this.setCItemValue(e, index, 'special_requirements')}
                    />
                  </div>
                  <div>
                    <input value={array[index].total_amount === undefined ? '' : array[index].total_amount} type='number' onChange={e => this.setCItemValue(e, index, 'total_amount')} />
                  </div>
                  <div
                    className={'removeItem'}
                    onClick={() => {
                      this.removecPresc(index)
                    }}
                  >
                    删除
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'tableDIV'} style={{ flexDirection: 'column' }}>
          <ul>
            <li>
              <div>用法</div>
              <div>每日剂量</div>
              <div>天数</div>
              <div>单位</div>
              <div>总剂量</div>
              <div>频次</div>
              <div>取药地点</div>
              <div>服药要求</div>
            </li>
            <li>
              <div>
                <div>
                  <Select
                    value={this.getSelectValue(info.route_administration_id, this.getUsageOptions())}
                    onChange={({ value }) => this.setCInfoValue(value, 'route_administration_id', 2)}
                    placeholder='搜索用法'
                    height={38}
                    options={this.getUsageOptions()}
                  />
                </div>
              </div>
              <div>
                <input value={info.once_dose === undefined ? '' : info.once_dose} type='number' onChange={e => this.setCInfoValue(e, 'once_dose')} />
              </div>
              <div>
                <input value={info.days === undefined ? '' : info.days} type='number' onChange={e => this.setCInfoValue(e, 'days')} />
              </div>
              <div>
                <div>
                  <Select
                    value={this.getSelectValue(info.unit_id, this.getUnitoptions())}
                    onChange={({ value }) => this.setCInfoValue(value, 'unit_id', 2)}
                    placeholder='搜索单位'
                    height={38}
                    options={this.getUnitoptions()}
                  />
                </div>
              </div>
              <div>
                <input value={info.total_dose === undefined ? '' : info.total_dose} type='number' onChange={e => this.setCInfoValue(e, 'total_dose')} />
              </div>
              <div>
                <div>
                  <Select
                    value={this.getSelectValue(info.frequency_id, this.getFrequencyOptions())}
                    onChange={({ value }) => this.setCInfoValue(value, 'frequency_id', 2)}
                    placeholder='搜索频次'
                    height={38}
                    options={this.getFrequencyOptions()}
                  />
                </div>
              </div>
              <div>
                <input value={info.get_address === undefined ? '' : info.get_address} type='text' onChange={e => this.setCInfoValue(e, 'get_address')} />
              </div>
              <div>
                <input value={info.default_remark === undefined ? '' : info.default_remark} type='text' onChange={e => this.setCInfoValue(e, 'default_remark')} />
              </div>
            </li>
          </ul>
        </div>
        <div className={'formListBottom'}>
          <div className={'bottomCenter'}>
            <button className={'cancel'}>取消</button>
            <button
              className={'save'}
              onClick={() => {
                this.submit()
              }}
            >
              保存
            </button>
          </div>
          <div className={'bottomRight'}>
            <button>存为模板</button>
            <button>打印病历</button>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  render() {
    const { selItem, cPrescItemArray } = this.state
    const { medicalRecord } = this.props
    return (
      <div className='filterBox' style={{ width: '1300px' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '67px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 65px 0px 47px' }}>
            <div className='prescriptionLank'>
              <div className={'prescItemParent ' + (selItem === 'wPresc' ? 'sel' : '')}>
                <div
                  className={'prescItem'}
                  onClick={() => {
                    this.setState({ selItem: 'wPresc' })
                  }}
                >
                  西/成药处方
                </div>
              </div>
              {cPrescItemArray.map((item, index) => {
                return (
                  <div className={'prescItemParent ' + (selItem === 'cPresc' + index ? 'sel' : '')} style={{ position: 'relative' }}>
                    <div
                      className={'prescItem'}
                      onClick={() => {
                        this.setState({ selItem: 'cPresc' + index, selIndex: index })
                      }}
                    >
                      中药处方{index + 1}
                    </div>
                    <i onClick={() => this.removecPrescItem(index)}>×</i>
                  </div>
                )
              })}
              <button
                style={{ height: '30px' }}
                onClick={e => {
                  this.addChineseMedicinePres()
                }}
              >
                {' '}
                + 中药处方
              </button>
            </div>
            <div style={{ height: '67px', width: '280px', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '40px' }}>
              <button style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '17px' }}>选择模板</button>
              <button style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }}>复制处方</button>
            </div>
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
          {selItem === 'wPresc' ? this.renderPrescriptionDetail() : this.renderCPrescDetail()}
        </div>
        {this.getStyle()}
      </div>
    )
  }

  getStyle() {
    return (
      <style jsx>{`
        .prescriptionLank {
          flex: 1;
          display: flex;
          flex-direction: row;
        }
        .prescriptionLank button,
        .prescriptionLank .prescItemParent {
          float: left;
          height: 28px;
          border-radius: 4px;
          border: 1px solid #2acdc8;
          color: rgba(42, 205, 200, 1);
          font-size: 12px;
          margin: 16px 0 0 0;
          background: none;
          cursor: pointer;
          width: 100px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .prescriptionLank .prescItemParent .prescItem {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 28px;
        }
        .prescriptionLank .prescItemParent.sel {
          background: rgba(42, 205, 200, 1);
          color: rgba(255, 255, 255, 1);
          // border: none;
        }
        .prescItemParent i {
          position: absolute;
          top: 0;
          right: 2px;
          font-size: 18px;
          line-height: 15px;
        }
        .tableDIV {
          display: flex;
          width: 1188px;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          flex-direction: column;
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
          width: 100%;
          height: 30px;
          border-radius: 4px;
          outline-style: none;
          border: none;
        }
        .tableDIV ul li > div > div {
          width: 90%;
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
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.drugs)
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    drugs: state.drugs.json_data,
    prescriptionWesternPatients: state.prescriptionWesternPatients.data
  }
}

export default connect(mapStateToProps, { queryDrugList, PrescriptionWesternPatientCreate, PrescriptionWesternPatientGet })(MedicalRecordScreen)