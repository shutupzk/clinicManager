import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryMedicalRecord, queryDrugDeliveryList } from '../../../../ducks'
import { getAgeByBirthday, formatMoney } from '../../../../utils'
import { PageCard } from '../../../../components'

class PendingDetailDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSelect: false,
      selectArray: []
    }
  }

  async componentDidMount() {
    const { queryMedicalRecord, triagePatientSelectId, queryDrugDeliveryList } = this.props
    queryDrugDeliveryList({ clinic_triage_patient_id: triagePatientSelectId, order_status: '01' })
    await queryMedicalRecord(triagePatientSelectId)
  }

  changeAllSelect() {
    const { allSelect } = this.state
    const selectArray = allSelect ? [] : this.props.drug_delivery_ids
    this.setState({ allSelect: !allSelect, selectArray })
  }

  itemSelect(itemId, checked) {
    if (checked) this.deleteItem(itemId)
    else this.addItem(itemId)
  }

  deleteItem(itemId) {
    const { selectArray } = this.state
    let index = []
    for (let i = 0; i < selectArray.length; i++) {
      if (selectArray[i] === itemId) index.push(i)
    }
    for (let it of index) selectArray.splice(it, 1)
    this.setState({ selectArray })
  }

  addItem(itemId) {
    const { selectArray } = this.state
    selectArray.push(itemId)
    this.setState({ selectArray })
  }

  // 加载
  render() {
    const { triagePatients, triagePatientSelectId, medicalRecord, drug_delivery_list, drug_delivery_list_page } = this.props
    const { allSelect } = this.state
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === triagePatientSelectId) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex, department_name, doctor_name, updated_time } = triagePatient

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
            <textarea value={medicalRecord.diagnosis} disabled />
          </div>
          <div>
            <label>过敏史：</label>
            <textarea value={medicalRecord.allergic_history} disabled />
          </div>
        </div>
        <div className={'feeScheduleBox'}>
          <ul>
            <li>
              <div>
                <input type={'checkbox'} checked={allSelect} onChange={() => this.changeAllSelect()} />
              </div>
              <div>序号</div>
              <div>药品名称</div>
              <div>规格</div>
              <div>生产厂商</div>
              <div>剂型</div>
              <div>数量</div>
            </li>
            {drug_delivery_list.map((item, iKey) => {
              let checked = this.state.selectArray.indexOf(item.id + '') > -1
              return (
                <li key={iKey}>
                  <div>
                    <input
                      type={'checkbox'}
                      checked={checked}
                      onChange={() => {
                        this.itemSelect(item.id + '', checked)
                      }}
                    />
                  </div>
                  <div>{iKey + 1}</div>
                  <div>{item.name}</div>
                  <div>{item.specification}</div>
                  <div>{item.manu_factory_name}</div>
                  <div>{item.dose_form_name}</div>
                  <div>{item.amount}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={drug_delivery_list_page.offset}
          limit={drug_delivery_list_page.limit}
          total={drug_delivery_list_page.total}
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
            justify-content: center;
            align-items: center;
            display: flex;
          }
          .filterBox > div > textarea {
            width: 70%;
            height: 35px;
            resize: none;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            border: 1px solid #d8d8d8;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    triagePatients: state.drugDeliveryPending.traige_list,
    triagePatientSelectId: state.drugDeliveryPending.traige_selectId,
    medicalRecord: state.medicalRecords.data,
    drug_delivery_list_page: state.drugDeliveryPending.drug_delivery_list_page,
    drug_delivery_ids: state.drugDeliveryPending.drug_delivery_list_page.ids || [],
    drug_delivery_list: state.drugDeliveryPending.drug_delivery_list
  }
}

export default connect(mapStateToProps, { queryMedicalRecord, queryDrugDeliveryList })(PendingDetailDrugScreen)
