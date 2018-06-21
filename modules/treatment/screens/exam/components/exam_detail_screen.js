import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm } from '../../../../../components'
import { queryMedicalRecord, ExaminationTriageList, ExaminationTriageRecordCreate } from '../../../../../ducks'
import { getAgeByBirthday } from '../../../../../utils'
import moment from 'moment'

// 检查
class ExamDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      exams: [],
      selIndex: 0
    }
  }

  async componentDidMount() {
    const { queryMedicalRecord, triagePatient, ExaminationTriageList } = this.props
    const { clinic_triage_patient_id } = triagePatient
    let record = await queryMedicalRecord(clinic_triage_patient_id)
    let exams = await ExaminationTriageList({ clinic_triage_patient_id, order_status: '20' })
    this.setState({ record, exams })
  }

  render() {
    return (
      <div className={'detail'}>
        <div className={'detail_title'}>
          <span>检查</span>
          <span onClick={() => this.props.back2List()}>{'<返回'}</span>
        </div>
        {this.renderDoctorInfo()}
        {this.renderPatientInfo()}
        {this.renderRecordInfo()}
        {this.renderItemTitle()}
        {this.renderContent()}
        {this.getStyle()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  renderDoctorInfo() {
    const { triagePatient } = this.props
    console.log('triagePatient ===', triagePatient)
    return (
      <div className={'filterBox'}>
        <div>
          <div>开单医生：{triagePatient.doctor_name}</div>
        </div>
        <div>
          <div>开单科室：{triagePatient.department_name}</div>
        </div>
        <div>
          <div>开单时间：{moment(triagePatient.register_time).format('YYYY-MM-DD HH:mm')}</div>
        </div>
      </div>
    )
  }
  renderPatientInfo() {
    const { triagePatient } = this.props
    return (
      <div className={'filterBox'}>
        <div>
          <div>就诊人姓名：{triagePatient.patient_name}</div>
        </div>
        <div>
          <div>性别：{triagePatient.sex * 1 === 0 ? '女' : '男'}</div>
        </div>
        <div>
          <div>年龄：{getAgeByBirthday(triagePatient.birthday)}</div>
        </div>
        {/* <div>
          <div>就诊ID：123125366</div>
        </div> */}
        <div>
          <div>手机号码：{triagePatient.phone}</div>
        </div>
      </div>
    )
  }
  renderRecordInfo() {
    const { record } = this.state
    return (
      <div className={'filterBox'}>
        <div className={'longTxt'}>
          <label>诊断：</label>
          <div>{record.diagnosis}</div>
        </div>
        <div className={'longTxt'}>
          <label>过敏史：</label>
          <div>{record.allergic_history}</div>
        </div>
      </div>
    )
  }
  renderItemTitle() {
    // const array = [{name: '项目1'}, {name: '项目1'}, {name: '项目1'}]
    const { exams, selIndex } = this.state
    console.log(exams)
    return (
      <div className={'detailCenter'}>
        <div className={'childTopBar'}>
          {exams.map((item, index) => {
            return (
              <span key={index} className={index === selIndex ? 'sel' : ''} onClick={() => this.setState({ selIndex: index })}>
                {item.clinic_examination_name}
              </span>
            )
          })}
        </div>
        <div className={'chooseModel'}>
          <div>
            <Select placeholder={'选择模板'} height={32} options={[]} />
          </div>
        </div>
        <div className={'rightBtn'}>
          <button>查看病历</button>
          <button>检查记录</button>
        </div>
      </div>
    )
  }

  async save() {
    const { ExaminationTriageRecordCreate, triagePatient, operation_id } = this.props
    const { exams, selIndex } = this.state
    const { clinic_triage_patient_id } = triagePatient
    let exam = exams[selIndex]
    const { examination_patient_id, picture_examination, result_examination, conclusion_examination } = exam
    let error = await ExaminationTriageRecordCreate({ clinic_triage_patient_id, examination_patient_id, operation_id, picture_examination, result_examination, conclusion_examination })
    console.log('error ===', error)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error, null, 'Danger')
    } else {
      this.refs.myAlert.alert('保存成功')
    }
  }

  renderContent() {
    const { selIndex, exams } = this.state
    const data = exams[selIndex]
    if (!data) return null
    return (
      <div className={'detailContent formList'}>
        <ul>
          <li>
            <label>检查图片</label>
            <div style={{ height: '100px' }}>文件、照片上传</div>
          </li>
          <li>
            <label>描述</label>
            <textarea
              value={data.conclusion_examination || ''}
              onChange={e => {
                exams[selIndex].conclusion_examination = e.target.value
                this.setState({ exams })
              }}
            />
          </li>
          <li>
            <label>结论</label>
            <textarea
              value={data.result_examination || ''}
              onChange={e => {
                exams[selIndex].result_examination = e.target.value
                this.setState({ exams })
              }}
            />
          </li>
        </ul>
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.save()}>保存</button>
            <button>取消</button>
          </div>
        </div>
      </div>
    )
  }

  getStyle() {
    return (
      <style jsx='true'>
        {`
          .detail {
            // width: 100%;
            // background: #909090;
            display: flex;
            flex-direction: column;
            margin: 20px 66px;
          }
          .detail_title {
            display: flex;
          }
          .detail_title span {
            font-size: 20px;
            cursor: default;
          }
          .detail_title span:first-child {
            flex: 1;
          }
          .detail_title span:last-child {
          }
          .filterBox {
            margin: 10px 0 0 0;
            width: 100%;
            align-items: center;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            max-height: 100px;
            overflow: hidden;
            padding: 10px 0;
            min-height: 30px;
          }
          .filterBox > div {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .filterBox > div.longTxt {
            padding: 10px;
          }
          .filterBox > div.longTxt label {
            white-space: nowrap;
            font-weight: 700;
          }
          .filterBox > div.longTxt div {
            text-align: left;
            font-size: 14px;
            max-height: 100px;
            overflow: auto;
            flex: 1;
          }
          .childTopBar span {
            margin: 10px 0 0 0;
            // flex:1;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 0;
          }
          .detailCenter {
            display: flex;
          }
          .childTopBar {
            flex: 8;
            display: flex;
          }
          .chooseModel {
            // flex:2;
            width: 200px;
            display: flex;
            align-items: center;
            margin-left: 10px;
          }
          .chooseModel > div {
            width: 100%;
          }
          .rightBtn {
            display: flex;
            align-items: center;
          }
          button {
            background: transparent;
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
          button:hover {
            background: rgba(42, 205, 200, 1);
            color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(42, 205, 200, 1);
          }
          .detailContent {
            width: 100%;
            margin: 0;
            border-radius: 0;
            padding: 10px 0 40px 0;
          }
          .detailContent ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            // padding: 10px;
          }
          .detailContent ul li {
            // width: 100%;
            display: flex;
            flex-direction: column;
            margin: 10px 20px;
            width: 90%;
          }
          .detailContent ul li textarea {
            resize: none;
            width: 100%;
            height: 100px;
          }
        `}
      </style>
    )
  }
}

const mapStateToProps = state => {
  console.log('state =======', state)
  return {
    operation_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(
  mapStateToProps,
  {
    queryMedicalRecord,
    ExaminationTriageList,
    ExaminationTriageRecordCreate
  }
)(ExamDetailScreen)
