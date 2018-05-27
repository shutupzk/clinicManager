import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createDrugInstock,
  ClinicDrugList,
  queryInstockWayList,
  querySupplierList
} from '../../../../../ducks'
import { Select, Confirm } from '../../../../../components'
import { formatMoney } from '../../../../../utils'

// 病历
class AddDrugInstockScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instock_date: '',
      instock_way_name: '',
      supplier_name: '',
      items: [],
      remark: ''
    }
  }

  componentDidMount() {
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
    this.setState({ items: [...items, {buy_price: 0, instock_amount: 0}] })
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

  async createDrugInstock() {
    const { createDrugInstock } = this.props
    const { instock_date, instock_way_name, supplier_name, items, remark } = this.state
    let requestData = {
      instock_date,
      instock_way_name,
      supplier_name,
      remark,
      items: JSON.stringify(items)
    }
    console.log('requestData====', requestData, items)
    // createDrugInstock(requestData)
    // let items = []
    // for (let { clinic_examination_id, times, organ, illustration } of examines) {
    //   items.push({
    //     clinic_examination_id: clinic_examination_id + '',
    //     times: times + '',
    //     organ: organ + '',
    //     illustration: illustration + ''
    //   })
    // }
    // let error = await examinationModelCreate({ model_name, is_common, operation_id: personnel_id, items })
    // if (error) {
    //   return this.refs.myAlert.alert('保存失败', error)
    // } else {
    //   this.setState({ showSaveModel: false })
    //   this.refs.myAlert.alert('保存成功')
    //   backToList()
    // }
  }
  // 获取入库方式筛选
  getInstockWayNameOptions() {
    const { instock_way } = this.props
    console.log('instock_way====', instock_way)
    let array = []
    for (let key in instock_way) {
      let {name} = instock_way[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  // 获取入库方式数据
  queryInstockWayList(keyword) {
    const {queryInstockWayList} = this.props
    queryInstockWayList({keyword})
  }
  // 获取供应商筛选
  getSupplierOptions() {
    const { supplier_data } = this.props
    console.log('supplier_data====', supplier_data)
    let array = []
    for (let key in supplier_data) {
      let {name} = supplier_data[key]
      // if (type !== 0) continue
      array.push({
        value: name,
        label: name
      })
    }
    return array
  }
  // 获取供应商数据
  querySupplierList(keyword) {
    const {querySupplierList} = this.props
    querySupplierList({keyword})
  }
  // 入库基本信息
  renderBaseInfoBlank() {
    const {instock_date, instock_way_name, supplier_name, remark} = this.state
    return (
      <div>
        <ul>
          <li>
            <label>
              入库日期
            </label>
            <input
              type='date'
              placeholder={'instock_date'}
              value={instock_date}
              onChange={e => {
                let instock_date = e.target.value
                this.setState({ instock_date })
              }}
            />
          </li>
          <li>
            <label>入库方式</label>
            <div>
              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'instock_way_name'}
                  value={instock_way_name}
                  onChange={({value}) => {
                    this.setState({ instock_way_name: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.queryInstockWayList(keyword) }}
                  options={this.getInstockWayNameOptions()}
                />
              </div>
            </div>
          </li>
          <li>
            <label>供应商</label>
            <div>
              <div style={{ width: '100%' }}>
                <Select
                  value={supplier_name}
                  onChange={({value}) => {
                    this.setState({ supplier_name: value })
                  }}
                  height={38}
                  onInputChange={keyword => { this.querySupplierList(keyword) }}
                  options={this.getSupplierOptions()}
                />
              </div>
            </div>
          </li>
          <li>
            <label>备注</label>
            <input
              type='text'
              placeholder={'remark'}
              value={remark}
              onChange={e => {
                let remark = e.target.value
                this.setState({ remark })
              }}
            />
          </li>
        </ul>
        {this.style()}
      </div>
    )
  }
  // 药筛选项
  getDrugOptions() {
    const { drugs } = this.props
    console.log('drugs====', drugs)
    let array = []
    for (let key in drugs) {
      let {
        clinic_drug_id,
        drug_name,
        packing_unit_name,
        manu_factory_name,
        ret_price,
        stock_amount,
        buy_price
      } = drugs[key]
      // if (type !== 0) continue
      array.push({
        value: clinic_drug_id,
        label: drug_name,
        manu_factory_name,
        packing_unit_name,
        ret_price,
        instock_amount: stock_amount,
        buy_price
      })
    }
    return array
  }
  // 搜索药
  ClinicDrugList(keyword) {
    const {clinic_id, ClinicDrugList} = this.props
    if (keyword) {
      ClinicDrugList({ clinic_id, status: true, keyword }, true)
    }
  }

  renderItems() {
    const { items } = this.state
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV'>
          <ul>
            <li>
              <div>序号</div>
              <div>商品名称</div>
              <div>单位</div>
              <div>生产厂商</div>
              <div>数量</div>
              <div>零售价</div>
              <div>成本价</div>
              <div>成本合计</div>
              <div>批号</div>
              <div>有效期</div>
              <div>
                <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                  新增
                </div>
              </div>
            </li>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <div>{index + 1}</div>
                  <div>
                    <div style={{width: '100%'}}>
                      <Select
                        value={this.getSelectValue(item.clinic_drug_id, this.getDrugOptions())}
                        onChange={({
                          value,
                          label,
                          manu_factory_name,
                          packing_unit_name,
                          ret_price,
                          instock_amount,
                          buy_price
                        }) => {
                          // let data = {}
                          this.setItemValue(value, index, 'clinic_drug_id', 2)
                          this.setItemValue(manu_factory_name, index, 'manu_factory_name', 2)
                          this.setItemValue(packing_unit_name, index, 'packing_unit_name', 2)
                          this.setItemValue(ret_price, index, 'ret_price', 2)
                          this.setItemValue(instock_amount, index, 'instock_amount', 2)
                          this.setItemValue(buy_price, index, 'buy_price', 2)
                        }}
                        placeholder='搜索'
                        height={38}
                        onInputChange={keyword => this.ClinicDrugList(keyword)}
                        options={this.getDrugOptions()}
                      />
                    </div>
                  </div>
                  <div>{item.packing_unit_name}</div>
                  <div>
                    <div className={'longTxt'}>
                      {item.manu_factory_name}
                    </div>
                  </div>
                  <div>
                    <input
                      placeholder={'入库数量'}
                      type='number'
                      value={item.instock_amount}
                      onChange={e => {
                        this.setItemValue(e, index, 'instock_amount')
                      }}
                    />
                  </div>
                  <div>{formatMoney(item.ret_price)}</div>
                  <div>
                    <input
                      placeholder={'成本价'}
                      type='text'
                      value={formatMoney(item.buy_price)}
                      onChange={e => {
                        let value = e.target.value // limitMoney(e.target.value)
                        this.setItemValue(value, index, 'buy_price', 2)
                      }}
                    />
                  </div>
                  <div>
                    <input
                      readOnly
                      placeholder={'成本合计'}
                      type='text'
                      value={formatMoney(item.instock_amount * item.buy_price)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder={'批号'}
                      type='text'
                      value={item.serial}
                      onChange={e => {
                        this.setItemValue(e, index, 'serial')
                      }}
                    />
                  </div>
                  <div>
                    <input
                      placeholder={'有效期'}
                      type='date'
                      value={item.eff_date}
                      onChange={e => {
                        this.setItemValue(e, index, 'eff_date')
                      }}
                    />
                  </div>
                  <div>
                    <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                      删除
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }

  render() {
    return (
      <div className={'contentCenter'}>
        <div className={'commonBlank baseInfoBlank'}>
          <span />
          {this.renderBaseInfoBlank()}
          {this.renderItems()}
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button
              onClick={() => {
                this.createDrugInstock()
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
  console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    drugs: state.drugs.json_data,
    instock_way: state.drugStocks.instock_way,
    supplier_data: state.drugStocks.supplier_data
  }
}

export default connect(mapStateToProps, {
  createDrugInstock,
  ClinicDrugList,
  queryInstockWayList,
  querySupplierList
})(AddDrugInstockScreen)
