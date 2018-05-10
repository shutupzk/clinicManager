import { request } from './request'
const TREATMENT_PROJECT_ADD = 'TREATMENT_PROJECT_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function treatments(state = initState, action = {}) {
  switch (action.type) {
    case TREATMENT_PROJECT_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    default:
      return state
  }
}

export const queryTreatmentList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/treatment/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    let json = {}
    let unitJson = {}
    for (let doc of docs) {
      json[doc.clinic_treatment_id] = doc
      const { unit_id, unit_name } = doc
      unitJson[doc.unit_id] = { id: unit_id, name: unit_name }
    }
    dispatch({
      type: TREATMENT_PROJECT_ADD,
      data: json
    })

    dispatch({
      type: 'DOSE_UNIT_ADD',
      data: unitJson
    })

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

export const treatmentCreate = ({ clinic_id, name, en_name, py_code, idc_code, unit_id, remark, price, cost, status, is_discount }) => async dispatch => {
  try {
    const data = await request('/treatment/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      idc_code,
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
        idc_code,
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
