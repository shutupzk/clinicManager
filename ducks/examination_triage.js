import { request } from './request'
const EXAM_TRIAGE_LIST = 'EXAM_TRIAGE_LIST'
const EXAM_TRIAGE_WAITING = 'EXAM_TRIAGE_WAITING'
const EXAM_TRIAGE_CHECKED = 'EXAM_TRIAGE_CHECKED'
const EXAM_TRIAGE_CHECKING = 'EXAM_TRIAGE_CHECKING'
const EXAM_TRIAGE_RECORD = 'EXAM_TRIAGE_RECORD'

const initState = {
  waiting_data: [],
  waiting_page_info: {},
  checked_data: [],
  checked_page_info: {},
  checking_data: [],
  checking_page_info: {},
  list_data: {},
  record_data: [],
  selectId: null
}

export function examinationTriages(state = initState, action = {}) {
  switch (action.type) {
    case EXAM_TRIAGE_LIST:
      return { ...state, list_data: { ...state.list_data, ...action.list_data } }
    case EXAM_TRIAGE_RECORD:
      return { ...state, record_data: action.record_data }
    case EXAM_TRIAGE_WAITING:
      return { ...state, waiting_data: action.waiting_data, waiting_page_info: action.waiting_page_info }
    case EXAM_TRIAGE_CHECKED:
      return { ...state, checked_data: action.checked_data, checked_page_info: action.checked_page_info }
    case EXAM_TRIAGE_CHECKING:
      return { ...state, checking_data: action.checking_data, checking_page_info: action.checking_page_info }
    default:
      return state
  }
}

export const ExaminationTriageList = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/examinationTriage/ExaminationTriageList', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: EXAM_TRIAGE_LIST,
      list_data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationTriageWaiting = (requestData) => async dispatch => {
  try {
    console.log('ExaminationTriageWaiting====', requestData)
    const data = await request('/examinationTriage/ExaminationTriageWaiting', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: EXAM_TRIAGE_WAITING,
      waiting_data: docs,
      waiting_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationTriageChecked = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/examinationTriage/ExaminationTriageChecked', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: EXAM_TRIAGE_CHECKED,
      checked_data: docs,
      checked_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationTriageChecking = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/examinationTriage/ExaminationTriageChecking', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: EXAM_TRIAGE_CHECKING,
      checking_data: docs,
      checking_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationTriageRecordCreate = (requestData) => async dispatch => {
  try {
    const data = await request('/examinationTriage/ExaminationTriageRecordCreate', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationTriageRecordList = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/examinationTriage/ExaminationTriageRecordList', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    dispatch({
      type: EXAM_TRIAGE_RECORD,
      record_data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationTriageUpdate = (requestData) => async dispatch => {
  try {
    const data = await request('/examinationTriage/ExaminationTriageUpdate', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
