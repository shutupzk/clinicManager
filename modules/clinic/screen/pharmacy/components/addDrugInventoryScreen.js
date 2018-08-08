import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DrugInventoryCreate,
  DrugStockInventoryList,
  DrugInventoryRecordDetail,
  DrugInventoryCheck,
  DrugInventoryUpdate
} from '../../../../../ducks'
import { Confirm, PageCard } from '../../../../../components'
// import { formatMoney, limitMoney } from '../../../../../utils'
import moment from 'moment'
import { formatMoney } from '../../../../../utils'
// import Print from 'rc-print'

// 病历
class AddDrugInventoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instock_date: moment().format('YYYY-MM-DD'),
      instock_way_name: '',
      supplier_name: '',
      items: [],
      remark: '',
      readOnly: false,
      instock_operation_name: '',
      order_number: '',
      created_time: '',
      keyword: '',
      status: false,
      amount: false
    }
  }

  componentDidMount() {
    const {showWay} = this.props
    // console.log('showWay====', showWay)
    if (showWay !== 1) {
      this.queryDetail()
      if (showWay !== 4) {
        this.setState({readOnly: true})
      }
    } else {
      this.DrugStockInventoryList({limit: 10, offset: 0})
    }
  }
  queryDetail() {
    this.DrugInventoryRecordDetail({limit: 10, offset: 0})
  }
  DrugStockInventoryList({limit = 10, offset = 0}) {
    const {DrugStockInventoryList, clinic_id} = this.props
    const {keyword, status, amount} = this.state
    let reqData = {
      limit,
      offset,
      clinic_id
    }
    if (keyword !== '') {
      reqData.keyword = keyword
    }
    if (status) {
      reqData.status = status
    }
    if (amount) {
      reqData.amount = amount
    }
    DrugStockInventoryList(reqData)
  }
  async DrugInventoryRecordDetail({limit = 10, offset = 0}) {
    const {DrugInventoryRecordDetail, drug_inventory_record_id} = this.props
    const {keyword, status, amount} = this.state
    let reqData = {
      limit,
      offset,
      drug_inventory_record_id
    }
    if (keyword !== '') {
      reqData.keyword = keyword
    }
    if (status) {
      reqData.status = status
    }
    if (amount) {
      reqData.amount = amount
    }
    let data = await DrugInventoryRecordDetail(reqData)
    for (let key of data) {
      this.setItemsValue({drug_stock_id: key.drug_stock_id, actual_amount: key.actual_amount})
    }
  }
  // 验证字段
  validateData(data) {
    if (!data.model_name || data.model_name === '') {
      this.setState({ model_nameFailed: true })
      return false
    }
    return true
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  addColumn() {
    const { items } = this.state
    this.setState({ items: [...items, {buy_price: 0, instock_amount: 0, eff_date: moment().format('YYYY-MM-DD')}] })
  }

  removeColumn(index) {
    const { items } = this.state
    let array = [...items]
    array.splice(index, 1)
    this.setState({ items: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { items } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...items]
    array[index][key] = value
    this.setState({ items: array })
  }

  async DrugInventoryCreate() {
    const { DrugInventoryCreate, clinic_id, inventory_operation_id } = this.props
    const { items } = this.state
    // let array = []
    console.log('items===', items)
    for (let key of items) {
      key.drug_stock_id = key.drug_stock_id + ''
      key.actual_amount = key.actual_amount + ''
    }
    let reqData = {
      clinic_id,
      inventory_operation_id,
      items: JSON.stringify(items)
    }
    let error = await DrugInventoryCreate(reqData)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  // 修改
  async DrugInventoryUpdate() {
    const { DrugInventoryUpdate, inventory_operation_id, drug_inventory_record_id } = this.props
    const { items } = this.state
    // let array = []
    console.log('items===', items)
    for (let key of items) {
      key.drug_stock_id = key.drug_stock_id + ''
      key.actual_amount = key.actual_amount + ''
    }
    let reqData = {
      drug_inventory_record_id,
      inventory_operation_id,
      items: JSON.stringify(items)
    }
    let error = await DrugInventoryUpdate(reqData)
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      // this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      this.props.backToList()
    }
  }
  // 审核
  async DrugInventoryCheck() {
    const {drug_inventory_record_id, inventory_operation_id, DrugInventoryCheck} = this.props
    let requestData = {
      drug_inventory_record_id,
      verify_operation_id: inventory_operation_id
    }
    this.refs.myAlert.confirm('提示', '是否审核通过，请确认？', 'Warning', async () => {
      let error = await DrugInventoryCheck(requestData)
      if (error) {
        return this.refs.myAlert.alert('审核失败', error)
      } else {
        this.refs.myAlert.alert('审核成功')
        this.props.backToList()
      }
    })
  }

  render() {
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        <div className={'commonBlank baseInfoBlank'}>
          <span />
          {this.renderFilter()}
          {this.renderTable()}
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button onClick={() => this.props.backToList()}>取消</button>
            <button
              onClick={() => {
                if (showWay === 1) {
                  this.DrugInventoryCreate()
                }
                if (showWay === 2) {
                  this.DrugInventoryCheck()
                }
                if (showWay === 4) {
                  this.DrugInventoryUpdate()
                }
                if (showWay === 3) {
                  this.refs.printer.onPrint()
                }
              }}
            >
              {showWay === 1 || showWay === 4 ? '保存' : showWay === 2 ? '审核' : showWay === 3 ? '打印' : ''}
            </button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }
  renderFilter() {
    const {showWay} = this.props
    return (
      <div className={'filterBox'}>
        <div className={'boxLeft'}>
          <input
            type={'text'}
            placeholder={'药品名称/条形码'}
            onChange={e => {
              this.setState({keyword: e.target.value})
            }}
          />
          <button onClick={() => {
            if (showWay === 1) {
              this.DrugStockInventoryList({offset: 0, limit: 10})
            } else {
              this.DrugInventoryRecordDetail({offset: 0, limit: 10})
            }
          }}>查询</button>
          <label>
            <input
              type={'checkbox'}
              onChange={e => {
                this.setState({amount: e.target.checked})
              }}
            />账面数量大于0
          </label>
          <label>
            <input
              type={'checkbox'}
              onChange={e => {
                this.setState({status: e.target.checked})
              }}
            />状态正常
          </label>
        </div>
        <div className={'boxRight'}>
          <button
            onClick={() => {
            }}
          >
            导出
          </button>
        </div>
        <style jsx>{`
          .filterBox {
            float: left;
            width: 100%;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 0;
          }
          .filterBox .boxLeft {
            float: left;
            display: flex;
            align-items: center;
          }
          .filterBox .boxLeft input[type='text'] {
            float: left;
            width: 150px;
            height: 28px;
            line-height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft > label {
            margin-left: 20px;
          }
          .filterBox .boxLeft>input[type='date'] {
            height: 20px;
            padding: 5px 0;
            width: 120px;
            text-indent: 0;
            margin: 14px 0 0 30px;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
        `}</style>
      </div>
    )
  }
  renderTable() {
    const { detail_data, pageInfo, showWay } = this.props
    const {items, readOnly} = this.state
    // console.log('detail_data=====  ', detail_data)
    return (
      <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td style={{flex: 2}}>商品名称</td>
                  <td>状态</td>
                  <td>规格</td>
                  <td>单位</td>
                  <td style={{flex: 2}}>生产厂商</td>
                  <td style={{flex: 2}}>供应商</td>
                  <td style={{flex: 2}}>批号</td>
                  <td style={{flex: 2}}>有效期</td>
                  <td>账面数量</td>
                  <td>实际数量</td>
                  <td>盈亏</td>
                </tr>
              </thead>
              <tbody>
                {detail_data.map((item, index) => {
                  let actual_amount = 0
                  for (let key of items) {
                    if (key.drug_stock_id === item.drug_stock_id) {
                      actual_amount = key.actual_amount
                    }
                  }
                  let profit = formatMoney((actual_amount - item.stock_amount) * item.buy_price)
                  return (
                    <tr key={index}>
                      <td style={{flex: 2}} title={item.name}>{item.name}</td>
                      <td>{item.status ? '正常' : '停用'}</td>
                      <td>{item.specification}</td>
                      <td>{item.packing_unit_name}</td>
                      <td style={{flex: 2}} title={item.manu_factory_name}>{item.manu_factory_name}</td>
                      <td style={{flex: 2}} title={item.supplier_name}>{item.supplier_name}</td>
                      <td style={{flex: 2}} title={item.serial}>{item.serial}</td>
                      <td style={{flex: 2}}>{moment(item.eff_date).format('YYYY-MM-DD')}</td>
                      <td>{item.stock_amount}{item.packing_unit_name}</td>
                      <td className={'realAmount'}>
                        <input
                          readOnly={readOnly}
                          type={'number'}
                          placeholder={'请填写'}
                          value={actual_amount !== 0 ? actual_amount : ''}
                          onChange={e => {
                            let drug_stock_id = item.drug_stock_id
                            let actual_amount = e.target.value
                            this.setItemsValue({drug_stock_id, actual_amount})
                          }}
                        />{item.packing_unit_name}
                      </td>
                      <td>{actual_amount !== 0 ? profit : ''}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <PageCard
              offset={pageInfo.offset}
              limit={pageInfo.limit}
              total={pageInfo.total}
              style={{margin: '20px 0', width: '100%'}}
              onItemClick={({ offset, limit }) => {
                if (showWay === 1) {
                  this.DrugStockInventoryList({offset, limit})
                } else {
                  this.DrugInventoryRecordDetail({offset, limit})
                }
              }}
            />
          </div>
        </div>
        <style jsx>{`
          .realAmount {
            display: flex;
          }
          .realAmount input{
            height: 90%;
            border: none;
            width: 60px;
            outline-style: none;
          }
          .contentCenterRight{
            width:100%;
            height:715px; 
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
            border-radius: 4px ;
            margin-left:20px;
            margin-top:5px;
            display: flex;
            flex-direction: column;
          }
          .contentCenter{
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable{
            margin:18px 32px;
            // background:#b0b0b0;
          }
          .tableContent{

          }
          .tableContent table{
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top:1px solid #e8e8e8;
          }
          .tableContent table thead{
            background:rgba(250,250,250,1);
            box-shadow: 1px 1px 0px 0px rgba(232,232,232,1) 
          }
          .tableContent table tr{
            height:40px; 
            display: flex;
            border-bottom:1px solid #e8e8e8;
            border-right:1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td{
            border-left:1px solid #e8e8e8;
            height:40px; 
            // display: flex;
            align-items: center;
            flex:1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd>div{
            margin:0 auto;
            width: max-content;
          }
          .operTd>div>div{
            cursor:pointer;
            color:#2ACDC8;
            float:left;
          }
          .operTd>div>div.divideLine{
            cursor:default;
            color:#e8e8e8;
            margin:0 5px;
          }
        `}</style>
      </div>
    )
  }
  setItemsValue({drug_stock_id, actual_amount}) {
    // const {detail_data} = this.props
    let {items} = this.state
    for (let i = 0; i < items.length; i++) {
      if (items[i].drug_stock_id === drug_stock_id) {
        items[i].actual_amount = actual_amount
      }
    }
    let array = [{drug_stock_id, actual_amount}]
    for (let i = 0; i < items.length; i++) {
      if (array.indexOf(items[i]) === -1) {
        array.push(items[i])
      }
    }
    this.setState({items: array})
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
          width: 987px;
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
          width: 24%;
          display: flex;
          flex-direction: column;
          min-height: 70px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > label {
          height: 25px;
        }
        .commonBlank > div > ul > li > textarea {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 60px;
          padding: 0;
          resize: none;
        }
        .commonBlank > div > ul > li > div > input,
        .commonBlank > div > ul > li > input {
          // background: rgba(245, 248, 249, 1);
          background: transparent;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 36px;
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
        .commonBlank > div > ul > li > ul > li:first-child,
        .commonBlank > div > ul > li.tableLi > div > ul > li:first-child {
          background: rgba(250, 250, 250, 1);
          box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
        }
        .commonBlank > div > ul > li > ul {
          width: 100%;
          // background: #eeeeee;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li {
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li > div {
          flex: 1;
          align-items: center;
          display: flex;
          justify-content: center;
          border-left: 1px solid #d8d8d8;
          height: 40px;
        }
        .commonBlank > div > ul > li > ul > li > div > div {
          width: 100%;
        }
        .commonBlank > div > ul > li > ul > li > div > input {
          background: transparent;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 36px;
          padding: 0;
          // width:100%;
          flex: 1;
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
        .tableDIV {
          display: flex;
          width: 100%;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
        }
        .tableDIV ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #e9e9e9;
          border-bottom: none;
        }
        .tableDIV ul li {
          display: flex;
          height: 50px;
          border-bottom: 1px solid #e9e9e9;
          line-height: 40px;
          text-align: center;
        }
        .tableDIV ul li:nth-child(1) {
          background: rgba(247, 247, 247, 1);
        }
        .tableDIV ul li > div {
          flex: 2;
          border-left: 1px #e9e9e9 dashed;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .tableDIV ul li > div > input {
          width: 90%;
          height: 30px;
          border-radius: 4px;
          outline-style: none;
          border: none;
        }
        .tableDIV ul li > div:nth-child(1) {
          // flex: 3;
        }
        .tableDIV ul li > div >div.longTxt{
          line-height: 20px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          width: 100px;
          text-overflow: ellipsis;
        }
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    inventory_operation_id: state.user.data.id,
    detail_data: state.drugInventorys.detail_data,
    pageInfo: state.drugInventorys.d_page_info,
    user: state.user.data
  }
}

export default connect(mapStateToProps, {
  DrugInventoryCreate,
  DrugStockInventoryList,
  DrugInventoryRecordDetail,
  DrugInventoryCheck,
  DrugInventoryUpdate
})(AddDrugInventoryScreen)
