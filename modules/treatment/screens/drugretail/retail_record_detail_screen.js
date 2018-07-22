import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { DrugRetailList, SelectDrugRetail } from '../../../../ducks'
import moment from 'moment'
import { PageCard, Select, DatePicker } from '../../../../components'
import { formatMoney } from '../../../../utils'

class RetailRecordDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      keyword: ''
    }
  }

  getOptions() {
    return [{ value: '', label: '收费/退费' }, { value: 'in', label: '收费' }, { value: 'out', label: '退费' }]
  }

  showOptions(key) {
    let map = { in: { value: 'in', label: '收费' }, out: { value: 'out', label: '退费' }, '': { value: '', label: '收费/退费' } }
    return map[key]
  }

  getTobeChargeData({ offset, limit }) {
    const { DrugRetailList } = this.props
    let { start_date, end_date, keyword } = this.state
    DrugRetailList({ start_date, end_date, offset, limit, refundStatus: keyword === 'out' ? 2 : 1 })
  }

  componentDidMount() {
    this.getTobeChargeData({})
  }

  // 显示待收费
  showTobeCharged() {
    const { datas, page } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {datas.map((patient, index) => {
              let statusColor = patient.refund_money > 0 ? '#F24A01' : '#31B0B3'
              let payMap = { cash: '现金', bank: '银行卡', wechat: '微信', alipay: '支付宝' }
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>药品零售</span>
                    <span />
                    <span />
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.refund_money > 0 ? '已退费' : '已收费'}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>支付方式：</a>
                      <a>{payMap[patient.pay_method] || '未知'}</a>
                    </span>
                    <span>
                      <a>收费人员：</a>
                      <a>{patient.name}</a>
                    </span>
                    <span>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>收费时间：</a>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>{moment(patient.pay_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.gotoChargeDetail(patient.out_trade_no)}>
                      ￥{formatMoney(patient.balance_money)}
                      {patient.refund_money ? `（退费￥${formatMoney(patient.refund_money)}）` : ''}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <PageCard
          offset={page.offset}
          limit={page.limit}
          total={page.total}
          onItemClick={({ offset, limit }) => {
            this.getTobeChargeData({ offset, limit })
          }}
        />
      </div>
    )
  }

  // 收费详情
  gotoChargeDetail(out_trade_no) {
    this.props.SelectDrugRetail({ out_trade_no })
    Router.push('/treatment/drugretail/detail')
  }
  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>已售列表</span>
          <span onClick={() => Router.push('/treatment/drugretail/sell')}>药品零售</span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <div className={'dateDiv'}>
              <DatePicker
                placeholder={'开始日期'}
                value={moment(moment(this.state.start_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ start_date: moment(date).format('YYYY-MM-DD') })
                  }
                }}
              />
            </div>
            <div className={'dateDiv'}>
              <DatePicker
                placeholder={'结束日期'}
                value={moment(moment(this.state.end_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ end_date: moment(date).format('YYYY-MM-DD') })
                  }
                }}
              />
            </div>
            <div
              style={{
                float: 'left',
                margin: '14px',
                marginLeft: '20px',
                marginRight: '40px',
                width: '120px'
              }}
            >
              <Select
                value={this.showOptions(this.state.in_out)}
                placeholder={'收费/退费'}
                options={this.getOptions()}
                onChange={({ value }) => {
                  this.setState({ keyword: value })
                }}
                height={32}
              />
            </div>
            <button onClick={() => this.getTobeChargeData({})}>查询</button>
          </div>
        </div>
        {this.showTobeCharged()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    datas: state.drugRetail.data,
    page: state.drugRetail.page_info
  }
}

export default connect(
  mapStateToProps,
  { DrugRetailList, SelectDrugRetail }
)(RetailRecordDetailScreen)
