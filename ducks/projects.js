import axios from 'axios'
import { API_SERVER } from '../config'

const url = `http://${API_SERVER}/server/`

const PROJECT_SUCCESS = 'PROJECT_SUCCESS'
const PROJECT_SELECT = 'PROJECT_SELECT'
const PROJECT_REMOVE = 'PROJECT_REMOVE'

const initState = {
  data: {},
  selectId: null
}

export function projects (state = initState, action = {}) {
  switch (action.type) {
    case PROJECT_SUCCESS:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case PROJECT_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case PROJECT_REMOVE:
      let data = Object.assign({}, state.data)
      delete data[action.project]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const createProject = obj => async dispatch => {
  try {
    const data = await axios.post(url + 'projectAdd', { json: obj })
    const doc = data.data.data
    let json = {}
    json[doc.project] = doc
    dispatch({
      type: PROJECT_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const queryProjects = () => async dispatch => {
  try {
    const data = await axios.get(url + 'projectList')
    const docs = data.data.data
    let json = {}
    for (let doc of docs) {
      json[doc.project] = doc
    }
    dispatch({
      type: PROJECT_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const removeProject = ({ project }) => async dispatch => {
  try {
    const data = await axios.post(url + 'projectRemove', { project })
    const { code, message } = data.data
    if (code !== '200') return message
    dispatch({
      type: PROJECT_REMOVE,
      project
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const selectProject = ({ project }) => dispatch => {
  dispatch({
    type: PROJECT_SELECT,
    selectId: project
  })
}
