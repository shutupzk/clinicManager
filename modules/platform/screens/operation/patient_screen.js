import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  PatientCountBySex,
  PatientCountByAge,
  PatientCountByChannel
} from '../../../../ducks'
// import { Confirm, PageCard, Select } from '../../../../components'
// import { formatMoney } from '../../../../utils'
import ReactEcharts from 'echarts-for-react'

class PatientScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataType: 1
    }
  }
  componentDidMount() {
    this.PatientCountBySex()
  }
  PatientCountBySex() {
    const {PatientCountBySex} = this.props
    PatientCountBySex()
  }
  PatientCountByAge() {
    const {PatientCountByAge} = this.props
    PatientCountByAge()
  }
  PatientCountByChannel() {
    const {PatientCountByChannel} = this.props
    PatientCountByChannel()
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/operation/totalAmount')}>交易总额</span>
          <span onClick={() => Router.push('/platform/operation/profit')}>利润</span>
          <span className={'sel'}>患者分析</span>
          {/* <span onClick={() => Router.push('/platform/operation/diagnosis')}>诊断分析</span>
          <span onClick={() => Router.push('/platform/operation/drug')}>药品分析</span> */}
        </div>
        {this.renderFilter()}
        {this.renderDetail()}
      </div>
    )
  }

  renderFilter() {
    const {dataType} = this.state
    return (
      <div className={''}>
        <div className={'filterBox'}>
          <div className={'boxLeft'} style={{display: 'flex', alignItems: 'center'}}>
            <label>
              <input
                type={'radio'}
                name={'dataType'}
                checked={dataType === 1}
                onChange={e => {
                  if (e.target.checked) {
                    this.PatientCountBySex()
                    this.setState({dataType: 1})
                  }
                }}
              />性别
            </label>
            <label>
              <input
                type={'radio'}
                name={'dataType'}
                checked={dataType === 2}
                onChange={e => {
                  if (e.target.checked) {
                    this.PatientCountByAge()
                    this.setState({dataType: 2})
                  }
                }}
              />年龄
            </label>
            <label>
              <input
                type={'radio'}
                name={'dataType'}
                checked={dataType === 3}
                onChange={e => {
                  if (e.target.checked) {
                    this.PatientCountByChannel()
                    this.setState({dataType: 3})
                  }
                }}
              />患者来源
            </label>
          </div>
          <div className={'boxRight'}>
            <button>导出</button>
          </div>
        </div>
        <style jsx>{`
          .boxLeft > label{
            margin-left: 20px;
          }
        `}</style>
      </div>
    )
  }
  getOption() {
    const {dataType} = this.state
    const {sex_cdata, age_cdata, channel_cdata} = this.props
    let array = []
    let data = []
    if (dataType === 1) {
      array = sex_cdata
    } else if (dataType === 2) {
      array = age_cdata
    } else {
      array = channel_cdata
    }
    for (let i = 0; i < array.length; i++) {
      let item = {}
      if (dataType === 1) {
        if (array[i].sex === 0) {
          item.name = '女'
        } else {
          item.name = '男'
        }
      } else if (dataType === 2) {
        item.name = array[i].age
      } else {
        item.name = array[i].patient_channel_name
      }
      item.value = array[i].total
      item.itemStyle = {
        color: this.colorStyle()[i]
      }
      data.push(item)
    }
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
  getTitleValue(item) {
    const {dataType} = this.state
    if (dataType === 1) {
      return item.sex === 0 ? '女' : '男'
    } else if (dataType === 2) {
      return item.age
    } else {
      return item.patient_channel_name
    }
  }
  getPercentValue(item) {
    const {dataType} = this.state
    const {sex_cdata, age_cdata, channel_cdata} = this.props
    let totalPer = 0
    let array = []
    if (dataType === 1) {
      array = sex_cdata
    } else if (dataType === 2) {
      array = age_cdata
    } else {
      array = channel_cdata
    }
    for (let key of array) {
      totalPer += key.total
    }
    let value = item.total / totalPer * 100
    return value.toFixed(2) + '%'
  }
  getTotalCnt() {
    const {dataType} = this.state
    const {sex_cdata, age_cdata, channel_cdata} = this.props
    let totalPer = 0
    let array = []
    if (dataType === 1) {
      array = sex_cdata
    } else if (dataType === 2) {
      array = age_cdata
    } else {
      array = channel_cdata
    }
    for (let key of array) {
      totalPer += key.total
    }
    return totalPer
  }
  renderDetail() {
    const {dataType} = this.state
    const {sex_cdata, age_cdata, channel_cdata} = this.props
    let title = '性别'
    let array = [{}]
    switch (dataType) {
      case 1:
        title = '性别'
        array = sex_cdata
        break
      case 2:
        title = '年龄'
        array = age_cdata
        break
      case 3:
        title = '患者来源'
        array = channel_cdata
        break
      default :
        title = '性别'
        array = sex_cdata
        break
    }
    // console.log('sex_cdata====', array)
    return (
      <div>
        {this.renderCharts()}
        <div className={'listContent'}>
          <ul>
            <li>
              <div>患者分析-{title}</div>
            </li>
            <li>
              <div>{title}</div>
              <div>数量</div>
              <div>比例</div>
            </li>
            {array.map((item, index) => {
              return (
                <li key={index}>
                  <div>{this.getTitleValue(item)}</div>
                  <div>{item.total}</div>
                  <div>{this.getPercentValue(item)}</div>
                </li>
              )
            })}
            <li>
              <div>合计</div>
              <div>{this.getTotalCnt()}</div>
              <div>--</div>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .listContent {
            float: left;
            width: 1100px;
            margin-left: 66px;
            // background: #909090;
            margin-bottom: 20px;
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
          .listContent ul li:nth-child(1),
          .listContent ul li:nth-child(2) {
            background: rgba(250,250,250,1);
            box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
            font-weight: bold;
          }
          .listContent ul li:nth-child(1){
            font-size: 18px;
          }
          .listContent ul li>div {
            flex: 1;
            height: 40px;
            border-left: 1px solid #d8d8d8;
            line-height: 40px;
            text-align: center;
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
      </div>
    )
  }
  renderCharts() {
    const {dataType} = this.state
    return (
      <div>
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          {dataType === 1 ? this.renderSexTitle() : dataType === 2 ? this.renderAgeTitle() : this.renderComeTitle()}
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </div>
      </div>
    )
  }
  chartTitleStyle() {
    return (
      <style jsx>{`
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
    )
  }
  renderSexTitle() {
    const {sex_cdata} = this.props
    return (
      <div className={'leftTille'}>
        <ul>
          {sex_cdata.map((item, index) => {
            return (
              <li key={index}>
                <label>{item.sex === 0 ? '女' : '男'}</label>
                <i style={{ background: this.colorStyle()[index] }} />
              </li>
            )
          })}
        </ul>
        {this.chartTitleStyle()}
      </div>
    )
  }
  renderAgeTitle() {
    const {age_cdata} = this.props
    return (
      <div className={'leftTille'}>
        <ul>
          {age_cdata.map((item, index) => {
            return (
              <li key={index}>
                <label>{item.age}</label>
                <i style={{ background: this.colorStyle()[index] }} />
              </li>
            )
          })}
        </ul>
        {this.chartTitleStyle()}
      </div>
    )
  }
  colorStyle() {
    let style = [
      '#d95350',
      '#5bc0de',
      '#f0ad4e',
      '#1daf9a',
      '#428bca',
      '#749f83',
      '#797b7f',
      '#324b5c',
      '#9f876d'
    ]
    return style
  }
  renderComeTitle() {
    const {channel_cdata} = this.props
    return (
      <div className={'leftTille'}>
        <ul>
          {channel_cdata.map((item, index) => {
            return (
              <li key={index}>
                <label>{item.patient_channel_name}</label>
                <i style={{ background: this.colorStyle()[index] }} />
              </li>
            )
          })}
        </ul>
        {this.chartTitleStyle()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sex_cdata: state.patients.sex_cdata,
    age_cdata: state.patients.age_cdata,
    channel_cdata: state.patients.channel_cdata
  }
}
export default connect(mapStateToProps, {
  PatientCountBySex,
  PatientCountByAge,
  PatientCountByChannel
})(PatientScreen)
