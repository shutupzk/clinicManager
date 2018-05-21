import { request } from './request'
const DEPARTMENT_ADD = 'DEPARTMENT_ADD'
const DEPARTMENT_JSON_ADD = 'DEPARTMENT_JSON_ADD'
const DEPARTMENT_SELECT = 'DEPARTMENT_SELECT'

const initState = {
  data: [],
  json_data: {},
  page_info: {},
  selectId: null
}

export function departments(state = initState, action = {}) {
  switch (action.type) {
    case DEPARTMENT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DEPARTMENT_JSON_ADD:
      return { ...state, json_data: {...state.data, ...action.data}, page_info: action.page_info }
    case DEPARTMENT_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const queryDepartmentList = ({ clinic_id, keyword, offset = 0, limit = 10 }, jsonType) => async dispatch => {
  try {
    const data = await request('/department/list', {
      clinic_id,
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (jsonType) {
      let json = {}
      for (let doc of docs) {
        json[doc.id] = doc
        // json[doc.name] = doc
      }
      dispatch({
        type: DEPARTMENT_JSON_ADD,
        data: json,
        page_info
      })
    } else {
      dispatch({
        type: DEPARTMENT_ADD,
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

export const departmentCreate = ({ departInfo }) => async dispatch => {
  try {
    console.log('departInfo', departInfo)
    const data = await request('/department/create', departInfo)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    return e.message
  }
}

export const departmentSelect = ({ department_id }) => async dispatch => {
  try {
    dispatch({
      type: DEPARTMENT_SELECT,
      selectId: department_id
    })
    return null
  } catch (e) {
    return e.message
  }
}
