import { request } from './request'
const TOTAL_AMOUNT_ADD = 'TOTAL_AMOUNT_ADD'

const initState = {
  data: [],
  clinic: [],
  total: 0
}

export function totalAmounts(state = initState, action = {}) {
  switch (action.type) {
    case TOTAL_AMOUNT_ADD:
      return { ...state, data: action.data, clinic: action.clinic, total: action.total }
    default:
      return state
  }
}

export const queryTotalAmounts = ({ typeCode, start_date, end_date }) => async dispatch => {
  try {
    const data = await request('/platform/totalAmount', {
      typeCode,
      start_date,
      end_date
    })
    const docs = data.data || []
    const clinic = data.clinic || []
    const total = data.total || 0
    dispatch({
      type: TOTAL_AMOUNT_ADD,
      data: docs,
      clinic,
      total
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
