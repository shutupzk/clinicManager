import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryFinanceListAnalysis } from '../../../../../ducks'
import { PageCard } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
import ReactEcharts from 'echarts-for-react'

// 其他收费
class MaterialinstockScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD')
    }
  }

  componentDidMount() {
    this.queryContentData({})
  }

  getOption() {
    const { finances_page } = this.props

    let data = [
      {
        name: '现金',
        value: formatMoney(finances_page.cash),
        itemStyle: {
          color: '#5bc0de'
        }
      },
      {
        name: '支付宝',
        value: formatMoney(finances_page.alipay),
        itemStyle: {
          color: '#d9534f'
        }
      },
      {
        name: '微信',
        value: formatMoney(finances_page.wechat),
        itemStyle: {
          color: '#428bca'
        }
      },
      {
        name: '银行卡',
        value: formatMoney(finances_page.bank),
        itemStyle: {
          color: '#f0ad4e'
        }
      },
      {
        name: '积分抵扣',
        value: formatMoney(finances_page.bonus_points_money),
        itemStyle: {
          color: '#54af9b'
        }
      },
      {
        name: '余额支付',
        value: formatMoney(0),
        itemStyle: {
          color: '#54b2a6'
        }
      },
      {
        name: '医保支付',
        value: formatMoney(finances_page.medical_money),
        itemStyle: {
          color: '#a28eda'
        }
      },
      {
        name: '挂账',
        value: formatMoney(finances_page.on_credit_money),
        itemStyle: {
          color: '#749f83'
        }
      },
      {
        name: '卡券',
        value: formatMoney(finances_page.discount_money || 0 + finances_page.voucher_money || 0),
        itemStyle: {
          color: '#5ab472'
        }
      },
      {
        name: '减免',
        value: formatMoney(finances_page.derate_money),
        itemStyle: {
          color: '#5ab472'
        }
      }
    ]
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      series: [
        {
          name: '金额占比',
          type: 'pie',
          data: data.sort(function(a, b) {
            return a.value - b.value
          })
        }
      ]
    }
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceListAnalysis } = this.props
    const { start_date, end_date } = this.state
    queryFinanceListAnalysis({ start_date, end_date, offset, limit })
  }

  showContent() {
    const { finances, finances_page } = this.props
    return (
      <div>
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          <div className={'leftTille'}>
            <ul>
              <li>
                <label>现金</label>
                <i style={{ background: '#5bc0de' }} />
              </li>
              <li>
                <label>支付宝</label>
                <i style={{ background: '#d9534f' }} />
              </li>
              <li>
                <label>微信</label>
                <i style={{ background: '#428bca' }} />
              </li>
              <li>
                <label>银行卡</label>
                <i style={{ background: '#f0ad4e' }} />
              </li>
              <li>
                <label>积分抵扣</label>
                <i style={{ background: '#54af9b' }} />
              </li>
              <li>
                <label>余额支付</label>
                <i style={{ background: '#54b2a6' }} />
              </li>
              <li>
                <label>医保支付</label>
                <i style={{ background: '#a28eda' }} />
              </li>
              <li>
                <label>挂账</label>
                <i style={{ background: '#749f83' }} />
              </li>
              <li>
                <label>卡券</label>
                <i style={{ background: '#5ab472' }} />
              </li>
              <li>
                <label>减免</label>
                <i style={{ background: '#5ab472' }} />
              </li>
            </ul>
          </div>
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </div>
        <div
          style={{
            float: 'left',
            display: 'flex',
            width: '1200px',
            justifyContent: 'center',
            marginBottom: '15px'
          }}
        >
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '支付方式'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>交易日期</div>
              <div>费用合计</div>
              <div>现金</div>
              <div>支付宝</div>
              <div>微信</div>
              <div>银行卡</div>
              <div>积分抵扣</div>
              <div>余额支付</div>
              <div>医保支付</div>
              <div>挂账</div>
              <div>卡券</div>
              <div>减免</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div>{formatMoney(finances_page.total_money)}</div>
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
            </li>
            {finances.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{formatMoney(item.total_money)}</div>
                  <div>{formatMoney(item.cash)}</div>
                  <div>{formatMoney(item.bank)}</div>
                  <div>{formatMoney(item.wechat)}</div>
                  <div>{formatMoney(item.alipay)}</div>
                  <div>{formatMoney(item.bonus_points_money)}</div>
                  <div>{formatMoney(0)}</div>
                  <div>{formatMoney(item.medical_money)}</div>
                  <div>{formatMoney(item.on_credit_money)}</div>
                  <div>{formatMoney(item.discount_money || 0 + item.voucher_money || 0)}</div>
                  <div>{formatMoney(item.derate_money)}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox ul li div {
            flex: 1;
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
            <button style={{ marginLeft: '20px' }} onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
        {this.showContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    finances: state.finances.data,
    finances_page: state.finances.page_info
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceListAnalysis }
)(MaterialinstockScreen)
