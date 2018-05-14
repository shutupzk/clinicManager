import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm } from '../../../../../components'
import {
  queryDrugList,
  PrescriptionWesternPatientCreate,
  PrescriptionWesternPatientGet,
  queryRouteAdministrationList,
  queryFrequencyList,
  queryDoseUnitList,
  PrescriptionChinesePatientCreate,
  PrescriptionChinesePatientGet
} from '../../../../../ducks'

// 处方
class MedicalRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      c_presc_btn: 0,
      cPrescItemArray: [],
      wPrescItemArray: [],
      selItem: 'wPresc',
      selIndex: 0,
      showSaveCmodel: false
    }
  }

  async componentDidMount() {
    const { PrescriptionWesternPatientGet, PrescriptionChinesePatientGet, clinic_triage_patient_id } = this.props
    let wPrescItemArray = await PrescriptionWesternPatientGet({ clinic_triage_patient_id })
    wPrescItemArray = wPrescItemArray || []
    let array = await PrescriptionChinesePatientGet({ clinic_triage_patient_id })
    let cPrescItemArray = []
    for (let obj of array) {
      let data = obj.items
      let info = { ...obj }
      delete info.items
      cPrescItemArray.push({
        info,
        data
      })
    }

    console.log('cPrescItemArray ========', cPrescItemArray)

    this.setState({ wPrescItemArray, cPrescItemArray })
  }

  getCNameOptions() {
    const { drugs } = this.props
    console.log('drugs ===========', drugs)
    let array = []
    for (let key in drugs) {
      let {
        drug_stock_id,
        drug_name,
        specification,
        stock_amount,
        packing_unit_name,
        once_dose_unit_id,
        once_dose_unit_name,
        route_administration_id,
        route_administration_name,
        frequency_id,
        frequency_name,
        type
      } = drugs[key]
      if (type !== 1) continue
      array.push({
        value: drug_stock_id,
        label: drug_name,
        specification,
        stock_amount,
        packing_unit_name,
        once_dose_unit_id,
        once_dose_unit_name,
        route_administration_id,
        route_administration_name,
        frequency_id,
        frequency_name
      })
    }
    return array
  }

  queryDrugList(keyword, type = 0) {
    const { queryDrugList, clinic_id } = this.props
    if (keyword) {
      queryDrugList({ clinic_id, status: true, keyword, type }, true)
    }
  }

  queryDictionaries(keyword, fn) {
    if (keyword) {
      this.props[fn]({ keyword })
    }
  }

  getWNameOptions() {
    const { drugs } = this.props
    let array = []
    for (let key in drugs) {
      let {
        drug_stock_id,
        drug_name,
        specification,
        stock_amount,
        packing_unit_name,
        once_dose_unit_id,
        once_dose_unit_name,
        route_administration_id,
        route_administration_name,
        frequency_id,
        frequency_name,
        type
      } = drugs[key]
      if (type !== 0) continue
      array.push({
        value: drug_stock_id,
        label: drug_name,
        specification,
        stock_amount,
        packing_unit_name,
        once_dose_unit_id,
        once_dose_unit_name,
        route_administration_id,
        route_administration_name,
        frequency_id,
        frequency_name
      })
    }
    return array
  }
  getUnitoptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { id, name } = doseUnits[key]
      array.push({
        value: id,
        label: name
      })
    }
    return array
  }
  getUsageOptions() {
    const { routeAdministrationss } = this.props
    let array = []
    for (let key in routeAdministrationss) {
      let { id, name } = routeAdministrationss[key]
      array.push({
        value: id,
        label: name
      })
    }
    return array
  }
  getPharmacyOptions() {
    return [{ value: 0, label: '本诊所' }, { value: 1, label: '外购' }, { value: 2, label: '代购' }]
  }
  getFrequencyOptions() {
    const { frequencies } = this.props
    let array = []
    for (let key in frequencies) {
      const { id, name } = frequencies[key]
      array.push({
        value: id,
        label: name
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

  // 设置中药药品总量信息
  setCItemAmountValue(e, index) {
    const { selIndex, cPrescItemArray } = this.state
    let value = e.target.value
    if (value) {
      let array = cPrescItemArray[selIndex].data
      let info = cPrescItemArray[selIndex].info
      array[index].once_dose = value
      if (info.amount) {
        array[index].amount = value * info.amount
      }
      cPrescItemArray[selIndex].data = array
      this.setState({ cPrescItemArray })
    }
  }

  // 设置中药药品信息
  setCItemValues(data, index) {
    const { selIndex, cPrescItemArray } = this.state
    let array = cPrescItemArray[selIndex].data
    array[index] = { ...array[index], ...data }
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

  // 设置中药药品数量信息
  setCInfoAmountValue(e) {
    const { selIndex, cPrescItemArray } = this.state
    let value = e.target.value
    if (value) {
      let info = cPrescItemArray[selIndex].info
      let array = cPrescItemArray[selIndex].data
      info.amount = value
      for (let i = 0; i < array.length; i++) {
        if (array[i].once_dose) {
          array[i].amount = array[i].once_dose * value
        }
      }
      cPrescItemArray[selIndex].info = info
      cPrescItemArray[selIndex].data = array
      this.setState({ cPrescItemArray })
    }
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
  // 设置西药信息
  setWItemValues(data, index) {
    const { wPrescItemArray } = this.state
    let array = [...wPrescItemArray] // [...treatments]
    array[index] = { ...array[index], ...data }
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
    for (let { drug_stock_id, once_dose, once_dose_unit_id, route_administration_id, frequency_id, amount, illustration, fetch_address, eff_day, select_once_dose_unit_id } of wPrescItemArray) {
      items.push({
        drug_stock_id: drug_stock_id + '',
        once_dose: once_dose + '',
        once_dose_unit_id: (once_dose_unit_id || select_once_dose_unit_id) + '',
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
            <div style={{ flex: 4 }}>药品名称</div>
            <div style={{ flex: 3 }}>规格</div>
            <div style={{ flex: 2 }}>库存</div>
            <div style={{ flex: 2 }}>单次剂量</div>
            <div style={{ flex: 3 }}>剂量单位</div>
            <div style={{ flex: 3 }}>用法</div>
            <div style={{ flex: 3 }}>用药频次</div>
            <div style={{ flex: 1 }}>天数</div>
            <div style={{ flex: 2 }}>总量</div>
            <div style={{ flex: 2 }}>包装单位</div>
            <div style={{ flex: 3 }}>取药地点</div>
            <div style={{ flex: 3 }}>用药说明</div>
            <div style={{ flex: 2 }}>
              <div
                style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                onClick={() => {
                  this.addWestMedicinePres()
                }}
              >
                新增
              </div>
            </div>
          </li>
          {wPrescItemArray.map((item, index) => {
            let stock_amount = wPrescItemArray[index].stock_amount === undefined ? '' : wPrescItemArray[index].stock_amount
            let packing_unit_name = wPrescItemArray[index].packing_unit_name || ''
            return (
              <li key={index}>
                <div style={{ flex: 4 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].drug_stock_id, this.getWNameOptions())}
                      onChange={({
                        value,
                        label,
                        specification,
                        stock_amount,
                        once_dose_unit_id,
                        packing_unit_name,
                        once_dose_unit_name,
                        route_administration_id,
                        route_administration_name,
                        frequency_id,
                        frequency_name
                      }) => {
                        let data = {
                          drug_stock_id: value,
                          drug_name: label,
                          specification,
                          stock_amount,
                          packing_unit_name,
                          once_dose_unit_id,
                          once_dose_unit_name,
                          route_administration_id,
                          route_administration_name,
                          frequency_id,
                          frequency_name
                        }
                        this.setWItemValues(data, index)
                      }}
                      placeholder='搜索'
                      height={38}
                      onInputChange={keyword => this.queryDrugList(keyword, 0)}
                      options={this.getWNameOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 3 }}>{wPrescItemArray[index].specification}</div>
                <div style={{ flex: 2 }}>{stock_amount + ' ' + packing_unit_name}</div>
                <div style={{ flex: 2 }}>
                  <input value={wPrescItemArray[index].once_dose === undefined ? '' : wPrescItemArray[index].once_dose} type='number' onChange={e => this.setWItemValue(e, index, 'once_dose')} />
                </div>
                <div style={{ flex: 3 }}>
                  {wPrescItemArray[index].once_dose_unit_id ? (
                    wPrescItemArray[index].once_dose_unit_name
                  ) : (
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].select_once_dose_unit_id, this.getUnitoptions())}
                      onChange={({ value, label }) => {
                        this.setWItemValue(value, index, 'select_once_dose_unit_id', 2)
                        this.setWItemValue(label, index, 'select_once_dose_unit_name', 2)
                      }}
                      placeholder='搜索'
                      height={38}
                      onInputChange={keyword => this.queryDictionaries(keyword, 'queryDoseUnitList')}
                      options={this.getUnitoptions()}
                    />
                  )}
                </div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].route_administration_id, this.getUsageOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'route_administration_id', 2)}
                      placeholder='搜索'
                      height={38}
                      onInputChange={keyword => this.queryDictionaries(keyword, 'queryRouteAdministrationList')}
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
                      onInputChange={keyword => this.queryDictionaries(keyword, 'queryFrequencyList')}
                      options={this.getFrequencyOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <input value={wPrescItemArray[index].eff_day === undefined ? '' : wPrescItemArray[index].eff_day} type='number' onChange={e => this.setWItemValue(e, index, 'eff_day')} />
                </div>
                <div style={{ flex: 2 }}>
                  <input value={wPrescItemArray[index].amount === undefined ? '' : wPrescItemArray[index].amount} type='number' onChange={e => this.setWItemValue(e, index, 'amount')} />
                </div>
                <div style={{ flex: 2 }}>{wPrescItemArray[index].packing_unit_name}</div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(wPrescItemArray[index].fetch_address, this.getPharmacyOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'fetch_address', 2)}
                      placeholder='搜索'
                      height={38}
                      options={this.getPharmacyOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 3 }}>
                  <input
                    value={wPrescItemArray[index].illustration === undefined ? '' : wPrescItemArray[index].illustration}
                    type='text'
                    onChange={e => this.setWItemValue(e, index, 'illustration')}
                  />
                </div>
                <div style={{ flex: 2 }}>
                  <div
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                    onClick={() => {
                      this.removeWestMedicinePres(index)
                    }}
                  >
                    删除
                  </div>
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
                this.prescriptionWesternPatientCreate()
              }}
            >
              保存
            </button>
          </div>
          <div className={'bottomRight'}>
            <button onClick={() => this.setState({ showSaveCmodel: true })}>存为模板</button>
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

  async prescriptionChinesePatientCreate() {
    const { PrescriptionChinesePatientCreate, clinic_triage_patient_id, personnel_id } = this.props
    const { selIndex, cPrescItemArray } = this.state
    let info = cPrescItemArray[selIndex].info
    let array = cPrescItemArray[selIndex].data
    let items = []
    for (let obj of array) {
      const { drug_stock_id, once_dose, once_dose_unit_id, amount, special_illustration, select_once_dose_unit_id } = obj
      items.push({
        drug_stock_id: drug_stock_id + '',
        once_dose: once_dose + '',
        once_dose_unit_id: (once_dose_unit_id || select_once_dose_unit_id) + '',
        amount: amount + '',
        special_illustration: special_illustration + ''
      })
    }
    let error = await PrescriptionChinesePatientCreate({ clinic_triage_patient_id, personnel_id, ...info, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      return this.refs.myAlert.alert('保存成功')
    }
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
              let stock_amount = array[index].stock_amount === undefined ? '' : array[index].stock_amount
              let packing_unit_name = array[index].packing_unit_name || ''
              return (
                <li key={index}>
                  <div>
                    <div>
                      <Select
                        value={this.getSelectValue(array[index].drug_stock_id, this.getCNameOptions())}
                        onChange={({
                          value,
                          specification,
                          stock_amount,
                          once_dose_unit_id,
                          packing_unit_name,
                          once_dose_unit_name,
                          route_administration_id,
                          route_administration_name,
                          frequency_id,
                          frequency_name
                        }) => {
                          let data = {
                            drug_stock_id: value,
                            specification,
                            stock_amount,
                            packing_unit_name,
                            once_dose_unit_id,
                            once_dose_unit_name,
                            route_administration_id,
                            route_administration_name,
                            frequency_id,
                            frequency_name
                          }
                          this.setCItemValues(data, index)
                        }}
                        placeholder='名称'
                        height={38}
                        options={this.getCNameOptions()}
                        onInputChange={keyword => this.queryDrugList(keyword, 1)}
                      />
                    </div>
                  </div>
                  <div>{stock_amount + ' ' + packing_unit_name}</div>
                  <div>
                    <input value={array[index].once_dose === undefined ? '' : array[index].once_dose} type='number' onChange={e => this.setCItemAmountValue(e, index)} />
                  </div>
                  <div>
                    {array[index].once_dose_unit_id ? (
                      array[index].once_dose_unit_name
                    ) : (
                      <Select
                        value={this.getSelectValue(array[index].select_once_dose_unit_id, this.getUnitoptions())}
                        onChange={({ value, label }) => {
                          this.setCItemValue(value, index, 'select_once_dose_unit_id', 2)
                          this.setCItemValue(label, index, 'select_once_dose_unit_name', 2)
                        }}
                        placeholder='搜索'
                        height={38}
                        onInputChange={keyword => this.queryDictionaries(keyword, 'queryDoseUnitList')}
                        options={this.getUnitoptions()}
                      />
                    )}
                  </div>
                  <div>
                    <input
                      value={array[index].special_illustration === undefined ? '' : array[index].special_illustration}
                      type='text'
                      onChange={e => this.setCItemValue(e, index, 'special_illustration')}
                    />
                  </div>
                  <div>{array[index].amount}</div>
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
              <div>天数</div>
              <div>总付数</div>
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
                <input value={info.eff_day === undefined ? '' : info.eff_day} type='number' onChange={e => this.setCInfoValue(e, 'eff_day')} />
              </div>
              <div>
                <input
                  value={info.amount === undefined ? '' : info.amount}
                  type='number'
                  onChange={e => {
                    this.setCInfoAmountValue(e)
                  }}
                />
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
                <div>
                  <Select
                    value={this.getSelectValue(info.fetch_address, this.getPharmacyOptions())}
                    onChange={({ value }) => this.setCInfoValue(value, 'fetch_address', 2)}
                    placeholder='搜索'
                    height={38}
                    options={this.getPharmacyOptions()}
                  />
                </div>
              </div>
              <div>
                <input value={info.medicine_illustration === undefined ? '' : info.medicine_illustration} type='text' onChange={e => this.setCInfoValue(e, 'medicine_illustration')} />
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
                this.prescriptionChinesePatientCreate()
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

  renderSaveWModel() {
    const { showSaveCmodel } = this.state
    if (!showSaveCmodel) return
    const { wPrescItemArray } = this.state
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>新增西/成药处方模板</span>
            <span onClick={() => this.setState({ showSaveCmodel: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板名称</span>
                <input style={{ background: 'rgba(255,255,255,1)', width: '80%', marginTop: '4px', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板类型</span>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '30px', marginTop: '4px' }}>
                  <input type='radio' name='type' style={{ background: 'rgba(255,255,255,1)', width: '18px', height: '18px', borderRadius: '4px', border: '1px solid #108EE9' }} />通用
                  <input
                    type='radio'
                    name='type'
                    style={{ background: 'rgba(255,255,255,1)', width: '18px', height: '18px', borderRadius: '4px', border: '1px solid #108EE9', marginLeft: '40px' }}
                  />个人
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} />
            </div>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 4 }}>药品名称</div>
                <div style={{ flex: 3 }}>规格</div>
                <div style={{ flex: 2 }}>单次剂量</div>
                <div style={{ flex: 3 }}>剂量单位</div>
                <div style={{ flex: 3 }}>用法</div>
                <div style={{ flex: 3 }}>用药频次</div>
                <div style={{ flex: 1 }}>天数</div>
                <div style={{ flex: 2 }}>总量</div>
                <div style={{ flex: 3 }}>取药地点</div>
                <div style={{ flex: 3 }}>用药说明</div>
              </li>
              {wPrescItemArray.map((item, index) => {
                return (
                  <li style={{ display: 'flex' }} key={index}>
                    <div style={{ flex: 4 }}>{wPrescItemArray[index].drug_name}</div>
                    <div style={{ flex: 3 }}>{wPrescItemArray[index].specification}</div>
                    <div style={{ flex: 2 }}>{wPrescItemArray[index].once_dose}</div>
                    <div style={{ flex: 3 }}>{wPrescItemArray[index].once_dose_unit_name}</div>
                    <div style={{ flex: 3 }}>{wPrescItemArray[index].route_administration_name}</div>
                    <div style={{ flex: 3 }}>{wPrescItemArray[index].frequency_name}</div>
                    <div style={{ flex: 1 }}>{wPrescItemArray[index].eff_day}</div>
                    <div style={{ flex: 2 }}>{wPrescItemArray[index].amount}</div>
                    <div style={{ flex: 3 }}>{wPrescItemArray[index].fetch_address}</div>
                    <div style={{ flex: 3 }}>{wPrescItemArray[index].illustration}</div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='formListBottom' style={{width: '100%'}}>
            <div className={'bottomCenter'}>
              <button className={'save'} >保存</button>
              <button className={'cancel'}>取消</button>
            </div>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  getTriagePatient() {
    const { triagePatients, clinic_triage_patient_id } = this.props
    for (let triagePatient of triagePatients) {
      if (triagePatient.clinic_triage_patient_id === clinic_triage_patient_id) {
        return triagePatient
      }
    }
    return {}
  }

  render() {
    const { selItem, cPrescItemArray } = this.state
    const { medicalRecord } = this.props
    return (
      <div className='filterBox' style={{ width: '1500px' }}>
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
                  <div key={index} className={'prescItemParent ' + (selItem === 'cPresc' + index ? 'sel' : '')} style={{ position: 'relative' }}>
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
        {this.renderSaveWModel()}
        {this.getStyle()}
        <Confirm ref='myAlert' />
      </div>
    )
  }

  getStyle() {
    return (
      <style jsx='true'>{`
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
          width: 1388px;
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
          width: 1388px;
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
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    triagePatients: state.triagePatients.data,
    drugs: state.drugs.json_data,
    prescriptionWesternPatients: state.prescriptionWesternPatients.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data,
    doseUnits: state.doseUnits.data
  }
}

export default connect(mapStateToProps, {
  queryDrugList,
  PrescriptionWesternPatientCreate,
  PrescriptionWesternPatientGet,
  queryRouteAdministrationList,
  queryFrequencyList,
  queryDoseUnitList,
  PrescriptionChinesePatientCreate,
  PrescriptionChinesePatientGet
})(MedicalRecordScreen)
