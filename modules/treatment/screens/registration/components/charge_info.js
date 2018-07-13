import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PatientGetByID, PatientChargeList, queryPaidOrders } from '../../../../../ducks'
import { getAgeByBirthday, formatMoney } from '../../../../../utils'
import { PageCard } from '../../../../../components'
import moment from 'moment'

class ChargeInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body_sign: {},
      pre_medical_record: {},
      pre_diagnosis: {},
      patientInfo: {},
      showDetail: false
    }
  }

  async componentWillMount() {
    const { patient_id, PatientGetByID } = this.props
    let patient = await PatientGetByID({ patient_id })
    if (patient) {
      this.setState({ patientInfo: patient }, () => {
        this.PatientChargeList({})
      })
    }
  }

  async submit() {}

  PatientChargeList({ offset = 0, limit = 6 }) {
    const { PatientChargeList, patient_id } = this.props
    PatientChargeList({ patient_id, offset, limit })
  }

  renderChargeList() {
    const { patient_charge_data, patient_charge_page_info, queryPaidOrders } = this.props
    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td>收费时间</td>
                  <td>接诊诊所</td>
                  <td>收费状态</td>
                  <td>就诊时间</td>
                  <td>应收金额</td>
                  <td>实收金额</td>
                  <td>挂账</td>
                  <td style={{ flex: 2 }}>操作</td>
                </tr>
              </thead>
              <tbody>
                {patient_charge_data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                      <td>{item.clinic_name}</td>
                      <td>{item.in_out === 'in' ? '已收费' : '已退费'}</td>
                      <td>{moment(item.visit_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                      <td>{formatMoney(item.total_money)}</td>
                      <td>{formatMoney(item.balance_money)}</td>
                      <td>{formatMoney(item.on_credit_money)}</td>
                      <td style={{ flex: 2 }} className={'operTd'}>
                        <div>
                          <div
                            onClick={() => {
                              queryPaidOrders({ mz_paid_record_id: item.mz_paid_record_id })
                              this.setState({ showDetail: true, selectItem: item })
                            }}
                          >
                            查看详情
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <PageCard
              offset={patient_charge_page_info.offset}
              limit={patient_charge_page_info.limit}
              total={patient_charge_page_info.total}
              style={{ margin: '20px 0', width: '100%' }}
              onItemClick={({ offset, limit }) => {
                // const keyword = this.state.keyword
                this.PatientChargeList({ offset, limit })
              }}
            />
          </div>
        </div>
        <style jsx='true'>{`
          .contentCenterRight {
            width: 100%;
            height: 715px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 20px;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
          }
          .contentCenter {
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable {
            margin: 18px 32px;
            // background:#b0b0b0;
          }
          .tableContent {
          }
          .tableContent table {
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top: 1px solid #e8e8e8;
          }
          .tableContent table thead {
            background: rgba(250, 250, 250, 1);
            box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
          }
          .tableContent table tr {
            height: 40px;
            display: flex;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td {
            border-left: 1px solid #e8e8e8;
            height: 40px;
            // display: flex;
            align-items: center;
            flex: 1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd > div {
            margin: 0 auto;
            width: max-content;
          }
          .operTd > div > div {
            cursor: pointer;
            color: #2acdc8;
            float: left;
          }
          .operTd > div > div.divideLine {
            cursor: default;
            color: #e8e8e8;
            margin: 0 5px;
          }
        `}</style>
      </div>
    )
  }

  renderFeeDetails() {
    const { showDetail, patientInfo, selectItem } = this.state
    if (!showDetail) return null

    const { paid_orders, paid_orders_page, paid_orders_type } = this.props
    const { birthday, name, phone, sex } = patientInfo

    const { charge_total, discount_total, charge_total_fee, total, offset, limit } = paid_orders_page

    let typeMap = {}
    for (let item of paid_orders_type) {
      typeMap[item.charge_project_type_id] = formatMoney(item.type_charge_total)
    }

    let payMethodMap = { 1: '银行卡', 2: '支付宝', 3: '微信', 4: '现金' }

    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1220px', left: 'unset', height: 'unset', minHeight: '500px', marginBottom: '40px' }}>
          <div className='doctorList_top'>
            <span>收费详情</span>
            <span onClick={() => this.setState({ showDetail: false })}>x</span>
          </div>
          <div className={'detailBox'}>
            <div className={'filterBox'}>
              <div style={{ flex: 2 }}>就诊人姓名：{name}</div>
              <div style={{ flex: 1 }}>性别：{sex === 1 ? '男' : '女'}</div>
              <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(birthday)}</div>
              {/* <div style={{ flex: 2 }}>就诊ID：{cert_no}</div> */}
              <div style={{ flex: 2 }}>手机号码：{phone}</div>
              <div style={{ flex: 3 }}>就诊日期：{moment(selectItem.visit_date).format('YYYY年MM月DD日')}</div>
            </div>
            <div className={'filterBox'}>
              <div>费用合计：{formatMoney(charge_total)}元</div>
              <div>折扣金额：{formatMoney(discount_total)}元</div>
              <div>应收费用：{formatMoney(charge_total_fee)}元</div>
              <div>实收费用：{formatMoney(paid_orders_page.balance_money)}元</div>
            </div>
            <div className={'toatalFeeBox'}>
              <h4>优惠费用汇总</h4>
              <ul>
                <li>折扣金额：{formatMoney(paid_orders_page.discount_money)}元</li>
                <li>减免金额：{formatMoney(paid_orders_page.derate_money)}元</li>
                <li>医保金额：{formatMoney(paid_orders_page.medical_money)}元</li>
                <li>挂账金额：{formatMoney(paid_orders_page.on_credit_money)}元</li>
                <li>积分抵扣：{formatMoney(paid_orders_page.bonus_points_money)}元</li>
                <li>代金券：{formatMoney(paid_orders_page.voucher_money)}元</li>
                <li />
                <li />
                <li>缴费时间：{moment(paid_orders_page.updated_time).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>订单号：{paid_orders_page.out_trade_no}</li>
                <li>支付方式：{payMethodMap[paid_orders_page.pay_method_code]}</li>
                <li>第三方订单号：{paid_orders_page.trade_no}</li>
              </ul>
            </div>
            <div className={'toatalFeeBox'}>
              <h4>分类汇总明细费用</h4>
              <ul>
                <li>西/成药费：{typeMap[1] || '0.00'}元</li>
                <li>中药费用：{typeMap[2] || '0.00'}元</li>
                <li>检验费用：{typeMap[3] || '0.00'}元</li>
                <li>检查费用：{typeMap[4] || '0.00'}元</li>
                <li>治疗费用：{typeMap[7] || '0.00'}元</li>
                <li>材料费用：{typeMap[5] || '0.00'}元</li>
                <li>其他费用：{typeMap[6] || '0.00'}元</li>
                <li>诊疗费用：{typeMap[8] || '0.00'}元</li>
              </ul>
            </div>
            <div className={'feeScheduleBox'}>
              <ul>
                <li>
                  <div>序号</div>
                  <div style={{ flex: 3 }}>收费名称</div>
                  <div>单价</div>
                  <div>数量</div>
                  <div>金额</div>
                  <div>折扣</div>
                  <div>折后金额</div>
                  <div>开费科室</div>
                  <div>开费医生</div>
                </li>
                {paid_orders.map((item, iKey) => {
                  return (
                    <li key={iKey}>
                      <div>{iKey + 1}</div>
                      <div style={{ flex: 3 }}>{item.name}</div>
                      <div>{formatMoney(item.price)}</div>
                      <div>{item.amount}</div>
                      <div>{formatMoney(item.total)}</div>
                      <div>{formatMoney(item.discount)}</div>
                      <div>{formatMoney(item.fee)}</div>
                      <div>{item.department_name}</div>
                      <div>{item.doctor_name}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <PageCard
              offset={offset}
              limit={limit}
              total={total}
              onItemClick={({ offset, limit }) => {
                this.props.queryPaidOrders({ mz_paid_record_id: selectItem.mz_paid_record_id, offset, limit })
              }}
            />
            <style jsx='true'>{`
              .filterBox {
                margin: 20px 0 0 65px;
                display: flex;
                line-height: 60px;
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: rgba(102, 102, 102, 1);
              }
              .filterBox div {
                flex: 1;
                text-align: center;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  }

  // 就诊信息
  showVisitInfo() {
    const { patientInfo } = this.state
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：{patientInfo.name}</div>
          <div style={{ flex: 1 }}>性别：{patientInfo.sex === 0 ? '女' : '男'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
          <div>就诊ID：</div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
        <div className={'blankBox'}>{this.renderChargeList()}</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showVisitInfo()}
        {this.renderFeeDetails()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    clinic_id: state.user.data.clinic_id,
    patient_id: state.patients.selectId,
    patient_charge_data: state.charge.patient_charge_data,
    patient_charge_page_info: state.charge.patient_charge_page_info,
    paid_orders: state.charge.paid_orders,
    paid_orders_page: state.charge.paid_orders_page,
    paid_orders_type: state.charge.paid_orders_type
  }
}
export default connect(
  mapStateToProps,
  { PatientGetByID, PatientChargeList, queryPaidOrders }
)(ChargeInfoScreen)
