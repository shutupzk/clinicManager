import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryFinanceItemList } from '../../../../ducks'
import { PageCard, Select } from '../../../../components'
import { formatMoney, getAgeByBirthday } from '../../../../utils'
import moment from 'moment'

// 其他收费
class ReportDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientName: '',
      porjectName: '',
      in_out: '',
      phone: '',
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

  // 查询数据
  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceItemList } = this.props
    const { start_date, end_date, patientName, porjectName, in_out, phone } = this.state
    queryFinanceItemList({ start_date, end_date, patientName, porjectName, in_out, phone, offset, limit })
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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '收费明细'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div style={{ flex: 2 }}>平台订单号</div>
              <div>就诊人姓名</div>
              <div>性别</div>
              <div>年龄</div>
              <div>手机号</div>
              <div>就诊日期</div>
              <div style={{ flex: 2 }}>接诊科室</div>
              <div>接诊医生</div>
              <div style={{ flex: 2 }}>收费时间</div>
              <div>操作员</div>
              <div>业务类型</div>
              <div style={{ flex: 3 }}>收费项目</div>
              <div>单位</div>
              <div>数量</div>
              <div>单价</div>
              <div>费用合计</div>
              <div>折后金额</div>
            </li>
            {finances.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div style={{ flex: 2 }}>{item.out_trade_no}</div>
                  <div>{item.patientname}</div>
                  <div>{item.sex === 1 ? '男' : '女'}</div>
                  <div>{getAgeByBirthday(item.birthday)}</div>
                  <div>{item.phone}</div>
                  <div>{moment(item.visit_date).format('YYYY-MM-DD')}</div>
                  <div style={{ flex: 2 }}>{item.deptname}</div>
                  <div>{item.doctorname}</div>
                  <div style={{ flex: 2 }}>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.operarion}</div>
                  <div>{item.charge_project_type}</div>
                  <div style={{ flex: 3 }}>{item.name}</div>
                  <div>{item.unit}</div>
                  <div>{item.amount}</div>
                  <div>{formatMoney(item.price)}</div>
                  <div>{formatMoney(item.total)}</div>
                  <div>{formatMoney(item.fee)}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox {
            width: 2000px;
          }
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

  getOptions() {
    return [{ value: '', label: '收费/退费' }, { value: 'in', label: '收费' }, { value: 'out', label: '退费' }]
  }

  showOptions(key) {
    let map = { in: { value: 'in', label: '收费' }, out: { value: 'out', label: '退费' }, '': { value: '', label: '收费/退费' } }
    return map[key]
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
              style={{ width: '100px', margin: '14px' }}
              type='text'
              value={this.state.patientName}
              placeholder='就诊人姓名'
              onChange={e => {
                this.setState({ patientName: e.target.value })
              }}
            />

            <input
              style={{ width: '100px', margin: '14px' }}
              type='text'
              value={this.state.phone}
              placeholder='手机号码'
              onChange={e => {
                this.setState({ phone: e.target.value })
              }}
            />

            <input
              style={{ width: '100px', margin: '14px' }}
              type='text'
              value={this.state.porjectName}
              placeholder='收费项目'
              onChange={e => {
                this.setState({ porjectName: e.target.value })
              }}
            />
            <div
              style={{
                float: 'left',
                margin: '14px',
                width: '120px'
              }}
            >
              <Select
                value={this.showOptions(this.state.in_out)}
                placeholder={'收费/退费'}
                options={this.getOptions()}
                onChange={({ value }) => {
                  this.setState({ in_out: value })
                }}
                height={32}
              />
            </div>

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
    finances: state.finances.data_detail,
    finances_page: state.finances.page_info_detail
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceItemList }
)(ReportDetailScreen)
