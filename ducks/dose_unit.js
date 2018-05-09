import { request } from './request'
const DOSE_UNIT_ADD = 'DOSE_UNIT_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function doseUnits(state = initState, action = {}) {
  switch (action.type) {
    case DOSE_UNIT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryDoseUnitList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/DoseUnitList', {
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: DOSE_UNIT_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
