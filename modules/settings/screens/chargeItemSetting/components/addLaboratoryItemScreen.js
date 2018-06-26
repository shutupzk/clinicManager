import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { Select, Confirm } from '../../../../../components'
import {
  laboratoryItemCreate,
  queryDoseUnitList,
  queryLaboItemsList,
  LaboratoryItemUpdate,
  LaboratoryItemDetail
} from '../../../../../ducks'
// import { limitMoney, formatMoney } from '../../../../../utils'

// 病历
class AddLaboratoryItemScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laboratoryItemInfo: {
        data_type: 2,
        status: true,
        // items: [],
        is_special: false,
        is_delivery: false
      },
      references: [],
      searchView: 0,
      toSearch: false
    }
  }

  async componentDidMount() {
    const {showWay, clinic_laboratory_item_id, LaboratoryItemDetail} = this.props
    if (showWay === 2) {
      let data = await LaboratoryItemDetail({clinic_laboratory_item_id})
      if (data) {
        console.log('LaboratoryItemDetail=====', data)
        // data.price = formatMoney(data.price)
        // if (data.cost !== null) {
        //   data.cost = formatMoney(data.cost)
        // }
        let references = []
        if (data[0].references) {
          if (!data[0].is_special) {
            data[0].reference_min = data[0].references[0].reference_min
            data[0].reference_max = data[0].references[0].reference_max
          } else {
            data[0].items = []
            for (let i = 0; i < data[0].references.length; i++) {
              data[0].items.push(data[0].references[i])
            }
          }
        }
        this.setState({laboratoryItemInfo: data[0], references})
      }
    }
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
        .commonBlank > div > ul > li > div.douInput {
          display: flex;
          align-items: center;
        }
        .commonBlank > div > ul > li > div.douInput > input {
          width: 40%;
        }
        .commonBlank > div > ul > li > div.douInput > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi {
          width: 100%;
          margin: 20px 0;
          height: auto;
        }
        .commonBlank > div > ul > li.tableLi > div {
          // background: #909090;
          float: left;
          width: 1000px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul {
          width: 100%;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li {
          display: flex;
          float: left;
          width: 100%;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li:first-child {
          background: rgba(250, 250, 250, 1);
          box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div {
          flex: 2;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float: left;
          line-height: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div:last-child {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
          width: 100%;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div.douInput {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    )
  }
  render() {
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button
              onClick={() => {
                if (showWay === 2) {
                  this.LaboratoryItemDetail()
                } else {
                  this.submit()
                }
              }}
            >
              保存
            </button>
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
      return false
    }
    return true
  }
  // 保存
  async submit() {
    let { laboratoryItemInfo } = this.state
    const { clinic_id, laboratoryItemCreate } = this.props
    laboratoryItemInfo.clinic_id = clinic_id
    let error = await laboratoryItemCreate({ requestData: { ...laboratoryItemInfo, clinic_id } })
    if (error) {
      this.refs.myAlert.alert('保存失败', error, null, 'Danger')
      this.setState({ laboratoryItemInfo })
    } else {
      this.refs.myAlert.alert('保存成功')
      this.props.back2List()
    }
  }
  async LaboratoryItemDetail() {
    let { laboratoryItemInfo } = this.state
    const { clinic_id, LaboratoryItemDetail } = this.props
    laboratoryItemInfo.clinic_id = clinic_id
    let error = await LaboratoryItemDetail({ requestData: { ...laboratoryItemInfo, clinic_id } })
    if (error) {
      this.refs.myAlert.alert('保存失败', error, null, 'Danger')
      this.setState({ laboratoryItemInfo })
    } else {
      this.refs.myAlert.alert('保存成功')
      this.props.back2List()
    }
  }
  // 保存并入库
  saveInStock() {}
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const { laboratoryItemInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    laboratoryItemInfo[key] = value
    this.setState({ laboratoryItemInfo })
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
    return [{ value: '通用', label: '通用' }, { value: '男', label: '男' }, { value: '女', label: '女' }]
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
  // 获取单位数据
  getDoseUnitList(keyword) {
    const { queryDoseUnitList } = this.props
    if (keyword) {
      queryDoseUnitList({ keyword })
    }
  }
  async queryLaboItemList(keyword) {
    const { queryLaboItemsList } = this.props
    queryLaboItemsList({ keyword })
  }
  searchView() {
    const { laboItemData } = this.props
    // console.log('laboItemData=====', laboItemData)
    let { laboratoryItemInfo } = this.state
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
        <span
          onClick={() => {
            const laboratoryItemInfo = {
              data_type: 2,
              status: true,
              is_special: false,
              name: '',
              en_name: '',
              unit_name: '',
              reference_max: '',
              reference_min: '',
              items: [],
              default_result: '',
              instrument_code: ''
            }
            this.setState({
              toSearch: false,
              searchView: 0,
              laboratoryItemInfo: laboratoryItemInfo
            })
          }}
        >
          请选择项目或点击继续新增
        </span>
        <ul>
          {laboItemData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  laboratoryItemInfo.name = item.name
                  laboratoryItemInfo.laboratory_item_id = item.laboratory_item_id
                  // laboratoryInfo.laboratory_sample = item.laboratory_sample
                  // laboratoryInfo.clinical_significance = item.clinical_significance
                  // laboratoryInfo.cuvette_color_name = item.cuvette_color_name
                  laboratoryItemInfo.unit_name = item.unit_name
                  laboratoryItemInfo.en_name = item.en_name
                  laboratoryItemInfo.is_special = item.is_special
                  laboratoryItemInfo.data_type = item.data_type
                  laboratoryItemInfo.default_result = item.default_result
                  laboratoryItemInfo.instrument_code = item.instrument_code
                  if (!item.is_special) {
                    laboratoryItemInfo.reference_max = item.references[0].reference_max
                    laboratoryItemInfo.reference_min = item.references[0].reference_min
                  } else {
                    laboratoryItemInfo.items = item.references
                  }
                  // laboratoryInfo.py_code = item.py_code
                  // laboratoryInfo.remark = item.remark
                  // laboratoryInfo.time_report = item.time_report
                  // laboratoryInfo.laboratory_id = item.id
                  // // laboratoryInfo.unit_name = item.unit_name
                  this.setState({
                    toSearch: false,
                    searchView: 0,
                    laboratoryItemInfo
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
  // 检验项目基本信息
  renderBaseInfoBlank() {
    const { laboratoryItemInfo } = this.state
    console.log('laboratoryItemInfo=======', laboratoryItemInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li style={{ position: 'relative' }}>
              <label>
                检验项目名称<b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                placeholder={'name'}
                value={laboratoryItemInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                  this.setState({ searchView: 1 })
                  this.queryLaboItemList(e.target.value)
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
              {this.state.nameFailed || laboratoryItemInfo.name === '' || !laboratoryItemInfo.name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>英文名称</label>
              <input
                type='text'
                placeholder={'en_name'}
                value={laboratoryItemInfo.en_name || ''}
                onChange={e => {
                  this.setItemValue(e, 'en_name')
                }}
              />
            </li>
            <li>
              <label>单位</label>
              <div>
                <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getMiniUnitOptions()}
                  value={this.getSelectValue(laboratoryItemInfo.unit_name, this.getMiniUnitOptions())}
                  onInputChange={keyword => {
                    this.getDoseUnitList(keyword)
                  }}
                  onChange={({ value }) => {
                    this.setItemValue(value, 'unit_name', 2)
                  }}
                />
              </div>
              {/* {this.state.unit_nameFailed || laboratoryItemInfo.unit_name === '' || !laboratoryItemInfo.unit_name ? <div style={{color: 'red', fontSize: '12px'}}>此为必填项</div> : ''} */}
            </li>
            <li>
              <label>仪器编码</label>
              <div>
                <input
                  type='text'
                  placeholder={'instrument_code'}
                  value={laboratoryItemInfo.instrument_code || ''}
                  onChange={e => {
                    this.setItemValue(e, 'instrument_code')
                  }}
                />
              </div>
            </li>
            <li>
              <label>
                数据类型<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <label>
                  <input
                    type='radio'
                    name={'data_type'}
                    checked={laboratoryItemInfo.data_type === 2}
                    onChange={e => {
                      this.setItemValue(2, 'data_type', 2)
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
                    }}
                  />
                  定性
                </label>
              </div>
            </li>
            {!laboratoryItemInfo.is_special ? (
              <li>
                <label>参考值默认</label>
                <div className={'douInput'}>
                  <input
                    type='text'
                    // min={0}
                    placeholder={'最小值'}
                    value={laboratoryItemInfo.reference_min}
                    onChange={e => {
                      this.setItemValue(e, 'reference_min')
                    }}
                  />
                  <span>—</span>
                  <input
                    type='text'
                    // min={0}
                    placeholder={'最大值'}
                    value={laboratoryItemInfo.reference_max}
                    onChange={e => {
                      this.setItemValue(e, 'reference_max')
                    }}
                  />
                </div>
              </li>
            ) : (
              ''
            )}
            <li>
              <label>
                参考值是否特殊<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <input
                  type='checkbox'
                  checked={laboratoryItemInfo.is_special}
                  onChange={e => {
                    // console.log('checkbox==========', e.target.checked)
                    this.setItemValue(e.target.checked, 'is_special', 2)
                    if (e.target.checked) {
                      // this.setItemValue('true', 'is_special', 2)
                      delete laboratoryItemInfo.reference_max
                      delete laboratoryItemInfo.reference_min
                      // delete laboratoryItemInfo.reference_value
                      laboratoryItemInfo.items = []
                      this.setState({ laboratoryItemInfo })
                    } else {
                      // this.setItemValue('false', 'is_special', 2)
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
              <label>
                是否外送<b style={{ color: 'red' }}>*</b>
              </label>
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
    // console.log('laboratoryItemInfo=======', laboratoryItemInfo)
    let references = laboratoryItemInfo.items || []
    return (
      <div>
        <ul>
          <li>
            <div>性别</div>
            <div>年龄</div>
            <div>参考值</div>
            <div onClick={() => this.addColumn()} style={{ color: 'green', cursor: 'pointer' }}>
              增加
            </div>
          </li>
          {references.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <div>
                    <Select
                      placeholder={'性别'}
                      height={30}
                      value={this.getSelectValue(item.reference_sex, this.getSexOptions())}
                      options={this.getSexOptions()}
                      onChange={({ value, label }) => {
                        this.setChildrenItemValue(label, index, 'reference_sex', 2)
                        // this.setChildrenItemValue(value, index, 'reference_sex_id', 2)
                        if (value !== '女') {
                          delete item.is_pregnancy
                          this.setState({ laboratoryItemInfo })
                        }
                      }}
                    />
                  </div>
                  {item.reference_sex === '女' ? (
                    <div>
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
                    </div>
                  ) : (
                    ''
                  )}
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
                  <div className={'douInput'}>
                    <input
                      type='text'
                      // min={0}
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
                      // min={0}
                      placeholder={'最大值'}
                      value={item.reference_max}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'reference_max')
                        // this.setItemValue(e, 'reference_max')
                      }}
                    />
                  </div>
                </div>
                <div
                  onClick={() => {
                    this.removeColumn(index)
                  }}
                  style={{ color: 'red', cursor: 'pointer' }}
                >
                  删除
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log()
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    laboItemData: state.laboratoryItems.laboItem_data
  }
}

export default connect(mapStateToProps, {
  laboratoryItemCreate,
  queryDoseUnitList,
  queryLaboItemsList,
  LaboratoryItemUpdate,
  LaboratoryItemDetail
})(AddLaboratoryItemScreen)
