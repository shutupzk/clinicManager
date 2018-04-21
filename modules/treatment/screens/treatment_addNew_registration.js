import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'

class AddNewRegistrationScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }

  componentWillMount () {}

  async submit () {}
	// 改变显示内容
  changeContent ({ type }) {
    this.setState({ pageType: type })
  }
	// 显示添加新增
  showAddNew () {
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <label style={{ float: 'left', marginLeft: '20px', height: '60px', lineHeight: '60px' }}>就诊人登记</label>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          <button className={'searchBtn'}>读卡</button>
          {/* <a>注：当日登记就诊人列表</a> */}
        </div>
        <div className={'formListBox'} style={{ marginTop: '20px' }}>
          <ul>
            <li>
              <label htmlFor='patientName'>
								就诊人名称：<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' id='patientName' />
            </li>
            <li>
              <label>身份证号码：</label>
              <input type='text' />
            </li>
            <li style={{ width: '20%' }}>
              <label>
								年龄：<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' style={{ width: '120px' }} />
            </li>
            <li style={{ width: '30%' }}>
              <label>
								性别：<b style={{ color: 'red' }}> *</b>
              </label>
              <div>
                <input id='man' type='radio' name='sex' />
                <label htmlFor='man'>男</label>
                <input id='woman' type='radio' name='sex' style={{ marginLeft: '15px' }} />
                <label htmlFor='woman'>女</label>
              </div>
            </li>
            <li>
              <label>
								手机号码：<b style={{ color: 'red' }}> *</b>
              </label>
              <input type='text' />
            </li>
            <li style={{ width: '100%' }}>
              <label>住址：</label>
              <input style={{ width: '142px' }} type='text' value={'省'} />
              <input style={{ width: '142px', marginLeft: '20px' }} type='text' value={'市'} />
              <input style={{ width: '142px', marginLeft: '20px' }} type='text' value={'区'} />
              <input style={{ marginLeft: '20px' }} type='text' />
            </li>
            <li>
              <label>接诊科室：</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <label>
								就诊类型：<b style={{ color: 'red' }}> *</b>
              </label>
              <div>
                <input id='first' type='radio' name='type' />
                <label htmlFor='first'>首诊</label>
                <input id='referral' type='radio' name='type' style={{ marginLeft: '15px' }} />
                <label htmlFor='referral'>复诊</label>
                <input id='operate' type='radio' name='type' style={{ marginLeft: '15px' }} />
                <label htmlFor='operate'>术后复诊</label>
              </div>
            </li>
            <li style={{ width: '100%', cursor: 'pointer' }}>更多：完善健康档案（收起、展开）</li>
            <li>
              <label>会员卡号：</label>
              <input type='text' />
            </li>
            <li>
              <label>就诊人来源：</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <label>职业：</label>
              <input type='text' />
            </li>
            <li>
              <label>备注：</label>
              <input type='text' />
            </li>
          </ul>
          <div style={{ float: 'left', width: '1000px', height: '60px' }}>
            <button className='saveBtn' onClick={() => this.submit(this.props)}>
							保存
						</button>
          </div>
        </div>
      </div>
    )
  }
	// 显示新增列表
  showNewList () {
    return (
      <div className={'formList'}>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
          <button className={'searchBtn'}>查询</button>
          <a>注：当日登记就诊人列表</a>
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
              <div className={'seeDetail'}>查看详情</div>
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
              <div className={'seeDetail'}>查看详情</div>
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
              <div className={'seeDetail'}>查看详情</div>
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
              <div className={'seeDetail'}>查看详情</div>
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
              <div className={'seeDetail'}>查看详情</div>
            </li>
          </ul>
        </div>
        <div className={'pagination'} />
      </div>
    )
  }
	// 查看详情
  seeDetail () {
    Router.push('/treatment/newListDetail')
  }

  render () {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
						登记
					</span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
						就诊人列表
					</span>
        </div>
        {this.state.pageType === 1 ? this.showAddNew() : this.showNewList()}
      </div>
    )
  }
}
export default connect(null)(AddNewRegistrationScreen)
