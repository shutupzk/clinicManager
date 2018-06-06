// import { request } from './request'
import axios from 'axios'
// import qs from 'qs'
import { API_SERVER } from '../config'

export const FileUpload = (file) => async dispatch => {
  try {
    console.log('file', file)
    // const data = await request('/file/upload', file)
    // console.log('fileBack', data)
    // if (data.code === '200') return data.url
    // return null
    let option = {
      url: '/file/upload',
      method: 'POST',
      baseURL: API_SERVER,
      headers: {'Content-Type': 'multipart/form-data'},
      data: file
    }
    const data = await axios.request(option)
    console.log('data====', data)
    const result = data.data

    return result
  } catch (e) {
    return e.message
  }
}
