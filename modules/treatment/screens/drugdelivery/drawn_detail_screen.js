import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryMedicalRecord, queryDrugDeliveryList, drugDeliveryRecover, queryDrugDeliveryRefundRecordList, queryDrugDeliveryRefundRecordDetail } from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Confirm } from '../../../../components'

class DrawnDetailDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      allSelect: false,
      selectArray: [],
      selectRecordId: ''
    }
  }

  async componentDidMount() {
    const { queryMedicalRecord, triagePatientSelectId } = this.props
    this.queryCommonData({})
    await queryMedicalRecord(triagePatientSelectId)
  }

  queryCommonData({ offset, limit }) {
    const { triagePatientSelectId, queryDrugDeliveryList } = this.props
    queryDrugDeliveryList({ clinic_triage_patient_id: triagePatientSelectId, order_status: '40', offset, limit })
  }

  // 展示历史列表
  async renderRecord() {
    const { triagePatientSelectId, queryDrugDeliveryRefundRecordList } = this.props
    await queryDrugDeliveryRefundRecordList({ clinic_triage_patient_id: triagePatientSelectId })
    this.setState({ pageType: 3 })
  }

  // 展示历史详情
  async showRecordDetail(drug_delivery_refund_record_id) {
    await this.props.queryDrugDeliveryRefundRecordDetail({ drug_delivery_refund_record_id })
    this.setState({ pageType: 4, selectRecordId: drug_delivery_refund_record_id })
  }

  // 查看发药项目
  renderDrugDeliveryList() {
    const { triagePatients, triagePatientSelectId, medicalRecord, drug_delivery_list, drug_delivery_list_page } = this.props
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === triagePatientSelectId) triagePatient = tp
    }
    const { birthday, patient_name, phone, visit_date, sex, department_name, doctor_name, updated_time } = triagePatient

    const status_map = { '10': '待发药', '30': '已发药', '40': '已退药' }

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
              <a onClick={() => this.renderRecord()}>退药记录</a>
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
              <div style={{ flex: 1 }}>序号</div>
              <div style={{ flex: 3 }}>药品名称</div>
              <div>药品类别</div>
              <div>规格</div>
              <div style={{ flex: 5 }}>生产厂商</div>
              <div>药品库存</div>
              <div style={{ flex: 1 }}>数量</div>
              <div style={{ flex: 2 }}>发药状态</div>
            </li>
            {drug_delivery_list.map((item, iKey) => {
              let { stock_amount = 0, amount = 1 } = item
              return (
                <li key={iKey}>
                  <div style={{ flex: 1 }}>{iKey + 1}</div>
                  <div style={{ flex: 3 }}>{item.name}</div>
                  <div>{item.charge_project_type_id === 1 ? '西/成药' : '中药'}</div>
                  <div>{item.specification}</div>
                  <div style={{ flex: 5 }}>{item.manu_factory_name}</div>
                  <div>{stock_amount}</div>
                  <div style={{ flex: 1 }}>{amount}</div>
                  <div style={{ flex: 2 }}>{status_map[item.order_status]}</div>
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
            this.queryCommonData({ offset, limit })
          }}
        />
        <div className={'feeScheduleBottom'}>
          <button>打印</button>
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

  // 查看历史开药记录
  renderDrugDeliveryRecord() {
    if (this.state.pageType !== 3) return null
    const { drug_delivery_record_list, drug_delivery_record_list_page, triagePatientSelectId } = this.props
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', height: '600px', left: '324px' }}>
          <div className='doctorList_top'>
            <span>历史退药记录</span>
            <span onClick={() => this.setState({ pageType: 1 })}>x</span>
          </div>
          <div className={'meical_nodel_item'}>
            <div style={{ margin: '20px 0 20px 0' }}>
              <ul style={{ background: '#efeaea' }}>
                <li>就诊日期</li>
                <li>发药时间</li>
                <li>接诊医生</li>
                <li>发药医生</li>
                <li>药品名称</li>
                <li>操 作</li>
              </ul>
            </div>
            {drug_delivery_record_list.map((item, iKey) => {
              if (!item) return null
              const { doctor_name, opration_name, created_time, project_name, visit_date } = item
              return (
                <div key={iKey}>
                  <ul>
                    <li style={{ flex: 2 }}>{moment(visit_date).format('YYYY-MM-DD')}</li>
                    <li>{moment(created_time).format('YYYY-MM-DD HH:mm:ss')}</li>
                    <li>{doctor_name}</li>
                    <li>{opration_name}</li>
                    <li>{project_name} ...</li>
                    <li style={{ cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }} onClick={() => this.showRecordDetail(item.drug_delivery_refund_record_id)}>
                      查看详情
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
          <PageCard
            style={{ width: '90%' }}
            offset={drug_delivery_record_list_page.offset}
            limit={drug_delivery_record_list_page.limit}
            total={drug_delivery_record_list_page.total}
            onItemClick={({ offset, limit }) => {
              this.props.queryDrugDeliveryRefundRecordList({ offset, limit, clinic_triage_patient_id: triagePatientSelectId })
            }}
          />
        </div>
        <style jsx='true'>{`
          .meical_nodel_item {
            width: 90%;
            margin: 22px 5% 0 5%;
            padding: 0;
          }
          .meical_nodel_item div {
            width: 100%;
            height: 20px;
            border: 1px solid #d8d8d8;
            margin-top: 10px;
          }

          .meical_nodel_item ul {
            display: flex;
          }

          .meical_nodel_item ul li {
            margin:0;
            border-right: 1px solid #d8d8d8;
            float: left;
            flex:2
            height: 20px;
            text-align: center;
          }

          .meical_nodel_item ul li:nth-child(6){
            float: left;
            flex:1
            border-right: none
            text-align: center;
          }
        `}</style>
      </div>
    )
  }

  // 查看历史开药详情
  renderDrugDeliveryDetail() {
    if (this.state.pageType !== 4) return null
    const { items, item_page } = this.props
    const { selectRecordId } = this.state
    const status_map = { '10': '待发药', '30': '已发药', '40': '已退药' }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', height: '600px', left: '324px' }}>
          <div className='doctorList_top'>
            <span>退药详情</span>
            <div style={{ float: 'left', marginLeft: '20%' }}>
              <button style={{ float: 'none', width: '100px', marginLeft: '400px' }} onClick={() => this.setState({ pageType: 3 })}>
                返回列表
              </button>
            </div>
            <span onClick={() => this.setState({ pageType: 1 })}>x</span>
          </div>
          <div className={'feeScheduleBox'} style={{ width: '850px', margin: '40px 0 0 25px' }}>
            <ul>
              <li>
                <div style={{ flex: 1 }}>序号</div>
                <div style={{ flex: 3 }}>药品名称</div>
                <div>药品类别</div>
                <div>规格</div>
                <div style={{ flex: 5 }}>生产厂商</div>
                <div style={{ flex: 1 }}>数量</div>
                <div style={{ flex: 2 }}>发药状态</div>
              </li>
              {items.map((item, iKey) => {
                return (
                  <li key={iKey}>
                    <div style={{ flex: 1 }}>{iKey + 1}</div>
                    <div style={{ flex: 3 }}>{item.name}</div>
                    <div>{item.charge_project_type_id === 1 ? '西/成药' : '中药'}</div>
                    <div>{item.specification}</div>
                    <div style={{ flex: 5 }}>{item.manu_factory_name}</div>
                    <div style={{ flex: 1 }}>{item.amount}</div>
                    <div style={{ flex: 2 }}>{status_map[item.order_status]}</div>
                  </li>
                )
              })}
            </ul>
          </div>
          <PageCard
            style={{ width: '90%' }}
            offset={item_page.offset}
            limit={item_page.limit}
            total={item_page.total}
            onItemClick={({ offset, limit }) => {
              this.props.queryDrugDeliveryRefundRecordDetail({ offset, limit, drug_delivery_refund_record_id: selectRecordId })
            }}
          />
        </div>
        <style jsx='true'>{`
          .meical_nodel_item {
            width: 90%;
            margin: 22px 5% 0 5%;
            padding: 0;
          }
          .meical_nodel_item div {
            width: 100%;
            height: 20px;
            border: 1px solid #d8d8d8;
            margin-top: 10px;
          }

          .meical_nodel_item ul {
            display: flex;
          }

          .meical_nodel_item ul li {
            margin:0;
            border-right: 1px solid #d8d8d8;
            float: left;
            flex:2
            height: 20px;
            text-align: center;
          }

          .meical_nodel_item ul li:nth-child(6){
            float: left;
            flex:1
            border-right: none
            text-align: center;
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
        {this.renderDrugDeliveryRecord()}
        {this.renderDrugDeliveryDetail()}
        {this.renderMedicalRecord()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    triagePatients: state.drugDeliveryRefund.traige_list,
    triagePatientSelectId: state.drugDeliveryRefund.traige_selectId,
    medicalRecord: state.medicalRecords.data,
    drug_delivery_list_page: state.drugDeliveryPending.drug_delivery_list_page,
    drug_delivery_list: state.drugDeliveryPending.drug_delivery_list,
    drug_delivery_record_list: state.drugDelivery.data,
    drug_delivery_record_list_page: state.drugDelivery.data_page,
    items: state.drugDelivery.data_item,
    item_page: state.drugDelivery.data_item_page
  }
}

export default connect(
  mapStateToProps,
  { queryMedicalRecord, queryDrugDeliveryList, drugDeliveryRecover, queryDrugDeliveryRefundRecordList, queryDrugDeliveryRefundRecordDetail }
)(DrawnDetailDrugScreen)
