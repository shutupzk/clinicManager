import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select } from '../../../../../components'
import {
  drugCreate,
  queryDrugList,
  queryDoseUnitList,
  queryDoseFormList,
  queryFrequencyList,
  queryRouteAdministrationList
} from '../../../../../ducks'

// 病历
class AddCDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugInfo: {
        fetch_address: 0
      }
    }
  }

  async componentDidMount() {
  }
  style() {
    return (
      <style jsx>{`
        .contentCenter{
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button{
          background: rgba(255,255,255,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,0.65);
          padding: 0 15px;
        }
        .contentCenter button:hover{
          background:rgba(42,205,200,1);
          color:rgba(255,255,255,1);
          border: 1px solid rgba(42,205,200,1);
        }
        .bottomBtn{
          // background:#909090;
          width: 1098px;
          margin:0 0 30px 0;
          display: flex;
          align-items:center;
        }
        .bottomBtn>div{
          margin:0 auto;
        }
        .bottomBtn button{
          
        }
        .commonBlank{
          background:rgba(255,255,255,1);
          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
          border-radius: 4px ; 
          margin-bottom:20px;
          // width:1038px;
          min-width:1038px;
          display: flex;
          flex-direction: column;
          padding:5px 30px;
        }
        .commonBlank>span{
          font-size:18px;
          height:40px;
          border-bottom:1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank>div{
          display: flex;
          margin:10px 0;
        }
        .commonBlank>div>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
        }
        .commonBlank>div>button{
          background: rgba(255,255,255,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,0.65);
          padding: 0 15px;
        }
        .commonBlank>div>ul{
          // background:#a0a0a0;
          margin:0 auto;
          width:100%;
        }
        .commonBlank>div>ul>li{
          float:left;
          width:19%;
          display: flex;
          flex-direction: column;
          height:70px;
          margin-right:1%;
          margin-top:5px;
        }
        .commonBlank>div>ul>li>label{
          height:25px;
        }
        .commonBlank>div>ul>li>div>input,
        .commonBlank>div>ul>li>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
        }
        .commonBlank>div>ul>li>div{
          
        }
        .commonBlank>div>ul>li>div>label{
          margin-left:15px;
          display: flex;
          align-items:center;
          float:left;
          height:30px;
        }
        .commonBlank>div>ul>li>div>label:first-child{
          margin-left:0;
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
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => this.submit()}>保存</button>
            <button onClick={() => this.saveInStock()}>保存并入库</button>
          </div>
        </div>
        {this.style()}
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.name || data.name === '') {
      this.setState({nameFailed: true})
      // alert(1)
      return false
    } else {
      this.setState({nameFailed: false})
    }
    if (!data.dose_form_id || data.dose_form_id === '') {
      this.setState({dose_form_idFailed: true})
      // alert(2)
      return false
    } else {
      this.setState({dose_form_idFailed: false})
    }
    // if (!data.drug_class_id || data.drug_class_id === '') {
    //   this.setState({drug_class_idFailed: true})
    //   // alert(3)
    //   return false
    // } else {
    //   this.setState({drug_class_idFailed: false})
    // }
    if (!data.mini_unit_id || data.mini_unit_id === '') {
      this.setState({mini_unit_idFailed: true})
      // alert(4)
      return false
    } else {
      this.setState({mini_unit_idFailed: false})
    }
    // if (!data.dose_count_unit_id || data.dose_count_unit_id === '') {
    //   this.setState({dose_count_unit_idFailed: true})
    //   // alert(5)
    //   return false
    // } else {
    //   this.setState({dose_count_unit_idFailed: false})
    // }
    if (!data.packing_unit_id || data.packing_unit_id === '') {
      this.setState({packing_unit_idFailed: true})
      // alert(6)
      return false
    } else {
      this.setState({packing_unit_idFailed: false})
    }
    if (!data.ret_price || data.ret_price === '') {
      this.setState({ret_priceFailed: true})
      // alert(7)
      return false
    } else {
      this.setState({ret_priceFailed: false})
    }
    // if (!data.is_bulk_sales || data.is_bulk_sales === '') {
    //   this.setState({is_bulk_salesFailed: true})
    //   // alert(8)
    //   return false
    // } else {
    //   this.setState({is_bulk_salesFailed: false})
    // }
    // if (!data.bulk_sales_price || data.bulk_sales_price === '') {
    //   this.setState({bulk_sales_priceFailed: true})
    //   // alert(9)
    //   return false
    // } else {
    //   this.setState({bulk_sales_priceFailed: false})
    // }
    if (!data.barcode || data.barcode === '') {
      this.setState({barcodeFailed: true})
      alert(10)
      return false
    } else {
      this.setState({barcodeFailed: false})
    }
    // if (!data.once_dose_unit_id || data.once_dose_unit_id === '') {
    //   this.setState({once_dose_unit_idFailed: true})
    //   // alert(11)
    //   return false
    // } else {
    //   this.setState({once_dose_unit_idFailed: false})
    // }
    if (!data.route_administration_id || data.route_administration_id === '') {
      this.setState({route_administration_idFailed: true})
      // alert(12)
      return false
    } else {
      this.setState({route_administration_idFailed: false})
    }
    if (!data.frequency_id || data.frequency_id === '') {
      this.setState({frequency_idFailed: true})
      // alert(13)
      return false
    } else {
      this.setState({frequency_idFailed: false})
    }
    if (!data.eff_day || data.eff_day === '') {
      this.setState({eff_dayFailed: true})
      // alert(14)
      return false
    } else {
      this.setState({eff_dayFailed: false})
    }
    return true
  }
  // 保存
  async submit() {
    let {drugInfo} = this.state
    const {clinic_id, drugCreate} = this.props
    drugInfo.clinic_id = clinic_id
    drugInfo.type = this.props.drugType
    // drugInfo.ret_price = drugInfo.ret_price * 100
    // drugInfo.buy_price = drugInfo.buy_price * 100
    // drugInfo.bulk_sales_price = drugInfo.bulk_sales_price * 100
    if (this.validateData(drugInfo)) {
      let error = await drugCreate({drugInfo})
      if (error) {
        alert(error)
      } else {
        this.props.back2List()
      }
    }
  }
  // 保存并入库
  saveInStock() {

  }
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const {drugInfo} = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    drugInfo[key] = value
    this.setState({drugInfo})
  }
  // 顶部搜索栏
  renderSearchBlank() {
    return (
      <div className={'commonBlank searchBlank'}>
        <span>中药药品信息</span>
        <div>
          <input type='text' placeholder={'国药准字license_no'} />
          <input style={{marginLeft: '10px'}} type='text' placeholder={'药品条形码'} />
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
      const { name, id } = doseForms[key]
      // console.log(doseForms[key])
      array.push({
        value: id,
        label: name
      })
    }
    return array
  }
  // 药品分类筛选
  getDrugClassOptions() {
    return [
      {value: 1, label: '分类1'},
      {value: 2, label: '分类2'},
      {value: 3, label: '分类3'}
    ]
  }
  // 剂量单位筛选
  getMiniUnitOptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { name, id } = doseUnits[key]
      // console.log(doseForms[key])
      array.push({
        value: id,
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
      const { name, id } = routeAdministrationss[key]
      // console.log(doseForms[key])
      array.push({
        value: id,
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
      const { name, id } = frequencies[key]
      // console.log(doseForms[key])
      array.push({
        value: id,
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
  // 药品基本信息
  renderBaseInfoBlank() {
    const {drugInfo} = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>药品基本信息</span>
        <div>
          <ul>
            <li>
              <label>通用名<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'drugname'}
                value={drugInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                }}
              />
              {this.state.nameFailed || drugInfo.name === '' || !drugInfo.name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>规格</label>
              <input
                type='text'
                placeholder={'specification'}
                value={drugInfo.specification}
                onChange={e => {
                  this.setItemValue(e, 'specification')
                }}
              />
            </li>
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
              <label>包装单位<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(drugInfo.packing_unit_id, this.getMiniUnitOptions())}
                  onInputChange={keyword => { this.getDoseUnitList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'packing_unit_id', 2)
                  }}
                />
              </div>
              {this.state.packing_unit_idFailed || drugInfo.packing_unit_id === '' || !drugInfo.packing_unit_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>商品名</label>
              <input
                type='text'
                placeholder={'print_name'}
                value={drugInfo.print_name}
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
                value={drugInfo.license_no}
                onChange={e => {
                  this.setItemValue(e, 'license_no')
                }}
              />
            </li>
            <li>
              <label>剂型<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getDoseFormOptions()}
                  value={this.getSelectValue(drugInfo.dose_form_id, this.getDoseFormOptions())}
                  onInputChange={keyword => { this.getDoseFormList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'dose_form_id', 2)
                  }}
                />
              </div>
              {this.state.dose_form_idFailed || drugInfo.dose_form_id === '' || !drugInfo.dose_form_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>拼音码</label>
              <input
                type='text'
                placeholder={'py_code'}
                value={drugInfo.py_code}
                onChange={e => {
                  this.setItemValue(e, 'py_code')
                }}
              />
            </li>
            <li>
              <label>药品条形码<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'barcode'}
                value={drugInfo.barcode}
                onChange={e => {
                  this.setItemValue(e, 'barcode')
                }}
              />
              {this.state.barcodeFailed || drugInfo.barcode === '' || !drugInfo.barcode ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
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
                placeholder={'mini_dose'}
                value={drugInfo.mini_dose}
                onChange={e => {
                  this.setItemValue(e, 'mini_dose')
                }}
              />
            </li>
            <li>
              <label>剂量单位<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(drugInfo.mini_unit_id, this.getMiniUnitOptions())}
                  onInputChange={keyword => { this.getDoseUnitList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'mini_unit_id', 2)
                  }}
                />
              </div>
              {this.state.mini_unit_idFailed || drugInfo.mini_unit_id === '' || !drugInfo.mini_unit_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
          </ul>
        </div>
      </div>
    )
  }
  // 费用信息
  renderFeeInfoBlank() {
    const {drugInfo} = this.state
    console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>费用信息</span>
        <div>
          <ul>
            <li>
              <label>零售价<b style={{color: 'red'}}>*</b></label>
              <div>
                <input
                  type='text'
                  placeholder={'ret_price'}
                  value={drugInfo.ret_price}
                  onChange={e => {
                    this.setItemValue(e, 'ret_price')
                  }}
                />元
              </div>
              {this.state.ret_priceFailed || drugInfo.ret_price === '' || !drugInfo.ret_price ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>成本价</label>
              <div>
                <input
                  type='text'
                  placeholder={'buy_price'}
                  value={drugInfo.buy_price}
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
              <label>取药地点<b style={{color: 'red'}}>*</b></label>
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
            </li>
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }
  // 默认用法用量
  renderUsageInfoBlank() {
    const {drugInfo} = this.state
    // console.log('drugInfo=======', drugInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span>其他设置</span>
        <div>
          <ul>
            <li>
              <label>效期预警<b style={{color: 'red'}}>*</b></label>
              <div>
                <input
                  type='number'
                  placeholder={'eff_day'}
                  value={drugInfo.eff_day}
                  onChange={e => {
                    this.setItemValue(e, 'eff_day')
                  }}
                />天
              </div>
              {this.state.eff_dayFailed || drugInfo.eff_day === '' || !drugInfo.eff_day ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
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
            <li>
              <label>默认用法<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getRouteAdministrationOptions()}
                  value={this.getSelectValue(drugInfo.route_administration_id, this.getRouteAdministrationOptions())}
                  onInputChange={keyword => { this.getRouteAdministrationList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'route_administration_id', 2)
                  }}
                />
              </div>
              {this.state.route_administration_idFailed || drugInfo.route_administration_id === '' || !drugInfo.route_administration_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>默认频次<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getFrequencyOptions()}
                  value={this.getSelectValue(drugInfo.frequency_id, this.getFrequencyOptions())}
                  onInputChange={keyword => { this.getFrequencyList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'frequency_id', 2)
                  }}
                />
              </div>
              {this.state.frequency_idFailed || drugInfo.frequency_id === '' || !drugInfo.frequency_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>说明</label>
              <input
                type='text'
                placeholder={'default_remark'}
                value={drugInfo.default_remark}
                onChange={e => {
                  this.setItemValue(e, 'default_remark')
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
    frequencies: state.frequencies.data
  }
}

export default connect(mapStateToProps, {
  drugCreate,
  queryDrugList,
  queryDoseUnitList,
  queryDoseFormList,
  queryFrequencyList,
  queryRouteAdministrationList
})(AddCDrugScreen)
