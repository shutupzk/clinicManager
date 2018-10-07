import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageCard, Confirm, Select } from '../../../../components'
// import moment from 'moment'
import {
  queryMaterialStockList,
  querySupplierList
} from '../../../../ducks'
import { formatMoney } from '../../../../utils'
// import AddmeterialCurrentStockscreen from './components/addmeterialCurrentStockscreen'
import moment from 'moment'

// 病历
class CurrentInventoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      supplier_name: '',
      amount: false,
      date_warning: false,
      keyword: '',
      showType: 1,
      showWay: 1,
      material_outstock_record_id: ''
    }
  }

  async componentWillMount() {
    this.getDataList({offset: 0, limit: 10})
  }
  getDataList({ offset = 0, limit = 10 }) {
    const {clinic_id, queryMaterialStockList} = this.props
    const {supplier_name, amount, date_warning, keyword} = this.state
    let requestData = {
      clinic_id,
      offset,
      limit
    }
    if (supplier_name !== '') {
      requestData.supplier_name = supplier_name
    }
    if (amount) {
      requestData.amount = amount
    }
    if (date_warning) {
      requestData.date_warning = date_warning
    }
    if (keyword !== '') {
      requestData.keyword = keyword
    }
    queryMaterialStockList(requestData, true)
  }
  renderTable() {
    const { meterialCurrentStocks, pageInfo } = this.props
    console.log('meterialCurrentStocks=====', meterialCurrentStocks)
    return (
      <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td style={{flex: 2}}>商品名称</td>
                  <td style={{flex: 2}}>规格</td>
                  <td>单位</td>
                  <td style={{flex: 2}}>生产厂商</td>
                  <td>供应商</td>
                  <td>零售价</td>
                  <td>成本价</td>
                  <td style={{flex: 2}}>批号</td>
                  <td>有效期</td>
                  <td>库存</td>
                </tr>
              </thead>
              <tbody>
                {meterialCurrentStocks.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{flex: 2}}>{item.name}</td>
                      <td style={{flex: 2}}>{item.specification}</td>
                      <td>{item.unit_name}</td>
                      <td style={{flex: 2}} title={item.manu_factory_name}>{item.manu_factory_name}</td>
                      <td>{item.supplier_name}</td>
                      <td>{formatMoney(item.ret_price)}</td>
                      <td>{formatMoney(item.buy_price)}</td>
                      <td style={{flex: 2}}>{item.serial}</td>
                      <td>{moment(item.eff_date).format('YYYY-MM-DD')}</td>
                      <td>{item.stock_amount}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <PageCard
              offset={pageInfo.offset}
              limit={pageInfo.limit}
              total={pageInfo.total}
              style={{margin: '20px 0', width: '100%'}}
              onItemClick={({ offset, limit }) => {
                // const keyword = this.state.keyword
                this.getDataList({ offset, limit })
              }}
            />
          </div>
        </div>
        <style jsx>{`
          .contentCenterRight{
            width:100%;
            height:715px; 
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
            border-radius: 4px ;
            margin-left:20px;
            margin-top:5px;
            display: flex;
            flex-direction: column;
          }
          .contentCenter{
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable{
            margin:18px 32px;
            // background:#b0b0b0;
          }
          .tableContent{

          }
          .tableContent table{
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top:1px solid #e8e8e8;
          }
          .tableContent table thead{
            background:rgba(250,250,250,1);
            box-shadow: 1px 1px 0px 0px rgba(232,232,232,1) 
          }
          .tableContent table tr{
            height:40px; 
            display: flex;
            border-bottom:1px solid #e8e8e8;
            border-right:1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td{
            border-left:1px solid #e8e8e8;
            height:40px; 
            // display: flex;
            align-items: center;
            flex:1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd>div{
            margin:0 auto;
            width: max-content;
          }
          .operTd>div>div{
            cursor:pointer;
            color:#2ACDC8;
            float:left;
          }
          .operTd>div>div.divideLine{
            cursor:default;
            color:#e8e8e8;
            margin:0 5px;
          }
        `}</style>
      </div>
    )
  }
  // 获取供应商筛选
  getSupplierOptions() {
    const { supplier_data } = this.props
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
    return array
  }
  // 获取供应商数据
  querySupplierList(keyword) {
    const {querySupplierList} = this.props
    if (keyword) {
      querySupplierList({keyword})
    }
  }
  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  renderFilter() {
    const {supplier_name} = this.state
    return (
      <div className={'filterBox'}>
        <div className={'boxLeft'}>
          <div>
            <input
              type='text'
              placeholder={`耗材名称`}
              onChange={(e) => {
                this.setState({keyword: e.target.value})
              }}
            />
          </div>
          <div>
            <div>
              <Select
                value={this.getSelectValue(supplier_name, this.getSupplierOptions())}
                placeholder={'供应商'}
                options={this.getSupplierOptions()}
                onChange={({value}) => {
                  this.setState({ supplier_name: value })
                }}
                onInputChange={keyword => { this.querySupplierList(keyword) }}
                height={32}
              />
            </div>
          </div>
          <div style={{marginLeft: '20px'}}>
            <label>
              <input
                type='checkbox'
                onChange={e => {
                  this.setState({amount: e.target.checked})
                }}
              />
              数量大于0
            </label>
          </div>
          <div>
            <label>
              <input
                type='checkbox'
                onChange={e => {
                  this.setState({date_warning: e.target.checked})
                }}
              />
              过期预警
            </label>
          </div>
          <div style={{flex: 5}}>
            <button onClick={() => {
              this.getDataList({offset: 0, limit: 10})
            }}>查询</button>
          </div>
        </div>
        <div className={'boxRight'}>
          <button
            onClick={() => {
            }}
          >
            导出
          </button>
        </div>
        <style jsx>{`
          .filterBox {
            float: left;
            width: 100%;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 0;
          }
          .filterBox .boxLeft {
            float: left;
            display:flex;
            align-items: center;
          }
          .filterBox .boxLeft>div{
            flex: 1;
          }
          .filterBox .boxLeft input[type='text'] {
            float: left;
            width: 150px;
            height: 28px;
            line-height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
        `}</style>
      </div>
    )
  }
  render() {
    // const {showType} = this.state
    return (
      <div className={'boxContent'}>
        {this.renderFilter()}
        {this.renderTable()}
        <style jsx>{`
          .boxContent{
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin:0 20px;
            min-width:1165px;
          }
        `}</style>
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    meterialCurrentStocks: state.materialOutStocks.stock_array_data,
    pageInfo: state.materialOutStocks.stock_page_info,
    supplier_data: state.drugStocks.supplier_data
  }
}

export default connect(mapStateToProps, {
  queryMaterialStockList,
  querySupplierList
})(CurrentInventoryScreen)
