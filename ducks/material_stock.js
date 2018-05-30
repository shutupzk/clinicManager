import { request } from './request'
const MATERIAL_STOCK_ADD = 'MATERIAL_STOCK_ADD'
const MATERIAL_STOCK_JSON_ADD = 'MATERIAL_STOCK_JSON_ADD'
const MATERIAL_STOCK_SELECT = 'MATERIAL_STOCK_SELECT'
const MATERIAL_INSTOCK_RECORD_DETAIL = 'MATERIAL_INSTOCK_RECORD_DETAIL'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  detail_data: {},
  selectId: null
}

export function materailStocks(state = initState, action = {}) {
  switch (action.type) {
    case MATERIAL_STOCK_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case MATERIAL_STOCK_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    case MATERIAL_INSTOCK_RECORD_DETAIL:
      return { ...state, detail_data: { ...state.detail_data, ...action.detail_data } }
    default:
      return state
  }
}

export const queryMaterialInstockRecord = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/material/instockRecord', requetData)
    console.log('queryMaterialInstockRecord=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.material_stock_id] = doc
      }
      dispatch({
        type: MATERIAL_STOCK_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: MATERIAL_STOCK_ADD,
        data: docs,
        page_info
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const createMaterialInstock = (requetData) => async dispatch => {
  try {
    const data = await request('/material/instock', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const MaterialInstockUpdate = (requetData) => async dispatch => {
  try {
    const data = await request('/material/instockUpdate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const MaterialInstockRecordDelete = (requetData) => async dispatch => {
  try {
    const data = await request('/material/instockDelete', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const materialStockSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: MATERIAL_STOCK_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
export const queryMaterialInstockRecordDetail = ({material_instock_record_id}) => async dispatch => {
  try {
    console.log('limit====', material_instock_record_id)
    const data = await request('/material/instockRecordDetail', {material_instock_record_id})
    console.log('queryMaterialInstockRecordDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const MaterialInstockCheck = (requetData) => async dispatch => {
  try {
    const data = await request('/material/instockCheck', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
