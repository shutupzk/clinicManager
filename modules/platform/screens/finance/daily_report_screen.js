import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  ChargeDayReportByPayWay,
  ChargeDayReportByBusiness,
  queryClinicList
} from '../../../../ducks'
import { Select } from '../../../../components'
import { formatMoney } from '../../../../utils'

class DailyReportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment().add(-1, 'd').format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      clinic_id: '',
      zone: '',
      selectType: 1,
      selClinic: {}
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
    this.ChargeDayReportByPayWay()
  }
  ChargeDayReportByPayWay() {
    const {ChargeDayReportByPayWay} = this.props
    const {start_date, end_date, clinic_id} = this.state
    let reqData = {
      start_date, end_date
    }
    if (clinic_id !== '') {
      reqData.clinic_id = clinic_id
    }
    ChargeDayReportByPayWay(reqData)
    this.ChargeDayReportByBusiness()
  }
  ChargeDayReportByBusiness() {
    const {ChargeDayReportByBusiness} = this.props
    const {start_date, end_date, clinic_id} = this.state
    let reqData = {
      start_date, end_date
    }
    if (clinic_id !== '') {
      reqData.clinic_id = clinic_id
    }
    ChargeDayReportByBusiness(reqData)
  }
  getClinicOptions() {
    const {clinics} = this.props
    let array = []
    // console.log('clinics====', clinics)
    let f_item = {
      label: '全部',
      value: ''
    }
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
  render() {
    const {selectType} = this.state
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>收费日报表</span>
          <span onClick={() => Router.push('/platform/finance/monthlyReport')}>收费月报表</span>
        </div>
        <div className={'filterBox'} style={{ marginBottom: '20px' }}>
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
                onChange={({ value, label }) => {
                  this.setState({ clinic_id: value, selClinic: {value, label} })
                }}
              />
            </div>
            <div style={{ float: 'left', margin: '0 30px 0 0' }}>
              <label>
                <input
                  type='radio'
                  name='radio'
                  checked={this.state.selectType === 1}
                  onChange={() => {
                    this.setState({ selectType: 1 })
                  }} />
                按收费方式
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type='radio'
                  name='radio'
                  checked={this.state.selectType === 2}
                  onChange={() => {
                    this.setState({ selectType: 2 })
                  }} />
                按业务类型
              </label>
            </div>
            <button onClick={() => {
              if (selectType === 1) {
                this.ChargeDayReportByPayWay()
              } else {
                this.ChargeDayReportByBusiness()
              }
            }}>查询</button>
          </div>
          <div className={'boxRight'}>
            <button onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
        {selectType === 1 ? this.renderDetail() : this.renderDetail1()}
      </div>
    )
  }
  getTableStyle() {
    return (
      <style jsx='1'>{`
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
        .listContent ul li:nth-child(1) {
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
          font-weight: bold;
        }
        .listContent ul li>div {
          flex: 1;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          line-height: normal;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
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
    )
  }
  getTotalFee(key) {
    const {selectType} = this.state
    const {p_data, b_data} = this.props
    let total = 0
    let array = []
    if (selectType === 1) {
      array = p_data
    } else {
      array = b_data
    }
    for (let item of array) {
      total += item[key]
    }
    return total
  }
  renderDetail() {
    const {p_data} = this.props
    console.log('p_data=====', p_data)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            <li>
              <div><div>诊所名称</div></div>
              <div><div>费用合计</div></div>
              <div><div>折后金额</div></div>
              <div><div>实收合计</div></div>
              <div><div>现金</div></div>
              <div><div>银行卡</div></div>
              <div><div>微信当面付</div></div>
              <div><div>支付宝当面付</div></div>
              <div><div>积分抵扣</div></div>
              <div><div>医保支付</div></div>
              <div><div>挂账</div></div>
              <div><div>卡卷</div></div>
              <div><div>减免</div></div>
            </li>
            <li>
              <div><div>合计</div></div>
              <div><div>{formatMoney(this.getTotalFee('total_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('discount_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('balance_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('cash'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('bank'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('wechat'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('alipay'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('bonus_points_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('medical_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('on_credit_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('voucher_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('derate_money'))}</div></div>
            </li>
            {p_data.map((item, index) => {
              return (
                <li key={index}>
                  <div><div>{item.clinic_name}</div></div>
                  <div><div>{formatMoney(item.total_money)}</div></div>
                  <div><div>{formatMoney(item.discount_money)}</div></div>
                  <div><div>{formatMoney(item.balance_money)}</div></div>
                  <div><div>{formatMoney(item.cash)}</div></div>
                  <div><div>{formatMoney(item.bank)}</div></div>
                  <div><div>{formatMoney(item.wechat)}</div></div>
                  <div><div>{formatMoney(item.alipay)}</div></div>
                  <div><div>{formatMoney(item.bonus_points_money)}</div></div>
                  <div><div>{formatMoney(item.medical_money)}</div></div>
                  <div><div>{formatMoney(item.on_credit_money)}</div></div>
                  <div><div>{formatMoney(item.voucher_money)}</div></div>
                  <div><div>{formatMoney(item.derate_money)}</div></div>
                </li>
              )
            })}
          </ul>
        </div>
        {this.getTableStyle()}
      </div>
    )
  }
  renderDetail1() {
    const {b_data} = this.props
    console.log('b_data=====', b_data)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            <li>
              <div><div>诊所名称</div></div>
              <div><div>费用合计</div></div>
              <div><div>挂号费</div></div>
              <div><div>西药费</div></div>
              <div><div>中药费</div></div>
              <div><div>检验费</div></div>
              <div><div>检查费</div></div>
              <div><div>治疗费</div></div>
              <div><div>材料费</div></div>
              <div><div>药品零售</div></div>
              <div><div>其他费用</div></div>
            </li>
            <li>
              <div><div>合计</div></div>
              <div><div>{formatMoney(this.getTotalFee('total_money'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('diagnosis_treatment_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('western_medicine_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('traditional_medical_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('labortory_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('examination_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('treatment_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('material_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('retail_fee'))}</div></div>
              <div><div>{formatMoney(this.getTotalFee('other_fee'))}</div></div>
            </li>
            {b_data.map((item, index) => {
              return (
                <li key={index}>
                  <div><div>{item.clinic_name}</div></div>
                  <div><div>{formatMoney(item.total_money)}</div></div>
                  <div><div>{formatMoney(item.diagnosis_treatment_fee)}</div></div>
                  <div><div>{formatMoney(item.western_medicine_fee)}</div></div>
                  <div><div>{formatMoney(item.traditional_medical_fee)}</div></div>
                  <div><div>{formatMoney(item.labortory_fee)}</div></div>
                  <div><div>{formatMoney(item.examination_fee)}</div></div>
                  <div><div>{formatMoney(item.treatment_fee)}</div></div>
                  <div><div>{formatMoney(item.material_fee)}</div></div>
                  <div><div>{formatMoney(item.retail_fee)}</div></div>
                  <div><div>{formatMoney(item.other_fee)}</div></div>
                </li>
              )
            })}
          </ul>
        </div>
        {this.getTableStyle()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    p_data: state.financial.p_data,
    b_data: state.financial.b_data,
    clinics: state.clinics.data
  }
}
export default connect(mapStateToProps, {
  ChargeDayReportByPayWay,
  ChargeDayReportByBusiness,
  queryClinicList
})(DailyReportScreen)
