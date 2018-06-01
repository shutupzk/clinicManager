import { request } from './request'
const MATERIAL_OUT_STOCK_ADD = 'MATERIAL_OUT_STOCK_ADD'
const MATERIAL_OUT_STOCK_JSON_ADD = 'MATERIAL_OUT_STOCK_JSON_ADD'
const MATERIAL_OUT_STOCK_SELECT = 'MATERIAL_OUT_STOCK_SELECT'
// const OUTSTOCK_WAY_JSON = 'OUTSTOCK_WAY_JSON'
// const SUPPLIER_JSON = 'SUPPLIER_JSON'
const MATERIAL_OUTSTOCK_RECORD_DETAIL = 'MATERIAL_OUTSTOCK_RECORD_DETAIL'
const MATERIAL_STOCK_LIST = 'MATERIAL_STOCK_LIST'
const MATERIAL_STOCK_ARRAY_LIST = 'MATERIAL_STOCK_ARRAY_LIST'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  stock_page_info: {},
  detail_data: {},
  stock_data: {},
  stock_array_data: [],
  selectId: null
}

export function materialOutStocks(state = initState, action = {}) {
  switch (action.type) {
    case MATERIAL_OUT_STOCK_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case MATERIAL_OUT_STOCK_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    case MATERIAL_OUTSTOCK_RECORD_DETAIL:
      return { ...state, detail_data: { ...state.detail_data, ...action.detail_data } }
    case MATERIAL_STOCK_LIST:
      return { ...state, stock_data: { ...state.stock_data, ...action.stock_data } }
    case MATERIAL_STOCK_ARRAY_LIST:
      return { ...state, stock_array_data: action.stock_array_data, stock_page_info: action.stock_page_info }
    default:
      return state
  }
}

export const queryMaterialOutstockRecord = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/material/outstockRecord', requetData)
    console.log('queryMaterialOutstockRecord=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.material_stock_id] = doc
      }
      dispatch({
        type: MATERIAL_OUT_STOCK_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: MATERIAL_OUT_STOCK_ADD,
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

export const createMaterialOutstock = (requetData) => async dispatch => {
  try {
    const data = await request('/material/outstock', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const MaterialOutstockUpdate = (requetData) => async dispatch => {
  try {
    const data = await request('/material/outstockUpdate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const MaterialOutstockRecordDelete = (requetData) => async dispatch => {
  try {
    const data = await request('/material/outstockDelete', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const materialOutStockSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: MATERIAL_OUT_STOCK_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
export const queryMaterialOutstockRecordDetail = ({material_outstock_record_id}) => async dispatch => {
  try {
    console.log('limit====', material_outstock_record_id)
    const data = await request('/material/outstockRecordDetail', {material_outstock_record_id})
    console.log('queryMaterialOutstockRecordDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const MaterialOutstockCheck = (requetData) => async dispatch => {
  try {
    const data = await request('/material/outstockCheck', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryMaterialStockList = (requestData, arrayType) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/material/MaterialStockList', requestData)
    console.log('queryMaterialStockList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    let stock_data = {}
    if (arrayType) {
      dispatch({
        type: MATERIAL_STOCK_ARRAY_LIST,
        stock_array_data: docs,
        stock_page_info: page_info
      })
      for (let doc of docs) {
        stock_data[doc.material_stock_id] = doc
      }
      dispatch({
        type: MATERIAL_STOCK_LIST,
        stock_data
      })
    } else {
      for (let doc of docs) {
        stock_data[doc.material_stock_id] = doc
      }
      dispatch({
        type: MATERIAL_STOCK_LIST,
        stock_data
      })
    }
    return null
    // return stock_data
  } catch (e) {
    console.log(e)
    return e.message
  }
}
