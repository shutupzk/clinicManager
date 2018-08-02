import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createMaterialOutstock,
  queryMaterialList,
  queryOutstockWayList,
  queryMaterialOutstockRecordDetail,
  MaterialOutstockCheck,
  MaterialOutstockUpdate,
  queryDepartmentList,
  queryDoctorList,
  queryMaterialStockList
} from '../../../../../ducks'
import { Select, Confirm, CustomSelect } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
import moment from 'moment'
import Print from 'rc-print'

// 病历
class AddMaterialOutstockScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      outstock_date: moment().format('YYYY-MM-DD'),
      outstock_way_name: '',
      department_id: '',
      department_name: '',
      personnel_id: '',
      personnel_name: '',
      items: [],
      remark: '',
      readOnly: false,
      outstock_operation_name: '',
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
    const {material_outstock_record_id, queryMaterialOutstockRecordDetail} = this.props
    let data = await queryMaterialOutstockRecordDetail({material_outstock_record_id})
    console.log('data=====', data)
    this.setState({
      outstock_date: moment(data.outstock_date).format('YYYY/MM/DD'),
      department_name: data.department_name,
      department_id: data.department_id,
      outstock_way_name: data.outstock_way_name,
      personnel_name: data.personnel_name,
      personnel_id: data.personnel_id,
      remark: data.remark,
      items: data.items,
      created_time: data.created_time,
      outstock_operation_name: data.outstock_operation_name,
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

  async createMaterialOutstock() {
    const { createMaterialOutstock, clinic_id, outstock_operation_id } = this.props
    const { outstock_date, outstock_way_name, items, remark, department_id, personnel_id } = this.state
    let array = []
    for (let key of items) {
      let value = {}
      value.outstock_amount = key.outstock_amount + ''
      value.material_stock_id = key.material_stock_id + ''
      array.push(value)
    }
    let requestData = {
      clinic_id,
      outstock_operation_id,
      outstock_date,
      outstock_way_name,
      remark,
      department_id,
      personnel_id,
      items: JSON.stringify(array)
    }
    // console.log('requestData====', requestData, items)
    let error = await createMaterialOutstock(requestData)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  // 修改
  async MaterialOutstockUpdate() {
    const { MaterialOutstockUpdate, clinic_id, outstock_operation_id, material_outstock_record_id } = this.props
    const { outstock_date, outstock_way_name, items, remark, department_id, personnel_id } = this.state
    let array = []
    for (let key of items) {
      let value = {}
      value.outstock_amount = key.outstock_amount + ''
      value.material_stock_id = key.material_stock_id + ''
      array.push(value)
    }
    let requestData = {
      material_outstock_record_id,
      clinic_id,
      outstock_operation_id,
      outstock_date,
      outstock_way_name,
      remark,
      department_id,
      personnel_id,
      items: JSON.stringify(array)
    }
    // console.log('requestData====', requestData, items)
    let error = await MaterialOutstockUpdate(requestData)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  // 审核
  async MaterialOutstockCheck() {
    const {material_outstock_record_id, outstock_operation_id, MaterialOutstockCheck} = this.props
    let requestData = {
      material_outstock_record_id,
      verify_operation_id: outstock_operation_id
    }
    this.refs.myAlert.confirm('提示', '是否审核通过，请确认？', 'Warning', async () => {
      let error = await MaterialOutstockCheck(requestData)
      if (error) {
        return this.refs.myAlert.alert('审核失败', error)
      } else {
        this.refs.myAlert.alert('审核成功')
        this.props.backToList()
      }
    })
  }
  // 获取出库方式筛选
  getOutstockWayNameOptions() {
    const { outstock_way, queryOutstockWayList } = this.props
    // console.log('outstock_way====', outstock_way)
    let array = []
    for (let key in outstock_way) {
      let {name} = outstock_way[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    if (array.length === 0) {
      queryOutstockWayList({keyword: ''})
    }
    return array
  }
  // 获取出库方式数据
  queryOutstockWayList(keyword) {
    const {queryOutstockWayList} = this.props
    if (keyword) {
      queryOutstockWayList({keyword})
    }
  }
  // 获取科室筛选
  getDepartmentOptions() {
    const { queryDepartmentList, clinic_id, departments } = this.props
    // console.log('supplier_data====', supplier_data)
    let array = []
    for (let key in departments) {
      let {name, id} = departments[key]
      // if (type !== 0) continue
      array.push({
        value: id,
        label: name
      })
    }
    if (array.length === 0) {
      queryDepartmentList({keyword: '', clinic_id}, true)
    }
    return array
  }
  // 获取科室数据
  queryDepartmentList(keyword) {
    const {queryDepartmentList, clinic_id} = this.props
    if (keyword) {
      queryDepartmentList({keyword, clinic_id}, true)
    }
  }
  // 获取人员筛选
  getPersonsOptions() {
    const { persons, queryDoctorList, clinic_id } = this.props
    // console.log('supplier_data====', supplier_data)
    let array = []
    for (let key in persons) {
      let {name, id} = persons[key]
      // if (type !== 0) continue
      array.push({
        value: id,
        label: name
      })
    }
    if (array.length === 0) {
      queryDoctorList({keyword: '', clinic_id}, true)
    }
    return array
  }
  // 获取人员数据
  queryDoctorList(keyword) {
    const {queryDoctorList, clinic_id} = this.props
    if (keyword) {
      queryDoctorList({keyword, clinic_id}, true)
    }
  }
  // 出库基本信息
  renderBaseInfoBlank() {
    const {outstock_date, outstock_way_name, updated_time, verify_operation_name, department_id, personnel_id, remark, readOnly, department_name, personnel_name, created_time, outstock_operation_name, order_number} = this.state
    const {showWay} = this.props
    // console.log('outstock_date, outstock_way_name, supplier_name, remark', outstock_date, outstock_way_name, supplier_name, remark)
    return (
      <div>
        <ul>
          <li>
            <label>
              出库日期
            </label>
            <input
              readOnly={readOnly}
              type='date'
              placeholder={'outstock_date'}
              value={moment(outstock_date).format('YYYY-MM-DD')}
              onChange={e => {
                let outstock_date = e.target.value
                this.setState({ outstock_date })
              }}
            />
          </li>
          <li>
            <label>出库方式</label>
            {showWay === 1 || showWay === 4 ? <div>
              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'outstock_way_name'}
                  value={this.getSelectValue(outstock_way_name, this.getOutstockWayNameOptions())}
                  onChange={({value}) => {
                    this.setState({ outstock_way_name: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.queryOutstockWayList(keyword) }}
                  options={this.getOutstockWayNameOptions()}
                />
              </div>
            </div> : <input
              readOnly={readOnly}
              type='text'
              value={outstock_way_name}
            />}
          </li>
          <li>
            <label>领用科室</label>
            {showWay === 1 || showWay === 4 ? <div>
              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'department_id'}
                  value={this.getSelectValue(department_id, this.getDepartmentOptions())}
                  onChange={({value}) => {
                    this.setState({ department_id: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.queryDepartmentList(keyword) }}
                  options={this.getDepartmentOptions()}
                />
              </div>
            </div> : <input
              readOnly={readOnly}
              type='text'
              value={department_name}
            />}
          </li>
          <li>
            <label>领用人员</label>
            {showWay === 1 || showWay === 4 ? <div>
              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'personnel_id'}
                  value={this.getSelectValue(personnel_id, this.getPersonsOptions())}
                  onChange={({value}) => {
                    this.setState({ personnel_id: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.queryDoctorList(keyword) }}
                  options={this.getPersonsOptions()}
                />
              </div>
            </div> : <input
              readOnly={readOnly}
              type='text'
              value={personnel_name}
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
              placeholder={'outstock_operation_name'}
              value={outstock_operation_name}
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
            <label>出库单号</label>
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
  getMaterialStockOptions() {
    const { material_stock, clinic_id, queryMaterialStockList } = this.props
    // console.log('material_stock====', material_stock)
    let array = []
    for (let key in material_stock) {
      let {
        buy_price,
        material_stock_id,
        name,
        eff_date,
        manu_factory_name,
        unit_name,
        ret_price,
        serial,
        specification,
        stock_amount,
        supplier_name
      } = material_stock[key]
      // if (type !== 0) continue
      array.push({
        value: material_stock_id,
        label: name + '—' + specification,
        manu_factory_name,
        material_stock_id,
        name,
        unit_name,
        ret_price,
        stock_amount,
        buy_price: formatMoney(buy_price),
        eff_date: moment(eff_date).format('YYYY-MM-DD'),
        serial,
        specification,
        supplier_name
      })
    }
    if (array.length === 0) {
      queryMaterialStockList({ clinic_id, keyword: '' })
    }
    return array
  }
  // 搜索药
  queryMaterialStockList(keyword) {
    const {clinic_id, queryMaterialStockList} = this.props
    if (keyword) {
      queryMaterialStockList({ clinic_id, keyword })
    }
    // queryMaterialStockList({ clinic_id, keyword })
  }

  renderItems() {
    const { items, readOnly } = this.state
    const {showWay} = this.props
    // console.log(items)
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV'>
          <ul>
            <li>
              <div>序号</div>
              <div>商品名称</div>
              <div>单位</div>
              <div>生产厂商</div>
              <div>供应商</div>
              <div>零售价</div>
              <div>成本价</div>
              <div>批号</div>
              <div>库存数量</div>
              <div>出库数量</div>
              <div>有效期</div>
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
                        value={item.material_stock_id || ''}
                        label={item.name || ''}
                        mustOptionValue={!false}
                        valueKey='material_stock_id'
                        labelKey='name'
                        placeholder='搜索'
                        onChange={({
                          value,
                          label,
                          manu_factory_name,
                          unit_name,
                          ret_price,
                          stock_amount,
                          buy_price,
                          eff_date,
                          serial,
                          specification,
                          supplier_name
                        }) => {
                          // let data = {}
                          this.setItemValue(value, index, 'material_stock_id', 2)
                          this.setItemValue(manu_factory_name, index, 'manu_factory_name', 2)
                          this.setItemValue(unit_name, index, 'unit_name', 2)
                          this.setItemValue(ret_price, index, 'ret_price', 2)
                          this.setItemValue(stock_amount, index, 'stock_amount', 2)
                          this.setItemValue(buy_price, index, 'buy_price', 2)
                          this.setItemValue(eff_date, index, 'eff_date', 2)
                          this.setItemValue(serial, index, 'serial', 2)
                          this.setItemValue(specification, index, 'specification', 2)
                          this.setItemValue(supplier_name, index, 'supplier_name', 2)
                        }}
                        onInputChange={keyword => this.queryMaterialStockList(keyword)}
                        options={this.getMaterialStockOptions()}
                        renderTitle={(item, index) => {
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', justifyContent: 'center', alignItems: 'center', background: '#F2F2F2' }} key={index}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>材料名</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>规格</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>生产厂家</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>批号</div>
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
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.serial}</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>{stock_amount + ' ' + unit_name}</div>
                            </div>
                          )
                        }}
                      />
                    </div> : item.material_name }
                  </div>
                  <div>{item.unit_name}</div>
                  <div title={item.manu_factory_name}>
                    <div className={'longTxt'}>{item.manu_factory_name}</div>
                  </div>
                  <div title={item.supplier_name}>
                    {item.supplier_name}
                  </div>
                  <div>{formatMoney(item.ret_price)}</div>
                  <div>{formatMoney(item.buy_price)}</div>
                  <div title={item.serial}>
                    {item.serial}
                  </div>
                  <div title={item.stock_amount}>
                    {item.stock_amount}
                  </div>
                  <div>
                    <input
                      readOnly={readOnly}
                      type='number'
                      placeholder={'出库数量'}
                      value={item.outstock_amount}
                      min={0}
                      max={item.stock_amount}
                      onChange={e => {
                        if (e.target.value > item.stock_amount) {
                          this.refs.myAlert.alert('提示', '出库数量不能大于库存量！')
                          this.setItemValue(item.stock_amount, index, 'outstock_amount', 2)
                        } else {
                          this.setItemValue(e, index, 'outstock_amount')
                        }
                      }}
                    />
                  </div>
                  <div title={moment(item.eff_date).format('YYYY-MM-DD')}>
                    {moment(item.eff_date).format('YYYY-MM-DD')}
                  </div>
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
                  this.createMaterialOutstock()
                }
                if (showWay === 2) {
                  this.MaterialOutstockCheck()
                }
                if (showWay === 4) {
                  this.MaterialOutstockUpdate()
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
      outstock_date,
      outstock_way_name,
      department_name,
      personnel_name,
      remark,
      created_time,
      outstock_operation_name,
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
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>药房入库单</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>出库日期：</lable>
            <div style={patientInfoRowDivStyle}>{moment(outstock_date).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>出库方式：</lable>
            <div style={patientInfoRowDivStyle}>{outstock_way_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>领用科室：</lable>
            <div style={patientInfoRowDivStyle}>{department_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>领用人员：</lable>
            <div style={patientInfoRowDivStyle}>{personnel_name}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>操作日期：</lable>
            <div style={patientInfoRowDivStyle}>{moment(created_time).format('YYYY-MM-DD')}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>操作人员：</lable>
            <div style={patientInfoRowDivStyle}>{outstock_operation_name}</div>
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
            <lable>出库单号：</lable>
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
                <div style={{flex: 3}}>商品名称</div>
                <div>单位</div>
                <div style={{flex: 3}}>生产厂商</div>
                <div style={{flex: 3}}>供应商</div>
                <div>零售价</div>
                <div>成本价</div>
                <div style={{flex: 3}}>批号</div>
                <div>库存数量</div>
                <div>出库数量</div>
                <div style={{ borderRight: '1px solid #d8d8d8', flex: 3 }}>有效期</div>
              </li>
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <div>{index + 1}</div>
                    <div style={{flex: 3}}>{item.material_name}</div>
                    <div>{item.unit_name}</div>
                    <div style={{flex: 3}}>{item.manu_factory_name}</div>
                    <div style={{flex: 3}}>{item.supplier_name}</div>
                    <div>{formatMoney(item.ret_price)}</div>
                    <div>{formatMoney(item.buy_price)}</div>
                    <div style={{flex: 3}}>{item.serial}</div>
                    <div>{item.stock_amount}</div>
                    <div>{item.outstock_amount}</div>
                    <div style={{ borderRight: '1px solid #d8d8d8', flex: 3 }}>{moment(item.eff_date).format('YYYY-MM-DD')}</div>
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
          width: 19%;
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
  console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    outstock_operation_id: state.user.data.id,
    materials: state.materials.data,
    outstock_way: state.drugOutStocks.outstock_way,
    detail_data: state.materialOutStocks.detail_data,
    departments: state.departments.json_data,
    persons: state.doctors.data,
    material_stock: state.materialOutStocks.stock_data,
    user: state.user.data
  }
}

export default connect(mapStateToProps, {
  createMaterialOutstock,
  queryMaterialList,
  queryOutstockWayList,
  queryMaterialOutstockRecordDetail,
  MaterialOutstockCheck,
  MaterialOutstockUpdate,
  queryDepartmentList,
  queryDoctorList,
  queryMaterialStockList
})(AddMaterialOutstockScreen)
