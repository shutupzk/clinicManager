import { request } from './request'
const DRUG_PROJECT_ADD = 'DRUG_PROJECT_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function drugs(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryDrugList = ({ clinic_id, type, keyword, drug_class_id, status, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/drug/list', {
      clinic_id,
      type,
      keyword,
      drug_class_id,
      status,
      offset,
      limit
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: DRUG_PROJECT_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const drugCreate = ({ clinic_id, type, barcode, name, py_code, print_name, specification, manu_factory, status, license_no, dose_form_id, drug_class_id }) => async dispatch => {
  try {
    const data = await request('/drug/create', { clinic_id, type, barcode, name, py_code, print_name, specification, manu_factory, status, license_no, dose_form_id, drug_class_id })
    console.log(
      {
        clinic_id,
        type,
        barcode,
        name,
        py_code,
        print_name,
        specification,
        manu_factory,
        status,
        license_no,
        dose_form_id,
        drug_class_id
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
