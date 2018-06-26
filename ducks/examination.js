import { request } from './request'
const EXAM_PROJECT_ADD = 'EXAM_PROJECT_ADD'
const EXAM_ARRAY_ADD = 'EXAM_ARRAY_ADD'
const EXAM_BASE_ARRAY_ADD = 'EXAM_BASE_ARRAY_ADD'

const initState = {
  data: {},
  array_data: [],
  exams: [],
  page_info: {},
  selectId: null
}

export function examinations(state = initState, action = {}) {
  switch (action.type) {
    case EXAM_PROJECT_ADD:
      return { ...state, data: { ...state.data, ...action.data } }
    case EXAM_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    case EXAM_BASE_ARRAY_ADD:
      return { ...state, exams: action.data }
    default:
      return state
  }
}

export const queryExaminationList = (requestData, arrayType) => async dispatch => {
  try {
    console.log('limit====', requestData)
    const data = await request('/examination/list', requestData)
    console.log('data=====', data)
    const docs = data.data || []
    const page_info = data.page_info || {}
    if (arrayType) {
      dispatch({
        type: EXAM_ARRAY_ADD,
        array_data: docs,
        page_info
      })
    } else {
      let json = {}
      let organ = {}
      for (let doc of docs) {
        json[doc.clinic_examination_id] = doc
        // json[doc.name] = doc
        organ[doc.organ] = { name: doc.organ }
      }
      dispatch({
        type: EXAM_PROJECT_ADD,
        data: json,
        page_info
      })
      dispatch({
        type: 'EXAMINATION_ORGAN_ADD',
        data: organ
      })
    }
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}

export const examinationCreate = ({ clinic_id, name, en_name, py_code, idc_code, unit_name, organ, remark, price, cost, status, is_discount }) => async dispatch => {
  try {
    if (price) {
      price = Math.round(price * 100)
    }
    if (cost) {
      cost = Math.round(cost * 100)
    }

    console.log('price, cost', price, cost)

    const data = await request('/examination/create', {
      clinic_id,
      name,
      en_name,
      py_code,
      idc_code,
      unit_name,
      organ,
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
        organ,
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
export const ExaminationUpdate = (requestData) => async dispatch => {
  try {
    if (requestData.price) {
      requestData.price = Math.round(requestData.price * 100)
    }
    if (requestData.cost) {
      requestData.cost = Math.round(requestData.cost * 100)
    }

    console.log('price, cost', requestData.price, requestData.cost)

    const data = await request('/examination/update', requestData)
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

export const ExaminationOnOff = requestData => async dispatch => {
  try {
    const data = await request('/examination/onOff', requestData)
    console.log(requestData, data)
    if (data.code === '200') return null
    return data.msg
  } catch (e) {
    console.log(e)
    return e.message
  }
}
export const ExaminationDetail = ({clinic_examination_id}) => async dispatch => {
  try {
    console.log('limit====', clinic_examination_id)
    const data = await request('/examination/detail', {clinic_examination_id})
    console.log('ExaminationDetail=======', data)
    const docs = data.data || {}
    // let array_data = []
    // array_data.push(docs)
    dispatch({
      type: EXAM_PROJECT_ADD,
      data: docs
    })
    // let unitJson = {}
    // let sample_data = {}
    // let color_data = {}
    // const {unit_name} = docs[0]
    // if (unit_name) unitJson[unit_name] = { name: unit_name }
    // dispatch({ type: 'DOSE_UNIT_ADD', data: unitJson })
    // if (laboratory_sample) sample_data[laboratory_sample] = {name: laboratory_sample}
    // if (cuvette_color_name) color_data[cuvette_color_name] = {name: cuvette_color_name}
    // dispatch({ type: 'LABORATORY_SAMPLE_LIST', data: sample_data })
    // dispatch({ type: 'CUVETTE_COLOR_LIST', data: color_data })
    return docs
  } catch (e) {
    console.log(e)
    return {} // e.message
  }
}

export const queryExams = ({ keyword }) => async dispatch => {
  try {
    const data = await request('/dictionaries/Examinations', { keyword, offset: 0, limit: 10 })
    console.log('data=====', data)
    const docs = data.data || []
    dispatch({
      type: EXAM_BASE_ARRAY_ADD,
      data: docs
    })
    return null
  } catch (e) {
    console.log(e)
    return e.message
  }
}
