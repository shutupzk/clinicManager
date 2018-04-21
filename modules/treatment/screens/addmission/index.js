import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
// import { createBaseApi } from '../../../ducks'
// import { theme, SelectFilterCard } from '../../../../components'
// import { styles } from '../../../../components/styles'
// import { formatArrayToJson, readJsonKey } from '../../../../utils'
// import moment from 'moment'

class AddmisionScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1
    }
  }

  componentDidMount () {}
// 改变显示内容
  changeContent ({ type }) {
    this.setState({ pageType: type })
  }

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
              <div className={'seeDetail'} onClick={() => this.seeDetail()}>
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
              <div className={'seeDetail'} onClick={() => this.seeDetail()}>查看详情</div>
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

  render () {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>今日待接诊</span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>已接诊记录</span>
        </div>
        {this.state.pageType === 1 ? this.showTriageList() : ''}
        {this.state.pageType === 2 ? this.showTriageRecord() : ''}
      </div>
    )
  }
}

export default connect(null)(AddmisionScreen)
