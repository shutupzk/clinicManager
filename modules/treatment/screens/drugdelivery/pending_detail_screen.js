import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Router from 'next/router'
import { queryMedicalRecord, queryDrugDeliveryList, drugDeliveryCreate, queryDrugDeliveryRecordList, queryDrugDeliveryRecordDetail } from '../../../../ducks'
import { getAgeByBirthday } from '../../../../utils'
import { PageCard, Confirm } from '../../../../components'

class PendingDetailDrugScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      allSelect: true,
      selectArray: [],
      remarks: {},
      selectRecordId: ''
    }
  }

  async componentDidMount() {
    const { queryMedicalRecord, triagePatientSelectId } = this.props
    await queryMedicalRecord(triagePatientSelectId)
    await this.queryCommonData({})
    this.setState({ selectArray: this.getSelectIds() })
  }

  // 获取库存大于发药数的药品ID
  getSelectIds() {
    const { drug_delivery_list } = this.props
    let arr = []
    for (let item of drug_delivery_list) {
      if (item.stock_amount > item.amount) arr.push(item.id)
    }
    return arr
  }

  queryCommonData({ offset, limit }) {
    const { triagePatientSelectId, queryDrugDeliveryList } = this.props
    return queryDrugDeliveryList({ clinic_triage_patient_id: triagePatientSelectId, order_status: '10', offset, limit })
  }

  // 提交发药记录
  commit() {
    let { selectArray } = this.state
    if (selectArray.length === 0) return this.refs.myAlert.alert('提示', '未勾选条目，请重新勾选！', null, 'Warning')
    this.refs.myAlert.confirm('确定发药？', '', null, async () => {
      const { triagePatientSelectId, personnel_id, drugDeliveryCreate } = this.props
      const { selectArray, remarks } = this.state
      let items = []
      for (let key of selectArray) {
        items.push({ mz_paid_orders_id: key, remark: remarks[key] || '' })
      }
      let error = await drugDeliveryCreate({ clinic_triage_patient_id: triagePatientSelectId, operation_id: personnel_id, items: JSON.stringify(items) })
      if (error) {
        return this.refs.myAlert.alert('提交失败', error, null, 'Warning')
      } else {
        this.refs.myAlert.alert('提交成功', '', () => {
          Router.push('/treatment/drugdelivery')
        })
      }
    })
  }

  changeAllSelect() {
    const { allSelect } = this.state
    const selectArray = allSelect ? [] : this.getSelectIds()
    this.setState({ allSelect: !allSelect, selectArray })
  }

  itemSelect(itemId, checked, overAmount) {
    if (overAmount) this.refs.myAlert.alert('库存不足，无法发药！', '', null, 'Warning')
    if (checked || overAmount) this.deleteItem(itemId)
    else this.addItem(itemId)
  }

  deleteItem(itemId) {
    const { selectArray } = this.state
    for (let i = 0; i < selectArray.length; i++) {
      if (selectArray[i] === itemId) selectArray.splice(i, 1)
    }
    this.setState({ selectArray })
  }

  addItem(itemId) {
    const { selectArray } = this.state
    selectArray.push(itemId)
    this.setState({ selectArray })
  }

  // 展示历史列表
  async renderRecord() {
    const { triagePatientSelectId, queryDrugDeliveryRecordList } = this.props
    await queryDrugDeliveryRecordList({ clinic_triage_patient_id: triagePatientSelectId })
    this.setState({ pageType: 3 })
  }

  // 展示历史详情
  async showRecordDetail(drug_delivery_record_id) {
    await this.props.queryDrugDeliveryRecordDetail({ drug_delivery_record_id })
    this.setState({ pageType: 4, selectRecordId: drug_delivery_record_id })
  }

  // 设置每项的属性
  setRemark(itemId, value) {
    let { remarks } = this.state
    if (!value) delete remarks[itemId]
    else remarks[itemId] = value
    this.setState({ remarks })
  }

  // 查看发药项目
  renderDrugDeliveryList() {
    const { triagePatients, triagePatientSelectId, medicalRecord } = this.props
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
              <a onClick={() => this.renderRecord()}>发药记录</a>
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
        {this.renderWesternMedicine()}
        {this.renderTraditionalMedicine()}
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

  // 西药
  renderWesternMedicine() {
    const { drug_delivery_list } = this.props
    let arr = []
    for (let item of drug_delivery_list) {
      if (item.charge_project_type_id === 1) arr.push({ ...item })
    }
    if (arr.length === 0) return null
    return this.renderItem(arr, '西/成药')
  }

  // 中药
  renderTraditionalMedicine() {
    let traditionalMedicine = {}
    const { drug_delivery_list } = this.props
    for (let item of drug_delivery_list) {
      if (item.charge_project_type_id !== 1) {
        let { order_sn } = item
        if (!traditionalMedicine[order_sn]) traditionalMedicine[order_sn] = []
        traditionalMedicine[order_sn].push({ ...item })
      }
    }
    let array = []
    for (let key in traditionalMedicine) {
      array.push({ key, value: traditionalMedicine[key] })
    }
    if (array.length === 0) return null
    return (
      <div>
        {array.map((itemss, key) => {
          let items = itemss.value
          return this.renderItem(items, `中药 ${key + 1} (共X剂数)`)
        })}
      </div>
    )
  }

  // 渲染item
  renderItem(items, title) {
    return (
      <div>
        <div className={'feeScheduleBox'}>
          <span>{title}</span>
          <ul>
            <li>
              <div style={{ flex: 1 }}>
                <input type={'checkbox'} checked={this.state.allSelect} onChange={() => this.changeAllSelect()} />
              </div>
              <div style={{ flex: 1 }}>序号</div>
              <div style={{ flex: 3 }}>药品名称</div>
              <div>药品类别</div>
              <div>规格</div>
              <div style={{ flex: 5 }}>生产厂商</div>
              <div>药品库存</div>
              <div style={{ flex: 1 }}>数量</div>
              <div style={{ flex: 2 }}>发药状态</div>
              <div>备注</div>
            </li>
            {items.map((item, iKey) => {
              let checked = this.state.selectArray.indexOf(item.id) > -1
              let { stock_amount = 0, amount = 1 } = item
              return (
                <li key={iKey}>
                  <div>
                    <input
                      type={'checkbox'}
                      checked={checked}
                      onChange={() => {
                        this.itemSelect(item.id, checked, amount > stock_amount)
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>{iKey + 1}</div>
                  <div style={{ flex: 3 }}>{item.name}</div>
                  <div>{item.charge_project_type_id === 1 ? '西/成药' : '中药'}</div>
                  <div>{item.specification}</div>
                  <div style={{ flex: 5 }}>{item.manu_factory_name}</div>
                  <div>{stock_amount}</div>
                  <div style={{ flex: 1 }}>{amount}</div>
                  <div style={{ flex: 2 }}>待发药</div>
                  <div>
                    <textarea
                      style={{ width: '90%', resize: 'none', border: 'none' }}
                      value={this.state.remarks[item.id]}
                      onChange={e => {
                        this.setRemark(item.id, e.target.value)
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>{`
          .feeScheduleBox {
            flex-direction: column;
          }
          .feeScheduleBox span {
            font-size: 15px;
            font-weight: bold;
            margin: 10px 0 2px 10px;
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
            <span>历史发药记录</span>
            <span onClick={() => this.setState({ pageType: 1 })}>x</span>
          </div>
          <div className={'meical_nodel_item'}>
            <div style={{ margin: '32px 0 0 0' }}>
              <ul style={{ background: '#F7F7F7' }}>
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
                    <li style={{ cursor: 'pointer', color: 'rgba(42,205,200,1' }} onClick={() => this.showRecordDetail(item.drug_delivery_record_id)}>
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
              this.props.queryDrugDeliveryRecordList({ offset, limit, clinic_triage_patient_id: triagePatientSelectId })
            }}
          />
        </div>
        <style jsx='true'>{`
          .meical_nodel_item {
            width: 90%;
            margin: 32px 5% 0 5%;
            padding: 0;
          }
          .meical_nodel_item div {
            width: 100%;
            border:1px solid rgba(233,233,233,1);
            border-bottom: none;
          }

          .meical_nodel_item ul {
            display: flex;
            height: 38px;
            background:rgba(255,255,255,1);
            align-items: center
          }

          .meical_nodel_item ul li {
            height: 38px;
            line-height: 40px;
            margin:0;
            border-right: 1px dashed rgba(217,217,217,1);
            float: left;
            flex:2
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
            <span>发药详情</span>
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
                <div>备注</div>
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
                    <div>
                      <textarea disabled style={{ width: '90%', resize: 'none', border: 'none' }} value={item.remark} />
                    </div>
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
              this.props.queryDrugDeliveryRecordDetail({ offset, limit, drug_delivery_record_id: selectRecordId })
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
    personnel_id: state.user.data.id,
    triagePatients: state.drugDeliveryPending.traige_list,
    triagePatientSelectId: state.drugDeliveryPending.traige_selectId,
    medicalRecord: state.medicalRecords.data,
    drug_delivery_list: state.drugDeliveryPending.drug_delivery_list,
    drug_delivery_record_list: state.drugDelivery.data,
    drug_delivery_record_list_page: state.drugDelivery.data_page,
    items: state.drugDelivery.data_item,
    item_page: state.drugDelivery.data_item_page
  }
}

export default connect(
  mapStateToProps,
  { queryMedicalRecord, queryDrugDeliveryList, drugDeliveryCreate, queryDrugDeliveryRecordList, queryDrugDeliveryRecordDetail }
)(PendingDetailDrugScreen)
