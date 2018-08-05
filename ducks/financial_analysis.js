import { request } from './request'
const FINACIAL_PAY_WAY = 'FINACIAL_PAY_WAY'
const FINACIAL_BUSINESS = 'FINACIAL_BUSINESS'

const initState = {
  p_data: [],
  b_data: []
}

export function financial(state = initState, action = {}) {
  switch (action.type) {
    case FINACIAL_PAY_WAY:
      return { ...state, p_data: action.p_data }
    case FINACIAL_BUSINESS:
      return { ...state, b_data: action.b_data }
    default:
      return state
  }
}

export const ChargeDayReportByPayWay = ({ start_date, end_date, clinic_id }) => async dispatch => {
  try {
    const data = await request('/financialAnalysis/ChargeDayReportByPayWay', {
      start_date, end_date, clinic_id
    })
    const docs = data.data || []
    dispatch({
      type: FINACIAL_PAY_WAY,
      p_data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ChargeDayReportByBusiness = ({ start_date, end_date, clinic_id }) => async dispatch => {
  try {
    const data = await request('/financialAnalysis/ChargeDayReportByBusiness', {
      start_date, end_date, clinic_id
    })
    const docs = data.data || []
    dispatch({
      type: FINACIAL_BUSINESS,
      b_data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
