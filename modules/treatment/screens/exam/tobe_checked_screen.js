import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { ExaminationTriageWaiting, ExaminationTriageList, ExaminationTriageUpdate } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Confirm } from '../../../../components'

class TobeCheckedScreen extends Component {
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
      selItem: {},
      items: {}
    }
  }

  componentWillMount() {
    this.getListData({ offset: 0, limit: 6 })
  }
  // 获取列表数据
  getListData({ offset = 0, limit = 6 }) {
    const { clinic_id, ExaminationTriageWaiting } = this.props
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
    ExaminationTriageWaiting(requestData)
  }
  // 显示待收费
  showTobeCharged() {
    const { waiting_data, pageInfo, ExaminationTriageList } = this.props
    console.log('waiting_data====', waiting_data)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {waiting_data.map((patient, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: '#31B0B3', border: '1px solid #31B0B3' }}>待检查</span>
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
                      onClick={async () => {
                        let exams = await ExaminationTriageList({ clinic_triage_patient_id: patient.clinic_triage_patient_id, order_status: '10' })
                        this.setState({ showMask: true, selItem: patient, exams })
                      }}
                    >
                      待检查
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
  // 创建检查
  async determineExam() {
    const { selItem, items } = this.state
    const { ExaminationTriageUpdate } = this.props
    let array = []
    for (let examination_patient_id in items) {
      array.push({ examination_patient_id: examination_patient_id })
    }
    const { clinic_triage_patient_id } = selItem
    const order_status = '20'
    let error = await ExaminationTriageUpdate({ clinic_triage_patient_id, order_status, items: JSON.stringify(array) })
    if (error) {
      this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
      this.getListData({ offset: 0, limit: 6 })
      this.setState({ showMask: false })
    }
  }
  // 确认检查
  renderDetermine() {
    // let items = [{}]
    const { selItem, exams, items } = this.state
    console.log('selItem', selItem)
    return (
      <div className={'mask'}>
        <div className={'maskBox'}>
          <div className={'maskBox_top'}>
            <span>检查确认</span>
            <span />
          </div>
          <div className={'maskBox_center'}>
            <div className={'center_top'}>
              <div>
                就诊人姓名：{selItem.patient_name}&nbsp;&nbsp;&nbsp;{selItem.sex === 0 ? '女' : '男'}
              </div>
              <div>年龄：{getAgeByBirthday(selItem.birthday)}</div>
              <div>门诊ID： </div>
            </div>
            <div className={'centerCotent'}>
              <table>
                <thead>
                  <tr>
                    <td>选择</td>
                    <td style={{ flex: 9 }}>检查项目</td>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            type='checkbox'
                            onChange={e => {
                              let checked = e.target.checked
                              if (!checked) {
                                delete items[item.examination_patient_id]
                              } else {
                                items[item.examination_patient_id] = item.examination_patient_id
                              }
                              this.setState({ items })
                            }}
                          />
                        </td>
                        <td style={{ flex: 9 }}>{item.clinic_examination_name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className={'maskBox_bottom'}>
            <div>
              <button onClick={() => this.setState({ showMask: false })}>取消</button>
              <button
                onClick={() => {
                  this.determineExam()
                }}
              >
                保存
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .maskBox {
            width: 950px;
            height: 683px;
            background: rgba(244, 247, 248, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .maskBox_top {
            border-bottom: 1px solid #d8d8d8;
            width: 100%;
            height: 93px;
          }
          .maskBox_top > span:nth-child(1) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 17px;
            height: 17px;
            text-indent: 0;
            margin: 40px 0 0 60px;
            float: left;
          }
          // .maskBox_top span:last-child {
          //   width: 40px;
          //   height: 40px;
          //   background: rgba(255,95,87,1);
          //   float: right;
          //   color: #ffffff;
          //   font-size: 20px;
          //   text-align: center;
          //   text-indent: 10px;
          //   line-height: 35px;
          //   border-bottom-left-radius: 100%;
          //   cursor: pointer;
          // }
          .maskBox_center {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            // background:#dddddd;
          }
          .center_top {
            width: 100%;
            margin-top: 20px;
            display: flex;
          }
          .center_top > div {
            flex: 1;
          }
          .centerCotent {
            width: 100%;
            margin: 20px 0;
            height: 340px;
            // background:#a0a0a0;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .centerCotent table {
            width: 99%;
            border-collapse: collapse;
            border: 1px solid #d8d8d8;
            display: flex;
            flex-direction: column;
          }
          .centerCotent table thead tr {
            display: flex;
            height: 40px;
            border-bottom: 1px solid #d8d8d8;
          }
          .centerCotent table thead td {
            flex: 1;
            border-right: 1px solid #d8d8d8;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-weight: bold;
          }
          .centerCotent table tbody {
          }
          .centerCotent table tbody tr {
            display: flex;
            border-bottom: 1px solid #d8d8d8;
            height: 30px;
          }
          .centerCotent table tbody tr td {
            flex: 1;
            border-right: 1px solid #d8d8d8;
            text-align: center;
            height: 30px;
            line-height: 30px;
          }
          .centerCotent table tbody tr td input {
            width: 100%;
            border: none;
            background: transparent;
            outline-style: none;
          }
        `}</style>
      </div>
    )
  }
  // 加载
  render() {
    const { showMask } = this.state
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'}>待检查</span>
          <span onClick={() => Router.push('/treatment/exam/inInspection')}>检查中</span>
          <span onClick={() => Router.push('/treatment/exam/checked')}>已检查</span>
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
        {showMask ? this.renderDetermine() : ''}
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    clinic_id: state.user.data.clinic_id,
    waiting_data: state.examinationTriages.waiting_data,
    pageInfo: state.examinationTriages.waiting_page_info
  }
}

export default connect(
  mapStateToProps,
  { ExaminationTriageWaiting, ExaminationTriageList, ExaminationTriageUpdate }
)(TobeCheckedScreen)
