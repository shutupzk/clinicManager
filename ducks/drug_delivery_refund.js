import { request } from './request'
const QUERY_DRUG_REFUND_TRIAGE = 'QUERY_DRUG_REFUND_TRIAGE'

const initState = {
  traige_list: [],
  traige_list_page: {},
  traige_selectId: null
}

// 待发药
export function drugDeliveryRefund(state = initState, action = {}) {
  switch (action.type) {
    case QUERY_DRUG_REFUND_TRIAGE:
      return { ...state, traige_list: action.data, traige_list_page: action.page_info }
    default:
      return state
  }
}

export const queryDrugRefundTraigeList = ({ keyword, offset = 0, limit = 6, clinic_id, start_date, end_date }) => async dispatch => {
  try {
    const data = await request('/drugDelivery/traige/refund/list', {
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
      type: QUERY_DRUG_REFUND_TRIAGE,
      data: docs,
      page_info
    })
    return docs
  } catch (e) {
    console.log(e)
    return null
  }
}
