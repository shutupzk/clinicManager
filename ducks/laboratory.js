import { request } from './request'
const LABORATORY_PROJECT_ADD = 'LABORATORY_PROJECT_ADD'
const LABORATORY_ARRAY_ADD = 'LABORATORY_ARRAY_ADD'
const LABO_ARRAY_ADD = 'LABO_ARRAY_ADD'

const initState = {
  data: {},
  array_data: [],
  page_info: {},
  labo_data: [],
  selectId: null
}

export function laboratories(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_PROJECT_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    case LABORATORY_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case LABO_ARRAY_ADD:
      return { ...state, labo_data: action.labo_data }
    default:
      return state
  }
}

export const queryLaboratoryList = ({ clinic_id, keyword = '', status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit, arrayType)
    const data = await request('/laboratory/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    console.log('docs======', docs)
    if (arrayType) {
      dispatch({
        type: LABORATORY_ARRAY_ADD,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_laboratory_id] = doc
      }
      dispatch({
        type: LABORATORY_PROJECT_ADD,
        data: json
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const queryLaboList = ({ keyword = '', offset = 0, limit = 10 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/Laboratorys', {
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    let sample_data = {}
    // const page_info = data.page_info || {}
    console.log('docs======', docs)
    for (let doc of docs) {
      const { laboratory_sample } = doc
      if (laboratory_sample) sample_data[laboratory_sample] = { name: laboratory_sample }
    }
    dispatch({
      type: LABO_ARRAY_ADD,
      labo_data: docs
    })
    dispatch({
      type: 'LABORATORY_SAMPLE_LIST',
      data: sample_data
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const laboratoryCreate = requestData => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }
    const data = await request('/laboratory/create', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryOnOff = requestData => async dispatch => {
  try {
    const data = await request('/laboratory/onOff', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const LaboratoryUpdate = requestData => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }
    const data = await request('/laboratory/update', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const LaboratoryDetail = ({clinic_laboratory_id}) => async dispatch => {
  try {
    console.log('limit====', clinic_laboratory_id)
    const data = await request('/laboratory/detail', {clinic_laboratory_id})
    console.log('LaboratoryDetail=======', data)
    const docs = data.data || {}
    let array_data = []
    array_data.push(docs)
    dispatch({
      type: LABORATORY_PROJECT_ADD,
      data: array_data
    })
    let sample_data = {}
    let color_data = {}
    const {laboratory_sample, cuvette_color_name} = docs
    if (laboratory_sample) sample_data[laboratory_sample] = {name: laboratory_sample}
    if (cuvette_color_name) color_data[cuvette_color_name] = {name: cuvette_color_name}
    dispatch({ type: 'LABORATORY_SAMPLE_LIST', data: sample_data })
    dispatch({ type: 'CUVETTE_COLOR_LIST', data: color_data })
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
