import { request } from './request'
const LABORATORY_ITEM_ADD = 'LABORATORY_ITEM_ADD'
const LABORATORY_ITEM_ARRAY_ADD = 'LABORATORY_ITEM_ARRAY_ADD'
const LABO_ITEM_ARRAY_ADD = 'LABO_ITEM_ARRAY_ADD'

const initState = {
  data: {},
  array_data: [],
  page_info: {},
  laboItem_data: [],
  selectId: null
}

export function laboratoryItems(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_ITEM_ADD:
      return { ...state, data: {...state.data, ...action.data} }
    case LABORATORY_ITEM_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case LABO_ITEM_ARRAY_ADD:
      return { ...state, laboItem_data: action.laboItem_data }
    default:
      return state
  }
}

export const queryLaboratoryItemList = ({ clinic_id, name, status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/laboratory/item/list', {
      clinic_id,
      name,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    console.log('docs======', docs)
    if (arrayType) {
      dispatch({
        type: LABORATORY_ITEM_ARRAY_ADD,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_laboratory_item_id] = doc
      }
      dispatch({
        type: LABORATORY_ITEM_ADD,
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

export const laboratoryItemCreate = ({requestData}) => async dispatch => {
  try {
    if (requestData.items) {
      for (let i = 0; i < requestData.items.length; i++) {
        if (requestData.items[i].is_pregnancy) {
          requestData.items[i].is_pregnancy = requestData.items[i].is_pregnancy + ''
        }
      }
      requestData.items = JSON.stringify(requestData.items)
    }
    console.log('requestData', requestData)
    const data = await request('/laboratory/item/create', requestData)
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
export const LaboratoryItemUpdate = ({requestData}) => async dispatch => {
  try {
    if (requestData.items) {
      for (let i = 0; i < requestData.items.length; i++) {
        if (requestData.items[i].is_pregnancy) {
          requestData.items[i].is_pregnancy = requestData.items[i].is_pregnancy + ''
        }
      }
      requestData.items = JSON.stringify(requestData.items)
    }
    console.log('requestData', requestData)
    const data = await request('/laboratory/item/update', requestData)
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
export const LaboratoryItemOnOff = requestData => async dispatch => {
  try {
    const data = await request('/laboratory/item/onOff', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const LaboratoryItemDetail = ({clinic_laboratory_item_id}) => async dispatch => {
  try {
    console.log('limit====', clinic_laboratory_item_id)
    const data = await request('/laboratory/item/detail', {clinic_laboratory_item_id})
    console.log('LaboratoryDetail=======', data)
    const docs = data.data || {}
    // let array_data = []
    // array_data.push(docs)
    dispatch({
      type: LABORATORY_ITEM_ADD,
      data: docs
    })
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

export const queryLaboItemsList = ({ keyword = '', offset = 0, limit = 10 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/LaboratoryItems', {
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    let unit_data = {}
    // const page_info = data.page_info || {}
    console.log('docs======', docs)
    for (let doc of docs) {
      const {unit_name} = doc
      if (unit_name) unit_data[unit_name] = {id: unit_name, name: unit_name}
    }
    dispatch({
      type: LABO_ITEM_ARRAY_ADD,
      laboItem_data: docs
    })
    dispatch({
      type: 'DOSE_UNIT_ADD',
      data: unit_data
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
