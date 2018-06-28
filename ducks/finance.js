import { request } from './request'
const FINANCE_ADD = 'FINANCE_ADD'
const FINANCE_ADD_MONTH = 'FINANCE_ADD_MONTH'
const FINANCE_ADD_DETAIL = 'FINANCE_ADD_DETAIL'

const initState = {
  data: [], // 收费日报表
  data_month: [], // 收费月报表
  data_detail: [], // 收费明细
  page_info: {},
  page_info_month: {},
  page_info_detail: {}
}

export function finances(state = initState, action = {}) {
  switch (action.type) {
    case FINANCE_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case FINANCE_ADD_MONTH:
      return { ...state, data_month: action.data, page_info_month: action.page_info }
    case FINANCE_ADD_DETAIL:
      return { ...state, data_detail: action.data, page_info_detail: action.page_info }
    default:
      return state
  }
}

export const queryFinanceList = ({ start_date, end_date, patientName, oprationName, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/charge/business/transaction', {
      start_date,
      end_date,
      patientName: patientName,
      oprationName: oprationName,
      offset,
      limit
    })
    const json = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: FINANCE_ADD,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryFinanceMonthList = ({ start_date, end_date, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/charge/business/transaction/month', {
      start_date,
      end_date,
      offset,
      limit
    })
    const json = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: FINANCE_ADD_MONTH,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

// 获取报表收费明细
export const queryFinanceItemList = ({ start_date, end_date, patientName, porjectName, in_out, phone, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/charge/business/transaction/detail', {
      start_date,
      end_date,
      patientName,
      porjectName,
      in_out,
      phone,
      offset,
      limit
    })
    console.log(data)
    const json = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: FINANCE_ADD_DETAIL,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
