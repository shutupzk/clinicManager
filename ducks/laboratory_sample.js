import { request } from './request'
const LABORATORY_SAMPLE_LIST = 'LABORATORY_SAMPLE_LIST'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function laboratorySamples(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_SAMPLE_LIST:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryLaboratorySampleList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/LaboratorySampleList', {
      keyword,
      offset,
      limit
    })
    console.log('标本data =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: LABORATORY_SAMPLE_LIST,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
