import { request } from './request'
const OTHER_COST_ADD = 'OTHER_COST_ADD'
const OTHER_COST_ARRAY = 'OTHER_COST_ARRAY'

const initState = {
  data: {},
  array_data: [],
  page_info: {},
  selectId: null
}

export function otherCostS(state = initState, action = {}) {
  switch (action.type) {
    case OTHER_COST_ADD:
      return { ...state, data: {...state.data, ...action.data} }
    case OTHER_COST_ARRAY:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryOtherCostList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/otherCost/list', {
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
        type: OTHER_COST_ARRAY,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_other_cost_id] = doc
        // json[doc.name] = doc
      }
      dispatch({
        type: OTHER_COST_ADD,
        data: json,
        page_info
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const otherCostsCreate = (requestData) => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }
    const data = await request('/otherCost/create', requestData)
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
export const OtherCostUpdate = (requestData) => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }
    const data = await request('/otherCost/update', requestData)
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
export const OtherCostOnOff = requestData => async dispatch => {
  try {
    const data = await request('/otherCost/onOff', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const OtherCostDetail = ({clinic_other_cost_id}) => async dispatch => {
  try {
    console.log('limit====', clinic_other_cost_id)
    const data = await request('/otherCost/detail', {clinic_other_cost_id})
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
