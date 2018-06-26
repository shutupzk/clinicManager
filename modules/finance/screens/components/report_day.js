import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

// 其他收费
class ReportDayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientName: '',
      oprationName: '',
      start_date: moment()
        .add(-1, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(-1, 'd')
        .format('YYYY-MM-DD'),
      selectType: 1
    }
  }

  changeContent({ selectType }) {
    this.setState({ selectType })
  }

  queryContentData({ skip = 0, limit = 10 }) {
    const { start_date, end_date, patientName, oprationName } = this.state
    console.log(start_date, end_date, patientName, oprationName, skip, limit)
  }

  showContent() {
    if (this.state.selectType === 2) return this.showTypeContent()
    else return this.showMethodContent()
  }

  showTypeContent() {}

  showMethodContent() {}

  render() {
    return (
      <div>
        <div className={'filterBox'}>
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
              value={this.state.patientName}
              placeholder='就诊人姓名'
              onChange={e => {
                this.setState({ patientName: e.target.value })
              }}
            />
            <input
              style={{ width: '100px', margin: '14px' }}
              type='text'
              value={this.state.oprationName}
              placeholder='收费员'
              onChange={e => {
                this.setState({ oprationName: e.target.value })
              }}
            />
            <div style={{ float: 'left', margin: '19px 30px 0 0' }}>
              <label>
                <input type='radio' name='radio' checked={this.state.selectType === 1} onClick={() => this.changeContent({ selectType: 1 })} />
                按收费方式
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input type='radio' name='radio' checked={this.state.selectType === 2} onClick={() => this.changeContent({ selectType: 2 })} />
                按业务类型
              </label>
            </div>
            <button onClick={() => this.queryContentData({})}>查询</button>
          </div>
        </div>
        {this.showContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
     
  }
}

export default connect(
  mapStateToProps,
  {}
)(ReportDayScreen)
