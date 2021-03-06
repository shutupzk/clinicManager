import { request } from './request'
const QUERY_DRUG_ISSUED_TRIAGE = 'QUERY_DRUG_ISSUED_TRIAGE'
const QUERY_DRUG_ISSUED_TRIAGE_SELECT = 'QUERY_DRUG_ISSUED_TRIAGE_SELECT'

const initState = {
  traige_list: [],
  traige_list_page: {},
  traige_selectId: null
}

// 已发药
export function drugDeliveryIssued(state = initState, action = {}) {
  switch (action.type) {
    case QUERY_DRUG_ISSUED_TRIAGE:
      return { ...state, traige_list: action.data, traige_list_page: action.page_info }
    case QUERY_DRUG_ISSUED_TRIAGE_SELECT:
      return { ...state, traige_selectId: action.selectId }
    default:
      return state
  }
}

export const queryDrugIssuedTraigeList = ({ keyword, offset = 0, limit = 6, clinic_id, start_date, end_date }) => async dispatch => {
  try {
    const data = await request('/drugDelivery/traige/issued/list', {
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
      type: QUERY_DRUG_ISSUED_TRIAGE,
      data: docs,
      page_info
    })
    return docs
  } catch (e) {
    console.log(e)
    return null
  }
}

export const drugIssuedTraigeSelect = selectId => dispatch => {
  dispatch({
    type: QUERY_DRUG_ISSUED_TRIAGE_SELECT,
    selectId
  })
}
