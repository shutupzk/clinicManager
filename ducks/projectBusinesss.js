import axios from 'axios'
import { API_SERVER } from '../config'

const url = `http://${API_SERVER}/server/`

const PROJECT_BUSINESS_SUCCESS = 'PROJECT_BUSINESS_SUCCESS'
const PROJECT_BUSINESS_SELECT = 'PROJECT_BUSINESS_SELECT'
const PROJECT_BUSINESS_REMOVE = 'PROJECT_BUSINESS_REMOVE'

const initState = {
  data: {},
  selectId: null
}

export function projectBusinesss (state = initState, action = {}) {
  switch (action.type) {
    case PROJECT_BUSINESS_SUCCESS:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case PROJECT_BUSINESS_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case PROJECT_BUSINESS_REMOVE:
      let data = Object.assign({}, state.data)
      delete data[action.business]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const createProjectBusiness = ({ business, chName, description, project, apis }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectBusinessAdd', { business, chName, description, apis, project })
    const doc = data.data.data
    let json = {}
    json[doc.business] = Object.assign({}, doc, { project })
    dispatch({
      type: PROJECT_BUSINESS_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const queryProjectBusinesss = ({ project }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectBusinessList', { project })
    const docs = data.data.data
    let json = {}
    for (let doc of docs) {
      json[doc.business] = Object.assign({}, doc, { project })
    }
    dispatch({
      type: PROJECT_BUSINESS_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const removeProjectBusiness = ({ project, business }) => async dispatch => {
  try {
    const data = await axios.post(url + 'prjectBusinessRemove', { project, business })
    const { code, message } = data.data
    if (code !== '200') return message
    dispatch({
      type: PROJECT_BUSINESS_REMOVE,
      business
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const selectProjectBusiness = ({ business }) => dispatch => {
  dispatch({
    type: PROJECT_BUSINESS_SELECT,
    selectId: business
  })
}
