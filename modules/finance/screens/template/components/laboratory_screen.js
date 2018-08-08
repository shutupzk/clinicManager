import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { LaboratoryStatistics } from '../../../../../ducks'
import { PageCard } from '../../../../../components'
import { formatMoney, getAgeByBirthday } from '../../../../../utils'

// 其他收费
class Laboratoryscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const { LaboratoryStatistics, clinic_id } = this.props
    const { start_date, end_date } = this.state
    LaboratoryStatistics({ start_date, end_date, offset, limit, clinic_id })
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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '治疗统计报表'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>日期</div>
              <div>完成项目时间</div>
              <div>病人ID</div>
              <div>患者姓名</div>
              <div>性别</div>
              <div>年龄</div>
              <div>手机号</div>
              <div>检查医生</div>
              <div>收费项目</div>
              <div>单位</div>
              <div>数量</div>
              <div>单价</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>合计</div>
              <div />
              <div />
              <div>{page.patient_count}</div>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div>{page.tiems_total}</div>
              <div />
            </li>
            {data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{moment(item.updated_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                  <div>{item.id}</div>
                  <div>{item.name}</div>
                  <div>{item.sex === 1 ? '男' : '女'}</div>
                  <div>{getAgeByBirthday(item.birthday)}</div>
                  <div>{item.phone}</div>
                  <div>{item.personnel_name}</div>
                  <div>{item.clinic_laboratory_name}</div>
                  <div>次</div>
                  <div>{item.times}</div>
                  <div>{formatMoney(item.price)}</div>
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
    clinic_id: state.user.data.clinic_id,
    data: state.medReports.labor_data,
    page: state.medReports.labor_page
  }
}

export default connect(
  mapStateToProps,
  { LaboratoryStatistics }
)(Laboratoryscreen)
