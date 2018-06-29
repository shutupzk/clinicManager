import React, { Component } from 'react'
import { connect } from 'react-redux'

class MemberInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { clinic_triage_patient_id, triagePatients } = this.props
    for (let item of triagePatients) {
      if (item.clinic_triage_patient_id === clinic_triage_patient_id) {
        this.setState({ patientInfo: item })
        break
      }
    }
  }

  async submit() {}

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }

  showMemberInfo() {
    return (
      <div className={'detailBox'}>
        <div className={'blankBox'}>
          <div className={'cardNumber'}>
            <span>储值卡号</span>
            <span>18507496262（储值卡号为手机号码）</span>
          </div>
          <div className={'memberLevel'}>
            <span>会员等级</span>
            <span>铂金卡会员</span>
          </div>
          <div className={'changeLevel'}>
            <button className={'addBtn'}>修改等级</button>
          </div>
        </div>
        <div className={'blankBox discountSituation'}>
          <span>折扣情况：</span>
          <ul>
            <li>检验医嘱：88%</li>
            <li>检查医嘱：88%</li>
            <li>治疗医嘱：88%</li>
            <li>处方医嘱：88%</li>
            <li>挂号费：88%</li>
            <li>其他费用：88%</li>
          </ul>
        </div>
        <div className={'blankBox discountSituation'}>
          <span>储值卡信息：</span>
          <ul>
            <li>本金余额：1,000.00元</li>
            <li>赠送金余额：1,000.00元</li>
            <li>累计充值：1,000.00元</li>
            <li>累计消费：1,000.00元</li>
          </ul>
          <div className={'cardInfoBtn'}>
            <button className={'addBtn'}>充值</button>
            <button className={'addBtn'}>退款</button>
            <button className={'addBtn'}>查看记录</button>
            <button className={'addBtn'}>设置密码</button>
          </div>
        </div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return <div>{this.showMemberInfo()}</div>
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    triagePatients: state.triagePatients.data,
    clinic_id: state.user.data.clinic_id,
    clinic_triage_patient_id: state.triagePatients.selectId
  }
}
export default connect(
  mapStateToProps,
  {}
)(MemberInfoScreen)
