import { request } from './request'
const DRUG_RETAIL_ADD = 'DRUG_RETAIL_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function drugRetail(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_RETAIL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
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
