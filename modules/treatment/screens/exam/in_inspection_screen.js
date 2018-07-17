import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { ExaminationTriageChecking, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, DatePicker } from '../../../../components'
import ExamDetailScreen from './components/exam_detail_screen'

class InInspectionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      start_date: moment()
        .add(-1, 'M')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      showMask: false,
      selItem: {},
      pageType: 0
    }
  }

  componentWillMount() {
    this.getListData({ offset: 0, limit: 6 })
  }
  // 获取列表数据
  getListData({ offset = 0, limit = 6 }) {
    const { clinic_id, ExaminationTriageChecking } = this.props
    const { keyword, start_date, end_date } = this.state
    let requestData = {
      clinic_id,
      offset,
      limit
    }
    if (keyword !== '') {
      requestData.keyword = keyword
    }
    if (start_date !== '') {
      requestData.start_date = start_date
    }
    if (end_date !== '') {
      requestData.end_date = end_date
    }
    ExaminationTriageChecking(requestData)
  }
  // 显示待收费
  showTobeCharged() {
    let { checking_data = [], pageInfo } = this.props
    console.log('checking_data====', checking_data)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {checking_data.map((patient, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      let patient_id = patient.patient_id
                      this.props.patientSelect({ patient_id })
                      Router.push('/treatment/registration/list_detail')
                    }}>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: '#31B0B3', border: '1px solid #31B0B3' }}>检查中</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.doctor_name}</a>
                    </span>
                    <span>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>更新时间：</a>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span
                      onClick={() => {
                        // this.setState({showMask: true, selItem: patient})
                        this.setState({ pageType: 1, selItem: patient, order_status: 20 })
                      }}
                    >
                      检查中({patient.checking_total_count})
                    </span>
                    <span
                      onClick={() => {
                        // this.setState({showMask: true, selItem: patient})
                        this.setState({ pageType: 1, selItem: patient, order_status: 30 })
                      }}
                    >
                      已检查({patient.checked_total_count})
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <PageCard
          offset={pageInfo.offset}
          limit={pageInfo.limit}
          total={pageInfo.total}
          onItemClick={({ offset, limit }) => {
            this.getListData({ offset, limit })
          }}
        />
      </div>
    )
  }
  // 加载
  render() {
    const { pageType, selItem, order_status } = this.state
    return (
      <div>
        {pageType === 1 ? (
          <ExamDetailScreen
            triagePatient={selItem}
            order_status={order_status}
            back2List={() => {
              this.setState({ pageType: 0 })
              this.getListData({ offset: 0, limit: 6 })
            }}
          />
        ) : (
          <div>
            <div className={'childTopBar'}>
              <span onClick={() => Router.push('/treatment/exam')}>待检查</span>
              <span className={'sel'}>检查中</span>
              <span onClick={() => Router.push('/treatment/exam/checked')}>已检查</span>
            </div>
            <div className={'filterBox'}>
              <div className={'boxLeft'}>
                <div className={'dateDiv'}>
                  <DatePicker
                    placeholder={'开始日期'}
                    value={moment(moment(this.state.start_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                    onChange={(date, str) => {
                      if (date) {
                        this.setState({ start_date: moment(date).format('YYYY-MM-DD') })
                      }
                    }}
                  />
                </div>
                <div className={'dateDiv'}>
                  <DatePicker
                    placeholder={'结束日期'}
                    value={moment(moment(this.state.end_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                    onChange={(date, str) => {
                      if (date) {
                        this.setState({ end_date: moment(date).format('YYYY-MM-DD') })
                      }
                    }}
                  />
                </div>
                <input
                  type='text'
                  placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码'
                  onClick={e => {
                    this.setState({ keyword: e.target.value })
                  }}
                />
                <button
                  onClick={() => {
                    this.getListData({ offset: 0, limit: 6 })
                  }}
                >
                  查询
                </button>
              </div>
            </div>
            {this.showTobeCharged()}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    clinic_id: state.user.data.clinic_id,
    checking_data: state.examinationTriages.checking_data,
    pageInfo: state.examinationTriages.checking_page_info
  }
}

export default connect(
  mapStateToProps,
  { ExaminationTriageChecking, patientSelect }
)(InInspectionScreen)
