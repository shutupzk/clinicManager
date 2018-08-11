import { request } from './request'
const DRUG_INVENTORY_ADD = 'DRUG_INVENTORY_ADD'
const DRUG_INVENTORY_JSON_ADD = 'DRUG_INVENTORY_JSON_ADD'
const DRUG_INVENTORY_SELECT = 'DRUG_INVENTORY_SELECT'
const DRUG_STOCK_INVENTORY_DETAIL = 'DRUG_STOCK_INVENTORY_DETAIL'
const DRUG_STOCK_INVENTORY = 'DRUG_STOCK_INVENTORY'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  detail_data: [],
  d_page_info: {},
  selectId: null
}

export function drugInventorys(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_INVENTORY_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DRUG_INVENTORY_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    case DRUG_STOCK_INVENTORY_DETAIL:
      return { ...state, detail_data: action.detail_data, d_page_info: action.d_page_info }
    case DRUG_STOCK_INVENTORY:
      return { ...state, detail_data: action.detail_data, d_page_info: action.d_page_info }
    default:
      return state
  }
}

export const DrugInventoryList = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/clinic_drug/DrugInventoryList', requetData)
    console.log('DrugInventoryList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.drug_inventory_record_id] = doc
      }
      dispatch({
        type: DRUG_INVENTORY_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: DRUG_INVENTORY_ADD,
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

export const DrugInventoryCreate = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/DrugInventoryCreate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const DrugInventoryUpdate = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/DrugInventoryUpdate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const DrugInventoryRecordDelete = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/DrugInventoryRecordDelete', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const drugInventorySelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: DRUG_INVENTORY_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
export const DrugInventoryRecordDetail = ({clinic_id, drug_inventory_record_id, keyword, status, amount, offset, limit}) => async dispatch => {
  try {
    console.log('DrugInventoryRecordDetail====', {clinic_id, drug_inventory_record_id, keyword, status, amount, offset, limit})
    const data = await request('/clinic_drug/DrugInventoryRecordDetail', {clinic_id, drug_inventory_record_id, keyword, status, amount, offset, limit})
    console.log('DrugInventoryRecordDetail=======', data)
    const docs = data.data.items || []
    const page_info = data.page_info || {}
    // let detail_data = {}
    // for (let doc of docs) {
    //   detail_data[doc.id] = doc
    // }
    dispatch({
      type: DRUG_STOCK_INVENTORY_DETAIL,
      detail_data: docs,
      d_page_info: page_info
    })
    return {docs, page_info}
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const DrugStockInventoryList = ({clinic_id, keyword, status, amount, offset, limit}) => async dispatch => {
  try {
    console.log('DrugStockInventoryList====', {clinic_id, keyword, status, amount, offset, limit})
    const data = await request('/clinic_drug/DrugStockInventoryList', {clinic_id, keyword, status, amount, offset, limit})
    console.log('DrugStockInventoryList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    // let detail_data = {}
    // for (let doc of docs) {
    //   detail_data[doc.id] = doc
    // }
    dispatch({
      type: DRUG_STOCK_INVENTORY,
      detail_data: docs,
      d_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const DrugInventoryCheck = (requetData) => async dispatch => {
  try {
    const data = await request('/clinic_drug/DrugInventoryCheck', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
