import { request } from './request'
const SCHDULE_DEPARTMENT_ADD = 'SCHDULE_DEPARTMENT_ADD'
const SCHDULE_DOCTOR_ADD = 'SCHDULE_DOCTOR_ADD'
const SCHDULE_SCHEDULE_DOCTOR_ADD = 'SCHDULE_SCHEDULE_DOCTOR_ADD'

const initState = {
  schedules: [],
  page_info: {},
  departments: [],
  doctors: [],
  scheduleDoctors: []
}

export function schedules(state = initState, action = {}) {
  switch (action.type) {
    case SCHDULE_DEPARTMENT_ADD:
      return { ...state, departments: action.data }
    case SCHDULE_DOCTOR_ADD:
      return { ...state, doctors: action.data }
    case SCHDULE_SCHEDULE_DOCTOR_ADD:
      return { ...state, scheduleDoctors: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryScheduleDepartments = ({ clinic_id }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/departments', {
      clinic_id
    })
    const docs = data.data || []
    dispatch({
      type: SCHDULE_DEPARTMENT_ADD,
      data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryScheduleDoctors = ({ department_id }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/doctors', {
      department_id
    })
    const docs = data.data || []
    let array = docs.map((doc) => {
      return { ...doc, department_id }
    })
    dispatch({
      type: SCHDULE_DOCTOR_ADD,
      data: array
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const queryDoctorsWithSchedule = ({ clinic_id, start_date, end_date, offset, limit, department_id, personnel_id }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/DoctorsWithSchedule', {
      clinic_id, start_date, end_date, offset, limit, department_id, personnel_id
    })
    console.log('data ========= ', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: SCHDULE_SCHEDULE_DOCTOR_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
