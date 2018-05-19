import { request } from './request'
const DIAGNOSIS_TREATMENT_ADD = 'DIAGNOSIS_TREATMENT_ADD'
const DIAGNOSIS_TREATMENT_ARRAY = 'DIAGNOSIS_TREATMENT_ARRAY'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function diagnosisTreatments(state = initState, action = {}) {
  switch (action.type) {
    case DIAGNOSIS_TREATMENT_ADD:
      return { ...state, data: {...state.data, ...action.data}, page_info: action.page_info }
    case DIAGNOSIS_TREATMENT_ARRAY:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryDiagnosisTreatmentList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/diagnosisTreatment/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    console.log('otherCost=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (arrayType) {
      dispatch({
        type: DIAGNOSIS_TREATMENT_ARRAY,
        data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_other_cost_id] = doc
        // json[doc.name] = doc
      }
      dispatch({
        type: DIAGNOSIS_TREATMENT_ADD,
        data: json,
        page_info
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const diagnosisTreatmentCreate = (requestData) => async dispatch => {
  try {
    const data = await request('/diagnosisTreatment/create', requestData)
    console.log(
      requestData,
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
