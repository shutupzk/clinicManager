import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  ChargeMonthReportByPayWay
} from '../../../../ducks'
import { formatMoney } from '../../../../utils'
import { MonthPicker } from '../../../../components'
import ReactEcharts from 'echarts-for-react'

class MonthlyReportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      keyword: '',
      start_date: moment()
        .add(-30, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD')
    }
  }
  componentDidMount() {
    this.ChargeMonthReportByPayWay()
  }
  ChargeMonthReportByPayWay() {
    const {ChargeMonthReportByPayWay} = this.props
    const {start_date, end_date} = this.state
    let reqData = {
      start_date: moment(start_date).format('YYYY-MM'),
      end_date: moment(end_date).format('YYYY-MM')
    }
    ChargeMonthReportByPayWay(reqData)
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/finance/dailyReport')}>收费日报表</span>
          <span className={'sel'}>收费月报表</span>
        </div>
        <div className={'filterBox'} style={{ marginBottom: '20px' }}>
          <div className={'boxLeft'} style={{display: 'flex', alignItems: 'center'}}>
            <div style={{margin: '-14px 0 0 20px'}}>
              <MonthPicker
                placeholder={'开始日期'}
                value={moment(this.state.start_date)}
                onChange={(date, str) => {
                  // console.log('e===', date, str)
                  this.setState({ start_date: moment(date).format('YYYY-MM') })
                }}
              />
            </div>
            <div style={{margin: '-14px 0 0 20px'}}>
              <MonthPicker
                placeholder={'结束日期'}
                value={moment(this.state.end_date)}
                onChange={(date, str) => {
                  // console.log('e===', date, str)
                  this.setState({ end_date: moment(date).format('YYYY-MM') })
                }}
              />
            </div>
            <button style={{marginLeft: '20px'}} onClick={() => {
              this.ChargeMonthReportByPayWay()
            }}>查询</button>
          </div>
          <div className={'boxRight'}>
            <button onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
        {this.renderDetail()}
      </div>
    )
  }
  getTableStyle() {
    return (
      <style jsx='1'>{`
        .listContent {
          float: left;
          width: 1100px;
          margin-left: 66px;
          // background: #909090;
          margin-bottom: 20px;
        }
        .tableTitle{
          text-align: center;
          font-size: 18px;
          width:100%;
          display: block;
        }
        .listContent ul {
          float: left;
          margin: 10px 0 0 0;
          display: flex;
          flex-direction: column;
          width:100%;
          border-top: 1px solid #d8d8d8;
        }
        .listContent ul li {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 40px;
          margin: 0;
          border-radius: 0;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .listContent ul li:nth-child(1) {
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
          font-weight: bold;
        }
        .listContent ul li>div {
          flex: 1;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          line-height: normal;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .listContent ul li>div>div{
          display: flex;
        }
        .listContent ul li>div>div>label{
          flex: 1;
        }
        .listContent ul li>div>div>span{
          flex: 1;
          cursor: pointer;
          color: #2ACDC8;
        }
      `}</style>
    )
  }
  getTotalFee(key) {
    const {m_data} = this.props
    let total = 0
    let array = m_data
    for (let item of array) {
      total += item[key]
    }
    return total
  }
  renderDetail() {
    const {m_data} = this.props
    console.log('m_data=====', m_data)
    return (
      <div>
        {this.renderECharts()}
        <div className={'listContent'}>
          <span className={'tableTitle'}>{moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '收费月报表'}</span>
          <ul>
            <li>
              <div><div>诊所名称</div></div>
              <div><div>交易日期</div></div>
              <div><div>费用合计</div></div>
              <div><div>折后金额</div></div>
              <div><div>实收合计</div></div>
              <div><div>现金</div></div>
              <div><div>银行卡</div></div>
              <div><div>微信当面付</div></div>
              <div><div>支付宝当面付</div></div>
              <div><div>积分抵扣</div></div>
              <div><div>医保支付</div></div>
              <div><div>挂账</div></div>
              <div><div>卡卷</div></div>
              <div><div>减免</div></div>
            </li>
            <li>
              <div><div>合计</div></div>
              <div><div>--</div></div>
              <div><div>{formatMoney(this.getTotalFee('total_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('discount_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('balance_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('cash'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('bank'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('wechat'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('alipay'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('bonus_points_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('medical_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('on_credit_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('voucher_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('derate_money'))}</div></div>
            </li>
            {m_data.map((item, index) => {
              return (
                <li key={index}>
                  <div><div>{item.clinic_name}</div></div>
                  <div><div>{item.business_month}</div></div>
                  <div><div>{formatMoney(item.total_money)}</div></div>
                  <div><div>{formatMoney(item.discount_money)}</div></div>
                  <div><div>{formatMoney(item.balance_money)}</div></div>
                  <div><div>{formatMoney(item.cash)}</div></div>
                  <div><div>{formatMoney(item.bank)}</div></div>
                  <div><div>{formatMoney(item.wechat)}</div></div>
                  <div><div>{formatMoney(item.alipay)}</div></div>
                  <div><div>{formatMoney(item.bonus_points_money)}</div></div>
                  <div><div>{formatMoney(item.medical_money)}</div></div>
                  <div><div>{formatMoney(item.on_credit_money)}</div></div>
                  <div><div>{formatMoney(item.voucher_money)}</div></div>
                  <div><div>{formatMoney(item.derate_money)}</div></div>
                </li>
              )
            })}
          </ul>
        </div>
        {this.getTableStyle()}
      </div>
    )
  }
  getYData(xdata) {
    const { m_data } = this.props
    let ydata = []
    for (let x_key of xdata) {
      let value = 0
      for (let key of m_data) {
        if (x_key === key.business_month) {
          value += key.total_money
        }
      }
      ydata.push(formatMoney(value))
    }
    return ydata
  }
  getOption() {
    // const { m_data } = this.props
    const {start_date, end_date} = this.state
    let xdata = []
    let ydata = []
    let month = moment(start_date).add(-1, 'M').format('YYYY-MM')
    while (month <= end_date) {
      month = moment(month).add(1, 'M').format('YYYY-MM')
      xdata.push(month)
    }
    ydata = this.getYData(xdata)
    // for (let item of m_data) {
    //   xdata.push(item.date)
    //   ydata.push(formatMoney(item.total_money))
    // }
    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '费用合计',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
  }
  renderECharts() {
    return (
      <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
        <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    m_data: state.financial.m_data
  }
}
export default connect(mapStateToProps, {
  ChargeMonthReportByPayWay
})(MonthlyReportScreen)
