import { request } from './request'
const MATERIAL_PROJECT_ADD = 'MATERIAL_PROJECT_ADD'
const MATERIAL_ARRAY_ADD = 'MATERIAL_ARRAY_ADD'

const initState = {
  data: {},
  array_data: [],
  page_info: {},
  selectId: null
}

export function materials(state = initState, action = {}) {
  switch (action.type) {
    case MATERIAL_PROJECT_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    case MATERIAL_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryMaterialList = ({ clinic_id, keyword, status = '', offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit, clinic_id, keyword, status)
    const data = await request('/material/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    console.log(docs)
    if (arrayType) {
      dispatch({
        type: MATERIAL_ARRAY_ADD,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_material_id] = doc
      }
      dispatch({
        type: MATERIAL_PROJECT_ADD,
        data: json
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const materialCreate = (requestData) => async dispatch => {
  try {
    if (requestData.ret_price) {
      requestData.ret_price = Math.round(requestData.ret_price * 100)
    }
    if (requestData.buy_price) {
      requestData.buy_price = Math.round(requestData.buy_price * 100)
    }
    console.log(
      requestData
    )
    const data = await request('/material/create', requestData)
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
export const MaterialUpdate = (requestData) => async dispatch => {
  try {
    if (requestData.ret_price) {
      requestData.ret_price = Math.round(requestData.ret_price * 100)
    }
    if (requestData.buy_price) {
      requestData.buy_price = Math.round(requestData.buy_price * 100)
    }
    console.log(
      requestData
    )
    const data = await request('/material/update', requestData)
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
export const MaterialOnOff = requestData => async dispatch => {
  try {
    const data = await request('/material/onOff', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const MaterialDetail = ({clinic_material_id}) => async dispatch => {
  try {
    console.log('limit====', clinic_material_id)
    const data = await request('/material/detail', {clinic_material_id})
    console.log('MaterialDetail=======', data)
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
