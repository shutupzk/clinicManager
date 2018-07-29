import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { getAgeByBirthday, formatMoney } from '../../../../utils'
import { queryPaidOrders } from '../../../../ducks'
import { PageCard } from '../../../../components'

class ChargedDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refundStatus: false // 退费状态
    }
  }

  componentDidMount() {
    const { charge_paid_triage_selectId, queryPaidOrders } = this.props
    queryPaidOrders({ mz_paid_record_id: charge_paid_triage_selectId })
  }

  submit() {
    console.log('提交')
  }

  // 费用详情
  renderFeeDetails() {
    const { charge_paid_triage, charge_paid_triage_selectId, paid_orders, paid_orders_page, paid_orders_type } = this.props
    const { refundStatus } = this.state
    let triagePatient = {}
    for (let tp of charge_paid_triage) {
      if (tp.mz_paid_record_id === charge_paid_triage_selectId) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex } = triagePatient
    const { charge_total, discount_total, charge_total_fee, total, offset, limit } = paid_orders_page

    let typeMap = {}
    for (let item of paid_orders_type) {
      typeMap[item.charge_project_type_id] = formatMoney(item.type_charge_total)
    }

    let payMethodMap = { 1: '支付宝', 2: '微信', 3: '银行卡', 4: '现金' }

    return (
      <div className={'detailBox'}>
        <div className={'filterBox'}>
          <div style={{ flex: 2 }}>就诊人姓名：{patient_name}</div>
          <div style={{ flex: 1 }}>性别：{sex === 1 ? '男' : '女'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(birthday)}</div>
          <div style={{ flex: 2 }}>就诊ID：{triagePatient.cert_no}</div>
          <div style={{ flex: 2 }}>手机号码：{phone}</div>
          <div style={{ flex: 3 }}>就诊日期：{moment(visit_date).format('YYYY年MM月DD日')}</div>
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
            <li style={{ width: '25%' }}>缴费时间：{moment(paid_orders_page.updated_time).format('YYYY-MM-DD HH:mm:ss')}</li>
            <li style={{ width: '25%' }}>订单号：{paid_orders_page.out_trade_no}</li>
            <li style={{ width: '20%' }}>支付方式：{payMethodMap[paid_orders_page.pay_method_code]}</li>
            <li style={{ width: '30%' }}>第三方订单号：{paid_orders_page.trade_no}</li>
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
            this.props.queryPaidOrders({ mz_paid_record_id: this.props.charge_paid_triage_selectId, offset, limit })
          }}
        />
        <div className={'feeScheduleBottom'}>
          <button>打印</button>
          {!refundStatus ? <button onClick={() => this.setState({ refundStatus: true })}>退费</button> : <button onClick={() => this.submit()}>确定</button>}
        </div>
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
    )
  }

  render() {
    return <div>{this.renderFeeDetails()}</div>
  }
}

const mapStateToProps = state => {
  return {
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    charge_paid_triage: state.charge.charge_paid_triage,
    charge_paid_triage_selectId: state.charge.charge_paid_triage_selectId,
    paid_orders: state.charge.paid_orders,
    paid_orders_page: state.charge.paid_orders_page,
    paid_orders_type: state.charge.paid_orders_type
  }
}

export default connect(
  mapStateToProps,
  { queryPaidOrders }
)(ChargedDetailScreen)
