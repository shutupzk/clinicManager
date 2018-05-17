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
      clinic_triage_patient_id,
      personnel_id,
      items: JSON.stringify(items)
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
    let json_data = {}
    let unitJson = {}
    let frequencyJson = {}
    let routeJson = {}
    for (let doc of docs) {
      const {
        drug_stock_id,
        drug_name,
        specification,
        stock_amount,
        packing_unit_id,
        packing_unit_name,
        once_dose_unit_id,
        once_dose_unit_name,
        route_administration_id,
        route_administration_name,
        frequency_id,
        frequency_name,
        type
      } = doc
      json_data[doc.drug_stock_id] = {
        drug_stock_id,
        drug_name,
        specification,
        stock_amount,
        packing_unit_id,
        packing_unit_name,
        once_dose_unit_id,
        once_dose_unit_name,
        route_administration_id,
        route_administration_name,
        frequency_id,
        frequency_name,
        type
      }
      if (packing_unit_id) unitJson[packing_unit_id] = { id: packing_unit_id, name: packing_unit_name }
      if (once_dose_unit_id) unitJson[once_dose_unit_id] = { id: once_dose_unit_id, name: once_dose_unit_name }
      if (frequency_id) frequencyJson[frequency_id] = { id: frequency_id, name: frequency_name }
      if (route_administration_id) routeJson[route_administration_id] = { id: route_administration_id, name: route_administration_name }
    }
    dispatch({
      type: 'DRUG_JSON_ADD',
      json_data
    })
    dispatch({
      type: 'DOSE_UNIT_ADD',
      data: unitJson
    })
    dispatch({
      type: 'FREQUENCY_ADD',
      data: frequencyJson
    })
    dispatch({
      type: 'ROUTE_ADMINISTRATION_ADD',
      data: routeJson
    })
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
