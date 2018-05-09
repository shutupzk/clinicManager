import { request } from './request'
const MEDICAL_RECORD_ADD = 'MEDICAL_RECORD_ADD'

const initState = {
  data: {}
}

export function medicalRecords(state = initState, action = {}) {
  switch (action.type) {
    case MEDICAL_RECORD_ADD:
      return { ...state, data: action.data }
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
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    return e
  }
}

export const createMedicalRecordAsModel = ({
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
    const data = await request('/medicalRecord/createModel', {
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
