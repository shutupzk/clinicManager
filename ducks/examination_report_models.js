import { request } from './request'
const EXAMNIATION_REPORT_MODEL_ADD = 'EXAMNIATION_REPORT_MODEL_ADD'

const initState = {
  data: [],
  page_info: {}
}

export function examinationReportModels(state = initState, action = {}) {
  switch (action.type) {
    case EXAMNIATION_REPORT_MODEL_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    default:
      return state
  }
}

export const examinationReportList = ({ keyword = '', operation_id, offset = 0, limit = 10 }) => async dispatch => {
  try {
    const data = await request('/examination/ExaminationReportModelList', {
      keyword,
      operation_id,
      offset,
      limit
    })
    console.log('ExaminationReportModelList =====', keyword, operation_id, offset, limit)
    console.log('data ======', data)
    if (data.code !== '200') return []
    let docs = data.data || []
    let page_info = data.page_info
    // let json = {}
    // for (let doc of docs) {
    //   let array = doc.items || []
    //   for (let obj of array) {
    //     json[obj.clinic_examination_id] = { ...obj, name: obj.examination_name }
    //   }
    // }
    dispatch({
      type: EXAMNIATION_REPORT_MODEL_ADD,
      data: docs,
      page_info
    })
    // dispatch({
    //   type: 'EXAM_PROJECT_ADD',
    //   data: json
    // })

    return null
  } catch (e) {
    console.log(e)
    return []
  }
}

export const examinationReportCreate = ({ model_name, operation_id, result_examination, conclusion_examination }) => async dispatch => {
  try {
    const data = await request('/examination/ExaminationReportModelCreate', {
      model_name,
      result_examination,
      operation_id,
      conclusion_examination
    })
    console.log('ExaminationReportModelCreate =====', model_name, operation_id, result_examination, conclusion_examination)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationReportModelUpdate = (requestData) => async dispatch => {
  try {
    const data = await request('/examination/ExaminationReportModelUpdate', requestData)
    console.log('ExaminationReportModelUpdate =====', requestData)
    console.log('data ======', data)
    if (data.code !== '200') return data.msg
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationReportModelDetail = ({examination_report_model_id}) => async dispatch => {
  try {
    console.log('limit====', examination_report_model_id)
    const data = await request('/examination/ExaminationReportModelDetail', {examination_report_model_id})
    console.log('ExaminationReportModelDetail=======', data)
    const docs = data.data || {}
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
export const ExaminationReportModelDelete = ({examination_report_model_id}) => async dispatch => {
  try {
    console.log('limit====', examination_report_model_id)
    const data = await request('/examination/ExaminationReportModelDelete', {examination_report_model_id})
    console.log('ExaminationReportModelDelete=======', data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}
