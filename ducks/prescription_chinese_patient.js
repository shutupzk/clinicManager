import { request } from './request'
const PRESCRIPTION_CHINESE_PATIENT_ADD = 'PRESCRIPTION_CHINESE_PATIENT_ADD'

const initState = {
  data: []
}

export function prescriptionChinesePatients(state = initState, action = {}) {
  switch (action.type) {
    case PRESCRIPTION_CHINESE_PATIENT_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const PrescriptionChinesePatientCreate = ({
  id,
  clinic_triage_patient_id,
  route_administration_name,
  frequency_name,
  amount,
  medicine_illustration,
  fetch_address,
  eff_day,
  personnel_id,
  items
}) => async dispatch => {
  try {
    const data = await request('/triage/PrescriptionChinesePatientCreate', {
      id,
      clinic_triage_patient_id,
      route_administration_name,
      frequency_name,
      amount,
      medicine_illustration,
      fetch_address,
      eff_day,
      personnel_id,
      items: JSON.stringify(items)
    })
    console.log(id, clinic_triage_patient_id, route_administration_name, frequency_name, amount, medicine_illustration, fetch_address, eff_day, personnel_id, items)
    console.log('data ======', data)
    if (data.code !== '200') return { error: data.message }  
    return { id: data.data }
  } catch (e) {
    console.log(e)
    return { error: e.message }
  }
}

export const PrescriptionChinesePatientGet = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/triage/PrescriptionChinesePatientGet', {
      clinic_triage_patient_id
    })
    if (data.code !== '200' || !data.data) return []
    let array = data.data || []
    let json_data = {}
    let unitJson = {}
    let frequencyJson = {}
    let routeJson = {}
    let doseFormJson = {}
    for (let item of array) {
      let docs = item.items || []
      const { route_administration_name, frequency_name } = item
      if (route_administration_name) routeJson[route_administration_name] = { name: route_administration_name }
      if (frequency_name) frequencyJson[frequency_name] = { name: frequency_name }
      for (let doc of docs) {
        const {
          packing_unit_name,
          dose_count_unit_name,
          once_dose_unit_name,
          route_administration_name,
          frequency_name,
          dose_form_name
        } = doc
        json_data[doc.clinic_drug_id] = doc
        if (packing_unit_name) unitJson[packing_unit_name] = { name: packing_unit_name }
        if (dose_count_unit_name) unitJson[dose_count_unit_name] = { name: dose_count_unit_name }
        if (once_dose_unit_name) unitJson[once_dose_unit_name] = { name: once_dose_unit_name }
        if (route_administration_name) routeJson[route_administration_name] = { name: route_administration_name }
        if (frequency_name) frequencyJson[frequency_name] = { name: frequency_name }
        if (dose_form_name) doseFormJson[dose_form_name] = { name: dose_form_name }
      }
    }
    dispatch({ type: 'DRUG_JSON_ADD', json_data })
    dispatch({ type: 'DOSE_UNIT_ADD', data: unitJson })
    dispatch({ type: 'FREQUENCY_ADD', data: frequencyJson })
    dispatch({ type: 'ROUTE_ADMINISTRATION_ADD', data: routeJson })
    dispatch({ type: 'DOSE_FORM_ADD', data: doseFormJson })
    // dispatch({
    //   type: PRESCRIPTION_CHINESE_PATIENT_ADD,
    //   data: array
    // })
    return array
  } catch (e) {
    console.log(e)
    return []
  }
}
