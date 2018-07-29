import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select, Confirm } from '../../../../../components'
import {
  laboratoryCreate,
  queryDoseUnitList,
  queryLaboratorySampleList,
  queryCuvetteColorList,
  queryLaboList,
  LaboratoryDetail,
  LaboratoryUpdate
} from '../../../../../ducks'
import { limitMoney, formatMoney } from '../../../../../utils'

// 病历
class AddLaboratoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laboratoryInfo: {
        is_discount: false,
        is_delivery: false,
        status: true,
        unit_name: '项'
      },
      searchView: 0,
      toSearch: false
    }
  }

  async componentDidMount() {
    const {showWay, clinic_laboratory_id, LaboratoryDetail} = this.props
    if (showWay === 2) {
      let data = await LaboratoryDetail({clinic_laboratory_id})
      if (data) {
        console.log('LaboratoryDetail=====', data)
        data.price = formatMoney(data.price)
        if (data.cost !== null) {
          data.cost = formatMoney(data.cost)
        }
        this.setState({laboratoryInfo: data})
      }
    }
  }

  render() {
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.props.back2List()}>取消</button>
            <button onClick={() => {
              if (showWay === 2) {
                this.LaboratoryUpdate()
              } else {
                this.submit()
              }
            }}>保存</button>
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
      this.setState({ nameFailed: true })
      // alert(1)
      return false
    } else {
      this.setState({ nameFailed: false })
    }
    if (!data.unit_name || data.unit_name === '') {
      this.setState({ unit_nameFailed: true })
      // alert(2)
      return false
    } else {
      this.setState({ unit_nameFailed: false })
    }
    if (!data.price || data.price === '') {
      this.setState({ priceFailed: true })
      // alert(4)
      return false
    } else {
      this.setState({ priceFailed: false })
    }
    if (!data.laboratory_sample || data.laboratory_sample === '') {
      this.setState({ laboratory_sampleFailed: true })
      // alert(6)
      return false
    } else {
      this.setState({ laboratory_sampleFailed: false })
    }
    if (!data.cuvette_color_name || data.cuvette_color_name === '') {
      this.setState({ cuvette_color_nameFailed: true })
      // alert(7)
      return false
    } else {
      this.setState({ cuvette_color_nameFailed: false })
    }
    return true
  }
  // 保存
  async submit() {
    let { laboratoryInfo } = this.state
    const { clinic_id, laboratoryCreate } = this.props
    laboratoryInfo.clinic_id = clinic_id
    if (this.validateData(laboratoryInfo)) {
      let error = await laboratoryCreate(laboratoryInfo)
      if (error) {
        alert(error)
      } else {
        this.props.back2List()
      }
    }
  }
  // 修改
  async LaboratoryUpdate() {
    let { laboratoryInfo } = this.state
    const { clinic_id, LaboratoryUpdate } = this.props
    laboratoryInfo.clinic_id = clinic_id
    console.log('laboratoryInfo=====', laboratoryInfo)
    if (this.validateData(laboratoryInfo)) {
      let error = await LaboratoryUpdate(laboratoryInfo)
      if (error) {
        alert(error)
      } else {
        this.props.back2List()
      }
    }
  }
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const { laboratoryInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    laboratoryInfo[key] = value
    this.setState({ laboratoryInfo })
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
  // 单位筛选
  getMiniUnitOptions() {
    const { doseUnits } = this.props
    let array = []
    for (let key in doseUnits) {
      const { name } = doseUnits[key]
      array.push({
        value: name,
        label: name,
        ...doseUnits[key]
      })
    }
    return array
  }
  getLaboratorySampleIdOptions() {
    const { laboratorySamples } = this.props
    let array = []
    for (let key in laboratorySamples) {
      const { name } = laboratorySamples[key]
      array.push({
        value: name,
        label: name,
        ...laboratorySamples[key]
      })
    }
    return array
  }
  getCuvetteColorIdOptions() {
    const { cuvetteColors } = this.props
    let array = []
    for (let key in cuvetteColors) {
      const { name } = cuvetteColors[key]
      array.push({
        value: name,
        label: name,
        ...cuvetteColors[key]
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
  getLaboratorySampleList(keyword) {
    const { queryLaboratorySampleList } = this.props
    if (keyword) {
      queryLaboratorySampleList({ keyword })
    }
  }
  getCuvetteColorList(keyword) {
    const { queryCuvetteColorList } = this.props
    if (keyword) {
      queryCuvetteColorList({ keyword })
    }
  }
  async queryLaboList(keyword) {
    const { queryLaboList } = this.props
    queryLaboList({ keyword })
  }
  searchView() {
    const { labos } = this.props
    let { laboratoryInfo } = this.state
    return (
      <div
        className={'researchView'}
        onMouseOver={e => {
          this.setState({ toSearch: false })
        }}
        onMouseLeave={e => {
          this.setState({ toSearch: true })
        }}
      >
        <span>请选择检验医嘱或继续新增</span>
        <ul>
          {labos.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  const { name, laboratory_sample, clinical_significance, cuvette_color_name, en_name, idc_code, py_code, remark, time_report } = item
                  let obj = { name }
                  if (laboratory_sample) obj.laboratory_sample = laboratory_sample
                  if (clinical_significance) obj.clinical_significance = clinical_significance
                  if (cuvette_color_name) obj.cuvette_color_name = cuvette_color_name
                  if (en_name) obj.en_name = en_name
                  if (idc_code) obj.idc_code = idc_code
                  if (py_code) obj.py_code = py_code
                  if (remark) obj.remark = remark
                  if (time_report) obj.time_report = time_report
                  this.setState({
                    toSearch: false,
                    searchView: 0,
                    laboratoryInfo: { ...laboratoryInfo, ...obj }
                  })
                }}
              >
                <div className={'leftInfo'}>
                  <div>{item.name}</div>
                  {/* <div>{item.phone}</div> */}
                </div>
              </li>
            )
          })}
        </ul>
        <style jsx='true'>{`
          .researchView {
            width: 100%;
          }
          .researchView li {
            height: 30px;
          }
          .researchView li:hover {
            background: #d8d8d8;
          }
        `}</style>
      </div>
    )
  }
  // 药品基本信息
  renderBaseInfoBlank() {
    const { laboratoryInfo } = this.state
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li style={{ position: 'relative' }}>
              <label>
                通用名<b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                placeholder={'name'}
                value={laboratoryInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                  this.setState({ searchView: 1 })
                  this.queryLaboList(e.target.value)
                }}
                onFocus={e => {
                  this.setState({ toSearch: true, searchView: 1 })
                }}
                onBlur={e => {
                  if (this.state.toSearch && this.state.searchView === 1) {
                    this.setState({ searchView: 0 })
                  }
                }}
              />
              {this.state.searchView === 1 ? this.searchView() : ''}
              {this.state.nameFailed || laboratoryInfo.name === '' || !laboratoryInfo.name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
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
              <label>单位</label>
              <input
                readOnly
                type='text'
                placeholder={'unit_name'}
                value={laboratoryInfo.unit_name}
                onChange={e => {
                  this.setItemValue(e, 'unit_name')
                }}
              />
              {/* <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(laboratoryInfo.unit_name, this.getMiniUnitOptions())}
                  onInputChange={keyword => { this.getDoseUnitList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'unit_name', 2)
                  }}
                />
              </div> */}
              {/* {this.state.unit_nameFailed || laboratoryInfo.unit_name === '' || !laboratoryInfo.unit_name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''} */}
            </li>
            <li>
              <label>
                零售价<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <input
                  type='text'
                  placeholder={'price'}
                  value={laboratoryInfo.price}
                  onChange={e => {
                    let value = limitMoney(e.target.value)
                    this.setItemValue(value, 'price', 2)
                  }}
                />元
              </div>
              {this.state.priceFailed || laboratoryInfo.price === '' || !laboratoryInfo.price ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>成本价</label>
              <div>
                <input
                  type='text'
                  placeholder={'cost'}
                  value={laboratoryInfo.cost}
                  onChange={e => {
                    let value = limitMoney(e.target.value)
                    this.setItemValue(value, 'cost', 2)
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
              <label>
                是否允许折扣<b style={{ color: 'red' }}>*</b>
              </label>
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
              <label>
                是否允许外送<b style={{ color: 'red' }}>*</b>
              </label>
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
              <label>
                标本种类<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getLaboratorySampleIdOptions()}
                  value={this.getSelectValue(laboratoryInfo.laboratory_sample, this.getLaboratorySampleIdOptions())}
                  onInputChange={keyword => {
                    this.getLaboratorySampleList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'laboratory_sample', 2)
                  }}
                />
              </div>
              {this.state.laboratory_sampleFailed || laboratoryInfo.laboratory_sample === '' || !laboratoryInfo.laboratory_sample ? (
                <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div>
              ) : (
                ''
              )}
            </li>
            <li>
              <label>
                试管颜色<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getCuvetteColorIdOptions()}
                  value={this.getSelectValue(laboratoryInfo.cuvette_color_name, this.getCuvetteColorIdOptions())}
                  onInputChange={keyword => {
                    this.getCuvetteColorList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'cuvette_color_name', 2)
                  }}
                />
              </div>
              {this.state.cuvette_color_nameFailed || laboratoryInfo.cuvette_color_name === '' || !laboratoryInfo.cuvette_color_name ? (
                <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div>
              ) : (
                ''
              )}
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

  style() {
    return (
      <style jsx='true'>{`
        .contentCenter {
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button {
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.65);
          padding: 0 15px;
        }
        .contentCenter button:hover {
          background: rgba(42, 205, 200, 1);
          color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(42, 205, 200, 1);
        }
        .bottomBtn {
          // background:#909090;
          width: 1098px;
          margin: 0 0 30px 0;
          display: flex;
          align-items: center;
        }
        .bottomBtn > div {
          margin: 0 auto;
        }
        .bottomBtn button {
        }
        .commonBlank {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          margin-bottom: 20px;
          // width:1038px;
          min-width: 1038px;
          display: flex;
          flex-direction: column;
          padding: 5px 30px;
        }
        .commonBlank > span {
          font-size: 18px;
          height: 40px;
          border-bottom: 1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank > div {
          display: flex;
          margin: 10px 0;
        }
        .commonBlank > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > button {
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.65);
          padding: 0 15px;
        }
        .commonBlank > div > ul {
          // background:#a0a0a0;
          margin: 0 auto;
          width: 100%;
        }
        .commonBlank > div > ul > li {
          float: left;
          width: 19%;
          display: flex;
          flex-direction: column;
          height: 70px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > label {
          height: 25px;
        }
        .commonBlank > div > ul > li > div > input,
        .commonBlank > div > ul > li > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > ul > li > div {
        }
        .commonBlank > div > ul > li > div > label {
          margin-left: 15px;
          display: flex;
          align-items: center;
          float: left;
          height: 30px;
        }
        .commonBlank > div > ul > li > div > label:first-child {
          margin-left: 0;
        }
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    laboratorySamples: state.laboratorySamples.data,
    cuvetteColors: state.cuvetteColors.data,
    labos: state.laboratories.labo_data
  }
}

export default connect(mapStateToProps, {
  laboratoryCreate,
  queryDoseUnitList,
  queryLaboratorySampleList,
  queryCuvetteColorList,
  queryLaboList,
  LaboratoryDetail,
  LaboratoryUpdate
})(AddLaboratoryScreen)
