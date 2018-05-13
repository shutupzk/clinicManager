import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm, PageCard } from '../../../../../components'
import moment from 'moment'
import { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel, queryMedicalModels, queryMedicalsByPatient } from '../../../../../ducks'
// 病历
class PrescriptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      files: '',
      saveAsModel: false,
      showMedicalModels: false,
      showHistroyMedicals: false,
      name: '',
      is_common: true,
      model_keyword: '',
      choseHistoryId: ''
    }
  }

  async componentWillMount() {
    const { queryMedicalRecord, clinic_triage_patient_id } = this.props
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    this.setState({ ...this.state, ...record })
  }

  save() {
    let { chief_complaint } = this.state
    let { createMedicalRecord, triage_personnel_id, clinic_triage_patient_id } = this.props
    if (!chief_complaint) return this.refs.myAlert.alert('请填写主诉！')
    this.refs.myAlert.confirm('确定提交病历？', '', 'Success', async () => {
      let res = await createMedicalRecord({ ...this.state, clinic_triage_patient_id, operation_id: triage_personnel_id })
      if (res) this.refs.myAlert.alert(`保存病历失败！【${res}】`)
      else {
        this.refs.myAlert.alert('保存病历成功！')
      }
    })
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
    let { is_common, name, chief_complaint, history_of_present_illness, history_of_past_illness, family_medical_history, allergic_history, allergic_reaction, body_examination, immunizations, diagnosis, cure_suggestion, remark } = this.state
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
          <style jsx>{`
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
    const { medicalModels, medicalModelPage } = this.props
    if (!this.state.showMedicalModels) return null
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', height: '600px', left: '324px' }}>
          <div className='doctorList_top'>
            <span>选择病历模板</span>
            <div style={{ float: 'left', marginLeft: '20%' }}>
              <input
                type='text'
                placeholder='模板名称'
                value={this.state.model_keyword}
                onChange={e => {
                  this.setState({ model_keyword: e.target.value })
                }}
              />
              <button style={{ float: 'none' }} onClick={() => this.props.queryMedicalModels({ keyword: this.state.model_keyword })}>
                查询
              </button>
            </div>
            <span onClick={() => this.setState({ showMedicalModels: false })}>x</span>
          </div>
          <div className={'meical_nodel_item'}>
            <div style={{ margin: '20px 0 20px 0' }}>
              <ul style={{ background: '#efeaea' }}>
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
                    <li style={{ cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }} onClick={() => this.setState({ ...this.state, ...item, showMedicalModels: false })}>
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
              this.props.queryMedicalModels({ keyword: this.state.model_keyword, offset, limit })
            }}
          />
        </div>
        <style jsx>{`
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
            flex:3
            height: 20px;
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
    const { queryMedicalModels } = this.props
    await queryMedicalModels({})
    this.setState({ showMedicalModels: true })
  }

  // 展示历史处方
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
            <span>{triagePatient.patient_name}的历史病历</span>
            <span onClick={() => this.setState({ showHistroyMedicals: false })}>x</span>
          </div>
          <div className={'meical_nodel_item'}>
            <div style={{ margin: '20px 0 20px 0' }}>
              <ul style={{ background: '#efeaea' }}>
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
                    <li style={{ cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }} onClick={() => this.setState({ ...this.state, choseHistoryId: this.state.choseHistoryId === item.id ? '' : item.id })}>
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
            margin: 22px 5% 0 5%;
            padding: 0;
          }
          .meical_nodel_item div {
            width: 100%;
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
            flex:3
            height: 20px;
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

    let { morbidity_date, chief_complaint, history_of_present_illness, history_of_past_illness, family_medical_history, allergic_history, body_examination, immunizations, cure_suggestion, remark } = item
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
        <style jsx>{`
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

  render() {
    let { morbidity_date, chief_complaint, history_of_present_illness, history_of_past_illness, family_medical_history, allergic_history, allergic_reaction, body_examination, immunizations, diagnosis, cure_suggestion, remark } = this.state
    return (
      <div className='filterBox'>
        <div className='boxLeft'>
          <input
            type='date'
            placeholder='开始日期'
            value={morbidity_date}
            onChange={e => {
              this.setState({ morbidity_date: e.target.value })
            }}
          />
          <button onClick={() => this.setMedicalModesl()}>选择模板</button>
          <button onClick={() => this.setHistroyMedicals()}>复制病历</button>
        </div>
        <div className={'formList'}>
          <div className={'formListBox'} style={{}}>
            <ul>
              <li>
                <label>
                  主述<b style={{ color: 'red' }}> *</b>
                </label>
                <textarea
                  value={chief_complaint}
                  onChange={e => {
                    this.setState({ chief_complaint: e.target.value })
                  }}
                />
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
              <li style={{ height: '58px' }} />
              <li>
                <label>体格检查</label>
                <textarea
                  value={body_examination}
                  onChange={e => {
                    this.setState({ body_examination: e.target.value })
                  }}
                />
              </li>
              <li>
                <label>上传文件</label>
                <div className={'chooseFile'}>
                  <input type='file' />
                  <button> + 添加文件</button>
                  <a>文件大小不能超过20M，支持图片、word、pdf文件</a>
                </div>
              </li>
              <li>
                <label>初步诊断</label>
                <textarea
                  value={diagnosis}
                  onChange={e => {
                    this.setState({ diagnosis: e.target.value })
                  }}
                />
              </li>
              <li>
                <a className={'chooseTemp'}>选择诊断模板</a>
              </li>
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
                <button
                  onClick={() => {
                    this.setState({ saveAsModel: true })
                  }}
                >
                  打印病历
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.showSaveModel()}
        {this.showMedicalModels()}
        {this.showHistroyMedicals()}
        <Confirm ref='myAlert' isAlert />
        <style jsx>{`
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
            margin-top: 42px;
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
            width: 145px;
            height: 34px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            color: rgba(102, 102, 102, 1);
            line-height: 15px;
            display: block;
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
            width: 70px;
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
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id,
    medicalRecord: state.medicalRecords.data,
    medicalModels: state.medicalRecords.models,
    medicalModelPage: state.medicalRecords.model_page,
    medicalHistory: state.medicalRecords.history_medicals,
    medicalHistoryPage: state.medicalRecords.history_page_info
  }
}

export default connect(mapStateToProps, { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel, queryMedicalModels, queryMedicalsByPatient })(PrescriptionScreen)
