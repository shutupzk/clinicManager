import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'

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
  componentWillMount() {}

	// 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
	// 费用详情
  renderFeeDetails() {
    if (this.state.pageType !== 1) return ''
    return (
      <div className={'detailBox'}>
        <div className={'filterBox'}>
          <div style={{ flex: 2 }}>就诊人姓名：王俊凯</div>
          <div style={{ flex: 1 }}>性别：男</div>
          <div style={{ flex: 1 }}>年龄：18</div>
          <div style={{ flex: 2 }}>就诊ID：123456789011</div>
          <div style={{ flex: 2 }}>手机号码：18810273456</div>
          <div style={{ flex: 3 }}>就诊日期：2018年4月10日</div>
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
            <li>
              <div>1</div>
              <div>挂号费</div>
              <div>2.00</div>
              <div>2</div>
              <div>4.00</div>
              <div>0</div>
              <div>40</div>
              <div>全科门诊</div>
              <div>易烊千玺</div>
            </li>
            <li>
              <div>2</div>
              <div>挂号费</div>
              <div>2.00</div>
              <div>2</div>
              <div>4.00</div>
              <div>0</div>
              <div>40</div>
              <div>全科门诊</div>
              <div>易烊千玺</div>
            </li>
          </ul>
        </div>
        <div className={'toatalFeeBox'}>
          <h4>分类汇总明细费用</h4>
          <ul>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
            <li>西/成药费：100.00元</li>
          </ul>
        </div>
        <div className={'filterBox'}>
          <div>费用合计：300.00元</div>
          <div>折扣金额：300.00元</div>
          <div>应收费用：300.00元</div>
          <div>实收费用：300.00元</div>
        </div>
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
            <div><b>100</b><a>元</a></div>
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
              <button style={{float: 'left'}} onClick={() => this.setState({pageType: 1})}>返回筛查收费项目</button>
              <button style={{float: 'right'}}>确定收费</button>
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
            min-height:60px;
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
export default connect(null)(TollScreen)
