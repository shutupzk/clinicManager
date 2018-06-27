import { request } from './request'
const FINANCE_ADD = 'FINANCE_ADD'
const FINANCE_ADD_MONTH = 'FINANCE_ADD_MONTH'

const initState = {
  data: [],
  data_month: [],
  page_info: {},
  page_info_month: {}
}

export function finances(state = initState, action = {}) {
  switch (action.type) {
    case FINANCE_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case FINANCE_ADD_MONTH:
      return { ...state, data_month: action.data, page_info_month: action.page_info }
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
