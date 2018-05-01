import { request } from './request'
const PATIENT_ADD = 'PATIENT_ADD'
const PATIENT_SELECT = 'PATIENT_SELECT'

const initState = {
  data: [],
  selectId: null
}

export function patients(state = initState, action = {}) {
  switch (action.type) {
    case PATIENT_ADD:
      return { ...state, data: action.data }
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
