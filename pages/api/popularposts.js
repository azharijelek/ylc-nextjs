import Articles from '@/lib/Articles'

export default async function PopularPosts(req, res) {
  const { per_page, page } = await req.query

  const response = await Articles.popularPosts(per_page, page)
  const data = await response.data
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(data)
}
