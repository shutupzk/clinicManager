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
    const data = await request('/drug/PrescriptionChinesePatientModelList', {
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

    for (let item of docs) {
      let array = item.items || []
      const { route_administration_id, route_administration_name, frequency_id, frequency_name } = item
      if (frequency_id) frequencyJson[frequency_id] = { id: frequency_id, name: frequency_name }
      if (route_administration_id) routeJson[route_administration_id] = { id: route_administration_id, name: route_administration_name }
      for (let doc of array) {
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
  items,
  route_administration_id,
  frequency_id,
  amount,
  fetch_address,
  eff_day,
  medicine_illustration
}) => async dispatch => {
  try {
    const data = await request('/drug/PrescriptionChinesePatientModelCreate', {
      model_name,
      is_common,
      operation_id,
      route_administration_id,
      frequency_id,
      amount,
      fetch_address,
      eff_day,
      medicine_illustration,
      items: JSON.stringify(items)
    })
    console.log('data ======', model_name, is_common, operation_id, route_administration_id, frequency_id, amount, fetch_address, eff_day, medicine_illustration, data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
