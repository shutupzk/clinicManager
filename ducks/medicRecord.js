import { request } from './request'
const MEDICAL_RECORD_ADD = 'MEDICAL_RECORD_ADD'
const MEDICAL_MODEL_ADD = 'MEDICAL_MODEL_ADD'
const MEDICAL_HISTORY_ADD = 'MEDICAL_HISTORY_ADD'
const CHIEF_COMPLAINTS_ADD = 'CHIEF_COMPLAINTS_ADD'

const initState = {
  chief_complaints: [], // 主诉
  data: {},
  models: [],
  model_page: {},
  history_medicals: [],
  history_page_info: {}
}

export function medicalRecords(state = initState, action = {}) {
  switch (action.type) {
    case MEDICAL_RECORD_ADD:
      return { ...state, data: action.data }
    case MEDICAL_MODEL_ADD:
      return { ...state, models: action.data, model_page: action.page }
    case MEDICAL_HISTORY_ADD:
      return { ...state, history_medicals: action.data, history_page_info: action.page }
    case CHIEF_COMPLAINTS_ADD:
      return { ...state, chief_complaints: action.data }
    default:
      return state
  }
}

export const queryMedicalRecord = clinic_triage_patient_id => async dispatch => {
  try {
    const data = await request('/medicalRecord/findByTriageId', { clinic_triage_patient_id })
    const doc = data.data || {}
    dispatch({
      type: MEDICAL_RECORD_ADD,
      data: doc
    })
    return doc
  } catch (e) {
    console.log(e)
    return null
  }
}

export const queryMedicalsByPatient = ({ clinic_patient_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/medicalRecord/listByPid', { clinic_patient_id, offset, limit })
    const doc = data.data || []
    const page = data.page_info || { offset, limit, total: 0 }
    dispatch({
      type: MEDICAL_HISTORY_ADD,
      data: doc,
      page
    })
    return doc
  } catch (e) {
    console.log(e)
    return null
  }
}

export const queryMedicalModels = ({ keyword, offset = 0, limit = 10, is_common, operation_id }) => async dispatch => {
  const data = await request('/medicalRecord/model/list', { keyword, offset, limit, is_common, operation_id })
  const doc = data.data || []
  const page = data.page_info || { offset, limit, total: 0 }
  dispatch({
    type: MEDICAL_MODEL_ADD,
    data: doc,
    page
  })
  return doc
}

export const queryMedicalModelsByDoctor = ({ keyword, offset = 0, limit = 10, is_common, operation_id }) => async dispatch => {
  const data = await request('/medicalRecord/model/listByOperation', { keyword, offset, limit, is_common, operation_id })
  const doc = data.data || []
  const page = data.page_info || { offset, limit, total: 0 }
  dispatch({
    type: MEDICAL_MODEL_ADD,
    data: doc,
    page
  })
  return doc
}

export const createMedicalRecord = ({
  clinic_triage_patient_id,
  operation_id,
  morbidity_date,
  chief_complaint,
  history_of_present_illness,
  history_of_past_illness,
  family_medical_history,
  allergic_history,
  allergic_reaction,
  body_examination,
  immunizations,
  diagnosis,
  cure_suggestion,
  remark,
  files
}) => async dispatch => {
  try {
    const data = await request('/medicalRecord/upsert', {
      clinic_triage_patient_id,
      operation_id,
      morbidity_date,
      chief_complaint,
      history_of_present_illness,
      history_of_past_illness,
      family_medical_history,
      allergic_history,
      allergic_reaction,
      body_examination,
      immunizations,
      diagnosis,
      cure_suggestion,
      remark,
      files
    })
    dispatch({
      type: MEDICAL_RECORD_ADD,
      data: {
        clinic_triage_patient_id,
        operation_id,
        morbidity_date,
        chief_complaint,
        history_of_present_illness,
        history_of_past_illness,
        family_medical_history,
        allergic_history,
        allergic_reaction,
        body_examination,
        immunizations,
        diagnosis,
        cure_suggestion,
        remark,
        files
      }
    })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    return e
  }
}

export const createMedicalRecordAsModel = ({
  model_name,
  is_common,
  operation_id,
  morbidity_date,
  chief_complaint,
  history_of_present_illness,
  history_of_past_illness,
  family_medical_history,
  allergic_history,
  allergic_reaction,
  body_examination,
  immunizations,
  diagnosis,
  cure_suggestion,
  remark,
  files
}) => async dispatch => {
  try {
    const data = await request('/medicalRecord/model/create', {
      is_common,
      model_name,
      operation_id,
      morbidity_date,
      chief_complaint,
      history_of_present_illness,
      history_of_past_illness,
      family_medical_history,
      allergic_history,
      allergic_reaction,
      body_examination,
      immunizations,
      diagnosis,
      cure_suggestion,
      remark
    })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    return e
  }
}

export const queryChiefComplaints = () => async dispatch => {
  try {
    const data = await request('/chiefComplaint/list', {})
    let res = data.data || []
    dispatch({
      type: CHIEF_COMPLAINTS_ADD,
      data: res
    })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    return e
  }
}
