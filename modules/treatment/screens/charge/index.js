import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { triagePatientsList } from '../../../../ducks'
import moment from 'moment'
import { getAgeByBirthday } from '../../../../utils'

class ChargeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    }
  }

  componentDidMount() {
    const { clinic_id, triagePatientsList } = this.props
    triagePatientsList({ clinic_id, is_today: true, register_type: 2 })
  }
	// 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }

  getTriagePatientListData(treat_status) {
    const { triagePatients } = this.props
    let array = []
    let today = moment().format('YYYY-MM-DD')
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      if (moment(patient.visit_date).format('YYYY-MM-DD') !== today) continue
      if (!patient.treat_status) continue
      if (treat_status) {
        if (!patient.reception_time) continue
      } else {
        if (patient.reception_time) continue
      }
      array.push(patient)
    }
    return array.sort((a, b) => {
      if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return 1
      return -1
    })
  }
  getUnTriagePatientListData() {
    const { triagePatients } = this.props
    let array = []
    let today = moment().format('YYYY-MM-DD')
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      if (moment(patient.visit_date).format('YYYY-MM-DD') !== today) continue
      if (patient.treat_status) continue
      array.push(patient)
    }
    return array.sort((a, b) => {
      if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return -1
      return 1
    })
  }

	// 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
  }
	// 显示待收费
  showTobeCharged() {
    const array = this.getUnTriagePatientListData(false)
    let {pageType} = this.state
    // if (pageType === 1) return null
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {array.map((patient, index) => {
              // let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.treat_status === true ? '已收费' : '待收费'}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    {pageType !== 3 ? <span><a>接诊科室：</a><a>{patient.department_name}</a></span> : ''}
                    {pageType !== 3 ? <span><a>接诊医生：</a><a>{patient.doctor_name}</a></span> : ''}
                    {pageType === 3 ? <span><a>挂账金额：</a><a>￥337</a></span> : ''}
                    {pageType === 1 ? <span><a>登记人员：</a><a>{patient.register_personnel_name}</a></span> : ''}
                    {pageType === 1 ? <span><a>登记时间：</a><a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a></span> : ''}
                    {pageType === 2 ? <span><a>收费人员：</a><a>{patient.register_personnel_name}</a></span> : ''}
                    {pageType === 2 ? <span><a>收费时间：</a><a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a></span> : ''}
                    {pageType === 4 ? <span><a>退款人员：</a><a>{patient.register_personnel_name}</a></span> : ''}
                    {pageType === 4 ? <span><a>退款时间：</a><a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a></span> : ''}
                  </div>
                  {this.renderOperate()}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
      </div>
    )
  }
  renderOperate() {
    const {pageType} = this.state
    switch (pageType) {
      case 1:
        return (
          <div className={'itemBottom'}>
            <span>￥337.0</span>
            <span onClick={() => {
              this.gotoChargeDetail()
            }}>收费</span>
          </div>
        )
      case 2:
        return (
          <div className={'itemBottom'}>
            <span>￥337.0</span>
            <span onClick={() => {}}>打印发票</span>
            <span onClick={() => {}}>退费</span>
          </div>
        )
      case 3:
        return (
          <div className={'itemBottom'}>
            <span onClick={() => {}}>查看详情</span>
            <span onClick={() => {}}>还账</span>
          </div>
        )
      case 4:
        return (
          <div className={'itemBottom'}>
            <span>￥337.0</span>
            <span onClick={() => {}}>打印发票</span>
          </div>
        )
    }
  }

  // 显示订单管理
  showOrderManagement() {
    const array = []
    for (let i = 0; i < 10; i++) {
      let item = {}
      array.push(item)
    }
    return (
      <div className={'detailBox'} style={{float: 'left'}}>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>交易时间</div>
              <div>平台订单号</div>
              <div>业务类型</div>
              <div>就诊人</div>
              <div>门诊ID</div>
              <div>支付方式</div>
              <div>支付金额</div>
              <div>支付状态</div>
              <div>操作员</div>
              <div>操作</div>
            </li>
            {array.map((item, index) => {
              return (
                <li>
                  <div>2018-04-08 12:23:22</div>
                  <div>4002018040812345</div>
                  <div>挂号费</div>
                  <div>王俊凯</div>
                  <div>1231423412</div>
                  <div>支付宝</div>
                  <div>100.00元</div>
                  <div>支付中</div>
                  <div>蔡徐坤</div>
                  <div>更新状态</div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx>
          {`
            .feeScheduleBox ul li div:nth-child(2),
            .feeScheduleBox ul li div:nth-child(1) {
              flex:2;
            }
            .feeScheduleBox ul li div{
              flex:1;
            }
          `}
        </style>
      </div>
    )
  }

  // 收费详情
  gotoChargeDetail() {
    Router.push('/treatment/charge/chargeDetail')
  }
  // 选择异常/正常订单
  renderOrderType() {
    const {OrderType} = this.state
    return (
      <div>
        <label style={{margin: '20px 15px', float: 'left'}}>
          <input type='radio'
            name={'listType'}
            checked={OrderType === 1}
            onChange={() => this.setState({ OrderType: 1 })}
          /> 异常订单
        </label>
        <label style={{margin: '20px 15px', float: 'left'}}>
          <input type='radio'
            name={'listType'}
            checked={OrderType === 2}
            onChange={() => this.setState({ OrderType: 2 })}
          /> 正常订单
        </label>
      </div>
    )
  }
  // 加载
  render() {
    const {pageType} = this.state
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
						待收费
					</span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
						已收费
					</span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
						已挂账
					</span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
						已退款
					</span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
						订单管理
					</span>
        </div>
        <div className={'filterBox'}>
          {pageType === 5 ? this.renderOrderType() : ''}
          <div className={'boxLeft'}>
            <input type='date' placeholder='选择日期' />
            <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
            <button>查询</button>
          </div>
        </div>
        {pageType !== 5 ? this.showTobeCharged() : this.showOrderManagement()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  }
}

export default connect(mapStateToProps, { triagePatientsList })(ChargeScreen)
