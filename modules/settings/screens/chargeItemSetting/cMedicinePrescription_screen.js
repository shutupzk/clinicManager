import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
// import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, completeBodySign, completePreMedicalRecord, completePreDiagnosis } from '../../../../ducks'
import { ClinicDrugList, queryDrugClassList, ClinicDrugOnOff, ClinicDrugBatchSetting } from '../../../../ducks'
import { PageCard, Select, Confirm } from '../../../../components'
import AddCDrugScreen from './components/addCDrugScreen'
import { formatMoney } from '../../../../utils'
// import { CompleteHealth, PatientCard, ChooseDoctor } from '../../components'

class CMedicinePrescriptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugClassification: [],
      selDrugType: 0,
      pageType: 1,
      keyword: '',
      status: '',
      type: 1,
      showWay: 1,
      clinic_drug_id: '',
      checkedArray: [],
      showType: 0,
      is_discount: true,
      day_warning: 0
    }
  }

  componentWillMount() {
    this.getDrugsList({ offset: 0, limit: 10 })
  }

  showView() {
    let { pageType, showWay, clinic_drug_id, drugInfo } = this.state
    // const { clinic_id } = this.props
    let map = {
      // 1: <AddDrugScreen />,
      2: (
        <AddCDrugScreen
          // drug_class_id={drug_class_id}
          showWay={showWay}
          clinic_drug_id={clinic_drug_id}
          drugInfo={drugInfo}
          drugType={1}
          back2List={() => {
            this.setState({ pageType: 1 })
            this.getDrugsList({ offset: 0, limit: 10 })
          }}
        />
      )
    }
    return map[pageType] || null
  }
  // 获取药品列表
  getDrugsList({ offset = 0, limit = 10 }) {
    const { clinic_id, ClinicDrugList } = this.props
    const { status, keyword } = this.state
    ClinicDrugList({ clinic_id, type: 1, keyword, offset, limit, status })
  }
  // 状态筛选
  getStatusOptions() {
    return [{ value: -1, label: '全部' }, { value: true, label: '正常' }, { value: false, label: '停用' }]
  }
  // 加载右侧表格
  renderRightTable() {
    const {showType} = this.state
    return (
      <div className={'contentCenterRight'} style={{ marginLeft: '0' }}>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <input
              placeholder={'处方医嘱名称或条形码'}
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <div style={{ width: '100px', marginLeft: '10px' }}>
              <Select
                placeholder={'状态'}
                height={32}
                options={this.getStatusOptions()}
                onChange={({ value }) => {
                  this.setState({ status: value })
                }}
              />
            </div>
            <button
              onClick={() => {
                this.getDrugsList({ offset: 0, limit: 10 })
              }}
            >
              查询
            </button>
          </div>
          <div className={'rightTopFilterRight'}>
            <button>批量导入</button>
            <button>导出</button>
            <button
              onClick={() => {
                this.setState({ pageType: 2 })
              }}
            >
              新建
            </button>
          </div>
        </div>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <button onClick={() => {
              this.batchSetting(1)
            }}>批量设置折扣</button>
            <button onClick={() => {
              this.batchSetting(2)
            }}>批量设置有效期限</button>
          </div>
        </div>
        <div className={'contentTable'}>{this.renderTable()}</div>
        {showType === 1 ? this.renderBatchDiscount() : ''}
        {showType === 2 ? this.renderBatchDayWarning() : ''}
        <style jsx='true'>{`
          .contentCenterRight {
            width: 100%;
            height: 768px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
          }
          .rightTopFilter {
            height: 32px;
            margin: 24px 32px 0 32px;
            display: flex;
            // background:#a0a0a0;
          }
          .rightTopFilter button {
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
          .rightTopFilter button:first-child {
            margin-left: 0;
          }
          .rightTopFilter button:hover {
            background: rgba(42, 205, 200, 1);
            color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(42, 205, 200, 1);
          }
          .rightTopFilterLeft {
            flex: 8;
            display: flex;
          }
          .rightTopFilterLeft > input {
            width: 200px;
            height: 30px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            padding: 0;
            border: 1px solid #d9d9d9;
          }
          .rightTopFilterLeft > button {
          }
          .rightTopFilterRight {
            display: flex;
          }
          .rightTopFilterRight button {
          }
          .contentTable {
            margin: 18px 32px;
            // background:#b0b0b0;
          }
        `}</style>
      </div>
    )
  }
  batchBoxStyle() {
    return (
      <style jsx='1'>{`
        .batchBox{
          background: rgba(255,255,255,1);
          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2);
          position: absolute;
          width: 330px;
          height: 200px;
        }
        .boxBody{
          display:flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .boxBody ul{
          margin: 40px 0;
          width: 100%;
        }
        .boxBody ul li{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .boxBody ul li span{
          margin-right: 20px;
        }
        .boxBody ul li label{
          margin-right: 10px
        }
      `}</style>
    )
  }
  // 批量设置折扣
  renderBatchDiscount() {
    const {is_discount} = this.state
    return (
      <div className={'mask'}>
        <div className={'batchBox'}>
          <div className={'healthFile_top'}>
            <span>批量设置折扣</span>
            <span onClick={() => this.setState({showType: 0})}>×</span>
          </div>
          <div className={'boxBody'}>
            <ul>
              <li>
                <span>是否允许折扣</span>
                <label>
                  <input
                    type={'radio'}
                    name={'is_discount'}
                    checked={is_discount}
                    onChange={e => {
                      if (e.target.checked) {
                        this.setState({is_discount: true})
                      }
                    }}
                  />是
                </label>
                <label>
                  <input
                    type={'radio'}
                    name={'is_discount'}
                    onChange={e => {
                      if (e.target.checked) {
                        this.setState({is_discount: false})
                      }
                    }}
                  />否
                </label>
              </li>
            </ul>
            <div className={'maskBoxBottom'}>
              <button onClick={() => this.setState({showType: 0})}>取消</button>
              <button onClick={() => {
                this.ClinicDrugBatchSetting(1)
              }}>确认</button>
            </div>
          </div>
        </div>
        {this.batchBoxStyle()}
      </div>
    )
  }
  // 批量设置有效期
  renderBatchDayWarning() {
    return (
      <div className={'mask'}>
        <div className={'batchBox'}>
          <div className={'healthFile_top'}>
            <span>批量设置效期预警时间</span>
            <span onClick={() => this.setState({showType: 0})}>×</span>
          </div>
          <div className={'boxBody'}>
            <ul>
              <li>
                <input type={'number'}
                  onChange={e => {
                    this.setState({day_warning: e.target.value})
                  }}
                />天
              </li>
            </ul>
            <div className={'maskBoxBottom'}>
              <button onClick={() => this.setState({showType: 0})}>取消</button>
              <button onClick={() => {
                this.ClinicDrugBatchSetting(2)
              }}>确认</button>
            </div>
          </div>
        </div>
        {this.batchBoxStyle()}
      </div>
    )
  }
  // 批量设置方法
  async ClinicDrugBatchSetting(type) {
    const {ClinicDrugBatchSetting, pageInfo} = this.props
    const {day_warning, is_discount, checkedArray} = this.state
    let items = []
    for (let item of checkedArray) {
      let key = {
        clinic_drug_id: item.clinic_drug_id + ''
      }
      items.push(key)
    }
    let requestData = {
      items: JSON.stringify(items)
    }
    if (type === 1) {
      requestData.is_discount = is_discount
    } else {
      requestData.day_warning = day_warning
    }
    // console.log('requestData====', requestData)
    let error = await ClinicDrugBatchSetting(requestData)
    if (error) {
      this.refs.myAlert.alert('批量设置失败！', error)
    } else {
      this.getDrugsList({offset: pageInfo.offset, limit: pageInfo.limit})
      this.setState({showType: 0, is_discount: true, day_warning: 0})
    }
  }
  // 批量设置
  batchSetting(type) {
    const {checkedArray} = this.state
    if (checkedArray.length > 0) {
      if (type === 1) {
        this.setState({showType: 1})
      } else {
        this.setState({showType: 2})
      }
    } else {
      this.refs.myAlert.alert('请选择至少一条要设置的数据！')
    }
  }
  async ClinicDrugOnOff(clinic_drug_id, status) {
    const {clinic_id, ClinicDrugOnOff, pageInfo} = this.props
    const {drug_class_id} = this.state
    const drugInfo = {
      clinic_drug_id,
      clinic_id,
      status
    }
    let error = await ClinicDrugOnOff(drugInfo)
    if (error) {
      this.refs.myAlert.alert('更新失败', error)
    } else {
      this.getDrugsList({ offset: pageInfo.offset, limit: pageInfo.limit, drug_class_id })
    }
  }
  // 设置选中表格行
  setChecked(item, isCheck) {
    let {checkedArray} = this.state
    if (isCheck) {
      if (checkedArray.indexOf(item) === -1) {
        checkedArray.push(item)
      }
    } else {
      for (let i = 0; i < checkedArray.length; i++) {
        if (item.clinic_drug_id === checkedArray[i].clinic_drug_id) {
          checkedArray.splice(i, 1)
        }
      }
    }
    this.setState({checkedArray})
  }
  // 加载表格
  renderTable() {
    const { drugs, pageInfo } = this.props
    const {checkedArray} = this.state
    // console.log('drugs=====', drugs, checkedArray)
    let allCheck = false
    if (checkedArray.length === drugs.length) {
      for (let key of drugs) {
        for (let check of checkedArray) {
          if (key.clinic_drug_id === check.clinic_drug_id) {
            allCheck = true
          }
        }
      }
    }
    return (
      <div className={'tableContent'}>
        <table>
          <thead>
            <tr>
              <td style={{ flex: 0.3 }}>
                <input
                  type={'checkbox'}
                  checked={allCheck}
                  onChange={e => {
                    if (e.target.checked) {
                      for (let key of drugs) {
                        this.setChecked(key, true)
                      }
                    } else {
                      this.setState({checkedArray: []})
                    }
                  }}
                />
              </td>
              <td style={{ flex: 2 }}>处方医嘱名称</td>
              <td>规格</td>
              <td>包装单位</td>
              <td>零售价</td>
              <td>拼音缩写</td>
              <td>允许折扣</td>
              <td>备注</td>
              <td>状态</td>
              <td style={{ flex: 1.5 }}>操作</td>
            </tr>
          </thead>
          <tbody>
            {drugs.map((item, index) => {
              let check = false
              for (let key of checkedArray) {
                if (item.clinic_drug_id === key.clinic_drug_id) {
                  check = true
                }
              }
              return (
                <tr key={index}>
                  <td style={{ flex: 0.3 }}>
                    <input
                      type={'checkbox'}
                      checked={check}
                      onChange={e => {
                        if (e.target.checked) {
                          this.setChecked(item, true)
                        } else {
                          this.setChecked(item, false)
                        }
                      }}
                    />
                  </td>
                  <td style={{ flex: 2 }}>{item.drug_name}</td>
                  <td>{item.specification}</td>
                  <td>{item.packing_unit_name}</td>
                  <td>{formatMoney(item.ret_price)}元</td>
                  <td>{item.py_code}</td>
                  <td>{item.is_discount ? '是' : '否'}</td>
                  <td title={item.illustration}>{item.illustration}</td>
                  <td>{item.status ? '正常' : '停用'}</td>
                  <td style={{ flex: 1.5 }} className={'operTd'}>
                    <div>
                      <div onClick={() => {
                        this.setState({
                          pageType: 2,
                          clinic_drug_id: item.clinic_drug_id,
                          showWay: 2,
                          drugInfo: item
                        })
                      }}>修改</div>
                      <div className={'divideLine'}>|</div>
                      <div onClick={() => {
                        let status = item.status
                        if (status) {
                          status = false
                        } else {
                          status = true
                        }
                        this.ClinicDrugOnOff(item.clinic_drug_id, status)
                      }}>{item.status ? '停用' : '启用'}</div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <PageCard
          offset={pageInfo.offset}
          limit={pageInfo.limit}
          total={pageInfo.total}
          style={{ margin: '20px 0', width: '100%' }}
          onItemClick={({ offset, limit }) => {
            // const keyword = this.state.keyword
            this.getDrugsList({ offset, limit })
          }}
        />
        <Confirm ref='myAlert' />
        <style jsx='true'>{`
          .tableContent {
          }
          .tableContent table {
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top: 1px solid #e8e8e8;
          }
          .tableContent table thead {
            background: rgba(250, 250, 250, 1);
            box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
          }
          .tableContent table tr {
            height: 40px;
            display: flex;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td {
            border-left: 1px solid #e8e8e8;
            height: 40px;
            // display: flex;
            align-items: center;
            flex: 1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd > div {
            margin: 0 auto;
            width: max-content;
          }
          .operTd > div > div {
            cursor: pointer;
            color: #2acdc8;
            float: left;
          }
          .operTd > div > div.divideLine {
            cursor: default;
            color: #e8e8e8;
            margin: 0 5px;
          }
        `}</style>
      </div>
    )
  }
  // 显示列表信息
  renderList() {
    return (
      <div className={'contentCenter'}>
        {/* {this.renderLeftTree()} */}
        {this.renderRightTable()}
        <style jsx='true'>{`
          .contentCenter {
            // background:#a0a0a0;
            display: flex;
          }
        `}</style>
      </div>
    )
  }
  render() {
    const { pageType } = this.state
    return (
      <div className={'boxContent'}>
        <div className={'topTitle'}>
          <span>中药处方医嘱</span>
          {pageType === 1 ? (
            ''
          ) : (
            <div className='back2List' onClick={() => this.setState({ pageType: 1 })}>
              {'<返回'}
            </div>
          )}
        </div>
        {pageType === 1 ? this.renderList() : this.showView()}
        <style jsx='true'>{`
          .boxContent {
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin: 0 20px;
            min-width: 1165px;
          }
          .topTitle {
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            margin: 26px 5px;
            height: 20px;
            line-height: 20px;
            display: flex;
          }
          .topTitle span {
            flex: 9;
          }
          .back2List {
            flex: 1;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    drugs: state.drugs.data,
    pageInfo: state.drugs.page_info
  }
}

export default connect(mapStateToProps, {
  ClinicDrugList,
  queryDrugClassList,
  ClinicDrugOnOff,
  ClinicDrugBatchSetting
})(CMedicinePrescriptionScreen)
