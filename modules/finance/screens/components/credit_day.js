import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageCard } from '../../../../components'
import moment from 'moment'
import { queryFinanceCredit } from '../../../../ducks'
import { formatMoney } from '../../../../utils'

// 其他收费
class CreditDayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD')
    }
  }

  componentDidMount() {
    this.queryContentData({})
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceCredit } = this.props
    const { start_date, end_date, keyword } = this.state
    queryFinanceCredit({ start_date, end_date, keyword, offset, limit })
  }

  showContent() {
    const { finances, finances_page } = this.props
    return (
      <div>
        <div
          style={{
            float: 'left',
            display: 'flex',
            width: '1200px',
            justifyContent: 'center',
            marginBottom: '15px'
          }}
        >
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '挂账明细'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>就诊人姓名</div>
              <div>就诊id</div>
              <div>性别</div>
              <div>手机号码</div>
              <div>类型</div>
              <div>费用</div>
              <div style={{flex: 2}}>操作时间</div>
              <div>备注</div>
              <div>操作员</div>
            </li>
            {finances.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{item.patientname}</div>
                  <div>{item.pid}</div>
                  <div>{item.sex === 1 ? '男' : '女'}</div>
                  <div>{item.phone}</div>
                  <div>{item.type === 1 ? '还账' : '挂账'}</div>
                  <div>{formatMoney(item.on_credit_money)}</div>
                  <div style={{flex: 2}}>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.remark}</div>
                  <div>{item.operation}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox ul li div {
            flex: 1;
          }
        `}</style>
        <PageCard
          offset={finances_page.offset}
          limit={finances_page.limit}
          total={finances_page.total}
          onItemClick={({ offset, limit }) => {
            this.queryContentData({ offset, limit })
          }}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className={'filterBox'} style={{ marginBottom: '20px' }}>
          <div className={'boxLeft'}>
            <input
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({
                  start_date: moment(e.target.value)
                    .startOf('M')
                    .format('YYYY-MM-DD')
                })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({
                  end_date: moment(e.target.value)
                    .startOf('M')
                    .format('YYYY-MM-DD')
                })
              }}
            />

            <input
              style={{ width: '200px', margin: '14px' }}
              type='text'
              value={this.state.keyword}
              placeholder='就诊人姓名/手机号码/就诊人ID'
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />

            <button style={{ marginLeft: '100px' }} onClick={() => this.queryContentData({})}>
              查询
            </button>
            <button style={{ marginLeft: '20px' }} onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
        {this.showContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    finances: state.finances.data_credit,
    finances_page: state.finances.page_info_credit
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceCredit }
)(CreditDayScreen)
