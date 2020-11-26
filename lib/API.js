import axios from 'axios'
const host = process.env.APPHOST

export default () => {
  return axios.create({
    baseURL: process.env.WP_API_URL, //localhost:8080/wp-json/ : prod: azhdev.com.au/wp-json/
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: host
    }
  })
}
