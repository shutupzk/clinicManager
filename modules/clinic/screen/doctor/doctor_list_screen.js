import React, { Component } from 'react'
// import Router from 'next/router'
import { connect } from 'react-redux'
import { doctorList, doctorCreate, departmentList } from '../../../../ducks'
// import moment from 'moment'

class DoctorListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnel_type: 2,
      doctorKeyword: '',
      employeeKeyword: '',
      showAddPersonnel: false,
      doctorInfo: {}
    }
  }

  componentWillMount() {
    const { departmentList, clinic_id } = this.props
    departmentList({ clinic_id })
    this.queryList('', 2)
  }

  queryList(keyword = '', personnel_type) {
		// alert(personnel_type)
    const { doctorList, clinic_id } = this.props
    doctorList({ clinic_id, personnel_type, keyword })
  }

  getListData(personnel_type) {
    const { doctors } = this.props
    console.log('doctors ======', doctors)
    const { doctorKeyword, employeeKeyword } = this.state
    const keyword = personnel_type === 2 ? doctorKeyword : employeeKeyword
    let array = []
    for (let key in doctors) {
      if (doctors[key].personnel_type !== personnel_type) continue
      if (keyword) {
        let pattern = new RegExp(keyword)
        const { code, name } = doctors[key]
        if (!pattern.test(code) && !pattern.test(name)) continue
      }
      array.push(doctors[key])
    }
    return array
  }

  getDepartmentList() {
    const { departments } = this.props
    let array = []
    for (let key in departments) {
      array.push(departments[key])
    }
    return array
  }

  changeContent({ personnel_type }) {
    this.setState({ personnel_type })
  }

  renderPersonnelList() {
    const { personnel_type } = this.state
    if (personnel_type !== 2) return null
    let doctors = this.getListData(personnel_type)
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索医生名称/医生编号' />
            <button>查询</button>
          </div>
          <div className={'boxRight'}>
            <button
              onClick={() => {
                this.setState({ showAddPersonnel: true })
              }}
						>
							新增医生
						</button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {doctors.map((doctor, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{doctor.name}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                    <a>医生编号：</a>
                    <a>{doctor.code}</a>
                  </span>
                    <span>
                    <a>所属科室：</a>
                    <a>{doctor.department_name}</a>
                  </span>
                    <span>
                    <a>所属诊所：</a>
                    <a>{doctor.clinic_name}</a>
                  </span>
                    <span>
                    <a>可否挂号：</a>
                    <a>{doctor.is_appointment === true ? '可以' : '不可以'}</a>
                  </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.showCompleteHealthFile()}>查看</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>编辑</span>
                    <span onClick={() => this.showCompleteHealthFile()}>删除</span>
                  </div>
                </li>
              )
            })}
          </ul>
          {/* <PageCard numberValue={1} data={[{}, {}]} page={1} /> */}
        </div>
        <style jsx>{`
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
					.contentMenu {
						width: 100%;
						// background: #909090;
						float: left;
					}
					.contentMenu span:nth-child(1) {
						margin: 24px 0 0 32px;
					}
					.contentMenu span {
						width: 88px;
						height: 32px;
						background: rgba(255, 255, 255, 1);
						border-radius: 4px;
						float: left;
						text-align: center;
						line-height: 32px;
						color: #000000;
						cursor: pointer;
						margin-top: 24px;
						margin-left: 10px;
					}
					.contentMenu span.sel {
						width: 100px;
						height: 32px;
						background: rgba(42, 205, 200, 1);
						border-radius: 4px;
						color: #ffffff;
					}
					.newList_top {
						// background: #909090;
						height: 34px;
						max-width: 1146px;
						width: 100%;
						float: left;
						margin: 30px 0 28px 40px;
					}
					.newList_top .top_left {
						float: left;
					}
					.newList_top .top_left input {
						width: 300px;
						height: 32px;
						background: rgba(255, 255, 255, 1);
						border-radius: 4px;
						padding: 0;
						border: 1px solid #dcdcdc;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						text-indent: 10px;
						float: left;
					}
					.newList_top .top_left button {
						width: 60px;
						height: 32px;
						background: rgba(42, 205, 200, 1);
						border-radius: 4px;
						border: none;
						cursor: pointer;
						margin-left: 10px;
						float: left;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						color: rgba(255, 255, 255, 1);
					}
					.newList_top .top_right {
						float: right;
					}
					.newList_top .top_right button {
						float: left;
						width: 110px;
						height: 34px;
						background: rgba(238, 201, 6, 1);
						border: none;
						border-radius: 17px;
						cursor: pointer;
						font-size: 14px;
						font-family: MicrosoftYaHei;
						color: rgba(255, 255, 255, 1);
						margin-right: 20px;
					}
					.listContent {
						float: left;
						// width: 100%;
						width: 1120px;
						// background: #909090;
						margin-left: 66px;
					}
					.listContent ul {
						float: left;
						margin: 10px 0;
					}
					.listContent ul li {
						width: 360px;
						height: 270px;
						background: rgba(255, 255, 255, 1);
						border-radius: 7px;
						margin: 10px 10px 0 0;
						float: left;
						display: flex;
						flex-direction: column;
					}
					.itemTop {
						border-bottom: 2px solid #f4f7f8;
						margin: 10px 14px 0 14px;
						height: 37px;
						display: flex;
						flex-direction: row;
						align-items: center;
					}
					.itemTop span:nth-child(1) {
						width: auto;
						height: 19px;
						font-size: 16px;
						font-family: MicrosoftYaHei;
						color: rgba(51, 51, 51, 1);
						margin-left: 12px;
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
						flex: 1;
						display: flex;
						flex-direction: column;
						width: 332px;
						margin: 10px auto 0 auto;
						justify-content: center;
					}
					.itemCenter span {
						display: flex;
						flex-direction: row;
						height: 35px;
						line-height: 26px;
						margin: 0px 0px 0 12px;
					}
					.itemCenter span a:nth-child(1) {
						width: 75px;
						color: #666666;
						font-size: 14px;
					}
					.itemCenter span a:nth-child(2) {
						color: #333333;
						font-size: 14px;
					}
					.itemBottom {
						width: 100%;
						height: 39px;
						border-top: 2px solid #42b7ba;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
					}
					.itemBottom span {
						flex: 1;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						color: rgba(49, 176, 179, 1);
						height: 39px;
						line-height: 39px;
						text-align: center;
					}
					.itemBottom span:nth-child(1) {
						border-right: 2px solid #31b0b3;
					}
					.itemBottom span:nth-child(2) {
						border-right: 2px solid #31b0b3;
					}
				`}</style>
      </div>
    )
  }
  renderEmployeeList() {
    const { personnel_type } = this.state
    if (personnel_type !== 1) return null
    console.log('personnel_type', personnel_type)
    let doctors = this.getListData(personnel_type)
    return (
      <div>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input type='text' placeholder='搜索职员名称/职员编号' />
            <button>查询</button>
          </div>
          <div className={'boxRight'}>
            <button
              onClick={() => {
                this.setState({ showAddPersonnel: true })
              }}
						>
							新增职员
						</button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {doctors.map((doctor, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{doctor.name}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                    <a>职员编号：</a>
                    <a>{doctor.code}</a>
                  </span>
                    <span>
                    <a>所属科室：</a>
                    <a>{doctor.department_name}</a>
                  </span>
                    <span>
                    <a>所属诊所：</a>
                    <a>{doctor.clinic_name}</a>
                  </span>
                  </div>
                  <div className={'itemBottom'}>
                    <span onClick={() => this.showCompleteHealthFile()}>查看</span>
                    <span onClick={() => this.showChooseDoctor(patient.clinic_triage_patient_id)}>编辑</span>
                    <span onClick={() => this.showCompleteHealthFile()}>删除</span>
                  </div>
                </li>
              )
            })}
          </ul>
          {/* <PageCard numberValue={1} data={[{}, {}]} page={1} /> */}
        </div>
        <style jsx>{`
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
					.contentMenu {
						width: 100%;
						// background: #909090;
						float: left;
					}
					.contentMenu span:nth-child(1) {
						margin: 24px 0 0 32px;
					}
					.contentMenu span {
						width: 88px;
						height: 32px;
						background: rgba(255, 255, 255, 1);
						border-radius: 4px;
						float: left;
						text-align: center;
						line-height: 32px;
						color: #000000;
						cursor: pointer;
						margin-top: 24px;
						margin-left: 10px;
					}
					.contentMenu span.sel {
						width: 100px;
						height: 32px;
						background: rgba(42, 205, 200, 1);
						border-radius: 4px;
						color: #ffffff;
					}
					.newList_top {
						// background: #909090;
						height: 34px;
						max-width: 1146px;
						width: 100%;
						float: left;
						margin: 30px 0 28px 40px;
					}
					.newList_top .top_left {
						float: left;
					}
					.newList_top .top_left input {
						width: 300px;
						height: 32px;
						background: rgba(255, 255, 255, 1);
						border-radius: 4px;
						padding: 0;
						border: 1px solid #dcdcdc;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						text-indent: 10px;
						float: left;
					}
					.newList_top .top_left button {
						width: 60px;
						height: 32px;
						background: rgba(42, 205, 200, 1);
						border-radius: 4px;
						border: none;
						cursor: pointer;
						margin-left: 10px;
						float: left;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						color: rgba(255, 255, 255, 1);
					}
					.newList_top .top_right {
						float: right;
					}
					.newList_top .top_right button {
						float: left;
						width: 110px;
						height: 34px;
						background: rgba(238, 201, 6, 1);
						border: none;
						border-radius: 17px;
						cursor: pointer;
						font-size: 14px;
						font-family: MicrosoftYaHei;
						color: rgba(255, 255, 255, 1);
						margin-right: 20px;
					}
					.listContent {
						float: left;
						// width: 100%;
						width: 1120px;
						// background: #909090;
						margin-left: 66px;
					}
					.listContent ul {
						float: left;
						margin: 10px 0;
					}
					.listContent ul li {
						width: 360px;
						height: 270px;
						background: rgba(255, 255, 255, 1);
						border-radius: 7px;
						margin: 10px 10px 0 0;
						float: left;
						display: flex;
						flex-direction: column;
					}
					.itemTop {
						border-bottom: 2px solid #f4f7f8;
						margin: 10px 14px 0 14px;
						height: 37px;
						display: flex;
						flex-direction: row;
						align-items: center;
					}
					.itemTop span:nth-child(1) {
						width: auto;
						height: 19px;
						font-size: 16px;
						font-family: MicrosoftYaHei;
						color: rgba(51, 51, 51, 1);
						margin-left: 12px;
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
						flex: 1;
						display: flex;
						flex-direction: column;
						width: 332px;
						margin: 10px auto 0 auto;
						justify-content: center;
					}
					.itemCenter span {
						display: flex;
						flex-direction: row;
						height: 35px;
						line-height: 26px;
						margin: 0px 0px 0 12px;
					}
					.itemCenter span a:nth-child(1) {
						width: 75px;
						color: #666666;
						font-size: 14px;
					}
					.itemCenter span a:nth-child(2) {
						color: #333333;
						font-size: 14px;
					}
					.itemBottom {
						width: 100%;
						height: 39px;
						border-top: 2px solid #42b7ba;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
					}
					.itemBottom span {
						flex: 1;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						color: rgba(49, 176, 179, 1);
						height: 39px;
						line-height: 39px;
						text-align: center;
					}
					.itemBottom span:nth-child(1) {
						border-right: 2px solid #31b0b3;
					}
					.itemBottom span:nth-child(2) {
						border-right: 2px solid #31b0b3;
					}
				`}</style>
      </div>
    )
  }
	// 保存添加
  async saveAdd() {
    const { doctorCreate, clinic_id } = this.props
    const { doctorInfo, personnel_type } = this.state
    let error = await doctorCreate({ ...doctorInfo, clinic_id, personnel_type })
    if (error) {
      return alert('添加失败', error)
    }
    this.queryList('', personnel_type)
    alert('添加成功')
    this.setState({ showAddPersonnel: false })
  }

  setDoctorInfo(e, key) {
    let newDoctor = this.state.doctorInfo
    newDoctor[key] = e.target.value
    this.setState({ doctorInfo: newDoctor })
  }

  showAddPersonnelDiv() {
    const { showAddPersonnel, personnel_type } = this.state
    if (!showAddPersonnel) return null
    const departments = this.getDepartmentList()
    let keyName = personnel_type === 2 ? '医生' : '职员'
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '700px', height: '800px', left: '450px', top: '50px' }}>
          <div className={'doctorList_top'}>
            <span>新增{keyName}</span>
            <div />
            <span onClick={() => this.setState({ showAddPersonnel: false })}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              <li>
                <label>{keyName}编码：</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'code')} />
              </li>
              <li>
                <label>{keyName}名称</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'name')} />
              </li>
              <li>
                <label>所属诊所</label>
                <label>{this.props.clinic_name}</label>
              </li>
              <li>
                <label>科室名称</label>
                <select onChange={e => this.setDoctorInfo(e, 'department_id')}>
                  <option>请选择</option>
                  {departments.map(({ id, name }, index) => {
                    return (
                    <option key={index} value={id}>
                    {name}
                  </option>
                  )
                  })}
                </select>
              </li>
              <li>
                <label>{keyName}权重</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'weight')} />
              </li>
              <li>
                <label>{keyName}职称</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'title')} />
              </li>
              <li>
                <label>登录账号</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'username')} />
              </li>
              <li>
                <label>设置密码</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'password')} />
              </li>
              <li>
                <label>确认密码</label>
                <input defaultValue='' onChange={e => this.setDoctorInfo(e, 'passwordConfirm')} />
              </li>
            </ul>
            <div className={'buttonBtn'}>
              <button onClick={() => this.setState({ showAddPersonnel: false })}>取消</button>
              <button
                onClick={() => {
                  this.saveAdd()
                }}
							>
								保存
							</button>
            </div>
          </div>
          <div className={'pagination'} />
          <style jsx global>
            {`
							.doctorList_top span:nth-child(1) {
								font-size: 16px;
								font-family: MicrosoftYaHei;
								color: rgba(102, 102, 102, 1);
								line-height: 17px;
								height: 17px;
								text-indent: 0;
								margin: 40px 0 0 50px;
								font-weight: bold;
								float: left;
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
								margin: 0 50px;
								display: flex;
								width: auto;
								flex-direction: column;
								// height: 400px;
								// background: #909090;
							}
							.doctorList_content ul li {
								margin: 10px 0;
								display: flex;
							}
							.doctorList_content ul li label {
								// width: 25%;
								vertical-align: middle;
								line-height: 40px;
								flex: 1;
							}
							.doctorList_content ul li input {
								height: 40px;
								border-radius: 5px;
								border: 1px solid #d8d8d8;
								text-indent: 10px;
								flex: 6;
							}
							.doctorList_content ul li select {
								height: 40px;
								border-radius: 5px;
								border: 1px solid #d8d8d8;
								text-indent: 10px;
								flex: 6;
							}
							.buttonBtn {
								display: block;
								margin: 50px auto;
								width: 150px;
							}
							.buttonBtn button {
								width: 65px;
								height: 32px;
								background: rgba(255, 255, 255, 1);
								border-radius: 4px;
								font-size: 14px;
								font-family: PingFangSC-Regular;
								color: rgba(0, 0, 0, 0.65);
								border: 1px solid #d9d9d9;
							}
							.buttonBtn button:nth-child(1) {
								float: left;
							}
							.buttonBtn button:nth-child(2) {
								float: right;
								background: rgba(42, 205, 200, 1);
								color: rgba(255, 255, 255, 1);
							}
						`}
          </style>
        </div>
      </div>
    )
  }

  render() {
		// const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={'childTopBar'}>
          <span
            className={this.state.personnel_type === 2 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 2 })
              this.queryList('', 2)
            }}
					>
						医生
					</span>
          <span
            className={this.state.personnel_type === 1 ? 'sel' : ''}
            onClick={() => {
              this.changeContent({ personnel_type: 1 })
              this.queryList('', 1)
            }}
					>
						职员
					</span>
        </div>
        {this.renderPersonnelList()}
        {this.renderEmployeeList()}
        {this.showAddPersonnelDiv()}
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
				`}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    doctors: state.doctors.data,
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id,
    clinic_name: state.user.data.clinic_name
  }
}

export default connect(mapStateToProps, { doctorList, doctorCreate, departmentList })(DoctorListScreen)
