import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  queryClinicList
} from '../../../../ducks'
import { Confirm, PageCard, Select } from '../../../../components'
import ReactEcharts from 'echarts-for-react'

class ProfitScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment()
        .add(3, 'd')
        .format('YYYY-MM-DD'),
      selClinic: ''
    }
  }
  componentDidMount() {
    this.queryClinicList()
  }
  async queryClinicList() {
    const {queryClinicList} = this.props
    let reqData = {
      status: 1,
      offset: 0,
      limit: 1000
    }
    let data = await queryClinicList(reqData)
    // console.log('data===', data)
    if (data) {
      this.setState({selClinic: {label: data[0].name, value: data[0].clinic_id}})
    }
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/operation/totalAmount')}>交易总额</span>
          <span className={'sel'}>利润</span>
          <span onClick={() => Router.push('/platform/operation/patient')}>患者分析</span>
          {/* <span onClick={() => Router.push('/platform/operation/diagnosis')}>诊断分析</span>
          <span onClick={() => Router.push('/platform/operation/drug')}>药品分析</span> */}
        </div>
        {this.renderFilter()}
        {this.renderDetail()}
      </div>
    )
  }
  getClinicOptions() {
    const {clinics} = this.props
    let array = []
    // console.log('clinics====', clinics)
    for (let key of clinics) {
      let item = {
        label: key.name,
        value: key.clinic_id
      }
      array.push(item)
    }
    // this.setState({selClinic: clinics[0]})
    return array
  }
  renderFilter() {
    const {selClinic} = this.state
    return (
      <div className={''}>
        <div className={'filterBox'}>
          <div className={'boxLeft'} style={{display: 'flex', alignItems: 'center'}}>
            <input
              style={{marginTop: 0}}
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              style={{marginTop: 0}}
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({ end_date: e.target.value })
              }}
            />
            <div style={{width: '200px', marginLeft: '10px'}}>
              <Select
                placeholder={'诊所名称'}
                height={32}
                value={selClinic}
                options={this.getClinicOptions()}
                onChange={({ value }) => {
                  this.setState({ status: value })
                }}
              />
            </div>
            <button style={{marginLeft: '20px'}} onClick={() => {
              // this.AdminList()
            }}>查询</button>
          </div>
          <div className={'boxRight'}>
            <button>导出</button>
          </div>
        </div>
        <style jsx>{`
          .boxLeft > input{
            margin-top: 0;
          }
        `}</style>
      </div>
    )
  }
  getOption() {
    // const {dataType} = this.state
    // const {sex_cdata, age_cdata, channel_cdata} = this.props
    // let array = []
    let data = []
    // if (dataType === 1) {
    //   array = sex_cdata
    // } else if (dataType === 2) {
    //   array = age_cdata
    // } else {
    //   array = channel_cdata
    // }
    // for (let i = 0; i < array.length; i++) {
    //   let item = {}
    //   if (dataType === 1) {
    //     if (array[i].sex === 0) {
    //       item.name = '女'
    //     } else {
    //       item.name = '男'
    //     }
    //   } else if (dataType === 2) {
    //     item.name = array[i].age
    //   } else {
    //     item.name = array[i].patient_channel_name
    //   }
    //   item.value = array[i].total
    //   item.itemStyle = {
    //     color: this.colorStyle()[i]
    //   }
    //   data.push(item)
    // }
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
  renderDetail() {
    const {start_date, end_date} = this.state
    let array = []
    return (
      <div>
        {this.renderCharts()}
        <div className={'listContent'}>
          <span className={'tableTitle'}>{moment(start_date).format('YYYY年-MM月-DD日')} —— {moment(end_date).format('MM月-DD日')} 利润表</span>
          <ul>
            <li>
              <div>收入分类</div>
              <div>收入</div>
              <div>成本</div>
              <div>利润</div>
            </li>
            {array.map((item, index) => {
              return (
                <li key={index}>
                  <div>收入分类</div>
                  <div>收入</div>
                  <div>成本</div>
                  <div>利润</div>
                </li>
              )
            })}
            <li>
              <div>合计</div>
              <div>收入</div>
              <div>成本</div>
              <div>利润</div>
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
    return (
      <div>
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          {this.renderTitle()}
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
  colorStyle() {
    let style = [
      '#d95350',
      '#5bc0de',
      '#f0ad4e',
      '#1daf9a',
      '#428bca',
      '#749f83',
      '#797b7f',
      '#324b5c'
    ]
    return style
  }
  renderTitle() {
    // const {sex_cdata} = this.props
    let sex_cdata = [
      {name: 'aaa'}
    ]
    return (
      <div className={'leftTille'}>
        <ul>
          {sex_cdata.map((item, index) => {
            return (
              <li key={index}>
                <label>{item.name}</label>
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
    clinics: state.clinics.data
  }
}
export default connect(mapStateToProps, {
  queryClinicList
})(ProfitScreen)
