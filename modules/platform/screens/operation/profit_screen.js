import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  queryClinicList,
  ProfitReport
} from '../../../../ducks'
import { Select } from '../../../../components'
import { formatMoney } from '../../../../utils'
import ReactEcharts from 'echarts-for-react'

class ProfitScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment()
        .add(3, 'd')
        .format('YYYY-MM-DD'),
      selClinic: '',
      clinic_id: '',
      tableData: []
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
    this.ProfitReport()
  }
  ProfitReport () {
    const {ProfitReport} = this.props
    const {start_date, end_date, clinic_id} = this.state
    let reqData = {
      start_date,
      end_date
    }
    if (clinic_id !== '') {
      reqData.clinic_id = clinic_id
    }
    ProfitReport(reqData)
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
    let f_item = {label: '全部', value: ''}
    array.push(f_item)
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
    // const {selClinic} = this.state
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
                // value={selClinic}
                options={this.getClinicOptions()}
                onChange={({ value }) => {
                  this.setState({ clinic_id: value })
                }}
              />
            </div>
            <button style={{marginLeft: '20px'}} onClick={() => {
              this.ProfitReport()
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
    let array = this.getTableData()
    let data = []
    for (let i = 0; i < array.length; i++) {
      let item = {
        name: array[i].name,
        value: formatMoney(array[i].profit),
        itemStyle: {
          color: this.colorStyle()[i]
        }
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
  getTableData () {
    const {r_data} = this.props
    console.log('r_data===', r_data)
    let item = r_data
    let array = []
    if (item !== null) {
      array = [
        {
          name: '西/成药处方',
          cost: item.total_western_medicine_cost,
          fee: item.total_western_medicine_fee,
          profit: item.total_western_medicine_fee - item.total_western_medicine_cost
        },
        {
          name: '中药处方',
          cost: item.total_traditional_medical_cost,
          fee: item.total_traditional_medical_fee,
          profit: item.total_traditional_medical_fee - item.total_traditional_medical_cost
        },
        {
          name: '检查费',
          cost: item.total_examination_cost,
          fee: item.total_examination_fee,
          profit: item.total_examination_fee - item.total_examination_cost
        },
        {
          name: '检验费',
          cost: item.total_labortory_cost,
          fee: item.total_labortory_fee,
          profit: item.total_labortory_fee - item.total_labortory_cost
        },
        {
          name: '治疗费',
          cost: item.total_treatment_cost,
          fee: item.total_treatment_fee,
          profit: item.total_treatment_fee - item.total_treatment_cost
        },
        {
          name: '材料费',
          cost: item.total_material_cost,
          fee: item.total_material_fee,
          profit: item.total_material_fee - item.total_material_cost
        },
        {
          name: '其他费用',
          cost: item.total_other_cost,
          fee: item.total_other_fee,
          profit: item.total_other_fee - item.total_other_cost
        },
        {
          name: '诊断费用',
          cost: item.total_diagnosis_treatment_cost,
          fee: item.total_diagnosis_treatment_fee,
          profit: item.total_diagnosis_treatment_fee - item.total_diagnosis_treatment_cost
        },
        {
          name: '零售费',
          cost: item.total_retail_cost,
          fee: item.total_retail_fee,
          profit: item.total_retail_fee - item.total_retail_cost
        }
      ]
    }
    return array
  }
  getTotalFee(key) {
    let total = 0
    let array = this.getTableData()
    for (let item of array) {
      total += item[key]
    }
    return total
  }
  renderDetail() {
    const {start_date, end_date} = this.state
    // const {r_data} = this.props
    let array = this.getTableData()
    // console.log('array====', array)
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
                  <div>{item.name}</div>
                  <div>{formatMoney(item.fee)}</div>
                  <div>{formatMoney(item.cost)}</div>
                  <div>{formatMoney(item.profit)}</div>
                </li>
              )
            })}
            <li>
              <div>合计</div>
              <div>{formatMoney(this.getTotalFee('fee'))}</div>
              <div>{formatMoney(this.getTotalFee('cost'))}</div>
              <div>{formatMoney(this.getTotalFee('profit'))}</div>
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
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px', marginTop: '20px' }}>
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
          width: 105px;
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
      '#290a7c',
      '#324b5c'
    ]
    return style
  }
  renderTitle() {
    let array = this.getTableData()
    return (
      <div className={'leftTille'}>
        <ul>
          {array.map((item, index) => {
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
    clinics: state.clinics.data,
    r_data: state.financial.r_data
  }
}
export default connect(mapStateToProps, {
  queryClinicList,
  ProfitReport
})(ProfitScreen)
