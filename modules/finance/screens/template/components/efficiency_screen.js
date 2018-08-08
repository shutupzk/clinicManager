import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { OutPatietnEfficiencyStatistics, queryDepartmentList } from '../../../../../ducks'
import { Select, PageCard } from '../../../../../components'

// 其他收费
class Efficiencyscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      department_id: ''
    }
  }

  componentDidMount() {
    const { queryDepartmentList, clinic_id } = this.props
    queryDepartmentList({ clinic_id, offset: 0, limit: 1000 })
    this.queryContentData({})
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { OutPatietnEfficiencyStatistics, clinic_id } = this.props
    const { start_date, end_date, department_id } = this.state
    OutPatietnEfficiencyStatistics({ start_date, end_date, offset, limit, department_id, clinic_id })
  }

  getDepeartmentOptions() {
    const { departments } = this.props
    let array = []
    let f_item = { value: '', label: '全部' }
    array.push(f_item)
    for (let key of departments) {
      array.push({
        value: key.id,
        label: key.name
      })
    }
    return array
  }

  showContent() {
    const { data, page } = this.props

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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '门诊效率统计报表'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>接诊日期</div>
              <div>患者</div>
              <div>病人ID</div>
              <div>登记科室</div>
              <div>登记完成时间</div>
              <div>分诊完成时间</div>
              <div>分诊用时(分钟)</div>
              <div>接诊开始时间</div>
              <div>安排接诊用时(分钟)</div>
              <div>接诊结束时间</div>
              <div>接诊用时(分钟)</div>
              <div>收费完成时间</div>
              <div>收费用时(分钟)</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>平均</div>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div>{page.average_triage_finished_time}</div>
              <div />
              <div>{page.average_reception_finished_time}</div>
              <div />
              <div>{page.average_receptioned_time}</div>
              <div />
              <div>{page.average_pay_finished_time}</div>
            </li>
            {data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{item.reception_time && moment(item.reception_time).format('YYYY-MM-DD')}</div>
                  <div>{item.patient_name}</div>
                  <div>{item.patient_id}</div>
                  <div>{item.department_name}</div>
                  <div>{item.register_time && moment(item.register_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.triage_time && moment(item.triage_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.register_time && item.triage_time && moment(item.triage_time).diff(moment(item.register_time), 'm')}</div>
                  <div>{item.reception_time && moment(item.reception_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.reception_time && item.triage_time && moment(item.reception_time).diff(moment(item.triage_time), 'm')}</div>
                  <div>{item.finish_time && moment(item.finish_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.finish_time && item.reception_time && moment(item.finish_time).diff(moment(item.reception_time), 'm')}</div>
                  <div>{item.pay_time && moment(item.pay_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.pay_time && item.finish_time && moment(item.pay_time).diff(moment(item.finish_time), 'm')}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={page.offset}
          limit={page.limit}
          total={page.total}
          onItemClick={({ offset, limit }) => {
            this.queryContentData({ offset, limit })
          }}
        />
        <style jsx='true'>{`
          .feeScheduleBox ul li > div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            // line-height: 24px;
          }
          .feeScheduleBox ul li > div > div {
            line-height: normal;
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
                  start_date: moment(e.target.value).format('YYYY-MM-DD')
                })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({
                  end_date: moment(e.target.value).format('YYYY-MM-DD')
                })
              }}
            />
            <div>
              <Select
                placeholder={'搜索科室'}
                options={this.getDepeartmentOptions()}
                onChange={({ value }) => {
                  this.setState({ department_id: value })
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
          .boxLeft > input {
            width: 120px;
            margin-left: 15px;
            margin-right: 0;
          }
          .boxLeft > div {
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
  return {
    clinic_id: state.user.data.clinic_id,
    departments: state.departments.data,
    data: state.medReports.eff_data,
    page: state.medReports.eff_page
  }
}

export default connect(
  mapStateToProps,
  { OutPatietnEfficiencyStatistics, queryDepartmentList }
)(Efficiencyscreen)
