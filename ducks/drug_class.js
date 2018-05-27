import { request } from './request'
const DRUG_CLASS_ADD = 'DRUG_CLASS_ADD'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function drugClasses(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_CLASS_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryDrugClassList = ({ keyword, offset = 0, limit = 100, clinic_id }) => async dispatch => {
  try {
    const data = await request('/dictionaries/DrugClassList', {
      keyword,
      offset,
      limit,
      clinic_id
    })
    console.log('queryDrugClassList =====', data)
    const docs = data.data || []
    let json = {}
    for (let doc of docs) {
      json[doc.id] = doc
    }
    dispatch({
      type: DRUG_CLASS_ADD,
      data: json
    })
    return docs[0]
  } catch (e) {
    console.log(e)
    return null
  }
}
