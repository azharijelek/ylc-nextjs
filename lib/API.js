import axios from 'axios'
const host = process.env.APPHOST

export default () => {
  return axios.create({
    baseURL: process.env.WP_API_URL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: host
    }
  })
}
