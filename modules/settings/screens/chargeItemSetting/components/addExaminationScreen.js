import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { examinationCreate, queryDoseUnitList, queryExaminationOrganList, queryExams } from '../../../../../ducks'
import { limitMoney } from '../../../../../utils'

// 病历
class AddExaminationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      examinationInfo: {
        status: true,
        is_discount: false,
        unit_name: '项'
      },
      selOrgans: [],
      showType: false,
      showSearch: false
    }
  }

  async componentWillMount() {
    this.getExaminationOrgansList('')
  }

  style() {
    return (
      <style jsx={'1'}>{`
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
          width: 100px;
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
    const { showType } = this.state
    return (
      <div className={'contentCenter'}>
        {this.renderBaseInfoBlank()}
        {showType ? this.chooseOrgan() : ''}
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button
              onClick={() => {
                this.submit()
              }}
            >
              保存
            </button>
          </div>
        </div>
        {this.style()}
      </div>
    )
  }
  // 验证字段
  validateData(data) {
    if (!data.name || data.name === '') {
      this.setState({ nameFailed: true })
      // alert(1)
      return false
    }
    if (!data.unit_name || data.unit_name === '') {
      this.setState({ unit_nameFailed: true })
      // alert(2)
      return false
    }
    if (!data.price || data.price === '') {
      this.setState({ priceFailed: true })
      // alert(2)
      return false
    }
    return true
  }
  // 保存
  async submit() {
    let { examinationInfo } = this.state
    const { clinic_id, examinationCreate } = this.props
    examinationInfo.clinic_id = clinic_id
    // let requestData = {...examinationInfo}
    // requestData.items = JSON.stringify(requestData.items)
    // console.log('this.validateData(examinationInfo)=====', this.validateData(examinationInfo))
    if (this.validateData(examinationInfo)) {
      let error = await examinationCreate(examinationInfo)
      if (error) {
        alert(error)
        this.setState({ examinationInfo })
      } else {
        this.props.back2List()
      }
    }
    // alert(0)
  }
  // 保存并入库
  saveInStock() {}
  // 设置字段值
  setItemValue(e, key, type = 1) {
    const { examinationInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    examinationInfo[key] = value
    this.setState({ examinationInfo })
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

  // 获取部位数据
  getExaminationOrgansList(keyword) {
    const { queryExaminationOrganList } = this.props
    queryExaminationOrganList({ keyword, limit: 1000 }, true)
  }

  searchView() {
    const exams = this.props.exams || []
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
        <span>请选择患者或继续新增</span>
        <ul>
          {exams.map(({ id, name, py_code }, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.setItemValue(name, 'name', 2)
                  this.setItemValue(py_code, 'py_code', 2)
                  this.setItemValue(id, 'examination_id', 2)
                  this.setState({ searchView: 0 })
                }}
              >
                <div className={'leftInfo'}>
                  <div />
                  <div>
                    {name}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // 检验项目基本信息
  renderBaseInfoBlank() {
    const { examinationInfo } = this.state
    // console.log('examinationInfo=======', examinationInfo)
    return (
      <div className={'commonBlank baseInfoBlank'}>
        <span />
        <div>
          <ul>
            <li style={{ position: 'relative' }}>
              <label>
                检查医嘱名称<b style={{ color: 'red' }}>*</b>
              </label>
              <input
                type='text'
                placeholder={'name'}
                value={examinationInfo.name}
                onChange={e => {
                  this.setItemValue(e, 'name')
                  let keyword = e.target.value
                  this.props.queryExams({ keyword })
                  this.setState({ searchView: 1 })
                }}
                onFocus={e => {
                  this.setState({ toSearch: true })
                }}
                onBlur={e => {
                  if (this.state.toSearch && this.state.searchView === 1) {
                    this.setState({ searchView: 0 })
                  }
                }}
              />
              {this.state.searchView === 1 ? this.searchView() : ''}
              {this.state.nameFailed || examinationInfo.name === '' || !examinationInfo.name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>英文名称</label>
              <input
                type='text'
                placeholder={'en_name'}
                value={examinationInfo.en_name}
                onChange={e => {
                  this.setItemValue(e, 'en_name')
                }}
              />
            </li>
            <li>
              <label>
                单位<b style={{ color: 'red' }}>*</b>
              </label>
              <div>{examinationInfo.unit_name}</div>
            </li>
            <li>
              <label>
                零售价<b style={{ color: 'red' }}>*</b>
              </label>
              <div>
                <input
                  type='text'
                  placeholder={'price'}
                  value={examinationInfo.price}
                  onChange={e => {
                    let value = limitMoney(e.target.value)
                    this.setItemValue(value, 'price', 2)
                  }}
                />
              </div>
              {this.state.priceFailed || examinationInfo.price === '' || !examinationInfo.price ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
            </li>
            <li>
              <label>成本价</label>
              <div>
                <input
                  type='text'
                  placeholder={'cost'}
                  value={examinationInfo.cost}
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
                  value={examinationInfo.py_code}
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
                  value={examinationInfo.remark}
                  onChange={e => {
                    this.setItemValue(e, 'remark')
                  }}
                />
              </div>
            </li>
            <li style={{ width: '39%' }}>
              <label>可选部位</label>
              <div style={{ display: 'flex' }}>
                <input
                  style={{ flex: 1 }}
                  type='text'
                  placeholder={'选择部位'}
                  value={examinationInfo.organ}
                  onChange={e => {
                    this.setItemValue(e, 'organ')
                  }}
                />
                <button onClick={() => this.setState({ showType: true })}>选择部位</button>
                {/* <Select
                  placeholder={'请选择'}
                  height={32}
                  options={this.getExaminationOrgansOptions()}
                  value={this.getSelectValue(examinationInfo.organ, this.getExaminationOrgansOptions())}
                  onInputChange={keyword => { this.getExaminationOrgansList(keyword) }}
                  onChange={({value}) => {
                    this.setItemValue(value, 'organ', 2)
                  }}
                /> */}
              </div>
            </li>
            <li>
              <label>国际编码</label>
              <div>
                <input
                  type='text'
                  placeholder={'idc_code'}
                  value={examinationInfo.idc_code}
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
                    checked={examinationInfo.is_discount}
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
                    checked={!examinationInfo.is_discount}
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
                    checked={examinationInfo.status}
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
                    checked={!examinationInfo.status}
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
  // 选择部位
  chooseOrgan() {
    const {examinationOrgans} = this.props
    const organs = examinationOrgans || []
    let { selOrgans } = this.state
    console.log('selOrgans====', selOrgans)
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>检查部位</span>
            <div />
            <span onClick={() => this.setState({ showType: false })}>×</span>
          </div>
          <div className={'contentList'}>
            <ul>
              {organs.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        type='checkbox'
                        checked={selOrgans.indexOf(name) > -1}
                        onChange={e => {
                          if (e.target.checked) {
                            selOrgans.push(name)
                            this.setState({ selOrgans })
                          } else {
                            // let array = selOrgans
                            for (let i = 0; i < selOrgans.length; i++) {
                              if (selOrgans[i] === name) {
                                selOrgans.splice(i, 1)
                              }
                            }
                            this.setState({ selOrgans })
                          }
                        }}
                      />
                      {name}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'buttonBtn'}>
            <button onClick={() => this.setState({ showType: false })}>取消</button>
            <button
              onClick={() => {
                let organ = ''
                for (let i = 0; i < selOrgans.length; i++) {
                  if (i < selOrgans.length - 1) {
                    organ += selOrgans[i] + '，'
                  } else {
                    organ += selOrgans[i]
                  }
                }
                this.setItemValue(organ, 'organ', 2)
                this.setState({ showType: false })
              }}
            >
              确定
            </button>
          </div>
        </div>
        <style jsx>{`
          .contentList {
            width: 100%;
            height: 500px;
            // background: #a0a0a0;
            display: flex;
          }
          .contentList ul {
            width: 90%;
            margin: 10px auto;
          }
          .contentList ul li {
            float: left;
            width: 50%;
            font-size: 16px;
            // cursor: pointer;
            margin: 10px 0 0 0;
          }
          .contentList ul li label {
            cursor: pointer;
          }
          .contentList ul li input {
          }
          .buttonBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    examinationOrgans: state.examinationOrgans.array_data,
    exams: state.examinations.exams
  }
}

export default connect(mapStateToProps, {
  examinationCreate,
  queryDoseUnitList,
  queryExaminationOrganList,
  queryExams
})(AddExaminationScreen)
