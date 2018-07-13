import { request } from './request'
const PATIENT_ADD = 'PATIENT_ADD'
const PATIENT_SELECT = 'PATIENT_SELECT'
const MEMBER_PATIENT_LIST = 'MEMBER_PATIENT_LIST'

const initState = {
  data: [],
  member_patient_data: [],
  page_info: {},
  selectId: null
}

export function patients(state = initState, action = {}) {
  switch (action.type) {
    case PATIENT_ADD:
      return { ...state, data: action.data }
    case MEMBER_PATIENT_LIST:
      return { ...state, member_patient_data: action.member_patient_data, page_info: action.page_info }
    case PATIENT_SELECT:
      return Object.assign({}, state, { selectId: action.selectId })
    default:
      return state
  }
}

export const getPatientByCertNo = ({ cert_no }) => async dispatch => {
  try {
    const data = await request('/patient/getByCertNo', {
      cert_no
    })
    console.log(data)
    const patient = data.data
    if (!patient || !patient.id) return null
    dispatch({
      type: PATIENT_ADD,
      data: [patient]
    })
    return patient
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getPatientByKeyword = ({ keyword }) => async dispatch => {
  console.log('keyword', keyword)
  try {
    const data = await request('/patient/getByKeyword', {
      keyword
    })
    console.log(data)
    const docs = data.data || []
    dispatch({
      type: PATIENT_ADD,
      data: docs
    })
    // return patient
  } catch (e) {
    console.log(e)
    return null
  }
}

export const patientSelect = ({ patient_id }) => async dispatch => {
  try {
    dispatch({
      type: PATIENT_SELECT,
      selectId: patient_id
    })
    return null
  } catch (e) {
    return e.message
  }
}

export const MemberPateintList = ({ keyword = '', offset = 0, limit = 10, start_date, end_date }) => async dispatch => {
  console.log('keyword', { keyword, offset, limit, start_date, end_date })
  try {
    const data = await request('/patient/MemberPateintList', { keyword, offset, limit, start_date, end_date })
    console.log(data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: MEMBER_PATIENT_LIST,
      member_patient_data: docs,
      page_info
    })
    // return patient
  } catch (e) {
    console.log(e)
    return null
  }
}

export const PatientGetByID = ({ patient_id }) => async dispatch => {
  console.log('patient_id ======== ', { patient_id })
  try {
    const data = await request('/patient/getById', { id: patient_id })
    console.log(data)
    return data.data || {}
  } catch (e) {
    console.log(e)
    return {}
  }
}

export const PatientUpdate = ({ patient_id, cert_no, name, birthday, sex, phone, address, profession, remark, patient_channel_id, personnel_id }) => async dispatch => {
  console.log('patient_id ======== ', { patient_id, cert_no, name, birthday, sex, phone, address, profession, remark, patient_channel_id, personnel_id })
  try {
    const data = await request('/patient/update', { id: patient_id, cert_no, name, birthday, sex, phone, address, profession, remark, patient_channel_id, personnel_id })
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

export const PersonalMedicalRecordUpsert = ({
  patient_id,
  has_allergic_history,
  allergic_history,
  personal_medical_history,
  family_medical_history,
  vaccination,
  menarche_age,
  menstrual_period_start_day,
  menstrual_period_end_day,
  menstrual_cycle_start_day,
  menstrual_cycle_end_day,
  menstrual_last_day,
  gestational_weeks,
  childbearing_history,
  remark
}) => async dispatch => {
  console.log('patient_id ======== ', {
    patient_id,
    has_allergic_history,
    allergic_history,
    personal_medical_history,
    family_medical_history,
    vaccination,
    menarche_age,
    menstrual_period_start_day,
    menstrual_period_end_day,
    menstrual_cycle_start_day,
    menstrual_cycle_end_day,
    menstrual_last_day,
    gestational_weeks,
    childbearing_history,
    remark
  })
  try {
    const data = await request('/patient/PersonalMedicalRecordUpsert', {
      patient_id,
      has_allergic_history,
      allergic_history,
      personal_medical_history,
      family_medical_history,
      vaccination,
      menarche_age,
      menstrual_period_start_day,
      menstrual_period_end_day,
      menstrual_cycle_start_day,
      menstrual_cycle_end_day,
      menstrual_last_day,
      gestational_weeks,
      childbearing_history,
      remark
    })
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

export const PersonalMedicalRecord = ({ patient_id }) => async dispatch => {
  console.log('patient_id ======== ', { patient_id })
  try {
    const data = await request('/patient/PersonalMedicalRecord', { patient_id })
    console.log(data)
    return data.data || {}
  } catch (e) {
    console.log(e)
    return {}
  }
}
