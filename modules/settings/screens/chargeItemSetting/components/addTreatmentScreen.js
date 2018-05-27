import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select, Confirm } from '../../../../../components'
import {
  treatmentCreate,
  queryDoseUnitList
} from '../../../../../ducks'
import {limitMoney} from '../../../../../utils'

// 病历
class AddTreatmentScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      treatmentInfo: {
        status: true,
        is_discount: false
      }
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
          width:19%;
          display: flex;
          flex-direction: column;
          height:70px;
          margin-right:1%;
          margin-top:5px;
        }
        .commonBlank>div>ul>li>label{
          height:25px;
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
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        {showType ? this.chooseOrgan() : ''}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => { this.submit() }}>保存</button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.name || data.name === '') {
      this.setState({nameFailed: true})
      // alert(1)
      return false
    }
    if (!data.unit_name || data.unit_name === '') {
      this.setState({unit_nameFailed: true})
      // alert(2)
      return false
    }
    if (!data.price || data.price === '') {
      this.setState({priceFailed: true})
      // alert(2)
      return false
    }
    return true
  }
  // 保存
  async submit() {
    let {treatmentInfo} = this.state
    const {clinic_id, treatmentCreate} = this.props
    treatmentInfo.clinic_id = clinic_id
    // let requestData = {...treatmentInfo}
    // requestData.items = JSON.stringify(requestData.items)
    // console.log('this.validateData(treatmentInfo)=====', this.validateData(treatmentInfo))
    if (this.validateData(treatmentInfo)) {
      let error = await treatmentCreate(treatmentInfo)
      if (error) {
        this.refs.myAlert.alert('保存失败', error, null, 'Danger')
        this.setState({treatmentInfo})
      } else {
        this.refs.myAlert.alert('保存成功')
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
    const {treatmentInfo} = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    treatmentInfo[key] = value
    this.setState({treatmentInfo})
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
  // // 性别筛选
  // getSexOptions() {
  //   return [
  //     {value: '通用', label: '通用'},
  //     {value: '男', label: '男'},
  //     {value: '女', label: '女'}
  //   ]
  // }
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

  // 部位筛选
  // getExaminationOrgansOptions() {
  //   const { examinationOrgans } = this.props
  //   let array = []
  //   for (let key in examinationOrgans) {
  //     const { name, id } = examinationOrgans[key]
  //     // console.log(doseForms[key])
  //     array.push({
  //       value: id,
  //       label: name
  //     })
  //   }
  //   return array
  // }
  // // 获取部位数据
  // getExaminationOrgansList(keyword) {
  //   const { queryExaminationOrganList } = this.props
  //   queryExaminationOrganList({ keyword }, true)
  //   // if (keyword) {
  //   //   queryExaminationOrganList({ keyword })
  //   // }
  // }
  // 检验项目基本信息
  renderBaseInfoBlank() {
    const {treatmentInfo} = this.state
    // console.log('treatmentInfo=======', treatmentInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li>
              <label>治疗医嘱名称<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'name'}
                value={treatmentInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                }}
              />
              {this.state.nameFailed || treatmentInfo.name === '' || !treatmentInfo.name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>英文名称</label>
              <input
                type='text'
                placeholder={'en_name'}
                value={treatmentInfo.en_name}
                onChange={e => {
                  this.setItemValue(e, 'en_name')
                }}
              />
            </li>
            <li>
              <label>单位<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(treatmentInfo.unit_name, this.getMiniUnitOptions(), true)}
                  onInputChange={keyword => { this.getDoseUnitList(keyword) }}
                  onChange={({label}) => {
                    this.setItemValue(label, 'unit_name', 2)
                  }}
                />
              </div>
              {this.state.unit_nameFailed || treatmentInfo.unit_name === '' || !treatmentInfo.unit_name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>零售价<b style={{color: 'red'}}>*</b></label>
              <div>
                <input
                  type='text'
                  placeholder={'price'}
                  value={treatmentInfo.price}
                  onChange={e => {
                    let value = limitMoney(e.target.value)
                    this.setItemValue(value, 'price', 2)
                  }}
                />
              </div>
              {this.state.priceFailed || treatmentInfo.price === '' || !treatmentInfo.price ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>成本价</label>
              <div>
                <input
                  type='text'
                  placeholder={'cost'}
                  value={treatmentInfo.cost}
                  onChange={e => {
                    let value = limitMoney(e.target.value)
                    this.setItemValue(value, 'cost', 2)
                  }}
                />
              </div>
            </li>
            <li>
              <label>拼音码</label>
              <div>
                <input
                  type='text'
                  placeholder={'py_code'}
                  value={treatmentInfo.py_code}
                  onChange={e => {
                    this.setItemValue(e, 'py_code')
                  }}
                />
              </div>
            </li>
            <li>
              <label>备注</label>
              <div>
                <input
                  type='text'
                  placeholder={'remark'}
                  value={treatmentInfo.remark}
                  onChange={e => {
                    this.setItemValue(e, 'remark')
                  }}
                />
              </div>
            </li>
            <li>
              <label>国际编码</label>
              <div>
                <input
                  type='text'
                  placeholder={'idc_code'}
                  value={treatmentInfo.idc_code}
                  onChange={e => {
                    this.setItemValue(e, 'idc_code')
                  }}
                />
              </div>
            </li>
            <li>
              <label>是否允许折扣</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'is_discount'}
                    checked={treatmentInfo.is_discount}
                    onChange={e => {
                      this.setItemValue(true, 'is_discount', 2)
                    }}
                  />
                  是
                </label>
                <label>
                  <input
                    type='radio'
                    name={'is_discount'}
                    checked={!treatmentInfo.is_discount}
                    onChange={e => {
                      this.setItemValue(false, 'is_discount', 2)
                    }}
                  />
                  否
                </label>
              </div>
            </li>
            <li>
              <label>状态</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'status'}
                    checked={treatmentInfo.status}
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
                    checked={!treatmentInfo.status}
                    onChange={e => {
                      this.setItemValue(false, 'status', 2)
                    }}
                  />
                  停用
                </label>
              </div>
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
    doseUnits: state.doseUnits.data
  }
}

export default connect(mapStateToProps, {
  treatmentCreate,
  queryDoseUnitList
})(AddTreatmentScreen)
