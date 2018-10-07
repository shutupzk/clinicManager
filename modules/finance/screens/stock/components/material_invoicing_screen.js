import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {
  MaterialInvoicingStatistics,
  querySupplierList
} from '../../../../../ducks'
import { PageCard, Select } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
// import ReactEcharts from 'echarts-for-react'

// 其他收费
class MaterialinvoicingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      supplier_name: '',
      material_name: '',
      serial: ''
    }
  }

  componentDidMount() {
    this.queryContentData({})
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { MaterialInvoicingStatistics, clinic_id } = this.props
    const {
      start_date,
      end_date,
      supplier_name,
      material_name,
      serial
    } = this.state
    let reqData = {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    }
    if (supplier_name !== '') {
      reqData.supplier_name = supplier_name
    }
    if (material_name !== '') {
      reqData.material_name = material_name
    }
    if (serial !== '') {
      reqData.serial = serial
    }
    MaterialInvoicingStatistics(reqData)
  }
  // 获取供应商筛选
  getSupplierOptions() {
    const { supplier_data, querySupplierList } = this.props
    // console.log('supplier_data====', supplier_data)
    let array = []
    array.push({value: '', label: '全部'})
    for (let key in supplier_data) {
      let {name} = supplier_data[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    if (array.length === 1) {
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
  showContent() {
    const { invoice_data, pageInfo } = this.props
    console.log('invoice_data====', invoice_data)
    return (
      <div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>商品编码</div>
              <div>商品名称</div>
              <div>规格</div>
              <div>生产厂商</div>
              <div>供应商</div>
              <div>单位</div>
              <div>批号</div>
              <div>有效期</div>
              <div>成本价</div>
              <div style={{flex: 2}}>
                <span>本期入库</span>
                <div>
                  <span>数量</span>
                  <span>合计金额</span>
                </div>
              </div>
              <div style={{flex: 2}}>
                <span>本期出库</span>
                <div>
                  <span>数量</span>
                  <span>合计金额</span>
                </div>
              </div>
              <div style={{flex: 2}}>
                <span>库存盘点</span>
                <div>
                  <span>数量</span>
                  <span>合计金额</span>
                </div>
              </div>
            </li>
            {invoice_data.map((item, iKey) => {
              let total_instock_amount = item.total_instock_amount
              let total_outstock_amount = item.total_outstock_amount
              let stock_amount = item.stock_amount
              if (total_instock_amount === null) {
                total_instock_amount = 0
              }
              if (total_outstock_amount === null) {
                total_outstock_amount = 0
              }
              if (stock_amount === null) {
                stock_amount = 0
              }
              return (
                <li key={iKey}>
                  <div title={item.idc_code}>{item.idc_code}</div>
                  <div title={item.name}>{item.name}</div>
                  <div title={item.specification}>{item.specification}</div>
                  <div title={item.manu_factory_name}>{item.manu_factory_name}</div>
                  <div title={item.supplier_name}>{item.supplier_name}</div>
                  <div title={item.unit_name}>{item.unit_name}</div>
                  <div title={item.serial}>{item.serial}</div>
                  <div title={moment(item.eff_date).format('YYYY-MM-DD')}>{moment(item.eff_date).format('YYYY-MM-DD')}</div>
                  <div title={formatMoney(item.buy_price)}>{formatMoney(item.buy_price)}</div>
                  <div style={{flex: 2}}>
                    <div>
                      <span title={total_instock_amount}>{total_instock_amount}</span>
                      <span title={formatMoney(total_instock_amount * item.buy_price)}>{formatMoney(total_instock_amount * item.buy_price)}</span>
                    </div>
                  </div>
                  <div style={{flex: 2}}>
                    <div>
                      <span title={total_outstock_amount}>{total_outstock_amount}</span>
                      <span title={formatMoney(total_outstock_amount * item.buy_price)}>{formatMoney(total_outstock_amount * item.buy_price)}</span>
                    </div>
                  </div>
                  <div style={{flex: 2}}>
                    <div>
                      <span title={stock_amount}>{stock_amount}</span>
                      <span title={formatMoney(stock_amount * item.buy_price)}>{formatMoney(stock_amount * item.buy_price)}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox{
            width: 1366px;
          }
          .feeScheduleBox ul li:first-child>div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .feeScheduleBox ul li>div {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            // display: flex;
            // flex-direction: column;
          }
          .feeScheduleBox ul li>div>div{
            display: flex;
            border-top: 1px dashed #d8d8d8;
            width: 100%;
          }
          .feeScheduleBox ul li>div>div > span{
            flex:1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .feeScheduleBox ul li>div>div > span:last-child{
            border-left: 1px dashed #d8d8d8;
          }
          .leftTille {
            padding-top: 70px;
            width: 100px;
          }
          .leftTille ul li {
            width: 100px;
            display: flex;
            align-items: center;
          }
          .leftTille ul li label {
            flex: 1;
            text-align: right;
          }
          .leftTille ul li i {
            width: 25px;
            height: 15px;
            border-radius: 4px;
            display: block;
            margin-left: 5px;
          }
        `}</style>
        <PageCard
          offset={pageInfo.offset}
          limit={pageInfo.limit}
          total={pageInfo.total}
          onItemClick={({ offset, limit }) => {
            this.queryContentData({ offset, limit })
          }}
        />
      </div>
    )
  }
  render() {
    return (
      <div>
        <div className={'filterBox'} style={{ marginBottom: '20px' }}>
          <div className={'boxLeft'}>
            <input
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({
                  start_date: moment(e.target.value)
                    // .startOf('M')
                    .format('YYYY-MM-DD')
                })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({
                  end_date: moment(e.target.value)
                    // .startOf('M')
                    .format('YYYY-MM-DD')
                })
              }}
            />
            <div className={'select_div'}>
              <Select
                height={32}
                placeholder={'供应商'}
                onInputChange={keyword => { this.querySupplierList(keyword) }}
                options={this.getSupplierOptions()}
                onChange={e => {
                  this.setState({supplier_name: e.value})
                }}
              />
            </div>
            <input
              placeholder={'耗材名称/条形码'}
              type={'text'}
              onChange={e => {
                this.setState({material_name: e.target.value})
              }}
            />
            <input
              placeholder={'入库批号'}
              type={'text'}
              onChange={e => {
                this.setState({serial: e.target.value})
              }}
            />
            <button style={{ marginLeft: '10px' }} onClick={() => this.queryContentData({})}>
              查询
            </button>
          </div>
          <div className={'boxRight'}>
            <button style={{ marginLeft: '20px' }} onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
        {this.showContent()}
        <style jsx>{`
          .filterBox{
            width: 1366px;
          }
          .boxLeft{
            display: flex;
            align-items: center;
            // justify-content: center;
          }
          .boxLeft>div,
          .boxLeft>input{
            margin: 0 0 0 10px !important;
            width: 130px;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    invoice_data: state.invoicingStatistics.miv_data,
    pageInfo: state.invoicingStatistics.miv_page_info,
    clinic_id: state.user.data.clinic_id,
    supplier_data: state.drugStocks.supplier_data
  }
}

export default connect(
  mapStateToProps,
  {
    MaterialInvoicingStatistics,
    querySupplierList
  }
)(MaterialinvoicingScreen)
