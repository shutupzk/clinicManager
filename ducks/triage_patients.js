import { request } from './request'
const TRIAGE_PATIENTS_ADD = 'TRIAGE_PATIENTS_ADD'
const TRIAGE_PATIENTS_SELECT = 'TRIAGE_PATIENTS_SELECT'
const TRIAGE_DATE_APPOINTMENT_QUERY = 'TRIAGE_DATE_APPOINTMENT_QUERY'

const initState = {
  data: [],
  date_appointments: {
    clinic_array: [],
    doctor_array: [],
    page_info: {}
  },
  treatment_patients: [],
  page_info: {},
  selectId: null
}

export function triagePatients(state = initState, action = {}) {
  switch (action.type) {
    case TRIAGE_DATE_APPOINTMENT_QUERY:
      return { ...state, date_appointments: action.data }
    case TRIAGE_PATIENTS_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case TRIAGE_PATIENTS_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const triagePatientsList = ({
  clinic_id,
  department_id,
  personnel_id,
  status_start,
  status_end,
  keyword,
  is_today,
  register_type,
  startDate,
  endDate,
  offset = 0,
  limit = 6
}) => async dispatch => {
  try {
    const data = await request('/triage/patientlist', {
      clinic_id,
      department_id,
      personnel_id,
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
    if (data.code === '200') {
      return null
    } else {
      return data.msg
    }
  } catch (e) {
    return e.message
  }
}

export const triageFinish = ({ clinic_triage_patient_id, recept_personnel_id }) => async dispatch => {
  try {
    const data = await request('/triage/complete', { clinic_triage_patient_id, recept_personnel_id })
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
    const data = await request('/appointment/create', {
      cert_no,
      name,
      birthday,
      sex,
      phone,
      address,
      profession,
      remark,
      patient_channel_id,
      clinic_id,
      doctor_visit_schedule_id,
      personnel_id,
      visit_type
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

export const queryAppointmentsByDate = ({ clinic_id, department_id, personnel_id, start_date, offset, limit, day_long }) => async dispatch => {
  try {
    const data = await request('/triage/AppointmentsByDate', { clinic_id, department_id, personnel_id, start_date, offset, limit, day_long })
    if (data.code !== '200') return data.msg
    let { clinic_array, doctor_array, page_info } = data
    clinic_array = clinic_array || []
    doctor_array = doctor_array || []
    page_info = page_info || []
    dispatch({
      type: TRIAGE_DATE_APPOINTMENT_QUERY,
      data: {
        clinic_array,
        doctor_array,
        page_info
      }
    })
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const completeBodySign = ({
  clinic_triage_patient_id,
  weight,
  height,
  bmi,
  blood_type,
  rh_blood_type,
  temperature_type,
  temperature,
  breathe,
  pulse,
  systolic_blood_pressure,
  diastolic_blood_pressure,
  blood_sugar_time,
  blood_sugar_type,
  left_vision,
  right_vision,
  oxygen_saturation,
  pain_score
}) => async dispatch => {
  try {
    console.log(' completeBodySign ======= ', {
      clinic_triage_patient_id,
      weight,
      height,
      bmi,
      blood_type,
      rh_blood_type,
      temperature_type,
      temperature,
      breathe,
      pulse,
      systolic_blood_pressure,
      diastolic_blood_pressure,
      blood_sugar_time,
      blood_sugar_type,
      left_vision,
      right_vision,
      oxygen_saturation,
      pain_score
    })
    const data = await request('/triage/completeBodySign', {
      clinic_triage_patient_id,
      weight,
      height,
      bmi,
      blood_type,
      rh_blood_type,
      temperature_type,
      temperature,
      breathe,
      pulse,
      systolic_blood_pressure,
      diastolic_blood_pressure,
      blood_sugar_time,
      blood_sugar_type,
      left_vision,
      right_vision,
      oxygen_saturation,
      pain_score
    })
    console.log('data ========', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const completePreMedicalRecord = ({
  clinic_triage_patient_id,
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
  childbearing_history
}) => async dispatch => {
  try {
    const data = await request('/triage/completePreMedicalRecord', {
      clinic_triage_patient_id,
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
      childbearing_history
    })
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const completePreDiagnosis = ({ clinic_triage_patient_id, chief_complaint, history_of_rresent_illness, history_of_past_illness, physical_examination, remark }) => async dispatch => {
  try {
    const data = await request('/triage/completePreDiagnosis', {
      clinic_triage_patient_id,
      chief_complaint,
      history_of_rresent_illness,
      history_of_past_illness,
      physical_examination,
      remark
    })
    if (data.code !== '200') return data.msg
    return null
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
