import React, { Component } from 'react'
import { connect } from 'react-redux'
// // import Router from 'next/router'
import { DrugRetailDetail } from '../../../../ducks'
import moment from 'moment'
import { formatMoney } from '../../../../utils'

class RetailRecordDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSelect: false, // 全选
      refund: false // 退费
    }
  }

  componentDidMount() {
    const { select_out_trade_no } = this.props
    this.props.DrugRetailDetail({ out_trade_no: select_out_trade_no })
  }

  render() {
    const { data_detail } = this.props
    let refundMoney = 0
    const { items, refund, pay } = data_detail
    for (let re of refund) {
      refundMoney += re.refund_money * 1
    }

    let paymethod = { cash: '现金', bank: '银行卡', wechat: '微信', alipay: '支付宝' }

    const { allSelect } = this.state
    return (
      <div className={'detailBox'}>
        <div className='topTitle'>
          <span>零售药品详情</span>
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

        {/* <div className={'toatalFeeBox'}>
          <h4>退费交易信息</h4>
          <ul>
            <li>折扣金额：元</li>

            <li />
            <li />
          </ul>

          <ul>
            <li>折扣金额：元</li>

            <li />
            <li />
          </ul>
        </div> */}

        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>
                <input type={'checkbox'} checked={allSelect} onChange={() => this.changeAllSelect()} />
              </div>
              <div>序号</div>
              <div>药品名称</div>
              <div>规格</div>
              <div>零售价</div>
              <div>批号</div>
              <div>有效日期</div>
              <div>数量</div>
              <div>单位</div>
            </li>
            {items.map((item, iKey) => {
              let checked = true
              return (
                <li key={iKey}>
                  <div>
                    <input type={'checkbox'} checked={checked} onChange={() => {}} />
                  </div>
                  <div>{iKey + 1}</div>
                  <div>{item.name}</div>
                  <div>{item.specification}</div>
                  <div>{formatMoney(item.ret_price)}</div>
                  <div>{item.serial}</div>
                  <div>{moment(item.eff_date).format('YYYY-MM-DD')}</div>
                  <div>{item.amount}</div>
                  <div>{item.packing_unit_name}</div>
                </li>
              )
            })}
          </ul>
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
    data_detail: state.drugRetail.data_detail
  }
}

export default connect(
  mapStateToProps,
  { DrugRetailDetail }
)(RetailRecordDetailScreen)
