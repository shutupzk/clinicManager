import { request } from './request'
const QUERY_DRUG_PENDING_TRIAGE = 'QUERY_DRUG_PENDING_TRIAGE'
const QUERY_DRUG_PENDING_TRIAGE_SELECT = 'QUERY_DRUG_PENDING_TRIAGE_SELECT'
const QUERY_DRUG_DELIVERY_LIST = 'QUERY_DRUG_DELIVERY_LIST'

const initState = {
  traige_list: [],
  traige_list_page: {},
  traige_selectId: null,
  drug_delivery_list: []
}

// 待发药
export function drugDeliveryPending(state = initState, action = {}) {
  switch (action.type) {
    case QUERY_DRUG_PENDING_TRIAGE:
      return { ...state, traige_list: action.data, traige_list_page: action.page_info }
    case QUERY_DRUG_PENDING_TRIAGE_SELECT:
      return { ...state, traige_selectId: action.selectId }
    case QUERY_DRUG_DELIVERY_LIST:
      return { ...state, drug_delivery_list: action.data }
    default:
      return state
  }
}

export const queryDrugPendingTraigeList = ({ keyword, offset = 0, limit = 6, clinic_id, start_date, end_date }) => async dispatch => {
  try {
    const data = await request('/drugDelivery/traige/waiting/list', {
      keyword,
      offset,
      limit,
      clinic_id,
      start_date,
      end_date
    })
    const docs = data.data || []
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
    dispatch({
      type: QUERY_DRUG_PENDING_TRIAGE,
      data: docs,
      page_info
    })
    return docs
  } catch (e) {
    console.log(e)
    return null
  }
}

export const queryDrugDeliveryList = ({ clinic_triage_patient_id, order_status, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/drugDelivery/list', {
      clinic_triage_patient_id,
      order_status
    })
    const docs = data.data || []
    dispatch({
      type: QUERY_DRUG_DELIVERY_LIST,
      data: docs
    })
    return docs
  } catch (e) {
    console.log(e)
    return null
  }
}

export const drugPendingTraigeSelect = selectId => dispatch => {
  dispatch({
    type: QUERY_DRUG_PENDING_TRIAGE_SELECT,
    selectId
  })
}
