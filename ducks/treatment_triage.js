import { request } from './request'
const TREATMENT_TRIAGE_LIST = 'TREATMENT_TRIAGE_LIST'
const TREATMENT_TRIAGE_WAITING = 'TREATMENT_TRIAGE_WAITING'
const TREATMENT_TRIAGE_CHECKED = 'TREATMENT_TRIAGE_CHECKED'
const TREATMENT_TRIAGE_CHECKING = 'TREATMENT_TRIAGE_CHECKING'
const TREATMENT_TRIAGE_RECORD = 'TREATMENT_TRIAGE_RECORD'

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

export function treatmentTriages(state = initState, action = {}) {
  switch (action.type) {
    case TREATMENT_TRIAGE_LIST:
      return { ...state, list_data: { ...state.list_data, ...action.list_data } }
    case TREATMENT_TRIAGE_RECORD:
      return { ...state, record_data: action.record_data }
    case TREATMENT_TRIAGE_WAITING:
      return { ...state, waiting_data: action.waiting_data, waiting_page_info: action.waiting_page_info }
    case TREATMENT_TRIAGE_CHECKED:
      return { ...state, checked_data: action.checked_data, checked_page_info: action.checked_page_info }
    case TREATMENT_TRIAGE_CHECKING:
      return { ...state, checking_data: action.checking_data, checking_page_info: action.checking_page_info }
    default:
      return state
  }
}

export const TreatmentTriageList = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/treatmentTriage/TreatmentTriageList', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: TREATMENT_TRIAGE_LIST,
      list_data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentTriageWaiting = (requestData) => async dispatch => {
  try {
    console.log('TreatmentTriageWaiting====', requestData)
    const data = await request('/treatmentTriage/TreatmentTriageWaiting', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: TREATMENT_TRIAGE_WAITING,
      waiting_data: docs,
      waiting_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentTriageChecked = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/treatmentTriage/TreatmentTriageChecked', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: TREATMENT_TRIAGE_CHECKED,
      checked_data: docs,
      checked_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentTriageChecking = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/treatmentTriage/TreatmentTriageChecking', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: TREATMENT_TRIAGE_CHECKING,
      checking_data: docs,
      checking_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentTriageRecordCreate = (requestData) => async dispatch => {
  try {
    const data = await request('/treatmentTriage/TreatmentTriageRecordCreate', requestData)
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
export const TreatmentTriageRecordList = (requestData) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/treatmentTriage/TreatmentTriageRecordList', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    dispatch({
      type: TREATMENT_TRIAGE_RECORD,
      record_data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentTriageUpdate = (requestData) => async dispatch => {
  try {
    const data = await request('/treatmentTriage/TreatmentTriageUpdate', requestData)
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
