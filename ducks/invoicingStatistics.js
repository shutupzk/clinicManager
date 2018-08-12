import { request } from './request'
const DRUG_INSTOCK_STATISTICS = 'DRUG_INSTOCK_STATISTICS'
const DRUG_OUTSTOCK_STATISTICS = 'DRUG_OUTSTOCK_STATISTICS'
const DRUG_INVOICING_STATISTICS = 'DRUG_INVOICING_STATISTICS'
const MATERIAL_INSTOCK_STATISTICS = 'MATERIAL_INSTOCK_STATISTICS'
const MATERIAL_OUTSTOCK_STATISTICS = 'MATERIAL_OUTSTOCK_STATISTICS'
const MATERIAL_INVOICE_STATISTICS = 'MATERIAL_INVOICE_STATISTICS'

const initState = {
  dis_data: [],
  dis_page_info: {},
  dos_data: [],
  dos_page_info: {},
  div_data: [],
  div_page_info: {},
  mis_data: [],
  mis_page_info: {},
  mos_data: [],
  mos_page_info: {},
  miv_data: [],
  miv_page_info: {}
}

export function invoicingStatistics(state = initState, action = {}) {
  switch (action.type) {
    case DRUG_INSTOCK_STATISTICS:
      return { ...state, dis_data: action.dis_data, dis_page_info: action.dis_page_info }
    case DRUG_OUTSTOCK_STATISTICS:
      return { ...state, dos_data: action.dos_data, dos_page_info: action.dos_page_info }
    case DRUG_INVOICING_STATISTICS:
      return { ...state, div_data: action.div_data, div_page_info: action.div_page_info }
    case MATERIAL_INSTOCK_STATISTICS:
      return { ...state, mis_data: action.mis_data, mis_page_info: action.mis_page_info }
    case MATERIAL_OUTSTOCK_STATISTICS:
      return { ...state, mos_data: action.mos_data, mos_page_info: action.mos_page_info }
    case MATERIAL_INVOICE_STATISTICS:
      return { ...state, miv_data: action.miv_data, miv_page_info: action.miv_page_info }
    default:
      return state
  }
}

export const DrugInstockStatistics = (reqData) => async dispatch => {
  try {
    const data = await request('/invoicingStatistics/DrugInstockStatistics', reqData)
    const docs = data.data || []
    const dis_page_info = data.page_info || {}
    dispatch({
      type: DRUG_INSTOCK_STATISTICS,
      dis_data: docs,
      dis_page_info
    })
    console.log('DrugInstockStatistics====', data)
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const DrugOutstockStatistics = (reqData) => async dispatch => {
  try {
    const data = await request('/invoicingStatistics/DrugOutstockStatistics', reqData)
    const docs = data.data || []
    const dos_page_info = data.page_info || {}
    dispatch({
      type: DRUG_OUTSTOCK_STATISTICS,
      dos_data: docs,
      dos_page_info
    })
    console.log('DrugOutstockStatistics====', data)
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const DrugInvoicingStatistics = (reqData) => async dispatch => {
  try {
    const data = await request('/invoicingStatistics/DrugInvoicingStatistics', reqData)
    const docs = data.data || []
    const div_page_info = data.page_info || {}
    dispatch({
      type: DRUG_INVOICING_STATISTICS,
      div_data: docs,
      div_page_info
    })
    console.log('DrugInvoicingStatistics====', data)
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const MaterialInstockStatistics = (reqData) => async dispatch => {
  try {
    const data = await request('/invoicingStatistics/MaterialInstockStatistics', reqData)
    const docs = data.data || []
    const mis_page_info = data.page_info || {}
    dispatch({
      type: MATERIAL_INSTOCK_STATISTICS,
      mis_data: docs,
      mis_page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const MaterialOutstockStatistics = (reqData) => async dispatch => {
  try {
    const data = await request('/invoicingStatistics/MaterialOutstockStatistics', reqData)
    const docs = data.data || []
    const mos_page_info = data.page_info || {}
    dispatch({
      type: MATERIAL_OUTSTOCK_STATISTICS,
      mos_data: docs,
      mos_page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const MaterialInvoicingStatistics = (reqData) => async dispatch => {
  try {
    const data = await request('/invoicingStatistics/MaterialInvoicingStatistics', reqData)
    const docs = data.data || []
    const miv_page_info = data.page_info || {}
    dispatch({
      type: MATERIAL_INVOICE_STATISTICS,
      miv_data: docs,
      miv_page_info
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
