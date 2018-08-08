import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { OutPatietnRecords, queryDoctorList } from '../../../../../ducks'
import { PageCard, Select } from '../../../../../components'
import { getAgeByBirthday } from '../../../../../utils'
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
  }

  queryDoctorList() {
    const {queryDoctorList, clinic_id} = this.props
    queryDoctorList({clinic_id, offset: 0, limit: 1000})
    this.queryContentData({})
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
    const { OutPatietnRecords, clinic_id } = this.props
    const {
      start_date,
      end_date,
      patient_name,
      phone,
      doctor_id,
      operation_id
    } = this.state
    let reqData = {
      start_date,
      end_date,
      clinic_id,
      limit,
      offset
    }
    if (patient_name !== '') {
      reqData.patient_name = patient_name
    }
    if (phone !== '') {
      reqData.phone = phone
    }
    if (doctor_id !== '') {
      reqData.doctor_id = doctor_id
    }
    if (operation_id !== '') {
      reqData.operation_id = operation_id
    }
    OutPatietnRecords(reqData)
  }

  showContent() {
    const { log_data, page_info } = this.props
    // console.log('log_data====a=', log_data, page_info)
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
              <div>病人ID</div>
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
              <div>接诊科室</div>
              <div>接诊医生</div>
            </li>
            <li style={{ background: 'rgba(247,247,247,1)' }}>
              <div>合计</div>
              <div><div>{page_info.person_amount}人</div></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
              <div><div /></div>
            </li>
            {log_data.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div><div>{moment(item.visit_date).format('YYYY-MM-DD')}</div></div>
                  <div><div>{item.patient_id}</div></div>
                  <div><div>{item.patient_name}</div></div>
                  <div><div>{item.sex === 0 ? '女' : '男'}</div></div>
                  <div><div>{getAgeByBirthday(item.birthday)}</div></div>
                  <div><div>{item.phone}</div></div>
                  <div><div>{item.profession}</div></div>
                  <div><div>{item.province}{item.city}{item.district}{item.address}</div></div>
                  <div><div>{item.morbidity_date}</div></div>
                  <div><div>{item.diagnosis}</div></div>
                  <div><div>{item.visit_type === 1 ? '初诊' : item.visit_type === 2 ? '复诊' : item.visit_type === 3 ? '术后复诊' : '' }</div></div>
                  <div><div>{item.opreation_name}</div></div>
                  <div><div>{item.dept_name}</div></div>
                  <div><div>{item.doctor_name}</div></div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox ul li>div {
            flex: 1;
            display:flex;
            align-items: center;
            justify-content:center;
            // line-height: 24px;
          }
          .feeScheduleBox ul li>div>div{
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
        <PageCard
          offset={page_info.offset}
          limit={page_info.limit}
          total={page_info.total}
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
                  this.setState({ doctor_id: value })
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
                  this.setState({ operation_id: value })
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
  // console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    doctors: state.doctors.array_data,
    log_data: state.medReports.l_data,
    page_info: state.medReports.l_page_info
  }
}

export default connect(
  mapStateToProps,
  { OutPatietnRecords, queryDoctorList }
)(Outpatientlogscreen)
