import { request } from './request'
const EXAMINATION_ORGAN_ADD = 'EXAMINATION_ORGAN_ADD'
const EXAMINATION_ORGAN_ARRAY_ADD = 'EXAMINATION_ORGAN_ARRAY_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function examinationOrgans(state = initState, action = {}) {
  switch (action.type) {
    case EXAMINATION_ORGAN_ADD:
      return { ...state, data: {...state.data, ...action.data} }
    case EXAMINATION_ORGAN_ARRAY_ADD:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export const queryExaminationOrganList = ({ keyword, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/ExaminationOrganList', {
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    console.log('部位======', docs)
    if (arrayType) {
      dispatch({
        type: EXAMINATION_ORGAN_ARRAY_ADD,
        data: docs
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.name] = doc
      }
      dispatch({
        type: EXAMINATION_ORGAN_ADD,
        data: json
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
