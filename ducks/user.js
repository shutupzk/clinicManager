import { request } from './request'
import localforage from 'localforage'
const USER_SIGNIN = 'USER_SIGNIN'
const USER_SIGNOUT = 'USER_SIGNOUT'

const initState = {
  data: {},
  selectId: null
}

export function user (state = initState, action = {}) {
  switch (action.type) {
    case USER_SIGNIN:
      return Object.assign({}, state, { data: Object.assign({}, state.data, action.data) })
    case USER_SIGNOUT:
      return Object.assign({}, state, { selectId: action.selectId })
    default:
      return state
  }
}

export const signin = ({ username, password }) => async dispatch => {
  try {
    const data = await request('/personnel/login', {
      username,
      password
    })
    if (data.code !== '200') {
      return data.msg
    }
    const user = data.data || {}
    let json = { [user.id]: user }
    const { id } = user
    localforage.setItem('userId', id)
    localforage.setItem('username', username)
    localforage.setItem('password', password)
    dispatch({
      type: USER_SIGNIN,
      data: json
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const signout = ({ username, password }) => async dispatch => {
  try {
    localforage.clear()
    dispatch({
      type: USER_SIGNOUT
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
