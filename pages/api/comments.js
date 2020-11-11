import axios from 'axios'

export default async function Posts(req, res) {
  const params = await req.query

  const queryString = Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')

  const response = await axios
    .get(`${process.env.WP_API_URL}/ylc/v1/comments?${queryString}`)
    .then(function (response) {
      return response
    })
  const data = await response.data
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(data)
}
