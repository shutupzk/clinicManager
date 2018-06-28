import { request } from './request'
const PRESCRIPTION_CHINESE_PATIENT_MODEL_ADD = 'PRESCRIPTION_CHINESE_PATIENT_MODEL_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function prescriptionChinesePatientModels(state = initState, action = {}) {
  switch (action.type) {
    case PRESCRIPTION_CHINESE_PATIENT_MODEL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const PrescriptionChinesePatientModelList = ({ keyword = '', is_common, operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/clinic_drug/PrescriptionChinesePatientModelList', {
      keyword,
      is_common,
      operation_id,
      offset,
      limit
    })
    console.log('PrescriptionChinesePatientModelList =====', keyword, is_common, operation_id, offset, limit)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let page_info = data.page_info

    let json_data = {}
    let unitJson = {}
    let frequencyJson = {}
    let routeJson = {}
    let doseFormJson = {}

    for (let item of docs) {
      let array = item.items || []
      const { route_administration_name, frequency_name } = item
      if (route_administration_name) routeJson[route_administration_name] = { name: route_administration_name }
      if (frequency_name) frequencyJson[frequency_name] = { name: frequency_name }
      for (let doc of array) {
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
    console.log('json_data ========', json_data)
    dispatch({ type: 'DRUG_JSON_ADD', json_data })
    dispatch({ type: 'DOSE_UNIT_ADD', data: unitJson })
    dispatch({ type: 'FREQUENCY_ADD', data: frequencyJson })
    dispatch({ type: 'ROUTE_ADMINISTRATION_ADD', data: routeJson })
    dispatch({ type: 'DOSE_FORM_ADD', data: doseFormJson })
    dispatch({
      type: PRESCRIPTION_CHINESE_PATIENT_MODEL_ADD,
      data: docs,
      page_info
    })

    return null
  } catch (e) {
    console.log(e)
    return []
  }
}

export const PrescriptionChinesePatientModelCreate = ({
  model_name,
  is_common = false,
  operation_id,
  route_administration_name,
  frequency_name,
  amount,
  fetch_address,
  eff_day,
  medicine_illustration,
  items
}) => async dispatch => {
  try {
    const data = await request('/clinic_drug/PrescriptionChinesePatientModelCreate', {
      model_name,
      is_common,
      operation_id,
      route_administration_name,
      frequency_name,
      amount,
      fetch_address,
      eff_day,
      medicine_illustration,
      items: JSON.stringify(items)
    })
    console.log('data ======', model_name, is_common, operation_id, route_administration_name, frequency_name, amount, fetch_address, eff_day, medicine_illustration, items, data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const PrescriptionChinesePatientModelUpdate = ({
  prescription_patient_model_id,
  model_name,
  is_common = false,
  operation_id,
  route_administration_name,
  frequency_name,
  amount,
  fetch_address,
  eff_day,
  medicine_illustration,
  items
}) => async dispatch => {
  try {
    const data = await request('/clinic_drug/PrescriptionChinesePatientModelUpdate', {
      prescription_patient_model_id,
      model_name,
      is_common,
      operation_id,
      route_administration_name,
      frequency_name,
      amount,
      fetch_address,
      eff_day,
      medicine_illustration,
      items: JSON.stringify(items)
    })
    console.log('data ======', prescription_patient_model_id, model_name, is_common, operation_id, route_administration_name, frequency_name, amount, fetch_address, eff_day, medicine_illustration, items, data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const PrescriptionChinesePatientModelDetail = ({prescription_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', prescription_patient_model_id)
    const data = await request('/clinic_drug/PrescriptionChinesePatientModelDetail', {prescription_patient_model_id})
    console.log('PrescriptionChinesePatientModelDetail=======', data)
    const docs = data.data || {}
    let frequency_data = {}
    const {frequency_name} = docs
    if (frequency_name) frequency_data[frequency_name] = {name: frequency_name}
    dispatch({
      type: 'FREQUENCY_ADD',
      data: frequency_data
    })
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const PrescriptionChinesePatientModelDelete = ({prescription_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', prescription_patient_model_id)
    const data = await request('/clinic_drug/PrescriptionChinesePatientModelDelete', {prescription_patient_model_id})
    console.log('PrescriptionChinesePatientModelDelete=======', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
