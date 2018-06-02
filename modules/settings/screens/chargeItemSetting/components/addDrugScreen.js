import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select, Confirm } from '../../../../../components'
import { ClinicDrugCreate, ClinicDrugList, queryDoseUnitList, queryDoseFormList, queryFrequencyList, queryRouteAdministrationList, queryDicDrugsList } from '../../../../../ducks'

// 病历
class AddDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugInfo: {
        fetch_address: 0,
        is_bulk_sales: false,
        status: true,
        drug_class_id: props.drug_class_id,
        is_discount: false
      }
    }
  }

  setDrugClassID(drug_class_id) {
    if (drug_class_id) {
      const { drugInfo } = this.state
      this.setState({ drugInfo: { ...drugInfo, drug_class_id } })
    }
  }

  style() {
    return (
      <style jsx='true'>{`
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
          width: 1098px;
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
          width: 19%;
          display: flex;
          flex-direction: column;
          height: 70px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > label {
          height: 25px;
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
      `}</style>
    )
  }
  render() {
    return (
      <div className={'contentCenter'}>
        {this.renderSearchBlank()}
        {this.renderBaseInfoBlank()}
        {this.renderFeeInfoBlank()}
        {this.renderUsageInfoBlank()}
        {this.renderAlertSettingBlank()}
        {this.renderOtherInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => this.submit()}>保存</button>
            <button onClick={() => this.saveInStock()}>保存并入库</button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.name || data.name === '') {
      this.setState({ nameFailed: true })
      this.refs.myAlert.alert('提示', '请填写 名称！', null, 'Danger')
      return false
    } else {
      this.setState({ nameFailed: false })
    }
    if (!data.dose_form_name || data.dose_form_name === '') {
      this.setState({ dose_form_nameFailed: true })
      this.refs.myAlert.alert('提示', '请选择 剂型！', null, 'Danger')
      return false
    } else {
      this.setState({ dose_form_nameFailed: false })
    }
    if (!data.drug_class_id || data.drug_class_id === '') {
      this.setState({ drug_class_idFailed: true })
      this.refs.myAlert.alert('提示', '请选择 药物分类！', null, 'Danger')
      return false
    } else {
      this.setState({ drug_class_idFailed: false })
    }

    // if (!data.barcode || data.barcode === '') {
    //   this.setState({ barcodeFailed: true })
    //   this.refs.myAlert.alert('提示', '请填写 药品条形码！', null, 'Danger')
    //   return false
    // } else {
    //   this.setState({ barcodeFailed: false })
    // }

    if (!data.packing_unit_name || data.packing_unit_name === '') {
      this.setState({ packing_unit_nameFailed: true })
      this.refs.myAlert.alert('提示', '请选择 包装单位！', null, 'Danger')
      return false
    } else {
      this.setState({ packing_unit_nameFailed: false })
    }
    if (!data.ret_price || data.ret_price === '') {
      this.setState({ ret_priceFailed: true })
      this.refs.myAlert.alert('提示', '请填写 零售价！', null, 'Danger')
      return false
    } else {
      this.setState({ ret_priceFailed: false })
    }
    if (data.is_bulk_sales && (!data.bulk_sales_price || data.bulk_sales_price === '')) {
      this.setState({ bulk_sales_priceFailed: true })
      this.refs.myAlert.alert('提示', '请填写 拆零价格！', null, 'Danger')
      return false
    } else {
      this.setState({ bulk_sales_priceFailed: false })
    }
    return true
  }
  // 保存
  async submit() {
    let { drugInfo } = this.state
    const { clinic_id, ClinicDrugCreate } = this.props
    console.log('drugInfo=======', drugInfo)
    if (drugInfo.drug_class_id) {
      if (this.validateData(drugInfo)) {
        let error = await ClinicDrugCreate({ ...drugInfo, clinic_id, type: 0 })
        if (error) {
          this.refs.myAlert.alert('添加药品失败', error, null, 'Danger')
        } else {
          this.refs.myAlert.alert('添加成功')
          this.props.back2List()
        }
      }
    }
  }
  // 保存并入库
  saveInStock() {}
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const { drugInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    drugInfo[key] = value
    this.setState({ drugInfo })
  }
  // 顶部搜索栏
  renderSearchBlank() {
    return (
      <div className={'commonBlank searchBlank'}>
        <span>西/成药品信息</span>
        <div>
          <input type='text' placeholder={'国药准字license_no'} />
          <input style={{ marginLeft: '10px' }} type='text' placeholder={'药品条形码'} />
          <button>查询</button>
        </div>
        {this.style()}
      </div>
    )
  }
  // 剂型筛选
  getDoseFormOptions() {
    const { doseForms } = this.props
    let array = []
    for (let key in doseForms) {
      const { name } = doseForms[key]
      // console.log(doseForms[key])
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }

  // 获取药品分类列表
  getDrugClassOptions() {
    const { drugClasses } = this.props
    let array = []
    for (let key in drugClasses) {
      let { id, name } = drugClasses[key]
      array.push({
        value: id,
        label: name
      })
    }
    return array
  }

  // 剂量单位筛选
  getMiniUnitOptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { name } = doseUnits[key]
      // console.log(doseForms[key])
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  // 默认用法筛选
  getRouteAdministrationOptions() {
    const { routeAdministrationss } = this.props
    let array = []
    for (let key in routeAdministrationss) {
      const { name } = routeAdministrationss[key]
      // console.log(doseForms[key])
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  // 默认频次筛选
  getFrequencyOptions() {
    const { frequencies } = this.props
    let array = []
    for (let key in frequencies) {
      const { name } = frequencies[key]
      // console.log(doseForms[key])
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  // 设置选中显示
  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  // 获取单位数据
  getDoseUnitList(keyword) {
    const { queryDoseUnitList } = this.props
    if (keyword) {
      queryDoseUnitList({ keyword })
    }
  }
  // 获取剂型数据
  getDoseFormList(keyword) {
    const { queryDoseFormList } = this.props
    if (keyword) {
      queryDoseFormList({ keyword })
    }
  }
  // 获取频次数据
  getFrequencyList(keyword) {
    const { queryFrequencyList } = this.props
    if (keyword) {
      queryFrequencyList({ keyword })
    }
  }
  // 获取用法数据
  getRouteAdministrationList(keyword) {
    const { queryRouteAdministrationList } = this.props
    if (keyword) {
      queryRouteAdministrationList({ keyword })
    }
  }

  searchView() {
    const drugs = this.props.drugs || []
    return (
      <div
        className={'researchView'}
        onMouseOver={e => {
          this.setState({ toSearch: false })
        }}
        onMouseLeave={e => {
          this.setState({ toSearch: true })
        }}
      >
        <span>请选择患者或继续新增</span>
        <ul>
          {drugs.map(
            (
              {
                name,
                specification,
                english_name,
                packing_unit_name,
                print_name,
                license_no,
                dose_form_name,
                py_code,
                barcode,
                dosage,
                dosage_unit_name,
                manu_factory_name,
                preparation_count,
                preparation_count_unit_name,
                frequency_name,
                route_administration_name,
                once_dose,
                once_dose_unit_name
              },
              index
            ) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    const { drugInfo } = this.state
                    let obj = {
                      name,
                      specification,
                      packing_unit_name,
                      py_code,
                      manu_factory_name: manu_factory_name
                    }
                    if (once_dose) obj.once_dose = once_dose
                    if (once_dose_unit_name) obj.once_dose_unit_name = once_dose_unit_name
                    if (route_administration_name) obj.route_administration_name = route_administration_name
                    if (frequency_name) obj.frequency_name = frequency_name
                    if (preparation_count_unit_name) obj.preparation_count_unit_name = preparation_count_unit_name
                    if (preparation_count) obj.preparation_count = preparation_count
                    if (dosage) obj.dosage = dosage
                    if (dosage_unit_name) obj.dosage_unit_name = dosage_unit_name
                    if (barcode) obj.barcode = barcode
                    if (dose_form_name) obj.dose_form_name = dose_form_name
                    if (english_name) obj.english_name = english_name
                    if (print_name) obj.print_name = print_name
                    if (license_no) obj.license_no = license_no
                    this.setState({
                      drugInfo: { ...drugInfo, ...obj },
                      searchView: 0
                    })
                  }}
                >
                  <div className={'leftInfo'}>
                    <div />
                    <div>
                      {name} {specification}
                    </div>
                  </div>
                </li>
              )
            }
          )}
        </ul>
      </div>
    )
  }

  // 药品基本信息
  renderBaseInfoBlank() {
    const { drugInfo } = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>药品基本信息</span>
        <div>
          <ul>
            <li style={{ position: 'relative' }}>
              <label>
                通用名<b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                placeholder={'name'}
                value={drugInfo.name || ''}
                onChange={e => {
                  this.setItemValue(e, 'name')
                  let keyword = e.target.value
                  this.props.queryDicDrugsList({ keyword, type: 0 })
                  this.setState({ searchView: 1 })
                }}
                onFocus={e => {
                  this.setState({ toSearch: true })
                }}
                onBlur={e => {
                  if (this.state.toSearch && this.state.searchView === 1) {
                    this.setState({ searchView: 0 })
                  }
                }}
              />
              {this.state.searchView === 1 ? this.searchView() : ''}
              {this.state.nameFailed || drugInfo.name === '' || !drugInfo.name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>规格</label>
              <input
                type='text'
                placeholder={'specification'}
                value={drugInfo.specification || ''}
                onChange={e => {
                  this.setItemValue(e, 'specification')
                }}
              />
            </li>
            <li>
              <label>生产厂家</label>
              <input
                type='text'
                placeholder={'manu_factory_name'}
                value={drugInfo.manu_factory_name || ''}
                onChange={e => {
                  this.setItemValue(e, 'manu_factory_name')
                }}
              />
            </li>
            <li>
              <label>
                剂型<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getDoseFormOptions()}
                  value={this.getSelectValue(drugInfo.dose_form_name || '', this.getDoseFormOptions())}
                  onInputChange={keyword => {
                    this.getDoseFormList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'dose_form_name', 2)
                  }}
                />
              </div>
              {this.state.dose_form_nameFailed || drugInfo.dose_form_name === '' || !drugInfo.dose_form_name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>商品名</label>
              <input
                type='text'
                placeholder={'print_name'}
                value={drugInfo.print_name || ''}
                onChange={e => {
                  this.setItemValue(e, 'print_name')
                }}
              />
            </li>
            <li>
              <label>国药准字</label>
              <input
                type='text'
                placeholder={'国药准字license_no'}
                value={drugInfo.license_no || ''}
                onChange={e => {
                  this.setItemValue(e, 'license_no')
                }}
              />
            </li>
            <li>
              <label>
                药品分类<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getDrugClassOptions()}
                  value={this.getSelectValue(drugInfo.drug_class_id, this.getDrugClassOptions())}
                  onInputChange={keyword => {}}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'drug_class_id', 2)
                  }}
                />
              </div>
              {this.state.drug_class_idFailed || drugInfo.drug_class_id === '' || !drugInfo.drug_class_id ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>拼音码</label>
              <input
                type='text'
                placeholder={'py_code'}
                value={drugInfo.py_code || ''}
                onChange={e => {
                  this.setItemValue(e, 'py_code')
                }}
              />
            </li>
            <li>
              <label>
                药品条形码<b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                placeholder={'barcode'}
                value={drugInfo.barcode || ''}
                onChange={e => {
                  this.setItemValue(e, 'barcode')
                }}
              />
              {/* {this.state.barcodeFailed || drugInfo.barcode === '' || !drugInfo.barcode ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''} */}
            </li>
            <li>
              <label>状态</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'drugStatus'}
                    checked={drugInfo.status}
                    onChange={e => {
                      this.setItemValue(true, 'status', 2)
                    }}
                  />
                  正常
                </label>
                <label>
                  <input
                    type='radio'
                    name={'drugStatus'}
                    checked={!drugInfo.status}
                    onChange={e => {
                      this.setItemValue(false, 'status', 2)
                    }}
                  />
                  停用
                </label>
              </div>
            </li>
            <li>
              <label>剂量</label>
              <input
                type='number'
                placeholder={'dosage'}
                value={drugInfo.dosage || ''}
                onChange={e => {
                  this.setItemValue(e, 'dosage')
                }}
              />
            </li>
            <li>
              <label>剂量单位</label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(drugInfo.dosage_unit_name || '', this.getMiniUnitOptions())}
                  onInputChange={keyword => {
                    this.getDoseUnitList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'dosage_unit_name', 2)
                  }}
                />
              </div>
            </li>
            <li>
              <label>制剂数量</label>
              <input
                type='number'
                placeholder={'preparation_count'}
                value={drugInfo.preparation_count || ''}
                onChange={e => {
                  this.setItemValue(e, 'preparation_count')
                }}
              />
            </li>
            <li>
              <label>制剂数量单位</label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(drugInfo.preparation_count_unit_name || '', this.getMiniUnitOptions())}
                  onInputChange={keyword => {
                    this.getDoseUnitList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'preparation_count_unit_name', 2)
                  }}
                />
              </div>
            </li>
            <li>
              <label>
                包装单位<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(drugInfo.packing_unit_name || '', this.getMiniUnitOptions())}
                  onInputChange={keyword => {
                    this.getDoseUnitList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'packing_unit_name', 2)
                  }}
                />
              </div>
              {this.state.packing_unit_nameFailed || drugInfo.packing_unit_name === '' || !drugInfo.packing_unit_name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
          </ul>
        </div>
      </div>
    )
  }
  // 费用信息
  renderFeeInfoBlank() {
    const { drugInfo } = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>费用信息</span>
        <div>
          <ul>
            <li>
              <label>
                零售价<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <input
                  type='text'
                  placeholder={'ret_price'}
                  value={drugInfo.ret_price || ''}
                  onChange={e => {
                    this.setItemValue(e, 'ret_price')
                  }}
                />元
              </div>
              {this.state.ret_priceFailed || drugInfo.ret_price === '' || !drugInfo.ret_price ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>成本价</label>
              <div>
                <input
                  type='text'
                  placeholder={'buy_price'}
                  value={drugInfo.buy_price || ''}
                  onChange={e => {
                    this.setItemValue(e, 'buy_price')
                  }}
                />元
              </div>
            </li>
            <li>
              <label>是否允许折扣</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'discount'}
                    checked={drugInfo.is_discount}
                    onChange={e => {
                      this.setItemValue(true, 'is_discount', 2)
                    }}
                  />
                  是
                </label>
                <label>
                  <input
                    type='radio'
                    name={'discount'}
                    checked={!drugInfo.is_discount}
                    onChange={e => {
                      this.setItemValue(false, 'is_discount', 2)
                    }}
                  />
                  否
                </label>
              </div>
            </li>
            <li>
              <label>
                是否允许拆零<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'removeZero'}
                    checked={drugInfo.is_bulk_sales}
                    onChange={e => {
                      this.setItemValue(true, 'is_bulk_sales', 2)
                    }}
                  />
                  是
                </label>
                <label>
                  <input
                    type='radio'
                    name={'removeZero'}
                    checked={!drugInfo.is_bulk_sales}
                    onChange={e => {
                      this.setItemValue(false, 'is_bulk_sales', 2)
                      this.setItemValue(0, 'bulk_sales_price', 2)
                    }}
                  />
                  否
                </label>
              </div>
              {/* {this.state.is_bulk_salesFailed || drugInfo.is_bulk_sales === '' || !drugInfo.is_bulk_sales ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''} */}
            </li>
            <li>
              <label>
                拆零售价<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <input
                  type='text'
                  placeholder={'bulk_sales_price'}
                  value={drugInfo.is_bulk_sales ? drugInfo.bulk_sales_price : ''}
                  readOnly={!drugInfo.is_bulk_sales}
                  onChange={e => {
                    this.setItemValue(e, 'bulk_sales_price')
                  }}
                />元
              </div>
              {drugInfo.is_bulk_sales && (this.state.bulk_sales_priceFailed || drugInfo.bulk_sales_price === '' || !drugInfo.bulk_sales_price) ? (
                <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div>
              ) : (
                ''
              )}
            </li>
            <li>
              <label>
                取药地点<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'fetch_address'}
                    checked={drugInfo.fetch_address === 0}
                    onChange={e => {
                      this.setItemValue(0, 'fetch_address', 2)
                    }}
                  />
                  本诊所
                </label>
                <label>
                  <input
                    type='radio'
                    name={'fetch_address'}
                    checked={drugInfo.fetch_address === 1}
                    onChange={e => {
                      this.setItemValue(1, 'fetch_address', 2)
                    }}
                  />
                  外购
                </label>
                <label>
                  <input
                    type='radio'
                    name={'fetch_address'}
                    checked={drugInfo.fetch_address === 2}
                    onChange={e => {
                      this.setItemValue(2, 'fetch_address', 2)
                    }}
                  />
                  代购
                </label>
              </div>
              {this.state.fetch_addressFailed ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }
  // 默认用法用量
  renderUsageInfoBlank() {
    const { drugInfo } = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>默认用法用量</span>
        <div>
          <ul>
            <li>
              <label>单次剂量</label>
              <input
                type='number'
                placeholder={'once_dose'}
                value={drugInfo.once_dose}
                onChange={e => {
                  this.setItemValue(e, 'once_dose')
                }}
              />
            </li>
            <li>
              <label>
                剂量单位
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(drugInfo.once_dose_unit_name, this.getMiniUnitOptions())}
                  onInputChange={keyword => {
                    this.getDoseUnitList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'once_dose_unit_name', 2)
                  }}
                />
              </div>
            </li>
            <li>
              <label>
                默认用法
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getRouteAdministrationOptions()}
                  value={this.getSelectValue(drugInfo.route_administration_name, this.getRouteAdministrationOptions())}
                  onInputChange={keyword => {
                    this.getRouteAdministrationList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'route_administration_name', 2)
                  }}
                />
              </div>
            </li>
            <li>
              <label>
                默认频次
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getFrequencyOptions()}
                  value={this.getSelectValue(drugInfo.frequency_name, this.getFrequencyOptions())}
                  onInputChange={keyword => {
                    this.getFrequencyList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'frequency_name', 2)
                  }}
                />
              </div>
            </li>
            <li>
              <label>说明</label>
              <input
                type='text'
                placeholder={'illustration'}
                value={drugInfo.illustration}
                onChange={e => {
                  this.setItemValue(e, 'illustration')
                }}
              />
            </li>
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }
  // 预警设置
  renderAlertSettingBlank() {
    const { drugInfo } = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>预警设置</span>
        <div>
          <ul>
            <li>
              <label>
                效期预警
              </label>
              <div>
                <input
                  type='number'
                  placeholder={'day_warning'}
                  value={drugInfo.day_warning}
                  onChange={e => {
                    this.setItemValue(e, 'day_warning')
                  }}
                />天
              </div>
            </li>
            <li>
              <label>库存预警数</label>
              <input
                type='number'
                placeholder={'stock_warning'}
                value={drugInfo.stock_warning}
                onChange={e => {
                  this.setItemValue(e, 'stock_warning')
                }}
              />
            </li>
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }
  // 其他信息
  renderOtherInfoBlank() {
    const { drugInfo } = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>其他信息</span>
        <div>
          <ul>
            <li>
              <label>英文名称</label>
              <input
                type='text'
                placeholder={'english_name'}
                value={drugInfo.english_name}
                onChange={e => {
                  this.setItemValue(e, 'english_name')
                }}
              />
            </li>
            <li>
              <label>上药编码</label>
              <input
                type='text'
                placeholder={'sy_code'}
                value={drugInfo.sy_code}
                onChange={e => {
                  this.setItemValue(e, 'sy_code')
                }}
              />
            </li>
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    doseForms: state.doseForms.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data,
    drugs: state.drugs.drug_data,
    drugClasses: state.drugClasses.data
  }
}

export default connect(mapStateToProps, {
  ClinicDrugCreate,
  ClinicDrugList,
  queryDoseUnitList,
  queryDoseFormList,
  queryFrequencyList,
  queryRouteAdministrationList,
  queryDicDrugsList
})(AddDrugScreen)
