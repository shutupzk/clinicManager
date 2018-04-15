import axios from 'axios'
import { API_SERVER } from '../config'

const url = `http://${API_SERVER}/server/`

const PROJECT_API_SUCCESS = 'PROJECT_API_SUCCESS'
const PROJECT_API_SELECT = 'PROJECT_API_SELECT'
const PROJECT_API_REMOVE = 'PROJECT_API_REMOVE'

const initState = {
  data: {},
  selectId: null
}

export function projectApis (state = initState, action = {}) {
  switch (action.type) {
    case PROJECT_API_SUCCESS:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case PROJECT_API_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case PROJECT_API_REMOVE:
      let data = Object.assign({}, state.data)
      delete data[action.apiName]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const createProjectApi = ({ api, project }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectApiAdd', { api, project })
    const doc = data.data.data
    let json = {}
    json[doc.apiName] = Object.assign({}, doc, { project })
    dispatch({
      type: PROJECT_API_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const queryProjectApis = ({ project }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectApiList', { project })
    const docs = data.data.data
    let json = {}
    for (let doc of docs) {
      json[doc.apiName] = Object.assign({}, doc, { project })
    }
    dispatch({
      type: PROJECT_API_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const removeProjectApi = ({ project, apiName }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectApiRemove', { project, apiName })
    const { code, message } = data.data
    if (code !== '200') return message
    dispatch({
      type: PROJECT_API_REMOVE,
      apiName: apiName
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const selectProjectApi = ({ apiName }) => dispatch => {
  dispatch({
    type: PROJECT_API_SELECT,
    selectId: apiName
  })
}
