import React, { Component } from 'react'
import { connect } from 'react-redux'

import DruginstockScreen from './components/drug_instock_screen'
import DrugoutstockScreen from './components/drug_outstock_screen'
import DruginvoicingScreen from './components/drug_invoicing_screen'
import MaterialinstockScreen from './components/material_instock_screen'
import MaterialoutstockScreen from './components/material_outstock_screen'
import MaterialinvoicingScreen from './components/material_invoicing_screen'

class FinanceStockScreen extends Component {
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
      1: <DruginstockScreen />,
      2: <DrugoutstockScreen />,
      3: <DruginvoicingScreen />,
      4: <MaterialinstockScreen />,
      5: <MaterialoutstockScreen />,
      6: <MaterialinvoicingScreen />
    }
    return map[pageType] || null
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
          药品入库统计
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
          药品出库统计
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
          药品进销存统计
          </span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
          耗材入库统计
          </span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
          耗材出库统计
          </span>
          <span className={this.state.pageType === 6 ? 'sel' : ''} onClick={() => this.changeContent({ type: 6 })}>
          耗材进销存统计
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
)(FinanceStockScreen)
