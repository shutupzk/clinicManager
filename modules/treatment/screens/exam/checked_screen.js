import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { ExaminationTriageChecked, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, DatePicker } from '../../../../components'
import ExamDetailScreen from './components/exam_detail_screen'

class CheckedScreen extends Component {
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
      pageType: 0,
      selItem: {}
    }
  }

  componentWillMount() {
    this.getListData({ offset: 0, limit: 6 })
  }
  // 获取列表数据
  getListData({ offset = 0, limit = 6 }) {
    const { clinic_id, ExaminationTriageChecked } = this.props
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
    ExaminationTriageChecked(requestData)
  }
  // 显示待收费
  showTobeCharged() {
    const { checked_data, pageInfo } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {checked_data.map((patient, index) => {
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
                    <span style={{ color: '#31B0B3', border: '1px solid #31B0B3' }}>已检查</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.clinic_triage_patient_id}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.order_doctor_name}</a>
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
                        this.setState({ pageType: 1, selItem: patient })
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

  // 收费详情
  gotoChargeDetail() {
    Router.push('/treatment/charge/toll')
  }
  // 加载
  render() {
    const { pageType, selItem } = this.state
    return (
      <div>
        {pageType === 1 ? (
          <ExamDetailScreen
            triagePatient={selItem}
            order_status={30}
            back2List={() => {
              this.setState({ pageType: 0 })
              this.getListData({ offset: 0, limit: 6 })
            }}
          />
        ) : (
          <div>
            <div className={'childTopBar'}>
              <span onClick={() => Router.push('/treatment/exam')}>待检查</span>
              <span onClick={() => Router.push('/treatment/exam/inInspection')}>检查中</span>
              <span className={'sel'}>已检查</span>
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
  return {
    clinic_id: state.user.data.clinic_id,
    checked_data: state.examinationTriages.checked_data,
    pageInfo: state.examinationTriages.checked_page_info
  }
}

export default connect(
  mapStateToProps,
  { ExaminationTriageChecked, patientSelect }
)(CheckedScreen)
