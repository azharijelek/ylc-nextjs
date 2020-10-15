import useSWR from 'swr'
import PostGrid from '@/components/postswidget/PostGrid'

// function removeDomain(str) {
//   return str.replace(/^.*\/\/[^\/]+/, '')
// }

export default function RecentNews(props) {
  const params = props

  //const url = process.env.WP_API_URL+`/posts?offset=${offset}&per_page=${per_page}&page=${paged}&show_categories=${show_categories}`
  const queryString = Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')

  const url = process.env.WP_API_URL + `/ylc/v1/posts?${queryString}`
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div className="px-4">failed to load</div>
  if (!data)
    return (
      <>
        <div className="px-4">Loading...</div>
        <style jsx>{`
          .px-4 {
            padding-left: 16px;
            padding-right: 16px;
          }
        `}</style>
      </>
    )
  // return (
  //     <>
  //         <pre>
  //             {JSON.stringify(data, null, 2)}
  //             {JSON.stringify(params, null, 2)}
  //         </pre>
  //     </>
  // )
  return (
    <>
      {data.length > 0 &&
        data.map((post) => (
          <div className="post-grid--item" key={'slider-' + post.id}>
            <PostGrid
              id={post.id}
              title={post.title}
              thumbnail={post.featured_img}
              permalink={process.env.APPHOST + post.slug}
              categories={post.categories}
              key={'post-' + post.id}
            />
          </div>
        ))}

      <style jsx>{`
        .post-grid--item {
          width: 80%;
          flex: 0 0 auto;
          padding: 0 15px 0 0;
          &:first-of-type {
            padding-left: 15px;
          }
        }
      `}</style>
    </>
  )
}
