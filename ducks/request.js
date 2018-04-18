import axios from 'axios'
import qs from 'qs'
import { API_SERVER } from '../config'

export const request = async (url, params) => {
  const data = await axios.post(API_SERVER + '/personnel/list', qs.stringify(params))
  const result = data.data
  return result
}
