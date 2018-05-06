import { request } from './request'
const initState = {

}

export function clinic_triage_patient_id(state = initState, action = {}) {
  return { ...state, clinic_triage_patient_id: action.clinic_triage_patient_id }
}

export const saveTriagePatientId = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    console.log('clinic_triage_patient_id====', clinic_triage_patient_id)
    dispatch({
      clinic_triage_patient_id
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
