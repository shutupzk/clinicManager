import { request } from './request'
const MATERIAL_PROJECT_ADD = 'MATERIAL_PROJECT_ADD'

const initState = {
  data: [],
  page_info: {},
  selectId: null
}

export function materials(state = initState, action = {}) {
  switch (action.type) {
    case MATERIAL_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryMaterialList = ({ clinic_id, keyword, status, offset = 0, limit = 6 }) => async dispatch => {
  try {
    console.log('limit====', limit)
    const data = await request('/material/list', {
      clinic_id,
      keyword,
      offset,
      limit,
      status
    })
    const docs = data.data || []
    const page_info = data.page_info || {}
    dispatch({
      type: MATERIAL_PROJECT_ADD,
      data: docs,
      page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const materialCreate = ({
  clinic_id,
  name,
  en_name,
  py_code,
  idc_code,
  unit_id,
  remark,
  manu_factory,
  specification,
  price,
  cost,
  status,
  is_discount,
  eff_day,
  stock_warning
}) => async dispatch => {
  try {
    const data = await request('/material/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      idc_code,
      unit_id,
      remark,
      manu_factory,
      specification,
      price,
      cost,
      status,
      is_discount,
      eff_day,
      stock_warning
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
        manu_factory,
        specification,
        price,
        cost,
        status,
        is_discount,
        eff_day,
        stock_warning
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
