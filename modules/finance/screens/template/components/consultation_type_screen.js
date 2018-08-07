import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { OutPatietnType } from '../../../../../ducks'
import { PageCard } from '../../../../../components'
// import { formatMoney } from '../../../../../utils'
import ReactEcharts from 'echarts-for-react'

// 其他收费
class Consultationtypescreen extends Component {
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

  getOption() {
    const {t_total} = this.props
    let data = [
      {
        name: '初诊',
        value: t_total.type1,
        itemStyle: {
          color: '#5bc0de'
        }
      },
      {
        name: '复诊',
        value: t_total.type2,
        itemStyle: {
          color: '#d9534f'
        }
      },
      {
        name: '术后复诊',
        value: t_total.type3,
        itemStyle: {
          color: '#428bca'
        }
      }
    ]
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      series: [
        {
          name: '类型占比',
          type: 'pie',
          data: data.sort(function(a, b) {
            return a.value - b.value
          })
        }
      ]
    }
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { OutPatietnType, clinic_id } = this.props
    const { start_date, end_date } = this.state
    OutPatietnType({ start_date, end_date, clinic_id, offset, limit })
  }
  getTotalFee(key) {
    let total = 0
    let array = this.props.t_data
    for (let item of array) {
      total += item[key]
    }
    return total
  }
  showContent() {
    const { t_data, t_page_info, t_total } = this.props
    console.log('t_data, t_page_info', t_data, t_page_info)
    return (
      <div>
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          <div className={'leftTille'}>
            <ul>
              <li>
                <label>初诊</label>
                <i style={{ background: '#5bc0de' }} />
              </li>
              <li>
                <label>复诊</label>
                <i style={{ background: '#d9534f' }} />
              </li>
              <li>
                <label>术后复诊</label>
                <i style={{ background: '#428bca' }} />
              </li>
            </ul>
          </div>
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </div>
        <div
          style={{
            float: 'left',
            display: 'flex',
            width: '1200px',
            justifyContent: 'center',
            marginBottom: '15px'
          }}
        >
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '接诊类型统计'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>接诊日期</div>
              <div>初诊</div>
              <div>复诊</div>
              <div>术后复诊</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>合计</div>
              <div>{t_total.type1}</div>
              <div>{t_total.type1}</div>
              <div>{t_total.type1}</div>
            </li>
            {t_data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{item.type1}</div>
                  <div>{item.type2}</div>
                  <div>{item.type3}</div>
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
          offset={t_page_info.offset}
          limit={t_page_info.limit}
          total={t_page_info.total}
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
            <button style={{ marginLeft: '100px' }} onClick={() => this.queryContentData({})}>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    t_data: state.medReports.t_data,
    t_page_info: state.medReports.t_page_info,
    t_total: state.medReports.t_total,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(
  mapStateToProps,
  { OutPatietnType }
)(Consultationtypescreen)
