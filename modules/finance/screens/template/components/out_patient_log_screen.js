import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryFinanceListAnalysis, queryDoctorList } from '../../../../../ducks'
import { PageCard, Select } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
// import ReactEcharts from 'echarts-for-react'

// 其他收费
class Outpatientlogscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      patient_name: '',
      phone: '',
      doctor_id: '',
      nurse_id: '',
      operation_id: ''
    }
  }

  componentDidMount() {
    this.queryDoctorList()
    this.queryContentData({})
  }

  queryDoctorList() {
    const {queryDoctorList, clinic_id} = this.props
    queryDoctorList({clinic_id, offset: 0, limit: 1000})
  }

  getDoctorOptions() {
    const {doctors} = this.props
    // console.log('doctors====', doctors)
    let array = []
    let f_item = {value: '', label: '全部'}
    array.push(f_item)
    for (let key of doctors) {
      let item = {}
      if (key.personnel_type === 2) {
        item.value = key.id
        item.label = key.name
        array.push(item)
      }
    }
    return array
  }
  getEmployeeOptions() {
    const {doctors} = this.props
    // console.log('doctors====', doctors)
    let array = []
    let f_item = {value: '', label: '全部'}
    array.push(f_item)
    for (let key of doctors) {
      let item = {}
      if (key.personnel_type === 1) {
        item.value = key.id
        item.label = key.name
        array.push(item)
      }
    }
    return array
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceListAnalysis } = this.props
    const { start_date, end_date } = this.state
    queryFinanceListAnalysis({ start_date, end_date, offset, limit })
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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '门诊日志统计报表'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>就诊日期</div>
              <div>门诊ID</div>
              <div>患者姓名</div>
              <div>性别</div>
              <div>年龄</div>
              <div>手机号码</div>
              <div>职业</div>
              <div>住址</div>
              <div>发病日期</div>
              <div>初步诊断</div>
              <div>接诊类型</div>
              <div>登记人员</div>
              <div>护士姓名</div>
              <div>接诊科室</div>
              <div>接诊医生</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div>{formatMoney(finances_page.total_money)}</div>
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
            </li>
            {finances.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{formatMoney(item.total_money)}</div>
                  <div>{formatMoney(item.cash)}</div>
                  <div>{formatMoney(item.bank)}</div>
                  <div>{formatMoney(item.wechat)}</div>
                  <div>{formatMoney(item.alipay)}</div>
                  <div>{formatMoney(item.bonus_points_money)}</div>
                  <div>{formatMoney(0)}</div>
                  <div>{formatMoney(item.medical_money)}</div>
                  <div>{formatMoney(item.on_credit_money)}</div>
                  <div>{formatMoney(item.discount_money || 0 + item.voucher_money || 0)}</div>
                  <div>{formatMoney(item.derate_money)}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox ul li div {
            flex: 1;
          }
          .leftTille {
            padding-top: 70px;
            width: 100px;
          }
          .leftTille ul li {
            width: 100px;
            display: flex;
            align-items: center;
          }
          .leftTille ul li label {
            flex: 1;
            text-align: right;
          }
          .leftTille ul li i {
            width: 25px;
            height: 15px;
            border-radius: 4px;
            display: block;
            margin-left: 5px;
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
              type='text'
              placeholder='患者姓名'
              value={this.state.patient_name}
              onChange={e => {
                this.setState({
                  patient_name: e.target.value
                })
              }}
            />
            <input
              type='text'
              placeholder='手机号码'
              value={this.state.phone}
              onChange={e => {
                this.setState({
                  phone: e.target.value
                })
              }}
            />
            <div>
              <Select
                // value={this.showOptions(this.state.in_out)}
                placeholder={'搜索医生'}
                options={this.getDoctorOptions()}
                onChange={({ value }) => {
                  this.setState({ in_out: value })
                }}
                height={32}
              />
            </div>
            <div>
              <Select
                // value={this.showOptions(this.state.in_out)}
                placeholder={'登记人'}
                options={this.getEmployeeOptions()}
                onChange={({ value }) => {
                  this.setState({ in_out: value })
                }}
                height={32}
              />
            </div>
            <button style={{ marginLeft: '20px' }} onClick={() => this.queryContentData({})}>
              查询
            </button>
          </div>
          <div className={'boxRight'}>
            <button style={{ marginLeft: '20px' }} onClick={() => {}}>
              导出
            </button>
          </div>
        </div>
        {this.showContent()}
        <style jsx>{`
          .boxLeft>input{
            width: 120px;
            margin-left: 15px;
            margin-right:0;
          }
          .boxLeft>div{
            width: 120px;
            margin: 14px 0 0 15px;
            float: left;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state=====', state)
  return {
    finances: state.finances.data,
    finances_page: state.finances.page_info,
    clinic_id: state.user.data.clinic_id,
    doctors: state.doctors.array_data
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceListAnalysis, queryDoctorList }
)(Outpatientlogscreen)
