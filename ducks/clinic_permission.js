import { request } from './request'
const CLINIC_PERMISSIONS_HAS_LIST = 'CLINIC_PERMISSIONS_HAS_LIST'
const CLINIC_PERMISSIONS_UN_LIST = 'CLINIC_PERMISSIONS_UN_LIST'

const initState = {
  has_set_permissions: [],
  un_set_permissions: []
}

export function clinicPermissions(state = initState, action = {}) {
  switch (action.type) {
    case CLINIC_PERMISSIONS_HAS_LIST:
      return { ...state, has_set_permissions: action.data }
    case CLINIC_PERMISSIONS_UN_LIST:
      return { ...state, un_set_permissions: action.data }
    default:
      return state
  }
}

// 查询诊所待开通的权限
export const queryClinicUnsetPermissions = clinic_id => async dispatch => {
  try {
    const res = await request('/business/menubar/list/clinicUnset', { clinic_id })
    const data = res.data || []
    dispatch({ type: CLINIC_PERMISSIONS_UN_LIST, data })
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

// 查询诊所已设置的权限
export const queryClinicHassetPermissions = clinic_id => async dispatch => {
  try {
    const res = await request('/business/clinic/menubar', { clinic_id })
    const data = res.data || []
    dispatch({ type: CLINIC_PERMISSIONS_HAS_LIST, data })
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const createClinicPermissions = ({ clinic_id, items }) => async dispatch => {
  try {
    console.log(items)
    const res = await request('/business/clinic/assign', { clinic_id, items })
    console.log('wwww', res)
    if (res && res.code === '200') return null
    return (res && res.msg) || '更新失败'
  } catch (e) {
    console.log(e)
    return '更新失败'
  }
}
