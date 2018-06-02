import { request } from './request'
const DRUG_OUT_STOCK_ADD = 'DRUG_OUT_STOCK_ADD'
const DRUG_OUT_STOCK_JSON_ADD = 'DRUG_OUT_STOCK_JSON_ADD'
const DRUG_OUT_STOCK_SELECT = 'DRUG_OUT_STOCK_SELECT'
const OUTSTOCK_WAY_JSON = 'OUTSTOCK_WAY_JSON'
// const SUPPLIER_JSON = 'SUPPLIER_JSON'
const OUTSTOCK_RECORD_DETAIL = 'INSTOCK_RECORD_DETAIL'
const STOCK_LIST = 'STOCK_LIST'
const STOCK_ARRAY_LIST = 'STOCK_ARRAY_LIST'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  stock_page_info: {},
  outstock_way: {},
  detail_data: {},
  stock_data: {},
  stock_array_data: [],
  selectId: null
}

export function drugOutStocks(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_OUT_STOCK_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DRUG_OUT_STOCK_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    case OUTSTOCK_WAY_JSON:
      return { ...state, outstock_way: { ...state.outstock_way, ...action.outstock_way } }
    case OUTSTOCK_RECORD_DETAIL:
      return { ...state, detail_data: { ...state.detail_data, ...action.detail_data } }
    case STOCK_LIST:
      return { ...state, stock_data: { ...state.stock_data, ...action.stock_data } }
    case STOCK_ARRAY_LIST:
      return { ...state, stock_array_data: action.stock_array_data, stock_page_info: action.stock_page_info }
    default:
      return state
  }
}

export const queryDrugOutstockRecord = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/clinic_drug/outstockRecord', requetData)
    console.log('queryDrugOutstockRecord=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.drug_stock_id] = doc
      }
      dispatch({
        type: DRUG_OUT_STOCK_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: DRUG_OUT_STOCK_ADD,
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

export const createDrugOutstock = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/outstock', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const DrugOutstockUpdate = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/outstockUpdate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const DrugOutstockRecordDelete = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/outstockDelete', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const drugOutStockSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: DRUG_OUT_STOCK_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
export const queryDrugOutstockRecordDetail = ({drug_outstock_record_id}) => async dispatch => {
  try {
    console.log('limit====', drug_outstock_record_id)
    const data = await request('/clinic_drug/outstockRecordDetail', {drug_outstock_record_id})
    console.log('queryDrugOutstockRecordDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const DrugOutstockCheck = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/outstockCheck', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryOutstockWayList = ({keyword = '', limit = 10, offset = 0}) => async dispatch => {
  try {
    console.log('limit====', keyword)
    const data = await request('/dictionaries/OutstockWayList', {keyword, limit, offset})
    console.log('queryOutstockWayList=======', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    let outstock_way = {}
    for (let doc of docs) {
      outstock_way[doc.id] = doc
    }
    dispatch({
      type: OUTSTOCK_WAY_JSON,
      outstock_way
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryDrugStockList = (requestData, arrayType) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/clinic_drug/DrugStockList', requestData)
    console.log('queryDrugStockList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    let stock_data = {}
    if (arrayType) {
      dispatch({
        type: STOCK_ARRAY_LIST,
        stock_array_data: docs,
        stock_page_info: page_info
      })
      for (let doc of docs) {
        stock_data[doc.drug_stock_id] = doc
      }
      dispatch({
        type: STOCK_LIST,
        stock_data
      })
    } else {
      for (let doc of docs) {
        stock_data[doc.drug_stock_id] = doc
      }
      dispatch({
        type: STOCK_LIST,
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
