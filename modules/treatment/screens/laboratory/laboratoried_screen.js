import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { LaboratoryTriageChecked } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard } from '../../../../components'
import LaboraDetailScreen from './components/labora_detail_screen'

class LaboratoriedScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      showMask: false,
      order_status: '30',
      selItem: {}
    }
  }

  componentWillMount() {
    this.getListData({ offset: 0, limit: 6 })
  }
  // 获取列表数据
  getListData({ offset = 0, limit = 6 }) {
    const { clinic_id, LaboratoryTriageChecked } = this.props
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
    LaboratoryTriageChecked(requestData)
  }
  // 显示待收费
  showTobeCharged() {
    const { checked_data, pageInfo } = this.props
    console.log('checked_data====', checked_data)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {checked_data.map((patient, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: '#31B0B3', border: '1px solid #31B0B3' }}>检验中</span>
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
                        this.setState({ showMask: true, selItem: patient })
                      }}
                    >
                      已检验({patient.checked_total_count})
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
    const { selItem, order_status, showMask } = this.state
    return (
      <div>
        {showMask ? (
          <LaboraDetailScreen
            triagePatient={selItem}
            order_status={order_status}
            back2List={() => {
              this.setState({ showMask: false })
              this.getListData({ offset: 0, limit: 6 })
            }}
          />
        ) : (
          <div>
            <div className={'childTopBar'}>
              <span onClick={() => Router.push('/treatment/inspect')}>待检验</span>
              <span onClick={() => Router.push('/treatment/inspect/inInspection')}>检验中</span>
              <span className={'sel'}>已检验</span>
            </div>
            <div className={'filterBox'}>
              <div className={'boxLeft'}>
                <input
                  type='date'
                  placeholder='选择开始日期'
                  value={this.state.start_date}
                  onChange={e => {
                    this.setState({ start_date: e.target.value })
                  }}
                />
                <input
                  type='date'
                  placeholder='选择结束日期'
                  value={this.state.end_date}
                  onChange={e => {
                    this.setState({ end_date: e.target.value })
                  }}
                />
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
    checked_data: state.laboratoryTriages.checked_data,
    pageInfo: state.laboratoryTriages.checked_page_info
  }
}

export default connect(
  mapStateToProps,
  { LaboratoryTriageChecked }
)(LaboratoriedScreen)
