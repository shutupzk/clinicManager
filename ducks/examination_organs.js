import { request } from './request'
const EXAMINATION_ORGAN_ADD = 'EXAMINATION_ORGAN_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function examinationOrgans(state = initState, action = {}) {
  switch (action.type) {
    case EXAMINATION_ORGAN_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryExaminationOrganList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/ExaminationOrganList', {
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: EXAMINATION_ORGAN_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
