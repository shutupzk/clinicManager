import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryDrugRefundTraigeList, drugRefundTraigeSelect, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, DatePicker } from '../../../../components'

class DrugHasBeenWithdrawnScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: moment()
        .add(-7, 'd')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      keyword: ''
    }
  }

  componentDidMount() {
    this.getTriagePatientListData({})
  }

  getTriagePatientListData({ offset, limit }) {
    const { clinic_id, queryDrugRefundTraigeList } = this.props
    const { start_date, end_date, keyword } = this.state
    queryDrugRefundTraigeList({ keyword, offset, limit, clinic_id, start_date, end_date })
  }

  goToDetail(selectId) {
    const { drugRefundTraigeSelect } = this.props
    drugRefundTraigeSelect(selectId)
    Router.push('/treatment/drugdelivery/drugDrawnDetail')
  }

  showTriageList() {
    let { triagePatientsPage, triagePatients } = this.props
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {triagePatients.map((patient, index) => {
              let statusColor = '#31B0B3'
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
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{'已退药'}</span>
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
                      <a>登记人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>登记时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>更新时间：</a>
                      <a style={{ color: 'rgb(153, 153, 153)' }}>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span
                      onClick={() => {
                        this.goToDetail(patient.clinic_triage_patient_id)
                      }}
                    >
                      查看
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <PageCard
          offset={triagePatientsPage.offset}
          limit={triagePatientsPage.limit}
          total={triagePatientsPage.total}
          onItemClick={({ offset, limit }) => {
            this.getTriagePatientListData({ offset, limit })
          }}
        />
      </div>
    )
  }

  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/drugdelivery')}>待发药</span>
          <span onClick={() => Router.push('/treatment/drugdelivery/drugHasBeenIssued')}>已发药</span>
          <span className={'sel'}>已退药</span>
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
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button onClick={() => this.getTriagePatientListData({})}>查询</button>
          </div>
        </div>
        {this.showTriageList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.drugDeliveryRefund.traige_list,
    triagePatientsPage: state.drugDeliveryRefund.traige_list_page
  }
}

export default connect(mapStateToProps, { queryDrugRefundTraigeList, drugRefundTraigeSelect, patientSelect })(DrugHasBeenWithdrawnScreen)
