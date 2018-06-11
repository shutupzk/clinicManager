import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Confirm } from '../../../../../components'
import {

} from '../../../../../ducks'
import moment from 'moment'

// 检查
class ExamDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  async componentDidMount() {
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
        <div className={'bottomBtn'}>
          <div>
            <button>保存</button>
            <button>取消</button>
          </div>
        </div>
        {this.getStyle()}
      </div>
    )
  }
  renderDoctorInfo() {
    return (
      <div className={'filterBox'}>
        <div>
          <div>开单医生：网可以</div>
        </div>
        <div>
          <div>开单科室：全科门诊</div>
        </div>
        <div>
          <div>开单时间：20180408 12:12:12</div>
        </div>
      </div>
    )
  }
  renderPatientInfo() {
    return (
      <div className={'filterBox'}>
        <div>
          <div>就诊人姓名：王俊凯</div>
        </div>
        <div>
          <div>性别：男</div>
        </div>
        <div>
          <div>年龄：18</div>
        </div>
        <div>
          <div>就诊ID：123125366</div>
        </div>
        <div>
          <div>手机号码：18507496262</div>
        </div>
      </div>
    )
  }
  renderRecordInfo() {
    return (
      <div className={'filterBox'}>
        <div className={'longTxt'}>
          <label>诊断：</label>
          <div>
            诊断萨达所大所大所大所大诊断萨达所大所大所
          </div>
        </div>
        <div className={'longTxt'}>
          <label>过敏史：</label>
          <div>诊断萨达所大所大所大所大</div>
        </div>
      </div>
    )
  }
  renderItemTitle() {
    const array = [{name: '项目1'}, {name: '项目1'}, {name: '项目1'}]
    return (
      <div className={'detailCenter'}>
        <div className={'childTopBar'}>
          {array.map((item, index) => {
            return (
              <span key={index} className={index === 0 ? 'sel' : ''}>
                {item.name}
              </span>
            )
          })}
        </div>
        <div className={'chooseModel'}>
          <div>
            <Select
              placeholder={'选择模板'}
              height={32}
              options={[]}
            />
          </div>
        </div>
        <div className={'rightBtn'}>
          <button>查看病历</button>
          <button>检查记录</button>
        </div>
      </div>
    )
  }
  renderContent() {
    return (
      <div className={'detailContent formList'}>
        <ul>
          <li>
            <label>检查图片</label>
            <div style={{height: '100px'}}>文件、照片上传</div>
          </li>
          <li>
            <label>描述</label>
            <textarea />
          </li>
          <li>
            <label>结论</label>
            <textarea />
          </li>
        </ul>
      </div>
    )
  }

  getStyle() {
    return (
      <style jsx='true'>
        {`
          .detail{
            // width: 100%;
            // background: #909090;
            display: flex;
            flex-direction: column;
            margin: 20px 66px;
          }
          .detail_title{
            display: flex;
          }
          .detail_title span{
            font-size: 20px;
            cursor: default;
          }
          .detail_title span:first-child{
            flex: 1;
          }
          .detail_title span:last-child{
            
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
          .filterBox>div{
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .filterBox>div.longTxt {
            padding: 10px;
          }
          .filterBox>div.longTxt label{
            white-space: nowrap;
            font-weight:700;
          }
          .filterBox>div.longTxt div{
            text-align: left;
            font-size: 14px;
            max-height: 100px;
            overflow:auto;
            flex: 1;
          }
          .childTopBar span{
            margin: 10px 0 0 0;
            // flex:1;
          }
          .childTopBar span:nth-child(1){
            margin-left: 0;
          }
          .detailCenter{
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
          .chooseModel>div{
            width: 100%;
          }
          .rightBtn {
            display: flex;
            align-items: center;
          }
          button{
            background: transparent;
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            height: 32px;
            cursor: pointer;
            margin-left: 10px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(0,0,0,0.65);
            padding: 0 15px;
          }
          button:hover {
            background: rgba(42,205,200,1);
            color: rgba(255,255,255,1);
            border: 1px solid rgba(42,205,200,1);
          }
          .detailContent{
            width: 100%;
            margin: 0;
            border-radius: 0;
            padding: 10px 0 40px 0;
          }
          .detailContent ul{
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
            width:100%;
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
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, {
})(ExamDetailScreen)
