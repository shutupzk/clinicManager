import { request } from './request'
const ASSOCIATION_PROJECT_ADD = 'ASSOCIATION_PROJECT_ADD'
const ASSOCIATION_ARRAY_ADD = 'ASSOCIATION_ARRAY_ADD'

const initState = {
  data: [],
  array_data: [],
  page_info: {},
  selectId: null
}

export function associations(state = initState, action = {}) {
  switch (action.type) {
    case ASSOCIATION_PROJECT_ADD:
      return { ...state, data: action.data, page_info: action.page_info }
    case ASSOCIATION_ARRAY_ADD:
      return { ...state, array_data: action.array_data, page_info: action.page_info }
    default:
      return state
  }
}

export const queryAssociationList = ({ clinic_laboratory_id }, arrayType) => async dispatch => {
  try {
    console.log('limit====', arrayType, clinic_laboratory_id)
    const data = await request('/laboratory/associationList', {
      clinic_laboratory_id
    })
    const docs = data.data || []
    // const page_info = data.page_info || {}
    // console.log('docs======', docs)
    // if (arrayType) {
    //   dispatch({
    //     type: ASSOCIATION_ARRAY_ADD,
    //     array_data: docs,
    //     page_info
    //   })
    // } else {
    //   let json = {}
    //   for (let doc of docs) {
    //     json[doc.clinic_laboratory_id] = doc
    //   }
    //   dispatch({
    //     type: ASSOCIATION_PROJECT_ADD,
    //     data: json,
    //     page_info
    //   })
    // }
    return docs
  } catch (e) {
    console.log(e)
    // return e.message
    return []
  }
}
export const LaboratoryAssociationCreate = (requestData) => async dispatch => {
  try {
    if (requestData.items) {
      for (let i = 0; i < requestData.items.length; i++) {
        requestData.items[i].clinic_laboratory_item_id = requestData.items[i].clinic_laboratory_item_id + ''
      }
      requestData.items = JSON.stringify(requestData.items)
    }
    console.log('requestData', requestData)
    const data = await request('/laboratory/association', requestData)
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
