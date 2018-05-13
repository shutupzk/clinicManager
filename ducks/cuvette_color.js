import { request } from './request'
const CUVETTE_COLOR_LIST = 'CUVETTE_COLOR_LIST'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function cuvetteColors(state = initState, action = {}) {
  switch (action.type) {
    case CUVETTE_COLOR_LIST:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryCuvetteColorList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/CuvetteColorList', {
      keyword,
      offset,
      limit
    })
    console.log('试管颜色data =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: CUVETTE_COLOR_LIST,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
