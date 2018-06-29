import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryFinanceList } from '../../../../../ducks'
import { PageCard } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
import ReactEcharts from 'echarts-for-react'

// 其他收费
class AnalyslsTypeScreen extends Component {
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
    const { finances_page } = this.props

    let data = [
      {
        name: '中药费',
        value: formatMoney(finances_page.traditional_medical_fee),
        itemStyle: {
          color: '#5bc0de'
        }
      },
      {
        name: '西/成药费',
        value: formatMoney(finances_page.western_medicine_fee),
        itemStyle: {
          color: '#d9534f'
        }
      },
      {
        name: '检查费',
        value: formatMoney(finances_page.examination_fee),
        itemStyle: {
          color: '#428bca'
        }
      },
      {
        name: '检验费',
        value: formatMoney(finances_page.labortory_fee),
        itemStyle: {
          color: '#f0ad4e'
        }
      },
      {
        name: '治疗费',
        value: formatMoney(finances_page.treatment_fee),
        itemStyle: {
          color: '#54af9b'
        }
      },
      {
        name: '诊疗费',
        value: formatMoney(finances_page.diagnosis_treatment_fee),
        itemStyle: {
          color: '#54b2a6'
        }
      },
      {
        name: '材料费',
        value: formatMoney(finances_page.material_fee),
        itemStyle: {
          color: '#a28eda'
        }
      },
      {
        name: '药品零售',
        value: formatMoney(finances_page.retail_fee),
        itemStyle: {
          color: '#749f83'
        }
      },
      {
        name: '其他费用',
        value: formatMoney(finances_page.other_fee),
        itemStyle: {
          color: '#5ab472'
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
          data: data.sort(function(a, b) {
            return a.value - b.value
          })
        }
      ]
    }
  }

  queryContentData({ offset = 0, limit = 10 }) {
    const { queryFinanceList } = this.props
    const { start_date, end_date } = this.state
    queryFinanceList({ start_date, end_date, offset, limit })
  }

  showContent() {
    const { finances, finances_page } = this.props
    return (
      <div>
        <div id='chart' style={{ width: 1098, display: 'flex', justifyContent: 'center', float: 'left', marginLeft: '66px' }}>
          <div className={'leftTille'}>
            <ul>
              <li>
                <label>中药费</label>
                <i style={{ background: '#5bc0de' }} />
              </li>
              <li>
                <label>西/成药费</label>
                <i style={{ background: '#d9534f' }} />
              </li>
              <li>
                <label>检查费</label>
                <i style={{ background: '#428bca' }} />
              </li>
              <li>
                <label>检验费</label>
                <i style={{ background: '#f0ad4e' }} />
              </li>
              <li>
                <label>治疗费</label>
                <i style={{ background: '#54af9b' }} />
              </li>
              <li>
                <label>诊疗费</label>
                <i style={{ background: '#54b2a6' }} />
              </li>
              <li>
                <label>材料费</label>
                <i style={{ background: '#a28eda' }} />
              </li>
              <li>
                <label>药品零售</label>
                <i style={{ background: '#749f83' }} />
              </li>
              <li>
                <label>其他费用</label>
                <i style={{ background: '#5ab472' }} />
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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '业务类型'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>交易日期</div>
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
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>总计</div>
              <div>
                {formatMoney(finances_page.total_money)}
                {}
              </div>
              <div>{formatMoney(finances_page.traditional_medical_fee)}</div>
              <div>{formatMoney(finances_page.western_medicine_fee)}</div>
              <div>{formatMoney(finances_page.examination_fee)}</div>
              <div>{formatMoney(finances_page.labortory_fee)}</div>
              <div>{formatMoney(finances_page.treatment_fee)}</div>
              <div>{formatMoney(finances_page.diagnosis_treatment_fee)}</div>
              <div>{formatMoney(finances_page.material_fee)}</div>
              <div>{formatMoney(finances_page.retail_fee)}</div>
              <div>{formatMoney(finances_page.other_fee)}</div>
            </li>
            {finances.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
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
    finances: state.finances.data,
    finances_page: state.finances.page_info
  }
}

export default connect(
  mapStateToProps,
  { queryFinanceList }
)(AnalyslsTypeScreen)
