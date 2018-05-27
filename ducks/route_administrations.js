import { request } from './request'
const ROUTE_ADMINISTRATION_ADD = 'ROUTE_ADMINISTRATION_ADD'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function routeAdministrationss(state = initState, action = {}) {
  switch (action.type) {
    case ROUTE_ADMINISTRATION_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryRouteAdministrationList = ({ keyword, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/dictionaries/RouteAdministrationList', {
      keyword,
      offset,
      limit
    })
    console.log('用法data =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.name] = doc
    }
    dispatch({
      type: ROUTE_ADMINISTRATION_ADD,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
