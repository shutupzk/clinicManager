import { request } from './request'
const DRUG_STOCK_ADD = 'DRUG_STOCK_ADD'
const DRUG_STOCK_JSON_ADD = 'DRUG_STOCK_JSON_ADD'
const DRUG_STOCK_SELECT = 'DRUG_STOCK_SELECT'
const INSTOCK_WAY_JSON = 'INSTOCK_WAY_JSON'
const SUPPLIER_JSON = 'SUPPLIER_JSON'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  instock_way: {},
  supplier_data: {},
  selectId: null
}

export function drugStocks(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_STOCK_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DRUG_STOCK_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    case INSTOCK_WAY_JSON:
      return { ...state, instock_way: { ...state.instock_way, ...action.instock_way } }
    case SUPPLIER_JSON:
      return { ...state, supplier_data: { ...state.supplier_data, ...action.supplier_data } }
    default:
      return state
  }
}

export const queryDrugInstockRecord = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/clinic_drug/instockRecord', requetData)
    console.log('queryDrugInstockRecord=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.drug_stock_id] = doc
      }
      dispatch({
        type: DRUG_STOCK_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: DRUG_STOCK_ADD,
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

export const createDrugInstock = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/instock', requetData)
    console.log(drugInfo, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const drugStockSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: DRUG_STOCK_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const queryInstockWayList = ({keyword = '', limit = 10, offset = 0}, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/dictionaries/InstockWayList', {keyword, limit, offset})
    console.log('queryInstockWayList=======', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    let instock_way = {}
    for (let doc of docs) {
      instock_way[doc.id] = doc
    }
    dispatch({
      type: INSTOCK_WAY_JSON,
      instock_way
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const querySupplierList = ({keyword = '', limit = 10, offset = 0}, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/dictionaries/SupplierList', {keyword, limit, offset})
    console.log('querySupplierList=======', data)
    const docs = data.data || []
    // const page_info = data.page_info || {}
    let supplier_data = {}
    for (let doc of docs) {
      supplier_data[doc.id] = doc
    }
    dispatch({
      type: SUPPLIER_JSON,
      supplier_data
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
