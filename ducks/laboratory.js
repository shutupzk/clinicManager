import { request } from './request'
const LABORATORY_PROJECT_ADD = 'LABORATORY_PROJECT_ADD'
const LABORATORY_ARRAY_ADD = 'LABORATORY_ARRAY_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function laboratories(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case LABORATORY_ARRAY_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryLaboratoryList = ({ clinic_id, name, status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit, arrayType)
    const data = await request('/laboratory/list', {
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
        type: LABORATORY_ARRAY_ADD,
        data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_laboratory_id] = doc
      }
      dispatch({
        type: LABORATORY_PROJECT_ADD,
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

export const laboratoryCreate = (requestData) => async dispatch => {
  try {
    const data = await request('/laboratory/create', requestData)
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
