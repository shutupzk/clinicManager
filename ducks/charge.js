import { request } from './request'
const CHARGE_UNPAY_ADD = 'CHARGE_UNPAY_ADD'
const CHARGE_UNPAY_SELECT = 'CHARGE_UNPAY_SELECT'
const CHARGE_UNPAID_ADD = 'CHARGE_UNPAID_ADD'

const CHARGE_PAID_TRIAGE_ADD = 'CHARGE_PAID_TRIAGE_ADD'
const CHARGE_PAID_SELECT = 'CHARGE_PAID_SELECT'
const CHARGE_PAID_ORDER_ADD = 'CHARGE_PAID_ORDER_ADD'

const initState = {
  charge_unpay: [], // 未交费的就诊记录
  charge_unpay_selectId: '', // 选中的未交费的记录
  charge_unpay_page: {}, // 未交费的就诊记录的页签
  un_paid_orders: [], // 未交费的
  un_paid_orders_page: {},
  un_paid_orders_type: [],

  charge_paid_triage: [], // 已交费的就诊记录
  charge_paid_triage_selectId: '', // 选中的已交费的记录
  charge_paid_triage_page: {}, // 已交费的就诊记录的页签
  paid_orders: [], // 已交费的详细条目
  paid_orders_page: {},
  paid_orders_type: []
}

export function charge(state = initState, action = {}) {
  switch (action.type) {
    case CHARGE_UNPAY_ADD:
      return {
        ...state,
        charge_unpay: action.data,
        charge_unpay_page: action.page_info
      }
    case CHARGE_UNPAY_SELECT:
      return {
        ...state,
        charge_unpay_selectId: action.selectId
      }
    case CHARGE_UNPAID_ADD:
      return {
        ...state,
        un_paid_orders: action.data,
        un_paid_orders_page: action.page_info,
        un_paid_orders_type: action.type_total
      }
    case CHARGE_PAID_TRIAGE_ADD:
      return {
        ...state,
        charge_paid_triage: action.data,
        charge_paid_triage_page: action.page_info
      }
    case CHARGE_PAID_SELECT:
      return {
        ...state,
        charge_paid_triage_selectId: action.selectId
      }
    case CHARGE_PAID_ORDER_ADD:
      return {
        ...state,
        paid_orders: action.data,
        paid_orders_page: action.page_info,
        paid_orders_type: action.type_total
      }
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
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
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

export const queryChargePaidList = ({ start_date, end_date, clinic_id, keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    const data = await request('/charge/traigePatient/paid', {
      clinic_id,
      keyword,
      start_date,
      end_date,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
    dispatch({
      type: CHARGE_PAID_TRIAGE_ADD,
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

export const chargePaidSelect = ({ selectId = '' }) => dispatch => {
  dispatch({
    type: CHARGE_PAID_SELECT,
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
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
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

export const queryPaidOrders = ({ mz_paid_record_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/charge/paid/list', {
      mz_paid_record_id,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
    const type_total = data.type_total || []

    dispatch({
      type: CHARGE_PAID_ORDER_ADD,
      data: docs,
      page_info,
      type_total
    })
  } catch (e) {
    console.log(e)
    return null
  }
}

export const createPayment = ({
  discount_money = 0,
  derate_money = 0,
  medical_money = 0,
  on_credit_money = 0,
  voucher_money = 0,
  bonus_points_money = 0,
  clinic_triage_patient_id,
  orders_ids,
  operation_id,
  pay_method_code,
  balance_money
}) => async dispatch => {
  try {
    const data = await request('/charge/payment/create', {
      discount_money,
      derate_money,
      medical_money,
      on_credit_money,
      voucher_money,
      bonus_points_money,
      clinic_triage_patient_id,
      orders_ids,
      operation_id,
      pay_method_code,
      balance_money
    })
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}
