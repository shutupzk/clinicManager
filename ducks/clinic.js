import { request } from './request'
const CLINIC_LIST = 'CLINIC_LIST'
const CLINIC_SELECT = 'CLINIC_SELECT'
const CLINIC_CODE_ADD = 'CLINIC_CODE_ADD'

const initState = {
  data: [],
  lastest_code: '',
  page_info: {},
  selectId: null
}

export function clinics(state = initState, action = {}) {
  switch (action.type) {
    case CLINIC_LIST:
      return { ...state, data: action.data, page_info: action.page_info }
    case CLINIC_SELECT:
      return { ...state, selectId: action.selectId }
    case CLINIC_CODE_ADD:
      return { ...state, lastest_code: action.data }
    default:
      return state
  }
}

export const queryClinicList = ({ keyword, clinic_status, start_date, end_date, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/clinic/list', {
      keyword,
      start_date,
      end_date,
      status: clinic_status,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {
      total: 0,
      offset,
      limit
    }
    dispatch({
      type: CLINIC_LIST,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const clinicCreate = ({ code, name, responsible_person, province, city, district, area, status = true, username, password, phone }) => async dispatch => {
  try {
    const data = await request('/clinic/add', { code, name, responsible_person, province, city, district, area, status, username, password, phone })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const clinicUpdate = ({ clinic_id, name, responsible_person, province, city, district, area, status = true, username, password, phone }) => async dispatch => {
  try {
    const data = await request('/clinic/update', { clinic_id, name, responsible_person, province, city, district, area, status, username, password, phone })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const clinicUpdateStatus = ({ clinic_id, status }) => async dispatch => {
  try {
    const data = await request('/clinic/update/status', { clinic_id, status })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryClinicCode = () => async dispatch => {
  try {
    const data = await request('/clinic/code')
    if (data.code === '200') {
      dispatch({
        type: CLINIC_CODE_ADD,
        data: data.data.code || 10001
      })
      return null
    }
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const clinicSelect = selectId => dispatch => {
  dispatch({ type: CLINIC_SELECT, selectId })
}
