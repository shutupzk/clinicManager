import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryFinanceMonthList } from '../../../../ducks'
import { PageCard } from '../../../../components'
import { formatMoney } from '../../../../utils'

// 其他收费
class ReportMonthScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .startOf('M')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'M')
        .startOf('M')
        .format('YYYY-MM-DD')
    }
  }

  componentDidMount() {
    this.queryContentData({})
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceMonthList } = this.props
    const { start_date, end_date } = this.state
    queryFinanceMonthList({ start_date, end_date, offset, limit })
  }

  showContent() {
    const { finances, finances_page } = this.props
    return (
      <div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>交易日期</div>
              <div>费用合计</div>
              <div>实收金额</div>
              <div>现金</div>
              <div>银行卡</div>
              <div>微信</div>
              <div>支付宝</div>
              <div>积分抵扣</div>
              <div>余额支付</div>
              <div>医保支付</div>
              <div>挂账</div>
              <div>卡券</div>
              <div>减免</div>
              <div>人数</div>
              <div>平均价格</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div>{formatMoney(finances_page.total_money)}</div>
              <div>{formatMoney(finances_page.balance_money)}</div>
              <div>{formatMoney(finances_page.cash)}</div>
              <div>{formatMoney(finances_page.bank)}</div>
              <div>{formatMoney(finances_page.wechat)}</div>
              <div>{formatMoney(finances_page.alipay)}</div>
              <div>{formatMoney(finances_page.bonus_points_money)}</div>
              <div>{formatMoney(0)}</div>
              <div>{formatMoney(finances_page.medical_money)}</div>
              <div>{formatMoney(finances_page.on_credit_money)}</div>
              <div>{formatMoney(finances_page.discount_money || 0 + finances_page.voucher_money || 0)}</div>
              <div>{formatMoney(finances_page.derate_money)}</div>
              <div>{finances_page.total}</div>
              <div>{formatMoney(finances_page.total_money ? finances_page.total_money / finances_page.total : 0)}</div>
            </li>
            {finances.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{item.date}</div>
                  <div>{formatMoney(item.total_money)}</div>
                  <div>{formatMoney(item.balance_money)}</div>
                  <div>{formatMoney(item.cash)}</div>
                  <div>{formatMoney(item.bank)}</div>
                  <div>{formatMoney(item.wechat)}</div>
                  <div>{formatMoney(item.alipay)}</div>
                  <div>{formatMoney(item.bonus_points_money)}</div>
                  <div>{formatMoney(0)}</div>
                  <div>{formatMoney(item.medical_money)}</div>
                  <div>{formatMoney(item.on_credit_money)}</div>
                  <div>{formatMoney(item.discount_money + item.voucher_money)}</div>
                  <div>{formatMoney(item.derate_money)}</div>
                  <div>{item.total}</div>
                  <div>{formatMoney(item.total_money ? item.total_money / item.total : 0)}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox {
            width: 1500px;
          }
          .feeScheduleBox ul li div {
            flex: 1;
          }
        `}</style>
        <PageCard
          offset={finances_page.offset}
          limit={finances_page.limit}
          total={finances_page.total}
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
            <button style={{ marginLeft: '100px' }} onClick={() => this.queryContentData({})}>
              查询
            </button>
            {/* <button style={{ marginLeft: '20px' }} onClick={() => {}}>
              导出
            </button> */}
          </div>
        </div>
        {this.showContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    finances: state.finances.data_month,
    finances_page: state.finances.page_info_month
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceMonthList }
)(ReportMonthScreen)
