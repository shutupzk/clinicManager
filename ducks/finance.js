import { request } from './request'
const FINANCE_ADD = 'FINANCE_ADD'

const initState = {
  data: {},
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

export const queryFinanceList = ({ keyword, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/dictionaries/FrequencyList', {
      keyword,
      offset,
      limit
    })
    const json = data.data || []
    const page_info = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: FREQUENCY_ADD,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
