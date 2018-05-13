import { request } from './request'
const DOSE_UNIT_ADD = 'DOSE_UNIT_ADD'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function doseUnits(state = initState, action = {}) {
  switch (action.type) {
    case DOSE_UNIT_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
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
    console.log('data =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: DOSE_UNIT_ADD,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
