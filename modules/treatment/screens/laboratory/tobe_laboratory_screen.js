import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { LaboratoryTriageWaiting, LaboratoryTriageList, LaboratoryTriageUpdate, patientSelect } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Confirm, DatePicker } from '../../../../components'

class TobeLaboratoryScreen extends Component {
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
      items: {}
    }
  }

  componentWillMount() {
    this.getListData({ offset: 0, limit: 6 })
  }
  // 获取列表数据
  getListData({ offset = 0, limit = 6 }) {
    const { clinic_id, LaboratoryTriageWaiting } = this.props
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
    LaboratoryTriageWaiting(requestData)
  }
  // 显示待收费
  showTobeCharged() {
    const { waiting_data, pageInfo, LaboratoryTriageList } = this.props
    console.log('waiting_data====', waiting_data)
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {waiting_data.map((patient, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      let patient_id = patient.patient_id
                      // console.log('patient_id====', patient_id)
                      this.props.patientSelect({ patient_id })
                      Router.push('/treatment/registration/list_detail')
                    }}>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: '#31B0B3', border: '1px solid #31B0B3' }}>待检验</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>病人ID：</a>
                      <a>{patient.patient_id}</a>
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
                      onClick={async () => {
                        let labors = await LaboratoryTriageList({ clinic_triage_patient_id: patient.clinic_triage_patient_id, order_status: '10' })
                        this.setState({ showMask: true, selItem: patient, labors })
                      }}
                    >
                      待检验
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
  // 创建检验
  async determineExam() {
    const { selItem, items } = this.state
    const { LaboratoryTriageUpdate } = this.props
    let array = []
    for (let laboratory_patient_id in items) {
      array.push({ laboratory_patient_id: laboratory_patient_id })
    }
    const { clinic_triage_patient_id } = selItem
    const order_status = '20'
    let error = await LaboratoryTriageUpdate({ clinic_triage_patient_id, order_status, items: JSON.stringify(array) })
    if (error) {
      this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
      this.getListData({ offset: 0, limit: 6 })
      this.setState({ showMask: false })
    }
  }
  // 确认检验
  renderDetermine() {
    const { selItem, labors, items } = this.state
    console.log('selItem', labors, selItem)
    return (
      <div className={'mask'}>
        <div className={'maskBox'}>
          <div className={'maskBox_top'}>
            <span>检验确认</span>
            <span />
          </div>
          <div className={'maskBox_center'}>
            <div className={'center_top'}>
              <div>
                就诊人姓名：{selItem.patient_name}&nbsp;&nbsp;&nbsp;{selItem.sex === 0 ? '女' : '男'}
              </div>
              <div>年龄：{getAgeByBirthday(selItem.birthday)}</div>
              <div>病人ID：{selItem.patient_id}</div>
            </div>
            <div className={'centerCotent'}>
              <table>
                <thead>
                  <tr>
                    <td>选择</td>
                    <td style={{ flex: 9 }}>检验项目</td>
                  </tr>
                </thead>
                <tbody>
                  {labors.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            type='checkbox'
                            onChange={e => {
                              console.log('clinic_examination_name ==========', selItem.clinic_triage_patient_id, item.laboratory_patient_id, e.target.checked)
                              let checked = e.target.checked
                              if (!checked) {
                                delete items[item.laboratory_patient_id]
                              } else {
                                items[item.laboratory_patient_id] = item.laboratory_patient_id
                              }
                              this.setState({ items })
                            }}
                          />
                        </td>
                        <td style={{ flex: 9 }}>{item.clinic_laboratory_name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className={'maskBox_bottom'}>
            <div className={'bottomBtn'}>
              <button className={'addBtn'} onClick={() => this.setState({ showMask: false })}>取消</button>
              <button
                className={'addBtn'}
                onClick={() => {
                  this.determineExam()
                }}
              >
                确认
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
          <span className={'sel'}>待检验</span>
          <span onClick={() => Router.push('/treatment/inspect/inInspection')}>检验中</span>
          <span onClick={() => Router.push('/treatment/inspect/checked')}>已检验</span>
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
              placeholder='搜索就诊人姓名/病人ID/身份证号码/手机号码'
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
  return {
    clinic_id: state.user.data.clinic_id,
    waiting_data: state.laboratoryTriages.waiting_data,
    pageInfo: state.laboratoryTriages.waiting_page_info
  }
}

export default connect(
  mapStateToProps,
  { LaboratoryTriageWaiting, LaboratoryTriageList, LaboratoryTriageUpdate, patientSelect }
)(TobeLaboratoryScreen)
