import { request } from './request'
const DOSE_FORM_ADD = 'DOSE_FORM_ADD'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function doseForms(state = initState, action = {}) {
  switch (action.type) {
    case DOSE_FORM_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryDoseFormList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('剂型limit====', limit, keyword)
    const data = await request('/dictionaries/DoseFormList', {
      keyword,
      offset,
      limit
    })
    console.log('剂型data =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.name] = doc
    }
    dispatch({
      type: DOSE_FORM_ADD,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
