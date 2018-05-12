import { request } from './request'
const EXAMINATION_PATIENT_ADD = 'EXAMINATION_PATIENT_ADD'

const initState = {
  data: []
}

export function examinationPatients(state = initState, action = {}) {
  switch (action.type) {
    case EXAMINATION_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const ExaminationPatientCreate = ({ clinic_triage_patient_id, personnel_id, items }) => async dispatch => {
  try {
    const data = await request('/triage/ExaminationPatientCreate', {
      clinic_triage_patient_id, personnel_id, items: JSON.stringify(items)
    })
    console.log(clinic_triage_patient_id, personnel_id, items)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const ExaminationPatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/ExaminationPatientGet', {
      clinic_triage_patient_id
    })
    console.log(clinic_triage_patient_id)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let json = {}
    let organJson = {}
    for (let doc of docs) {
      const { clinic_examination_id, name, organ } = doc
      json[clinic_examination_id] = { clinic_examination_id, name }
      organJson[organ] = {name: organ}
    }
    dispatch({
      type: EXAMINATION_PATIENT_ADD,
      data: docs
    })
    dispatch({
      type: 'EXAMINATION_ORGAN_ADD',
      data: organJson
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
