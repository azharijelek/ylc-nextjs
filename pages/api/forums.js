import Articles from '@/lib/Articles'

export default async function Posts(req, res) {
  const params = await req.query

  const queryString = Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')

  const response = await Articles.getForums(queryString)
  const data = await response.data
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(data)
}
