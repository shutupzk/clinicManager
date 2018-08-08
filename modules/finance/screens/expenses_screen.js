import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreditDayScreen from './components/credit_day'
import RechargeDayScreen from './components/recharge_day'
import RechargeRemainScreen from './components/recharge_remain'
import ReportDayScreen from './components/report_day'
import ReportDetailScreen from './components/report_detail'
import ReportMonthScreen from './components/report_month'

class ExpensesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }

  changeContent({ type }) {
    this.setState({ pageType: type })
  }

  showDataList() {
    let { pageType } = this.state
    let map = {
      1: <ReportDayScreen />,
      2: <ReportMonthScreen />,
      3: <ReportDetailScreen />,
      4: <RechargeDayScreen />,
      5: <RechargeRemainScreen />,
      6: <CreditDayScreen />
    }
    return map[pageType] || null
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            收费日报表
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            收费月报表
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
            收费明细
          </span>
          {/* <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
            充值日报
          </span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
            充值余额
          </span>
          <span className={this.state.pageType === 6 ? 'sel' : ''} onClick={() => this.changeContent({ type: 6 })}>
            挂账明细
          </span> */}
        </div>
        {this.showDataList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(ExpensesScreen)
