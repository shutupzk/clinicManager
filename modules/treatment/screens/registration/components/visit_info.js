import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PatientGetByID, GetLastBodySign, queryMedicalsByPatient, UpsertPatientHeight, UpsertPatientWeight, UpsertPatientBloodPressure, UpsertPatientVision, PatientHeightList, PatientWeightList, PatientBmiList, PatientBloodPressureList, PatientVisionList, PatientBloodSugarListByDate } from '../../../../../ducks'
import { getAgeByBirthday, limitMoney } from '../../../../../utils'
import { PageCard, DatePicker, Confirm } from '../../../../../components'
import moment from 'moment'
import ReactEcharts from 'echarts-for-react'

class VisitInfoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      body_sign: {},
      pre_medical_record: {},
      pre_diagnosis: {},
      patientInfo: {},
      showUpdateModel: '',
      pateintHeights: [],
      pateintWeights: [],
      pateintBloodPressures: [],
      pateintVisions: [],
      patientBloodSugars: [],
      page_info: {}
    }
  }

  async componentWillMount() {
    const { patient_id, PatientGetByID, GetLastBodySign } = this.props
    let patient = await PatientGetByID({ patient_id })
    let body_sign = await GetLastBodySign({ patient_id })
    if (patient) {
      this.setState({ patientInfo: patient, body_sign }, () => {
        this.queryMedicalsByPatient({})
      })
    }
  }

  async submit() {}

  queryMedicalsByPatient({ offset = 0, limit = 6 }) {
    const { queryMedicalsByPatient, patient_id } = this.props
    queryMedicalsByPatient({ patient_id, offset, limit })
  }

  setPatientInfo(e, key) {
    let newPatient = this.state.patientInfo
    newPatient[key] = e.target.value
    this.setState({ patientInfo: newPatient })
  }

  getVisitType(type) {
    const types = { '1': '初诊', '2': '复诊', '3': '术后复诊' }
    return types[type]
  }

  renderMedicalHistory() {
    const { history_medicals, history_page_info } = this.props
    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td>就诊时间</td>
                  <td>就诊类型</td>
                  <td>接诊诊所</td>
                  <td>接诊科室</td>
                  <td>接诊医生</td>
                  <td>标签</td>
                  <td>主诉关键字</td>
                  <td>诊断</td>
                  <td style={{ flex: 2 }}>操作</td>
                </tr>
              </thead>
              <tbody>
                {history_medicals.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{moment(item.registion_time).format('YYYY-MM-DD hh:mm')}</td>
                      <td>{this.getVisitType(item.visit_type)}</td>
                      <td>{item.clinic_name}</td>
                      <td>{item.department_name}</td>
                      <td>{item.doctor_name}</td>
                      <td>{}</td>
                      <td>{item.chief_complaint}</td>
                      <td>{item.diagnosis}</td>
                      <td style={{ flex: 2 }} className={'operTd'}>
                        <div>
                          <div onClick={() => {}}>展开</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {}}>续写</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {}}>打印</div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <PageCard
              offset={history_page_info.offset}
              limit={history_page_info.limit}
              total={history_page_info.total}
              style={{ margin: '20px 0', width: '100%' }}
              onItemClick={({ offset, limit }) => {
                // const keyword = this.state.keyword
                this.queryMedicalsByPatient({ offset, limit })
              }}
            />
          </div>
        </div>
        <style jsx='true'>{`
          .contentCenterRight {
            width: 100%;
            height: 715px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 20px;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
          }
          .contentCenter {
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable {
            margin: 18px 32px;
            // background:#b0b0b0;
          }
          .tableContent {
          }
          .tableContent table {
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top: 1px solid #e8e8e8;
          }
          .tableContent table thead {
            background: rgba(250, 250, 250, 1);
            box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
          }
          .tableContent table tr {
            height: 40px;
            display: flex;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td {
            border-left: 1px solid #e8e8e8;
            height: 40px;
            // display: flex;
            align-items: center;
            flex: 1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd > div {
            margin: 0 auto;
            width: max-content;
          }
          .operTd > div > div {
            cursor: pointer;
            color: #2acdc8;
            float: left;
          }
          .operTd > div > div.divideLine {
            cursor: default;
            color: #e8e8e8;
            margin: 0 5px;
          }
        `}</style>
      </div>
    )
  }

  renderHeightModel() {
    const { showUpdateModel, pateintHeights, page_info } = this.state
    if (showUpdateModel !== 'height') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>身高记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 3 }}>记录时间</div>
                <div style={{ flex: 4 }}>身高（m）</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintHeights: [...pateintHeights, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintHeights.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintHeights[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintHeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 4 }}>
                      <input
                        type='text'
                        value={item.height || ''}
                        onChange={e => {
                          let height = limitMoney(e.target.value)
                          if (height) {
                            pateintHeights[index].height = height + ''
                            this.setState({ pateintHeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintHeights[index].upsert_type = 'delete'
                          this.setState({ pateintHeights })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientHeight } = this.props
                let error = await UpsertPatientHeight({ patient_id, items: JSON.stringify(pateintHeights) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderWeightModel() {
    const { showUpdateModel, pateintWeights, page_info } = this.state
    if (showUpdateModel !== 'weight') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>体重记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 3 }}>记录时间</div>
                <div style={{ flex: 4 }}>体重（kg）</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintWeights: [...pateintWeights, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintWeights.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 3 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintWeights[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintWeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 4 }}>
                      <input
                        type='text'
                        value={item.weight || ''}
                        onChange={e => {
                          let weight = limitMoney(e.target.value)
                          if (weight) {
                            pateintWeights[index].weight = weight + ''
                            this.setState({ pateintWeights })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintWeights[index].upsert_type = 'delete'
                          this.setState({ pateintWeights })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientWeight } = this.props
                let error = await UpsertPatientWeight({ patient_id, items: JSON.stringify(pateintWeights) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodPressureModel() {
    const { showUpdateModel, pateintBloodPressures, page_info } = this.state
    if (showUpdateModel !== 'blood_pressure') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血压记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 2 }}>记录时间</div>
                <div style={{ flex: 2 }}>收缩压(mmHg)）</div>
                <div style={{ flex: 2 }}>舒张压(mmHg)</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintBloodPressures: [...pateintBloodPressures, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintBloodPressures.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 2 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintBloodPressures[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintBloodPressures })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.systolic_blood_pressure || ''}
                        onChange={e => {
                          let systolic_blood_pressure = limitMoney(e.target.value)
                          if (systolic_blood_pressure) {
                            pateintBloodPressures[index].systolic_blood_pressure = systolic_blood_pressure + ''
                            this.setState({ pateintBloodPressures })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.diastolic_blood_pressure || ''}
                        onChange={e => {
                          let diastolic_blood_pressure = limitMoney(e.target.value)
                          if (diastolic_blood_pressure) {
                            pateintBloodPressures[index].diastolic_blood_pressure = diastolic_blood_pressure + ''
                            this.setState({ pateintBloodPressures })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintBloodPressures[index].upsert_type = 'delete'
                          this.setState({ pateintBloodPressures })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientBloodPressure } = this.props
                let error = await UpsertPatientBloodPressure({ patient_id, items: JSON.stringify(pateintBloodPressures) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderVisionModel() {
    const { showUpdateModel, pateintVisions, page_info } = this.state
    if (showUpdateModel !== 'vision') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>视力记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 2 }}>记录时间</div>
                <div style={{ flex: 2 }}>左眼</div>
                <div style={{ flex: 2 }}>右眼</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ pateintVisions: [...pateintVisions, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {pateintVisions.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 2 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            pateintVisions[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ pateintVisions })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.left_vision || ''}
                        onChange={e => {
                          let left_vision = limitMoney(e.target.value)
                          if (left_vision) {
                            pateintVisions[index].left_vision = left_vision + ''
                            this.setState({ pateintVisions })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.right_vision || ''}
                        onChange={e => {
                          let right_vision = limitMoney(e.target.value)
                          if (right_vision) {
                            pateintVisions[index].right_vision = right_vision + ''
                            this.setState({ pateintVisions })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          pateintVisions[index].upsert_type = 'delete'
                          this.setState({ pateintVisions })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientVision } = this.props
                let error = await UpsertPatientVision({ patient_id, items: JSON.stringify(pateintVisions) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodSugarModel() {
    const { showUpdateModel, patientBloodSugars, page_info } = this.state
    if (showUpdateModel !== 'blood_sugar') return
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血糖记录</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ flex: 1 }}>
              <li>
                <div style={{ flex: 2 }}>记录时间</div>
                <div style={{ flex: 2 }}>左眼</div>
                <div style={{ flex: 2 }}>右眼</div>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={() => {
                      this.setState({ patientBloodSugars: [...patientBloodSugars, { upsert_type: 'insert', record_time: moment().format('YYYY-MM-DD') }] })
                    }}
                    style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
                  >
                    新增
                  </div>
                </div>
              </li>
              {patientBloodSugars.map((item, index) => {
                if (item.upsert_type === 'delete') return null
                return (
                  <li style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <div style={{ flex: 2 }}>
                      <DatePicker
                        style={{ marginTop: '0px' }}
                        value={moment(moment(item.record_time).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                        onChange={(date, str) => {
                          if (date) {
                            patientBloodSugars[index].record_time = moment(date).format('YYYY-MM-DD')
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.left_vision || ''}
                        onChange={e => {
                          let left_vision = limitMoney(e.target.value)
                          if (left_vision) {
                            patientBloodSugars[index].left_vision = left_vision + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <input
                        type='text'
                        value={item.right_vision || ''}
                        onChange={e => {
                          let right_vision = limitMoney(e.target.value)
                          if (right_vision) {
                            patientBloodSugars[index].right_vision = right_vision + ''
                            this.setState({ patientBloodSugars })
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        onClick={() => {
                          patientBloodSugars[index].upsert_type = 'delete'
                          this.setState({ patientBloodSugars })
                        }}
                        style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}
                      >
                        删除
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'bottomCenter'}>
            <button className={'cancel'} onClick={() => this.setState({ showUpdateModel: '' })}>
              取消
            </button>
            <button
              className={'save'}
              onClick={async () => {
                const { patient_id, UpsertPatientVision } = this.props
                let error = await UpsertPatientVision({ patient_id, items: JSON.stringify(patientBloodSugars) })
                if (error) {
                  return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
                } else {
                  return this.refs.myAlert.alert('保存成功', error)
                }
              }}
            >
              保存
            </button>
          </div>
          <PageCard
            style={{ margin: '0 50px 0 50px', width: '1000px', background: 'rgba(244, 247, 248, 1)' }}
            offset={page_info.offset}
            limit={page_info.limit}
            total={page_info.total}
            onItemClick={({ offset, limit }) => {
              const keyword = this.state.keyword
              this.examinationModelList({ offset, limit, keyword })
            }}
          />
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderHeightEchart() {
    const { showUpdateModel, pateintHeights } = this.state
    if (showUpdateModel !== 'height_echart') return
    let xdata = []
    let ydata = []
    for (let item of pateintHeights) {
      xdata.push(item.record_time)
      ydata.push(item.height * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '身高曲线图',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>身高曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderWeightEchart() {
    const { showUpdateModel, pateintWeights } = this.state
    if (showUpdateModel !== 'weight_echart') return
    let xdata = []
    let ydata = []
    for (let item of pateintWeights) {
      xdata.push(item.record_time)
      ydata.push(item.weight * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '体重曲线图',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>体重曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBMIEchart() {
    const { showUpdateModel, patientBmis } = this.state
    if (showUpdateModel !== 'bmi_echart') return
    let xdata = []
    let ydata = []
    for (let item of patientBmis) {
      xdata.push(item.record_time)
      ydata.push(item.bmi * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: 'BMI曲线图',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ydata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>BMI曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderBloodPressureEchart() {
    const { showUpdateModel, pateintBloodPressures } = this.state
    if (showUpdateModel !== 'blood_pressure_echart') return
    let xdata = []
    let ssdata = []
    let szdata = []
    for (let item of pateintBloodPressures) {
      xdata.push(item.record_time)
      ssdata.push(item.systolic_blood_pressure * 1)
      szdata.push(item.diastolic_blood_pressure * 1)
    }
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      legend: {
        data: ['收缩压', '舒张压']
      },
      yAxis: {},
      series: [
        {
          name: '收缩压',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ssdata
          // smooth: true,
        },
        {
          name: '舒张压',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: szdata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>血压曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  renderVisionEchart() {
    const { showUpdateModel, pateintVisions } = this.state
    if (showUpdateModel !== 'vision_echart') return
    let xdata = []
    let ssdata = []
    let szdata = []
    for (let item of pateintVisions) {
      xdata.push(item.record_time)
      ssdata.push(item.left_vision * 1)
      szdata.push(item.right_vision * 1)
    }
    let loption = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '左眼',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: ssdata
          // smooth: true,
        }
      ]
    }
    let roption = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: xdata
      },
      yAxis: {},
      series: [
        {
          name: '右眼',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: szdata
          // smooth: true,
        }
      ]
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '1100px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>视力曲线图</span>
            <span onClick={() => this.setState({ showUpdateModel: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '94%', marginTop: '15px', marginLeft: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>左眼</div>
            <ReactEcharts option={loption} style={{ height: '400px', width: '100%' }} />
            <div style={{ textAlign: 'center' }}>右眼</div>
            <ReactEcharts option={roption} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }

  // 就诊信息
  showVisitInfo() {
    const { patientInfo, body_sign } = this.state
    return (
      <div className={'detailBox'}>
        <div className={'blankBox patientInfo'}>
          <div>就诊人姓名：{patientInfo.name}</div>
          <div style={{ flex: 1 }}>性别：{patientInfo.sex === 0 ? '女' : '男'}</div>
          <div style={{ flex: 1 }}>年龄：{getAgeByBirthday(patientInfo.birthday)}</div>
          <div>就诊ID：</div>
          <div>手机号码：{patientInfo.phone}</div>
        </div>
        <div className={'blankBox keyPhysicalData'}>
          <span>关键体征数据</span>
          <ul>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  身高(CM)<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientHeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientHeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, height } of docs) {
                        array.push({ record_time, height: height + '', upsert_type: 'update' })
                      }
                      this.setState({
                        showUpdateModel: 'height',
                        pateintHeights: array,
                        page_info
                      })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientHeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientHeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, height } of docs) {
                        array.push({ record_time, height: height + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'height_echart', pateintHeights: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.height}</div>
            </li>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  体重(kg))<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientWeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientWeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, weight } of docs) {
                        array.push({ record_time, weight: weight + '', upsert_type: 'update' })
                      }
                      this.setState({ showUpdateModel: 'weight', pateintWeights: array, page_info })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientWeightList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientWeightList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, weight } of docs) {
                        array.push({ record_time, weight: weight + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'weight_echart', pateintWeights: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.weight}</div>
            </li>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  BMI<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBmiList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBmiList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, bmi } of docs) {
                        array.push({ record_time, bmi: bmi + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'bmi_echart', patientBmis: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.bmi}</div>
            </li>
            <li>
              <div className={'dataTitle'}>体温(C)</div>
              <div className={'dataContent'}>{body_sign.temperature}</div>
            </li>
            <li>
              <div className={'dataTitle'}>
                <div className='showDiv'>呼吸(次/分钟)</div>
              </div>
              <div className={'dataContent'}>{body_sign.breathe}</div>
            </li>
            <li>
              <div className={'dataTitle'}>脉搏(次/分钟)</div>
              <div className={'dataContent'}>{body_sign.pulse}</div>
            </li>
            <li style={{ width: '50%' }}>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  血压<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBloodPressureList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBloodPressureList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, systolic_blood_pressure, diastolic_blood_pressure } of docs) {
                        array.push({ record_time, systolic_blood_pressure: systolic_blood_pressure + '', diastolic_blood_pressure: diastolic_blood_pressure + '', upsert_type: 'update' })
                      }
                      this.setState({ showUpdateModel: 'blood_pressure', pateintBloodPressures: array, page_info })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientBloodPressureList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientBloodPressureList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, systolic_blood_pressure, diastolic_blood_pressure } of docs) {
                        array.push({ record_time, systolic_blood_pressure: systolic_blood_pressure + '', diastolic_blood_pressure: diastolic_blood_pressure + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'blood_pressure_echart', pateintBloodPressures: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>
                收缩压{body_sign.systolic_blood_pressure}mmHg / 舒张压{body_sign.diastolic_blood_pressure}mmHg
              </div>
            </li>
            <li>
              <div className={'dataTitle'}>氧饱和度(%)</div>
              <div className={'dataContent'}>{body_sign.oxygen_saturation}</div>
            </li>
            <li>
              <div className={'dataTitle'}>疼痛评分</div>
              <div className={'dataContent'}>{body_sign.pain_score}</div>
            </li>
            <li style={{ width: '50%' }}>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  视力<div
                    className='showButton'
                    onClick={async () => {
                      const { PatientVisionList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientVisionList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, left_vision, right_vision } of docs) {
                        array.push({ record_time, left_vision: left_vision + '', right_vision: right_vision + '', upsert_type: 'update' })
                      }
                      this.setState({ showUpdateModel: 'vision', pateintVisions: array, page_info })
                    }}
                  >
                    编辑
                  </div>
                  <div
                    className='showButton'
                    onClick={async () => {
                      const { PatientVisionList, patient_id } = this.props
                      let { error, docs, page_info } = await PatientVisionList({ patient_id })
                      if (error) {
                        return this.refs.myAlert.alert('查询失败', error, null, 'Danger')
                      }
                      let array = []
                      for (let { record_time, left_vision, right_vision } of docs) {
                        array.push({ record_time, left_vision: left_vision + '', right_vision: right_vision + '', upsert_type: 'update' })
                      }
                      array = array.sort((a, b) => {
                        return a.record_time < b.record_time ? -1 : 1
                      })
                      this.setState({ showUpdateModel: 'vision_echart', pateintVisions: array, page_info })
                    }}
                  >
                    查看趋势图
                  </div>
                </div>
              </div>
              <div className={'dataContent'}>
                左眼 {body_sign.left_vision} 右眼{body_sign.right_vision}
              </div>
            </li>
            <li style={{ width: '100%' }}>
              <div className={'dataTitle'}>
                <div className='showDiv'>
                  血糖浓度(mmol/I)<div className='showButton'>查看详情</div>
                  <div className='showButton'>查看趋势图</div>
                </div>
              </div>
              <div className={'dataContent'}>{body_sign.blood_sugar_concentration}</div>
            </li>
          </ul>
        </div>
        <div className={'blankBox'}>{this.renderMedicalHistory()}</div>
        <style jsx='true'>{`
          .detailBox {
            float: left;
          }
          .showDiv {
            display: flex;
            align-items: center;
          }
          .showButton {
            border-width: 0px;
            background: inherit;
            background-color: rgba(0, 204, 102, 1);
            border: none;
            border-radius: 5px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            font-family: 'PingFangSC-Regular', 'PingFang SC';
            font-weight: 100;
            font-style: normal;
            color: #ffffff;
            display: table;
            padding: 2px 5px 2px 5px;
            text-align: center;
            margin: 0 0 0 10px;
            font-size: 12px;
            line-height: 20px;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showVisitInfo()}
        {this.renderHeightModel()}
        {this.renderWeightModel()}
        {this.renderBloodPressureModel()}
        {this.renderVisionModel()}
        {this.renderBloodSugarModel()}
        {this.renderHeightEchart()}
        {this.renderWeightEchart()}
        {this.renderBMIEchart()}
        {this.renderBloodPressureEchart()}
        {this.renderVisionEchart()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  getStyle() {
    return (
      <style jsx='true'>
        {`
          .ant-input {
            height: 40px;
          }
          .tableDIV {
            display: flex;
            width: 987px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin: 0 65px 65px 47px;
          }
          .tableDIV ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #e9e9e9;
            border-bottom: none;
          }
          .tableDIV ul li {
            display: flex;
            height: 50px;
            border-bottom: 1px solid #e9e9e9;
            line-height: 40px;
            text-align: center;
          }
          .tableDIV ul li:nth-child(1) {
            background: rgba(247, 247, 247, 1);
          }
          .tableDIV ul li > div {
            flex: 2;
            border-left: 1px #e9e9e9 dashed;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .tableDIV ul li > div > input {
            width: 90%;
            height: 30px;
            border-radius: 4px;
            outline-style: none;
            border: none;
          }
          .tableDIV ul li > div:nth-child(1) {
            flex: 3;
          }
          .bottomCenter {
            width: 160px;
            margin: 30px auto;
          }
          .bottomCenter button.cancel {
            width: 70px;
            height: 26px;
            background: rgba(167, 167, 167, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: left;
            cursor: pointer;
          }
          .bottomCenter button.save {
            width: 70px;
            height: 26px;
            background: rgba(49, 176, 179, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: right;
            cursor: pointer;
          }
        `}
      </style>
    )
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.data,
    clinic_id: state.user.data.clinic_id,
    patient_id: state.patients.selectId,
    history_medicals: state.medicalRecords.history_medicals,
    history_page_info: state.medicalRecords.history_page_info
  }
}
export default connect(
  mapStateToProps,
  { PatientGetByID, GetLastBodySign, queryMedicalsByPatient, UpsertPatientHeight, UpsertPatientWeight, UpsertPatientBloodPressure, UpsertPatientVision, PatientHeightList, PatientWeightList, PatientBmiList, PatientBloodPressureList, PatientVisionList, PatientBloodSugarListByDate }
)(VisitInfoScreen)
