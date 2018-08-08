import { request } from './request'
const OUT_PATIENT_LOG = 'OUT_PATIENT_LOG'
const CONS_TYPE = 'CONS_TYPE'
const REC_TREATMENT = 'REC_TREATMENT'
const EXAM_STIC = 'EXAM_STIC'
const LABOR_STIC = 'LABOR_STIC'
const TREAT_STIC = 'TREAT_STIC'
const REGIST_STIC = 'REGIST_STIC'
const EFF_STIC = 'EFF_STIC'

const initState = {
  l_data: [],
  t_data: [],
  l_page_info: {},
  t_page_info: {},
  t_total: {},
  r_data: [],
  exam_data: [],
  exam_page: {},
  labor_data: [],
  labor_page: {},
  treat_data: [],
  treat_page: {},
  regist_data: [],
  eff_data: [],
  eff_page: {}
}

export function medReports(state = initState, action = {}) {
  switch (action.type) {
    case OUT_PATIENT_LOG:
      return { ...state, l_data: action.l_data, l_page_info: action.l_page_info }
    case CONS_TYPE:
      return { ...state, t_data: action.t_data, t_page_info: action.t_page_info, t_total: action.t_total }
    case REC_TREATMENT:
      return { ...state, r_data: action.data }
    case EXAM_STIC:
      return { ...state, exam_data: action.data, exam_page: action.page_info }
    case LABOR_STIC:
      return { ...state, labor_data: action.data, labor_page: action.page_info }
    case TREAT_STIC:
      return { ...state, treat_data: action.data, treat_page: action.page_info }
    case REGIST_STIC:
      return { ...state, regist_data: action.data }
    case EFF_STIC:
      return { ...state, eff_data: action.data, eff_page: action.page_info }
    default:
      return state
  }
}

export const OutPatietnRecords = ({ start_date, end_date, clinic_id, patient_name, phone, doctor_id, operation_id, offset = 0, limit = 10 }) => async dispatch => {
  // console.log('OutPatietnRecords====', {
  //   start_date,
  //   end_date,
  //   clinic_id,
  //   patient_name,
  //   phone,
  //   doctor_id,
  //   operation_id,
  //   offset,
  //   limit
  // })
  try {
    const data = await request('/medicalReport/outPatient/record', {
      start_date,
      end_date,
      clinic_id,
      patient_name,
      phone,
      doctor_id,
      operation_id,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: OUT_PATIENT_LOG,
      l_data: docs,
      l_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const OutPatietnType = ({ start_date, end_date, clinic_id, patient_name, phone, doctor_id, operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/medicalReport/outPatient/type', {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    const t_total = data.total || {}
    console.log('OutPatietnType====', data)
    dispatch({
      type: CONS_TYPE,
      t_data: docs,
      t_page_info: page_info,
      t_total: t_total
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const ReceiveTreatment = ({ start_date, end_date, clinic_id, department_id }) => async dispatch => {
  try {
    const data = await request('/medicalReport/ReceiveTreatment', {
      start_date,
      end_date,
      clinic_id,
      department_id
    })

    const docs = data.data || []

    dispatch({
      type: REC_TREATMENT,
      data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const ExaminationStatistics = ({ start_date, end_date, clinic_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/medicalReport/ExaminationStatistics', {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    })

    const docs = data.data || []

    const page_info = data.page_info || {
      total: 0,
      offset,
      limit
    }

    dispatch({
      type: EXAM_STIC,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const LaboratoryStatistics = ({ start_date, end_date, clinic_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/medicalReport/LaboratoryStatistics', {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    })

    const docs = data.data || []
    const page_info = data.page_info || {
      total: 0,
      offset,
      limit
    }

    dispatch({
      type: LABOR_STIC,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const TreatmentStatistics = ({ start_date, end_date, clinic_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/medicalReport/TreatmentStatistics', {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    })

    const docs = data.data || []
    const page_info = data.page_info || {
      total: 0,
      offset,
      limit
    }
    dispatch({
      type: TREAT_STIC,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const RegisterStatistics = ({ start_date, end_date, clinic_id }) => async dispatch => {
  try {
    const data = await request('/medicalReport/RegisterStatistics', {
      start_date,
      end_date,
      clinic_id
    })

    const docs = data.data || []

    dispatch({
      type: REGIST_STIC,
      data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const OutPatietnEfficiencyStatistics = ({ start_date, end_date, clinic_id, offset = 0, limit = 10, department_id }) => async dispatch => {
  try {
    const data = await request('/medicalReport/OutPatietnEfficiencyStatistics', {
      start_date,
      end_date,
      clinic_id,
      department_id,
      offset,
      limit
    })

    console.log(data)

    const docs = data.data || []
    const page_info = data.page_info || {
      total: 0,
      offset,
      limit
    }

    dispatch({
      type: EFF_STIC,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
