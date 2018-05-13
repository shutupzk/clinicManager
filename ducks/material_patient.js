import { request } from './request'
const MATERIAL_PATIENT_ADD = 'MATERIAL_PATIENT_ADD'

const initState = {
  data: []
}

export function materialPatients(state = initState, action = {}) {
  switch (action.type) {
    case MATERIAL_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const MaterialPatientCreate = ({ clinic_triage_patient_id, personnel_id, items }) => async dispatch => {
  try {
    const data = await request('/triage/MaterialPatientCreate', {
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

export const MaterialPatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/MaterialPatientGet', {
      clinic_triage_patient_id
    })
    console.log(clinic_triage_patient_id)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let json = {}
    for (let doc of docs) {
      const { material_stock_id, name, specification, unit_id, unit_name, stock_amount } = doc
      json[material_stock_id] = { material_stock_id, name, specification, unit_id, unit_name, stock_amount }
    }
    dispatch({
      type: MATERIAL_PATIENT_ADD,
      data: docs
    })
    dispatch({
      type: 'MATERIAL_PROJECT_ADD',
      data: json
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
