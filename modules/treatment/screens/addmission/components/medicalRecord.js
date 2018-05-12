import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm, PageCard } from '../../../../../components'
import moment from 'moment'
import { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel, queryMedicalModels } from '../../../../../ducks'
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
      showModicalModels: false,
      name: '',
      is_common: true,
      model_keyword: ''
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

  showMedicalModels() {
    const { medicalModels, medicalModelPage } = this.props
    if (!this.state.showModicalModels) return null
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
            <span onClick={() => this.setState({ showModicalModels: false })}>x</span>
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
                    <li style={{ cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }} onClick={() => this.setState({ ...this.state, ...item, showModicalModels: false })}>
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

          .meical_nodel_item ul li {
            margin:0;
            border-right: 1px solid #d8d8d8;
            float: left;
            flex:3
            height: 20px;
            text-align: center;
          }

          .meical_nodel_item ul {
            display: flex;
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

  async setMedicalModesl() {
    const { queryMedicalModels } = this.props
    await queryMedicalModels({})
    this.setState({ showModicalModels: true })
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
        {this.showMedicalModels()}
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
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id,
    medicalRecord: state.medicalRecords.data,
    medicalModels: state.medicalRecords.models.data,
    medicalModelPage: state.medicalRecords.models.page_info
  }
}

export default connect(mapStateToProps, { createMedicalRecord, queryMedicalRecord, createMedicalRecordAsModel, queryMedicalModels })(PrescriptionScreen)
