import { request } from './request'
const ADMIN_ADD = 'ADMIN_ADD'
const ADMIN_SELECT = 'ADMIN_SELECT'
import localforage from 'localforage'

const initState = {
  data: [],
  array_data: [],
  page_info: {},
  selectId: null
}

export function admins(state = initState, action = {}) {
  switch (action.type) {
    case ADMIN_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case ADMIN_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const AdminList = (reqData) => async dispatch => {
  try {
    console.log('AdminList====', reqData)
    const data = await request('/admin/list', reqData)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: ADMIN_ADD,
      array_data: docs,
      page_info
    })
    return docs
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const AdminCreate = (reqData) => async dispatch => {
  try {
    const data = await request('/admin/create', reqData)
    console.log(
      reqData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const AdminUpdate = (reqData) => async dispatch => {
  try {
    const data = await request('/admin/update', reqData)
    console.log(
      reqData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const AdminOnOff = ({admin_id, status}) => async dispatch => {
  try {
    const data = await request('/admin/onOff', {admin_id, status})
    console.log({admin_id, status}, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const AdminGetByID = ({admin_id}) => async dispatch => {
  try {
    const data = await request('/admin/getByID', {admin_id})
    console.log('AdminGetByID', data)
    return data
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const AdminLogin = ({ username, password }) => async dispatch => {
  try {
    const data = await request('/admin/login', {
      username,
      password
    })
    console.log('data===', data)
    // if (data.code !== '200') {
    //   return data.msg
    // }
    const user = data.data || {}
    localforage.setItem('userId', user.id)
    localforage.setItem('username', username)
    localforage.setItem('password', password)
    dispatch({
      type: 'USER_SIGNIN',
      data: user
    })
    return data
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const adminSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: ADMIN_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
export const MenubarUnsetByAdminID = ({admin_id}) => async dispatch => {
  try {
    console.log('limit====', admin_id)
    const data = await request('/admin/MenubarUnsetByAdminID', {admin_id})
    console.log('MenubarUnsetByAdminID=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const MenuGetByAdminID = ({admin_id}) => async dispatch => {
  try {
    console.log('limit====', admin_id)
    const data = await request('/admin/menubarList', {admin_id})
    console.log('MenuGetByAdminID=======', data)
    const docs = data.data || []
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
