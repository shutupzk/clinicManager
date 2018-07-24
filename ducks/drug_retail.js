import { request } from './request'
const DRUG_RETAIL_ADD = 'DRUG_RETAIL_ADD'
const DRUG_RETAIL_SELECT = 'DRUG_RETAIL_SELECT'
const DRUG_RETAIL_DETAIL = 'DRUG_RETAIL_DETAIL'

const initState = {
  data: [],
  page_info: {},
  select_out_trade_no: null,
  data_detail: {
    items: [], // 数据
    refund: [], // 退费交易信息
    pay: {} // 支付交易信息
  }
}

export function drugRetail(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_RETAIL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DRUG_RETAIL_SELECT:
      return { ...state, select_out_trade_no: action.select_out_trade_no }
    case DRUG_RETAIL_DETAIL:
      return { ...state, data_detail: action.data_detail }
    default:
      return state
  }
}

export const createDrugRetailOrder = ({ items }) => async dispatch => {
  try {
    const data = await request('/drugRetail/createOrder', { items })
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const createDrugRetailPaymentOrder = ({ out_trade_no, pay_method, auth_code, total_money, discount_money, medical_money, balance_money, operation_id }) => async dispatch => {
  try {
    const data = await request('/drugRetail/createPaymentOrder', { out_trade_no, pay_method, auth_code, total_money, discount_money, medical_money, balance_money, operation_id })
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const DrugRetailList = ({ start_date, end_date, offset = 0, limit = 6, refundStatus = '1' }) => async dispatch => {
  try {
    const data = await request('/drugRetail/list', { start_date, end_date, offset, limit, refundStatus })
    const docs = data.data || []
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
    dispatch({
      type: DRUG_RETAIL_ADD,
      data: docs,
      page_info
    })
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const SelectDrugRetail = ({ out_trade_no }) => dispatch => {
  dispatch({
    type: DRUG_RETAIL_SELECT,
    select_out_trade_no: out_trade_no
  })
}

export const DrugRetailDetail = ({ out_trade_no }) => async dispatch => {
  try {
    const data = await request('/drugRetail/detail', { out_trade_no })
    const data_detail = {
      items: data.data || [],
      refund: data.refundMap || [],
      pay: data.payrecordMap || {}
    }
    dispatch({
      type: DRUG_RETAIL_DETAIL,
      data_detail
    })
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const DrugRetailRefund = ({ out_trade_no, items, operation_id }) => async dispatch => {
  try {
    const data = await request('/drugRetail/refund', { out_trade_no, items: JSON.stringify(items), operation_id })
    if (data.code === '200') return null
    return data.msg || '未知错误'
  } catch (e) {
    console.log(e)
    return e
  }
}

export const DrugRetailPaymentStatus = ({ out_trade_no }) => async dispatch => {
  try {
    const data = await request('/drugRetail/payment/status', { out_trade_no })
    console.log(data)
    if (data.code === '200') return data.data
    return null
  } catch (e) {
    console.log(e)
    return null
  }
}
