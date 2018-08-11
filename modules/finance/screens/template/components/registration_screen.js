import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { RegisterStatistics } from '../../../../../ducks'
// import { formatMoney } from '../../../../../utils'
import ReactEcharts from 'echarts-for-react'

// 其他收费
class Registrationscreen extends Component {
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
    const { data } = this.props
    let appointment_count = 0
    let register_count = 0
    for (let item of data) {
      appointment_count += item.appointment_count
      register_count += item.register_count
    }

    let ops = [
      {
        name: '预约登记',
        value: appointment_count,
        itemStyle: {
          color: '#5bc0de'
        }
      },
      {
        name: '直接登记',
        value: register_count,
        itemStyle: {
          color: '#d9534f'
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
          name: '金额占比',
          type: 'pie',
          data: ops.sort(function(a, b) {
            return a.value - b.value
          })
        }
      ]
    }
  }

  getOption2() {
    const { data } = this.props
    let xdata = []
    let ydata1 = []
    let ydata2 = []
    for (let item of data) {
      xdata.push(item.visit_date)
      ydata1.push(item.appointment_count)
      ydata2.push(item.register_count)
    }
    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '预约登记',
          type: 'line',
          color: '#5bc0de',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata1
        },
        {
          name: '直接登记',
          color: '#d9534f',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata2
        }
      ]
    }
  }

  queryContentData() {
    const { RegisterStatistics, clinic_id } = this.props
    const { start_date, end_date } = this.state
    RegisterStatistics({ start_date, end_date, clinic_id })
  }

  showContent() {
    const { data } = this.props
    let total_count = 0
    let appointment_count = 0
    let register_count = 0
    for (let item of data) {
      total_count += item.total_count
      appointment_count += item.appointment_count
      register_count += item.register_count
    }
    return (
      <div>
        <div id='chart' style={{ width: 500, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          <div className={'leftTille'}>
            <ul>
              <li>
                <label>预约登记</label>
                <i style={{ background: '#5bc0de' }} />
              </li>
              <li>
                <label>直接登记</label>
                <i style={{ background: '#d9534f' }} />
              </li>
            </ul>
          </div>
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </div>
        <div id='chart2' style={{ width: 500, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          <ReactEcharts option={this.getOption2()} style={{ height: '400px', width: '100%' }} />
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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '预约统计报表'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>接诊时间</div>
              <div>登记总数</div>
              <div>预约就诊</div>
              <div>直接登记</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div>{total_count}</div>
              <div>{appointment_count}</div>
              <div>{register_count}</div>
            </li>
            {data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{item.visit_date}</div>
                  <div>{item.total_count}</div>
                  <div>{item.appointment_count}</div>
                  <div>{item.register_count}</div>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    data: state.medReports.regist_data
  }
}

export default connect(
  mapStateToProps,
  { RegisterStatistics }
)(Registrationscreen)
