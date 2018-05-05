import { request } from './request'
const DOCTOR_ADD = 'DOCTOR_ADD'
const DOCTOR_SELECT = 'DOCTOR_SELECT'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function doctors(state = initState, action = {}) {
  switch (action.type) {
    case DOCTOR_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case DOCTOR_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const queryDoctorList = ({ clinic_id, personnel_type, keyword, offset = 0, limit = 6, department_id }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/personnel/list', {
      clinic_id,
      personnel_type,
      keyword,
      offset,
      limit,
      department_id
    })
    console.log('personnel ======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: DOCTOR_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const doctorCreate = ({ clinic_id, department_id, code, name, weight, title, personnel_type, username, password }) => async dispatch => {
  try {
    const data = await request('/personnel/create', {
      clinic_id,
      department_id,
      code,
      name,
      weight,
      title,
      personnel_type,
      username,
      password
    })
    console.log(
      {
        clinic_id,
        department_id,
        code,
        weight,
        title,
        personnel_type,
        username,
        password
      },
      data
    )
    if (data.code === '200') return null
    return data.msg
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
