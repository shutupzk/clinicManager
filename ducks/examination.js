import { request } from './request'
const EXAM_PROJECT_ADD = 'EXAM_PROJECT_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function examinations(state = initState, action = {}) {
  switch (action.type) {
    case EXAM_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryExaminationList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/examination/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: EXAM_PROJECT_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const examinationCreate = ({ clinic_id, name, en_name, py_code, idc_code, unit_id, organ, remark, price, cost, status, is_discount }) => async dispatch => {
  try {
    const data = await request('/examination/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      idc_code,
      unit_id,
      organ,
      remark,
      price,
      cost,
      status,
      is_discount
    })
    console.log(
      {
        clinic_id,
        name,
        en_name,
        py_code,
        idc_code,
        unit_id,
        organ,
        remark,
        price,
        cost,
        status,
        is_discount
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
