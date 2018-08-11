import { request } from './request'
const MATERIAL_INVENTORY_ADD = 'MATERIAL_INVENTORY_ADD'
const MATERIAL_INVENTORY_JSON_ADD = 'MATERIAL_INVENTORY_JSON_ADD'
const MATERIAL_INVENTORY_SELECT = 'MATERIAL_INVENTORY_SELECT'
const MATERIAL_STOCK_INVENTORY_DETAIL = 'MATERIAL_STOCK_INVENTORY_DETAIL'
const MATERIAL_STOCK_INVENTORY = 'MATERIAL_STOCK_INVENTORY'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  detail_data: [],
  d_page_info: {},
  selectId: null
}

export function materialInventorys(state = initState, action = {}) {
  switch (action.type) {
    case MATERIAL_INVENTORY_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case MATERIAL_INVENTORY_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    case MATERIAL_STOCK_INVENTORY_DETAIL:
      return { ...state, detail_data: action.detail_data, d_page_info: action.d_page_info }
    case MATERIAL_STOCK_INVENTORY:
      return { ...state, detail_data: action.detail_data, d_page_info: action.d_page_info }
    default:
      return state
  }
}

export const MaterialInventoryList = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/material/MaterialInventoryList', requetData)
    console.log('MaterialInventoryList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.material_inventory_record_id] = doc
      }
      dispatch({
        type: MATERIAL_INVENTORY_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: MATERIAL_INVENTORY_ADD,
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

export const MaterialInventoryCreate = (requetData) => async dispatch => {
  try {
    const data = await request('/material/MaterialInventoryCreate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const MaterialInventoryUpdate = (requetData) => async dispatch => {
  try {
    const data = await request('/material/MaterialInventoryUpdate', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const MaterialInventoryRecordDelete = (requetData) => async dispatch => {
  try {
    const data = await request('/material/MaterialInventoryRecordDelete', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const materialInventorySelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: MATERIAL_INVENTORY_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
export const MaterialInventoryRecordDetail = ({clinic_id, material_inventory_record_id, keyword, status, amount, offset, limit}) => async dispatch => {
  try {
    console.log('MaterialInventoryRecordDetail====', {clinic_id, material_inventory_record_id, keyword, status, amount, offset, limit})
    const data = await request('/material/MaterialInventoryRecordDetail', {clinic_id, material_inventory_record_id, keyword, status, amount, offset, limit})
    console.log('MaterialInventoryRecordDetail=======', data)
    const docs = data.data.items || []
    const page_info = data.page_info || {}
    // let detail_data = {}
    // for (let doc of docs) {
    //   detail_data[doc.id] = doc
    // }
    dispatch({
      type: MATERIAL_STOCK_INVENTORY_DETAIL,
      detail_data: docs,
      d_page_info: page_info
    })
    return {docs, page_info}
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const MaterialStockInventoryList = ({clinic_id, keyword, status, amount, offset, limit}) => async dispatch => {
  try {
    console.log('MaterialStockInventoryList====', {clinic_id, keyword, status, amount, offset, limit})
    const data = await request('/material/MaterialStockInventoryList', {clinic_id, keyword, status, amount, offset, limit})
    console.log('MaterialStockInventoryList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    // let detail_data = {}
    // for (let doc of docs) {
    //   detail_data[doc.id] = doc
    // }
    dispatch({
      type: MATERIAL_STOCK_INVENTORY,
      detail_data: docs,
      d_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const MaterialInventoryCheck = (requetData) => async dispatch => {
  try {
    const data = await request('/material/MaterialInventoryCheck', requetData)
    console.log(requetData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
