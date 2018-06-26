import { request } from './request'
const FINANCE_ADD = 'FINANCE_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function finances(state = initState, action = {}) {
  switch (action.type) {
    case FINANCE_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
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
    console.log(data)
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
