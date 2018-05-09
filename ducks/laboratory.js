import { request } from './request'
const LABORATORY_PROJECT_ADD = 'LABORATORY_PROJECT_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function laboratories(state = initState, action = {}) {
  switch (action.type) {
    case LABORATORY_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryLaboratoryList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/laboratory/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    console.log('docs======', docs)
    dispatch({
      type: LABORATORY_PROJECT_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const laboratoryCreate = ({
  clinic_id,
  name,
  en_name,
  py_code,
  idc_code,
  unit_id,
  time_report,
  clinical_significance,
  remark,
  laboratory_sample_id,
  cuvette_color_id,
  merge_flag,
  cost,
  price,
  status,
  is_discount,
  is_delivery
}) => async dispatch => {
  try {
    const data = await request('/laboratory/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      idc_code,
      unit_id,
      time_report,
      clinical_significance,
      remark,
      laboratory_sample_id,
      cuvette_color_id,
      merge_flag,
      cost,
      price,
      status,
      is_discount,
      is_delivery
    })
    console.log(
      {
        clinic_id,
        name,
        en_name,
        py_code,
        idc_code,
        unit_id,
        time_report,
        clinical_significance,
        remark,
        laboratory_sample_id,
        cuvette_color_id,
        merge_flag,
        cost,
        price,
        status,
        is_discount,
        is_delivery
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
