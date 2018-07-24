import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { Confirm } from '../../../../components'
import { DrugRetailDetail, DrugRetailRefund } from '../../../../ducks'
import moment from 'moment'
import { formatMoney } from '../../../../utils'

class RetailRecordDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSelect: true, // 全选
      refundStatus: false, // 退费
      refundItemMap: {} // 退费
    }
  }

  async componentDidMount() {
    const { select_out_trade_no } = this.props
    let res = await this.props.DrugRetailDetail({ out_trade_no: select_out_trade_no })
    let refundItemMap = {}
    for (let item of (res && res.data) || []) {
      if (item.amount <= 0) continue

      refundItemMap[item.record_id] = {
        record_id: item.record_id,
        amount: item.amount
      }
    }
    this.setState({ refundItemMap })
  }

  submit() {
    const { refundItemMap } = this.state
    const { select_out_trade_no, operation_id, DrugRetailRefund } = this.props
    if (JSON.stringify(refundItemMap) === '{}') {
      return this.refs.myAlert.alert('请勾选退费项')
    }

    let items = []

    for (let key in refundItemMap) {
      items.push({
        retail_id: key,
        amount: refundItemMap[key].amount * 1
      })
    }

    return this.refs.myAlert.confirm('确定退费？', '', 'Warning', async () => {
      let res = await DrugRetailRefund({ out_trade_no: select_out_trade_no, items, operation_id })
      if (!res) {
        return this.refs.myAlert.alert('退费成功', null, () => {
          Router.push('/treatment/drugretail')
        })
      }
      this.refs.myAlert.alert('退费失败', res, null, 'warning')
    })
  }

  changeAllSelect() {
    let { allSelect } = this.state

    let refundItemMap = {}
    if (!allSelect) {
      const { data_detail } = this.props
      for (let item of (data_detail && data_detail.items) || []) {
        if (item.amount <= 0) continue
        refundItemMap[item.record_id] = {
          record_id: item.record_id,
          amount: item.amount
        }
      }
    }

    this.setState({ refundItemMap, allSelect: !allSelect })
  }

  checkItem(record_id, checked, amount) {
    let { refundItemMap } = this.state
    // 如果已选中，删除
    if (checked) {
      delete refundItemMap[record_id]
    } else {
      refundItemMap[record_id] = {
        record_id,
        amount
      }
    }
    this.setState({ refundItemMap })
  }

  setValue(record_id, value) {
    const { refundItemMap } = this.state
    refundItemMap[record_id].amount = value * 1
    this.setState({ refundItemMap })
  }

  showBottom() {
    let { refundStatus } = this.state
    if (refundStatus) {
      return (
        <div className={'feeScheduleBottom'}>
          <button onClick={() => this.setState({ refundStatus: false })}>取消</button>
          <button onClick={() => this.submit()}>确定</button>
        </div>
      )
    } else {
      return (
        <div className={'feeScheduleBottom'}>
          <button>打印</button>
          <button onClick={() => this.setState({ refundStatus: true })}>退费</button>
        </div>
      )
    }
  }

  render() {
    const { data_detail } = this.props
    const { refundStatus, allSelect, refundItemMap } = this.state
    let refundMoney = 0
    const { items, refund, pay } = data_detail
    for (let re of refund) {
      refundMoney += re.refund_money * 1
    }

    let paymethod = { cash: '现金', bank: '银行卡', wechat: '微信', alipay: '支付宝' }

    return (
      <div className={'detailBox'}>
        <div className='topTitle'>
          <span>零售药品详情 {refundStatus && ' - 退费'}</span>
        </div>

        <div className={'filterBox'}>
          <div>费用合计：{formatMoney(pay.total_money)}元</div>
          <div>折扣金额：{formatMoney(pay.discount_money)}元</div>
          <div>医保金额：{formatMoney(pay.medical_money)}元</div>
          <div>实收费用：{formatMoney(pay.balance_money)}元</div>
          <div>已退费用：{formatMoney(refundMoney)}元</div>
        </div>

        <div className={'toatalFeeBox'}>
          <h4>缴费交易信息</h4>
          <ul>
            <li>支付时间： {pay && moment(pay.pay_time).format('YYYY-MM-DD HH:mm:ss')}</li>
            <li>交易订单号：{pay.out_trade_no}</li>
            <li>交易方式： {paymethod[pay.pay_method]}</li>
            <li>交易金额： {formatMoney(pay.balance_money)}</li>
            <li>第三方交易号</li>
          </ul>
        </div>

        <div className={'toatalFeeBox'}>
          <h4>退费交易信息</h4>
          {refund.map((item, iKey) => {
            return (
              <ul key={iKey}>
                <li>退费时间：{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>退费订单号：{item.refund_trade_no}</li>
                <li>退费方式：原路退回</li>
                <li>退费金额：{formatMoney(item.refund_money)}</li>
                <li>第三方退费单号：</li>
              </ul>
            )
          })}
        </div>

        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              {refundStatus && (
                <div>
                  <input type={'checkbox'} checked={allSelect} onChange={() => this.changeAllSelect()} />
                </div>
              )}
              <div>序号</div>
              <div>药品名称</div>
              <div>规格</div>
              <div>零售价</div>
              <div>批号</div>
              <div>有效日期</div>
              <div>数量</div>
              {refundStatus && <div>退费数量</div>}
              <div>单位</div>
            </li>
            {items.map((item, iKey) => {
              let checked = refundItemMap[item.record_id] !== undefined
              return (
                <li key={iKey}>
                  {refundStatus && <div>{item.amount > 0 && <input type={'checkbox'} checked={checked} onChange={() => this.checkItem(item.record_id, checked, item.amount)} />}</div>}
                  <div>{iKey + 1}</div>
                  <div>{item.name}</div>
                  <div>{item.specification}</div>
                  <div>{formatMoney(item.ret_price)}</div>
                  <div>{item.serial}</div>
                  <div>{moment(item.eff_date).format('YYYY-MM-DD')}</div>
                  <div>{item.amount}</div>
                  {refundStatus && (
                    <div>
                      <input
                        type='number'
                        style={{ width: '90%' }}
                        disabled={!checked}
                        value={(refundItemMap[item.record_id] && refundItemMap[item.record_id].amount) || 0}
                        onChange={e => {
                          this.setValue(item.record_id, e.target.value * 1 > item.amount ? item.amount : e.target.value * 1)
                        }}
                      />
                    </div>
                  )}
                  <div>{item.packing_unit_name}</div>
                </li>
              )
            })}
          </ul>
        </div>

        {this.showBottom()}
        <Confirm ref='myAlert' />

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
            justify-content: center;
            align-items: center;
            display: flex;
          }
          .topTitle {
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 26px 0 0 20px;
            height: 20px;
            line-height: 20px;
            display: flex;
          }
          .topTitle span {
            flex: 9;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    select_out_trade_no: state.drugRetail.select_out_trade_no,
    data_detail: state.drugRetail.data_detail,
    operation_id: state.user.data.id
  }
}

export default connect(
  mapStateToProps,
  { DrugRetailDetail, DrugRetailRefund }
)(RetailRecordDetailScreen)
