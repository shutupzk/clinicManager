import { request } from './request'
const TREATMENT_MODEL_ADD = 'TREATMENT_MODEL_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function treatmentPatientModels(state = initState, action = {}) {
  switch (action.type) {
    case TREATMENT_MODEL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const TreatmentPatientModelList = ({ keyword = '', is_common, operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/treatment/TreatmentPatientModelList', {
      keyword,
      is_common,
      operation_id,
      offset,
      limit
    })
    console.log('TreatmentPatientModelList =====', keyword, is_common, operation_id, offset, limit)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let page_info = data.page_info

    let json = {}
    for (let doc of docs) {
      let array = doc.items || []
      for (let obj of array) {
        json[obj.clinic_treatment_id] = obj
      }
    }
    dispatch({
      type: 'TREATMENT_PROJECT_ADD',
      data: json
    })

    dispatch({
      type: TREATMENT_MODEL_ADD,
      data: docs,
      page_info
    })

    return null
  } catch (e) {
    console.log(e)
    return []
  }
}

export const TreatmentPatientModelCreate = ({ model_name, is_common = false, operation_id, items }) => async dispatch => {
  try {
    const data = await request('/treatment/TreatmentPatientModelCreate', {
      model_name,
      is_common,
      operation_id,
      items: JSON.stringify(items)
    })
    console.log('TreatmentPatientModelCreate =====', model_name, is_common, operation_id, items)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentPatientModelUpdate = (requestData) => async dispatch => {
  try {
    requestData.items = JSON.stringify(requestData.items)
    console.log('TreatmentPatientModelUpdate =====', requestData)
    const data = await request('/treatment/TreatmentPatientModelUpdate', requestData)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const TreatmentPatientModelDetail = ({treatment_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', treatment_patient_model_id)
    const data = await request('/treatment/TreatmentPatientModelDetail', {treatment_patient_model_id})
    console.log('TreatmentPatientModelDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const TreatmentPatientModelDelete = ({treatment_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', treatment_patient_model_id)
    const data = await request('/treatment/TreatmentPatientModelDelete', {treatment_patient_model_id})
    console.log('TreatmentPatientModelDelete=======', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
