import axios from 'axios'
import qs from 'qs'
import { API_SERVER } from '../config'

export const request = async (url, params, isJson) => {
  if (isJson) {
    let option = {
      url: url,
      method: 'POST',
      baseURL: API_SERVER,
      headers: {'Content-Type': 'application/json'},
      data: params
    }
    const data = await axios.request(option)
    const result = data.data
    return result
  } else {
    const data = await axios.post(API_SERVER + url, qs.stringify(params))
    const result = data.data
    return result
  }
}
