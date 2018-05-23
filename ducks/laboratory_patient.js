import { request } from './request'
const LABORATORY_PATIENT_ADD = 'LABORATORY_PATIENT_ADD'

const initState = {
  data: []
}

export function laboratoryPatients(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const LaboratoryPatientCreate = ({ clinic_triage_patient_id, personnel_id, items }) => async dispatch => {
  try {
    const data = await request('/triage/LaboratoryPatientCreate', {
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

export const LaboratoryPatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/LaboratoryPatientGet', {
      clinic_triage_patient_id
    })
    console.log(clinic_triage_patient_id)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let json = {}
    for (let doc of docs) {
      const { clinic_laboratory_id, laboratory_name } = doc
      json[clinic_laboratory_id] = { clinic_laboratory_id, laboratory_name }
    }
    dispatch({
      type: LABORATORY_PATIENT_ADD,
      data: docs
    })
    dispatch({
      type: 'LABORATORY_PROJECT_ADD',
      data: json
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
