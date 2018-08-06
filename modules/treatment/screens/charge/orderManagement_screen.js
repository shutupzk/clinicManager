import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryManagementOrders } from '../../../../ducks'
import moment from 'moment'
import { DatePicker, PageCard } from '../../../../components'
import { formatMoney } from '../../../../utils'

class OrderManagementScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderType: 2,
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      keyword: ''
    }
  }

  componentDidMount() {
    this.getData({})
  }

  getData({ offset, limit }) {
    const { clinic_id, queryManagementOrders } = this.props
    let { start_date, end_date, keyword, orderType } = this.state
    queryManagementOrders({ start_date, end_date, clinic_id, keyword, offset, limit, orderType })
  }

  // 显示订单管理
  showOrderManagement() {
    const { data, data_page } = this.props
    return (
      <div className={'detailBox'} style={{ float: 'left' }}>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>交易时间</div>
              <div>平台订单号</div>
              <div>业务类型</div>
              <div>就诊人</div>
              <div>病人ID</div>
              <div>支付方式</div>
              <div>支付金额</div>
              <div>支付状态</div>
              <div>操作员</div>
              <div>操作</div>
            </li>
            {data.map((item, index) => {
              let map = {
                cash: '现金',
                alipay: '支付宝',
                wechat: 'wechat',
                bank: '银行卡'
              }

              let status_map = {
                NOTPAY: '未支付',
                USERPAYING: '用户支付中',
                SUCCESS: '交易成功',
                REFUND: '转入退费',
                CLOSE: '已关闭/已撤销',
                FAIL: '交易失败',
                UNKNOW: '未知',
                PROCESSING: '退款处理中'
              }
              return (
                <li>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{item.number}</div>
                  <div>{item.order_type}</div>
                  <div>{item.patient_name}</div>
                  <div>{item.patient_id}</div>
                  <div>{map[item.pay_method_code]}</div>
                  <div>{formatMoney(item.balance_money)}</div>
                  <div>{status_map[item.order_status] || '未知状态'}</div>
                  <div>{item.operation}</div>
                  <div>更新状态</div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={data_page.offset}
          limit={data_page.limit}
          total={data_page.total}
          onItemClick={({ offset, limit }) => {
            this.getData({ offset, limit })
          }}
        />
        <style jsx='true'>
          {`
            .feeScheduleBox ul li div:nth-child(2),
            .feeScheduleBox ul li div:nth-child(1) {
              flex: 2;
            }
            .feeScheduleBox ul li div {
              flex: 1;
            }
          `}
        </style>
      </div>
    )
  }

  changeType(orderType) {
    this.setState({ orderType })
    this.getData({})
  }

  // 选择异常/正常订单
  renderOrderType() {
    const { orderType } = this.state
    return (
      <div>
        <label style={{ margin: '20px 15px', float: 'left' }}>
          <input type='radio' name={'listType'} checked={orderType === 1} onChange={() => this.changeType(1)} /> 异常订单
        </label>
        <label style={{ margin: '20px 15px', float: 'left' }}>
          <input type='radio' name={'listType'} checked={orderType === 2} onChange={() => this.changeType(2)} /> 正常订单
        </label>
      </div>
    )
  }
  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/charge')}>待收费</span>
          <span onClick={() => Router.push('/treatment/charge/charged')}>已收费</span>
          {/* <span onClick={() => Router.push('/treatment/charge/alreadyCharged')}>
						已挂账
					</span> */}
          <span onClick={() => Router.push('/treatment/charge/refunded')}>已退款</span>
          <span className={'sel'}>订单管理</span>
        </div>
        <div className={'filterBox'}>
          {this.renderOrderType()}
          <div className={'boxLeft'}>
            <div className={'dateDiv'}>
              <DatePicker
                value={moment(moment(this.state.start_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ start_date: date })
                  }
                }}
              />
            </div>
            <div className={'dateDiv'}>
              <DatePicker
                value={moment(moment(this.state.end_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ end_date: date })
                  }
                }}
              />
            </div>
            <input onChange={e => this.setState({ keyword: e.target.value })} type='text' placeholder='搜索就诊人姓名/病人ID/身份证号码/手机号码' value={this.state.keyword} />
            <button onClick={() => this.getData({})}>查询</button>
          </div>
        </div>
        {this.showOrderManagement()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    data: state.managementOrders.data,
    data_page: state.managementOrders.page_info
  }
}

export default connect(
  mapStateToProps,
  { queryManagementOrders }
)(OrderManagementScreen)
