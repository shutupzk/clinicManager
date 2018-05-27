import { request } from './request'
const DRUG_STOCK_ADD = 'DRUG_STOCK_ADD'
const DRUG_STOCK_JSON_ADD = 'DRUG_STOCK_JSON_ADD'
const DRUG_STOCK_SELECT = 'DRUG_STOCK_SELECT'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  selectId: null
}

export function drugStocks(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_STOCK_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DRUG_STOCK_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
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

export const createDrugInstock = ({ drugInfo }) => async dispatch => {
  try {
    const data = await request('/clinic_drug/instock', drugInfo)
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
