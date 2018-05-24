import { request } from './request'
const LABORATORY_ITEM_ADD = 'LABORATORY_ITEM_ADD'
const LABORATORY_ITEM_ARRAY_ADD = 'LABORATORY_ITEM_ARRAY_ADD'

const initState = {
  data: [],
  array_data: [],
  page_info: {},
  selectId: null
}

export function laboratoryItems(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_ITEM_ADD:
      return { ...state, data: {...state.data, ...action.data}, page_info: action.page_info }
    case LABORATORY_ITEM_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
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
