import { request } from './request'
const PRESCRIPTION_WEST_PATIENT_ADD = 'PRESCRIPTION_WEST_PATIENT_ADD'

const initState = {
  data: []
}

export function prescriptionWesternPatients(state = initState, action = {}) {
  switch (action.type) {
    case PRESCRIPTION_WEST_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const PrescriptionWesternPatientCreate = ({ clinic_triage_patient_id, personnel_id, items }) => async dispatch => {
  try {
    const data = await request('/triage/PrescriptionWesternPatientCreate', {
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

export const PrescriptionWesternPatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/PrescriptionWesternPatientGet', {
      clinic_triage_patient_id
    })
    console.log(clinic_triage_patient_id)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    dispatch({
      type: PRESCRIPTION_WEST_PATIENT_ADD,
      data: docs
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
