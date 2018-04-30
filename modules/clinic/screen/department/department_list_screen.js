import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { departmentList, departmentCreate } from '../../../../ducks'
import moment from 'moment'

class DepartmentListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnelType: 1,
      pageType: 1,
      alertType: 0,
      departInfo: {
        code: '',
        name: '',
        weight: ''
      }
    }
  }

  componentWillMount() {
    const { departmentList, clinic_id } = this.props
    departmentList({ clinic_id })
  }

  getListData() {
    const { departments } = this.props
    let array = []
    for (let key in departments) {
      array.push(departments[key])
    }
    return array
  }

  goToDetail({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/detail')
  }

  goToEdit({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/edit')
  }

  async toRemove({ apiName }) {
    const confirmed = confirm('确定要删除  ' + apiName + '?')
    if (confirmed) {
      const { removeBaseApi } = this.props
      const error = await removeBaseApi({ apiName })
      if (error) {
        alert(error)
      }
    }
  }

  renderTitle() {
		// const { titleText, orderTitle, liPadding } = styles
    return (
      <ul className='flex tb-flex'>
        <li style={{ flex: 1, height: '40px', lineHeight: '40px' }}>序号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>科室编码 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>科室名称</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属诊所</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>是否开放预约挂号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderRow({ apiName, description }, index) {
    const { liPadding, fenyeItem, buttonMiddle } = styles
    return (
      <ul style={{ ...liPadding }} className='flex tb-flex listItem' key={index}>
        <li style={{ flex: 1 }}>{`${index}`}</li>
        <li style={{ flex: 2 }}>{apiName}</li>
        <li style={{ flex: 5 }}>{description}</li>
        <li style={{ flex: 2, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, background: '#0BC019', border: '1px solid #0BC019' }} onClick={() => this.goToDetail({ apiName })}>
						查看
					</button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({ apiName })}>
						编辑
					</button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({ apiName })}>
						删除
					</button>
        </li>
      </ul>
    )
  }
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  showDoctor() {
    if (this.state.pageType !== 1) return null
    let exercises = this.getListData()
    return (
      <div className={'newList'}>
        <div className={'newList_top'}>
          <div className={'top_left'}>
            <input type='text' placeholder='搜索科室名称/科室编号' />
            <button>查询</button>
          </div>
          <div className={'top_right'}>
            <button onClick={() => {
              this.setState({ alertType: 1 })
            }}>新增科室</button>
          </div>
        </div>
        <div className={'listContent'}>
          <ul>
            {exercises.map((depart, index) => {
              return (
                <li key={index}>
                  <div className={'itemTop'}>
                    <span>{depart.name}</span>
                  </div>
                  <div className={'itemCenter'}>
                    <span>
                      <a>科室编号：</a>
                      <a>{depart.code}</a>
                    </span>
                    <span>
                      <a>可否挂号：</a>
                      <a>{depart.is_appointment === true ? '可以' : '不可以'}</a>
                    </span>
                    <span>
                      <a>创建时间：</a>
                      <a>{moment(depart.created_time).format('YYYY-MM-DD HH:mm:ss')}</a>
                    </span>
                    <span>
                      <a>更新时间：</a>
                      <a>{moment(depart.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
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
          .contentMenu{
            width: 100%;
            // background: #909090;
            float: left;
          }
          .contentMenu span:nth-child(1){
            margin:24px 0 0 32px;
          }
          .contentMenu span{
            width:88px;
            height:32px; 
            background:rgba(255,255,255,1);
            border-radius: 4px ; 
            float:left;
            text-align:center;
            line-height:32px;
            color:#000000;
            cursor:pointer;
            margin-top:24px;
            margin-left:10px;
          }
          .contentMenu span.sel{
            width:100px;
            height:32px; 
            background:rgba(42,205,200,1);
            border-radius: 4px ; 
            color:#FFFFFF;
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
            width:60px;
            height:32px; 
            background:rgba(42,205,200,1);
            border-radius: 4px ; 
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
            width: 1146px;
						// background: #909090;
					}
					.listContent ul {
						float: left;
            margin: 10px 0 0 36px;
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
            border-top: 2px solid #42B7BA;
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
						border-right: 2px solid #31B0B3;
					}
					.itemBottom span:nth-child(2) {
            border-right: 2px solid #31B0B3;
					}
				`}</style>
      </div>
      // <div>
      //   <div className={'regisListTop'}>
      //     <input type='text' placeholder='搜索科室名称/科室编号' />
      //     <button className={'searchBtn'}>查询</button>
      //   </div>
      //   <div className={'listBox'}>
      //     <button
      //       className={'addBtn'}
      //       onClick={() => {
      //         this.setState({ alertType: 1 })
      //       }}
			// 		>
			// 			新增科室
			// 		</button>
      //     {this.renderTitle()}
      //     {exercises.map((item, index) => {
      //       return this.renderRow(item, index)
      //     })}
      //   </div>
      // </div>
    )
  }
	// 保存添加
  async saveAdd() {
    const { departmentCreate, clinic_id } = this.props
    let departInfo = this.state.departInfo
    departInfo.clinic_id = clinic_id
    let error = await departmentCreate({ departInfo })
    if (error) {
      alert(error)
    } else {
      const { departmentList, clinic_id } = this.props
      departmentList({ clinic_id })
      this.setState({ alertType: 0 })
    }
  }
  setDeaprtInfo(e, key) {
    let newDepart = this.state.departInfo
    newDepart[key] = e.target.value
    this.setState({ departInfo: newDepart })
  }
	// 显示新增科室
  showAddDepart() {
    // let departInfo = this.state.departInfo
    if (this.state.alertType !== 1) return null
    return (
      <div className={'mask'}>
        <div className={'doctorList'} style={{ width: '700px', height: '480px', left: '500px' }}>
          <div className={'doctorList_top'}>
            <span>新增科室</span>
            <div />
            <span onClick={() => this.setState({ alertType: 0 })}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              <li>
                <label>科室编码：</label>
                <input
                  placeholder='请填写科室编码'
                  defaultValue=''
                  onChange={e => this.setDeaprtInfo(e, 'code')}
								/>
              </li>
              <li>
                <label>科室名称：</label>
                <input
                  placeholder='请填写科室名称'
                  defaultValue=''
                  onChange={e => this.setDeaprtInfo(e, 'name')}
								/>
              </li>
              <li>
                <label>所属诊所：</label>
                <input placeholder='请填写所属诊所' value='龙华诊所' />
              </li>
              <li>
                <label>科室权重：</label>
                <input
                  placeholder='请填写科室权重'
                  defaultValue=''
                  onChange={e => this.setDeaprtInfo(e, 'weight')}
								/>
              </li>
            </ul>
            <div className={'buttonBtn'}>
              <button>取消</button>
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
                font-weight:bold;
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
    return (
      <div className={'orderRecordsPage'}>
        {this.showDoctor()}
        {this.showAddDepart()}
      </div>
    )
  }
}

const styles = {
  titleText: {
    fontSize: '16px'
  },
  liPadding: {
    padding: '10px 15px'
  },
  orderTitle: {
    color: '#797979',
    background: '#f2f2f2',
    borderRadius: '3px'
  },
  buttonMiddle: {
    height: '30px',
    width: '50px'
  },
  buttonLarge: {
    height: '40px',
    width: '80px',
    fontSize: '20px'
  },
  fenyeItem: {
    background: '#3ca0ff',
    borderRadius: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    border: '1px solid #3ca0ff',
    color: '#fff'
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id,
    clinic_code: '00000001'
  }
}

export default connect(mapStateToProps, { departmentList, departmentCreate })(DepartmentListScreen)
