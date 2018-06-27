import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ClinicDrugList,
  queryRouteAdministrationList,
  queryFrequencyList,
  queryDoseUnitList,
  PrescriptionWesternPatientModelCreate,
  PrescriptionWesternPatientModelUpdate,
  PrescriptionWesternPatientModelDetail
} from '../../../../../ducks'
import { Select, Confirm, CustomSelect } from '../../../../../components'
const places = [{ value: 0, label: '本诊所' }, { value: 1, label: '外购' }, { value: 2, label: '代购' }]

class AddPrescriptionWesternPatientModelscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_common: false,
      status: true,
      wPrescItemArray: []
    }
  }

  async componentWillMount() {}
  async componentDidMount() {
    const {showWay, prescription_patient_model_id, PrescriptionWesternPatientModelDetail} = this.props
    if (showWay === 2) {
      let data = await PrescriptionWesternPatientModelDetail({prescription_patient_model_id})
      if (data) {
        console.log('PrescriptionWesternPatientModelDetail=====', data)
        this.setState({
          is_common: data.is_common,
          wPrescItemArray: data.items,
          prescription_patient_model_id: data.prescription_patient_model_id,
          model_name: data.model_name,
          status: data.status
        })
      }
    }
  }
  queryDictionaries(keyword, fn) {
    if (keyword) {
      this.props[fn]({ keyword })
    }
  }

  getWNameOptions() {
    const { drugs } = this.props
    console.log('drugs =============', drugs)
    let array = []
    for (let key in drugs) {
      let { clinic_drug_id, drug_name, type } = drugs[key]
      if (type !== 0) continue
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
        label: name
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

  addWestMedicinePres() {
    const { wPrescItemArray } = this.state
    this.setState({ wPrescItemArray: [...wPrescItemArray, {}] })
  }

  setWItemValue(e, index, key, type = 1) {
    const { wPrescItemArray } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...wPrescItemArray]
    array[index][key] = value
    this.setState({ wPrescItemArray: array })
  }

  setWItemValues(data, index) {
    const { wPrescItemArray } = this.state
    let array = [...wPrescItemArray]
    array[index] = { ...array[index], ...data }
    this.setState({ wPrescItemArray: array })
  }

  ClinicDrugList(keyword) {
    const { ClinicDrugList, clinic_id } = this.props
    if (keyword) {
      ClinicDrugList({ clinic_id, status: true, keyword, type: 0 }, true)
    }
  }

  render() {
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        <div className={'commonBlank baseInfoBlank'}>
          <span />
          {this.renderBaseInfoBlank()}
          {this.renderItems()}
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button
              onClick={() => {
                if (showWay === 2) {
                  this.PrescriptionWesternPatientModelUpdate()
                } else {
                  this.PrescriptionWesternPatientModelCreate()
                }
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

  renderBaseInfoBlank() {
    const { status, is_common, model_name } = this.state
    return (
      <div>
        <ul>
          <li style={{ width: '48%' }}>
            <label>
              模板名称<b style={{ color: 'red' }}>*</b>
            </label>
            <input
              type='text'
              placeholder={'model_name'}
              value={model_name || ''}
              onChange={e => {
                let model_name = e.target.value
                this.setState({ model_name })
              }}
            />
            {this.state.model_nameFailed || model_name === '' || !model_name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
          </li>
          <li style={{ width: '24%' }}>
            <label>模板类型</label>
            <div>
              <label>
                <input
                  type='radio'
                  name={'is_common'}
                  checked={is_common}
                  onChange={e => {
                    this.setState({ is_common: true })
                  }}
                />
                通用
              </label>
              <label>
                <input
                  type='radio'
                  name={'is_common'}
                  checked={!is_common}
                  onChange={e => {
                    this.setState({ is_common: false })
                  }}
                />
                个人
              </label>
            </div>
          </li>
          <li style={{ width: '24%' }}>
            <label>状态</label>
            <div>
              <label>
                <input
                  type='radio'
                  name={'status'}
                  checked={status}
                  onChange={e => {
                    this.setState({ status: true })
                  }}
                />
                正常
              </label>
              <label>
                <input
                  type='radio'
                  name={'status'}
                  checked={!status}
                  onChange={e => {
                    this.setState({ status: false })
                  }}
                />
                停用
              </label>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  async PrescriptionWesternPatientModelCreate() {
    const { PrescriptionWesternPatientModelCreate, operation_id } = this.props
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
    let error = await PrescriptionWesternPatientModelCreate({ model_name, is_common, operation_id, items })
    if (error) {
      this.refs.myAlert.alert('保存失败', error)
    } else {
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  async PrescriptionWesternPatientModelUpdate() {
    const { PrescriptionWesternPatientModelUpdate, operation_id } = this.props
    const { wPrescItemArray, is_common, model_name, prescription_patient_model_id } = this.state
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
    let error = await PrescriptionWesternPatientModelUpdate({ prescription_patient_model_id, model_name, is_common, operation_id, items })
    if (error) {
      this.refs.myAlert.alert('保存失败', error)
    } else {
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }

  // 显示西药处方详情
  renderItems() {
    const { wPrescItemArray } = this.state
    return (
      <div style={{ width: '100%' }}>
        <div className={'tableDIV'}>
          <ul>
            <li>
              <div style={{ flex: 4 }}>药品名称</div>
              <div style={{ flex: 3 }}>规格</div>
              <div style={{ flex: 2 }}>(次)剂量</div>
              <div style={{ flex: 3 }}>(次)单位</div>
              <div style={{ flex: 3 }}>用法</div>
              <div style={{ flex: 3 }}>用药频次</div>
              <div style={{ flex: 1 }}>天数</div>
              <div style={{ flex: 2 }}>数量</div>
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
              return (
                <li key={index}>
                  <div style={{ flex: 4 }}>
                    <div>
                      {/* <Select
                        value={this.getSelectValue(item.clinic_drug_id, this.getWNameOptions())}
                        onChange={item => {
                          this.setWItemValues(item, index)
                        }}
                        placeholder='搜索'
                        height={38}
                        onInputChange={keyword => this.ClinicDrugList(keyword)}
                        options={this.getWNameOptions()}
                      /> */}
                      <CustomSelect
                        controlStyle={{ height: '38px' }}
                        value={item.clinic_drug_id || ''}
                        label={item.drug_name || ''}
                        mustOptionValue={!false}
                        valueKey='clinic_drug_id'
                        labelKey='drug_name'
                        placeholder='搜索'
                        onChange={item => {
                          this.setWItemValues(item, index)
                        }}
                        onInputChange={keyword => this.ClinicDrugList(keyword)}
                        options={this.getWNameOptions()}
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
                        renderItem={(item, index) => {
                          let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
                          let packing_unit_name = item.packing_unit_name || ''
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '50px', justifyContent: 'center', alignItems: 'center' }} key={index}>
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
                  <div style={{ flex: 2 }}>
                    <input value={item.once_dose || ''} type='number' onChange={e => this.setWItemValue(e, index, 'once_dose')} />
                  </div>
                  <div style={{ flex: 3 }}>
                    <Select
                      value={this.getSelectValue(item.once_dose_unit_name, this.getUnitoptions())}
                      onChange={({ value, label }) => {
                        this.setWItemValue(label, index, 'once_dose_unit_name', 2)
                      }}
                      placeholder='搜索'
                      height={38}
                      onInputChange={keyword => this.queryDictionaries(keyword, 'queryDoseUnitList')}
                      options={this.getUnitoptions()}
                    />、
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
                      <Select
                        value={this.getSelectValue(item.fetch_address, this.getPharmacyOptions())}
                        onChange={({ value }) => this.setWItemValue(value, index, 'fetch_address', 2)}
                        placeholder='搜索'
                        height={38}
                        options={this.getPharmacyOptions()}
                      />
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
        </div>
        {this.style()}
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
          width: 987px;
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
          width: 100%;
          display: flex;
          flex-direction: column;
          min-height: 70px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > label {
          height: 25px;
        }
        .commonBlank > div > ul > li > textarea {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 60px;
          padding: 0;
          resize: none;
        }
        .commonBlank > div > ul > li > div > input,
        .commonBlank > div > ul > li > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > ul > li > div {
        }
        .commonBlank > div > ul > li > div > label {
          margin-left: 15px;
          display: flex;
          align-items: center;
          float: left;
          height: 30px;
        }
        .commonBlank > div > ul > li > div > label:first-child {
          margin-left: 0;
        }
        .commonBlank > div > ul > li > div.douInput {
          display: flex;
          align-items: center;
        }
        .commonBlank > div > ul > li > div.douInput > input {
          width: 100px;
        }
        .commonBlank > div > ul > li > div.douInput > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi {
          width: 100%;
          margin: 20px 0;
          height: auto;
        }
        .commonBlank > div > ul > li.tableLi > div {
          // background: #909090;
          float: left;
          width: 1000px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul {
          width: 100%;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li {
          display: flex;
          float: left;
          width: 100%;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li:first-child,
        .commonBlank > div > ul > li.tableLi > div > ul > li:first-child {
          background: rgba(250, 250, 250, 1);
          box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
        }
        .commonBlank > div > ul > li > ul {
          width: 100%;
          // background: #eeeeee;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li {
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li > div {
          flex: 1;
          align-items: center;
          display: flex;
          justify-content: center;
          border-left: 1px solid #d8d8d8;
          height: 40px;
        }
        .commonBlank > div > ul > li > ul > li > div > div {
          width: 100%;
        }
        .commonBlank > div > ul > li > ul > li > div > input {
          background: transparent;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 36px;
          padding: 0;
          // width:100%;
          flex: 1;
        }

        .commonBlank > div > ul > li.tableLi > div > ul > li > div {
          flex: 2;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float: left;
          line-height: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div:last-child {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
          width: 100%;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div.douInput {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tableDIV {
          display: flex;
          width: 100%;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          flex-direction: column;
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
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    treatments: state.treatments.data,
    operation_id: state.user.data.id,
    drugs: state.drugs.json_data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data,
    doseUnits: state.doseUnits.data
  }
}

export default connect(mapStateToProps, {
  ClinicDrugList,
  queryRouteAdministrationList,
  queryFrequencyList,
  queryDoseUnitList,
  PrescriptionWesternPatientModelCreate,
  PrescriptionWesternPatientModelUpdate,
  PrescriptionWesternPatientModelDetail
})(
  AddPrescriptionWesternPatientModelscreen
)
