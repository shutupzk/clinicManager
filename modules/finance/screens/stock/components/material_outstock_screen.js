import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {
  MaterialOutstockStatistics,
  querySupplierList,
  queryOutstockWayList,
  queryDoctorList
} from '../../../../../ducks'
import { PageCard, Select } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
// import ReactEcharts from 'echarts-for-react'

// 其他收费
class MaterialoutstockScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      outstock_way_name: '',
      supplier_name: '',
      material_name: '',
      personnel_name: '',
      serial: ''
    }
  }

  componentDidMount() {
    this.queryContentData({})
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { MaterialOutstockStatistics, clinic_id } = this.props
    const {
      start_date,
      end_date,
      outstock_way_name,
      supplier_name,
      material_name,
      serial,
      personnel_name
    } = this.state
    let reqData = {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    }
    if (outstock_way_name !== '') {
      reqData.outstock_way_name = outstock_way_name
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
    if (personnel_name !== '') {
      reqData.personnel_name = personnel_name
    }
    MaterialOutstockStatistics(reqData)
  }
  // 获取出库方式筛选
  getInstockWayNameOptions() {
    const { outstock_way, queryOutstockWayList } = this.props
    // console.log('outstock_way====', outstock_way)
    let array = []
    array.push({value: '', label: '全部'})
    for (let key in outstock_way) {
      let {name} = outstock_way[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    if (array.length === 1) {
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
  // 获取领用人员筛选
  getOperNameOptions() {
    const { doctors, queryDoctorList, clinic_id } = this.props
    // console.log('supplier_data====', supplier_data)
    let array = []
    array.push({value: '', label: '全部'})
    for (let key in doctors) {
      let {name} = doctors[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    if (array.length === 1) {
      queryDoctorList({keyword: '', clinic_id}, true)
    }
    return array
  }
  // 获取供应商数据
  queryDoctorList(keyword) {
    const {queryDoctorList, clinic_id} = this.props
    if (keyword) {
      queryDoctorList({keyword, clinic_id}, true)
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
              <div>出库日期</div>
              <div>出库单号</div>
              <div>出库方式</div>
              <div>供应商</div>
              <div>出库人员</div>
              <div>领用人员</div>
              <div>性别</div>
              <div>耗材编码</div>
              <div>耗材名称</div>
              <div>规格</div>
              <div>生产厂商</div>
              <div>出库数量</div>
              <div>单位</div>
              <div>零售价</div>
              <div>成本价</div>
              <div>成本合计</div>
              <div>批号</div>
              <div>有效日期</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>合计</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{pageInfo.total_outstock_amount}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
              <div>{formatMoney(pageInfo.total_buy_price)}</div>
              <div>{'--'}</div>
              <div>{'--'}</div>
            </li>
            {invoice_data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{moment(item.outstock_date).format('YYYY-MM-DD')}</div>
                  <div title={item.order_number}>{item.order_number}</div>
                  <div title={item.outstock_way_name}>{item.outstock_way_name}</div>
                  <div title={item.supplier_name}>{item.supplier_name}</div>
                  <div title={item.outstock_operation_name}>{item.outstock_operation_name}</div>
                  <div title={item.personnel_name}>{item.personnel_name}</div>
                  <div title={item.sex === 0 ? '女' : item.sex === 1 ? '男' : ''}>{item.sex === 0 ? '女' : item.sex === 1 ? '男' : ''}</div>
                  <div title={item.idc_code}>{item.idc_code}</div>
                  <div title={item.material_name}>{item.material_name}</div>
                  <div title={item.specification}>{item.specification}</div>
                  <div title={item.manu_factory_name}>{item.manu_factory_name}</div>
                  <div title={item.outstock_amount}>{item.outstock_amount}</div>
                  <div title={item.unit_name}>{item.unit_name}</div>
                  <div title={formatMoney(item.ret_price)}>{formatMoney(item.ret_price)}</div>
                  <div title={formatMoney(item.buy_price)}>{formatMoney(item.buy_price)}</div>
                  <div title={formatMoney(item.buy_price * item.outstock_amount)}>{formatMoney(item.buy_price * item.outstock_amount)}</div>
                  <div title={item.serial}>{item.serial}</div>
                  <div title={moment(item.eff_date).format('YYYY-MM-DD')}>{moment(item.eff_date).format('YYYY-MM-DD')}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox{
            width: 1366px;
          }
          .feeScheduleBox ul li div {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
                    .startOf('M')
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
                    .startOf('M')
                    .format('YYYY-MM-DD')
                })
              }}
            />
            <div className={'select_div'}>
              <Select
                height={32}
                placeholder={'出库类型'}
                onInputChange={keyword => { this.queryOutstockWayList(keyword) }}
                options={this.getInstockWayNameOptions()}
                onChange={e => {
                  this.setState({outstock_way_name: e.value})
                }}
              />
            </div>
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
            <div className={'select_div'}>
              <Select
                height={32}
                placeholder={'领用人员'}
                onInputChange={keyword => { this.queryDoctorList(keyword) }}
                options={this.getOperNameOptions()}
                onChange={e => {
                  this.setState({personnel_name: e.value})
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
              placeholder={'批号'}
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
    invoice_data: state.invoicingStatistics.mos_data,
    pageInfo: state.invoicingStatistics.mos_page_info,
    clinic_id: state.user.data.clinic_id,
    outstock_way: state.drugOutStocks.outstock_way,
    supplier_data: state.drugStocks.supplier_data,
    doctors: state.doctors.data
  }
}

export default connect(
  mapStateToProps,
  {
    MaterialOutstockStatistics,
    querySupplierList,
    queryOutstockWayList,
    queryDoctorList
  }
)(MaterialoutstockScreen)
