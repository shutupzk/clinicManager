import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {

} from '../../../../ducks'
// import { Confirm, PageCard, Select } from '../../../../components'

class DailyReportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      clinic_name: '',
      zone: '',
      selectType: 1
    }
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>收费日报表</span>
          <span onClick={() => Router.push('/platform/finance/monthlyReport')}>收费月报表</span>
        </div>
        <div className={'filterBox'} style={{ marginBottom: '20px' }}>
          <div className={'boxLeft'}>
            <input
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({ end_date: e.target.value })
              }}
            />
            <input
              style={{ width: '100px', margin: '14px' }}
              type='text'
              value={this.state.clinic_name}
              placeholder='诊所名称'
              onChange={e => {
                this.setState({ clinic_name: e.target.value })
              }}
            />
            <input
              style={{ width: '100px', margin: '14px' }}
              type='text'
              value={this.state.zone}
              placeholder='区域'
              onChange={e => {
                this.setState({ zone: e.target.value })
              }}
            />
            <div style={{ float: 'left', margin: '19px 30px 0 0' }}>
              <label>
                <input type='radio' name='radio' checked={this.state.selectType === 1} onChange={() => this.changeContent({ selectType: 1 })} />
                按收费方式
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input type='radio' name='radio' checked={this.state.selectType === 2} onChange={() => this.changeContent({ selectType: 2 })} />
                按业务类型
              </label>
            </div>
            <button onClick={() => this.queryContentData({})}>查询</button>
            <button style={{ marginLeft: '20px' }} onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinics_page_info: state.clinics.page_info
  }
}
export default connect(mapStateToProps, {
})(DailyReportScreen)
