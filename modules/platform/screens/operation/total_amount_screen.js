import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryTotalAmounts } from '../../../../ducks'
import { DatePicker } from '../../../../components'
import ReactEcharts from 'echarts-for-react'
import { formatMoney } from '../../../../utils'

class TotalAmountScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-1, 'M')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD')
    }
    this.selectType = 1
  }

  componentDidMount() {
    this.queryData()
  }

  queryData() {
    const { start_date, end_date } = this.state
    this.props.queryTotalAmounts({ typeCode: this.selectType, start_date, end_date })
  }

  getDataArray() {
    let array = []
    const { totalAmounts } = this.props
    let { start_date, end_date } = this.state

    const selectType = this.selectType

    if (selectType === 2) {
      start_date = moment(start_date).format('YYYY-MM')
      end_date = moment(end_date).format('YYYY-MM')
    }

    let temp = start_date

    while (temp <= end_date) {
      let doc = {
        date: temp
      }

      let flag = false
      let total = 0
      for (let item of totalAmounts) {
        let { balance_money, clinic_id, created_time } = item
        if (created_time === temp) {
          flag = true
          doc[clinic_id] = balance_money
          total += balance_money
        }
      }
      doc.total = total
      if (flag) array.push(doc)

      if (selectType === 2) {
        temp = moment(temp + '-01')
          .add(1, 'M')
          .format('YYYY-MM')
      } else {
        temp = moment(temp)
          .add(1, 'd')
          .format('YYYY-MM-DD')
      }
    }

    return array
  }

  getOption() {
    let array = this.getDataArray()

    const { clinic } = this.props
    let xdata = []
    let series = []

    let dataMap = {}

    for (let item of array) {
      xdata.push(item.date)

      for (let it of clinic) {
        let data = formatMoney(item[it.id] || 0)
        if (!dataMap[it.id]) dataMap[it.id] = []
        dataMap[it.id].push(data)
      }
    }

    for (let item of clinic) {
      const { id, name } = item

      series.push({
        name: name,
        type: 'line',
        label: {
          color: 'auto'
          // normal: {
          //   show: true,
          //   position: 'top'
          // }
        },
        data: dataMap[id] || []
      })
    }

    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series
    }
  }

  changeContent({ selectType }) {
    this.selectType = selectType
    this.queryData()
  }

  showDataList() {
    const { clinic, total } = this.props
    const array = this.getDataArray()
    return (
      <div>
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
            <div style={{ float: 'left', margin: '19px 30px 0 50px' }}>
              <label>
                <input type='radio' name='radio' checked={this.selectType === 1} onChange={() => this.changeContent({ selectType: 1 })} />
                日
              </label>
              <label style={{ marginLeft: '30px' }}>
                <input type='radio' name='radio' checked={this.selectType === 2} onChange={() => this.changeContent({ selectType: 2 })} />
                月
              </label>
            </div>
            <button style={{ marginLeft: '100px' }} onClick={() => this.queryData()}>
              查询
            </button>
            <button style={{ marginLeft: '20px' }}>导出</button>
          </div>
        </div>
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </div>
        <div className={'contentDIV'}>
          <ul>
            <li>
              <div>日期</div>
              {clinic.map((item, i) => {
                return <div key={i}>{item.name}</div>
              })}
              <div>合计</div>
            </li>
            <li>
              <div>合计</div>
              {clinic.map((item, i) => {
                return <div key={i} />
              })}
              <div>{formatMoney(total.total_money)}</div>
            </li>
            {array.map((doc, iKey) => {
              return (
                <li key={iKey}>
                  <div>{doc.date}</div>
                  {clinic.map(item => {
                    let id = item.id
                    return <div>{formatMoney(doc[id] || 0)}</div>
                  })}
                  <div>{formatMoney(doc.total)}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .contentDIV {
            float: left;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin: 20px 0 0 65px;
            // min-width: 1098px;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
          }
          .contentDIV ul {
            width: 100%;
            border:1px solid #E9E9E9;
            border-bottom:none;
          }
          .contentDIV ul li {
            text-align: center;
            display: flex;
            flex-direction: row;
            border-bottom:1px solid #E9E9E9;
          }
          .contentDIV ul li:nth-child(1){
            background:rgba(247,247,247,1);
          }
          .contentDIV ul li:nth-child(2){
            background:rgba(247,247,247,1);
          }
          .contentDIV ul li div {
            border-left:1px #E9E9E9 dashed;
            min-width: 200px;
            height: 35px
            line-height: 35px
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>交易总额</span>
          <span onClick={() => Router.push('/platform/operation/profit')}>利润</span>
          <span onClick={() => Router.push('/platform/operation/patient')}>患者分析</span>
          <span onClick={() => Router.push('/platform/operation/diagnosis')}>诊断分析</span>
          <span onClick={() => Router.push('/platform/operation/drug')}>药品分析</span>
        </div>
        {this.showDataList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    totalAmounts: state.totalAmounts.data,
    clinic: state.totalAmounts.clinic,
    total: state.totalAmounts.total
  }
}

export default connect(
  mapStateToProps,
  { queryTotalAmounts }
)(TotalAmountScreen)
