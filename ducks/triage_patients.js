import { request } from './request'
const TRIAGE_PATIENTS_ADD = 'TRIAGE_PATIENTS_ADD'
const TRIAGE_PATIENTS_SELECT = 'TRIAGE_PATIENTS_SELECT'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function triagePatients(state = initState, action = {}) {
  switch (action.type) {
    case TRIAGE_PATIENTS_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case TRIAGE_PATIENTS_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const triagePatientsList = ({ clinic_id, status_start, status_end, keyword, is_today, register_type, startDate, endDate, offset = 0, limit = 6 }) => async dispatch => {
  try {
    const data = await request('/triage/patientlist', {
      clinic_id,
      status_start,
      status_end,
      keyword,
      is_today,
      register_type,
      startDate,
      endDate,
      offset,
      limit
    })
    console.log(data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    // let json = {}
    // for (let doc of docs) {
    //   json[doc.clinic_triage_patient_id] = doc
    // }
    dispatch({
      type: TRIAGE_PATIENTS_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const addTriagePatientsList = ({ patientInfo }) => async dispatch => {
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

export const triagePatient = ({ doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id }) => async dispatch => {
  try {
    console.log('data ====', { doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id })
    const data = await request('/triage/chooseDoctor', { doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id })
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

export const triageReception = ({ clinic_triage_patient_id, recept_personnel_id }) => async dispatch => {
  try {
    const data = await request('/triage/reception', { clinic_triage_patient_id, recept_personnel_id })
    console.log('data ====', data)
    if (data.code === '200') {
      return null
    } else {
      return data.msg
    }
  } catch (e) {
    return e.message
  }
}

export const addAppointment = ({ cert_no, name, birthday, sex, phone, address, profession, remark, patient_channel_id, clinic_id, doctor_visit_schedule_id, personnel_id, visit_type }) => async dispatch => {
  try {
    console.log('data ====', { cert_no, name, birthday, sex, phone, address, profession, remark, patient_channel_id, clinic_id, doctor_visit_schedule_id, personnel_id, visit_type })
    const data = await request('/appointment/create', { cert_no, name, birthday, sex, phone, address, profession, remark, patient_channel_id, clinic_id, doctor_visit_schedule_id, personnel_id, visit_type })
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

export const triagePatientsSelect = ({ clinic_triage_patient_id }) => async dispatch => {
  try {
    dispatch({
      type: TRIAGE_PATIENTS_SELECT,
      selectId: clinic_triage_patient_id
    })
    return null
  } catch (e) {
    return e.message
  }
}
