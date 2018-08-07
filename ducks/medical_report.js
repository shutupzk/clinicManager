import { request } from './request'
const OUT_PATIENT_LOG = 'OUT_PATIENT_LOG'
const CONS_TYPE = 'CONS_TYPE'
// const FINACIAL_MONTH = 'FINACIAL_MONTH'
// const PROFIT_REPORT = 'PROFIT_REPORT'

const initState = {
  p_data: [],
  b_data: [],
  m_data: [],
  l_data: [],
  t_data: [],
  r_data: {}
}

export function medReports(state = initState, action = {}) {
  switch (action.type) {
    case OUT_PATIENT_LOG:
      return { ...state, l_data: action.l_data, l_page_info: action.l_page_info }
    case CONS_TYPE:
      return { ...state, t_data: action.t_data, t_page_info: action.t_page_info }
    // case FINACIAL_MONTH:
    //   return { ...state, m_data: action.m_data }
    // case PROFIT_REPORT:
    //   return { ...state, r_data: action.r_data }
    default:
      return state
  }
}

export const OutPatietnRecords = ({
  start_date,
  end_date,
  clinic_id,
  patient_name,
  phone,
  doctor_id,
  operation_id,
  offset = 0,
  limit = 10
}) => async dispatch => {
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
    const page_info = data.page_info
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

export const OutPatietnType = ({
  start_date,
  end_date,
  clinic_id,
  patient_name,
  phone,
  doctor_id,
  operation_id,
  offset = 0,
  limit = 10
}) => async dispatch => {
  try {
    const data = await request('/medicalReport/outPatient/type', {
      start_date,
      end_date,
      clinic_id,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info
    dispatch({
      type: CONS_TYPE,
      t_data: docs,
      t_page_info: page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
// export const ChargeDayReportByBusiness = ({ start_date, end_date, clinic_id }) => async dispatch => {
//   try {
//     const data = await request('/financialAnalysis/ChargeDayReportByBusiness', {
//       start_date, end_date, clinic_id
//     })
//     const docs = data.data || []
//     dispatch({
//       type: FINACIAL_BUSINESS,
//       b_data: docs
//     })
//     return null
//   } catch (e) {
//     console.log(e)
//     return e.message
//   }
// }
// export const ChargeMonthReportByPayWay = ({ start_date, end_date }) => async dispatch => {
//   try {
//     const data = await request('/financialAnalysis/ChargeMonthReportByPayWay', {
//       start_date, end_date
//     })
//     const docs = data.data || []
//     dispatch({
//       type: FINACIAL_MONTH,
//       m_data: docs
//     })
//     return null
//   } catch (e) {
//     console.log(e)
//     return e.message
//   }
// }
// export const ProfitReport = ({ start_date, end_date, clinic_id }) => async dispatch => {
//   try {
//     const data = await request('/financialAnalysis/ProfitReport', {
//       start_date, end_date, clinic_id
//     })
//     const docs = data.data || null
//     dispatch({
//       type: PROFIT_REPORT,
//       r_data: docs
//     })
//     return null
//   } catch (e) {
//     console.log(e)
//     return e.message
//   }
// }
