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
    if (result.code === '200') {
      return result.url
    } else {
      return null
    }
  } catch (e) {
    return e.message
  }
}
export const xhrFileUpload = (file, callback) => async dispatch => {
  console.log('file====', file)
  let xhr = new XMLHttpRequest()
  if (callback) {
    xhr.upload.addEventListener('progress', function (e) {
      callback('uploading', e)
    }, false)
    xhr.addEventListener('load', function (e) {
      callback('ok', e)
    }, false)
    xhr.addEventListener('error', function (e) {
      callback('error', e)
    }, false)
    xhr.addEventListener('abort', function (e) {
      callback('cancel', e)
    }, false)
  }
  xhr.open('POST', API_SERVER + '/file/upload')
  // xhr.setRequestHeader('Content-Type', 'multipart/form-data')
  xhr.send(file)
  // try {
  //   console.log('file', file)
  //   // const data = await request('/file/upload', file)
  //   // console.log('fileBack', data)
  //   // if (data.code === '200') return data.url
  //   // return null
  //   let option = {
  //     url: '/file/upload',
  //     method: 'POST',
  //     baseURL: API_SERVER,
  //     headers: {'Content-Type': 'multipart/form-data'},
  //     data: file
  //   }
  //   const data = await axios.request(option)
  //   console.log('data====', data)
  //   const result = data.data
  //   if (result.code === '200') {
  //     return result.url
  //   } else {
  //     return null
  //   }
  // } catch (e) {
  //   return e.message
  // }
}
