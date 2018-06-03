import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryMedicalRecord, queryDrugDeliveryList } from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Confirm } from '../../../../components'

class PendingDetailDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      allSelect: false,
      selectArray: []
    }
  }

  async componentDidMount() {
    const { queryMedicalRecord, triagePatientSelectId, queryDrugDeliveryList } = this.props
    queryDrugDeliveryList({ clinic_triage_patient_id: triagePatientSelectId, order_status: '10' })
    await queryMedicalRecord(triagePatientSelectId)
  }

  // 提交发药记录
  commit() {
    let { selectArray } = this.state
    if (selectArray.length === 0) return this.refs.myAlert.alert('提示', '未勾选条目，请重新勾选！', null, 'Warning')
    this.refs.myAlert.confirm('确定发药？', '', null, async () => {})
  }

  changeAllSelect() {
    const { allSelect } = this.state
    const { allSelectStatus = true } = this.props.drug_delivery_list_page
    if (!allSelectStatus) {
      return this.refs.myAlert.alert('存在库存不足的条目', '请手动勾选！', null, 'Warning')
    }
    const selectArray = allSelect ? [] : this.props.drug_delivery_ids
    this.setState({ allSelect: !allSelect, selectArray })
  }

  itemSelect(itemId, checked, overAmount) {
    if (overAmount) this.refs.myAlert.alert('库存不足，无法发药！', '', null, 'Warning')
    if (checked || overAmount) this.deleteItem(itemId)
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

  // 查看发药项目
  renderDrugDeliveryList() {
    if (this.state.pageType !== 1) return null
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
              <a onClick={() => this.setState({ pageType: 2 })}>查看病历</a>
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
              <div style={{ flex: 1 }}>
                <input type={'checkbox'} checked={allSelect} onChange={() => this.changeAllSelect()} />
              </div>
              <div style={{ flex: 1 }}>序号</div>
              <div style={{ flex: 3 }}>药品名称</div>
              <div>药品类别</div>
              <div>规格</div>
              <div style={{ flex: 5 }}>生产厂商</div>
              <div>剂型</div>
              <div>药品库存</div>
              <div style={{ flex: 1 }}>数量</div>
              <div>发药状态</div>
            </li>
            {drug_delivery_list.map((item, iKey) => {
              let checked = this.state.selectArray.indexOf(item.id + '') > -1
              let { stock_amount = 0, amount = 1 } = item
              return (
                <li key={iKey}>
                  <div>
                    <input
                      type={'checkbox'}
                      checked={checked}
                      onChange={() => {
                        this.itemSelect(item.id + '', checked, amount > stock_amount)
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>{iKey + 1}</div>
                  <div style={{ flex: 3 }}>{item.name}</div>
                  <div>{item.charge_project_type_id === 1 ? '西/成药' : '中药'}</div>
                  <div>{item.specification}</div>
                  <div style={{ flex: 5 }}>{item.manu_factory_name}</div>
                  <div>{item.dose_form_name}</div>
                  <div>{stock_amount}</div>
                  <div style={{ flex: 1 }}>{amount}</div>
                  <div>待发药</div>
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
          <button onClick={() => this.commit()}>提交</button>
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

  // 查看病历报告
  renderMedicalRecord() {
    if (this.state.pageType !== 2) return null
    const { triagePatients, triagePatientSelectId } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === triagePatientSelectId) triagePatient = tp
    }
    const {
      chief_complaint,
      history_of_present_illness,
      history_of_past_illness,
      family_medical_history,
      body_examination,
      allergic_history,
      allergic_reaction,
      immunizations,
      diagnosis,
      cure_suggestion,
      remark
    } = this.props.medicalRecord
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', left: '324px', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>{triagePatient.patient_name} 的病历信息</span>
            <span onClick={() => this.setState({ pageType: 1 })}>x</span>
          </div>
          <div className={'contentBox'}>
            <ul>
              <li>
                <label>主诉</label>
                <input value={chief_complaint} disabled />
              </li>
              <li>
                <label>现病史</label>
                <input value={history_of_present_illness} disabled />
              </li>
              <li>
                <label>既往史</label>
                <input type='text' value={history_of_past_illness} disabled />
              </li>
              <li>
                <label>家族史</label>
                <input type='text' value={family_medical_history} disabled />
              </li>
              <li>
                <label>体格检查</label>
                <input type='text' value={body_examination} disabled />
              </li>
              <li>
                <label>过敏史</label>
                <input type='text' value={allergic_history} disabled />
              </li>
              <li>
                <label>过敏反应</label>
                <input value={allergic_reaction} disabled />
              </li>
              <li>
                <label>疫苗接种史</label>
                <input value={immunizations} disabled />
              </li>
              <li>
                <label>初步诊断</label>
                <input value={diagnosis} disabled />
              </li>
              <li>
                <label>诊疗意见</label>
                <input value={cure_suggestion} disabled />
              </li>
              <li>
                <label>备注</label>
                <input value={remark} disabled />
              </li>
              <li />
            </ul>
          </div>
        </div>

        <style jsx='true'>{`
            .contentBox {
              margin: 2px 45px 0 45px;
              height: 500px;
            }
            .contentBox ul li {
              margin:0
              height: 30px;
              display: flex;
              float: left;
              position: relative;
              width: 49%
              margin-right: 1%;
              margin-top: 20px;
            }
            .contentBox ul li>label{
              margin:0
              width: 89px;
              height: 30px;
              line-height:35px
            }
            .contentBox input {
              margin:0
              width: 300px;
              height: 30px;
              background: rgba(245, 248, 249, 1);
              border-radius: 4px;
              padding-right: 5px
            }
          `}</style>
      </div>
    )
  }

  // 加载
  render() {
    return (
      <div>
        {this.renderDrugDeliveryList()}
        {this.renderMedicalRecord()}
        <Confirm ref='myAlert' />
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
