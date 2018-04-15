import axios from 'axios'
import { API_SERVER } from '../config'

const url = `http://${API_SERVER}/server/`

const PROJECT_FUNCTION_SUCCESS = 'PROJECT_FUNCTION_SUCCESS'
const PROJECT_FUNCTION_SELECT = 'PROJECT_FUNCTION_SELECT'
const PROJECT_FUNCTION_REMOVE = 'PROJECT_FUNCTION_REMOVE'

const initState = {
  data: {},
  selectId: null
}

export function projectFunctions (state = initState, action = {}) {
  switch (action.type) {
    case PROJECT_FUNCTION_SUCCESS:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case PROJECT_FUNCTION_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case PROJECT_FUNCTION_REMOVE:
      let data = Object.assign({}, state.data)
      delete data[action.fnName]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const createProjectFunction = ({ fnName, chName, description, fnBody, models, project }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectFunctionAdd', { fnName, chName, description, models, fnBody, project })
    const doc = data.data.data
    let json = {}
    json[doc.fnName] = Object.assign({}, doc, { project })
    dispatch({
      type: PROJECT_FUNCTION_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const queryProjectFunctions = ({ project }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectFunctionList', { project })
    const docs = data.data.data
    let json = {}
    for (let doc of docs) {
      json[doc.fnName] = Object.assign({}, doc, { project })
    }
    dispatch({
      type: PROJECT_FUNCTION_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const removeProjectFunction = ({ project, fnName }) => async dispatch => {
  try {
    const data = await axios.post(url + 'prjectFunctionRemove', { project, fnName })
    const { code, message } = data.data
    if (code !== '200') return message
    dispatch({
      type: PROJECT_FUNCTION_REMOVE,
      fnName
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const selectProjectFunction = ({ fnName }) => dispatch => {
  dispatch({
    type: PROJECT_FUNCTION_SELECT,
    selectId: fnName
  })
}
