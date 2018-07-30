import { Component } from 'react'
import { connect } from 'react-redux'
import { queryCreditRecordList } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday, formatMoney, createTradeNo, limitMoney } from '../../../../utils'
import { PageCard, Confirm } from '../../../../components'

class AlreadyChargedDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      pay_method: 4,
      charge_money: '',
      item: {}
    }
  }

  componentDidMount() {
    const { triage_list_selectId, queryCreditRecordList } = this.props
    queryCreditRecordList({ clinic_triage_patient_id: triage_list_selectId })
  }

  submit() {
    return null
  }

  // 还账
  chargeItem(item) {
    this.setState({ pageType: 2, item })
  }

  renderRecords() {
    if (this.state.pageType === 2) return null
    const { triage_list_selectId, triage_list, record_list, record_list_page } = this.props
    let { offset, limit, total, already_pay_money_total, on_credit_money_total } = record_list_page
    let triagePatient = {}
    for (let tp of triage_list) {
      if (tp.clinic_triage_patient_id === triage_list_selectId) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex } = triagePatient

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
        <div className={'toatalFeeBox'}>
          <h4>收费总览</h4>
          <ul>
            <li />
            <li>收费总额：{formatMoney(on_credit_money_total)}元</li>
            <li>挂账总额：{formatMoney(on_credit_money_total - already_pay_money_total)}元</li>
            <li />
          </ul>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>序号</div>
              <div>收费时间</div>
              <div>诊所名称</div>
              <div>收费状态</div>
              <div>就诊时间</div>
              <div>接诊科室</div>
              <div>接诊医生</div>
              <div>应收金额</div>
              <div>实收金额</div>
              <div>挂账金额</div>
              <div>操作</div>
            </li>
            {record_list.map((item, iKey) => {
              let status = item.already_pay_money === 0
              return (
                <li key={iKey}>
                  <div>{iKey + 1}</div>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{item.clinic_name}</div>
                  <div>{status ? '已挂账' : '已还款'}</div>
                  <div>{moment(item.visit_date).format('YYYY-MM-DD')}</div>
                  <div>{item.department_name}</div>
                  <div>{item.doctor_name}</div>
                  <div>{formatMoney(item.on_credit_money)}</div>
                  <div>{formatMoney(item.already_pay_money)}</div>
                  <div>{formatMoney(item.on_credit_money - item.already_pay_money)}</div>
                  <div
                    style={{ cursor: status ? 'pointer' : 'none' }}
                    onClick={
                      status
                        ? () => {
                          this.chargeItem(item)
                        }
                        : null
                    }
                  >
                    {status ? '还款' : ''}
                  </div>
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
            this.props.queryCreditRecordList({ clinic_triage_patient_id: this.props.triage_list_selectId, offset, limit })
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

  renderCharge() {
    if (this.state.pageType === 1) return null
    const { item } = this.state
    const { triage_list_selectId, triage_list, clinic_id } = this.props
    let triagePatient = {}
    for (let tp of triage_list) {
      if (tp.clinic_triage_patient_id === triage_list_selectId) triagePatient = tp
    }
    const tradeNo = clinic_id + createTradeNo()
    const orderTime = moment().format('YYYY-MM-DD HH:mm:ss')
    return (
      <div className={'detailBox'}>
        <div className={'detailBoxTop'}>
          <div className={'topLeft'}>
            <div>
              <b>{formatMoney(item.on_credit_money)}</b>
              <a>元</a>
            </div>
            <div>应收金额</div>
          </div>
          <div className={'topRight'}>
            <div>业务类型：挂账还款</div>
            <div>订单号：{tradeNo}</div>
            <div>下单日期：{orderTime}</div>
            <div>就诊日期：{moment(triagePatient.visit_date).format('YYYY-MM-DD')}</div>
            <div>就诊人姓名：{triagePatient.patient_name}</div>
            <div>接诊医生：{triagePatient.doctor_name}</div>
            <div>接诊科室：{triagePatient.department_name}</div>
          </div>
        </div>
        <div className={'detailBoxCenter'}>
          <div className={'checkoutPay'} style={{ marginTop: '50px', height: '500px' }}>
            <span>还需支付 {formatMoney(item.on_credit_money)} 元</span>
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
            <div className={'receipt'}>
              <div>
                <label>实际收款</label>
                <input type='text' value={this.state.charge_money} onChange={e => this.setState({ charge_money: limitMoney(e.target.value) })} />
              </div>
              <div>
                <label>找零</label>
                <input type='text' disabled value={this.state.charge_money ? formatMoney(Math.round(this.state.charge_money * 100) - item.on_credit_money) : ''} />
              </div>
            </div>
            <div className={'bottomBtn'}>
              <button style={{ float: 'left' }} onClick={() => this.setState({ pageType: 1 })}>
                返回筛查收费项目
              </button>
              <button style={{ float: 'right' }} onClick={() => this.submit()}>
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

  render() {
    return (
      <div>
        {this.renderCharge()}
        {this.renderRecords()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triage_list: state.onCredit.triage_list,
    triage_list_selectId: state.onCredit.triage_list_selectId,
    record_list: state.onCredit.record_list,
    record_list_page: state.onCredit.record_list_page
  }
}

export default connect(mapStateToProps, { queryCreditRecordList })(AlreadyChargedDetailScreen)
