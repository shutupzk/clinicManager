import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryDepartmentList, ReceiveTreatment } from '../../../../../ducks'
import { Select } from '../../../../../components'
import { formatMoney } from '../../../../../utils'
// import ReactEcharts from 'echarts-for-react'

// 医生接诊
class Doctorconsultationscreen extends Component {
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
    this.queryContentData()
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

  queryContentData() {
    const { ReceiveTreatment, clinic_id } = this.props
    ReceiveTreatment({ ...this.state, clinic_id })
  }

  showContent() {
    const { data } = this.props

    let total_fee = 0
    let labora_pre_fee = 0
    let exam_pre_fee = 0
    let west_pre_fee = 0
    let east_pre_fee = 0
    let material_fee = 0
    let other_fee = 0
    let diagnosis_treatment_fee = 0
    let treatement_fee = 0
    let tatol_count = 0

    for (let item of data) {
      total_fee += item.total_fee
      tatol_count += item.tatol_count
      labora_pre_fee += item.labora_pre_fee
      exam_pre_fee += item.exam_pre_fee
      west_pre_fee += item.west_pre_fee
      east_pre_fee += item.east_pre_fee
      material_fee += item.material_fee
      other_fee += item.other_fee
      diagnosis_treatment_fee += item.diagnosis_treatment_fee
      treatement_fee += item.treatement_fee
    }

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
          <h3> {moment(this.state.start_date).format('YYYY年MM月DD日') + `至` + moment(this.state.end_date).format('YYYY年MM月DD日') + '医生接诊统计报表'}</h3>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>接诊医生</div>
              <div>接诊科室</div>
              <div>接诊人次</div>
              <div>总金额</div>
              <div>检验</div>
              <div>检查</div>
              <div>治疗</div>
              <div>西药</div>
              <div>中药</div>
              <div>材料</div>
              <div>其他</div>
              <div>诊断费</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>合计</div>
              <div />
              <div>{tatol_count}</div>
              <div>{formatMoney(total_fee)}</div>
              <div>{formatMoney(labora_pre_fee)}</div>
              <div>{formatMoney(exam_pre_fee)}</div>
              <div>{formatMoney(treatement_fee)}</div>
              <div>{formatMoney(west_pre_fee)}</div>
              <div>{formatMoney(east_pre_fee)}</div>
              <div>{formatMoney(material_fee)}</div>
              <div>{formatMoney(other_fee)}</div>
              <div>{formatMoney(diagnosis_treatment_fee)}</div>
            </li>
            {data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{item.personnel_name}</div>
                  <div>{item.department_name}</div>
                  <div>{item.tatol_count}</div>
                  <div>{formatMoney(item.total_fee)}</div>
                  <div>{formatMoney(item.labora_pre_fee)}</div>
                  <div>{formatMoney(item.exam_pre_fee)}</div>
                  <div>{formatMoney(item.treatement_fee)}</div>
                  <div>{formatMoney(item.west_pre_fee)}</div>
                  <div>{formatMoney(item.east_pre_fee)}</div>
                  <div>{formatMoney(item.material_fee)}</div>
                  <div>{formatMoney(item.other_fee)}</div>
                  <div>{formatMoney(item.diagnosis_treatment_fee)}</div>
                </li>
              )
            })}
          </ul>
        </div>
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
    data: state.medReports.r_data
  }
}

export default connect(
  mapStateToProps,
  { queryDepartmentList, ReceiveTreatment }
)(Doctorconsultationscreen)
