import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
// import { Select } from '../../../../../components'
import {
  examinationReportCreate,
  ExaminationReportModelUpdate
} from '../../../../../ducks'

// 检查报告模板
class AddExaminationReportModelScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modelInfo: {
        // status: true,
        // is_common: false
      }
    }
  }

  async componentWillMount() {
  }
  async componentDidMount() {
    const {showWay, selModel} = this.props
    if (showWay === 2) {
      let modelInfo = selModel
      modelInfo.examination_report_model_id = selModel.id
      this.setState({modelInfo})
    }
  }
  style() {
    return (
      <style jsx={'1'}>{`
        .contentCenter{
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button{
          background: rgba(255,255,255,1);
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
        .contentCenter button:hover{
          background:rgba(42,205,200,1);
          color:rgba(255,255,255,1);
          border: 1px solid rgba(42,205,200,1);
        }
        .bottomBtn{
          // background:#909090;
          width: 1098px;
          margin:0 0 30px 0;
          display: flex;
          align-items:center;
        }
        .bottomBtn>div{
          margin:0 auto;
        }
        .bottomBtn button{
          
        }
        .commonBlank{
          background:rgba(255,255,255,1);
          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
          border-radius: 4px ; 
          margin-bottom:20px;
          // width:1038px;
          min-width:1038px;
          display: flex;
          flex-direction: column;
          padding:5px 30px;
        }
        .commonBlank>span{
          font-size:18px;
          height:40px;
          border-bottom:1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank>div{
          display: flex;
          margin:10px 0;
        }
        .commonBlank>div>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
        }
        .commonBlank>div>button{
          background: rgba(255,255,255,1);
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
        .commonBlank>div>ul{
          // background:#a0a0a0;
          margin:0 auto;
          width:100%;
        }
        .commonBlank>div>ul>li{
          float:left;
          width:100%;
          display: flex;
          flex-direction: column;
          min-height:70px;
          margin-right:1%;
          margin-top:5px;
        }
        .commonBlank>div>ul>li>label{
          height:25px;
        }
        .commonBlank>div>ul>li>textarea{
          background: rgba(245,248,249,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 60px;
          padding: 0;
          resize: none;
        }
        .commonBlank>div>ul>li>div>input,
        .commonBlank>div>ul>li>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
        }
        .commonBlank>div>ul>li>div{
          
        }
        .commonBlank>div>ul>li>div>label{
          margin-left:15px;
          display: flex;
          align-items:center;
          float:left;
          height:30px;
        }
        .commonBlank>div>ul>li>div>label:first-child{
          margin-left:0;
        }
        .commonBlank>div>ul>li>div.douInput{
          display: flex;
          align-items: center;
        }
        .commonBlank>div>ul>li>div.douInput>input{
          width:100px;
        }
        .commonBlank>div>ul>li>div.douInput>span{
          margin:0 5px;
        }
        .commonBlank>div>ul>li.tableLi{
          width: 100%;
          margin: 20px 0;
          height: auto;
        }
        .commonBlank>div>ul>li.tableLi>div{
          // background: #909090;
          float: left;
          width: 1000px;
        }
        .commonBlank>div>ul>li.tableLi>div>ul{
          width: 100%;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li{
          display: flex;
          float:left;
          width: 100%;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li:first-child{
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div{
          flex:2;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float:left;
          line-height: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div:last-child{
          flex:1;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div{
          flex:1;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div{
         
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div>input{
          background:rgba(245,248,249,1);
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 30px;
          padding:0;
          width:100%;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div>span{
          margin:0 5px;
        }
        .commonBlank>div>ul>li.tableLi>div>ul>li>div>div.douInput{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    )
  }
  render() {
    const {showType} = this.state
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        {showType ? this.chooseOrgan() : ''}
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.props.back2List()}>取消</button>
            <button onClick={() => {
              if (showWay === 2) {
                this.ExaminationReportModelUpdate()
              } else {
                this.submit()
              }
            }}>保存</button>
          </div>
        </div>
        {this.style()}
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.model_name || data.model_name === '') {
      this.setState({model_nameFailed: true})
      // alert(1)
      return false
    }
    // if (!data.chief_complaint || data.chief_complaint === '') {
    //   this.setState({chief_complaintFailed: true})
    //   // alert(2)
    //   return false
    // }
    // if (!data.price || data.price === '') {
    //   this.setState({priceFailed: true})
    //   // alert(2)
    //   return false
    // }
    return true
  }
  // 保存
  async submit() {
    let {modelInfo} = this.state
    const {clinic_id, examinationReportCreate, operation_id} = this.props
    modelInfo.clinic_id = clinic_id
    modelInfo.operation_id = operation_id
    // let requestData = {...modelInfo}
    // requestData.items = JSON.stringify(requestData.items)
    // console.log('this.validateData(modelInfo)=====', this.validateData(modelInfo))
    if (this.validateData(modelInfo)) {
      let error = await examinationReportCreate(modelInfo)
      if (error) {
        alert(error)
        // this.setState({modelInfo})
      } else {
        this.props.back2List()
      }
    }
    // alert(0)
  }
  async ExaminationReportModelUpdate() {
    let {modelInfo} = this.state
    const {clinic_id, ExaminationReportModelUpdate, operation_id} = this.props
    modelInfo.clinic_id = clinic_id
    modelInfo.operation_id = operation_id
    // let requestData = {...modelInfo}
    // requestData.items = JSON.stringify(requestData.items)
    // console.log('this.validateData(modelInfo)=====', this.validateData(modelInfo))
    if (this.validateData(modelInfo)) {
      let error = await ExaminationReportModelUpdate(modelInfo)
      if (error) {
        alert(error)
        // this.setState({modelInfo})
      } else {
        this.props.back2List()
      }
    }
    // alert(0)
  }
  // 保存并入库
  saveInStock() {

  }
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const {modelInfo} = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    modelInfo[key] = value
    this.setState({modelInfo})
  }
  // 设置选中显示
  getSelectValue(value, array, type) {
    for (let obj of array) {
      // console.log('obj.value======', obj.value, value)
      if (type) {
        if (obj.label === value) {
          return obj
        }
      } else {
        if (obj.value === value) {
          return obj
        }
      }
    }
    return null
  }
  // 单位筛选
  getMiniUnitOptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { name } = doseUnits[key]
      // console.log(doseForms[key])
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  // 获取单位数据
  getDoseUnitList(keyword) {
    const { queryDoseUnitList } = this.props
    if (keyword) {
      queryDoseUnitList({ keyword })
    }
  }

  // 检查报告模板基本信息
  renderBaseInfoBlank() {
    const {modelInfo} = this.state
    // console.log('modelInfo=======', modelInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li style={{width: '48%'}}>
              <label>模板名称<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'model_name'}
                value={modelInfo.model_name}
                onChange={e => {
                  this.setItemValue(e, 'model_name')
                }}
              />
              {this.state.model_nameFailed || modelInfo.model_name === '' || !modelInfo.model_name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>描述<b style={{color: 'red'}}>*</b></label>
              <textarea
                placeholder={'conclusion_examination'}
                value={modelInfo.conclusion_examination}
                onChange={e => {
                  this.setItemValue(e, 'conclusion_examination')
                }}
              />
            </li>
            <li>
              <label>结论</label>
              <textarea
                placeholder={'result_examination'}
                value={modelInfo.result_examination}
                onChange={e => {
                  this.setItemValue(e, 'result_examination')
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    operation_id: state.user.data.id
  }
}

export default connect(mapStateToProps, {
  examinationReportCreate,
  ExaminationReportModelUpdate
})(AddExaminationReportModelScreen)
