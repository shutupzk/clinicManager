import { request } from './request'
const TREATMENT_PROJECT_ADD = 'TREATMENT_PROJECT_ADD'
const TREATMENT_ARRAY_ADD = 'TREATMENT_ARRAY_ADD'

const initState = {
  data: [],
  array_data: [],
  page_info: {},
  selectId: null
}

export function treatments(state = initState, action = {}) {
  switch (action.type) {
    case TREATMENT_PROJECT_ADD:
      return { ...state, data: { ...state.data, ...action.data }, page_info: action.page_info }
    case TREATMENT_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryTreatmentList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }, arrayType) => async dispatch => {
  try {
    const data = await request('/treatment/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    console.log('queryTreatmentList====', docs)
    if (arrayType) {
      dispatch({
        type: TREATMENT_ARRAY_ADD,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      for (let doc of docs) {
        json[doc.clinic_treatment_id] = doc
      }
      dispatch({
        type: TREATMENT_PROJECT_ADD,
        data: json,
        page_info
      })
    }
    // array.push({
    //   value: clinic_treatment_id,
    //   label: name,
    //   unit_id,
    //   unit_name
    // })

    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const treatmentCreate = ({ clinic_id, name, en_name, py_code, idc_code, unit_name, remark, price, cost, status, is_discount }) => async dispatch => {
  try {
    if (price) {
      price = Math.round(price * 100)
    }
    if (cost) {
      cost = Math.round(cost * 100)
    }
    const data = await request('/treatment/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      idc_code,
      unit_name,
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
        idc_code,
        unit_name,
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
