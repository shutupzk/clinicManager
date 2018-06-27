import { request } from './request'
const EXAMNIATION_MODEL_ADD = 'EXAMNIATION_MODEL_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function examinationModels(state = initState, action = {}) {
  switch (action.type) {
    case EXAMNIATION_MODEL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const examinationModelList = ({ keyword = '', is_common = '', operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/examination/ExaminationPatientModelList', {
      keyword,
      is_common,
      operation_id,
      offset,
      limit
    })
    console.log('ExaminationPatientModelList =====', keyword, is_common, operation_id, offset, limit)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let page_info = data.page_info
    dispatch({
      type: EXAMNIATION_MODEL_ADD,
      data: docs,
      page_info
    })

    return null
  } catch (e) {
    console.log(e)
    return []
  }
}

export const examinationModelCreate = ({ model_name, is_common = false, operation_id, items }) => async dispatch => {
  try {
    const data = await request('/examination/ExaminationPatientModelCreate', {
      model_name,
      is_common,
      operation_id,
      items: JSON.stringify(items)
    })
    console.log('ExaminationPatientModelCreate =====', model_name, is_common, operation_id, items)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationPatientModelUpdate = (requestData) => async dispatch => {
  try {
    const data = await request('/examination/ExaminationPatientModelUpdate', requestData)
    console.log('ExaminationPatientModelUpdate =====', requestData)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationPatientModelDetail = ({examination_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', examination_patient_model_id)
    const data = await request('/examination/ExaminationPatientModelDetail', {examination_patient_model_id})
    console.log('ExaminationPatientModelDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
