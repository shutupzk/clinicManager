import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'

class NewListDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }
  async submit () {}
  back () {
    Router.push('/treatment')
  }
  componentWillMount () {}
  
  // 改变显示内容
  changeContent ({ type }) {
    this.setState({ pageType: type })
  }

  showBaseInfo () {
    return (
      <div className={'formList'}>
        <ul>
          <li>
            <label htmlFor='patientName'>
							就诊人名称：<b style={{ color: 'red' }}> *</b>
            </label>
            <input type='text' id='patientName' value={'王俊凯'} />
            <i>图标</i>
          </li>
          <li style={{ width: '25%' }}>
            <label>身份证号码：</label>
            <a>110108199909211234</a>
          </li>
          <li style={{ width: '25%' }}>
            <label>门诊ID：</label>
            <a>000989123654</a>
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
          {/* <li>
              <label>接诊科室：</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li> */}
          <li style={{ width: '100%' }}>
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
          {/* <li style={{width:'100%',cursor:'pointer'}}>
              更多：完善健康档案（收起、展开）
            </li> */}
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
          <button className='commonBtn' style={{ margin: '10px 0 0 300px' }} onClick={() => this.back(this.props)}>
						返回
					</button>
          <button className='saveBtn' style={{ margin: '10px 0 0 30px', float: 'left' }} onClick={() => this.submit(this.props)}>
						保存
					</button>
        </div>
      </div>
    )
  }
// 会员信息
  showMemberInfo () {
    return (
      <div className={'formList'}>
        <div className={'cardNumBox'}>
          <div className={'cardNumber'}>
            <span>储值卡号</span>
            <span>18507496262（储值卡号为手机号码）</span>
          </div>
          <div className={'memberLevel'}>
            <span>会员等级</span>
            <span>铂金卡会员</span>
          </div>
          <div className={'changeLevel'}>
            <button className={'addBtn'}>修改等级</button>
          </div>
        </div>
        <div className={'discountSituation'}>
          <span>折扣情况：</span>
          <ul>
            <li>检验医嘱：88%</li>
            <li>检查医嘱：88%</li>
            <li>治疗医嘱：88%</li>
            <li>处方医嘱：88%</li>
            <li>挂号费：88%</li>
            <li>其他费用：88%</li>
          </ul>
        </div>
        <div className={'cardInfo'}>
          <span>储值卡信息：</span>
          <ul>
            <li>本金余额：1,000.00元</li>
            <li>赠送金余额：1,000.00元</li>
            <li>累计充值：1,000.00元</li>
            <li>累计消费：1,000.00元</li>
          </ul>
          <div className={'cardInfoBtn'}>
            <button className={'addBtn'}>充值</button>
            <button className={'addBtn'}>退款</button>
            <button className={'addBtn'}>查看记录</button>
            <button className={'addBtn'}>设置密码</button>
          </div>
        </div>
      </div>
    )
  }
  // 就诊信息
  showVisitInfo () {
    return (
      <div className={'formList'}>
        dasdas
      </div>
    )
  }
  // 收费信息
  showTollInfo () {
    return (
      <div className={'formList'}>
        dasdas
      </div>
    )
  }
  // 积分信息
  showIntgralInfo () {
    return (
      <div className={'formList'}>
        dasdas
      </div>
    )
  }
  render () {
    return (
      <div>
        <div className={'childTopBar'}>
          <a style={{ float: 'left', lineHeight: '80px', marginLeft: '20px' }}>就诊人信息：</a>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
						基本信息
					</span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
						会员信息
					</span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
						就诊信息
					</span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
						收费信息
					</span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
						积分信息
					</span>
        </div>
        {this.state.pageType === 1 ? this.showBaseInfo() : ''}
        {this.state.pageType === 2 ? this.showMemberInfo() : ''}
        {this.state.pageType === 3 ? this.showVisitInfo() : ''}
        {this.state.pageType === 4 ? this.showTollInfo() : ''}
        {this.state.pageType === 5 ? this.showIntgralInfo() : ''}
      </div>
    )
  }
}
export default connect(null)(NewListDetails)
