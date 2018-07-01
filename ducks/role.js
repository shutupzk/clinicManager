import { request } from './request'
const ROLE_ARRAY_ADD = 'ROLE_ADD'
const ROLE_JSON = 'ROLE_JSON'
const ROLE_SELECT = 'ROLE_SELECT'

const initState = {
  data: [],
  array_data: [],
  page_info: {},
  selectId: null
}

export function roles(state = initState, action = {}) {
  switch (action.type) {
    case ROLE_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case ROLE_JSON:
      return { ...state, data: {...state.data, ...action.data}, page_info: action.page_info }
    case ROLE_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const queryRoleList = ({ clinic_id, keyword = '', offset = 0, limit = 6 }, jsonType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/role/listByClinicID', {
      clinic_id,
      keyword,
      offset,
      limit
    })
    console.log('role ======', {
      clinic_id,
      keyword,
      offset,
      limit
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
        type: ROLE_JSON,
        data: json,
        page_info
      })
    } else {
      dispatch({
        type: ROLE_ARRAY_ADD,
        array_data: docs,
        page_info
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const roleCreate = ({ clinic_id, name, items }) => async dispatch => {
  try {
    console.log(
      {
        clinic_id, name, items
      }
    )
    const data = await request('/role/create', {
      clinic_id, name, items
    })
    console.log(
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const RoleUpdate = ({ role_id, clinic_id, name, items }) => async dispatch => {
  try {
    console.log('RoleUpdate', {
      role_id, clinic_id, name, items
    })
    const data = await request('/role/update', {
      role_id, clinic_id, name, items
    })
    console.log(
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const RoleDetail = ({role_id}) => async dispatch => {
  try {
    console.log('limit====', role_id)
    const data = await request('/role/roleDetail', {role_id})
    console.log('RoleDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const RoleFunctionUnset = ({role_id}) => async dispatch => {
  try {
    console.log('limit====', role_id)
    const data = await request('/role/RoleFunctionUnset', {role_id})
    console.log('RoleFunctionUnset=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const roleSelect = ({ id }) => async dispatch => {
  try {
    dispatch({
      type: ROLE_SELECT,
      selectId: id
    })
    return null
  } catch (e) {
    return e.message
  }
}
