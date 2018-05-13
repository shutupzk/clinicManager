import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select } from '../../../../../components'
import {
  laboratoryCreate,
  queryDoseUnitList
} from '../../../../../ducks'

// 病历
class AddLaboratoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laboratoryInfo: {}
    }
  }

  async componentDidMount() {
  }
  style() {
    return (
      <style jsx>{`
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
      `}</style>
    )
  }
  render() {
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button onClick={() => this.submit()}>保存</button>
          </div>
        </div>
        {this.style()}
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.name || data.name === '') {
      this.setState({nameFailed: true})
      // alert(1)
      return false
    } else {
      this.setState({nameFailed: false})
    }
    if (!data.unit_id || data.unit_id === '') {
      this.setState({unit_idFailed: true})
      // alert(2)
      return false
    } else {
      this.setState({unit_idFailed: false})
    }
    if (!data.price || data.price === '') {
      this.setState({priceFailed: true})
      // alert(4)
      return false
    } else {
      this.setState({priceFailed: false})
    }
    if (!data.laboratory_sample_id || data.laboratory_sample_id === '') {
      this.setState({laboratory_sample_idFailed: true})
      // alert(6)
      return false
    } else {
      this.setState({laboratory_sample_idFailed: false})
    }
    if (!data.cuvette_color_id || data.cuvette_color_id === '') {
      this.setState({cuvette_color_idFailed: true})
      // alert(7)
      return false
    } else {
      this.setState({cuvette_color_idFailed: false})
    }
    return true
  }
  // 保存
  async submit() {
    let {laboratoryInfo} = this.state
    const {clinic_id, laboratoryCreate} = this.props
    laboratoryInfo.clinic_id = clinic_id
    // laboratoryInfo.ret_price = laboratoryInfo.ret_price * 100
    // laboratoryInfo.buy_price = laboratoryInfo.buy_price * 100
    // laboratoryInfo.bulk_sales_price = laboratoryInfo.bulk_sales_price * 100
    if (this.validateData(laboratoryInfo)) {
      let error = await laboratoryCreate(laboratoryInfo)
      if (error) {
        alert(error)
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
    const {laboratoryInfo} = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    laboratoryInfo[key] = value
    this.setState({laboratoryInfo})
  }
  // 单位筛选
  getMiniUnitOptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { name, id } = doseUnits[key]
      // console.log(doseForms[key])
      array.push({
        value: id,
        label: name
      })
    }
    return array
  }
  getLaboratorySampleIdOptions() {
    return [{value: 1, label: '标本1'}, {value: 2, label: '标本2'}]
  }
  getCuvetteColorIdOptions() {
    return [{value: 1, label: '颜色1'}, {value: 2, label: '颜色2'}]
  }
  // 设置选中显示
  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  // 获取单位数据
  getDoseUnitList(keyword) {
    const { queryDoseUnitList } = this.props
    if (keyword) {
      queryDoseUnitList({ keyword })
    }
  }
  // 药品基本信息
  renderBaseInfoBlank() {
    const {laboratoryInfo} = this.state
    // console.log('laboratoryInfo=======', laboratoryInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li>
              <label>通用名<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'name'}
                value={laboratoryInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                }}
              />
              {this.state.nameFailed || laboratoryInfo.name === '' || !laboratoryInfo.name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>英文名称</label>
              <input
                type='text'
                placeholder={'en_name'}
                value={laboratoryInfo.en_name}
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
                  value={this.getSelectValue(laboratoryInfo.unit_id, this.getMiniUnitOptions())}
                  onInputChange={keyword => { this.getDoseUnitList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'unit_id', 2)
                  }}
                />
              </div>
              {this.state.unit_idFailed || laboratoryInfo.unit_id === '' || !laboratoryInfo.unit_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>零售价<b style={{color: 'red'}}>*</b></label>
              <div>
                <input
                  type='text'
                  placeholder={'price'}
                  value={laboratoryInfo.price}
                  onChange={e => {
                    this.setItemValue(e, 'price')
                  }}
                />元
              </div>
              {this.state.priceFailed || laboratoryInfo.price === '' || !laboratoryInfo.price ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>成本价</label>
              <div>
                <input
                  type='text'
                  placeholder={'cost'}
                  value={laboratoryInfo.cost}
                  onChange={e => {
                    this.setItemValue(e, 'cost')
                  }}
                />元
              </div>
            </li>
            <li>
              <label>拼音码</label>
              <input
                type='text'
                placeholder={'py_code'}
                value={laboratoryInfo.py_code}
                onChange={e => {
                  this.setItemValue(e, 'py_code')
                }}
              />
            </li>
            <li>
              <label>备注</label>
              <input
                type='text'
                placeholder={'remark'}
                value={laboratoryInfo.remark}
                onChange={e => {
                  this.setItemValue(e, 'remark')
                }}
              />
            </li>
            <li>
              <label>是否允许折扣</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'discount'}
                    checked={laboratoryInfo.is_discount}
                    onChange={e => {
                      this.setItemValue(true, 'is_discount', 2)
                    }}
                  />
                  是
                </label>
                <label>
                  <input
                    type='radio'
                    name={'discount'}
                    checked={!laboratoryInfo.is_discount}
                    onChange={e => {
                      this.setItemValue(false, 'is_discount', 2)
                    }}
                  />
                  否
                </label>
              </div>
            </li>
            <li>
              <label>是否允许外送</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'delivery'}
                    checked={laboratoryInfo.is_delivery}
                    onChange={e => {
                      this.setItemValue(true, 'is_delivery', 2)
                    }}
                  />
                  是
                </label>
                <label>
                  <input
                    type='radio'
                    name={'delivery'}
                    checked={!laboratoryInfo.is_delivery}
                    onChange={e => {
                      this.setItemValue(false, 'is_delivery', 2)
                    }}
                  />
                  否
                </label>
              </div>
            </li>
            <li>
              <label>标本种类<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getLaboratorySampleIdOptions()}
                  value={this.getSelectValue(laboratoryInfo.laboratory_sample_id, this.getLaboratorySampleIdOptions())}
                  onInputChange={keyword => {}}
                  onChange={({value}) => {
                    this.setItemValue(value, 'laboratory_sample_id', 2)
                  }}
                />
              </div>
              {this.state.laboratory_sample_idFailed || laboratoryInfo.laboratory_sample_id === '' || !laboratoryInfo.laboratory_sample_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>试管颜色<b style={{color: 'red'}}>*</b></label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getCuvetteColorIdOptions()}
                  value={this.getSelectValue(laboratoryInfo.cuvette_color_id, this.getCuvetteColorIdOptions())}
                  onInputChange={keyword => {}}
                  onChange={({value}) => {
                    this.setItemValue(value, 'cuvette_color_id', 2)
                  }}
                />
              </div>
              {this.state.cuvette_color_idFailed || laboratoryInfo.cuvette_color_id === '' || !laboratoryInfo.cuvette_color_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>合并标记</label>
              <input
                type='text'
                placeholder={'合并标记'}
                value={laboratoryInfo.merge_flag}
                onChange={e => {
                  this.setItemValue(e, 'merge_flag')
                }}
              />
            </li>
            <li>
              <label>报告所需时间</label>
              <input
                type='text'
                placeholder={'报告所需时间'}
                value={laboratoryInfo.time_report}
                onChange={e => {
                  this.setItemValue(e, 'time_report')
                }}
              />
            </li>
            <li>
              <label>临床意义</label>
              <input
                type='text'
                placeholder={'临床意义'}
                value={laboratoryInfo.clinical_significance}
                onChange={e => {
                  this.setItemValue(e, 'clinical_significance')
                }}
              />
            </li>
            <li>
              <label>国际编码</label>
              <input
                type='text'
                placeholder={'idc_code'}
                value={laboratoryInfo.idc_code}
                onChange={e => {
                  this.setItemValue(e, 'idc_code')
                }}
              />
            </li>
            <li>
              <label>状态</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'drugStatus'}
                    checked={laboratoryInfo.status}
                    onChange={e => {
                      this.setItemValue(true, 'status', 2)
                    }}
                  />
                  正常
                </label>
                <label>
                  <input
                    type='radio'
                    name={'drugStatus'}
                    checked={!laboratoryInfo.status}
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
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    doseForms: state.doseForms.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data
  }
}

export default connect(mapStateToProps, {
  laboratoryCreate,
  queryDoseUnitList
})(AddLaboratoryScreen)
