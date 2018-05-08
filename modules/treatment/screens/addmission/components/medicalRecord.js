import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm } from '../../../../../components'
import { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel } from '../../../../../ducks'
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
      saveAsModel: false
    }
  }

  async componentWillMount() {
    const { queryMedicalRecord, clinic_triage_patient_id } = this.props
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    this.setState({ ...record })
  }

  save() {
    let { chief_complaint } = this.state
    let { createMedicalRecord, triage_personnel_id, clinic_triage_patient_id } = this.props
    if (!chief_complaint) return this.refs.myAlert.alert('请填写主诉！')
    this.refs.myConfirm.confirm('确定提交病历？', '', 'Success', async () => {
      let res = await createMedicalRecord({ ...this.state, clinic_triage_patient_id, operation_id: triage_personnel_id })
      if (res) this.refs.myAlert.alert(`保存病历失败！【${res}】`)
      else {
        this.refs.myAlert.alert('保存病历成功！')
      }
    })
  }

  saveAsModel() {
    let { chief_complaint } = this.state
    let { createMedicalRecordAsModel, triage_personnel_id, clinic_triage_patient_id } = this.props
    if (!chief_complaint) return this.refs.myAlert.alert('请填写主诉！')
    this.refs.myConfirm.confirm('确定保存病历为模板？', '', 'Success', async () => {
      let res = await createMedicalRecordAsModel({ ...this.state, clinic_triage_patient_id, operation_id: triage_personnel_id })
      if (res) this.refs.myAlert.alert(`保存失败！【${res}】`)
      else {
        this.refs.myAlert.alert('保存成功！')
      }
    })
  }

  showSaveModel() {
    if (!this.state.saveAsModel) return null
    let { chief_complaint, history_of_present_illness, history_of_past_illness, family_medical_history, allergic_history, allergic_reaction, body_examination, immunizations, diagnosis, cure_suggestion, remark } = this.state
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '900px', height: '683px', left: '324px' }}>
          <div className='doctorList_top'>
            <span>新增科室</span>
            <span onClick={() => this.setState({ saveAsModel: false })}>x</span>
          </div>
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
              <li>
                <button>保存</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
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
          <button>选择模板</button>
          <button>复制病历</button>
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
        <Confirm ref='myAlert' isAlert />
        <Confirm ref='myConfirm' />
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
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id,
    medicalRecord: state.medicalRecords.data
  }
}

export default connect(mapStateToProps, { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel })(PrescriptionScreen)
