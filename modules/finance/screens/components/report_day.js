import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryFinanceList } from '../../../../ducks'
import { PageCard } from '../../../../components'
import { formatMoney } from '../../../../utils'

// 其他收费
class ReportDayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientName: '',
      oprationName: '',
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      selectType: 1
    }
  }

  componentDidMount() {
    this.queryContentData({})
  }

  changeContent({ selectType }) {
    this.setState({ selectType })
  }

  // 查询数据
  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceList } = this.props
    const { start_date, end_date, patientName, oprationName } = this.state
    queryFinanceList({ start_date, end_date, patientName, oprationName, offset, limit })
  }

  showContent() {
    if (this.state.selectType === 2) return this.showTypeContent()
    else return this.showMethodContent()
  }

  // 按业务类型
  showTypeContent() {
    const { finances, finances_page } = this.props
    return (
      <div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>姓名</div>
              <div>就诊ID</div>
              <div>费用合计</div>
              <div>中药费</div>
              <div>西/成药费</div>
              <div>检查费</div>
              <div>检验费</div>
              <div>治疗费</div>
              <div>诊疗费</div>
              <div>材料费</div>
              <div>药品零售</div>
              <div>其他费用</div>
              <div style={{ flex: 2 }}>交易时间</div>
              <div>操作员</div>
              <div style={{ flex: 2 }}>接诊科室</div>
              <div>接诊医生</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div />
              <div>{formatMoney(finances_page.total_money)}</div>
              <div>{formatMoney(finances_page.traditional_medical_fee)}</div>
              <div>{formatMoney(finances_page.western_medicine_fee)}</div>
              <div>{formatMoney(finances_page.examination_fee)}</div>
              <div>{formatMoney(finances_page.labortory_fee)}</div>
              <div>{formatMoney(finances_page.treatment_fee)}</div>
              <div>{formatMoney(finances_page.diagnosis_treatment_fee)}</div>
              <div>{formatMoney(finances_page.material_fee)}</div>
              <div>{formatMoney(finances_page.retail_fee)}</div>
              <div>{formatMoney(finances_page.other_fee)}</div>
              <div style={{ flex: 2 }} />
              <div />
              <div style={{ flex: 2 }} />
              <div />
            </li>
            {finances.map((item, iKey) => {
              const patientname = item.record_type === 2 ? '药品零售' : item.patientname
              return (
                <li key={iKey}>
                  <div>{patientname}</div>
                  <div>{item.clinic_patient_id}</div>
                  <div>{formatMoney(item.total_money)}</div>
                  <div>{formatMoney(item.traditional_medical_fee)}</div>
                  <div>{formatMoney(item.western_medicine_fee)}</div>
                  <div>{formatMoney(item.examination_fee)}</div>
                  <div>{formatMoney(item.labortory_fee)}</div>
                  <div>{formatMoney(item.treatment_fee)}</div>
                  <div>{formatMoney(item.diagnosis_treatment_fee)}</div>
                  <div>{formatMoney(item.material_fee)}</div>
                  <div>{formatMoney(item.retail_fee)}</div>
                  <div>{formatMoney(item.other_fee)}</div>
                  <div style={{ flex: 2 }}>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.operation}</div>
                  <div style={{ flex: 2 }}>{item.departmentname}</div>
                  <div>{item.doctorname}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox {
            width: 1500px;
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

  // 按收费方式
  showMethodContent() {
    const { finances, finances_page } = this.props
    return (
      <div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>姓名</div>
              <div>就诊ID</div>
              <div>费用合计</div>
              <div>实收金额</div>
              <div>现金</div>
              <div>银行卡</div>
              <div>微信</div>
              <div>支付宝</div>
              <div>积分抵扣</div>
              <div>余额支付</div>
              <div>医保支付</div>
              <div>挂账</div>
              <div>卡券</div>
              <div>减免</div>
              <div style={{ flex: 2 }}>交易时间</div>
              <div>操作员</div>
              <div style={{ flex: 2 }}>接诊科室</div>
              <div>接诊医生</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div />
              <div>{formatMoney(finances_page.total_money)}</div>
              <div>{formatMoney(finances_page.balance_money)}</div>
              <div>{formatMoney(finances_page.cash)}</div>
              <div>{formatMoney(finances_page.bank)}</div>
              <div>{formatMoney(finances_page.wechat)}</div>
              <div>{formatMoney(finances_page.alipay)}</div>
              <div>{formatMoney(finances_page.bonus_points_money)}</div>
              <div>{formatMoney(0)}</div>
              <div>{formatMoney(finances_page.medical_money)}</div>
              <div>{formatMoney(finances_page.on_credit_money)}</div>
              <div>{formatMoney(finances_page.discount_money || 0 + finances_page.voucher_money || 0)}</div>
              <div>{formatMoney(finances_page.derate_money)}</div>
              <div style={{ flex: 2 }} />
              <div />
              <div style={{ flex: 2 }} />
              <div />
            </li>
            {finances.map((item, iKey) => {
              const patientname = item.record_type === 2 ? '药品零售' : item.patientname
              return (
                <li key={iKey}>
                  <div>{patientname}</div>
                  <div>{item.clinic_patient_id}</div>
                  <div>{formatMoney(item.total_money)}</div>
                  <div>{formatMoney(item.balance_money)}</div>
                  <div>{formatMoney(item.cash)}</div>
                  <div>{formatMoney(item.bank)}</div>
                  <div>{formatMoney(item.wechat)}</div>
                  <div>{formatMoney(item.alipay)}</div>
                  <div>{formatMoney(item.bonus_points_money)}</div>
                  <div>{formatMoney(0)}</div>
                  <div>{formatMoney(item.medical_money)}</div>
                  <div>{formatMoney(item.on_credit_money)}</div>
                  <div>{formatMoney(item.discount_money + item.voucher_money)}</div>
                  <div>{formatMoney(item.derate_money)}</div>
                  <div style={{ flex: 2 }}>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.operation}</div>
                  <div style={{ flex: 2 }}>{item.departmentname}</div>
                  <div>{item.doctorname}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox {
            width: 1500px;
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
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({ end_date: e.target.value })
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
              value={this.state.oprationName}
              placeholder='收费员'
              onChange={e => {
                this.setState({ oprationName: e.target.value })
              }}
            />
            <div style={{ float: 'left', margin: '19px 30px 0 0' }}>
              <label>
                <input type='radio' name='radio' checked={this.state.selectType === 1} onChange={() => this.changeContent({ selectType: 1 })} />
                按收费方式
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input type='radio' name='radio' checked={this.state.selectType === 2} onChange={() => this.changeContent({ selectType: 2 })} />
                按业务类型
              </label>
            </div>
            <button onClick={() => this.queryContentData({})}>查询</button>
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
    finances: state.finances.data,
    finances_page: state.finances.page_info
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceList }
)(ReportDayScreen)
