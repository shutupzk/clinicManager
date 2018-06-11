import { request } from './request'
const LABORATORY_TRIAGE_LIST = 'LABORATORY_TRIAGE_LIST'
const LABORATORY_TRIAGE_WAITING = 'LABORATORY_TRIAGE_WAITING'
const LABORATORY_TRIAGE_CHECKED = 'LABORATORY_TRIAGE_CHECKED'
const LABORATORY_TRIAGE_CHECKING = 'LABORATORY_TRIAGE_CHECKING'
const LABORATORY_TRIAGE_RECORD = 'LABORATORY_TRIAGE_RECORD'

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

export function laboratoryTriages(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_TRIAGE_LIST:
      return { ...state, list_data: { ...state.list_data, ...action.list_data } }
    case LABORATORY_TRIAGE_RECORD:
      return { ...state, record_data: action.record_data }
    case LABORATORY_TRIAGE_WAITING:
      return { ...state, waiting_data: action.waiting_data, waiting_page_info: action.waiting_page_info }
    case LABORATORY_TRIAGE_CHECKED:
      return { ...state, checked_data: action.checked_data, checked_page_info: action.checked_page_info }
    case LABORATORY_TRIAGE_CHECKING:
      return { ...state, checking_data: action.checking_data, checking_page_info: action.checking_page_info }
    default:
      return state
  }
}

export const LaboratoryTriageList = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/laboratoryTriage/LaboratoryTriageList', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: LABORATORY_TRIAGE_LIST,
      list_data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryTriageWaiting = (requestData) => async dispatch => {
  try {
    console.log('LaboratoryTriageWaiting====', requestData)
    const data = await request('/laboratoryTriage/LaboratoryTriageWaiting', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: LABORATORY_TRIAGE_WAITING,
      waiting_data: docs,
      waiting_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryTriageChecked = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/laboratoryTriage/LaboratoryTriageChecked', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: LABORATORY_TRIAGE_CHECKED,
      checked_data: docs,
      checked_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryTriageChecking = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/laboratoryTriage/LaboratoryTriageChecking', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: LABORATORY_TRIAGE_CHECKING,
      checking_data: docs,
      checking_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryTriageRecordCreate = (requestData) => async dispatch => {
  try {
    const data = await request('/laboratoryTriage/LaboratoryTriageRecordCreate', requestData)
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
export const LaboratoryTriageRecordList = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/laboratoryTriage/LaboratoryTriageRecordList', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    dispatch({
      type: LABORATORY_TRIAGE_RECORD,
      record_data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryTriageUpdate = (requestData) => async dispatch => {
  try {
    const data = await request('/laboratoryTriage/LaboratoryTriageUpdate', requestData)
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
export const LaboratoryTriageDetail = (requestData) => async dispatch => {
  try {
    const data = await request('/laboratoryTriage/LaboratoryTriageDetail', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return data
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryTriageRecordDetail = (requestData) => async dispatch => {
  try {
    const data = await request('/laboratoryTriage/LaboratoryTriageRecordDetail', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return data
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
