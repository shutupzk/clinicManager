import { request } from './request'
const TRIAGE_DOCTORS_ADD = 'TRIAGE_DOCTORS_ADD'
const TRIAGE_DOCTORS_SELECT = 'TRIAGE_DOCTORS_SELECT'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function triageDoctors(state = initState, action = {}) {
  switch (action.type) {
    case TRIAGE_DOCTORS_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case TRIAGE_DOCTORS_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const triageDoctorsList = ({ clinic_id, department_id, offset, limit, keyword }) => async dispatch => {
  try {
    console.log('department_id', department_id)
    const data = await request('/triage/personnelList', {
      clinic_id,
      department_id,
      offset,
      limit,
      keyword
    })
    console.log(data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    // let json = {}
    // for (let doc of docs) {
    //   json[doc.doctor_visit_schedule_id] = doc
    // }
    dispatch({
      type: TRIAGE_DOCTORS_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const addTriageDoctorsList = ({ patientInfo }) => async dispatch => {
  try {
    console.log('patientInfo', patientInfo)
    const data = await request('/triage/register', patientInfo)
    console.log(data)
    if (data.code === '200') {
      return null
    } else {
      return data.msg
    }
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const triageDoctorsSelect = ({ doctor_visit_schedule_id }) => async dispatch => {
  try {
    dispatch({
      type: TRIAGE_DOCTORS_SELECT,
      selectId: doctor_visit_schedule_id
    })
    return null
  } catch (e) {
    return e.message
  }
}
