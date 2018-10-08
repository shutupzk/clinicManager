import axios from 'axios'
import qs from 'qs'
import { API_SERVER } from '../config'

export const request = async (url, params, isJson) => {
  let json = {}
  for (let key in params) {
    if (params[key] !== undefined) {
      json[key] = params[key]
    }
  }
  if (isJson) {
    let option = {
      url: url,
      method: 'POST',
      baseURL: API_SERVER,
      headers: {'Content-Type': 'application/json'},
      data: json
    }
    const data = await axios.request(option)
    const result = data.data
    return result
  } else {
    // console.log('json ========', API_SERVER + url, json)
    const data = await axios.post(API_SERVER + url, qs.stringify(json))
    const result = data.data
    return result
  }
}
