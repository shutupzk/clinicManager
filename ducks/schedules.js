import { request } from './request'
const SCHDULE_SCHEDULE_ADD = 'SCHDULE_SCHEDULE_ADD'
const SCHDULE_DEPARTMENT_ADD = 'SCHDULE_DEPARTMENT_ADD'
const SCHDULE_DOCTOR_ADD = 'SCHDULE_DOCTOR_ADD'
const SCHDULE_SCHEDULE_DOCTOR_ADD = 'SCHDULE_SCHEDULE_DOCTOR_ADD'

const initState = {
  schedules: [],
  page_info: {},
  canOverride: false,
  departments: [],
  doctors: [],
  scheduleDoctors: []
}

export function schedules(state = initState, action = {}) {
  switch (action.type) {
    case SCHDULE_SCHEDULE_ADD:
      return { ...state, schedules: action.data }
    case SCHDULE_DEPARTMENT_ADD:
      return { ...state, departments: action.data }
    case SCHDULE_DOCTOR_ADD:
      return { ...state, doctors: action.data }
    case SCHDULE_SCHEDULE_DOCTOR_ADD:
      return { ...state, scheduleDoctors: action.data, page_info: action.page_info, canOverride: action.canOverride, needOpen: action.needOpen }
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

export const querySchedules = ({ clinic_id, department_id, personnel_id, start_date, end_date }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/list', {
      clinic_id,
      department_id,
      personnel_id,
      start_date,
      end_date
    })
    const docs = data.data || []
    dispatch({
      type: SCHDULE_SCHEDULE_ADD,
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
    let array = docs.map(doc => {
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
      clinic_id,
      start_date,
      end_date,
      offset,
      limit,
      department_id,
      personnel_id
    })
    console.log('data ========= ', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    const canOverride = data.canOverride
    const needOpen = data.needOpen
    dispatch({
      type: SCHDULE_SCHEDULE_DOCTOR_ADD,
      data: docs,
      page_info,
      canOverride,
      needOpen
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const copyScheduleByDate = ({ clinic_id, copy_start_date, insert_start_date }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/CopyScheduleByDate', {
      clinic_id,
      copy_start_date,
      insert_start_date,
      day_long: 7
    })
    console.log('data ========= ', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const openScheduleByDate = ({ clinic_id, start_date }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/OpenScheduleByDate', {
      clinic_id,
      start_date,
      day_long: 7
    })
    console.log('data ========= ', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const createOneSchedule = ({ department_id, personnel_id, visit_date, am_pm }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/CreateOneSchedule', {
      department_id,
      personnel_id,
      visit_date,
      am_pm
    })
    console.log('data ========= ', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const deleteOneUnOpenScheduleByID = ({ doctor_visit_schedule_id }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/DeleteOneUnOpenScheduleByID', {
      doctor_visit_schedule_id
    })
    console.log('data ========= ', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const stopScheduleByID = ({ doctor_visit_schedule_id }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/StopScheduleByID', {
      doctor_visit_schedule_id
    })
    console.log('data ========= ', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const CreateOneSchedule = ({ department_id, personnel_id, visit_date, am_pm }) => async dispatch => {
  try {
    const data = await request('/doctorVisitSchedule/CreateOneSchedule', {
      department_id, personnel_id, visit_date, am_pm
    })
    console.log('data ========= ', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
