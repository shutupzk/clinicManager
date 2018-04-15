import axios from 'axios'
import { API_SERVER } from '../config'

const url = `http://${API_SERVER}/server/`

const BASE_API_SUCCESS = 'BASE_API_SUCCESS'
const BASE_API_SELECT = 'BASE_API_SELECT'
const BASE_API_DELETE = 'BASE_API_DELETE'

const initState = {
  data: {},
  selectId: null
}

export function baseApis (state = initState, action = {}) {
  switch (action.type) {
    case BASE_API_SUCCESS:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case BASE_API_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    case BASE_API_DELETE:
      let data = Object.assign({}, state.data)
      delete data[action.apiName]
      return Object.assign({}, state, { data: data })
    default:
      return state
  }
}

export const createBaseApi = api => async dispatch => {
  try {
    const data = await axios.post(url + 'baseApiAdd', { api })
    const doc = data.data.data
    let json = {}
    json[doc.apiName] = doc
    dispatch({
      type: BASE_API_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const queryBaseApis = () => async dispatch => {
  try {
    const data = await axios.get(url + 'baseApiList')
    const docs = data.data.data
    let json = {}
    for (let doc of docs) {
      json[doc.apiName] = doc
    }
    dispatch({
      type: BASE_API_SUCCESS,
      data: json
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const removeBaseApi = ({ apiName }) => async dispatch => {
  try {
    const data = await axios.post(url + 'baseApiRemove', { apiName })
    const { code, message } = data.data
    if (code !== '200') return message
    dispatch({
      type: BASE_API_DELETE,
      apiName: apiName
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const selectBaseApi = ({ apiName }) => dispatch => {
  dispatch({
    type: BASE_API_SELECT,
    selectId: apiName
  })
}
