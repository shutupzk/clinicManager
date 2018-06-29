import { request } from './request'
const MENU_ADD = 'MENU_ADD'
const MENU_JSON = 'MENU_JSON'
const MENU_SELECT = 'MENU_SELECT'

const initState = {
  data: [],
  array_data: [],
  page_info: {},
  selectId: null
}

export function menus(state = initState, action = {}) {
  switch (action.type) {
    case MENU_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case MENU_JSON:
      return { ...state, data: {...state.data, ...action.data}, page_info: action.page_info }
    case MENU_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const queryMenuGetByClinicID = ({ clinic_id }, jsonType) => async dispatch => {
  try {
    console.log('queryMenuGetByClinicID====', clinic_id)
    const data = await request('/business/clinic/menubar', {
      clinic_id
    })
    console.log('role ======', {
      clinic_id
    }, data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (jsonType) {
      let json = {}
      for (let doc of docs) {
        json[doc.id] = doc
        // json[doc.name] = doc
      }
      dispatch({
        type: MENU_JSON,
        data: json,
        page_info
      })
    } else {
      dispatch({
        type: MENU_ADD,
        array_data: docs,
        page_info
      })
      return docs
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const menuSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: MENU_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
