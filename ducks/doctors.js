import { request } from './request'
const DOCTOR_ADD = 'DOCTOR_ADD'
const DOCTOR_SELECT = 'DOCTOR_SELECT'
const DOCTOR_DELETE = 'DOCTOR_DELETE'

const initState = {
  data: {},
  selectId: null
}

export function doctors (state = initState, action = {}) {
  switch (action.type) {
    case DOCTOR_ADD:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case DOCTOR_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case DOCTOR_DELETE:
      let data = Object.assign({}, state.data)
      delete data[action.apiName]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const doctorList = ({ clinic_id, personnel_type, keyword }) => async dispatch => {
  try {
    const data = await request('/personnel/list', {
      clinic_id,
      personnel_type,
      keyword
    })
    console.log(data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: DOCTOR_ADD,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const doctorSelect = ({ personnel_id }) => async dispatch => {
  try {
    dispatch({
      type: DOCTOR_SELECT,
      selectId: personnel_id
    })
    return null
  } catch (e) {
    return e.message
  }
}
