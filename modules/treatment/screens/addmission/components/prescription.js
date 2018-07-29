import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm, PageCard, CustomSelect } from '../../../../../components'
import moment from 'moment'
import {
  clearLocalDrugData,
  ClinicDrugList,
  PrescriptionWesternPatientCreate,
  PrescriptionWesternPatientGet,
  queryRouteAdministrationList,
  queryFrequencyList,
  queryDoseUnitList,
  PrescriptionChinesePatientCreate,
  PrescriptionChinesePatientGet,
  PrescriptionWesternPatientModelCreate,
  PrescriptionWesternPatientModelList,
  PrescriptionChinesePatientModelCreate,
  PrescriptionChinesePatientModelList,
  queryReceiveRecords,
  GetLastBodySign,
  PatientGetByID,
  PrescriptionChinesePatientDelete
} from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import Print from 'rc-print'

const places = [{ value: 0, label: '本诊所' }, { value: 1, label: '外购' }, { value: 2, label: '代购' }]
const visitType = {
  '1': '初诊',
  '2': '复诊',
  '3': '术后诊'
}

// 处方
class PrescriptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_common: false,
      c_presc_btn: 0,
      cPrescItemArray: [],
      wPrescItemArray: [],
      selItem: 'wPresc',
      selIndex: 0,
      showSaveWmodel: false,
      selPage: 2,
      body_sign: {},
      patient: {}
    }
  }

  async componentDidMount() {
    const { PrescriptionWesternPatientGet, PrescriptionChinesePatientGet, clinic_triage_patient_id, clearLocalDrugData, patient_id, GetLastBodySign, PatientGetByID } = this.props
    await clearLocalDrugData()
    let wPrescItemArray = await PrescriptionWesternPatientGet({ clinic_triage_patient_id })
    let body_sign = await GetLastBodySign({ patient_id })
    let patient = await PatientGetByID({ patient_id })
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
    let wPrescItemArrayStr = JSON.stringify(wPrescItemArray)
    let cPrescItemArrayStr = JSON.stringify(cPrescItemArray)
    this.setState({ wPrescItemArray, cPrescItemArray, wPrescItemArrayStr, cPrescItemArrayStr, body_sign, patient })
  }

  ClinicDrugList(keyword, type = 0) {
    const { ClinicDrugList, clinic_id } = this.props
    if (keyword) {
      ClinicDrugList({ clinic_id, status: true, keyword, type }, true)
    }
  }

  queryDictionaries(keyword, fn) {
    if (keyword) {
      this.props[fn]({ keyword })
    }
  }

  getDrugOptions(TYPE) {
    const { drugs } = this.props
    let array = []
    for (let key in drugs) {
      let { clinic_drug_id, drug_name, type } = drugs[key]
      if (type !== TYPE) continue
      array.push({
        value: clinic_drug_id,
        label: drug_name,
        ...drugs[key]
      })
    }
    return array
  }
  getUnitoptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { name } = doseUnits[key]
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }

  getUsageOptions() {
    const { routeAdministrationss } = this.props
    let array = []
    for (let key in routeAdministrationss) {
      let { name } = routeAdministrationss[key]
      array.push({
        value: name,
        label: name,
        ...routeAdministrationss[key]
      })
    }
    return array
  }

  getPharmacyOptions() {
    return places
  }

  getPharmacyName(key) {
    for (let obj of places) {
      if (obj.value === key) {
        return obj.label
      }
    }
    return ''
  }

  getFrequencyOptions() {
    const { frequencies } = this.props
    let array = []
    for (let key in frequencies) {
      const { name } = frequencies[key]
      array.push({
        value: name,
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
    const { PrescriptionChinesePatientDelete, clinic_triage_patient_id, personnel_id } = this.props
    this.refs.myAlert.confirm('提示', '确定删除该处方？', 'Warning', async () => {
      let { selIndex, cPrescItemArray } = this.state
      let id = cPrescItemArray[selIndex].info.id
      if (id) {
        let { error } = await PrescriptionChinesePatientDelete({ id, clinic_triage_patient_id, personnel_id })
        if (error) {
          return this.refs.myAlert.alert('删除失败', error, null, 'Danger')
        }
      }

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
      let cPrescItemArrayStr = JSON.stringify(array)
      this.setState({ cPrescItemArray: array, cPrescItemArrayStr, selIndex: index, selItem: selItem })
    })
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
    const { PrescriptionWesternPatientGet, clinic_triage_patient_id } = this.props
    let err = this.checkPresW()
    if (err) {
      return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
    }
    let error = await this.savePrescriptionWesternPatient()
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      let wPrescItemArray = await PrescriptionWesternPatientGet({ clinic_triage_patient_id })
      this.setState({ wPrescItemArrayStr: JSON.stringify(wPrescItemArray), wPrescItemArray })
      return this.refs.myAlert.alert('保存成功')
    }
  }

  checkPresW() {
    const { wPrescItemArray } = this.state
    let hasNoStockAmount = false
    let hasNoStockName = ''
    let error = null
    if (!wPrescItemArray || wPrescItemArray.length === 0) {
      return '请选择药品'
    }
    for (let item of wPrescItemArray) {
      const { clinic_drug_id, fetch_address, amount, once_dose, once_dose_unit_name, route_administration_name, eff_day, frequency_name, stock_amount, drug_name } = item
      if (!clinic_drug_id) {
        error = '药品不能为空'
        break
      }
      if (!fetch_address && fetch_address * 1 !== 0) {
        error = '取药地点不能为空'
        break
      }
      if (!amount && amount * 1 !== 0) {
        error = '总量不能为空'
        break
      }
      if (!once_dose) {
        error = '单次剂量不能为空'
        break
      }
      if (!once_dose_unit_name) {
        error = '剂量单位不能为空'
        break
      }
      if (!route_administration_name) {
        error = '用法不能为空'
        break
      }
      if (!eff_day) {
        error = '处方天数不能为空'
        break
      }
      if (!frequency_name) {
        error = '用药频次不能为空'
        break
      }

      if ((!stock_amount || stock_amount === 0) && fetch_address * 1 === 0) {
        hasNoStockAmount = true
        hasNoStockName = drug_name
        break
      }
    }
    if (hasNoStockAmount) {
      return hasNoStockName + ' 库存为0 ，请您重新选择药品，或选择“代购”或“外购”。'
    }
    return error
  }

  async savePrescriptionWesternPatient() {
    const { PrescriptionWesternPatientCreate, clinic_triage_patient_id, personnel_id } = this.props
    const { wPrescItemArray } = this.state
    let items = []
    let hasNoStockAmount = false
    let hasNoStockName = ''
    for (let item of wPrescItemArray) {
      const { stock_amount, fetch_address, drug_name } = item
      if ((!stock_amount || stock_amount === 0) && fetch_address * 1 === 0) {
        hasNoStockAmount = true
        hasNoStockName = drug_name
        break
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
    if (hasNoStockAmount) {
      return hasNoStockName + ' 库存为0 ，请您重新选择药品，或选择“代购”或“外购”。'
    }
    return PrescriptionWesternPatientCreate({ personnel_id, clinic_triage_patient_id, items })
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
            let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
            let packing_unit_name = item.packing_unit_name || ''
            return (
              <li key={index}>
                <div style={{ flex: 4 }}>
                  <div>
                    <CustomSelect
                      controlStyle={{ height: '38px' }}
                      value={item.clinic_drug_id || ''}
                      label={item.drug_name || ''}
                      mustOptionValue={!false}
                      valueKey='clinic_drug_id'
                      labelKey='drug_name'
                      placeholder='搜索'
                      onChange={item => {
                        // console.log('item=====', item)
                        this.setWItemValues(item, index)
                      }}
                      onInputChange={keyword => this.ClinicDrugList(keyword, 0)}
                      options={this.getDrugOptions(0)}
                      renderTitle={(item, index) => {
                        return (
                          <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', justifyContent: 'center', alignItems: 'center', background: '#F2F2F2' }} key={index}>
                            <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>药品名</div>
                            <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>规格</div>
                            <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>生产厂家</div>
                            <div style={{ flex: 1, textAlign: 'center' }}>库存</div>
                          </div>
                        )
                      }}
                      renderItem={(item, sindex) => {
                        let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
                        let packing_unit_name = item.packing_unit_name || ''
                        let has = false
                        for (let i = 0; i < wPrescItemArray.length; i++) {
                          let obj = wPrescItemArray[i]
                          if (obj.clinic_drug_id === item.clinic_drug_id && sindex !== index) {
                            has = true
                            break
                          }
                        }
                        if (has) return null
                        return (
                          <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '50px', justifyContent: 'center', alignItems: 'center' }} key={sindex}>
                            <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.drug_name}</div>
                            <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.specification}</div>
                            <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.manu_factory_name}</div>
                            <div style={{ flex: 1, textAlign: 'center' }}>{stock_amount + ' ' + packing_unit_name}</div>
                          </div>
                        )
                      }}
                    />
                  </div>
                </div>
                <div style={{ flex: 3 }}>{item.specification}</div>
                <div style={{ flex: 2 }}>{stock_amount + ' ' + packing_unit_name}</div>
                <div style={{ flex: 2 }}>
                  <input value={item.once_dose || ''} type='number' onChange={e => this.setWItemValue(e, index, 'once_dose')} />
                </div>
                <div style={{ flex: 3 }}>
                  <Select
                    value={this.getSelectValue(item.once_dose_unit_name, this.getUnitoptions())}
                    onChange={({ value, label }) => {
                      this.setWItemValue(value, index, 'once_dose_unit_name', 2)
                    }}
                    placeholder='搜索'
                    height={38}
                    onInputChange={keyword => this.queryDictionaries(keyword, 'queryDoseUnitList')}
                    options={this.getUnitoptions()}
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select
                      value={this.getSelectValue(item.route_administration_name, this.getUsageOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'route_administration_name', 2)}
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
                      value={this.getSelectValue(item.frequency_name, this.getFrequencyOptions())}
                      onChange={({ value }) => this.setWItemValue(value, index, 'frequency_name', 2)}
                      placeholder='搜索'
                      height={38}
                      onInputChange={keyword => this.queryDictionaries(keyword, 'queryFrequencyList')}
                      options={this.getFrequencyOptions()}
                    />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <input value={item.eff_day || ''} type='number' onChange={e => this.setWItemValue(e, index, 'eff_day')} />
                </div>
                <div style={{ flex: 2 }}>
                  <input value={item.amount || ''} type='number' onChange={e => this.setWItemValue(e, index, 'amount')} />
                </div>
                <div style={{ flex: 2 }}>{item.packing_unit_name}</div>
                <div style={{ flex: 3 }}>
                  <div>
                    <Select value={this.getSelectValue(item.fetch_address, this.getPharmacyOptions())} onChange={({ value }) => this.setWItemValue(value, index, 'fetch_address', 2)} placeholder='搜索' height={38} options={this.getPharmacyOptions()} />
                  </div>
                </div>
                <div style={{ flex: 3 }}>
                  <input value={item.illustration || ''} type='text' onChange={e => this.setWItemValue(e, index, 'illustration')} />
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
            <button onClick={() => this.setState({ showSaveWmodel: true })}>存为模板</button>
            <button onClick={() => this.refs.wprinter.onPrint()}>打印处方</button>
            <Print ref='wprinter' lazyRender isIframe>
              {this.wpPrinter()}
            </Print>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  wpPrinter() {
    let { user, triagePatients, clinic_triage_patient_id, medicalRecord } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    let { wPrescItemArray = [], body_sign = {}, patient = {} } = this.state
    let orderSn = ''
    if (wPrescItemArray && wPrescItemArray.length > 0) {
      orderSn = wPrescItemArray[0].order_sn || ''
    }
    const borderBottomDiv = { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px', borderBottom: '2px solid #101010' }
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px', fontSize: '15px', fontWeight: '400', color: '#202020' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label style={{ fontSize: '20px', fontWeight: '400' }}>门诊</label>
            <label style={{ fontSize: '25px', fontWeight: '500' }}>处方笺</label>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInfoRow} />
            <div style={patientInfoRow} />
            <div style={patientInfoRow}>处方编号：{orderSn}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>姓名：{triagePatient.patient_name}</div>
            <div style={patientInforRowItem}>年龄：{getAgeByBirthday(triagePatient.birthday)}</div>
            <div style={patientInforRowItem}>性别：{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>体重：{body_sign.weight}</div>
            <div style={patientInforRowItem}>病历号：{clinic_triage_patient_id}</div>
            <div style={patientInforRowItem}>科别：{triagePatient.department_name}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>临床（初步）诊断：{medicalRecord.diagnosis}</div>
            <div style={patientInforRowItem}>开具日期：{moment(orderSn.substr(0, 8)).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>地址：{(patient.province || '') + ' ' + (patient.city || '') + ' ' + (patient.district || '') + ' ' + (patient.address || '')}</div>
            <div style={patientInforRowItem}>电话：{patient.phone}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={{ ...patientInfoRow, fontWeight: '500', fontSize: '20px', marginLeft: '20px' }}>Rp</div>
          <div style={{ ...patientInfoRow, fontWeight: '500' }}>
            <div style={patientInforRowItem} />
            <div style={{ ...patientInforRowItem, flex: 7 }}>药品名</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>规格</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>总量</div>
          </div>
          {wPrescItemArray.map((item, index) => {
            return (
              <div style={patientInfoRow} key={index}>
                <div style={patientInforRowItem}>{index + 1}</div>
                <div style={{ ...patientInforRowItem, flex: 7 }}>
                  <label>{item.drug_name}</label>
                  <label>
                    用法：{item.route_administration_name} 1次{item.once_dose} {item.once_dose_unit_name} {item.frequency_name} 共{item.eff_day}天
                  </label>
                </div>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{item.specification}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>
                  共{item.amount}
                  {item.packing_unit_name}
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '0px', marginBottom: '20px' }}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>医师签名：{triagePatient.doctor_name}</div>
          </div>
          <div style={{ ...patientInfoRow, marginTop: '20px' }}>
            <div style={patientInforRowItem}>审核药师：</div>
            <div style={patientInforRowItem}>发药药师：</div>
          </div>
        </div>
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
    const { selIndex } = this.state
    const { PrescriptionChinesePatientGet, clinic_triage_patient_id } = this.props
    let err = this.checkPresC(selIndex)
    if (err) return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
    let { error } = await this.saveOnePrescriptionChinesePatient(selIndex)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
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
      this.setState({ cPrescItemArrayStr: JSON.stringify(cPrescItemArray), cPrescItemArray })
      return this.refs.myAlert.alert('保存成功')
    }
  }

  checkPresC(selIndex) {
    const { cPrescItemArray } = this.state
    let info = cPrescItemArray[selIndex].info
    let array = cPrescItemArray[selIndex].data
    if (!array || array.length === 0) {
      return '请选择药品'
    }
    const { fetch_address, amount, route_administration_name, eff_day, frequency_name } = info
    if (!fetch_address && fetch_address * 1 !== 0) {
      return '取药地点不能为空'
    }
    if (!amount) {
      return '付数不能为空'
    }
    if (!route_administration_name) {
      return '用法不能为空'
    }
    if (!eff_day) {
      return '处方天数不能为空'
    }
    if (!frequency_name) {
      return '用药频次不能为空'
    }
    let hasNoStockAmount = false
    let hasNoStockName = ''
    let error = null
    for (let item of array) {
      const { clinic_drug_id, amount, once_dose, once_dose_unit_name, stock_amount, drug_name } = item
      if (!clinic_drug_id) {
        error = '药品不能为空'
        break
      }
      if (!amount) {
        error = '总量不能为空'
        break
      }
      if (!once_dose) {
        error = '单次剂量不能为空'
        break
      }
      if (!once_dose_unit_name) {
        error = '剂量单位不能为空'
        break
      }
      if ((!stock_amount || stock_amount === 0) && fetch_address * 1 === 0) {
        hasNoStockAmount = true
        hasNoStockName = drug_name
        break
      }
    }
    if (hasNoStockAmount) {
      return hasNoStockName + ' 库存为0 ，请您重新选择药品，或选择“代购”或“外购”。'
    }
    return error
  }

  async saveOnePrescriptionChinesePatient(selIndex) {
    const { PrescriptionChinesePatientCreate, clinic_triage_patient_id, personnel_id } = this.props
    const { cPrescItemArray } = this.state
    let info = cPrescItemArray[selIndex].info
    let array = cPrescItemArray[selIndex].data
    let items = []
    for (let item of array) {
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
    return PrescriptionChinesePatientCreate({ ...info, items, clinic_triage_patient_id, personnel_id })
  }

  checkPresAll() {
    let error = this.checkPresW()
    if (error) return '西/成药处方  ' + error
    const { cPrescItemArray } = this.state
    for (let i = 0; i < cPrescItemArray.length; i++) {
      error = this.checkPresC(i)
      if (error) {
        error = '中药处方 ' + (i + 1) + '  ' + error
        break
      }
    }
    return error
  }

  // 提示是否保存当前页
  tipsToSave(pageType) {
    const { changePage } = this.props
    const { wPrescItemArray, cPrescItemArray, wPrescItemArrayStr, cPrescItemArrayStr } = this.state
    if (wPrescItemArrayStr !== JSON.stringify(wPrescItemArray) || cPrescItemArrayStr !== JSON.stringify(cPrescItemArray)) {
      this.refs.myConfirm.confirm('提示', '您填写的内容已修改，确认保存？', 'Warning', async () => {
        let err = this.checkPresAll()
        if (err) {
          return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
        }
        err = await this.savePrescriptionWesternPatient()
        if (err) {
          return this.refs.myAlert.alert('保存失败', err, null, 'Danger')
        }
        for (let i = 0; i < cPrescItemArray.length; i++) {
          let { error, id } = await this.saveOnePrescriptionChinesePatient(i)
          if (error) {
            return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
          }
          cPrescItemArray[i].info.id = id
        }
        this.setState({ cPrescItemArrayStr: JSON.stringify(cPrescItemArray), cPrescItemArray })
        changePage(pageType)
      })
    } else {
      changePage(pageType)
    }
  }

  // 中药处方详情
  renderCPrescDetail() {
    const { selIndex, cPrescItemArray } = this.state
    let array = []
    let info = {}
    if (cPrescItemArray[selIndex] !== undefined) {
      array = cPrescItemArray[selIndex].data || []
      info = cPrescItemArray[selIndex].info || {}
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
                onClick={() => {
                  this.addCPresc()
                }}
                style={{ width: '80px', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
              >
                新增
              </div>
            </li>
            {array.map((item, index) => {
              let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
              let packing_unit_name = item.packing_unit_name || ''
              return (
                <li key={index}>
                  <div>
                    <div>
                      <CustomSelect
                        controlStyle={{ height: '38px' }}
                        value={item.clinic_drug_id || ''}
                        label={item.drug_name || ''}
                        mustOptionValue={!false}
                        valueKey='clinic_drug_id'
                        labelKey='drug_name'
                        placeholder='搜索'
                        onChange={item => {
                          this.setCItemValues(item, index)
                        }}
                        onInputChange={keyword => this.ClinicDrugList(keyword, 1)}
                        options={this.getDrugOptions(1)}
                        renderTitle={(item, sindex) => {
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', justifyContent: 'center', alignItems: 'center', background: '#F2F2F2' }} key={sindex}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>药品名</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>规格</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>生产厂家</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>库存</div>
                            </div>
                          )
                        }}
                        renderItem={(item, sindex) => {
                          let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
                          let packing_unit_name = item.packing_unit_name || ''
                          let has = false
                          for (let i = 0; i < array.length; i++) {
                            let obj = array[i]
                            if (obj.clinic_drug_id === item.clinic_drug_id && sindex !== index) {
                              has = true
                              break
                            }
                          }
                          if (has) return null
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '50px', justifyContent: 'center', alignItems: 'center' }} key={sindex}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.drug_name}</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.specification}</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.manu_factory_name}</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>{stock_amount + ' ' + packing_unit_name}</div>
                            </div>
                          )
                        }}
                      />
                    </div>
                  </div>
                  <div>{stock_amount + ' ' + packing_unit_name}</div>
                  <div>
                    <input value={item.once_dose || ''} type='number' onChange={e => this.setCItemAmountValue(e, index)} />
                  </div>
                  <div>
                    {item.once_dose_unit_id ? (
                      item.once_dose_unit_name
                    ) : (
                      <Select
                        value={this.getSelectValue(item.once_dose_unit_name, this.getUnitoptions())}
                        onChange={({ value, label }) => {
                          this.setCItemValue(value, index, 'once_dose_unit_name', 2)
                        }}
                        placeholder='搜索'
                        height={38}
                        onInputChange={keyword => this.queryDictionaries(keyword, 'queryDoseUnitList')}
                        options={this.getUnitoptions()}
                      />
                    )}
                  </div>
                  <div>
                    <input value={item.special_illustration || ''} type='text' onChange={e => this.setCItemValue(e, index, 'special_illustration')} />
                  </div>
                  <div>{item.amount}</div>
                  <div
                    style={{ width: '80px', color: 'red', cursor: 'pointer', textAlign: 'center' }}
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
                    value={this.getSelectValue(info.route_administration_name, this.getUsageOptions())}
                    onChange={({ value, label }) => {
                      this.setCInfoValue(value, 'route_administration_name', 2)
                    }}
                    placeholder='搜索用法'
                    height={38}
                    onInputChange={keyword => this.queryDictionaries(keyword, 'queryRouteAdministrationList')}
                    options={this.getUsageOptions()}
                  />
                </div>
              </div>
              <div>
                <input value={info.eff_day || ''} type='number' onChange={e => this.setCInfoValue(e, 'eff_day')} />
              </div>
              <div>
                <input
                  value={info.amount || ''}
                  type='number'
                  onChange={e => {
                    this.setCInfoAmountValue(e)
                  }}
                />
              </div>
              <div>
                <div>
                  <Select
                    value={this.getSelectValue(info.frequency_name, this.getFrequencyOptions())}
                    onChange={({ value, label }) => {
                      this.setCInfoValue(value, 'frequency_name', 2)
                    }}
                    placeholder='搜索频次'
                    height={38}
                    onInputChange={keyword => this.queryDictionaries(keyword, 'queryFrequencyList')}
                    options={this.getFrequencyOptions()}
                  />
                </div>
              </div>
              <div>
                <div>
                  <Select value={this.getSelectValue(info.fetch_address, this.getPharmacyOptions())} onChange={({ value }) => this.setCInfoValue(value, 'fetch_address', 2)} placeholder='搜索' height={38} options={this.getPharmacyOptions()} />
                </div>
              </div>
              <div>
                <input value={info.medicine_illustration || ''} type='text' onChange={e => this.setCInfoValue(e, 'medicine_illustration')} />
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
            <button
              onClick={() => {
                this.setState({ showSaveCmodel: true })
              }}
            >
              存为模板
            </button>
            <button onClick={() => this.refs.cprinter.onPrint()}>打印处方</button>
            <Print ref='cprinter' lazyRender isIframe>
              {this.cpPrinter()}
            </Print>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  cpPrinter() {
    let { user, triagePatients, clinic_triage_patient_id, medicalRecord } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    let { cPrescItemArray = [], body_sign = {}, patient = {}, selIndex } = this.state
    let array = []
    let info = {}
    if (cPrescItemArray[selIndex] !== undefined) {
      array = cPrescItemArray[selIndex].data || []
      info = cPrescItemArray[selIndex].info || {}
    }
    let orderSn = info.order_sn || ''
    const borderBottomDiv = { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px', borderBottom: '2px solid #101010' }
    const patientInfoRow = { display: 'flex', width: '100%', marginBottom: '5px' }
    const patientInforRowItem = { flex: 1, display: 'flex', flexDirection: 'column' }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px', fontSize: '15px', fontWeight: '400', color: '#202020' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label style={{ fontSize: '20px', fontWeight: '400' }}>门诊</label>
            <label style={{ fontSize: '25px', fontWeight: '500' }}>处方笺</label>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInfoRow} />
            <div style={patientInfoRow} />
            <div style={patientInfoRow}>处方编号：{orderSn}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>姓名：{triagePatient.patient_name}</div>
            <div style={patientInforRowItem}>年龄：{getAgeByBirthday(triagePatient.birthday)}</div>
            <div style={patientInforRowItem}>性别：{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>体重：{body_sign.weight}</div>
            <div style={patientInforRowItem}>病历号：{clinic_triage_patient_id}</div>
            <div style={patientInforRowItem}>科别：{triagePatient.department_name}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>临床（初步）诊断：{medicalRecord.diagnosis}</div>
            <div style={patientInforRowItem}>开具日期：{moment(orderSn.substr(0, 8)).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRow}>
            <div style={{ ...patientInforRowItem, flex: 2 }}>地址：{(patient.province || '') + ' ' + (patient.city || '') + ' ' + (patient.district || '') + ' ' + (patient.address || '')}</div>
            <div style={patientInforRowItem}>电话：{patient.phone}</div>
          </div>
        </div>
        <div style={borderBottomDiv}>
          <div style={{ ...patientInfoRow, fontWeight: '500', fontSize: '20px', marginLeft: '20px' }}>Rp</div>
          <div style={{ ...patientInfoRow, fontWeight: '500' }}>
            <div style={patientInforRowItem} />
            <div style={{ ...patientInforRowItem, flex: 7 }}>药品名</div>
            <div style={{ ...patientInforRowItem, flex: 3 }}>规格</div>
            <div style={{ ...patientInforRowItem, flex: 2 }}>总量</div>
          </div>
          {array.map((item, index) => {
            return (
              <div style={patientInfoRow} key={index}>
                <div style={patientInforRowItem}>{index + 1}</div>
                <div style={{ ...patientInforRowItem, flex: 7 }}>
                  <label>{item.drug_name}</label>
                  <label>
                    用法：1次 {item.once_dose} {item.once_dose_unit_name}
                  </label>
                </div>
                <div style={{ ...patientInforRowItem, flex: 3 }}>{item.specification}</div>
                <div style={{ ...patientInforRowItem, flex: 2 }}>
                  共{item.amount}
                  {item.packing_unit_name}
                </div>
              </div>
            )
          })}
          <div style={{ ...patientInfoRow, margin: '30px' }}>
            <div style={patientInforRowItem}>
              共{info.amount || ''}剂 {info.frequency_name || ''} {info.route_administration_name || ''}
            </div>
          </div>
        </div>
        <div style={{ ...borderBottomDiv, borderBottom: '0px', marginBottom: '20px' }}>
          <div style={patientInfoRow}>
            <div style={patientInforRowItem}>医师签名：{triagePatient.doctor_name}</div>
          </div>
          <div style={{ ...patientInfoRow, marginTop: '20px' }}>
            <div style={patientInforRowItem}>审核药师：</div>
            <div style={patientInforRowItem}>发药药师：</div>
          </div>
        </div>
      </div>
    )
  }

  async PrescriptionWesternPatientModelCreate() {
    const { PrescriptionWesternPatientModelCreate, personnel_id } = this.props
    const { wPrescItemArray, is_common, model_name } = this.state
    let items = []
    for (let item of wPrescItemArray) {
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
    let error = await PrescriptionWesternPatientModelCreate({ model_name, is_common, operation_id: personnel_id, items })
    if (error) {
      this.refs.myAlert.alert('保存失败', error)
    } else {
      this.refs.myAlert.alert('保存成功')
    }
  }

  renderSaveWModel() {
    const { showSaveWmodel } = this.state
    if (!showSaveWmodel) return
    const { wPrescItemArray } = this.state
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>新增西/成药处方模板</span>
            <span onClick={() => this.setState({ showSaveWmodel: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板名称</span>
                <input
                  style={{ background: 'rgba(255,255,255,1)', width: '80%', marginTop: '4px', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                  value={this.state.model_name || ''}
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
                    <div style={{ flex: 4 }}>{item.drug_name}</div>
                    <div style={{ flex: 3 }}>{item.specification}</div>
                    <div style={{ flex: 2 }}>{item.once_dose}</div>
                    <div style={{ flex: 3 }}>{item.once_dose_unit_name}</div>
                    <div style={{ flex: 3 }}>{item.route_administration_name}</div>
                    <div style={{ flex: 3 }}>{item.frequency_name}</div>
                    <div style={{ flex: 1 }}>{item.eff_day}</div>
                    <div style={{ flex: 2 }}>{item.amount}</div>
                    <div style={{ flex: 3 }}>{this.getPharmacyName(item.fetch_address)}</div>
                    <div style={{ flex: 3 }}>{item.illustration}</div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='formListBottom' style={{ width: '100%' }}>
            <div className={'bottomCenter'}>
              <button className={'save'} onClick={() => this.PrescriptionWesternPatientModelCreate()}>
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

  PrescriptionWesternPatientModelList({ offset, limit, keyword }) {
    const { PrescriptionWesternPatientModelList } = this.props
    PrescriptionWesternPatientModelList({ offset, limit, keyword })
  }

  renderWModelList() {
    const { showWmodelList, wPrescItemArray } = this.state
    if (!showWmodelList) return
    const { prescriptionWesternPatientModels, wm_page_info } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>西/成药处方模板</span>
            <span onClick={() => this.setState({ showWmodelList: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板名称</span>
                <div style={{ display: 'flex', marginTop: '4px', alignItems: 'center' }}>
                  <input
                    style={{ background: 'rgba(255,255,255,1)', width: '80%', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                    value={this.state.wmkeyword}
                    onChange={e => {
                      let wmkeyword = e.target.value
                      this.setState({ wmkeyword })
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
                      const keyword = this.state.wmkeyword
                      this.PrescriptionWesternPatientModelList({ keyword })
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
              {prescriptionWesternPatientModels.map((item, index) => {
                const { model_name, items, created_time } = item
                let drugNames = ''
                for (let obj of items) {
                  drugNames += obj.drug_name + ','
                }
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>{model_name}</div>
                    <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{drugNames}</div>
                    <div style={{ flex: 2 }}>{moment(created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div
                      style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={() => {
                        let newArray = [...wPrescItemArray, ...items]
                        this.setState({ wPrescItemArray: newArray, showWmodelList: false })
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
            offset={wm_page_info.offset}
            limit={wm_page_info.limit}
            total={wm_page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.wmkeyword
              this.PrescriptionWesternPatientModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  async PrescriptionChinesePatientModelCreate() {
    const { PrescriptionChinesePatientModelCreate, personnel_id } = this.props
    const { selIndex, cPrescItemArray, is_common, model_name } = this.state
    let info = cPrescItemArray[selIndex].info
    let array = cPrescItemArray[selIndex].data
    let items = []
    for (let item of array) {
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
    let error = await PrescriptionChinesePatientModelCreate({ operation_id: personnel_id, is_common, model_name, ...info, items })
    if (error) {
      this.refs.myAlert.alert('保存失败', error)
    } else {
      this.refs.myAlert.alert('保存成功')
    }
  }

  renderSaveCModel() {
    const { showSaveCmodel } = this.state
    if (!showSaveCmodel) return
    const { cPrescItemArray, selIndex } = this.state
    let array = []
    let info = {}
    if (cPrescItemArray[selIndex] !== undefined) {
      array = cPrescItemArray[selIndex].data
      info = cPrescItemArray[selIndex].info
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px', paddingBottom: '20px' }}>
          <div className='doctorList_top'>
            <span>中药处方模板</span>
            <span onClick={() => this.setState({ showSaveCmodel: false })}>x</span>
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
                <div style={{ flex: 4 }}>药品名称</div>
                <div style={{ flex: 2 }}>单次剂量</div>
                <div style={{ flex: 3 }}>剂量单位</div>
                <div style={{ flex: 3 }}>特殊要求</div>
                <div style={{ flex: 2 }}>总量</div>
              </li>
              {array.map((item, index) => {
                return (
                  <li style={{ display: 'flex' }} key={index}>
                    <div style={{ flex: 4 }}>{item.drug_name}</div>
                    <div style={{ flex: 4 }}>{item.once_dose}</div>
                    <div style={{ flex: 4 }}>{item.once_dose_unit_name}</div>
                    <div style={{ flex: 4 }}>{item.special_illustration}</div>
                    <div style={{ flex: 4 }}>{item.amount}</div>
                  </li>
                )
              })}
            </ul>
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
                <div style={{ flex: 4 }}>{info.route_administration_name}</div>
                <div style={{ flex: 4 }}>{info.eff_day}</div>
                <div style={{ flex: 4 }}>{info.amount}</div>
                <div style={{ flex: 4 }}>{info.frequency_name}</div>
                <div style={{ flex: 4 }}>{this.getPharmacyName(info.fetch_address)}</div>
                <div style={{ flex: 4 }}>{info.medicine_illustration}</div>
              </li>
            </ul>
          </div>
          <div className='formListBottom' style={{ width: '100%' }}>
            <div className={'bottomCenter'}>
              <button className={'save'} onClick={() => this.PrescriptionChinesePatientModelCreate()}>
                保存
              </button>
              <button className={'cancel'} onClick={() => this.setState({ showSaveCmodel: false })}>
                取消
              </button>
            </div>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  PrescriptionChinesePatientModelList({ offset, limit, keyword }) {
    const { PrescriptionChinesePatientModelList } = this.props
    PrescriptionChinesePatientModelList({ offset, limit, keyword })
  }

  renderCModelList() {
    const { showCmodelList, selIndex, cPrescItemArray } = this.state
    if (!showCmodelList) return
    const { prescriptionChinesePatientModels, cm_page_info } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>中药处方模板</span>
            <span onClick={() => this.setState({ showCmodelList: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>模板名称</span>
                <div style={{ display: 'flex', marginTop: '4px', alignItems: 'center' }}>
                  <input
                    style={{ background: 'rgba(255,255,255,1)', width: '80%', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                    value={this.state.wmkeyword}
                    onChange={e => {
                      let cmkeyword = e.target.value
                      this.setState({ cmkeyword })
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
                      const keyword = this.state.cmkeyword
                      this.PrescriptionChinesePatientModelList({ keyword })
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
              {prescriptionChinesePatientModels.map((item, index) => {
                const { model_name, items, created_time } = item
                let drugNames = ''
                for (let obj of items) {
                  drugNames += obj.drug_name + ','
                }
                return (
                  <li style={{ display: 'flex' }} key={index}>
                    <div style={{ flex: 3 }}>{model_name}</div>
                    <div style={{ flex: 4, textAlign: 'left', justifyContent: 'start', lineHeight: '20px' }}>{drugNames}</div>
                    <div style={{ flex: 2 }}>{moment(created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div
                      style={{ flex: 1, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={() => {
                        let info = { ...item }
                        delete info.items
                        let array = item.items || []
                        let newObj = { ...cPrescItemArray[selIndex] }
                        newObj.info = { ...newObj.info, ...info }
                        newObj.data = [...newObj.data, ...array]
                        let newArray = [...cPrescItemArray]
                        newArray[selIndex] = newObj
                        this.setState({ cPrescItemArray: newArray, showCmodelList: false })
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
            offset={cm_page_info.offset}
            limit={cm_page_info.limit}
            total={cm_page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.cmkeyword
              this.PrescriptionChinesePatientModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  queryReceiveRecords({ offset, limit, keyword }) {
    const { queryReceiveRecords } = this.props
    const triagePatient = this.getTriagePatient()
    const { clinic_patient_id } = triagePatient
    if (clinic_patient_id) {
      queryReceiveRecords({ clinic_patient_id, offset, limit, keyword })
    }
  }

  renderHistoryList() {
    const { showHistory, wPrescItemArray, cPrescItemArray } = this.state
    if (!showHistory) return
    const { receiveRecords, rr_page_info, PrescriptionWesternPatientGet, PrescriptionChinesePatientGet } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>历史处方</span>
            <span onClick={() => this.setState({ showHistory: false })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', background: 'rgba(244, 247, 248, 1)', height: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span>诊断名称</span>
                <div style={{ display: 'flex', marginTop: '4px', alignItems: 'center' }}>
                  <input
                    style={{ background: 'rgba(255,255,255,1)', width: '80%', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                    value={this.state.wmkeyword}
                    onChange={e => {
                      let zkkeyword = e.target.value
                      this.setState({ zkkeyword })
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
                      const keyword = this.state.zkkeyword
                      this.queryReceiveRecords({ keyword })
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
                <div style={{ flex: 3 }}>接诊时间</div>
                <div style={{ flex: 2 }}>接诊类型</div>
                <div style={{ flex: 2 }}>接诊科室</div>
                <div style={{ flex: 2 }}>接诊医生</div>
                <div style={{ flex: 4 }}>诊断结果</div>
                <div style={{ flex: 2 }}>是否有西药</div>
                <div style={{ flex: 2 }}>是否有中药</div>
                <div style={{ flex: 2 }} />
              </li>
              {receiveRecords.map((item, index) => {
                const { clinic_triage_patient_id, created_time, visit_type, department_name, doctor_name, pcp_count, pwp_count, diagnosis } = item
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>{moment(created_time).format('YYYY-MM-DD HH:mm')}</div>
                    <div style={{ flex: 2 }}>{visitType[visit_type]}</div>
                    <div style={{ flex: 2 }}>{department_name}</div>
                    <div style={{ flex: 2 }}>{doctor_name}</div>
                    <div style={{ flex: 4, lineHeight: '20px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>{diagnosis}</div>
                    <div style={{ flex: 2 }}>{pwp_count > 0 ? '有' : '无'}</div>
                    <div style={{ flex: 2 }}>{pcp_count > 0 ? '有' : '无'}</div>
                    <div
                      style={{ flex: 2, cursor: 'pointer', color: 'rgba(42,205,200,1)' }}
                      onClick={async () => {
                        let qwPrescItemArray = await PrescriptionWesternPatientGet({ clinic_triage_patient_id })
                        qwPrescItemArray = qwPrescItemArray || []
                        let array = await PrescriptionChinesePatientGet({ clinic_triage_patient_id })
                        let qcPrescItemArray = []
                        for (let obj of array) {
                          let data = obj.items
                          let info = { ...obj }
                          delete info.items
                          delete info.id
                          qcPrescItemArray.push({
                            info,
                            data
                          })
                        }
                        this.setState({ wPrescItemArray: [...wPrescItemArray, ...qwPrescItemArray], cPrescItemArray: [...cPrescItemArray, ...qcPrescItemArray], showHistory: false })
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
            offset={rr_page_info.offset}
            limit={rr_page_info.limit}
            total={rr_page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.zkkeyword
              this.queryReceiveRecords({ offset, limit, keyword })
            }}
          />
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
    const { selItem, cPrescItemArray, selPage } = this.state
    const { medicalRecord, changePage } = this.props
    return (
      <div>
        <div className={'childTopBar'}>
          <span
            className={this.state.pageType === 1 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 1 })
              this.tipsToSave(1)
            }}
          >
            病历
          </span>
          <span
            className={'sel'}
            onClick={() => {
              // changePage(2)
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
                <button
                  style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '17px' }}
                  onClick={() => {
                    if (selItem === 'wPresc') {
                      this.PrescriptionWesternPatientModelList({})
                      this.setState({ showWmodelList: true })
                    } else {
                      this.PrescriptionChinesePatientModelList({})
                      this.setState({ showCmodelList: true })
                    }
                  }}
                >
                  选择模板
                </button>
                <button
                  style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }}
                  onClick={() => {
                    this.queryReceiveRecords({})
                    this.setState({ showHistory: true })
                  }}
                >
                  复制处方
                </button>
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
          {this.renderWModelList()}
          {this.renderSaveCModel()}
          {this.renderCModelList()}
          {this.renderHistoryList()}
          {this.getStyle()}
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
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  console.log('state.user.data ==========', state.user.data)
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    user: state.user.data,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    triagePatients: state.triagePatients.data,
    patient_id: state.patients.selectId,
    drugs: state.drugs.json_data,
    prescriptionWesternPatients: state.prescriptionWesternPatients.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data,
    doseUnits: state.doseUnits.data,
    prescriptionWesternPatientModels: state.prescriptionWesternPatientModels.data,
    wm_page_info: state.prescriptionWesternPatientModels.page_info,
    prescriptionChinesePatientModels: state.prescriptionChinesePatientModels.data,
    cm_page_info: state.prescriptionChinesePatientModels.page_info,
    receiveRecords: state.receiveRecords.data,
    rr_page_info: state.receiveRecords.page_info
  }
}

export default connect(
  mapStateToProps,
  {
    ClinicDrugList,
    clearLocalDrugData,
    PrescriptionWesternPatientCreate,
    PrescriptionWesternPatientGet,
    queryRouteAdministrationList,
    queryFrequencyList,
    queryDoseUnitList,
    PrescriptionChinesePatientCreate,
    PrescriptionChinesePatientGet,
    PrescriptionWesternPatientModelCreate,
    PrescriptionWesternPatientModelList,
    PrescriptionChinesePatientModelCreate,
    PrescriptionChinesePatientModelList,
    queryReceiveRecords,
    GetLastBodySign,
    PatientGetByID,
    PrescriptionChinesePatientDelete
  }
)(PrescriptionScreen)
