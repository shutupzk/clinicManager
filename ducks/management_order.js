import { request } from './request'
const MANAGEMENT_ORDER_ADD = 'MANAGEMENT_ORDER_ADD'

const initState = {
  data: {},
  page_info: {}
}

export function managementOrders(state = initState, action = {}) {
  switch (action.type) {
    case MANAGEMENT_ORDER_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryManagementOrders = ({ clinic_id, start_date, end_date, keyword = '', orderType = 1, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/charge/managerment/order', {
      clinic_id,
      start_date,
      end_date,
      keyword,
      orderType,
      offset,
      limit
    })
    const json = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: MANAGEMENT_ORDER_ADD,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
