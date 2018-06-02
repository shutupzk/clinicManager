import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { getAgeByBirthday, formatMoney } from '../../../../utils'
import { PageCard } from '../../../../components'

class PendingDetailDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 加载
  render() {
    const { triagePatients, triagePatientSelectId } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === triagePatientSelectId) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex, department_name, doctor_name, updated_time } = triagePatient

    let b = '1233333333333312333333333333123333333333331233333333333312333333333333123333333333331233333333333312333333333333'

    return (
      <div className={'detailBox'}>
        <div className={'filterBox'}>
          <div style={{ flex: 2 }}>就诊人姓名：{patient_name}</div>
          <div style={{ flex: 1 }}>性别：{sex === 1 ? '男' : '女'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(birthday)}</div>
          <div style={{ flex: 2 }}>就诊ID：{triagePatient.cert_no}</div>
          <div style={{ flex: 2 }}>手机号码：{phone}</div>
          <div style={{ flex: 3 }}>就诊日期：{moment(visit_date).format('YYYY年MM月DD日')}</div>
        </div>
        <div className={'filterBox'}>
          <div style={{ flex: 1 }}>开单医生：{doctor_name}</div>
          <div style={{ flex: 1 }}>开单科室：{department_name}</div>
          <div style={{ flex: 1 }}>开单时间：{moment(updated_time).format('YYYY年MM月DD日')}</div>
          <div className={'boxRight'} style={{ flex: 2 }}>
            <button style={{ marginLeft: '38%' }}>
              <a>查看病历</a>
            </button>
            <button>
              <a>发药记录</a>
            </button>
          </div>
        </div>
        <div className={'filterBox'}>
          <div>
            <label>诊断：</label>
            <textarea
              style={{
                width: '70%',
                height: '30px'
              }}
              value={b}
              disabled
            />
          </div>
          <div>
            <label>过敏史：</label>
            <textarea
              style={{
                width: '70%',
                height: '30px'
              }}
              value={b}
              disabled
            />
          </div>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>选择</div>
              <div>序号</div>
              <div>药品名称</div>
              <div>规格</div>
              <div>数量</div>
              <div>金额</div>
              <div>折扣</div>
              <div>折后金额</div>
              <div>开费科室</div>
              <div>开费医生</div>
            </li>
            {[].map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{iKey + 1}</div>
                  <div>{item.name}</div>
                  <div>{formatMoney(item.price)}</div>
                  <div>{item.amount}</div>
                  <div>{formatMoney(item.total)}</div>
                  <div>{formatMoney(item.discount)}</div>
                  <div>{formatMoney(item.fee)}</div>
                  <div>{item.department_name}</div>
                  <div>{item.doctor_name}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={1}
          limit={1}
          total={1}
          onItemClick={({ offset, limit }) => {
            this.props.queryUnPaidOrders({ clinic_triage_patient_id: this.props.charge_unpay_selectId, offset, limit })
          }}
        />
        <div className={'feeScheduleBottom'}>
          <button>打印</button>
          <button onClick={() => this.setState({ pageType: 2 })}>结账</button>
        </div>
        <style jsx='true'>{`
          .filterBox {
            margin: 20px 0 0 65px;
            display: flex;
            line-height: 60px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
          }
          .filterBox div {
            flex: 1;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    triagePatients: state.drugDeliveryPending.traige_list,
    triagePatientSelectId: state.drugDeliveryPending.traige_selectId
  }
}

export default connect(mapStateToProps, {})(PendingDetailDrugScreen)
