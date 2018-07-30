import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { getAgeByBirthday, formatMoney } from '../../../../../utils'
import { queryUnPaidOrders, createPayment } from '../../../../../ducks'
import { PageCard } from '../../../../../components'

class TollScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      yb_check: false, // 医保
      gz_check: false, // 挂账
      jf_check: false, // 积分
      djq_check: false, // 抵金券
      pay_method: 4, // 支付方式,默认现金
      selectType: 0,
      discount: '', //  折扣
      derate: '', // 减免金额
      bonus_points_money: '', // 抵金券
      on_credit_money: '', // 挂账
      medical_money: '', // 医保金额
      voucher_money: '', // 抵金券
      charge_money: '' // 收费金额
    }
  }

  componentDidMount() {
    const { clinic_triage_patient_id, queryUnPaidOrders } = this.props
    console.log('clinic_triage_patient_id ======', clinic_triage_patient_id)
    queryUnPaidOrders({ clinic_triage_patient_id: clinic_triage_patient_id })
  }

  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  // 费用详情
  renderFeeDetails() {
    if (this.state.pageType !== 1) return ''

    const { triagePatients, clinic_triage_patient_id, un_paid_orders, un_paid_orders_page, un_paid_orders_type } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex } = triagePatient

    const { charge_total, discount_total, charge_total_fee, total, offset, limit } = un_paid_orders_page

    let typeMap = {}
    for (let item of un_paid_orders_type) {
      typeMap[item.charge_project_type_id] = formatMoney(item.type_charge_total)
    }

    return (
      <div className={'detailBox'}>
        <div className={'filterBox'}>
          <div style={{ flex: 2 }}>就诊人姓名：{patient_name}</div>
          <div style={{ flex: 1 }}>性别：{sex === 1 ? '男' : '女'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(birthday)}</div>
          <div style={{ flex: 2 }}>病人ID：{triagePatient.patient_id}</div>
          <div style={{ flex: 2 }}>手机号码：{phone}</div>
          <div style={{ flex: 3 }}>就诊日期：{moment(visit_date).format('YYYY年MM月DD日')}</div>
        </div>
        <div className={'filterBox'}>
          <div>费用合计：{formatMoney(charge_total)}元</div>
          <div>折扣金额：{formatMoney(discount_total)}元</div>
          <div />
          <div>应收费用：{formatMoney(charge_total_fee)}元</div>
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
              <div style={{flex: 3}}>收费名称</div>
              <div>单价</div>
              <div>数量</div>
              <div>金额</div>
              <div>折扣</div>
              <div>折后金额</div>
              <div>开费科室</div>
              <div>开费医生</div>
            </li>
            {un_paid_orders.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{iKey + 1}</div>
                  <div style={{flex: 3}}>{item.name}</div>
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
            this.props.queryUnPaidOrders({ clinic_triage_patient_id: this.props.clinic_triage_patient_id, offset, limit })
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
    )
  }

  render() {
    return (
      <div>
        {this.renderFeeDetails()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    operation_id: state.user.data.id,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triagePatients: state.triagePatients.data,
    clinic_id: state.user.data.clinic_id,
    charge_unpay: state.charge.charge_unpay,
    un_paid_orders: state.charge.un_paid_orders,
    un_paid_orders_page: state.charge.un_paid_orders_page,
    un_paid_orders_ids: state.charge.un_paid_orders_page.totalIds,
    un_paid_orders_type: state.charge.un_paid_orders_type
  }
}

export default connect(mapStateToProps, { queryUnPaidOrders, createPayment })(TollScreen)
