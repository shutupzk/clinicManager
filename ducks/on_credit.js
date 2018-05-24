
import { request } from './request'
const CREDIT_TRIAGE_ADD = 'CREDIT_TRIAGE_ADD'
const CREDIT_TRIAGE_SELECT = 'CREDIT_TRIAGE_SELECT'
const CREDIT_RECORD_ADD = 'CREDIT_RECORD_ADD'

const initState = {
  triage_list: [], // 有挂账的分诊记录
  triage_list_page: {}, // 挂账分诊记录页签
  triage_list_selectId: '',
  record_list: [], // 获取的挂账记录
  record_list_page: {}
}

export function onCredit(state = initState, action = {}) {
  switch (action.type) {
    case CREDIT_TRIAGE_ADD:
      return {
        ...state,
        triage_list: action.data,
        triage_list_page: action.page_info
      }
    case CREDIT_TRIAGE_SELECT:
      return {
        ...state,
        triage_list_selectId: action.selectId
      }
    case CREDIT_RECORD_ADD:
      return {
        ...state,
        record_list: action.data,
        record_list_page: action.page_info
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

export const creditTriageSelect = ({ selectId = '' }) => dispatch => {
  dispatch({
    type: CREDIT_TRIAGE_SELECT,
    selectId
  })
}

export const queryCreditRecordList = ({ clinic_triage_patient_id = '', offset = 0, limit = 6 }) => async dispatch => {
  try {
    const data = await request('/onCredit/list', {
      clinic_triage_patient_id,
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
      type: CREDIT_RECORD_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
