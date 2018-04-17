import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
// import { createBaseApi } from '../../../ducks'
import { theme, SelectFilterCard } from '../../../components'
import { styles } from '../../../components/styles'
import { formatArrayToJson, readJsonKey } from '../../../utils'

class TriageScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType:1,
      showType:1
    }
  }

  componentDidMount () {
    
  }
  //改变显示内容
  changeContent({type}){
    this.setState({pageType:type});
  }
  //完善健康档案
  showCompleteHealthFile(){
    this.state.showType = 1;
  }
  completeHealthFile(){
    return(
      <div className={'healthFile'}>
        dasdasdsa
      </div>
    )
  }
  //选择医生
  showChooseDoctor(){

  }
  chooseDoctor(){

  }
  //换诊
  changeDoctor(){

  }

  //显示分诊列表
  showTriageList(){
    return(
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
          <div className={'pagination'}></div>
        </div>
    )
  }
  //显示分诊记录
  showTriageRecord(){
    return(
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
          <div className={'pagination'}></div>
        </div>
    )
  }
  
  //切换显示列表
  changeShowType({type}){
    this.setState({showType:type});
  }
  //显示日历列表
  showCalendarList(){
    return(
      <div>
        sadasdasdas
      </div>
    )
  }
  //显示就诊人列表
  showPatientList(){
    return(
      <div>
        11111
      </div>
    )
  }
  //预约管理
  showReservation(){
    return(
      <div className={'formList'}>
          <div className={'regisListTop'}>
            <button className={'bigBtn'}>新增预约</button>
            <div className={'radioDiv'}>
              <label>
                <input type='radio' checked={this.state.showType==1?'checked':''} name={'showType'} onClick={() => this.changeShowType({type:1})} />
                日历列表
              </label>
              <label style={{marginLeft:'10px'}}>
                <input type='radio' checked={this.state.showType==2?'checked':''} name={'showType'} onClick={() => this.changeShowType({type:2})} />
                就诊人列表
              </label>
            </div>
            <input className={'searchbox'} style={{marginLeft:'25px'}} type='text' placeholder='搜索科室' />
            <input className={'searchbox'} style={{marginLeft:'15px'}} type='text' placeholder='搜索医生' />
            <input type='text' style={{marginLeft:'15px'}} placeholder='搜索就诊人姓名/门诊ID/身份证号码/手机号码' />
            <input className={'datebox'} style={{marginLeft:'15px'}} type='text' placeholder='预约日期' />
            <input className={'datebox'} style={{marginLeft:'15px'}} type='text' placeholder='预约日期' />
            <button className={'searchBtn'}>查询</button>
            {/* <a>注：当日登记就诊人列表</a> */}
          </div>
          {this.state.showType==1?this.showCalendarList:''}
          {this.state.showType==2?this.showPatientList:''}
          <div className={'pagination'}></div>
        </div>
    )
  }
  render () {
    return (
      <div>
        <div className={'childTopBar'}>
          <span className={this.state.pageType==1?'sel':''} onClick={() => this.changeContent({type:1})} >分诊</span>
          <span className={this.state.pageType==2?'sel':''} onClick={() => this.changeContent({type:2})}>分诊记录</span>
          <span className={this.state.pageType==3?'sel':''} onClick={() => this.changeContent({type:3})}>预约管理</span>
        </div>
        {this.state.pageType==1?this.showTriageList():''}  
        {this.state.pageType==2?this.showTriageRecord():''}  
        {this.state.pageType==3?this.showReservation():''}  
      </div>
    )
  }
}


export default connect(null)(TriageScreen)
