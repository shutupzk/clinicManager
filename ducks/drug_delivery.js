import { request } from './request'
const QUERY_DRUG_DELIVERY_RECORD_LIST = 'QUERY_DRUG_DELIVERY_RECORD_LIST'
const DRUG_DELIVERY_RECORD_SELECT = 'DRUG_DELIVERY_RECORD_SELECT'

const initState = {
  data: [],
  data_page: {},
  selectId: ''
}

// 发药记录
export function drugDelivery(state = initState, action = {}) {
  switch (action.type) {
    case QUERY_DRUG_DELIVERY_RECORD_LIST:
      return { ...state, data: action.data, data_page: action.page_info }
    case DRUG_DELIVERY_RECORD_SELECT:
      return { ...state, selectId: action.selectId }
    default:
      return state
  }
}

export const queryDrugDeliveryRecordList = ({ offset = 0, limit = 10, clinic_triage_patient_id }) => async dispatch => {
  try {
    const data = await request('/drugDelivery/record/list', {
      clinic_triage_patient_id,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {
      offset,
      limit,
      total: 0
    }
    dispatch({
      type: QUERY_DRUG_DELIVERY_RECORD_LIST,
      data: docs,
      page_info
    })
    return docs
  } catch (e) {
    console.log(e)
    return null
  }
}

export const drugDeliverySelect = selectId => dispatch => {
  dispatch({
    type: DRUG_DELIVERY_RECORD_SELECT,
    selectId
  })
}

export const drugDeliveryCreate = ({ clinic_triage_patient_id, operation_id, items }) => async dispatch => {
  try {
    const data = await request('/drugDelivery/record/create', {
      clinic_triage_patient_id,
      operation_id,
      items
    })
    if (data && data.code === '200') return null
    else return data.msg || '未知错误'
  } catch (e) {
    console.log(e)
    return e
  }
}
