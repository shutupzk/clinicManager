import { request } from './request'
const CHARGE_UNPAY_ADD = 'CHARGE_UNPAY_ADD'
const CHARGE_UNPAY_SELECT = 'CHARGE_UNPAY_SELECT'

const initState = {
  charge_unpay: [],
  charge_unpay_selectId: '',
  charge_unpay_page: {}
}

export function charge(state = initState, action = {}) {
  switch (action.type) {
    case CHARGE_UNPAY_ADD:
      return { ...state, charge_unpay: action.data, charge_unpay_page: action.page_info }
    case CHARGE_UNPAY_SELECT:
      return { ...state, charge_unpay_selectId: action.selectId }
    default:
      return state
  }
}

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
