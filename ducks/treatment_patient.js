import { request } from './request'
const TREATMENT_PATIENT_ADD = 'TREATMENT_PATIENT_ADD'

const initState = {
  data: []
}

export function treatmentPatients(state = initState, action = {}) {
  switch (action.type) {
    case TREATMENT_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const TreatmentPatientCreate = ({ clinic_triage_patient_id, personnel_id, items }) => async dispatch => {
  try {
    const data = await request('/triage/TreatmentPatientCreate', {
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

export const TreatmentPatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/TreatmentPatientGet', {
      clinic_triage_patient_id
    })
    console.log(clinic_triage_patient_id)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let tJson = {}
    let unitJson = {}
    for (let doc of docs) {
      const { clinic_treatment_id, name, unit_id, unit_name } = doc
      tJson[doc.clinic_treatment_id] = { clinic_treatment_id, name, unit_id, unit_name }
      unitJson[doc.unit_id] = { id: unit_id, name: unit_name }
    }
    dispatch({
      type: TREATMENT_PATIENT_ADD,
      data: docs
    })
    dispatch({
      type: 'TREATMENT_PROJECT_ADD',
      data: tJson
    })

    dispatch({
      type: 'DOSE_UNIT_ADD',
      data: unitJson
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
