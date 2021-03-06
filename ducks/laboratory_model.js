import { request } from './request'
const LABORATORY_MODEL_ADD = 'LABORATORY_MODEL_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function laboratoryPatientModels(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_MODEL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const LaboratoryPersonalPatientModelList = ({ keyword = '', is_common, operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/laboratory/LaboratoryPersonalPatientModelList', {
      keyword,
      is_common,
      operation_id,
      offset,
      limit
    })
    console.log('LaboratoryPersonalPatientModelList =====', keyword, is_common, operation_id, offset, limit)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let page_info = data.page_info
    let json = {}
    for (let doc of docs) {
      let array = doc.items || []
      for (let obj of array) {
        json[obj.clinic_laboratory_id] = obj
      }
    }
    dispatch({
      type: 'LABORATORY_PROJECT_ADD',
      data: json
    })
    dispatch({
      type: LABORATORY_MODEL_ADD,
      data: docs,
      page_info
    })

    return null
  } catch (e) {
    console.log(e)
    return []
  }
}

export const LaboratoryPatientModelList = ({ keyword = '', is_common, operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/laboratory/LaboratoryPatientModelList', {
      keyword,
      is_common,
      operation_id,
      offset,
      limit
    })
    console.log('LaboratoryPatientModelList =====', keyword, is_common, operation_id, offset, limit)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let page_info = data.page_info
    let json = {}
    for (let doc of docs) {
      let array = doc.items || []
      for (let obj of array) {
        json[obj.clinic_laboratory_id] = obj
      }
    }
    dispatch({
      type: 'LABORATORY_PROJECT_ADD',
      data: json
    })
    dispatch({
      type: LABORATORY_MODEL_ADD,
      data: docs,
      page_info
    })

    return null
  } catch (e) {
    console.log(e)
    return []
  }
}

export const LaboratoryPatientModelCreate = ({ model_name, is_common = false, operation_id, items }) => async dispatch => {
  try {
    const data = await request('/laboratory/LaboratoryPatientModelCreate', {
      model_name,
      is_common,
      operation_id,
      items: JSON.stringify(items)
    })
    console.log('LaboratoryPatientModelCreate =====', model_name, is_common, operation_id, items)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryPatientModelUpdate = (requestData) => async dispatch => {
  try {
    console.log('LaboratoryPatientModelUpdate =====', requestData)
    const data = await request('/laboratory/LaboratoryPatientModelUpdate', requestData)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryPatientModelDetail = ({laboratory_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', laboratory_patient_model_id)
    const data = await request('/laboratory/LaboratoryPatientModelDetail', {laboratory_patient_model_id})
    console.log('LaboratoryPatientModelDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const LaboratoryPatientModelDelete = ({laboratory_patient_model_id}) => async dispatch => {
  try {
    console.log('limit====', laboratory_patient_model_id)
    const data = await request('/laboratory/LaboratoryPatientModelDelete', {laboratory_patient_model_id})
    console.log('LaboratoryPatientModelDelete=======', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
