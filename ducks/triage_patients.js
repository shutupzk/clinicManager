import { request } from './request'
const TRIAGE_PATIENTS_ADD = 'TRIAGE_PATIENTS_ADD'
const TRIAGE_PATIENTS_SELECT = 'TRIAGE_PATIENTS_SELECT'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function triagePatients(state = initState, action = {}) {
  switch (action.type) {
    case TRIAGE_PATIENTS_ADD:
      return { ...state, data: { ...state.data, ...action.data }, page_info: action.page_info }
    case TRIAGE_PATIENTS_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const triagePatientsList = ({ clinic_id, keyword }) => async dispatch => {
  try {
    const data = await request('/triage/patientlist', {
      clinic_id,
      keyword
    })
    console.log(data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    let json = {}
    for (let doc of docs) {
      json[doc.clinic_triage_patient_id] = doc
    }
    dispatch({
      type: TRIAGE_PATIENTS_ADD,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const triagePatientsSelect = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    dispatch({
      type: TRIAGE_PATIENTS_SELECT,
      selectId: clinic_triage_patient_id
    })
    return null
  } catch (e) {
    return e.message
  }
}