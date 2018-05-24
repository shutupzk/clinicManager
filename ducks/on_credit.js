
import { request } from './request'
const CREDIT_TRIAGE_ADD = 'CREDIT_TRIAGE_ADD'

const initState = {
  triage_list: [], // 有挂账的分诊记录
  triage_list_page: {} // 挂账分诊记录页签
}

export function onCredit(state = initState, action = {}) {
  switch (action.type) {
    case CREDIT_TRIAGE_ADD:
      return {
        ...state,
        triage_list: action.data,
        triage_list_page: action.page_info
      }
    default:
      return state
  }
}

export const queryCreditTriageList = ({ start_date, end_date, clinic_id, keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    const data = await request('/onCredit/traigePatient/list', {
      clinic_id,
      keyword,
      start_date,
      end_date,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
    dispatch({
      type: CREDIT_TRIAGE_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
