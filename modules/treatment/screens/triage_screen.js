import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import moment from 'moment'
import { triagePatientsList, triageDoctorsList, triagePatient } from '../../../ducks'
import { getAgeByBirthday } from '../../../utils'
// import { PageCard } from '../../../components'

class TriageScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      alertType: 0,
      alertPageType: 1,
      nowWeekNum: 1
    }
  }

  componentDidMount() {
    this.queryList()
  }

  queryList() {
    const { clinic_id, triagePatientsList } = this.props
    triagePatientsList({ clinic_id, is_today: true, register_type: 2 })
  }

  // 改变显示内容
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  // 完善健康档案
  showCompleteHealthFile() {
    this.setState({ alertType: 1 })
  }
  // 显示体征表单
  showBodySigns() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'recordContent'}>
          <ul>
            <li>
              <label>体重（Kg）</label>
              <input type='text' />
            </li>
            <li>
              <label>身高（cm）</label>
              <input type='text' />
            </li>
            <li>
              <label>BMI</label>
              <input type='text' />
            </li>
            <li style={{ width: '25%' }}>
              <label>血型</label>
              <select style={{ width: '115px' }}>
                <option>未查</option>
                <option>A型</option>
                <option>B型</option>
                <option>O型</option>
                <option>AB型</option>
              </select>
            </li>
            <li style={{ width: '25%' }}>
              <label>RH血型</label>
              <select style={{ width: '115px' }}>
                <option>未查</option>
                <option>RH阴型</option>
                <option>RH阳型</option>
              </select>
            </li>
            <li>
              <label>体温（°C）</label>
              <select style={{ width: '115px' }}>
                <option>口温</option>
                <option>耳温</option>
                <option>额温</option>
                <option>腋温</option>
                <option>肛温</option>
              </select>
              <input type='text' style={{ width: '170px', marginLeft: '10px' }} />
            </li>
            <li>
              <label>呼吸(次/分钟)</label>
              <input type='text' />
            </li>
            <li>
              <label>脉搏(次/分钟)</label>
              <input type='text' />
            </li>
            <li>
              <label>血压(mmHg)</label>
              <input type='text' style={{ width: '140px' }} />
              <input type='text' style={{ width: '140px', marginLeft: '10px' }} />
            </li>
            <li>
              <label>血糖浓度(mmol/I)</label>
              <input type='text' style={{ width: '95px' }} />
              <select style={{ width: '70px', marginLeft: '10px' }}>
                <option>请选择</option>
                <option>睡前</option>
                <option>晚餐后</option>
                <option>晚餐前</option>
                <option>午餐后</option>
                <option>午餐前</option>
                <option>早餐后</option>
                <option>早餐前</option>
                <option>凌晨</option>
                <option>空腹</option>
              </select>
              <input type='text' style={{ width: '110px', marginLeft: '10px' }} />
            </li>
            <li style={{ width: '25%' }}>
              <label>左眼视力</label>
              <input type='text' style={{ width: '130px' }} />
            </li>
            <li style={{ width: '25%' }}>
              <label>右眼视力</label>
              <input type='text' style={{ width: '130px' }} />
            </li>
            <li>
              <label>氧饱和度(%)</label>
              <input type='text' />
            </li>
            <li>
              <label>疼痛评分（1-10分）</label>
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'}>
          <button className='saveBtn' onClick={() => this.submit(this.props)}>
            保存
          </button>
          <button className='commonBtn' onClick={() => this.submit(this.props)}>
            取消
          </button>
        </div>
      </div>
    )
  }
  // 显示诊前病历
  showPreMedicalRecords() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>过敏史</label>
              <label style={{ width: '150px', lineHeight: '30px' }}>
                <input type='radio' name='allergy' style={{ width: 'auto', height: 'auto' }} />是
              </label>
              <label style={{ width: '150px', lineHeight: '30px' }}>
                <input type='radio' name='allergy' style={{ width: 'auto', height: 'auto' }} />否
              </label>
              <input type='text' placeholder={'对什么过敏'} />
            </li>
            <li>
              <label>个人史</label>
              <textarea style={{ height: '63px' }}>asda</textarea>
            </li>
            <li>
              <label>家族史</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>接种疫苗</label>
              <textarea style={{ height: '35px' }}>asda</textarea>
            </li>
            <li>
              <label>月经史</label>
              <input type='text' style={{ width: '170px' }} />
              <input type='text' style={{ width: '170px', marginLeft: '70px' }} />
              <input type='text' style={{ width: '170px', marginLeft: '70px' }} />
              <input type='text' style={{ width: '170px', marginTop: '10px' }} />
              <input type='text' style={{ width: '170px', marginLeft: '70px', marginTop: '10px' }} />
            </li>
            <li>
              <label>生育史</label>
              <input type='text' style={{ width: '661px' }} />
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'}>
          <button className='saveBtn' onClick={() => this.submit(this.props)}>
            保存
          </button>
          <button className='commonBtn' onClick={() => this.submit(this.props)}>
            取消
          </button>
        </div>
      </div>
    )
  }
  // 诊前预诊
  showPreDiagnosisRecords() {
    return (
      <div>
        <div className={'progress'}>
          <div className={'progressContent'}>进度条</div>
        </div>
        <div className={'mRecord'} style={{ height: 'auto' }}>
          <ul>
            <li>
              <label>
                主诉<b style={{ color: 'red' }}>*</b>
              </label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>现病史</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>既往史</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>体格检查</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
            <li>
              <label>备注</label>
              <textarea style={{ height: '70px' }}>asda</textarea>
            </li>
          </ul>
        </div>
        <div className={'bottomBtn'}>
          <button className='saveBtn' onClick={() => this.submit(this.props)}>
            保存
          </button>
          <button className='commonBtn' onClick={() => this.submit(this.props)}>
            取消
          </button>
        </div>
      </div>
    )
  }
  completeHealthFile() {
    return (
      <div className={'healthFile'}>
        <div className={'healthFile_top'}>
          <span>个人健康档案</span>
          <span onClick={() => this.setState({ alertType: 0 })}>×</span>
        </div>
        <div className={'healthFile_menu'}>
          <span className={this.state.alertPageType === 1 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 1 })}>
            体征
          </span>
          <span className={this.state.alertPageType === 2 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 2 })}>
            诊前病历
          </span>
          <span className={this.state.alertPageType === 3 ? 'sel' : ''} onClick={() => this.setState({ alertPageType: 3 })}>
            诊前预诊
          </span>
        </div>
        {this.state.alertPageType === 1 ? this.showBodySigns() : ''}
        {this.state.alertPageType === 2 ? this.showPreMedicalRecords() : ''}
        {this.state.alertPageType === 3 ? this.showPreDiagnosisRecords() : ''}
      </div>
    )
  }
  // 选择医生
  showChooseDoctor(clinic_triage_patient_id) {
    const { triageDoctorsList, clinic_id } = this.props
    triageDoctorsList({ clinic_id })
    this.setState({ alertType: 2, clinic_triage_patient_id })
  }

  getDoctorDatas() {
    let array = []
    const { triageDoctors } = this.props
    for (let key in triageDoctors) {
      array.push(triageDoctors[key])
    }
    return array
  }

  chooseDoctor() {
    let doctors = this.getDoctorDatas()
    const { triagePatient, triage_personnel_id } = this.props
    const { clinic_triage_patient_id } = this.state
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>选择医生</span>
            <div>
              <select placeholder='模板名称/模板类型'>
                <option>请选择科室</option>
                <option>儿科</option>
                <option>全科门诊</option>
                <option>中医科</option>
              </select>
              <input type='text' placeholder={'医生名称'} />
              <button>查询</button>
            </div>
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              {doctors.map((doctor, index) => {
                return (
                  <li
                    key={index}
                    onClick={async () => {
                      let doctor_visit_schedule_id = doctor.doctor_visit_schedule_id
                      let error = await triagePatient({ doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id })
                      if (error) {
                        return alert('分诊失败', error)
                      } else {
                        return alert('分诊成功')
                      }
                    }}
                  >
                    <div>
                      <img src={'/static/login/u49.png'} />
                      <span>医生</span>
                      <span>{doctor.doctor_name}</span>
                    </div>
                    <div>
                      <span>科室名称：{doctor.department_name}</span>
                      <span>今日待接诊：{doctor.wait_total}人</span>
                      <span>今日已接诊：{doctor.triaged_total}人</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'pagination'} />
          <style jsx global>
            {`
							.doctorList_top span:nth-child(1) {
								font-size: 14px;
								font-family: MicrosoftYaHei;
								color: rgba(102, 102, 102, 1);
								line-height: 17px;
								height: 17px;
								text-indent: 0;
								margin: 40px 0 0 60px;
								float: left;
							}
							.doctorList_top select {
								width: 140px;
								height: 30px;
								background: rgba(245, 248, 249, 1) !important;
								border-radius: 4px;
								float: left;
								margin: 34px 0 0 30px;
								border: 1px solid #d9d9d9;
								text-indent: 10px;
							}
							.doctorList_top input {
								width: 152px;
								height: 28px;
								background: rgba(255, 255, 255, 1);
								border-radius: 4px;
								float: left;
								margin: 34px 0 0 15px;
								border: 1px solid #d9d9d9;
								padding: 0;
								text-indent: 10px;
							}
							.doctorList_top button {
								width: 60px;
								height: 28px;
								border-radius: 4px;
								border: 1px solid #2acdc8;
								float: left;
								margin: 36px 0 0 30px;
								color: rgba(42, 205, 200, 1);
								cursor: pointer;
								background: transparent;
							}
							.doctorList_top span:last-child {
								width: 40px;
								height: 40px;
								background: rgba(255, 95, 87, 1);
								float: right;
								color: #ffffff;
								font-size: 20px;
								text-align: center;
								text-indent: 10px;
								line-height: 35px;
								border-bottom-left-radius: 100%;
								cursor: pointer;
							}
							.doctorList_content ul {
								margin: 0 20px;
								display: block;
								width: auto;
								height: 400px;
								// background: #909090;
							}
							.doctorList_content ul li {
								width: 250px;
								height: 150px;
								background: rgba(255, 255, 255, 1);
								box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
								float: left;
								margin-left: 40px;
                margin-top: 26px;
                display: flex;
							}
							.doctorList_content ul li img {
								width: 40px;
								height: 40px;
								margin: 5px auto;
								display: table;
							}
							.doctorList_content ul li > div:nth-child(1) {
								float: left;
								width: 100px;
                margin: 25px 0;
                flex:2;
							}
							.doctorList_content ul li > div:nth-child(1) > span {
								width: 100%;
								text-align: center;
								height: 20px;
								display: block;
								line-height: 25px;
							}
							.doctorList_content ul li > div:nth-child(2) {
								float: left;
								width: 100px;
                margin: 25px 0;
                flex:3;
							}
							.doctorList_content ul li > div:nth-child(2) > span {
								float: left;
								width: 100%;
								font-size: 12px;
								height: 33px;
								line-height: 33px;
							}
						`}
          </style>
        </div>
      </div>
    )
  }
  // 换诊
  changeDoctor() {}

  getUnTriagePatientListData() {
    const { triagePatients } = this.props
    let array = []
    let today = moment().format('YYYY-MM-DD')
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      if (moment(patient.visit_date).format('YYYY-MM-DD') !== today) continue
      if (patient.treat_status) continue
      array.push(patient)
    }
    return array.sort((a, b) => {
      if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return -1
      return 1
    })
  }

  // 显示分诊列表
  showTriageList() {
    const array = this.getUnTriagePatientListData(false)
    return (
      <div>
        {/* <div className={'mask'}></div> */}
        {/* <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
        </div> */}
        <div className={'listContent'}>
          <ul>
            {array.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男'}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>{patient.treat_status === true ? '已分诊' : '待分诊'}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.doctor_name}</a>
                    </span>
                    <span>
                      <a>登记人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>登记时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span style={{ color: 'rgba(153,153,153,1)' }}>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.showCompleteHealthFile()}>完善健康档案</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>选择医生</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <style jsx>{`
          .listContent {
            float: left;
            width: 100%;
            // background: #909090;
          }
          .listContent ul {
            float: left;
            margin: 10px 66px;
          }
          .listContent ul li {
            width: 360px;
            height: 270px;
            background: rgba(255, 255, 255, 1);
            border-radius: 7px;
            margin: 10px 10px 0 0;
            float: left;
          }
          .itemTop {
            width: 332px;
            border-bottom: 2px solid #f4f7f8;
            // background: #e0e0e0;
            margin: 20px auto 0 auto;
            padding: 0 0 10px 0;
            height: 20px;
          }
          .itemTop span {
            float: left;
          }
          .itemTop span:nth-child(1) {
            width: auto;
            height: 19px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 51, 51, 1);
            margin-left: 3px;
          }
          .itemTop span:nth-child(2) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(3) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(4) {
            width: 60px;
            height: 20px;
            border-radius: 10px;
            float: right;
            text-align: center;
          }
          .itemCenter {
            width: 332px;
            // background: #e0e0e0;
            margin: 0 auto 0 auto;
            height: 168px;
          }
          .itemCenter span {
            float: left;
            width: 100%;
            height: 26px;
            line-height: 26px;
          }
          .itemCenter span a:nth-child(1) {
            float: left;
            width: 75px;
            color: #666666;
            font-size: 14px;
          }
          .itemCenter span a:nth-child(2) {
            float: left;
            margin-left: 20px;
            color: #333333;
            font-size: 14px;
          }
          .itemBottom {
            width: 100%;
            // background: #e0e0e0;
            margin: 0 auto 0 auto;
            border-top: 1px solid #42b7ba;
          }
          .itemBottom span {
            float: left;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(49, 176, 179, 1);
            width: 49.5%;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          }
          .itemBottom span:nth-child(1) {
            border-right: 1px solid #42b7ba;
          }
          .itemBottom span:nth-child(2) {
          }
        `}</style>
      </div>
    )
  }

  getTriagedPatientListData() {
    const { triagePatients } = this.props
    let array = []
    let today = moment().format('YYYY-MM-DD')
    for (let key in triagePatients) {
      const patient = triagePatients[key]
      if (moment(patient.visit_date).format('YYYY-MM-DD') !== today) continue
      array.push(patient)
    }
    return array.sort((a, b) => {
      if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return -1
      return 1
    })
  }
  // 显示分诊记录
  showTriageRecord() {
    const array = this.getTriagedPatientListData()
    return (
      <div>
        <div className={'listContent'}>
          <ul>
            {array.map((patient, index) => {
              let updateTime = patient.complete_time || patient.reception_time || patient.register_time
              let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{patient.patient_name}</span>
                    <span>{patient.sex === 0 ? '女' : '男 '}</span>
                    <span>{getAgeByBirthday(patient.birthday)}岁</span>
                    <span style={{ color: statusColor, border: '1px solid ' + statusColor }}>
                      {!patient.treat_status ? '待分诊' : !patient.reception_time ? '待接诊' : !patient.complete_time ? '已接诊' : '已完成'}
                    </span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>门诊ID：</a>
                      <a>{patient.cert_no}</a>
                    </span>
                    <span>
                      <a>接诊科室：</a>
                      <a>{patient.department_name}</a>
                    </span>
                    <span>
                      <a>接诊医生：</a>
                      <a>{patient.doctor_name}</a>
                    </span>
                    <span>
                      <a>登记人员：</a>
                      <a>{patient.register_personnel_name}</a>
                    </span>
                    <span>
                      <a>登记时间：</a>
                      <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span style={{ color: 'rgba(153,153,153,1)' }}>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
                      <a style={{ color: 'rgba(153,153,153,1)' }}>{moment(updateTime).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.showCompleteHealthFile()}>完善健康档案</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>选择医生</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'pagination'} />
        <style jsx>{`
          .listContent {
            float: left;
            width: 100%;
            // background: #909090;
          }
          .listContent ul {
            float: left;
            margin: 10px 66px;
          }
          .listContent ul li {
            width: 360px;
            height: 270px;
            background: rgba(255, 255, 255, 1);
            border-radius: 7px;
            margin: 10px 10px 0 0;
            float: left;
          }
          .itemTop {
            width: 332px;
            border-bottom: 2px solid #f4f7f8;
            // background: #e0e0e0;
            margin: 20px auto 0 auto;
            padding: 0 0 10px 0;
            height: 20px;
          }
          .itemTop span {
            float: left;
          }
          .itemTop span:nth-child(1) {
            width: auto;
            height: 19px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 51, 51, 1);
            margin-left: 3px;
          }
          .itemTop span:nth-child(2) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(3) {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 2px 0 0 12px;
          }
          .itemTop span:nth-child(4) {
            width: 60px;
            height: 20px;
            border-radius: 10px;
            float: right;
            text-align: center;
          }
          .itemCenter {
            width: 332px;
            // background: #e0e0e0;
            margin: 0 auto 0 auto;
            height: 168px;
          }
          .itemCenter span {
            float: left;
            width: 100%;
            height: 26px;
            line-height: 26px;
          }
          .itemCenter span a:nth-child(1) {
            float: left;
            width: 75px;
            color: #666666;
            font-size: 14px;
          }
          .itemCenter span a:nth-child(2) {
            float: left;
            margin-left: 20px;
            color: #333333;
            font-size: 14px;
          }
          .itemBottom {
            width: 100%;
            // background: #e0e0e0;
            margin: 0 auto 0 auto;
            border-top: 1px solid #42b7ba;
          }
          .itemBottom span {
            float: left;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(49, 176, 179, 1);
            width: 49.5%;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          }
          .itemBottom span:nth-child(1) {
            border-right: 1px solid #42b7ba;
          }
          .itemBottom span:nth-child(2) {
          }
        `}</style>
      </div>
    )
  }

  // 切换显示列表
  changeShowType({ type }) {
    this.setState({ showType: type })
  }
  // 显示日历列表
  showCalendarList() {
    // const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let nowWeekNum = this.state.nowWeekNum

    return (
      <div className={'regisList'}>
        <div className={'calenderFilter'}>
          <button className={'calenderFilterBtn'} onClick={() => this.setState({ nowWeekNum: nowWeekNum - 7 })}>
            上周
          </button>
          <button className={'calenderFilterBtn'} onClick={() => this.setState({ nowWeekNum: nowWeekNum + 7 })}>
            下周
          </button>
          <button className={'calenderFilterBtn'} onClick={() => this.setState({ nowWeekNum: 1 })}>
            本周
          </button>
        </div>
        <div className={'calenderBox'}>
          <h4>
            {moment()
              .day(nowWeekNum)
              .format('YYYY年MM月DD日')}至{moment()
              .day(nowWeekNum + 6)
              .format('MM月DD日')}
          </h4>
          <div className={'calendarContent'}>
            <table>
              <thead>
                <tr>
                  <td />
                  <td>
                    周一（{moment()
                      .day(nowWeekNum)
                      .format('MM-DD')}）
                  </td>
                  <td>
                    周二（{moment()
                      .day(nowWeekNum + 1)
                      .format('MM-DD')}）
                  </td>
                  <td>
                    周三（{moment()
                      .day(nowWeekNum + 2)
                      .format('MM-DD')}）
                  </td>
                  <td>
                    周四（{moment()
                      .day(nowWeekNum + 3)
                      .format('MM-DD')}）
                  </td>
                  <td>
                    周五（{moment()
                      .day(nowWeekNum + 4)
                      .format('MM-DD')}）
                  </td>
                  <td>
                    周六（{moment()
                      .day(nowWeekNum + 5)
                      .format('MM-DD')}）
                  </td>
                  <td>
                    周日（{moment()
                      .day(nowWeekNum + 6)
                      .format('MM-DD')}）
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: '58px' }}>
                  <td>预约</td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                  <td>
                    上午5人<br />下午5人
                  </td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
                <tr>
                  <td>07:00-08:00</td>
                  <td>sdas</td>
                  <td>sadas</td>
                  <td>sada</td>
                  <td>dsds</td>
                  <td>sds</td>
                  <td>dsds</td>
                  <td>dsd</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  // 显示就诊人列表
  showPatientList() {
    return (
      <div className={'regisList'}>
        <ul>
          <li>
            <div className={'liTop'}>
              <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
              <span className={'status'}>已预约</span>
            </div>
            <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
            <div>门诊ID：000989123654</div>
            <div>接诊科室：</div>
            <div>接诊医生：</div>
            <div>预约时间：20180410 10:23:23</div>
            <div>备注：</div>
            <div className={'seeDetail'} onClick={() => this.seeDetail()}>
              <a onClick={() => this.editPatient()}>修改</a>
              <a onClick={() => this.cancelReservation()}>取消</a>
            </div>
          </li>
          <li>
            <div className={'liTop'}>
              <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
              <span className={'status'}>已就诊</span>
            </div>
            <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
            <div>门诊ID：000989123654</div>
            <div>接诊科室：</div>
            <div>接诊医生：</div>
            <div>预约时间：20180410 10:23:23</div>
            <div>备注：</div>
            <div className={'seeDetail'}>
              <a onClick={() => this.gotoWechat()}>微信交流</a>
              <a onClick={() => this.scanPatient()}>查看</a>
            </div>
          </li>
          <li>
            <div className={'liTop'}>
              <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
              <span className={'status'}>已就诊</span>
            </div>
            <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
            <div>门诊ID：000989123654</div>
            <div>接诊科室：</div>
            <div>接诊医生：</div>
            <div>预约时间：20180410 10:23:23</div>
            <div>备注：</div>
            <div className={'seeDetail'}>
              <a onClick={() => this.gotoWechat()}>微信交流</a>
              <a onClick={() => this.scanPatient()}>查看</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  // 新增预约
  addNewReservation() {
    Router.push('/treatment/reservation_add')
  }
  // 预约管理
  showReservation() {
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <button className={'bigBtn'} onClick={() => this.addNewReservation()}>
            新增预约
          </button>
          <div className={'radioDiv'}>
            <label>
              <input type='radio' checked={this.state.showType === 1 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 1 })} />
              日历列表
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input type='radio' checked={this.state.showType === 2 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 2 })} />
              就诊人列表
            </label>
          </div>
          <input className={'searchbox'} style={{ marginLeft: '25px' }} type='text' placeholder='搜索科室' />
          <input className={'searchbox'} style={{ marginLeft: '15px' }} type='text' placeholder='搜索医生' />
          <input type='text' style={{ marginLeft: '15px' }} placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <input className={'datebox'} style={{ marginLeft: '15px' }} type='text' placeholder='预约日期' />
          <button className={'searchBtn'}>查询</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
        {this.state.showType === 1 ? this.showCalendarList() : ''}
        {this.state.showType === 2 ? this.showPatientList() : ''}
        <div className={'pagination'} />
      </div>
    )
  }
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            分诊
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            分诊记录
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
            预约管理
          </span>
        </div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索科室' />
            <button>查询</button>
          </div>
          <div className={'boxRight'}>
            <button>新增预约</button>
          </div>
        </div>
        {this.state.pageType === 1 ? this.showTriageList() : ''}
        {this.state.pageType === 2 ? this.showTriageRecord() : ''}
        {this.state.pageType === 3 ? this.showReservation() : ''}
        {this.state.alertType === 1 ? this.completeHealthFile() : ''}
        {this.state.alertType === 2 ? this.chooseDoctor() : ''}
        <style jsx>{`
          .childTopBar {
            float: left;
            width: 100%;
            // background:#909090;
          }
          .childTopBar span {
            margin-top: 31px;
            width: 126px;
            height: 37px;
            background: rgba(255, 255, 255, 1);
            float: left;
            text-align: center;
            line-height: 37px;
            cursor: pointer;
            margin-bottom: 10px;
          }
          .childTopBar span:nth-child(1) {
            margin-left: 66px;
          }
          .childTopBar span:hover,
          .childTopBar span.sel {
            background: rgba(42, 205, 200, 1);
            border-radius: 4px 0px 0px 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei-Bold;
            color: rgba(255, 255, 255, 1);
          }
          .childTopBar span:nth-child(2):hover,
          .childTopBar span.sel {
            border-radius: 0;
          }
          .childTopBar span:nth-child(3):hover,
          .childTopBar span.sel {
            border-radius: 4px 4px 0px 0px;
          }
          .filterBox {
            float: left;
            width: 1098px;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 66px;
          }
          .filterBox .boxLeft {
            float: left;
          }
          .filterBox .boxLeft input {
            float: left;
            width: 328px;
            height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
        `}</style>
        {/* <PageCard limit={10} offset={20} total={100} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  }
}

export default connect(mapStateToProps, { triagePatientsList, triageDoctorsList, triagePatient })(TriageScreen)
