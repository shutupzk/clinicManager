import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select, Confirm, CustomSelect } from '../../../../../components'
import {
  ClinicDrugCreate,
  ClinicDrugList,
  queryDoseUnitList,
  queryDoseFormList,
  queryFrequencyList,
  queryRouteAdministrationList,
  queryDicDrugsList,
  ClinicDrugDetail,
  ClinicDrugUpdate,
  querySupplierList,
  queryInstockWayList,
  createDrugInstock
} from '../../../../../ducks'
import moment from 'moment'
import {formatMoney, limitMoney} from '../../../../../utils'

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
      },
      druginstockInfo: {
        // drugName: '',
        items: [{}],
        instock_operation_id: '',
        clinic_id: '',
        instock_way_name: '',
        supplier_name: '',
        remark: '',
        instock_date: ''
      },
      drugReturnInfo: {},
      isInstock: false,
      showInstock: false
    }
  }
  async componentDidMount() {
    const {showWay, clinic_drug_id, ClinicDrugDetail} = this.props
    if (showWay === 2) {
      let data = await ClinicDrugDetail({clinic_drug_id})
      if (data) {
        console.log('drugInfo=====', data)
        data.ret_price = formatMoney(data.ret_price)
        if (data.buy_price !== null) {
          data.buy_price = formatMoney(data.buy_price)
        }
        if (data.bulk_sales_price !== null) {
          data.bulk_sales_price = formatMoney(data.bulk_sales_price)
        }
        this.setState({drugInfo: data})
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
          height: 80px;
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
    const {showInstock} = this.state
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        {this.renderSearchBlank()}
        {this.renderBaseInfoBlank()}
        {this.renderFeeInfoBlank()}
        {this.renderUsageInfoBlank()}
        {this.renderAlertSettingBlank()}
        {this.renderOtherInfoBlank()}
        {showInstock ? this.renderSaveAndInstock() : ''}
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.props.back2List()}>取消</button>
            <button onClick={() => {
              if (showWay === 2) {
                this.ClinicDrugUpdate(false)
              } else {
                this.submit(false)
              }
            }}>保存</button>
            <button onClick={() => {
              if (showWay === 2) {
                this.ClinicDrugUpdate(true)
              } else {
                this.submit(true)
              }
            }}>保存并入库</button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  // 保存并入库
  renderSaveAndInstock() {
    // let array = [{}]
    const {drugReturnInfo, druginstockInfo} = this.state
    console.log('drugReturnInfo====', drugReturnInfo, druginstockInfo)
    return (
      <div className={'mask'}>
        <div className={'maskBox'}>
          <div className={'maskBox_top'}>
            <span>药品入库</span>
            <span />
          </div>
          <div className={'maskBox_center'}>
            <div className={'center_top'}>
              <ul>
                <li>
                  <label>药品名称</label>
                  <div>
                    <input readOnly type='text' value={drugReturnInfo.drug_name} />
                  </div>
                </li>
                <li>
                  <label>规格</label>
                  <div>
                    <input readOnly type='text' value={drugReturnInfo.specification} />
                  </div>
                </li>
                <li>
                  <label>生产厂商</label>
                  <div>
                    <input readOnly type='text' value={drugReturnInfo.manu_factory_name} />
                  </div>
                </li>
                <li>
                  <label>入库日期</label>
                  <div>
                    <input
                      type='date'
                      value={moment(druginstockInfo.instock_date || '').format('YYYY-MM-DD')}
                      onChange={e => {
                        this.setInstockData(e, 'instock_date')
                      }}
                    />
                  </div>
                </li>
                <li>
                  <label>入库方式</label>
                  <div>
                    <Select
                      height={34}
                      placeholder={'请选择'}
                      value={this.getSelectValue(druginstockInfo.instock_way_name, this.getInstockWayNameOptions())}
                      onChange={({value}) => {
                        // this.setState({ instock_way_name: value })
                        this.setInstockData(value, 'instock_way_name', 2)
                      }}
                      onInputChange={keyword => { this.queryInstockWayList(keyword) }}
                      options={this.getInstockWayNameOptions()}
                    />
                  </div>
                </li>
                <li>
                  <label>供应商</label>
                  <div>
                    <Select
                      height={34}
                      placeholder={'请选择'}
                      value={this.getSelectValue(druginstockInfo.supplier_name, this.getSupplierOptions())}
                      onChange={({value}) => {
                        this.setInstockData(value, 'supplier_name', 2)
                      }}
                      onInputChange={keyword => { this.querySupplierList(keyword) }}
                      options={this.getSupplierOptions()}
                    />
                  </div>
                </li>
                <li>
                  <label>备注</label>
                  <div>
                    <input
                      type='text'
                      value={druginstockInfo.remark}
                      onChange={e => {
                        this.setInstockData(e, 'remark')
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className={'centerCotent'}>
              <table>
                <thead>
                  <tr>
                    <td>序号</td>
                    <td>数量</td>
                    <td>单位</td>
                    <td>零售价</td>
                    <td>成本价</td>
                    <td>成本合计</td>
                    <td>批号</td>
                    <td style={{flex: 2}}>有效日期</td>
                    {/* <td>增加</td> */}
                  </tr>
                </thead>
                <tbody>
                  {druginstockInfo.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            type='number'
                            value={item.instock_amount}
                            onChange={e => {
                              this.setInstockItemValue(e, index, 'instock_amount')
                            }}
                          />
                        </td>
                        <td>{drugReturnInfo.packing_unit_name}</td>
                        <td>{formatMoney(drugReturnInfo.ret_price)}</td>
                        <td>
                          <input
                            type='text'
                            value={item.buy_price}
                            onChange={e => {
                              let value = limitMoney(e.target.value)
                              this.setInstockItemValue(value, index, 'buy_price', 2)
                            }}
                          />
                        </td>
                        <td>
                          <input
                            readOnly
                            type='text'
                            value={item.buy_price * item.instock_amount || ''}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            value={item.serial}
                            onChange={e => {
                              this.setInstockItemValue(e, index, 'serial')
                            }}
                          />
                        </td>
                        <td style={{flex: 2}}>
                          <input
                            type='date'
                            value={moment(item.eff_date || '').format('YYYY-MM-DD')}
                            onChange={e => {
                              this.setInstockItemValue(e, index, 'eff_date')
                            }}
                          />
                        </td>
                        {/* <td>删除</td> */}
                      </tr>
                    )
                  })}
                  {/* <tr>
                    <td>合计</td>
                    <td>11</td>
                    <td>单位</td>
                    <td>100</td>
                    <td>1000</td>
                    <td>10000</td>
                    <td>批号</td>
                    <td>有效日期</td>
                    <td>--</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className={'maskBox_bottom'}>
            <div>
              <button onClick={() => this.setState({showInstock: false})}>取消</button>
              <button onClick={() => {
                this.saveInStock()
              }}>保存</button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .maskBox{
            width: 950px;
            height: 683px;
            background: rgba(244,247,248,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2);
            position: absolute;
            display:flex;
            flex-direction:column;
            align-items: center;
          }
          .maskBox_top {
            border-bottom: 1px solid #d8d8d8;
            width: 100%;
            height: 93px;
          }
          .maskBox_top>span:nth-child(1) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102,102,102,1);
            line-height: 17px;
            height: 17px;
            text-indent: 0;
            margin: 40px 0 0 60px;
            float: left;
          }
          // .maskBox_top span:last-child {
          //   width: 40px;
          //   height: 40px;
          //   background: rgba(255,95,87,1);
          //   float: right;
          //   color: #ffffff;
          //   font-size: 20px;
          //   text-align: center;
          //   text-indent: 10px;
          //   line-height: 35px;
          //   border-bottom-left-radius: 100%;
          //   cursor: pointer;
          // }
          .maskBox_center {
            width: 90%;
            display:flex;
            flex-direction: column;
            align-items: center;
            // background:#dddddd;
          }
          .center_top {
            width:100%;
            margin-top: 20px;
          }
          .center_top ul{
            width:100%;
          }
          .center_top ul li{
            float: left;
            width: 24%;
            margin-right: 1%;
            margin-top: 10px;
          }
          .center_top ul li label{
            width: 100%;
          }
          .center_top ul li>div{
            width: 100%;
          }
          .center_top ul li>div>input{
            width: 100%;
            height: 30px;
            background: rgb(245, 248, 249);
            border-radius: 4px;
            border: 1px solid rgb(217, 217, 217);
            margin-top: 0px;
          } 
          .center_top ul li>div>input[type='date']{
            height: 32px;
          }
          .centerCotent {
            width: 100%;
            margin: 20px 0;
            height: 340px;
            // background:#a0a0a0;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .centerCotent table{
            width: 99%;
            border-collapse: collapse;
            border: 1px solid #d8d8d8;
            display: flex;
            flex-direction: column;
          }
          .centerCotent table thead tr{
            display: flex;
            height: 40px;
            border-bottom: 1px solid #d8d8d8;
          }
          .centerCotent table thead td{
            flex:1;
            border-right: 1px solid #d8d8d8;
            height: 40px;
            line-height:40px;
            text-align: center;
            font-weight:bold;
          }
          .centerCotent table tbody{
            
          }
          .centerCotent table tbody tr{
            display: flex;
            border-bottom: 1px solid #d8d8d8;
            height: 30px;
          }
          .centerCotent table tbody tr td{
            flex:1;
            border-right: 1px solid #d8d8d8;
            text-align: center;
            height: 30px;
            line-height:30px;
          }
          .centerCotent table tbody tr td input{
            width: 100%;
            border:none;
            background:transparent;
            outline-style: none;
          }
        `}</style>
      </div>
    )
  }
  setInstockItemValue(e, index, key, type = 1) {
    const { druginstockInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = druginstockInfo.items
    array[index][key] = value
    druginstockInfo.items = array
    this.setState({ druginstockInfo })
  }
  // 设置入库数据
  setInstockData(e, key, type = 1) {
    const { druginstockInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    druginstockInfo[key] = value
    this.setState({ druginstockInfo })
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
  // 获取入库方式数据
  queryInstockWayList(keyword) {
    const {queryInstockWayList} = this.props
    if (keyword) {
      queryInstockWayList({keyword})
    }
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
  // 修改
  async ClinicDrugUpdate(isInstock) {
    let { drugInfo } = this.state
    const { clinic_id, ClinicDrugUpdate } = this.props
    if (drugInfo.drug_class_id) {
      if (this.validateData(drugInfo)) {
        let clinic_drug_id = drugInfo.id
        delete drugInfo.id
        let data = await ClinicDrugUpdate({ ...drugInfo, clinic_drug_id, clinic_id, type: 0 })
        if (data.code !== '200') {
          this.refs.myAlert.alert('修改药品失败', error, null, 'Danger')
        } else {
          this.refs.myAlert.alert('修改成功')
          if (isInstock) {
            this.setState({showInstock: true, drugReturnInfo: data.data})
          } else {
            this.props.back2List()
          }
        }
      }
    }
  }
  // 保存
  async submit(isInstock) {
    let { drugInfo } = this.state
    const { clinic_id, ClinicDrugCreate } = this.props
    console.log('drugInfo=======', drugInfo, isInstock)
    if (drugInfo.drug_class_id) {
      if (this.validateData(drugInfo)) {
        let data = await ClinicDrugCreate({ ...drugInfo, clinic_id, type: 0 })
        if (data.code !== '200') {
          this.refs.myAlert.alert('添加药品失败', data.msg, null, 'Danger')
        } else {
          this.refs.myAlert.alert('添加成功')
          if (isInstock) {
            this.setState({showInstock: true, drugReturnInfo: data.data})
          } else {
            this.props.back2List()
          }
        }
      }
    }
  }
  // 保存并入库
  async saveInStock() {
    const { createDrugInstock, clinic_id, instock_operation_id } = this.props
    let {druginstockInfo, drugReturnInfo} = this.state
    druginstockInfo.clinic_id = clinic_id
    druginstockInfo.instock_operation_id = instock_operation_id
    let array = []
    for (let key of druginstockInfo.items) {
      let value = {}
      value.clinic_drug_id = drugReturnInfo.clinic_drug_id + ''
      value.buy_price = key.buy_price * 100 + ''
      if (key.instock_amount > 0) {
        value.instock_amount = key.instock_amount + ''
      } else {
        this.refs.myAlert.alert('提示', '入库数量必须大于0')
        return
      }
      if (key.serial !== '' && key.serial) {
        value.serial = key.serial
      } else {
        this.refs.myAlert.alert('提示', '请填写批号')
        return
      }
      if (key.eff_date && key.eff_date !== '') {
        value.eff_date = key.eff_date
      } else {
        this.refs.myAlert.alert('提示', '请选择有效期')
        return
      }
      array.push(value)
    }
    druginstockInfo.items = JSON.stringify(array)
    let error = await createDrugInstock(druginstockInfo)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.back2List()
    }
  }
  // 药品入库
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
      array.push({
        value: name,
        label: name,
        ...doseForms[key]
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
        label: name,
        ...drugClasses[key]
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
      array.push({
        value: name,
        label: name,
        ...doseUnits[key]
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
      array.push({
        value: name,
        label: name,
        ...routeAdministrationss[key]
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
      array.push({
        value: name,
        label: name,
        ...frequencies[key]
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
    const drugs = this.props.drugs || []
    // console.log('drugs=======', drugs)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>药品基本信息</span>
        <div>
          <ul>
            <li style={{ position: 'relative' }}>
              <label>
                通用名<b style={{ color: 'red' }}>*</b>
              </label>
              <CustomSelect
                placeholder='搜索'
                controlStyle={{ marginTop: '0px', height: '30px' }}
                labelKey='name'
                valueKey='name'
                value={drugInfo.name}
                withoutFitler={!false}
                onChange={({
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
                }) => {
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
                    drugInfo: { ...drugInfo, ...obj }
                  })
                }}
                onInputChange={keyword => {
                  this.setItemValue(keyword, 'name', 2)
                  this.props.queryDicDrugsList({ keyword, type: 0 })
                }}
                options={drugs}
                renderTitle={(item, index) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', lineHeight: '40px', justifyContent: 'center', alignItems: 'center', background: '#F2F2F2' }} key={index}>
                      <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9', height: '100%' }}>药品名</div>
                      <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9', height: '100%' }}>规格</div>
                      <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9', height: '100%' }}>生产厂家</div>
                    </div>
                  )
                }}
                renderItem={(item, index) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', lineHeight: '40px', borderBottom: '1px solid #d9d9d9', justifyContent: 'center', alignItems: 'center' }} key={index}>
                      <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9', height: '100%' }}>{item.name}</div>
                      <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9', height: '100%' }}>{item.specification}</div>
                      <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9', height: '100%' }}>{item.manu_factory_name}</div>
                    </div>
                  )
                }}
              />
              {/* {this.state.searchView === 1 ? this.searchView() : ''} */}
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
                药品条形码
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
                    this.setItemValue(limitMoney(e.target.value), 'ret_price', 2)
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
                    this.setItemValue(limitMoney(e.target.value), 'buy_price', 2)
                    // this.setItemValue(e, 'buy_price')
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
                    this.setItemValue(limitMoney(e.target.value), 'bulk_sales_price', 2)
                    // this.setItemValue(e, 'bulk_sales_price')
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
              <label>剂量单位</label>
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
              <label>默认用法</label>
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
              <label>默认频次</label>
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
              <label>效期预警</label>
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
    instock_operation_id: state.user.data.id,
    doseUnits: state.doseUnits.data,
    doseForms: state.doseForms.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data,
    drugs: state.drugs.drug_data,
    drugClasses: state.drugClasses.data,
    instock_way: state.drugStocks.instock_way,
    supplier_data: state.drugStocks.supplier_data
  }
}

export default connect(mapStateToProps, {
  ClinicDrugCreate,
  ClinicDrugList,
  queryDoseUnitList,
  queryDoseFormList,
  queryFrequencyList,
  queryRouteAdministrationList,
  queryDicDrugsList,
  ClinicDrugDetail,
  ClinicDrugUpdate,
  querySupplierList,
  queryInstockWayList,
  createDrugInstock
})(AddDrugScreen)
