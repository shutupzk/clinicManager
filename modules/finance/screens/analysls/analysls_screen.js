import React, { Component } from 'react'
import { connect } from 'react-redux'

import AnalyslsMethodScreen from './components/analysls_method_screen'
import AnalyslsTypeScreen from './components/analysls_type_screen'

class FinanceAnalyslsScreen extends Component {
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
      1: <AnalyslsTypeScreen />,
      2: <AnalyslsMethodScreen />
    }
    return map[pageType] || null
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            收费类业务类型
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            支付方式占比
          </span>
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
)(FinanceAnalyslsScreen)
