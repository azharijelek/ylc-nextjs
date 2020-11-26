import Articles from '@/lib/Articles'

export default async function forumTopics(req, res) {
  const params = await req.query
  const slug = params['slug']
  console.log(slug)

  const response = await Articles.getTopics(slug)
  const data = await response.data
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(data)
}
