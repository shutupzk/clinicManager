import { request } from './request'
const DIAGNOSIS_TREATMENT_ADD = 'DIAGNOSIS_TREATMENT_ADD'
const DIAGNOSIS_TREATMENT_ARRAY = 'DIAGNOSIS_TREATMENT_ARRAY'
const DICTIONARY_DIAGNOSIS_LIST = 'DICTIONARY_DIAGNOSIS_LIST'

const initState = {
  data: {},
  array_data: [],
  page_info: {},
  dic_diagnosis_data: {},
  dic_diagnosis_page_info: {},
  selectId: null
}

export function diagnosisTreatments(state = initState, action = {}) {
  switch (action.type) {
    case DIAGNOSIS_TREATMENT_ADD:
      return { ...state, data: {...state.data, ...action.data} }
    case DIAGNOSIS_TREATMENT_ARRAY:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case DICTIONARY_DIAGNOSIS_LIST:
      return { ...state, dic_diagnosis_data: {...state.dic_diagnosis_data, ...action.dic_diagnosis_data}, dic_diagnosis_page_info: action.dic_diagnosis_page_info }
    default:
      return state
  }
}

export const queryDiagnosisTreatmentList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/diagnosisTreatment/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    console.log('otherCost=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (arrayType) {
      dispatch({
        type: DIAGNOSIS_TREATMENT_ARRAY,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_diagnosis_treatment_id] = doc
        // json[doc.name] = doc
      }
      dispatch({
        type: DIAGNOSIS_TREATMENT_ADD,
        data: json
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const diagnosisTreatmentCreate = (requestData) => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }
    const data = await request('/diagnosisTreatment/create', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const DiagnosisTreatmentUpdate = (requestData) => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }
    const data = await request('/diagnosisTreatment/update', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const DiagnosisTreatmentOnOff = requestData => async dispatch => {
  try {
    const data = await request('/diagnosisTreatment/onOff', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const DiagnosisTreatmentDetail = ({clinic_diagnosis_treatment_id}) => async dispatch => {
  try {
    console.log('limit====', clinic_diagnosis_treatment_id)
    const data = await request('/diagnosisTreatment/detail', {clinic_diagnosis_treatment_id})
    console.log('DiagnosisTreatmentDetail=======', data)
    const docs = data.data || {}
    // let array_data = []
    // array_data.push(docs)
    // dispatch({
    //   type: TREATMENT_PROJECT_ADD,
    //   data: docs
    // })
    let unitJson = {}
    // let sample_data = {}
    // let color_data = {}
    const {unit_name} = docs
    if (unit_name) unitJson[unit_name] = { name: unit_name }
    dispatch({ type: 'DOSE_UNIT_ADD', data: unitJson })
    // if (laboratory_sample) sample_data[laboratory_sample] = {name: laboratory_sample}
    // if (cuvette_color_name) color_data[cuvette_color_name] = {name: cuvette_color_name}
    // dispatch({ type: 'LABORATORY_SAMPLE_LIST', data: sample_data })
    // dispatch({ type: 'CUVETTE_COLOR_LIST', data: color_data })
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const queryDictDiagnosisList = ({ keyword, offset = 0, limit = 10 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/DiagnosisList', {
      keyword,
      offset,
      limit
    })
    console.log('诊断模板=======', data)
    const docs = data.data || []
    const dic_diagnosis_page_info = data.page_info || {}
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: DICTIONARY_DIAGNOSIS_LIST,
      dic_diagnosis_data: json,
      dic_diagnosis_page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
