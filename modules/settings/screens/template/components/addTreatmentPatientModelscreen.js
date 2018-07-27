import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
// import { Select } from '../../../../../components'
import {
  queryTreatmentList,
  TreatmentPatientModelCreate,
  TreatmentPatientModelUpdate,
  TreatmentPatientModelDetail
} from '../../../../../ducks'
import { Select } from '../../../../../components'

// 病历
class AddTreatmentPatientModelscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modelInfo: {
        is_common: false,
        status: true,
        items: [{}]
      },
      items: [{}]
    }
  }

  async componentWillMount() {
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
        .commonBlank>div>ul>li>ul>li:first-child,
        .commonBlank>div>ul>li.tableLi>div>ul>li:first-child{
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
        }
        .commonBlank>div>ul>li>ul {
          width: 100%;
          // background: #eeeeee;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank>div>ul>li>ul>li {
          display: flex;
          height:40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank>div>ul>li>ul>li>div {
          flex: 1;
          align-items: center;
          display: flex;
          justify-content: center;
          border-left: 1px solid #d8d8d8;
          height:40px;
        }
        .commonBlank>div>ul>li>ul>li>div>div {
          width:100%;
        }
        .commonBlank>div>ul>li>ul>li>div>input {
          background:transparent;
          border-radius: 4px ; 
          border:1px solid #d9d9d9;
          height: 36px;
          padding:0;
          // width:100%;
          flex:1;
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
  async componentDidMount() {
    const {showWay, treatment_patient_model_id, TreatmentPatientModelDetail} = this.props
    if (showWay === 2) {
      let data = await TreatmentPatientModelDetail({treatment_patient_model_id})
      if (data) {
        console.log('TreatmentPatientModelDetail=====', data)
        this.setState({
          modelInfo: data
        })
      }
    }
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
                this.TreatmentPatientModelUpdate()
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
    return true
  }
  // 保存
  async submit() {
    let {modelInfo} = this.state
    const {clinic_id, TreatmentPatientModelCreate, operation_id} = this.props
    modelInfo.clinic_id = clinic_id
    modelInfo.operation_id = operation_id
    // let requestData = {...modelInfo}
    // modelInfo.items = JSON.stringify(modelInfo.items)
    // console.log('this.validateData(modelInfo)=====', modelInfo)
    for (let i = 0; i < modelInfo.items.length; i++) {
      modelInfo.items[i].clinic_treatment_id = modelInfo.items[i].clinic_treatment_id + ''
      modelInfo.items[i].times = modelInfo.items[i].times + ''
    }
    if (this.validateData(modelInfo)) {
      let error = await TreatmentPatientModelCreate(modelInfo)
      if (error) {
        alert(error)
        // this.setState({modelInfo})
      } else {
        this.props.back2List()
      }
    }
  }
  async TreatmentPatientModelUpdate() {
    let {modelInfo} = this.state
    const {clinic_id, TreatmentPatientModelUpdate, operation_id} = this.props
    modelInfo.clinic_id = clinic_id
    modelInfo.operation_id = operation_id
    // let requestData = {...modelInfo}
    // requestData.items = JSON.stringify(requestData.items)
    // console.log('this.validateData(modelInfo)=====', modelInfo)
    for (let i = 0; i < modelInfo.items.length; i++) {
      modelInfo.items[i].clinic_treatment_id = modelInfo.items[i].clinic_treatment_id + ''
      modelInfo.items[i].times = modelInfo.items[i].times + ''
    }
    if (this.validateData(modelInfo)) {
      let error = await TreatmentPatientModelUpdate(modelInfo)
      if (error) {
        alert(error)
        // this.setState({modelInfo})
      } else {
        this.props.back2List()
      }
    }
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
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  setItemChildValue(e, index, key, type = 1) {
    const { modelInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = modelInfo.items
    array[index][key] = value
    modelInfo.items = array
    this.setState({ modelInfo })
  }
  setItemChildItemsValue(e, index, key, type = 1) {
    let { items } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = items
    array[index][key] = value
    items = array
    this.setState({ items })
  }
  addColumn() {
    const { modelInfo, items } = this.state
    modelInfo.items.push({})
    items.push({})
    this.setState({ modelInfo, items })
  }

  removeColumn(index) {
    const { modelInfo, items } = this.state
    let array = modelInfo.items
    array.splice(index, 1)
    modelInfo.items = array
    let array1 = items
    array1.splice(index, 1)
    // items = array1
    this.setState({ modelInfo, items: array1 })
  }
  // 检查项目筛选
  getTreatmentOptions() {
    const { treatments } = this.props
    let array = []
    for (let key in treatments) {
      const { clinic_treatment_id, treatment_name, unit_name } = treatments[key]
      // console.log(doseForms[key])
      array.push({
        value: clinic_treatment_id,
        label: treatment_name,
        unit_name,
        clinic_treatment_id
      })
    }
    return array
  }
  // 获取检查项目数据
  getTreatmentList(keyword) {
    const { queryTreatmentList, clinic_id } = this.props
    if (keyword) {
      let requestData = {
        clinic_id,
        keyword
      }
      queryTreatmentList(requestData)
    }
  }
  // 检验项目基本信息
  renderBaseInfoBlank() {
    const {modelInfo, items} = this.state
    console.log('modelInfo=======', modelInfo)
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
            <li style={{width: '24%'}}>
              <label>模板类型</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'is_common'}
                    checked={modelInfo.is_common}
                    onChange={e => {
                      this.setItemValue(true, 'is_common', 2)
                    }}
                  />
                  通用
                </label>
                <label>
                  <input
                    type='radio'
                    name={'is_common'}
                    checked={!modelInfo.is_common}
                    onChange={e => {
                      this.setItemValue(false, 'is_common', 2)
                    }}
                  />
                  个人
                </label>
              </div>
            </li>
            <li style={{width: '24%'}}>
              <label>状态</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'status'}
                    checked={modelInfo.status}
                    onChange={e => {
                      this.setItemValue(true, 'status', 2)
                    }}
                  />
                  正常
                </label>
                <label>
                  <input
                    type='radio'
                    name={'status'}
                    checked={!modelInfo.status}
                    onChange={e => {
                      this.setItemValue(false, 'status', 2)
                    }}
                  />
                  停用
                </label>
              </div>
            </li>
            <li>
              <label>医嘱内容<b style={{color: 'red'}}>*</b></label>
              <ul>
                <li>
                  <div>名称</div>
                  <div>单位</div>
                  <div>次数</div>
                  <div>说明</div>
                  <div onClick={() => this.addColumn()}>添加</div>
                </li>
                {modelInfo.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <div>
                          <Select
                            placeholder='搜索治疗医嘱名称'
                            height={38}
                            options={this.getTreatmentOptions()}
                            value={this.getSelectValue(+modelInfo.items[index].clinic_treatment_id, this.getTreatmentOptions())}
                            onChange={({ value, label, clinic_treatment_id, unit_name }) => {
                              this.setItemChildValue(value + '', index, 'clinic_treatment_id', 2)
                              this.setItemChildItemsValue(unit_name, index, 'unit_name', 2)
                            }}
                            onInputChange={keyword => this.getTreatmentList(keyword)}
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          readOnly
                          type='text'
                          value={items[index].unit_name}
                        />
                      </div>
                      <div>
                        <input
                          type='number'
                          value={modelInfo.items[index].times}
                          onChange={e => {
                            this.setItemChildValue(e, index, 'times')
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type='text'
                          value={modelInfo.items[index].illustration}
                          onChange={e => {
                            this.setItemChildValue(e, index, 'illustration')
                          }}
                        />
                      </div>
                      <div onClick={() => this.removeColumn(index)}>删除</div>
                    </li>
                  )
                })}
              </ul>
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
    treatments: state.treatments.data,
    operation_id: state.user.data.id
  }
}

export default connect(mapStateToProps, {
  queryTreatmentList,
  TreatmentPatientModelCreate,
  TreatmentPatientModelUpdate,
  TreatmentPatientModelDetail
})(AddTreatmentPatientModelscreen)
