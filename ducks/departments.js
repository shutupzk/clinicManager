import { request } from './request'
const DEPARTMENT_ADD = 'DEPARTMENT_ADD'
const DEPARTMENT_SELECT = 'DEPARTMENT_SELECT'
const DEPARTMENT_DELETE = 'DEPARTMENT_DELETE'

const initState = {
  data: {},
  selectId: null
}

export function departments(state = initState, action = {}) {
  switch (action.type) {
    case DEPARTMENT_ADD:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case DEPARTMENT_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case DEPARTMENT_DELETE:
      let data = Object.assign({}, state.data)
      delete data[action.apiName]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const departmentList = ({ clinic_id }) => async dispatch => {
  try {
    const data = await request('/department/list', {
      clinic_id
    })
    console.log('departments========', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: DEPARTMENT_ADD,
      data: json
    })
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
