import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
// import moment from 'moment'
// import { PageCard, Select } from '../../../../components'
import StorageMgtScreen from './storage_mgt_screen'
import OutboundMgtScreen from './outbound_mgt_screen'
import CurrentInventoryScreen from './current_inventory_screen'

class PharmacyListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnel_type: 1
    }
  }

  componentWillMount() {
  }

  changeContent({ personnel_type }) {
    this.setState({ personnel_type })
  }
  renderContent() {
    let { personnel_type } = this.state
    let map = {
      1: <StorageMgtScreen />,
      2: <OutboundMgtScreen />,
      3: <CurrentInventoryScreen />
      // 4: <StorageMgtScreen />
    }
    return map[personnel_type] || null
  }

  render() {
    return (
      <div className={'orderRecordsPage'}>
        <div className={'childTopBar'}>
          <span
            className={this.state.personnel_type === 1 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 1 })
            }}
          >
            入库管理
          </span>
          <span
            className={this.state.personnel_type === 2 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 2 })
            }}
          >
            出库管理
          </span>
          <span
            className={this.state.personnel_type === 3 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 3 })
            }}
          >
            当前库存
          </span>
          {/* <span
            className={this.state.personnel_type === 4 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 4 })
            }}
          >
            药库盘点
          </span> */}
        </div>
        {this.renderContent()}
        <style jsx='true'>{`
          .childTopBar {
            float: left;
            width: 100%;
            // background:#909090;
          }
          .childTopBar span {
            margin-top: 31px;
            width: 126px;
            height: 37px;
            background: rgba(255, 255, 255, 1);
            float: left;
            text-align: center;
            line-height: 37px;
            cursor: pointer;
            margin-bottom: 10px;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 20px;
          }
          .childTopBar span:hover,
          .childTopBar span.sel {
            background: rgba(42, 205, 200, 1);
            border-radius: 4px 0px 0px 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei-Bold;
            color: rgba(255, 255, 255, 1);
          }
          .childTopBar span:nth-child(2):hover,
          .childTopBar span.sel {
            border-radius: 0;
          }
          .childTopBar span:nth-child(3):hover,
          .childTopBar span.sel {
            border-radius: 4px 4px 0px 0px;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, {})(PharmacyListScreen)
