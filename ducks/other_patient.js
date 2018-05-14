import { request } from './request'
const OTHER_PATIENT_ADD = 'OTHER_PATIENT_ADD'

const initState = {
  data: []
}

export function otherPatients(state = initState, action = {}) {
  switch (action.type) {
    case OTHER_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const OtherCostPatientCreate = ({ clinic_triage_patient_id, personnel_id, items }) => async dispatch => {
  try {
    const data = await request('/triage/OtherCostPatientCreate', {
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

export const OtherCostPatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/OtherCostPatientGet', {
      clinic_triage_patient_id
    })
    console.log(clinic_triage_patient_id)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    dispatch({
      type: OTHER_PATIENT_ADD,
      data: docs
    })
    let json = {}
    for (let doc of docs) {
      json[doc.clinic_other_cost_id] = doc
    }
    dispatch({
      type: 'OTHER_COST_ADD',
      data: json
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
