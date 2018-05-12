import { request } from './request'
const DRUG_PROJECT_ADD = 'DRUG_PROJECT_ADD'
const DRUG_JSON_ADD = 'DRUG_JSON_ADD'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  selectId: null
}

export function drugs(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DRUG_JSON_ADD:
      return { ...state, json_data: { ...state.json_data, ...action.json_data } }
    default:
      return state
  }
}

export const queryDrugList = (requetData) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/drug/list', requetData)
    console.log('queryDrugList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      for (let doc of docs) {
        json_data[doc.drug_stock_id] = doc
      }
      dispatch({
        type: DRUG_JSON_ADD,
        json_data
      })
    } else {
      dispatch({
        type: DRUG_PROJECT_ADD,
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

export const drugCreate = ({ drugInfo }) => async dispatch => {
  try {
    const data = await request('/drug/create', drugInfo)
    console.log(drugInfo, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
