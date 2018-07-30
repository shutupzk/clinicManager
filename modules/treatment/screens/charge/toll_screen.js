import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import moment from 'moment'
import { getAgeByBirthday, formatMoney, limitMoney } from '../../../../utils'
import { queryUnPaidOrders, createPayment, queryPaymentStatus } from '../../../../ducks'
import { PageCard, Confirm, Loading } from '../../../../components'

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
      charge_money: '', // 收费金额
      showCode: false, // 展示授权码
      authCode: '', // 认证码
      payStatus: '待提交',
      showLoading: false,
      tradeNo: '' // 交易号
    }

    this.queryTimes = 0
    this.disabled = false // 无法连续提交
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // 定时获取订单状态
  async tick() {
    this.queryTimes += 1
    if (this.state.payStatus !== '缴费中[待用户输密码]') return clearInterval(this.interval)
    if (this.queryTimes >= 7) {
      clearInterval(this.interval)
      this.setState({ payStatus: '支付超时！', showLoading: false })
    }

    const res = await this.props.queryPaymentStatus({ out_trade_no: this.state.tradeNo })

    if (res && res.trade_status === 'SUCCESS') {
      this.setState({ payStatus: '支付成功', showLoading: false })
    }

    if (res && res.trade_status === 'CLOSE') {
      this.setState({ payStatus: '已关闭/已撤销', showLoading: false })
    }
  }

  async submit() {
    const { un_paid_orders_page } = this.props
    let { selectType, discount, derate, bonus_points_money, on_credit_money, medical_money, voucher_money, charge_money, pay_method } = this.state
    let derate_money = selectType === 2 && derate ? Math.round(derate * 100) : 0
    let discount_money = selectType === 1 && discount ? Math.round(un_paid_orders_page.charge_total_fee * ((100 - discount) / 100)) : 0
    let bonus_points_money_int = Math.round(bonus_points_money * 100)
    let on_credit_money_int = Math.round(on_credit_money * 100)
    let medical_money_int = Math.round(medical_money * 100)
    let voucher_money_int = Math.round(voucher_money * 100)
    let charge_money_int = charge_money ? Math.round(charge_money * 100) : 0
    let should_money = un_paid_orders_page.charge_total_fee - derate_money - discount_money - bonus_points_money_int - on_credit_money_int - medical_money_int - voucher_money_int
    if (pay_method === 4 && charge_money_int < should_money) {
      return this.refs.myAlert.alert('提交失败', '收费金额小于应收金额，请检查后重新提交！', '', 'Warning')
    }

    if (pay_method === 1 || pay_method === 2) {
      this.setState({ showCode: true })
    } else if (pay_method === 3) {
      this.refs.myAlert.alert('暂不支持该收款方式', '', null, 'Warning')
    } else {
      this.payOrder()
    }
  }

  async payOrder() {
    if (this.disabled) return
    const { un_paid_orders_ids, charge_unpay_selectId, createPayment, operation_id, un_paid_orders_page } = this.props
    this.disabled = true
    this.setState({ showLoading: true })
    let { medical_money, discount, pay_method, authCode, selectType, bonus_points_money, on_credit_money, voucher_money } = this.state
    let derate_money = selectType === 2 && derate ? Math.round(derate * 100) : 0
    let discount_money = selectType === 1 && discount ? Math.round(un_paid_orders_page.charge_total_fee * ((100 - discount) / 100)) : 0
    let bonus_points_money_int = Math.round(bonus_points_money * 100)
    let on_credit_money_int = Math.round(on_credit_money * 100)
    let medical_money_int = Math.round(medical_money * 100)
    let voucher_money_int = Math.round(voucher_money * 100)
    let should_money = un_paid_orders_page.charge_total_fee - derate_money - discount_money - bonus_points_money_int - on_credit_money_int - medical_money_int - voucher_money_int
    let res = await createPayment({
      discount_money: discount_money,
      derate_money: derate_money,
      medical_money: medical_money_int,
      on_credit_money: on_credit_money_int,
      voucher_money: voucher_money_int,
      bonus_points_money: bonus_points_money_int,
      clinic_triage_patient_id: charge_unpay_selectId,
      orders_ids: un_paid_orders_ids,
      operation_id,
      pay_method_code: pay_method,
      balance_money: should_money,
      auth_code: authCode
    })
    this.disabled = false
    this.setState({ showLoading: false })
    if (pay_method === 1 || pay_method === 2) {
      if (res && res.code === '200') {
        this.setState({ payStatus: '支付成功' })
      } else if (res && res.code === '300') {
        this.setState({ payStatus: '缴费中[待用户输密码]', showLoading: true, tradeNo: res.data })
        this.interval = setInterval(() => this.tick(), 5000)
      } else {
        this.setState({ payStatus: '缴费失败' + `[${(res && res.msg) || '未知原因'}]` })
      }
    } else {
      if (res && res.code === '200') {
        this.refs.myAlert.alert('缴费成功', '', () => {
          Router.push('/treatment/charge')
        })
      } else {
        this.refs.myAlert.alert('缴费失败', `${(res && res.msg) || '未知原因'}`, null, 'Warning')
      }
    }
  }

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
          <div style={{ flex: 2 }}>病人ID：{triagePatient.cert_no}</div>
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
              <div style={{ flex: 3 }}>收费名称</div>
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
            this.props.queryUnPaidOrders({ clinic_triage_patient_id: this.props.charge_unpay_selectId, offset, limit })
          }}
        />
        <div className={'feeScheduleBottom'}>
          <button>打印</button>
          <button onClick={() => this.setState({ pageType: 2 })}>结账</button>
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
  // 选择是折扣 还是 减免
  selectType(value) {
    let type = this.state.selectType
    if (type !== value) {
      let set = { selectType: value }
      if (value === 1) set.derate = ''
      else set.discount = ''
      this.setState({ ...set })
    } else {
      this.setState({ selectType: 0, discount: '', derate: '' })
    }
  }

  //  设置折扣金额
  setDiscount(discountRate) {
    let value = discountRate.replace(/[^0-9]+/, '')
    if (value === '') return this.setState({ discount: '' })
    value *= 1
    if (value <= 0 || value >= 100) return null
    this.setState({ discount: value })
  }

  // 设置选择
  setCheck(type) {
    let { yb_check, gz_check, jf_check, djq_check } = this.state
    switch (type) {
      case 1: {
        let set = { yb_check: !yb_check }
        if (yb_check) set.medical_money = ''
        this.setState(set)
        break
      }
      case 2: {
        let set = { gz_check: !gz_check }
        if (gz_check) set.on_credit_money = ''
        this.setState(set)
        break
      }
      case 3: {
        let set = { jf_check: !jf_check }
        if (jf_check) set.bonus_points_money = ''
        this.setState(set)
        break
      }
      case 4: {
        let set = { djq_check: !djq_check }
        if (djq_check) set.voucher_money = ''
        this.setState(set)
        break
      }
      default:
        return null
    }
  }

  //  设置减免金额
  setDerate(derate) {
    if (derate === '0.00') return null
    this.setState({ derate: limitMoney(derate) })
  }
  // 结账
  renderBill() {
    if (this.state.pageType !== 2) return ''

    const { un_paid_orders_page, charge_unpay, charge_unpay_selectId } = this.props
    let triagePatient = {}
    for (let tp of charge_unpay) {
      if (tp.clinic_triage_patient_id === charge_unpay_selectId) triagePatient = tp
    }

    let { selectType, discount, derate, bonus_points_money, on_credit_money, medical_money, voucher_money } = this.state
    let derate_money = selectType === 2 && derate ? Math.round(derate * 100) : 0
    let discount_money = selectType === 1 && discount ? Math.round(un_paid_orders_page.charge_total_fee * ((100 - discount) / 100)) : 0
    let bonus_points_money_int = Math.round(bonus_points_money * 100)
    let on_credit_money_int = Math.round(on_credit_money * 100)
    let medical_money_int = Math.round(medical_money * 100)
    let voucher_money_int = Math.round(voucher_money * 100)

    let should_money = un_paid_orders_page.charge_total_fee - derate_money - discount_money - bonus_points_money_int - on_credit_money_int - medical_money_int - voucher_money_int

    return (
      <div className={'detailBox'}>
        <div className={'detailBoxTop'}>
          <div className={'topLeft'}>
            <div>
              <b>{formatMoney(un_paid_orders_page.charge_total_fee)}</b>
              <a>元</a>
            </div>
            <div>应收金额</div>
          </div>
          <div className={'topRight'}>
            <div>业务类型：门诊缴费</div>
            <div>就诊日期：{moment(triagePatient.visit_date).format('YYYY-MM-DD')}</div>
            <div>就诊人姓名：{triagePatient.patient_name}</div>
            <div>接诊医生：{triagePatient.doctor_name}</div>
            <div>接诊科室：{triagePatient.department_name}</div>
          </div>
        </div>
        <div className={'detailBoxCenter'}>
          <ul>
            <li>
              <label>
                <input type='radio' name='radio' checked={this.state.selectType === 1} onClick={() => this.selectType(1)} />
                是否有折扣
              </label>
              <div>
                <input type='text' disabled={this.state.selectType !== 1} value={this.state.discount} onChange={e => this.setDiscount(e.target.value)} />%
              </div>
            </li>
            <li>
              <label>
                <input type='radio' name='radio' checked={this.state.selectType === 2} onClick={() => this.selectType(2)} />
                是否有减免
              </label>
              <div>
                <input type='text' disabled={this.state.selectType !== 2} value={this.state.derate} onChange={e => this.setDerate(e.target.value)} />元
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' checked={this.state.yb_check} onClick={() => this.setCheck(1)} />
                医保支付
              </label>
              <div>
                <input
                  type='text'
                  value={this.state.medical_money}
                  disabled={!this.state.yb_check}
                  onChange={e => {
                    this.setState({ medical_money: limitMoney(e.target.value) })
                  }}
                />元
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' checked={this.state.gz_check} onClick={() => this.setCheck(2)} />
                挂账金额
              </label>
              <div>
                <input
                  type='text'
                  value={this.state.on_credit_money}
                  disabled={!this.state.gz_check}
                  onChange={e => {
                    this.setState({ on_credit_money: limitMoney(e.target.value) })
                  }}
                />元
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' checked={this.state.jf_check} onClick={() => this.setCheck(3)} />
                积分
              </label>
              <div>
                <input
                  type='text'
                  value={this.state.bonus_points_money}
                  disabled={!this.state.jf_check}
                  onChange={e => {
                    this.setState({ bonus_points_money: limitMoney(e.target.value) })
                  }}
                />元
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' checked={this.state.djq_check} onClick={() => this.setCheck(4)} />
                抵金券
              </label>
              <div>
                <input
                  type='text'
                  value={this.state.voucher_money}
                  disabled={!this.state.djq_check}
                  onChange={e => {
                    this.setState({ voucher_money: limitMoney(e.target.value) })
                  }}
                />元
              </div>
            </li>
          </ul>
          <div className={'checkoutPay'}>
            <span>还需支付 {formatMoney(should_money)} 元</span>
            <div className={'payType'}>
              <button className={this.state.pay_method === 1 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 1 })}>
                支付宝
              </button>
              <button className={this.state.pay_method === 2 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 2 })}>
                微信
              </button>
              <button className={this.state.pay_method === 3 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 3 })}>
                银行卡
              </button>
              <button className={this.state.pay_method === 4 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 4 })}>
                现金
              </button>
            </div>
            {this.state.pay_method === 4 && (
              <div className={'receipt'}>
                <div>
                  <label>实际收款</label>
                  <input type='text' value={this.state.charge_money} onChange={e => this.setState({ charge_money: limitMoney(e.target.value) })} />
                </div>
                <div>
                  <label>找零</label>
                  <input type='text' disabled value={this.state.charge_money ? formatMoney(Math.round(this.state.charge_money * 100) - should_money) : ''} />
                </div>
              </div>
            )}
            <div className={'bottomBtn'}>
              <button style={{ float: 'left' }} onClick={() => this.setState({ pageType: 1 })}>
                返回筛查收费项目
              </button>
              <button style={{ float: 'right', marginLeft: '10px' }} onClick={() => this.submit()}>
                确定收费
              </button>
            </div>
          </div>
        </div>
        <Confirm ref='myAlert' />
        <style jsx='true'>{`
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

  // 展示授权码
  renderAuthCode() {
    if (!this.state.showCode) return null
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '800px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>
              {this.state.pay_method === 2 ? '微信' : '支付宝'}
              {'当面付'}
            </span>
            <span onClick={() => this.setState({ showCode: false, payStatus: '待提交', authCode: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '100%', marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
              <span>付款码授权码，请用扫码枪扫码获取</span>
              <input
                style={{ background: 'rgba(255,255,255,1)', width: '80%', marginTop: '4px', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                value={this.state.authCode}
                onChange={e => {
                  this.setState({ authCode: e.target.value })
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: '20px' }}>
              <div>{this.state.payStatus}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: '40px' }}>
              {this.state.payStatus === '待提交' && (
                <div className='codeDiv'>
                  <button onClick={() => this.payOrder()}>提交</button>
                </div>
              )}
              {this.state.payStatus === '支付成功' && (
                <div className='codeDiv'>
                  <button onClick={() => Router.push('/treatment/charge')}>确定</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <style jsx='true'>{`
          .codeDiv button {
            width: 150px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            color: rgba(42, 205, 200, 1);
            font-size: 14px;
            border: 1px solid #2acdc8;
            cursor: pointer;
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
        {this.renderAuthCode()}
        <Loading {...this.state} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    charge_unpay: state.charge.charge_unpay,
    charge_unpay_selectId: state.charge.charge_unpay_selectId,
    un_paid_orders: state.charge.un_paid_orders,
    un_paid_orders_page: state.charge.un_paid_orders_page,
    un_paid_orders_ids: state.charge.un_paid_orders_page.totalIds,
    un_paid_orders_type: state.charge.un_paid_orders_type
  }
}

export default connect(
  mapStateToProps,
  { queryUnPaidOrders, createPayment, queryPaymentStatus }
)(TollScreen)
