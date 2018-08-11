import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { DepartmentStatistics, queryDepartmentList } from '../../../../../ducks'
import { formatMoney } from '../../../../../utils'
// 其他收费
class Departmentscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-30, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD')
    }
  }

  componentDidMount() {
    let { clinic_id, queryDepartmentList } = this.props
    queryDepartmentList({ clinic_id, offset: 0, limit: 1000 })
    this.queryContentData()
  }

  queryContentData() {
    const { DepartmentStatistics, clinic_id } = this.props
    const { start_date, end_date } = this.state
    DepartmentStatistics({ start_date, end_date, clinic_id })
  }

  showContent() {
    let { data, departments } = this.props

    let array = []
    let deptMap = {}
    let dateTemp = {}
    for (let item of data) {
      let { department_id, total, balance_money, date } = item
      balance_money = balance_money || 0
      if (!deptMap[department_id]) {
        deptMap[department_id] = {
          total: 0,
          fee: 0
        }
      }

      deptMap[department_id].total += total * 1
      deptMap[department_id].fee += balance_money * 1

      if (!dateTemp[date]) {
        dateTemp[date] = {}
      }

      if (!dateTemp[date][department_id]) {
        dateTemp[date][department_id] = {
          total: 0,
          fee: 0
        }
      }

      dateTemp[date][department_id].total = total * 1
      dateTemp[date][department_id].fee = balance_money * 1
    }

    for (let key in dateTemp) array.push({ ...dateTemp[key], date: key })

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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '科室统计报表'}</h3>
        </div>
        <div className={'listDIV'}>
          <ul>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>接诊日期</div>
              {departments.map((dept, i) => {
                return <div key={i}>{dept.name}</div>
              })}
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div />
              {departments.map((dept, i) => {
                return (
                  <div key={i}>
                    <div>人次</div>
                    <div>金额</div>
                  </div>
                )
              })}
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>合计</div>
              {departments.map((dept, i) => {
                return (
                  <div key={i}>
                    <div>{(deptMap[dept.id] && deptMap[dept.id].total) || 0}</div>
                    <div>{(deptMap[dept.id] && formatMoney(deptMap[dept.id].fee)) || '0.00'}</div>
                  </div>
                )
              })}
            </li>
            {array.map((item, k) => {
              return (
                <li key={k}>
                  <div>{item.date}</div>
                  {departments.map((dept, i) => {
                    return (
                      <div key={i}>
                        <div>{(item[dept.id] && item[dept.id].total) || 0}</div>
                        <div>{(item[dept.id] && formatMoney(item[dept.id].fee)) || '0.00'}</div>
                      </div>
                    )
                  })}
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .listDIV {
            float: left;
            display: flex;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin: 20px 0 0 65px;
          }
          .listDIV ul {
            display: flex;
            flex-direction: column;
            border: 1px solid #e9e9e9;
            border-bottom: none;
          }
          .listDIV ul li {
            display: flex;
            min-height: 40px;
            border-bottom: 1px solid #e9e9e9;
            line-height: 40px;
            text-align: center;
          }
          .listDIV ul li > div {
            margin: 0;
            width: 200px;
            align-items: center;
            justify-content: center;
            border-left: 1px #e9e9e9 dashed;
          }
          .listDIV ul li > div:nth-child(1){
            width: 100px;
          }
          .listDIV ul li > div > div {
            float: left
            width: 99px;
            align-items: center;
            justify-content: center;
            border-left: 1px #e9e9e9 dashed;
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
    data: state.medReports.dept_data
  }
}

export default connect(
  mapStateToProps,
  { DepartmentStatistics, queryDepartmentList }
)(Departmentscreen)
