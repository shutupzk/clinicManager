import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { CustomSelect } from '../../../../components'
import { ClinicDrugList } from '../../../../ducks'

class RetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemArray: [{}]
    }
  }

  // 添加药品出售项
  addItems() {
    this.setState({ itemArray: [...this.state.itemArray, {}] })
  }

  deleteItems(index) {
    let items = [...this.state.itemArray]
    items.splice(index, 1)
    this.setState({ itemArray: items })
  }

  ClinicDrugList(keyword, type = 0) {
    const { ClinicDrugList, clinic_id } = this.props
    if (keyword) {
      ClinicDrugList({ clinic_id, status: true, keyword, type }, true)
    }
  }

  getDrugOptions() {
    const { drugs } = this.props
    let array = []
    for (let key in drugs) {
      let { clinic_drug_id, drug_name } = drugs[key]
      array.push({
        value: clinic_drug_id,
        label: drug_name,
        ...drugs[key]
      })
    }
    return array
  }

  setItemValues(item, index) {
    let items = [...this.state.itemArray]
    items[index] = { ...items[index], ...item }
    this.setState({ itemArray: items })
  }

  showContentData() {
    let { itemArray } = this.state
    return (
      <div className={'detailBox'} style={{ float: 'left' }}>
        <div className={'feeScheduleBox'} style={{ minHeight: '500px' }}>
          <ul>
            <li>
              <div>药品名称</div>
              <div>规格</div>
              <div>生成厂商</div>
              <div>零售价</div>
              <div>批号</div>
              <div>有效期</div>
              <div>库存数量</div>
              <div>数量</div>
              <div>单位</div>
              <div>合计</div>
              <div
                onClick={() => {
                  this.addItems()
                }}
                style={{ width: '80px', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}
              >
                新增
              </div>
            </li>
            {itemArray.map((item, index) => {
              console.log(item)
              return (
                <li key={index}>
                  <div>
                    <div>
                      <CustomSelect
                        controlStyle={{ height: '38px' }}
                        value={item.clinic_drug_id || ''}
                        label={item.drug_name || ''}
                        mustOptionValue={!false}
                        valueKey='clinic_drug_id'
                        labelKey='drug_name'
                        placeholder='搜索'
                        onChange={item => {
                          this.setItemValues(item, index)
                        }}
                        onInputChange={keyword => this.ClinicDrugList(keyword)}
                        options={this.getDrugOptions()}
                        renderTitle={(item, index) => {
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '40px', justifyContent: 'center', alignItems: 'center', background: '#F2F2F2' }} key={index}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>药品名</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>规格</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>生产厂家</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>库存</div>
                            </div>
                          )
                        }}
                        renderItem={(item, sindex) => {
                          let stock_amount = !item.stock_amount || item.stock_amount === 'null' ? '0' : item.stock_amount
                          let packing_unit_name = item.packing_unit_name || ''
                          let has = false
                          for (let i = 0; i < itemArray.length; i++) {
                            let obj = itemArray[i]
                            if (obj.clinic_drug_id === item.clinic_drug_id && sindex !== index) {
                              has = true
                              break
                            }
                          }
                          if (has) return null
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '800px', height: '50px', justifyContent: 'center', alignItems: 'center' }} key={sindex}>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.drug_name}</div>
                              <div style={{ flex: 2, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.specification}</div>
                              <div style={{ flex: 3, textAlign: 'center', borderRight: '1px solid #d9d9d9' }}>{item.manu_factory_name}</div>
                              <div style={{ flex: 1, textAlign: 'center' }}>{stock_amount + ' ' + packing_unit_name}</div>
                            </div>
                          )
                        }}
                      />
                    </div>
                  </div>
                  <div>{item.specification}</div>
                  <div>{item.manu_factory_name}</div>
                  <div>{item.ret_price}</div>
                  <div>{}</div>
                  <div>有效期</div>
                  <div>库存数量</div>
                  <div>数量</div>
                  <div>单位</div>
                  <div>合计</div>
                  <div
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => {
                      this.deleteItems(index)
                    }}
                  >
                    删除
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx='true'>
          {`
            .feeScheduleBox ul li div:nth-child(3),
            .feeScheduleBox ul li div:nth-child(1) {
              flex: 2;
            }
            .feeScheduleBox ul li div {
              flex: 1;
            }
          `}
        </style>
      </div>
    )
  }

  // 加载
  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/drugretail')}>已售列表</span>
          <span className={'sel'}>药品零售</span>
        </div>
        {this.showContentData()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    drugs: state.drugs.json_data
  }
}

export default connect(
  mapStateToProps,
  { ClinicDrugList }
)(RetailScreen)
