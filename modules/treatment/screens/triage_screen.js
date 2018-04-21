import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
// // import { createBaseApi } from '../../../ducks'
// import { theme, SelectFilterCard } from '../../../components'
// import { styles } from '../../../components/styles'
// import { formatArrayToJson, readJsonKey } from '../../../utils'
import moment from 'moment'

class TriageScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      alertType: 0,
      alertPageType: 1,
      nowWeekNum: 1
    }
  }

  componentDidMount () {}
	// 改变显示内容
  changeContent ({ type }) {
    this.setState({ pageType: type })
  }
	// 完善健康档案
  showCompleteHealthFile () {
    this.setState({ alertType: 1 })
  }
	// 显示体征表单
  showBodySigns () {
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
  showPreMedicalRecords () {
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
  showPreDiagnosisRecords () {
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
  completeHealthFile () {
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
  showChooseDoctor () {
    this.setState({ alertType: 2 })
  }
  chooseDoctor () {
    return (
      <div className={'doctorList'}>
        <div className={'doctorList_top'}>
          <span>选择医生</span>
          <div>
            <select>
              <option>请选择科室</option>
              <option>儿科</option>
              <option>全科门诊</option>
              <option>中医科</option>
            </select>
            <input type='text' placeholder={'医生名称'} />
          </div>
          <span onClick={() => this.setState({ alertType: 0 })}>×</span>
        </div>
        <div className={'doctorList_content'}>
          <ul>
            <li>
              <img src={''} />
              <div>
                <span>医生名称：唐伯虎</span>
                <span>科室名称：XX科室</span>
                <span>今日待接诊：5人</span>
                <span>今日已接诊：5人</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={'pagination'} />
      </div>
    )
  }
	// 换诊
  changeDoctor () {}

	// 显示分诊列表
  showTriageList () {
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
        <div className={'regisList'}>
          <ul>
            <li>
              <div className={'liTop'}>
                <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
                <span className={'status'}>待分诊</span>
              </div>
              <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
              <div>门诊ID：000989123654</div>
              <div>接诊科室：</div>
              <div>接诊医生：</div>
              <div>登记人员：XXX</div>
              <div>登记时间：20180410 10:23:23</div>
              <div className={'seeDetail'}>
                <a onClick={() => this.showCompleteHealthFile()}>完善健康档案</a>
                <a onClick={() => this.showChooseDoctor()}>选择医生</a>
              </div>
            </li>
          </ul>
        </div>
        <div className={'pagination'} />
      </div>
    )
  }
	// 显示分诊记录
  showTriageRecord () {
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
        <div className={'regisList'}>
          <ul>
            <li>
              <div className={'liTop'}>
                <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
                <span className={'status'}>待分诊</span>
              </div>
              <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
              <div>门诊ID：000989123654</div>
              <div>接诊科室：</div>
              <div>接诊医生：</div>
              <div>登记人员：XXX</div>
              <div>登记时间：20180410 10:23:23</div>
              <div className={'seeDetail'} onClick={() => this.seeDetail()}>
								查看详情
							</div>
            </li>
            <li>
              <div className={'liTop'}>
                <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
                <span className={'status'}>待分诊</span>
              </div>
              <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
              <div>门诊ID：000989123654</div>
              <div>接诊科室：</div>
              <div>接诊医生：</div>
              <div>登记人员：XXX</div>
              <div>登记时间：20180410 10:23:23</div>
              <div className={'seeDetail'}>
                <a onClick={() => this.showCompleteHealthFile()}>完善健康档案</a>
                <a onClick={() => this.changeDoctor()}>换诊</a>
              </div>
            </li>
            <li>
              <div className={'liTop'}>
                <span className={'updateTime'}>更新时间：20180408 10:23:34</span>
                <span className={'status'}>待分诊</span>
              </div>
              <div>就诊人姓名：王俊凯 男 年龄：18岁</div>
              <div>门诊ID：000989123654</div>
              <div>接诊科室：</div>
              <div>接诊医生：</div>
              <div>登记人员：XXX</div>
              <div>登记时间：20180410 10:23:23</div>
              <div className={'seeDetail'}>
                <a onClick={() => this.showCompleteHealthFile()}>完善健康档案</a>
                <a onClick={() => this.changeDoctor()}>换诊</a>
              </div>
            </li>
          </ul>
        </div>
        <div className={'pagination'} />
      </div>
    )
  }

	// 切换显示列表
  changeShowType ({ type }) {
    this.setState({ showType: type })
  }
	// 显示日历列表
  showCalendarList () {
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
  showPatientList () {
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
  addNewReservation () {
    Router.push('/treatment/reservation_add')
  }
	// 预约管理
  showReservation () {
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <button className={'bigBtn'} onClick={() => this.addNewReservation()}>
						新增预约
					</button>
          <div className={'radioDiv'}>
            <label>
              <input type='radio' checked={this.state.showType == 1 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 1 })} />
							日历列表
						</label>
            <label style={{ marginLeft: '10px' }}>
              <input type='radio' checked={this.state.showType == 2 ? 'checked' : ''} name={'showType'} onChange={() => this.changeShowType({ type: 2 })} />
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
  render () {
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
        {this.state.pageType === 1 ? this.showTriageList() : ''}
        {this.state.pageType === 2 ? this.showTriageRecord() : ''}
        {this.state.pageType === 3 ? this.showReservation() : ''}
        {this.state.alertType === 1 ? this.completeHealthFile() : ''}
        {this.state.alertType === 2 ? this.chooseDoctor() : ''}
      </div>
    )
  }
}

export default connect(null)(TriageScreen)
