import { request } from './request'
const CHARGE_UNPAY_ADD = 'CHARGE_UNPAY_ADD'
const CHARGE_UNPAY_SELECT = 'CHARGE_UNPAY_SELECT'
const CHARGE_UNPAID_ADD = 'CHARGE_UNPAID_ADD'

const initState = {
  charge_unpay: [],
  charge_unpay_selectId: '',
  charge_unpay_page: {},
  un_paid_orders: [],
  un_paid_orders_page: {},
  un_paid_orders_type: []
}

export function charge(state = initState, action = {}) {
  switch (action.type) {
    case CHARGE_UNPAY_ADD:
      return { ...state, charge_unpay: action.data, charge_unpay_page: action.page_info }
    case CHARGE_UNPAY_SELECT:
      return { ...state, charge_unpay_selectId: action.selectId }
    case CHARGE_UNPAID_ADD:
      return { ...state, un_paid_orders: action.data, un_paid_orders_page: action.page_info, un_paid_orders_type: action.type_total }
    default:
      return state
  }
}

// 获取待缴费的分诊记录
export const queryChargeUnpayList = ({ start_date, end_date, clinic_id, keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    const data = await request('/charge/traigePatient/unpay', {
      clinic_id,
      keyword,
      start_date,
      end_date,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: CHARGE_UNPAY_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const chargeUnpaySelect = ({ selectId = '' }) => dispatch => {
  dispatch({
    type: CHARGE_UNPAY_SELECT,
    selectId
  })
}

// 根据分诊记录获取待缴费详情
export const queryUnPaidOrders = ({ clinic_triage_patient_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/charge/unPay/list', {
      clinic_triage_patient_id,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    const type_total = data.type_total || []

    dispatch({
      type: CHARGE_UNPAID_ADD,
      data: docs,
      page_info,
      type_total
    })
  } catch (e) {
    console.log(e)
    return null
  }
}
