import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
import { getAgeByBirthday, formatMoney } from '../../../../utils'
import { queryUnPaidOrders } from '../../../../ducks'
import { PageCard } from '../../../../components'

class TollScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }
  async submit() {}
  back() {
    Router.push('/treatment')
  }

  componentDidMount() {
    const { charge_unpay_selectId, queryUnPaidOrders } = this.props
    queryUnPaidOrders({ clinic_triage_patient_id: charge_unpay_selectId })
  }

  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  // 费用详情
  renderFeeDetails() {
    if (this.state.pageType !== 1) return ''

    const { charge_unpay, charge_unpay_selectId, un_paid_orders, un_paid_orders_page, un_paid_orders_type } = this.props
    let triagePatient = {}

    for (let tp of charge_unpay) {
      if (tp.clinic_triage_patient_id === charge_unpay_selectId) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex } = triagePatient

    const { charge_total, discount_total, total, offset, limit } = un_paid_orders_page

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
          <div style={{ flex: 2 }}>就诊ID：{triagePatient.cert_no}</div>
          <div style={{ flex: 2 }}>手机号码：{phone}</div>
          <div style={{ flex: 3 }}>就诊日期：{moment(visit_date).format('YYYY年MM月DD日')}</div>
        </div>
        <div className={'filterBox'}>
          <div>费用合计：{formatMoney(charge_total)}元</div>
          <div>折扣金额：{formatMoney(discount_total)}元</div>
          <div />
          <div>应收费用：{formatMoney(charge_total - discount_total)}元</div>
        </div>
        <div className={'toatalFeeBox'}>
          <h4>分类汇总明细费用</h4>
          <ul>
            <li>西/成药费：{typeMap[1]}元</li>
            <li>中药费用：{typeMap[2]}元</li>
            <li>检验费用：{typeMap[3]}元</li>
            <li>检查费用：{typeMap[4]}元</li>
            <li>治疗费用：{typeMap[7]}元</li>
            <li>材料费用：{typeMap[5]}元</li>
            <li>其他费用：{typeMap[6]}元</li>
          </ul>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>序号</div>
              <div>收费名称</div>
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
                  <div>{item.name}</div>
                  <div>{formatMoney(item.price)}</div>
                  <div>{item.amount}</div>
                  <div>{formatMoney(item.total)}</div>
                  <div>{formatMoney(item.discount)}</div>
                  <div>{formatMoney(item.total - item.discount)}</div>
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
            this.props.queryUnPaidOrders({ clinic_triage_patient_id: this.props.charge_unpay_selectId, offset, limit })
          }}
        />
        <div className={'feeScheduleBottom'}>
          <button>打印</button>
          <button onClick={() => this.setState({ pageType: 2 })}>结账</button>
        </div>
        <style jsx>{`
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
  // 结账
  renderBill() {
    if (this.state.pageType !== 2) return ''

    return (
      <div className={'detailBox'}>
        <div className={'detailBoxTop'}>
          <div className={'topLeft'}>
            <div>
              <b>100</b>
              <a>元</a>
            </div>
            <div>应收金额</div>
          </div>
          <div className={'topRight'}>
            <div>业务类型：挂号费</div>
            <div>订单号：1234567890</div>
            <div>下单日期：20180409 12:11:13</div>
            <div>就诊日期：2018年4月10日</div>
            <div>就诊人姓名：王俊凯</div>
            <div>接诊医生：易烊千玺</div>
            <div>接诊科室：全科门诊</div>
          </div>
        </div>
        <div className={'detailBoxCenter'}>
          <ul>
            <li>
              <label>
                <input type='radio' />
                是否有折扣
              </label>
              <div>
                <input type='text' />%
              </div>
            </li>
            <li>
              <label>
                <input type='radio' />
                是否有减免
              </label>
              <div>
                <input type='text' />元
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' />
                医保支付
              </label>
              <div>
                <input type='text' />
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' />
                挂账金额
              </label>
              <div>
                <input type='text' />
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' />
                积分
              </label>
              <div>
                <input type='text' />
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' />
                抵金券
              </label>
              <div>
                <input type='text' />
              </div>
            </li>
          </ul>
          <div className={'checkoutPay'}>
            <span>还需支付80元</span>
            <div className={'payType'}>
              <button>支付宝</button>
              <button>微信</button>
              <button>银行卡</button>
              <button>现金</button>
            </div>
            <div className={'receipt'}>
              <div>
                <label>实际收款</label>
                <input type='text' />
              </div>
              <div>
                <label>找零</label>
                <input type='text' />
              </div>
            </div>
            <div className={'bottomBtn'}>
              <button style={{ float: 'left' }} onClick={() => this.setState({ pageType: 1 })}>
                返回筛查收费项目
              </button>
              <button style={{ float: 'right' }}>确定收费</button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .filterBox {
            margin: 20px 0 0 65px;
            display: flex;
            line-height: 60px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            min-height: 60px;
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
        {this.renderBill()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    charge_unpay: state.charge.charge_unpay,
    charge_unpay_selectId: state.charge.charge_unpay_selectId,
    un_paid_orders: state.charge.un_paid_orders,
    un_paid_orders_page: state.charge.un_paid_orders_page,
    un_paid_orders_type: state.charge.un_paid_orders_type
  }
}

export default connect(mapStateToProps, { queryUnPaidOrders })(TollScreen)
