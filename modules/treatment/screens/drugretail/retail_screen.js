import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { CustomSelect, Confirm, Loading } from '../../../../components'
import { ClinicDrugListWithStock, createDrugRetailOrder, createDrugRetailPaymentOrder, DrugRetailPaymentStatus } from '../../../../ducks'
import { formatMoney, limitMoney } from '../../../../utils'
import moment from 'moment'

class RetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemArray: [{}], // 零售项
      showCharge: false, // 是否暂时结账页
      chargeTotal: 0, // 总的收费金额
      discount: '', //  折扣
      medical_money: '', // 医保收费
      charge_money: '', // 实际收费
      pay_method: 4, // 支付方式
      recordSn: '', // 系统交易号
      tradeNo: '', // 交易订单号
      showCode: false, // 展示授权码
      payStatus: '待提交', // 支付状态
      authCode: '',
      yb_check: false, // 允许输入医保金额
      showLoading: false
    }
    this.queryTimes = 0
    this.disabled = false
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // 添加药品出售项
  addItems() {
    this.setState({ itemArray: [...this.state.itemArray, {}] })
  }

  // 收费
  async charge() {
    const { itemArray } = this.state
    let items = []
    let chargeTotal = 0
    for (let item of itemArray) {
      if (!item.drug_name) return this.refs.myAlert.alert('存在未选择药品的项目', null, null, 'Warning')
      if (!item.stock_amount) return this.refs.myAlert.alert('存在无库存的项目，请重新选择！', null, null, 'Warning')
      if (!item.amount) return this.refs.myAlert.alert('存在未填写数量的项目，请填写！', null, null, 'Warning')
      if (item.amount > item.stock_amount) return this.refs.myAlert.alert('存在销售数量大于库存的项目！', null, null, 'Warning')
      chargeTotal += item.ret_price * item.amount

      items.push({ clinic_drug_id: item.clinic_drug_id + '', amount: item.amount, total_fee: item.ret_price * item.amount + '' })
    }
    let res = await this.props.createDrugRetailOrder({ items: JSON.stringify(items) })
    if (!res || res.code !== '200') {
      let msg = (res && res.msg) || '未知错误'
      return this.refs.myAlert.alert('创建订单失败', msg, null, 'Warning')
    }
    this.setState({ showCharge: true, chargeTotal, recordSn: res.data })
  }

  // 定时获取订单状态
  async tick() {
    this.queryTimes += 1
    if (this.state.payStatus !== '缴费中[待用户输密码]') return clearInterval(this.interval)
    if (this.queryTimes >= 7) {
      clearInterval(this.interval)
      this.setState({ payStatus: '支付超时！', showLoading: false })
    }

    const res = await this.props.DrugRetailPaymentStatus({ out_trade_no: this.state.tradeNo })

    if (res && res.trade_status === 'SUCCESS') {
      this.setState({ payStatus: '支付成功', showLoading: false })
    }

    if (res && res.trade_status === 'CLOSE') {
      this.setState({ payStatus: '已关闭/已撤销', showLoading: false })
    }
  }

  // 结账
  submit() {
    let { selectType, discount, medical_money, charge_money, chargeTotal, pay_method } = this.state
    if (!pay_method) return this.refs.myAlert.alert('未选择支付方式', '', null, 'Warning')
    let discount_money = selectType === 1 && discount ? Math.round(chargeTotal * ((100 - discount) / 100)) : 0
    let medical_money_int = Math.round(medical_money * 100)
    let charge_money_int = charge_money ? Math.round(charge_money * 100) : 0
    let should_money = chargeTotal - discount_money - medical_money_int
    if (pay_method === 4 && charge_money_int < should_money) return this.refs.myAlert.alert('提交失败', '收费金额小于应收金额，请检查后重新提交！', '', 'Warning')
    if (pay_method === 1 || pay_method === 2) {
      this.setState({ showCode: true })
    } else if (pay_method === 3) {
      this.refs.myAlert.alert('暂不支持该收款方式', '', null, 'Warning')
    } else {
      this.payOrder()
    }
  }

  async payOrder() {
    if (this.disabled) return
    this.disabled = true
    this.setState({ showLoading: true })
    let { tradeNo, medical_money, discount, pay_method, chargeTotal, authCode, recordSn } = this.state
    let discount_money = discount ? Math.round(chargeTotal * ((100 - discount) / 100)) : 0
    let medical_money_int = Math.round(medical_money * 100)
    let pay_method_map = { 1: 'alipay', 2: 'wechat', 3: 'bank', 4: 'cash' }
    let res = await this.props.createDrugRetailPaymentOrder({
      record_sn: recordSn,
      out_trade_no: tradeNo,
      pay_method: pay_method_map[pay_method],
      auth_code: authCode,
      total_money: chargeTotal,
      discount_money,
      medical_money: medical_money_int,
      balance_money: chargeTotal - discount_money - medical_money_int,
      operation_id: this.props.personnel_id
    })
    this.disabled = false
    this.setState({ showLoading: false })
    if (pay_method === 1 || pay_method === 2) {
      if (res && res.code === '200') {
        this.setState({ payStatus: '支付成功' })
      } else if (res && res.code === '300') {
        this.setState({ payStatus: '缴费中[待用户输密码]', showLoading: true, tradeNo: res.data })
        this.interval = setInterval(() => this.tick(), 5000)
      } else {
        this.setState({ payStatus: '缴费失败' + `[${(res && res.msg) || '未知原因'}]` })
      }
    } else {
      if (res && res.code === '200') {
        this.refs.myAlert.alert('缴费成功', '', () => {
          Router.push('/treatment/drugretail')
        })
      } else {
        this.refs.myAlert.alert('缴费失败', `${(res && res.msg) || '未知原因'}`, null, 'Warning')
      }
    }
  }

  // 选择是折扣 还是 减免
  selectType(value) {
    let type = this.state.selectType
    if (type !== value) {
      let set = { selectType: value }
      if (value === 1) set.derate = ''
      else set.discount = ''
      this.setState({ ...set })
    } else {
      this.setState({ selectType: 0, discount: '', derate: '' })
    }
  }

  // 设置选择
  setCheck(type) {
    let { yb_check } = this.state
    switch (type) {
      case 1: {
        let set = { yb_check: !yb_check }
        if (yb_check) set.medical_money = ''
        this.setState(set)
        break
      }
      default:
        return null
    }
  }

  //  设置折扣金额
  setDiscount(discountRate) {
    let value = discountRate.replace(/[^0-9]+/, '')
    if (value === '') return this.setState({ discount: '' })
    value *= 1
    if (value <= 0 || value >= 100) return null
    this.setState({ discount: value })
  }

  deleteItems(index) {
    let items = [...this.state.itemArray]
    items.splice(index, 1)
    this.setState({ itemArray: items })
  }

  ClinicDrugList(keyword) {
    const { ClinicDrugListWithStock, clinic_id } = this.props
    ClinicDrugListWithStock({ clinic_id, keyword })
  }

  getDrugOptions() {
    const { drugs } = this.props
    let array = []
    for (let item of drugs) {
      let { clinic_drug_id, drug_name } = item
      array.push({
        value: clinic_drug_id,
        label: drug_name,
        ...item
      })
    }
    return array
  }

  setItemValues(item, index) {
    let items = [...this.state.itemArray]
    items[index] = { ...items[index], ...item }
    this.setState({ itemArray: items })
  }

  setItemAmount(amount, index) {
    let items = [...this.state.itemArray]
    items[index].amount = amount
    this.setState({ itemArray: items })
  }

  showContentData() {
    let { itemArray, showCharge } = this.state
    if (showCharge) return null
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/treatment/drugretail')}>已售列表</span>
          <span className={'sel'}>药品零售</span>
        </div>
        <div className={'detailBox'} style={{ float: 'left' }}>
          <div className={'feeScheduleBox'} style={{ minHeight: '500px' }}>
            <ul>
              <li>
                <div>药品名称</div>
                <div>规格</div>
                <div>生成厂商</div>
                <div>零售价</div>
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
                return (
                  <li key={index}>
                    <div>
                      <div>
                        <CustomSelect
                          controlStyle={{ height: '38px', width: '100%' }}
                          value={item.clinic_drug_id || ''}
                          label={item.drug_name || ''}
                          mustOptionValue={!false}
                          valueKey='clinic_drug_id'
                          labelKey='drug_name'
                          placeholder='搜索'
                          onChange={item => {
                            this.setItemValues(item, index)
                          }}
                          focusSearch
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
                    <div className={'normalDiv'}>{item.specification}</div>
                    <div className={'normalDiv'}>{item.manu_factory_name}</div>
                    <div className={'normalDiv'}>{formatMoney(item.ret_price)}</div>
                    <div className={'normalDiv'}>{item.stock_amount !== undefined ? item.stock_amount || 0 : ''}</div>
                    <div>
                      <input
                        style={{
                          width: '70px',
                          height: '30px',
                          borderRadius: '4px',
                          border: '1px solid rgb(217, 217, 217)',
                          background: 'rgb(245, 248, 249)'
                        }}
                        value={item.amount || ''}
                        type='number'
                        onChange={e => this.setItemAmount(e.target.value, index)}
                      />
                    </div>
                    <div className={'normalDiv'}>{item.packing_unit_name}</div>
                    <div className={'normalDiv'}>{item.ret_price && formatMoney(item.ret_price * (item.amount || 0))}</div>
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
          <div className={'feeScheduleBottom'}>
            <button
              onClick={() => {
                this.charge()
              }}
            >
              收费
            </button>
            <button
              onClick={() => {
                this.setState({ itemArray: [{}] })
              }}
            >
              取消
            </button>
          </div>
        </div>

        <style jsx='true'>
          {`
            .feeScheduleBox ul li {
              min-height: 40px;
              height: unset;
            }
            .feeScheduleBox ul li div:nth-child(3),
            .feeScheduleBox ul li div:nth-child(1) {
              flex: 2;
            }
            .feeScheduleBox ul li div {
              flex: 1;
            }
            .normalDiv {
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 26px;
            }
          `}
        </style>
      </div>
    )
  }

  // 展示收银台
  renderBill() {
    if (!this.state.showCharge) return null
    const { chargeTotal } = this.state

    const recordSn = this.state.recordSn
    const orderTime = moment().format('YYYY-MM-DD HH:mm:ss')

    let { selectType, discount, medical_money } = this.state
    let discount_money = selectType === 1 && discount ? Math.round(chargeTotal * ((100 - discount) / 100)) : 0
    let medical_money_int = Math.round(medical_money * 100)

    let should_money = chargeTotal - discount_money - medical_money_int

    return (
      <div className={'detailBox'}>
        <div className={'detailBoxTop'}>
          <div className={'topLeft'}>
            <div>
              <b>{formatMoney(chargeTotal)}</b>
              <a>元</a>
            </div>
            <div>应收金额</div>
          </div>
          <div className={'topRight'}>
            <div>业务类型：药品零售</div>
            <div>订单号：{recordSn}</div>
            <div>下单日期：{orderTime}</div>
          </div>
        </div>
        <div className={'detailBoxCenter'}>
          <ul>
            <li>
              <label>
                <input type='radio' name='radio' checked={this.state.selectType === 1} onClick={() => this.selectType(1)} />
                是否有折扣
              </label>
              <div>
                <input type='text' disabled={this.state.selectType !== 1} value={this.state.discount} onChange={e => this.setDiscount(e.target.value)} />%
              </div>
            </li>
            <li>
              <label>
                <input type='checkbox' checked={this.state.yb_check} onClick={() => this.setCheck(1)} />
                医保支付
              </label>
              <div>
                <input
                  type='text'
                  value={this.state.medical_money}
                  disabled={!this.state.yb_check}
                  onChange={e => {
                    this.setState({ medical_money: limitMoney(e.target.value) })
                  }}
                />元
              </div>
            </li>
          </ul>
          <div className={'checkoutPay'}>
            <span>还需支付 {formatMoney(should_money)} 元</span>
            <div className={'payType'}>
              <button className={this.state.pay_method === 1 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 1 })}>
                支付宝
              </button>
              <button className={this.state.pay_method === 2 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 2 })}>
                微信
              </button>
              <button className={this.state.pay_method === 3 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 3 })}>
                银行卡
              </button>
              <button className={this.state.pay_method === 4 ? 'sel' : ''} onClick={() => this.setState({ pay_method: 4 })}>
                现金
              </button>
            </div>
            {this.state.pay_method === 4 && (
              <div className={'receipt'}>
                <div>
                  <label>实际收款</label>
                  <input type='text' value={this.state.charge_money} onChange={e => this.setState({ charge_money: limitMoney(e.target.value) })} />
                </div>
                <div>
                  <label>找零</label>
                  <input type='text' disabled value={this.state.charge_money ? formatMoney(Math.round(this.state.charge_money * 100) - should_money) : ''} />
                </div>
              </div>
            )}
            <div className={'bottomBtn'}>
              <button style={{ float: 'left' }} onClick={() => this.setState({ showCharge: false })}>
                返回筛查收费项目
              </button>
              <button style={{ float: 'right', marginLeft: '10px' }} onClick={() => this.submit()}>
                确定收费
              </button>
            </div>
          </div>
        </div>
        <style jsx='true'>{`
          .filterBox {
            margin: 20px 0 0 65px;
            display: flex;
            line-height: 60px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            min-height: 60px;
          }
          .filterBox div {
            flex: 1;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }

  // 展示授权码
  renderAuthCode() {
    if (!this.state.showCode) return null
    return (
      <div className='mask'>
        <div className='doctorList' style={{ width: '800px', left: 'unset', height: 'unset', minHeight: '500px' }}>
          <div className='doctorList_top'>
            <span>
              {this.state.pay_method === 2 ? '微信' : '支付宝'}
              {'当面付'}
            </span>
            <span onClick={() => this.setState({ showCode: false, payStatus: '待提交', authCode: '' })}>x</span>
          </div>
          <div className='tableDIV' style={{ width: '100%', marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
              <span>付款码授权码，请用扫码枪扫码获取</span>
              <input
                style={{ background: 'rgba(255,255,255,1)', width: '80%', marginTop: '4px', height: '30px', borderRadius: '4px', border: '1px solid #d8d8d8' }}
                value={this.state.authCode}
                onChange={e => {
                  this.setState({ authCode: e.target.value })
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: '20px' }}>
              <div>{this.state.payStatus}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: '40px' }}>
              {this.state.payStatus === '待提交' && (
                <div className='codeDiv'>
                  <button onClick={() => this.payOrder()}>提交</button>
                </div>
              )}
              {this.state.payStatus === '支付成功' && (
                <div className='codeDiv'>
                  <button onClick={() => Router.push('/treatment/drugretail')}>确定</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <style jsx='true'>{`
          .codeDiv button {
            width: 150px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            color: rgba(42, 205, 200, 1);
            font-size: 14px;
            border: 1px solid #2acdc8;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }

  // 加载
  render() {
    return (
      <div>
        {this.showContentData()}
        {this.renderBill()}
        {this.renderAuthCode()}
        <Confirm ref='myAlert' />
        <Loading {...this.state} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    drugs: state.drugs.drug_stock_data
  }
}

export default connect(
  mapStateToProps,
  { ClinicDrugListWithStock, createDrugRetailOrder, createDrugRetailPaymentOrder, DrugRetailPaymentStatus }
)(RetailScreen)
