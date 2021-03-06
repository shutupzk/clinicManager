import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createMaterialInstock,
  queryMaterialList,
  queryInstockWayList,
  querySupplierList,
  queryMaterialInstockRecordDetail,
  MaterialInstockCheck,
  MaterialInstockUpdate
} from '../../../../../ducks'
import { Select, Confirm, CustomSelect } from '../../../../../components'
import { formatMoney, limitMoney } from '../../../../../utils'
import moment from 'moment'
import Print from 'rc-print'

// 病历
class AddMaterialInstockScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instock_date: moment().format('YYYY-MM-DD'),
      instock_way_name: '',
      supplier_name: '',
      items: [],
      remark: '',
      readOnly: false,
      instock_operation_name: '',
      order_number: '',
      created_time: ''
    }
  }

  componentDidMount() {
    const {showWay} = this.props
    if (showWay !== 1) {
      this.queryDetailData()
      if (showWay !== 4) {
        this.setState({readOnly: true})
      }
    }
  }
  async queryDetailData() {
    const {material_instock_record_id, queryMaterialInstockRecordDetail} = this.props
    let data = await queryMaterialInstockRecordDetail({material_instock_record_id})
    console.log('data=====', data)
    for (let key of data.items) {
      key.buy_price = formatMoney(key.buy_price)
    }
    this.setState({
      instock_date: data.instock_date,
      instock_way_name: data.instock_way_name,
      supplier_name: data.supplier_name,
      remark: data.remark,
      items: data.items,
      created_time: data.created_time,
      instock_operation_name: data.instock_operation_name,
      order_number: data.order_number,
      verify_operation_name: data.verify_operation_name,
      updated_time: data.updated_time
    })
  }
  // 验证字段
  validateData(data) {
    if (!data.model_name || data.model_name === '') {
      this.setState({ model_nameFailed: true })
      return false
    }
    return true
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  addColumn() {
    const { items } = this.state
    this.setState({ items: [...items, {buy_price: 0, instock_amount: 0}] })
  }

  removeColumn(index) {
    const { items } = this.state
    let array = [...items]
    array.splice(index, 1)
    this.setState({ items: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { items } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...items]
    array[index][key] = value
    this.setState({ items: array })
  }

  async createMaterialInstock() {
    const { createMaterialInstock, clinic_id, instock_operation_id } = this.props
    const { instock_date, instock_way_name, supplier_name, items, remark } = this.state
    let array = []
    for (let key of items) {
      let value = {}
      value.clinic_material_id = key.clinic_material_id + ''
      value.buy_price = key.buy_price * 100 + ''
      value.instock_amount = key.instock_amount + ''
      value.serial = key.serial
      value.eff_date = key.eff_date
      array.push(value)
    }
    let requestData = {
      clinic_id,
      instock_operation_id,
      instock_date,
      instock_way_name,
      supplier_name,
      remark,
      items: JSON.stringify(array)
    }
    // console.log('requestData====', requestData, items)
    let error = await createMaterialInstock(requestData)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  // 修改
  async MaterialInstockUpdate() {
    const { MaterialInstockUpdate, clinic_id, instock_operation_id, material_instock_record_id } = this.props
    const { instock_date, instock_way_name, supplier_name, items, remark } = this.state
    let array = []
    for (let key of items) {
      let value = {}
      value.clinic_material_id = key.clinic_material_id + ''
      value.buy_price = key.buy_price * 100 + ''
      value.instock_amount = key.instock_amount + ''
      value.serial = key.serial
      value.eff_date = key.eff_date
      array.push(value)
    }
    let requestData = {
      material_instock_record_id,
      clinic_id,
      instock_operation_id,
      instock_date,
      instock_way_name,
      supplier_name,
      remark,
      items: JSON.stringify(array)
    }
    // console.log('requestData====', requestData, items)
    let error = await MaterialInstockUpdate(requestData)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  // 审核
  async MaterialInstockCheck() {
    const {material_instock_record_id, instock_operation_id, MaterialInstockCheck} = this.props
    let requestData = {
      material_instock_record_id,
      verify_operation_id: instock_operation_id
    }
    this.refs.myAlert.confirm('提示', '是否审核通过，请确认？', 'Warning', async () => {
      let error = await MaterialInstockCheck(requestData)
      if (error) {
        return this.refs.myAlert.alert('审核失败', error)
      } else {
        this.refs.myAlert.alert('审核成功')
        this.props.backToList()
      }
    })
  }
  // 获取入库方式筛选
  getInstockWayNameOptions() {
    const { instock_way, queryInstockWayList } = this.props
    // console.log('instock_way====', instock_way)
    let array = []
    for (let key in instock_way) {
      let {name} = instock_way[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    if (array.length === 0) {
      queryInstockWayList({keyword: ''})
    }
    return array
  }
  // 获取入库方式数据
  queryInstockWayList(keyword) {
    const {queryInstockWayList} = this.props
    if (keyword) {
      queryInstockWayList({keyword})
    }
  }
  // 获取供应商筛选
  getSupplierOptions() {
    const { supplier_data, querySupplierList } = this.props
    // console.log('supplier_data====', supplier_data)
    let array = []
    for (let key in supplier_data) {
      let {name} = supplier_data[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    if (array.length === 0) {
      querySupplierList({keyword: ''})
    }
    return array
  }
  // 获取供应商数据
  querySupplierList(keyword) {
    const {querySupplierList} = this.props
    if (keyword) {
      querySupplierList({keyword})
    }
  }
  // 入库基本信息
  renderBaseInfoBlank() {
    const {instock_date, instock_way_name, updated_time, verify_operation_name, supplier_name, remark, created_time, instock_operation_name, order_number, readOnly} = this.state
    const {showWay} = this.props
    // console.log('instock_date, instock_way_name, supplier_name, remark', instock_date, instock_way_name, supplier_name, remark)
    return (
      <div>
        <ul>
          <li>
            <label>
              入库日期
            </label>
            <input
              readOnly={readOnly}
              type='date'
              placeholder={'instock_date'}
              value={moment(instock_date).format('YYYY-MM-DD')}
              onChange={e => {
                let instock_date = e.target.value
                this.setState({ instock_date })
              }}
            />
          </li>
          <li>
            <label>入库方式</label>
            {showWay === 1 || showWay === 4 ? <div>
              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'instock_way_name'}
                  value={this.getSelectValue(instock_way_name, this.getInstockWayNameOptions())}
                  onChange={({value}) => {
                    this.setState({ instock_way_name: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.queryInstockWayList(keyword) }}
                  options={this.getInstockWayNameOptions()}
                />
              </div>
            </div> : <input
              readOnly={readOnly}
              type='text'
              value={instock_way_name}
            />}
          </li>
          <li>
            <label>供应商</label>
            {showWay === 1 || showWay === 4 ? <div>
              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'supplier_name'}
                  value={this.getSelectValue(supplier_name, this.getSupplierOptions())}
                  onChange={({value}) => {
                    this.setState({ supplier_name: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.querySupplierList(keyword) }}
                  options={this.getSupplierOptions()}
                />
              </div>
            </div> : <input
              readOnly={readOnly}
              type='text'
              value={supplier_name}
            />}
          </li>
          <li>
            <label>备注</label>
            <input
              readOnly={readOnly}
              type='text'
              placeholder={'remark'}
              value={remark}
              onChange={e => {
                let remark = e.target.value
                this.setState({ remark })
              }}
            />
          </li>
          {showWay !== 1 ? <li>
            <label>操作日期</label>
            <input
              readOnly
              type='text'
              placeholder={'created_time'}
              value={moment(created_time).format('YYYY-MM-DD')}
            />
          </li> : ''}
          {showWay !== 1 ? <li>
            <label>操作人员</label>
            <input
              readOnly
              type='text'
              placeholder={'instock_operation_name'}
              value={instock_operation_name}
            />
          </li> : ''}
          {showWay === 3 ? <li>
            <label>审核日期</label>
            <input
              readOnly
              type='text'
              placeholder={'updated_time'}
              value={moment(updated_time).format('YYYY-MM-DD')}
            />
          </li> : ''}
          {showWay === 3 ? <li>
            <label>审核人员</label>
            <input
              readOnly
              type='text'
              placeholder={'verify_operation_name'}
              value={verify_operation_name}
            />
          </li> : ''}
          {showWay !== 1 ? <li>
            <label>入库单号</label>
            <input
              readOnly
              type='text'
              placeholder={'order_number'}
              value={order_number}
            />
          </li> : ''}
        </ul>
        {this.style()}
      </div>
    )
  }
  // 药筛选项
  getMaterialOptions() {
    const { clinic_id, queryMaterialList, materials } = this.props
    // console.log('materials====', materials)
    let array = []
    for (let key in materials) {
      let {
        clinic_material_id,
        name,
        unit_name,
        manu_factory_name,
        ret_price,
        stock_amount,
        buy_price,
        specification
      } = materials[key]
      // if (type !== 0) continue
      array.push({
        value: clinic_material_id,
        label: name + '—' + specification,
        manu_factory_name,
        clinic_material_id,
        specification,
        name,
        unit_name,
        ret_price,
        stock_amount,
        instock_amount: '',
        buy_price: formatMoney(buy_price)
      })
    }
    if (array.length === 0) {
      queryMaterialList({ clinic_id, status: true, keyword: '' })
    }
    return array
  }
  // 搜索药
  queryMaterialList(keyword) {
    const {clinic_id, queryMaterialList} = this.props
    if (keyword) {
      queryMaterialList({ clinic_id, status: true, keyword })
    }
  }

  renderItems() {
    const { items, readOnly } = this.state
    const {showWay} = this.props
    console.log('items', items)
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV'>
          <ul>
            <li>
              <div>序号</div>
              <div>商品名称</div>
              <div>单位</div>
              <div>生产厂商</div>
              <div>数量</div>
              <div>零售价</div>
              <div>成本价</div>
              <div>成本合计</div>
              <div>批号</div>
              <div style={{flex: 3}}>有效期</div>
              {showWay === 1 || showWay === 4 ? <div>
                <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                  新增
                </div>
              </div> : '' }
            </li>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <div>{index + 1}</div>
                  <div>
                    {showWay === 1 || showWay === 4 ? <div>
                      <CustomSelect
                        controlStyle={{ height: '38px', width: '100%' }}
                        value={item.clinic_material_id || ''}
                        label={item.name || ''}
                        mustOptionValue={!false}
                        valueKey='clinic_material_id'
                        labelKey='name'
                        placeholder='搜索'
                        onChange={({
                          value,
                          label,
                          manu_factory_name,
                          unit_name,
                          ret_price,
                          instock_amount,
                          buy_price
                        }) => {
                          // let data = {}
                          this.setItemValue(value, index, 'clinic_material_id', 2)
                          this.setItemValue(manu_factory_name, index, 'manu_factory_name', 2)
                          this.setItemValue(unit_name, index, 'unit_name', 2)
                          this.setItemValue(ret_price, index, 'ret_price', 2)
                          this.setItemValue(instock_amount, index, 'instock_amount', 2)
                          this.setItemValue(buy_price, index, 'buy_price', 2)
                        }}
                        onInputChange={keyword => this.queryMaterialList(keyword)}
                        options={this.getMaterialOptions()}
                        renderTitle={(item, index) => {
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', justifyContent: 'center', alignItems: 'center', background: '#F2F2F2' }} key={index}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>材料名</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>规格</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>生产厂家</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>库存</div>
                            </div>
                          )
                        }}
                        renderItem={(item, index) => {
                          let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
                          let unit_name = item.unit_name || ''
                          let manu_factory_name = !item.manu_factory_name || item.manu_factory_name === 'null' ? '无' : item.manu_factory_name
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', borderBottom: '1px solid #d9d9d9', justifyContent: 'center', alignItems: 'center' }} key={index}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.name}</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.specification}</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{manu_factory_name}</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>{stock_amount + ' ' + unit_name}</div>
                            </div>
                          )
                        }}
                      />
                    </div> : item.material_name }
                  </div>
                  <div>{item.unit_name}</div>
                  <div title={item.manu_factory_name}>
                    <div className={'longTxt'}>
                      {item.manu_factory_name}
                    </div>
                  </div>
                  <div>
                    <input
                      readOnly={readOnly}
                      placeholder={'入库数量'}
                      type='number'
                      value={item.instock_amount}
                      onChange={e => {
                        this.setItemValue(e, index, 'instock_amount')
                      }}
                    />
                  </div>
                  <div>{formatMoney(item.ret_price)}</div>
                  <div>
                    <input
                      readOnly={readOnly}
                      placeholder={'成本价'}
                      type='text'
                      value={showWay === 1 || showWay === 4 ? item.buy_price : formatMoney(item.buy_price)}
                      onChange={e => {
                        let value = limitMoney(e.target.value)
                        this.setItemValue(value, index, 'buy_price', 2)
                      }}
                    />
                  </div>
                  <div>
                    <input
                      readOnly
                      placeholder={'成本合计'}
                      type='text'
                      value={formatMoney(item.instock_amount * item.buy_price * 100)}
                    />
                  </div>
                  <div>
                    <input
                      readOnly={readOnly}
                      placeholder={'批号'}
                      type='text'
                      value={item.serial}
                      onChange={e => {
                        this.setItemValue(e, index, 'serial')
                      }}
                    />
                  </div>
                  {showWay === 1 ? <div style={{flex: 3}}>
                    <input
                      readOnly={readOnly}
                      placeholder={'有效期'}
                      type='date'
                      // value={moment(item.eff_date).format('YYYY-MM-DD')}
                      onChange={e => {
                        this.setItemValue(e, index, 'eff_date')
                      }}
                    />
                  </div> : showWay === 4 ? <div style={{flex: 3}}>
                    <input
                      readOnly={readOnly}
                      placeholder={'有效期'}
                      type='date'
                      value={moment(item.eff_date).format('YYYY-MM-DD')}
                      onChange={e => {
                        this.setItemValue(e, index, 'eff_date')
                      }}
                    />
                  </div> : <div style={{flex: 3}}>{moment(item.eff_date).format('YYYY-MM-DD')}</div> }
                  {showWay === 1 || showWay === 4 ? <div>
                    <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                      删除
                    </div>
                  </div> : '' }
                </li>
              )
            })}
          </ul>
        </div>
        {this.style()}
      </div>
    )
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
            <button onClick={() => this.props.backToList()}>取消</button>
            <button
              onClick={() => {
                if (showWay === 1) {
                  this.createMaterialInstock()
                }
                if (showWay === 2) {
                  this.MaterialInstockCheck()
                }
                if (showWay === 4) {
                  this.MaterialInstockUpdate()
                }
                if (showWay === 3) {
                  this.refs.printer.onPrint()
                }
              }}
            >
              {showWay === 1 || showWay === 4 ? '保存' : showWay === 2 ? '审核' : showWay === 3 ? '打印' : ''}
            </button>
            <Print ref='printer' lazyRender isIframe>
              {this.mrPrinter()}
            </Print>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  mrPrinter() {
    let { user } = this.props
    const {
      instock_date,
      instock_way_name,
      supplier_name,
      remark,
      created_time,
      instock_operation_name,
      updated_time,
      verify_operation_name,
      order_number,
      items
    } = this.state
    const patientInfoRowStyle = {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50px'
    }
    const patientInfoRowDivStyle = {
      flex: 1,
      display: 'flex',
      margin: '10px 15px 10px 5px',
      minHeight: '30px',
      alignItems: 'center',
      borderBottom: '1px solid #d8d8d8',
      borderTop: '1px solid #ffffff'
    }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>耗材入库单</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>入库日期：</lable>
            <div style={patientInfoRowDivStyle}>{moment(instock_date).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>入库方式：</lable>
            <div style={patientInfoRowDivStyle}>{instock_way_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>供应商：</lable>
            <div style={patientInfoRowDivStyle}>{supplier_name}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>操作日期：</lable>
            <div style={patientInfoRowDivStyle}>{moment(created_time).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>操作人员：</lable>
            <div style={patientInfoRowDivStyle}>{instock_operation_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>审核日期：</lable>
            <div style={patientInfoRowDivStyle}>{moment(updated_time).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>审核人员：</lable>
            <div style={patientInfoRowDivStyle}>{verify_operation_name}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>入库单号：</lable>
            <div style={patientInfoRowDivStyle}>{order_number}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>备注：</lable>
            <div style={patientInfoRowDivStyle}>{remark}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '14px' }}>
          <div className='tableDIV' style={{ width: '100%', margin: '0 0 0 0' }}>
            <ul>
              <li style={{fontWeight: 'bold'}}>
                <div>序号</div>
                <div>商品名称</div>
                <div>单位</div>
                <div>生产厂商</div>
                <div>数量</div>
                <div>零售价</div>
                <div>成本价</div>
                <div>成本合计</div>
                <div>批号</div>
                <div style={{ borderRight: '1px solid #d8d8d8' }}>有效期</div>
              </li>
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <div>{index + 1}</div>
                    <div>{item.material_name}</div>
                    <div>{item.unit_name}</div>
                    <div>{item.manu_factory_name}</div>
                    <div>{item.instock_amount}</div>
                    <div>{formatMoney(item.ret_price)}</div>
                    <div>{formatMoney(item.buy_price)}</div>
                    <div>{formatMoney(item.instock_amount * item.buy_price * 100)}</div>
                    <div>{item.serial}</div>
                    <div style={{ borderRight: '1px solid #d8d8d8' }}>{moment(item.eff_date).format('YYYY-MM-DD')}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {this.printTableStyle()}
      </div>
    )
  }
  printTableStyle() {
    return (
      <style jsx='1'>{`
      .tableDIV {
        display: flex;
        width: 100%;
        background: rgba(255, 255, 255, 1);
        border-radius: 4px;
        margin-top: 10px;
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
        line-height: normal;
        text-align: center;
      }
      .tableDIV ul li:nth-child(1) {
        background: rgba(247, 247, 247, 1);
        border-top: 1px solid #e9e9e9;
      }
      .tableDIV ul li > div {
        flex: 2;
        border-left: 1px #e9e9e9 dashed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .tableDIV ul li > div:nth-child(1) {
        // flex: 3;
      }
      .tableDIV ul li > div >div.longTxt{
        line-height: 20px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100px;
        text-overflow: ellipsis;
      }
      `}</style>
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
          width: 24%;
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
          // background: rgba(245, 248, 249, 1);
          background: transparent;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 36px;
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
          // flex: 3;
        }
        .tableDIV ul li > div >div.longTxt{
          line-height: 20px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          width: 100px;
          text-overflow: ellipsis;
        }
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    instock_operation_id: state.user.data.id,
    materials: state.materials.data,
    instock_way: state.drugStocks.instock_way,
    supplier_data: state.drugStocks.supplier_data,
    detail_data: state.materailStocks.detail_data,
    user: state.user.data
  }
}

export default connect(mapStateToProps, {
  createMaterialInstock,
  queryMaterialList,
  queryInstockWayList,
  querySupplierList,
  queryMaterialInstockRecordDetail,
  MaterialInstockCheck,
  MaterialInstockUpdate
})(AddMaterialInstockScreen)
