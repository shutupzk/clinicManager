import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm, PageCard, MyCreatableSelect, ImageViewer, Upload, DatePicker } from '../../../../../components'
import { API_SERVER } from '../../../../../config'
// import CreatableSelect from 'react-select/lib/Creatable'
import moment from 'moment'
import Print from 'rc-print'

import { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel, queryMedicalModelsByDoctor, queryMedicalsByPatient, queryChiefComplaints, queryDictDiagnosisList, FileUpload, xhrFileUpload, PersonalMedicalRecord, GetHealthRecord, PatientGetByID } from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
// 病历
class MedicalRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProgress: false,
      percent: 0,
      morbidity_date: '',
      chief_complaint: '',
      history_of_present_illness: '',
      history_of_past_illness: '',
      family_medical_history: '',
      allergic_history: '',
      allergic_reaction: '',
      body_examination: '',
      immunizations: '',
      diagnosis: '',
      cure_suggestion: '',
      remark: '',
      personal_medical_history: '',
      files: '',
      saveAsModel: false,
      showMedicalModels: false,
      showHistroyMedicals: false,
      name: '',
      is_common: true,
      model_keyword: '',
      choseHistoryId: '',
      showComplaint: false,
      selComplaint: [],
      determineComplaint: [],
      chooseDiagnosticTemplate: false,
      selDiagnosis: [],
      selPage: 1,
      uploadedFiles: [],
      showBigImg: false,
      bigImg: '',
      diagnosisArray: [],
      imgWidth: 0,
      imgHeight: 0,
      imgFiles: [],
      pre_medical_record: {}
    }
  }

  async componentWillMount() {
    const { queryMedicalRecord, clinic_triage_patient_id, queryChiefComplaints, PersonalMedicalRecord, patient_id, GetHealthRecord, PatientGetByID } = this.props
    await queryChiefComplaints()
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    let pre_medical_record = await PersonalMedicalRecord({ patient_id })
    let pateint = await PatientGetByID({ patient_id })
    let recordStr = ''
    let files = []
    let imgArray = []
    let diagnosisArray = []
    if (record.id) {
      console.log('record=====', record)
      recordStr = JSON.stringify(record)
      if (record.files !== '') {
        files = JSON.parse(record.files)
        for (let j = 0; j < files.length; j++) {
          let url = files[j].url
          let suffix = url.split('.')[url.split('.').length - 1].toLowerCase()
          if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
            imgArray.push(files[j])
          }
        }
      }
      if (record.diagnosis !== '') {
        let array = record.diagnosis.split(',')
        if (array.length > 0) {
          for (let i = 0; i < array.length; i++) {
            let item = { value: array[i], label: array[i] }
            diagnosisArray.push(item)
          }
        } else {
          diagnosisArray.push({ label: record.diagnosis, value: record.diagnosis })
        }
      }
    } else {
      let data = await GetHealthRecord({ clinic_triage_patient_id })
      const { pre_diagnosis } = data
      record = { ...record, ...pre_medical_record, ...pre_diagnosis }
      console.log('record ====', record)
    }
    this.setState({ ...this.state, ...record, recordStr, imgFiles: imgArray, uploadedFiles: files, diagnosisArray, pre_medical_record: pre_medical_record || {}, pateint })
  }

  async save() {
    let { chief_complaint, selPage, diagnosis, uploadedFiles } = this.state
    let { createMedicalRecord, triage_personnel_id, clinic_triage_patient_id, changePage } = this.props
    if (!chief_complaint) return this.refs.myAlert.alert('请填写主诉！')
    // this.refs.myAlert.confirm('确定提交病历？', '', 'Success', async () => {
    // })
    // let files = ''
    // if (uploadedFiles.length > 0) {
    //   for (let i = 0; i < uploadedFiles.length; i++) {
    //     files += uploadedFiles[i].url + ';'
    //   }
    // }
    if (diagnosis === '') {
      this.refs.myAlert.confirm('初步诊断为空，请确认是否保存？', '', 'Success', async () => {
        let res = await createMedicalRecord({ ...this.state, files: JSON.stringify(uploadedFiles), clinic_triage_patient_id, operation_id: triage_personnel_id })
        if (res) this.refs.myAlert.alert(`保存病历失败！【${res}】`)
        else {
          this.refs.myAlert.alert('保存病历成功！')
          if (selPage !== 1) {
            changePage(selPage)
          }
        }
      })
    } else {
      let res = await createMedicalRecord({ ...this.state, files: JSON.stringify(uploadedFiles), clinic_triage_patient_id, operation_id: triage_personnel_id })
      if (res) this.refs.myAlert.alert(`保存病历失败！【${res}】`)
      else {
        this.refs.myAlert.alert('保存病历成功！')
        const { recordStr } = this.state
        let oldJson = JSON.parse(recordStr)
        let newJSON = {}
        for (let key in oldJson) {
          newJSON[key] = this.state[key]
        }
        let jsonStr = JSON.stringify(newJSON)
        this.setState({ recordStr: jsonStr })
        if (selPage !== 1) {
          changePage(selPage)
        }
      }
    }
  }

  saveAsModel() {
    let { name } = this.state
    let { createMedicalRecordAsModel, triage_personnel_id, clinic_triage_patient_id } = this.props
    if (!name) return this.refs.myAlert.alert('请填写模板名称！')
    this.refs.myAlert.confirm('确定保存病历为模板？', '', 'Success', async () => {
      let res = await createMedicalRecordAsModel({ ...this.state, clinic_triage_patient_id, operation_id: triage_personnel_id, model_name: name })
      if (res) this.refs.myAlert.alert(`保存模板失败！【${res}】`)
      else {
        this.refs.myAlert.alert('保存模板成功！', '', async () => {
          this.setState({ saveAsModel: false })
        })
      }
    })
  }

  showSaveModel() {
    if (!this.state.saveAsModel) return null
    let { is_common, name, chief_complaint, history_of_present_illness, history_of_past_illness, family_medical_history, allergic_history, allergic_reaction, body_examination, immunizations, diagnosis, cure_suggestion, remark, personal_medical_history } = this.state
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', height: '680px', left: '324px' }}>
          <div className='doctorList_top'>
            <span>新增病历模板</span>
            <span onClick={() => this.setState({ saveAsModel: false })}>x</span>
          </div>
          <div className={'contentBox'}>
            <ul>
              <li>
                <label>
                  模板名称<b style={{ color: 'red' }}> *</b>
                </label>
                <input
                  value={name}
                  onChange={e => {
                    this.setState({ name: e.target.value })
                  }}
                />
              </li>
              <li>
                <input type='radio' style={{ width: '15px', margin: '4px 0 0 50px' }} checked={is_common} onChange={e => this.setState({ is_common: true })} />
                <label style={{ marginLeft: '15px' }}>通用模板</label>
                <input type='radio' style={{ width: '15px', margin: '4px 0 0 15px' }} checked={!is_common} onChange={e => this.setState({ is_common: false })} />
                <label style={{ marginLeft: '15px' }}>非通用模板</label>
              </li>
              <li>
                <label>主诉</label>
                <input
                  value={chief_complaint}
                  onChange={e => {
                    this.setState({ chief_complaint: e.target.value })
                  }}
                />
              </li>
              <li />
              <li>
                <label>现病史</label>
                <input
                  value={history_of_present_illness}
                  onChange={e => {
                    this.setState({ history_of_present_illness: e.target.value })
                  }}
                />
              </li>
              <li />
              <li>
                <label>既往史</label>
                <input
                  type='text'
                  value={history_of_past_illness}
                  onChange={e => {
                    this.setState({ history_of_past_illness: e.target.value })
                  }}
                />
              </li>
              <li />
              <li>
                <label>家族史</label>
                <input
                  type='text'
                  value={family_medical_history}
                  onChange={e => {
                    this.setState({ family_medical_history: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>体格检查</label>
                <input
                  type='text'
                  value={body_examination}
                  onChange={e => {
                    this.setState({ body_examination: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>过敏史</label>
                <input
                  type='text'
                  value={allergic_history}
                  onChange={e => {
                    this.setState({ allergic_history: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>过敏反应</label>
                <input
                  value={allergic_reaction}
                  onChange={e => {
                    this.setState({ allergic_reaction: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>疫苗接种史</label>
                <input
                  value={immunizations}
                  onChange={e => {
                    this.setState({ immunizations: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>个人史</label>
                <input
                  value={personal_medical_history}
                  onChange={e => {
                    this.setState({ personal_medical_history: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>初步诊断</label>
                <input
                  value={diagnosis}
                  onChange={e => {
                    this.setState({ diagnosis: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>诊疗意见</label>
                <input
                  value={cure_suggestion}
                  onChange={e => {
                    this.setState({ cure_suggestion: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>备注</label>
                <input
                  value={remark}
                  onChange={e => {
                    this.setState({ remark: e.target.value })
                  }}
                />
              </li>
              <li />
              <li>
                <button
                  onClick={() => {
                    this.saveAsModel()
                  }}
                  style={{
                    width: '70px',
                    height: '26px',
                    background: 'rgba(49, 176, 179, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                    borderRadius: '15px',
                    border: 'none',
                    marginLeft: '200px'
                  }}
                >
                  保存
                </button>
              </li>
            </ul>
          </div>
          <style jsx='true'>{`
            .contentBox {
              margin: 2px 45px 0 45px;
              height: 591px;
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
      </div>
    )
  }

  // 展示病历模板
  showMedicalModels() {
    const { medicalModels, medicalModelPage, operation_id } = this.props
    if (!this.state.showMedicalModels) return null
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', minHeight: '600px', left: '324px' }}>
          <div className='doctorList_top'>
            <span>选择病历模板</span>
            <div style={{ float: 'left', marginLeft: '20%' }}>
              <input
                style={{
                  width: '140px',
                  borderRadius: '4px',
                  height: '28px',
                  border: '1px solid rgba(217,217,217,1)',
                  background: 'rgba(245,248,249,1)'
                }}
                type='text'
                placeholder='模板名称'
                value={this.state.model_keyword}
                onChange={e => {
                  this.setState({ model_keyword: e.target.value })
                }}
              />
              <button style={{ float: 'none' }} onClick={() => this.props.queryMedicalModelsByDoctor({ keyword: this.state.model_keyword, operation_id })}>
                查询
              </button>
            </div>
            <span onClick={() => this.setState({ showMedicalModels: false })}>x</span>
          </div>
          <div className={'meical_nodel_item'}>
            <div>
              <ul style={{ background: '#F7F7F7' }}>
                <li>模板名称</li>
                <li>模板类型</li>
                <li>更新时间</li>
                <li>操 作</li>
              </ul>
            </div>
            {medicalModels.map((item, iKey) => {
              if (!item) return null
              const { model_name, is_common, created_time } = item
              return (
                <div key={iKey}>
                  <ul>
                    <li>{model_name}</li>
                    <li>{is_common ? '通用模板' : '非通用模板'}</li>
                    <li>{moment(created_time).format('YYYY-MM-DD')}</li>
                    <li style={{ cursor: 'pointer', color: 'rgba(42,205,200,1' }} onClick={() => this.setState({ ...this.state, ...item, showMedicalModels: false })}>
                      复 制
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
          <PageCard
            style={{ width: '90%' }}
            offset={medicalModelPage.offset}
            limit={medicalModelPage.limit}
            total={medicalModelPage.total}
            onItemClick={({ offset, limit }) => {
              this.props.queryMedicalModelsByDoctor({ keyword: this.state.model_keyword, offset, limit, operation_id })
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
            margin: 0;
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
            flex:3
            text-align: center;
          }

          .meical_nodel_item ul li:nth-child(4){
            float: left;
            flex:1
            border-right: none
            text-align: center;
          }
        `}</style>
      </div>
    )
  }

  // 打开病历模板
  async setMedicalModesl() {
    let { operation_id } = this.props
    const { queryMedicalModelsByDoctor } = this.props
    await queryMedicalModelsByDoctor({ operation_id })
    this.setState({ showMedicalModels: true })
  }

  // 展示历史病历
  showHistroyMedicals() {
    if (!this.state.showHistroyMedicals) return null
    let triagePatient = {}
    const { triagePatients, clinic_triage_patient_id, medicalHistoryPage, medicalHistory } = this.props
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', left: '324px', height: 'unset', minHeight: '683px' }}>
          <div className='doctorList_top'>
            <span>{triagePatient.patient_name} 的历史病历</span>
            <span onClick={() => this.setState({ showHistroyMedicals: false })}>x</span>
          </div>
          <div className={'meical_nodel_item'}>
            <div style={{ margin: '32px 0 0 0' }}>
              <ul style={{ background: '#F7F7F7' }}>
                <li>就诊时间</li>
                <li>就诊类型</li>
                <li>诊所名称</li>
                <li>接诊医生</li>
                <li>选择病历</li>
              </ul>
            </div>
            {medicalHistory.map((item, iKey) => {
              if (!item) return null
              const { registion_time, visit_type, clinic_name, doctor_name } = item
              let visit_type_map = { 1: '首诊', 2: '复诊', 3: '术后复诊' }
              let visit_type_name = visit_type_map[visit_type] || ''
              return (
                <div key={iKey}>
                  <ul>
                    <li>{moment(registion_time).format('YYYY-MM-DD HH:mm:ss')}</li>
                    <li>{visit_type_name}</li>
                    <li>{clinic_name}</li>
                    <li>{doctor_name}</li>
                    <li style={{ cursor: 'pointer', color: 'rgba(42,205,200,1' }} onClick={() => this.setState({ ...this.state, choseHistoryId: this.state.choseHistoryId === item.id ? '' : item.id })}>
                      {this.state.choseHistoryId === item.id ? '收 起' : '展 开'}
                    </li>
                  </ul>
                  {this.showHistoryDetail(item)}
                </div>
              )
            })}
          </div>
          <PageCard
            style={{ width: '90%' }}
            offset={medicalHistoryPage.offset}
            limit={medicalHistoryPage.limit}
            total={medicalHistoryPage.total}
            onItemClick={({ offset, limit }) => {
              this.props.queryMedicalsByPatient({ ...item, offset, limit })
            }}
          />
        </div>
        <style jsx global>{`
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
            flex:3
            text-align: center;
          }

          .meical_nodel_item ul li:nth-child(5){
            float: left;
            flex:1
            border-right: none
            text-align: center;
          }
        `}</style>
      </div>
    )
  }

  // 展示历史处方详情
  showHistoryDetail(item) {
    const { choseHistoryId } = this.state
    if (choseHistoryId !== item.id) return null

    let { morbidity_date, chief_complaint, history_of_present_illness, history_of_past_illness, family_medical_history, allergic_history, body_examination, immunizations, cure_suggestion, remark, personal_medical_history } = item
    return (
      <div className='medical_detail'>
        <div className='medical_detail_item'>
          <span>发病日期:</span>
          <input readOnly type='text' value={morbidity_date} />
        </div>
        <div className='medical_detail_item'>
          <span>主诉：</span>
          <input readOnly type='text' value={chief_complaint} />
        </div>
        <div className='medical_detail_item'>
          <span>现病史：</span>
          <input readOnly type='text' value={history_of_present_illness} />
        </div>
        <div className='medical_detail_item'>
          <span>既往史：</span>
          <input readOnly type='text' value={history_of_past_illness} />
        </div>
        <div className='medical_detail_item'>
          <span>家族史：</span>
          <input readOnly type='text' value={family_medical_history} />
        </div>
        <div className='medical_detail_item'>
          <span>过敏史：</span>
          <input readOnly type='text' value={allergic_history} />
        </div>
        <div className='medical_detail_item'>
          <span>疫苗接种史：</span>
          <input readOnly type='text' value={immunizations} />
        </div>
        <div className='medical_detail_item'>
          <span>个人史：</span>
          <input readOnly type='text' value={personal_medical_history} />
        </div>
        <div className='medical_detail_item'>
          <span>体格检查：</span>
          <input readOnly type='text' value={body_examination} />
        </div>
        <div className='medical_detail_item'>
          <span>治疗意见：</span>
          <input readOnly type='text' value={cure_suggestion} />
        </div>
        <div className='medical_detail_item'>
          <span>备注：</span>
          <input readOnly type='text' value={remark} />
        </div>
        <div className='medical_detail_item' style={{ justifyContent: 'flex-end' }}>
          <button
            onClick={() => {
              this.setState({ ...this.state, ...item, files: '', showHistroyMedicals: false })
            }}
          >
            复 制
          </button>
        </div>
        <style jsx='true'>{`
          .medical_detail {
            height: unset;
            border: none;
            margin: 10px 0 20px 0;
          }
          .medical_detail_item {
            height: 30px;
            display: flex;
            border: none;
            border-bottom: 1px solid #dbdbdb;
            align-items: center;
          }
          .medical_detail_item span {
            text-align: center;
            flex: 1;
          }

          .medical_detail_item input {
            flex: 6;
            background: #f7f7f7;
            border: none;
          }

          .medical_detail_item button {
            background: rgba(42, 205, 200, 1);
            border-radius: 7px;
            width: 70px;
            margin-right: 10%;
            color: white;
          }
        `}</style>
      </div>
    )
  }

  // 打开历史病历
  async setHistroyMedicals() {
    let triagePatient = {}
    const { triagePatients, clinic_triage_patient_id, queryMedicalsByPatient } = this.props
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    await queryMedicalsByPatient({ ...triagePatient })
    this.setState({ showHistroyMedicals: true })
  }

  cancel() {
    this.setState({
      morbidity_date: '',
      chief_complaint: '',
      history_of_present_illness: '',
      history_of_past_illness: '',
      family_medical_history: '',
      allergic_history: '',
      allergic_reaction: '',
      body_examination: '',
      immunizations: '',
      diagnosis: '',
      cure_suggestion: '',
      remark: '',
      files: ''
    })
  }

  // 选择主述标签
  showComplaint() {
    const { chief_complaints } = this.props
    const { selComplaint, chief_complaint } = this.state
    return (
      <div className={'complaintBox'}>
        <ul>
          {chief_complaints.map((item, index) => {
            let sel = false
            if (selComplaint.indexOf(item.name) > -1) {
              sel = true
            }
            return (
              <li
                className={sel ? 'sel' : ''}
                key={index}
                onClick={() => {
                  let array = selComplaint
                  if (sel) {
                    for (let i = 0; i < array.length; i++) {
                      if (array[i] === item.name) {
                        array.splice(i, 1)
                      }
                    }
                    this.setState({ selComplaint: array })
                  } else {
                    array.push(item.name)
                    this.setState({ selComplaint: array })
                  }
                }}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
        <div className={'boxBottom'}>
          <div>
            <button
              onClick={() => {
                this.setState({ showComplaint: false })
              }}
            >
              取消
            </button>
            <button
              onClick={() => {
                let complaint = chief_complaint
                for (let i = 0; i < selComplaint.length; i++) {
                  if (i < selComplaint.length - 1) {
                    complaint += selComplaint[i] + ','
                  } else {
                    complaint += selComplaint[i]
                  }
                }
                this.setState({ showComplaint: false, determineComplaint: selComplaint, chief_complaint: complaint })
              }}
            >
              确定
            </button>
          </div>
        </div>
        <style jsx>{`
          .complaintBox {
            position: absolute;
            width: 100%;
            height: 240px;
            top: 91px;
            z-index: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            background: rgba(245, 248, 249, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border: 1px solid #d9d9d9;
          }
          .complaintBox > ul {
            flex: 4;
            height: auto;
            max-height: 180px;
            overflow: auto;
            width: 100%;
            border-bottom: 1px solid #d8d8d8;
          }
          .complaintBox > ul > li {
            margin: 5px;
            width: auto;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            padding: 3px 5px;
            cursor: pointer;
          }
          .boxBottom {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .boxBottom > div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .boxBottom > div > button {
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            height: 32px;
            cursor: pointer;
            margin-left: 10px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(0, 0, 0, 0.65);
            padding: 0 15px;
          }
          .complaintBox > ul > li.sel,
          .complaintBox > ul > li:hover,
          .boxBottom > div > button:hover {
            background: rgba(42, 205, 200, 1);
            color: #ffffff;
          }
        `}</style>
      </div>
    )
  }

  // 选择诊断模板
  chooseDiagnosticTemplate() {
    let array = []
    const { dic_diagnosis_data } = this.props
    for (let key in dic_diagnosis_data) {
      let { id, name } = dic_diagnosis_data[key]
      array.push({ id, name })
    }
    // console.log('诊断模板=====', array, dic_diagnosis_data)
    const { diagnosis, selDiagnosis } = this.state
    return (
      <div className={'tempBox'}>
        <ul>
          {array.map((item, index) => {
            let sel = false
            if (selDiagnosis.indexOf(item.name) > -1) {
              sel = true
            }
            return (
              <li
                key={index}
                className={sel ? 'sel' : ''}
                onClick={() => {
                  let array = selDiagnosis
                  if (sel) {
                    for (let i = 0; i < array.length; i++) {
                      if (array[i] === item.name) {
                        array.splice(i, 1)
                      }
                    }
                    this.setState({ selDiagnosis: array })
                  } else {
                    array.push(item.name)
                    this.setState({ selDiagnosis: array })
                  }
                }}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
        <div className={'boxBottom'}>
          <div>
            <button
              onClick={() => {
                this.setState({ chooseDiagnosticTemplate: false })
              }}
            >
              取消
            </button>
            <button
              onClick={() => {
                let complaint = diagnosis
                for (let i = 0; i < selDiagnosis.length; i++) {
                  if (i < selDiagnosis.length - 1) {
                    complaint += selDiagnosis[i] + ','
                  } else {
                    complaint += selDiagnosis[i]
                  }
                }
                this.setState({ chooseDiagnosticTemplate: false, diagnosis: complaint })
              }}
            >
              确定
            </button>
          </div>
        </div>
        <style jsx>{`
          .tempBox {
            position: absolute;
            width: 100%;
            height: 300px;
            top: 90px;
            z-index: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            background: rgba(245, 248, 249, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border: 1px solid #d9d9d9;
          }
          .tempBox > ul {
            flex: 4;
            height: auto;
            max-height: 280px;
            overflow: auto;
            width: 100%;
            border-bottom: 1px solid #d8d8d8;
            // display:flex;
            // flex-direction: column;
          }
          .tempBox > ul > li {
            margin: 0;
            width: 100%;
            // border-radius: 4px;
            border-bottom: 1px solid #d8d8d8;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            height: 30px;
            display: block;
          }
          .boxBottom {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .boxBottom > div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .boxBottom > div > button {
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            height: 32px;
            cursor: pointer;
            margin-left: 10px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(0, 0, 0, 0.65);
            padding: 0 15px;
          }
          .tempBox > ul > li.sel,
          .tempBox > ul > li:hover,
          .boxBottom > div > button:hover {
            background: rgba(42, 205, 200, 1);
            color: #ffffff;
          }
        `}</style>
      </div>
    )
  }
  getDiagnosisOptions() {
    const { dic_diagnosis_data } = this.props
    // console.log('dic_diagnosis_data==', dic_diagnosis_data)
    let array = []
    for (let key in dic_diagnosis_data) {
      let { name } = dic_diagnosis_data[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  queryDictDiagnosisList(keyword) {
    const { queryDictDiagnosisList } = this.props
    if (keyword) {
      queryDictDiagnosisList({ keyword })
    }
  }
  // 提示是否保存当前页
  tipsToSave(selPage) {
    const { recordStr } = this.state
    const { changePage } = this.props
    if (recordStr !== '') {
      let oldJson = JSON.parse(recordStr)
      let newJSON = {}
      for (let key in oldJson) {
        newJSON[key] = this.state[key]
      }
      let jsonStr = JSON.stringify(newJSON)
      // console.log(recordStr)
      // console.log(jsonStr)
      if (jsonStr !== recordStr) {
        this.refs.myConfirm.confirm('提示', '您填写的内容已修改，是否需要保存？', 'Warning', () => {
          this.save()
        })
      } else {
        changePage(selPage)
      }
    } else {
      changePage(selPage)
    }
  }

  // 显示上传的文件
  renderFiles() {
    const { uploadedFiles } = this.state
    // console.log('uploadedFiles==', uploadedFiles)
    // let viewUrl = 'http://office.qingshanboke.com/Default.aspx?url='
    if (uploadedFiles.length === 0) {
      return null
    } else {
      return (
        <div className={'filesBox'}>
          <ul>
            {uploadedFiles.map((item, index) => {
              let fileNameArray = item.docName.split('.')
              let suffix = fileNameArray[fileNameArray.length - 1].toLowerCase()
              if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
                return (
                  <li className={'imgLi'} key={index} title={item.docName}>
                    <img
                      src={API_SERVER + item.url}
                      onClick={e => {
                        this.refs.ImageViewer.show(index)
                      }}
                    />
                    <span
                      onClick={() => {
                        let array = uploadedFiles
                        array.splice(index, 1)
                        this.setState({ uploadedFiles: array })
                      }}
                    >
                      ×
                    </span>
                  </li>
                )
              } else {
                return (
                  <li key={index} title={item.docName}>
                    {suffix === 'pdf' ? <a
                      style={{width: '100%', height: '100%'}}
                      href={API_SERVER + item.url}
                      target={'_blank'}>{item.docName}
                    </a> : <a
                      style={{width: '100%', height: '100%'}}
                      href={API_SERVER + item.url}
                      target={'_blank'}
                      >{item.docName}</a>
                    }
                    <span
                      onClick={() => {
                        let array = uploadedFiles
                        array.splice(index, 1)
                        this.setState({ uploadedFiles: array })
                      }}
                    >
                      ×
                    </span>
                  </li>
                )
              }
            })}
          </ul>
          <style jsx>{`
            .filesBox {
              width: 100%;
              position: absolute;
              top: 60px;
            }
            .filesBox ul {
              display: flex;
              width: 100%;
            }
            .filesBox ul li {
              position: relative;
              margin: 0 0 0 5px;
              background: rgba(233, 233, 233, 0.8);
              border-radius: 4px;
              overflow: hidden;
              width: auto;
              white-space: nowrap;
              text-overflow: ellipsis;
              // padding: 3px 15px 3px 3px;
              padding: 5px;
              height: 30px;
              text-align: left;
              display: block;
              cursor: default;
            }
            .filesBox ul li:first-child {
              margin: 0;
            }
            .filesBox ul li.imgLi {
              width: 50px;
              height: 50px;
            }
            .filesBox ul li.imgLi img {
              width: 100%;
              height: 100%;
              opacity: 0.7;
            }
            .filesBox ul li span {
              position: absolute;
              display: block;
              top: 0;
              cursor: pointer;
              width: 12px;
              height: 12px;
              right: 0;
              text-align: center;
              background: #afb6ba;
              color: #fff;
              font-weight: bold;
              /* opacity: 0.7; */
              line-height: 10px;
            }
            .filesBox ul li span:hover {
              opacity: 1;
            }
            .filesBox ul li:hover span {
              display: block;
              transition: 0.3s ease;
            }
          `}</style>
        </div>
      )
    }
  }
  // 上传文件
  async FileUpload(files) {
    const { FileUpload } = this.props // xhrFileUpload
    const { uploadedFiles, imgFiles } = this.state
    let array = uploadedFiles
    let imgArray = imgFiles
    if (files) {
      let file = new FormData()
      // console.log('files===', files)
      // for (let i = 0; i < files.length; i++) {
      //   file.append('file[' + i + ']', files[i]) // ++++++++++
      // }
      file.append('file', files[0])
      let url = await FileUpload(file)
      // xhrFileUpload(file, function (type, data) {
      //   if (type === 'progress' || type === 'uploading') {
      //     console.log('progress=====', data)
      //   }
      //   if (type === 'cancel') {
      //     console.log('cancel=====', data)
      //   }
      //   if (type === 'error') {
      //     console.log('error=====', data)
      //   }
      //   if (type === 'ok') {
      //     console.log('ok=====', data)
      //   }
      // })
      if (url) {
        let item = {
          docName: files[0].name,
          url
        }
        array.push(item)
        let suffix = url.split('.')[url.split('.').length - 1].toLowerCase()
        if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
          imgArray.push(item)
        }
        this.setState({ uploadedFiles: array, imgFiles: imgArray, files: JSON.stringify(array) })
      }
    }
  }
  // 显示进度条
  showProgress(e) {
    const { uploadedFiles, imgFiles } = this.state
    let array = uploadedFiles
    let imgArray = imgFiles
    let file = e.file
    if (e.event !== undefined) {
      let event = e.event
      // console.log('event=====', e, file, event)
      this.setState({ showProgress: true, percent: event.percent })
    }
    // console.log('event=====', e)
    if (file.status === 'done') {
      this.setState({ showProgress: false, percent: 0 })
      // console.log('fileList====', e.file)
      if (e.file.response.url !== undefined) {
        let url = e.file.response.url
        let item = {
          docName: file.name,
          url
        }
        array.push(item)
        let suffix = url.split('.')[url.split('.').length - 1].toLowerCase()
        if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') {
          imgArray.push(item)
        }
        this.setState({ uploadedFiles: array, imgFiles: imgArray, files: JSON.stringify(array) })
      }
    }
  }
  fileProgress() {
    const { percent } = this.state
    return (
      <div className={'progress'}>
        <div className={'percent'} style={{ width: percent + '%' }} />
        <style jsx>{`
          .progress {
            position: absolute;
            z-index: 1;
            width: 100%;
            top: 75px;
            height: 8px;
            border: 1px solid #d8d8d8;
            border-radius: 4px;
          }
          .percent {
            height: 100%;
            background: #1ba798;
          }
        `}</style>
      </div>
    )
  }
  mrPrinter() {
    let { user, triagePatients, clinic_triage_patient_id } = this.props
    let { pateint = {} } = this.state
    let triagePatient = {}
    for (let tp of triagePatients) {
      if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp
    }
    const patientInfoRowStyle = {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50px'
    }
    const patientInfoRowDivStyle = {
      flex: 1,
      display: 'flex',
      margin: '10px 15px 10px 5px',
      minHeight: '30px',
      alignItems: 'center',
      borderBottom: '1px solid #d8d8d8',
      borderTop: '1px solid #ffffff'
    }
    const recordDetailDiv = {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '17px',
      marginTop: '10px'
    }
    const recordDetailDivLable = {
      width: '120px',
      fontWeight: '500'
    }
    return (
      <div style={{ width: '800px', display: 'flex', flexDirection: 'column', marginBottom: '50px', background: '#FFFFFF', padding: '10px 20px 10px 20px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '200px' }}>
            <img src='/static/login/login_logo.png' />
          </div>
          <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: '500', width: '100%', textAlign: 'center', height: '50px' }}>{user.clinic_name}</div>
            <div style={{ fontSize: '25px', fontWeight: '400', width: '100%', textAlign: 'center', height: '30px', marginBottom: '15px' }}>门诊病历</div>
          </div>
          <div style={{ width: '200px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>姓名</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.patient_name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>性别</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>病人ID</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.patient_id}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>年龄</lable>
            <div style={patientInfoRowDivStyle}>{getAgeByBirthday(triagePatient.birthday)}</div>
          </div>
          <div />
          <div />
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>职业</lable>
            <div style={patientInfoRowDivStyle}>{pateint.profession}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>电话</lable>
            <div style={patientInfoRowDivStyle}>{triagePatient.phone}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>证件号</lable>
            <div style={patientInfoRowDivStyle}>{pateint.cert_no}</div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle}>
            <lable>临床诊断</lable>
            <div style={patientInfoRowDivStyle}>{this.state.diagnosis}</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '30px 0 0 0'
          }}
        >
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>主诉</label>
            <div style={{ flex: 1 }}>{this.state.chief_complaint}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>现病史</label>
            <div style={{ flex: 1 }}>{this.state.history_of_present_illness}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>既往史</label>
            <div style={{ flex: 1 }}>{this.state.history_of_past_illness}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>过敏史</label>
            <div style={{ flex: 1 }}>{this.state.allergic_history}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>个人史</label>
            <div style={{ flex: 1 }}>{this.state.personal_medical_history}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>家族史</label>
            <div style={{ flex: 1 }}>{this.state.family_medical_history}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>体格检查</label>
            <div style={{ flex: 1 }}>{this.state.body_examination}</div>
          </div>
          <div style={recordDetailDiv}>
            <label style={recordDetailDivLable}>治疗意见</label>
            <div style={{ flex: 1 }}>{this.state.cure_suggestion}</div>
          </div>
        </div>
        <div style={{ marginTop: '50px', width: '100%', display: 'flex', fontSize: '17px' }}>
          <div style={patientInfoRowStyle} />
          <div style={patientInfoRowStyle} />
          <div style={patientInfoRowStyle}>
            <lable>医师</lable>
            <div style={{ borderBottom: '1px solid #ffffff', marginLeft: '20px' }}>{user.name}</div>
          </div>
          <div style={patientInfoRowStyle}>
            <lable>日期：</lable>
            <div style={{ borderBottom: '1px solid #ffffff' }}>{moment().format('YYYY年MM月DD日')}</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let {
      uploadedFiles,
      morbidity_date,
      chief_complaint,
      history_of_present_illness,
      history_of_past_illness,
      family_medical_history,
      allergic_history,
      allergic_reaction,
      body_examination,
      immunizations,
      // diagnosis,
      cure_suggestion,
      remark,
      // pre_medical_record,
      personal_medical_history,
      showComplaint,
      selPage,
      diagnosisArray,
      showProgress
      // chooseDiagnosticTemplate
    } = this.state
    console.log('state===', morbidity_date)
    const { changePage } = this.props
    // const { chief_complaints } = this.props
    // console.log('chief_complaints', chief_complaints)
    let images = []
    for (let f of uploadedFiles) {
      images.push({ src: API_SERVER + f.url })
    }
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={'sel'} onClick={() => {}}>
            病历
          </span>
          <span
            className={this.state.pageType === 2 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 2 })
              this.tipsToSave(2)
            }}
          >
            处方
          </span>
          <span
            className={this.state.pageType === 3 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 3 })
              this.tipsToSave(3)
            }}
          >
            治疗
          </span>
          <span
            className={this.state.pageType === 4 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 4 })
              this.tipsToSave(4)
            }}
          >
            检验
          </span>
          <span
            className={this.state.pageType === 5 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 5 })
              this.tipsToSave(5)
            }}
          >
            检查
          </span>
          <span
            className={this.state.pageType === 6 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 6 })
              this.tipsToSave(6)
            }}
          >
            材料费
          </span>
          <span
            className={this.state.pageType === 7 ? 'sel' : ''}
            onClick={() => {
              this.setState({ selPage: 7 })
              this.tipsToSave(7)
            }}
          >
            其他费用
          </span>
        </div>
        <div className='filterBox'>
          <div className='boxLeft'>
            <div style={{ float: 'left', margin: '-3px 0 0 15px' }}>
              <DatePicker
                // padding={'10px 0'}
                // defaultValue={moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                // value={morbidity_date === '' ? moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD') : moment(moment(morbidity_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                format={'YYYY-MM-DD'}
                value={morbidity_date === '' ? '' : moment(moment(morbidity_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}
                onChange={(date, str) => {
                  if (date) {
                    this.setState({ morbidity_date: moment(date).format('YYYY-MM-DD') })
                  }
                }}
              />
            </div>
            {/* <input
              type='date'
              placeholder='开始日期'
              value={morbidity_date}
              onChange={e => {
                this.setState({ morbidity_date: e.target.value })
              }}
            /> */}
            <button onClick={() => this.setMedicalModesl()}>选择模板</button>
            <button onClick={() => this.setHistroyMedicals()}>复制病历</button>
          </div>
          <div className={'formList'}>
            <div className={'formListBox'} style={{}}>
              <ul>
                <li style={{ position: 'relative' }}>
                  <label>
                    主述<b style={{ color: 'red' }}> *</b>
                  </label>
                  <textarea
                    value={chief_complaint}
                    onChange={e => {
                      this.setState({ chief_complaint: e.target.value })
                    }}
                    onFocus={() => {
                      this.setState({ showComplaint: true, selComplaint: [] })
                    }}
                  />
                  {showComplaint ? this.showComplaint() : ''}
                </li>
                <li>
                  <label>现病史</label>
                  <textarea
                    value={history_of_present_illness}
                    onChange={e => {
                      this.setState({ history_of_present_illness: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>既往史</label>
                  <textarea
                    value={history_of_past_illness}
                    onChange={e => {
                      this.setState({ history_of_past_illness: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>家族史</label>
                  <textarea
                    value={family_medical_history}
                    onChange={e => {
                      this.setState({ family_medical_history: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>过敏史</label>
                  <input
                    type='text'
                    value={allergic_history}
                    onChange={e => {
                      this.setState({ allergic_history: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>过敏反应</label>
                  <input
                    type='text'
                    value={allergic_reaction}
                    onChange={e => {
                      this.setState({ allergic_reaction: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>疫苗接种史</label>
                  <input
                    type='text'
                    value={immunizations}
                    onChange={e => {
                      this.setState({ immunizations: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>个人史</label>
                  <input
                    type='text'
                    value={personal_medical_history}
                    onChange={e => {
                      this.setState({ personal_medical_history: e.target.value })
                    }}
                  />
                </li>
                {/* <li style={{ height: '58px' }} /> */}
                <li style={{ width: '100%' }}>
                  <label>体格检查</label>
                  <textarea
                    style={{ width: '97%' }}
                    value={body_examination}
                    onChange={e => {
                      this.setState({ body_examination: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>上传文件</label>
                  {this.renderFiles()}
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <Upload
                      accept={'image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
                      onChange={e => {
                        this.showProgress(e)
                        // console.log('Upload=====', e)
                      }}
                    />
                    <label>文件大小不能超过20M，支持图片、word、pdf文件</label>
                  </div>
                  {showProgress ? this.fileProgress() : ''}
                  <ImageViewer ref='ImageViewer' images={images} />
                  {/* <div className={'chooseFile'}>
                    <form ref='myForm' method={'post'} encType={'multipart/form-data'}>
                      <inputz
                        multiple='multiple'
                        type='file'
                        onChange={e => {
                          // console.log('文件=====', e.target.files)
                          this.FileUpload(e.target.files)
                        }}
                      />
                    </form>
                    <button> + 添加文件</button>
                    <a>文件大小不能超过20M，支持图片、word、pdf文件</a>
                  </div> */}
                </li>
                <li style={{ position: 'relative' }}>
                  <label>初步诊断</label>
                  <div style={{ marginTop: '15px', height: '100px' }}>
                    <MyCreatableSelect
                      placeholder={'请选择诊断'}
                      options={this.getDiagnosisOptions()}
                      height={100}
                      value={diagnosisArray}
                      onChange={value => {
                        // console.log('value====', value)
                        let str = ''
                        for (let i = 0; i < value.length; i++) {
                          if (i < value.length - 1) {
                            str += value[i].value + ','
                          } else {
                            str += value[i].value
                          }
                        }
                        this.setState({ diagnosis: str, diagnosisArray: value })
                      }}
                      onInputChange={keyword => {
                        // console.log('keyword=====', keyword)
                        this.queryDictDiagnosisList(keyword)
                      }}
                    />
                  </div>
                </li>
                {/* <li style={{ position: 'relative' }}>
                  <a
                    className={'chooseTemp'}
                    style={{ marginTop: '110px' }}
                    onClick={() => {
                      this.setState({ chooseDiagnosticTemplate: true })
                    }}
                  >
                    选择诊断模板
                  </a>
                </li> */}
                <li>
                  <label>治疗意见</label>
                  <textarea
                    value={cure_suggestion}
                    onChange={e => {
                      this.setState({ cure_suggestion: e.target.value })
                    }}
                  />
                </li>
                <li>
                  <label>备注</label>
                  <textarea
                    value={remark}
                    onChange={e => {
                      this.setState({ remark: e.target.value })
                    }}
                  />
                </li>
              </ul>
              <div className={'formListBottom'}>
                <div className={'bottomCenter'}>
                  <button
                    className={'cancel'}
                    onClick={() => {
                      this.cancel()
                    }}
                  >
                    取消
                  </button>
                  <button
                    className={'save'}
                    onClick={() => {
                      this.save()
                    }}
                  >
                    保存
                  </button>
                </div>
                <div className={'bottomRight'}>
                  <button
                    onClick={() => {
                      this.setState({ saveAsModel: true })
                    }}
                  >
                    存为模板
                  </button>
                  <button onClick={() => this.refs.printer.onPrint()}>打印病历</button>
                  <Print ref='printer' lazyRender isIframe>
                    {this.mrPrinter()}
                  </Print>
                </div>
              </div>
            </div>
          </div>
          {this.showSaveModel()}
          {this.showMedicalModels()}
          {this.showHistroyMedicals()}
          <Confirm ref='myAlert' isAlert />
          <Confirm
            ref='myConfirm'
            setPage={() => {
              this.setState({ selPage: 1 })
            }}
            sureText={'保存'}
          >
            <div
              className={`buttonDiv buttonDivCancel`}
              onClick={() => {
                changePage(selPage)
              }}
            >
              <span className={`cancel`}>不保存</span>
            </div>
          </Confirm>
        </div>
        <style jsx='true'>{`
          .childTopBar {
            display: flex;
            margin-left: 65px;
          }
          .childTopBar > span {
            flex: 1;
            margin-left: 0;
          }
          .buttonDiv {
            width: 63px;
            height: 30px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 8px;
          }
          .buttonDivCancel {
            background: rgba(255, 255, 255, 1);
            border: 1px solid #d9d9d9;
          }
          .buttonDiv span {
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            line-height: 22px;
          }
          .cancel {
            color: rgba(0, 0, 0, 0.65);
          }
          .filterBox {
            flex-direction: column;
            // margin-top: -10px;
            margin-bottom: 50px;
          }
          .filterBox .boxLeft {
            border-bottom: 1px solid #dbdbdb;
          }
          .filterBox .boxLeft button {
            width: auto;
            margin-left: 15px;
          }
          .formList {
            margin: 0;
            box-shadow: none;
          }
          .formListBox {
            display: flex;
            flex-direction: column;
          }
          .formList ul li {
            margin-top: 20px;
          }
          .formListBox textarea {
            width: 479px;
            height: 60px;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            resize: none;
            margin-top: 10px;
            border: 1px solid #d8d8d8;
          }
          .formListBox input {
            width: 479px;
            height: 30px;
            background: rgba(245, 248, 249, 1);
            border-radius: 4px;
            margin-top: 10px;
          }
          .chooseFile {
            // height: 66px;
            margin-top: 10px;
            display: flex;
            position: relative;
          }
          .chooseFile input {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            margin: 0;
          }
          .chooseFile button {
            height: 30px;
            width: 200px;
            border: 1px dashed #d9d9d9;
            border-radius: 4px;
            background: transparent;
            cursor: pointer;
            color: rgba(102, 102, 102, 1);
          }
          .chooseFile a {
            width: 280px;
            height: 34px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            color: rgba(102, 102, 102, 1);
            line-height: 15px;
            display: block;
            line-height: 34px;
          }
          .chooseTemp {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(49, 176, 179, 1);
            margin-top: 71px;
            cursor: pointer;
          }
          .formListBottom {
            width: 1000px;
            margin: 30px auto;
          }
          .formListBottom .bottomCenter {
            margin: 0 auto;
            display: block;
            width: 150px;
          }
          .formListBottom .bottomCenter button.cancel {
            width: 70px;
            height: 26px;
            background: rgba(167, 167, 167, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: left;
            cursor: pointer;
          }
          .formListBottom .bottomCenter button.save {
            width: 70px;
            height: 26px;
            background: rgba(49, 176, 179, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: right;
            cursor: pointer;
          }
          .formListBottom .bottomRight {
            float: right;
            margin-top: -23px;
          }
          .formListBottom .bottomRight button {
            min-width: 70px;
            height: 26px;
            border-radius: 15px;
            border: 1px solid #2acdc8;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(49, 176, 179, 1);
            background: transparent;
            margin-right: 10px;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    operation_id: state.user.data.id,
    user: state.user.data,
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id,
    medicalRecord: state.medicalRecords.data,
    medicalModels: state.medicalRecords.models,
    medicalModelPage: state.medicalRecords.model_page,
    medicalHistory: state.medicalRecords.history_medicals,
    medicalHistoryPage: state.medicalRecords.history_page_info,
    chief_complaints: state.medicalRecords.chief_complaints,
    dic_diagnosis_data: state.diagnosisTreatments.dic_diagnosis_data,
    patient_id: state.patients.selectId
  }
}

export default connect(
  mapStateToProps,
  {
    createMedicalRecord,
    queryMedicalRecord,
    createMedicalRecordAsModel,
    queryMedicalModelsByDoctor,
    queryMedicalsByPatient,
    queryChiefComplaints,
    queryDictDiagnosisList,
    FileUpload,
    xhrFileUpload,
    PersonalMedicalRecord,
    GetHealthRecord,
    PatientGetByID
  }
)(MedicalRecordScreen)
