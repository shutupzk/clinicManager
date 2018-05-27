import { request } from './request'
const FREQUENCY_ADD = 'FREQUENCY_ADD'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function frequencies(state = initState, action = {}) {
  switch (action.type) {
    case FREQUENCY_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryFrequencyList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/FrequencyList', {
      keyword,
      offset,
      limit
    })
    console.log('频次data =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.name] = doc
    }
    dispatch({
      type: FREQUENCY_ADD,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
