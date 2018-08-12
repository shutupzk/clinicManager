import { request } from './request'
const DOCTOR_ADD = 'DOCTOR_ADD'
const DOCTOR_JSON = 'DOCTOR_JSON'
const DOCTOR_SELECT = 'DOCTOR_SELECT'
const DOCTOR_WITH_USERNAME_ADD = 'DOCTOR_WITH_USERNAME_ADD'
const PERSONNEL_DEPART_ARRAY = 'PERSONNEL_DEPART_ARRAY'

const initState = {
  data: {},
  array_data: [],
  page_info: {},
  username_array: [],
  username_page_info: {},
  selectId: null
}

export function doctors(state = initState, action = {}) {
  switch (action.type) {
    case DOCTOR_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case DOCTOR_JSON:
      return { ...state, data: { ...state.data, ...action.data }, page_info: action.page_info }
    case DOCTOR_SELECT:
      return { ...state, selectId: action.selectId }
    case PERSONNEL_DEPART_ARRAY:
      return { ...state, personnel_department: action.personnel_department }
    case DOCTOR_WITH_USERNAME_ADD:
      return { ...state, username_array: action.array_data, username_page_info: action.page_info }
    default:
      return state
  }
}

export const queryDoctorList = ({ clinic_id, personnel_type, keyword = '', offset = 0, limit = 10, department_id }, jsonType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/personnel/list', {
      clinic_id,
      personnel_type,
      keyword,
      offset,
      limit,
      department_id
    })
    console.log(
      'personnel ======',
      {
        clinic_id,
        personnel_type,
        keyword,
        offset,
        limit,
        department_id
      },
      data
    )
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (jsonType) {
      let json = {}
      // let doc_json = {}
      // let emp_json = {}
      for (let doc of docs) {
        json[doc.id] = doc
        // json[doc.name] = doc
        // if (doc.personnel_type === 1) {
        //   emp_json[doc.id] = doc
        // } else {
        //   doc_json[doc.id] = doc
        // }
      }
      dispatch({
        type: DOCTOR_JSON,
        data: json,
        // doc_data: doc_json,
        // emp_dta: emp_json,
        page_info
      })
    } else {
      dispatch({
        type: DOCTOR_ADD,
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

export const doctorCreate = ({ clinic_id, department_id, code, name, weight, title, personnel_type, username, password }) => async dispatch => {
  try {
    const data = await request('/personnel/create', {
      clinic_id,
      department_id,
      code,
      name,
      weight,
      title,
      personnel_type,
      username,
      password
    })
    console.log(
      {
        clinic_id,
        department_id,
        code,
        weight,
        title,
        personnel_type,
        username,
        password
      },
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const PersonnelUpdate = ({ personnel_id, clinic_id, is_appointment, department_id, code, name, weight, title, personnel_type, username, password, status }) => async dispatch => {
  try {
    const data = await request(
      '/personnel/update',
      {
        personnel_id,
        clinic_id,
        department_id,
        code,
        name,
        weight,
        title,
        personnel_type,
        username,
        password,
        is_appointment,
        status
      },
      true
    )
    console.log(
      {
        personnel_id,
        clinic_id,
        department_id,
        code,
        name,
        weight,
        title,
        personnel_type,
        username,
        password,
        is_appointment,
        status
      },
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const UpdatePersonnelStatus = ({ personnel_id, status }) => async dispatch => {
  try {
    const data = await request('/personnel/UpdatePersonnelStatus', {
      personnel_id,
      status
    })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const UpdatePersonnelUsername = ({ personnel_id, username, password }) => async dispatch => {
  try {
    const data = await request('/personnel/UpdatePersonnelUsername', {
      personnel_id, username, password
    })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const PersonnelDelete = ({ personnel_id }) => async dispatch => {
  try {
    const data = await request('/personnel/delete', {
      personnel_id
    })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const PersonnelWithUsername = ({ offset = 0, limit = 10, clinic_id, keyword }) => async dispatch => {
  try {
    const data = await request('/personnel/PersonnelWithUsername', {
      clinic_id,
      keyword,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: DOCTOR_WITH_USERNAME_ADD,
      array_data: docs,
      page_info
    })
  } catch (e) {
    console.log(e)
  }
}

export const PersonnelRoles = ({ id }) => async dispatch => {
  try {
    const data = await request('/personnel/PersonnelRoles', { id })
    const docs = data.data || []
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}

export const PersonnelAuthorizationAllocation = ({ id, items }) => async dispatch => {
  try {
    const data = await request('/personnel/PersonnelAuthorizationAllocation', { id, items })
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const doctorSelect = ({ personnel_id }) => async dispatch => {
  try {
    dispatch({
      type: DOCTOR_SELECT,
      selectId: personnel_id
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const PersonnelDepartmentList = ({ personnel_id }) => async dispatch => {
  try {
    const data = await request('/personnel/PersonnelDepartmentList', { personnel_id })
    const docs = data.data || []
    dispatch({
      type: PERSONNEL_DEPART_ARRAY,
      personnel_department: docs
    })
    return docs
  } catch (e) {
    console.log(e)
    return []
  }
}
