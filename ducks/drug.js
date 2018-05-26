import { request } from './request'
const DRUG_PROJECT_ADD = 'DRUG_PROJECT_ADD'
const DRUG_JSON_ADD = 'DRUG_JSON_ADD'
const DIC_DRUG_ARRAY_ADD = 'DIC_DRUG_ARRAY_ADD'

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
    case DIC_DRUG_ARRAY_ADD:
      return { ...state, drug_data: action.drug_data }
    default:
      return state
  }
}

export const queryDrugList = (requetData, isJson) => async dispatch => {
  try {
    console.log('limit====', requetData)
    const data = await request('/drug/list', requetData)
    console.log('queryDrugList=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (isJson) {
      let json_data = {}
      let unitJson = {}
      let frequencyJson = {}
      let routeJson = {}
      for (let doc of docs) {
        const { packing_unit_id, packing_unit_name, once_dose_unit_id, once_dose_unit_name, route_administration_id, route_administration_name, frequency_id, frequency_name } = doc
        json_data[doc.drug_stock_id] = doc
        if (packing_unit_id) unitJson[packing_unit_id] = { id: packing_unit_id, name: packing_unit_name }
        if (once_dose_unit_id) unitJson[once_dose_unit_id] = { id: once_dose_unit_id, name: once_dose_unit_name }
        if (frequency_id) frequencyJson[frequency_id] = { id: frequency_id, name: frequency_name }
        if (route_administration_id) routeJson[route_administration_id] = { id: route_administration_id, name: route_administration_name }
      }
      dispatch({
        type: DRUG_JSON_ADD,
        json_data
      })
      dispatch({
        type: 'DOSE_UNIT_ADD',
        data: unitJson
      })
      dispatch({
        type: 'FREQUENCY_ADD',
        data: frequencyJson
      })
      dispatch({
        type: 'ROUTE_ADMINISTRATION_ADD',
        data: routeJson
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

export const queryDicDrugsList = ({ keyword = '', offset = 0, limit = 10 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/Drugs', {
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    // let sample_data = {}
    // const page_info = data.page_info || {}
    console.log('docs======', docs)
    // for (let doc of docs) {
    //   const {laboratory_sample} = doc
    //   if (laboratory_sample) sample_data[laboratory_sample] = {name: laboratory_sample}
    // }
    dispatch({
      type: DIC_DRUG_ARRAY_ADD,
      drug_data: docs
    })
    // dispatch({
    //   type: 'LABORATORY_SAMPLE_LIST',
    //   data: sample_data
    // })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
