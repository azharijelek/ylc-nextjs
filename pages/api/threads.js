import Articles from '@/lib/Articles'

export default async function ThreadsApi(req, res) {
  const response = await Articles.getTrendingThreads()
  const data = await response.data
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(data)
}
