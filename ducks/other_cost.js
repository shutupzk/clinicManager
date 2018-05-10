import { request } from './request'
const OTHER_COST_ADD = 'OTHER_COST_ADD'

const initState = {
  data: {},
  page_info: {},
  selectId: null
}

export function otherCostS(state = initState, action = {}) {
  switch (action.type) {
    case OTHER_COST_ADD:
      return { ...state, data: {...state.data, ...action.data}, page_info: action.page_info }
    default:
      return state
  }
}

export const queryOtherCostList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/otherCost/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    console.log('otherCost=======', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    let json = {}
    for (let doc of docs) {
      json[doc.clinic_other_cost_id] = doc
      // json[doc.name] = doc
    }
    dispatch({
      type: OTHER_COST_ADD,
      data: json,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const otherCostsCreate = ({ clinic_id, name, en_name, py_code, unit_id, remark, price, cost, status, is_discount }) => async dispatch => {
  try {
    const data = await request('/otherCost/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      unit_id,
      remark,
      price,
      cost,
      status,
      is_discount
    })
    console.log(
      {
        clinic_id,
        name,
        en_name,
        py_code,
        unit_id,
        remark,
        price,
        cost,
        status,
        is_discount
      },
      data
    )
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
