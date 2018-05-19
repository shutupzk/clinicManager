import { request } from './request'
const RECEIVE_RECORD_ADD = 'RECEIVE_RECORD_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function receiveRecords(state = initState, action = {}) {
  switch (action.type) {
    case RECEIVE_RECORD_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryReceiveRecords = ({ clinic_patient_id, keyword, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/triage/ReceiveRecord', {
      clinic_patient_id,
      keyword,
      offset,
      limit
    })
    console.log('personnel ======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: RECEIVE_RECORD_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
