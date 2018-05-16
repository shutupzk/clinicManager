import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select } from '../../../../../components'
import {
  laboratoryItemCreate,
  queryDoseUnitList
} from '../../../../../ducks'

// 病历
class AddLaboratoryItemScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laboratoryItemInfo: {
        data_type: 2,
        status: false,
        items: []
      },
      references: []
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
      // this.setState({nameFailed: false})
    }
    if (!data.unit_id || data.unit_id === '') {
      this.setState({unit_idFailed: true})
      // alert(2)
      return false
    } else {
      // this.setState({unit_idFailed: false})
    }
    return true
  }
  // 保存
  async submit() {
    let {laboratoryItemInfo} = this.state
    const {clinic_id, laboratoryItemCreate} = this.props
    laboratoryItemInfo.clinic_id = clinic_id
    // console.log('this.validateData(laboratoryItemInfo)=====', this.validateData(laboratoryItemInfo))
    if (this.validateData(laboratoryItemInfo)) {
      let error = await laboratoryItemCreate(laboratoryItemInfo)
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
    const {laboratoryItemInfo} = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    laboratoryItemInfo[key] = value
    this.setState({laboratoryItemInfo})
  }
  setChildrenItemValue(e, index, key, type = 1) {
    const { laboratoryItemInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = laboratoryItemInfo.items // [...references]
    array[index][key] = value
    laboratoryItemInfo.items = array
    this.setState({ laboratoryItemInfo })
  }
  addColumn() {
    const { laboratoryItemInfo } = this.state
    laboratoryItemInfo.items.push({})
    this.setState({ laboratoryItemInfo })
    // this.setState({ references: [...references, {}] })
  }

  removeColumn(index) {
    const { laboratoryItemInfo } = this.state
    let array = laboratoryItemInfo.items // [...references]
    array.splice(index, 1)
    laboratoryItemInfo.items = array
    this.setState({ laboratoryItemInfo })
  }
  // 设置选中显示
  getSelectValue(value, array) {
    for (let obj of array) {
      // console.log('obj.value======', obj.value, value)
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  // 性别筛选
  getSexOptions() {
    return [
      {value: '通用', label: '通用'},
      {value: '男', label: '男'},
      {value: '女', label: '女'}
    ]
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
  // 获取单位数据
  getDoseUnitList(keyword) {
    const { queryDoseUnitList } = this.props
    if (keyword) {
      queryDoseUnitList({ keyword })
    }
  }
  // 检验项目基本信息
  renderBaseInfoBlank() {
    const {laboratoryItemInfo} = this.state
    console.log('laboratoryItemInfo=======', laboratoryItemInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li>
              <label>检验项目名称<b style={{color: 'red'}}>*</b></label>
              <input
                type='text'
                placeholder={'name'}
                value={laboratoryItemInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                }}
              />
              {this.state.nameFailed || laboratoryItemInfo.name === '' || !laboratoryItemInfo.name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>英文名称</label>
              <input
                type='text'
                placeholder={'en_name'}
                value={laboratoryItemInfo.en_name}
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
                  value={this.getSelectValue(laboratoryItemInfo.unit_id, this.getMiniUnitOptions())}
                  onInputChange={keyword => { this.getDoseUnitList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'unit_id', 2)
                  }}
                />
              </div>
              {this.state.unit_idFailed || laboratoryItemInfo.unit_id === '' || !laboratoryItemInfo.unit_id ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''}
            </li>
            <li>
              <label>仪器编码</label>
              <div>
                <input
                  type='text'
                  placeholder={'instrument_code'}
                  value={laboratoryItemInfo.instrument_code}
                  onChange={e => {
                    this.setItemValue(e, 'instrument_code')
                  }}
                />
              </div>
            </li>
            <li>
              <label>数据类型<b style={{color: 'red'}}>*</b></label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'data_type'}
                    checked={laboratoryItemInfo.data_type === 2}
                    onChange={e => {
                      this.setItemValue(2, 'data_type', 2)
                      delete laboratoryItemInfo.reference_max
                      delete laboratoryItemInfo.reference_min
                      if (laboratoryItemInfo.items) {
                        for (let i = 0; i < laboratoryItemInfo.items.length; i++) {
                          delete laboratoryItemInfo.items[i].reference_max
                          delete laboratoryItemInfo.items[i].reference_min
                        }
                      }
                    }}
                  />
                  定量
                </label>
                <label>
                  <input
                    type='radio'
                    name={'data_type'}
                    checked={laboratoryItemInfo.data_type === 1}
                    onChange={e => {
                      this.setItemValue(1, 'data_type', 2)
                      delete laboratoryItemInfo.reference_value
                      if (laboratoryItemInfo.items) {
                        for (let i = 0; i < laboratoryItemInfo.items.length; i++) {
                          delete laboratoryItemInfo.items[i].reference_value
                        }
                      }
                    }}
                  />
                  定性
                </label>
              </div>
            </li>
            {!laboratoryItemInfo.is_special ? <li>
              <label>参考值默认</label>
              {laboratoryItemInfo.data_type === 2 ? <div className={'douInput'}>
                <input
                  type='number'
                  min={0}
                  placeholder={'最小值'}
                  value={laboratoryItemInfo.reference_min}
                  onChange={e => {
                    this.setItemValue(e, 'reference_min')
                  }}
                />
                <span>—</span>
                <input
                  type='number'
                  min={0}
                  placeholder={'最大值'}
                  value={laboratoryItemInfo.reference_max}
                  onChange={e => {
                    this.setItemValue(e, 'reference_max')
                  }}
                />
              </div> : <div>
                <input
                  type='text'
                  placeholder={'阴性或阳性'}
                  value={laboratoryItemInfo.reference_value}
                  onChange={e => {
                    this.setItemValue(e, 'reference_value')
                  }}
                />
              </div>
              }
            </li> : ''}
            <li>
              <label>参考值是否特殊<b style={{color: 'red'}}>*</b></label>
              <div>
                <input
                  type='checkbox'
                  checked={laboratoryItemInfo.is_special}
                  onChange={e => {
                    // console.log('checkbox==========', e.target.checked)
                    // this.setItemValue(e.target.checked, 'is_special', 2)
                    if (e.target.checked) {
                      this.setItemValue('true', 'is_special', 2)
                      delete laboratoryItemInfo.reference_max
                      delete laboratoryItemInfo.reference_min
                      delete laboratoryItemInfo.reference_value
                      laboratoryItemInfo.items = []
                      this.setState({laboratoryItemInfo})
                    } else {
                      this.setItemValue('false', 'is_special', 2)
                      delete laboratoryItemInfo.items
                    }
                  }}
                />
              </div>
            </li>
            {laboratoryItemInfo.is_special ? <li className={'tableLi'}>{this.renderIsSpecial()}</li> : ''}
            <li>
              <label>临床意义</label>
              <input
                type='text'
                placeholder={'临床意义'}
                value={laboratoryItemInfo.clinical_significance}
                onChange={e => {
                  this.setItemValue(e, 'clinical_significance')
                }}
              />
            </li>
            <li>
              <label>状态</label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'status'}
                    checked={laboratoryItemInfo.status}
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
                    checked={!laboratoryItemInfo.status}
                    onChange={e => {
                      this.setItemValue(false, 'status', 2)
                    }}
                  />
                  停用
                </label>
              </div>
            </li>
            <li>
              <label>是否外送<b style={{color: 'red'}}>*</b></label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'is_delivery'}
                    checked={laboratoryItemInfo.is_delivery}
                    onChange={e => {
                      this.setItemValue(true, 'is_delivery', 2)
                    }}
                  />
                  是
                </label>
                <label>
                  <input
                    type='radio'
                    name={'is_delivery'}
                    checked={!laboratoryItemInfo.is_delivery}
                    onChange={e => {
                      this.setItemValue(false, 'is_delivery', 2)
                    }}
                  />
                  否
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  // 显示特殊参考值
  renderIsSpecial() {
    const { laboratoryItemInfo } = this.state
    console.log('laboratoryItemInfo=======', laboratoryItemInfo)
    let references = laboratoryItemInfo.items || []
    return (
      <div>
        <ul>
          <li>
            <div>性别</div>
            <div>年龄</div>
            <div>参考值</div>
            <div onClick={() => this.addColumn()} style={{color: 'green', cursor: 'pointer'}}>增加</div>
          </li>
          {references.map((item, index) => {
            return (
              <li>
                <div>
                  <div>
                    <Select
                      placeholder={'性别'}
                      height={30}
                      value={this.getSelectValue(item.reference_sex, this.getSexOptions())}
                      options={this.getSexOptions()}
                      onChange={({value, label}) => {
                        this.setChildrenItemValue(label, index, 'reference_sex', 2)
                        // this.setChildrenItemValue(value, index, 'reference_sex_id', 2)
                        if (value !== '女') {
                          delete item.is_pregnancy
                          this.setState({laboratoryItemInfo})
                        }
                      }}
                    />
                  </div>
                  {item.reference_sex === '女' ? <div>
                    <label>
                      <input
                        type='checkbox'
                        checked={item.is_pregnancy}
                        onChange={e => {
                          this.setChildrenItemValue(e.target.checked, index, 'is_pregnancy', 2)
                          // console.log('checkbox==========', e.target.checked)
                          // this.setItemValue(e.target.checked, 'is_special', 2)
                        }}
                      />妊娠期
                    </label>
                  </div> : ''}
                </div>
                <div>
                  <div className={'douInput'}>
                    <input
                      type='number'
                      min={0}
                      placeholder={'最小年龄'}
                      value={item.age_min}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'age_min')
                        // this.setItemValue(e, 'reference_min')
                      }}
                    />
                    <span>—</span>
                    <input
                      type='number'
                      min={0}
                      placeholder={'最大年龄'}
                      value={item.age_max}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'age_max')
                        // this.setItemValue(e, 'reference_min')
                      }}
                    />
                  </div>
                </div>
                <div>
                  {laboratoryItemInfo.data_type === 2 ? <div className={'douInput'}>
                    <input
                      type='number'
                      min={0}
                      placeholder={'最小值'}
                      value={item.reference_min}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'reference_min')
                        // this.setItemValue(e, 'reference_min')
                      }}
                    />
                    <span>—</span>
                    <input
                      type='number'
                      min={0}
                      placeholder={'最大值'}
                      value={item.reference_max}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'reference_max')
                        // this.setItemValue(e, 'reference_max')
                      }}
                    />
                  </div> : <div>
                    <input
                      type='text'
                      placeholder={'阴性或阳性'}
                      value={item.reference_value}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'reference_value')
                        // this.setItemValue(e, 'reference_value')
                      }}
                    />
                  </div>
                  }
                </div>
                <div onClick={() => { this.removeColumn(index) }} style={{color: 'red', cursor: 'pointer'}}>删除</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data
  }
}

export default connect(mapStateToProps, {
  laboratoryItemCreate,
  queryDoseUnitList
})(AddLaboratoryItemScreen)
